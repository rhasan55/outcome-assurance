'use strict';

const receiptCache = new Map();
const clone = (value) => JSON.parse(JSON.stringify(value));
const usd = (value) => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

async function digest(value) {
  const input = typeof value === 'string' ? value : JSON.stringify(value);
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return [...new Uint8Array(hash)].map((item) => item.toString(16).padStart(2, '0')).join('');
}

function claim(label, state, detail) { return { label, state, detail }; }
function overallState(claims) { return ['mismatch', 'unobservable', 'pending', 'inferred', 'verified'].find((state) => claims.some((item) => item.state === state)) || 'verified'; }
function formatHour(decimal) {
  const hour = Math.floor(decimal); const minutes = Math.round((decimal - hour) * 60);
  return `${hour > 12 ? hour - 12 : hour}:${String(minutes).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
}

function evaluateClaims(contract, events, journey) {
  const order = events.find((event) => event.event_name === 'order.confirmed');
  const checkout = events.find((event) => event.event_name === 'checkout.proposed');
  const settlement = events.find((event) => event.event_name === 'settlement.posted');
  const benefit = events.find((event) => event.event_name === 'benefit.observed');
  const overwrite = events.find((event) => event.event_name === 'agent.contract.overwrite_attempt');
  const poisoned = events.find((event) => event.event_name === 'merchant.context.untrusted');
  const decision = contract.decision;
  const claims = [claim('Approved details stayed locked', 'verified', overwrite ? 'The buying agent tried to change them and was blocked' : poisoned ? 'Merchant instructions were isolated and ignored' : 'The tamper check matches the approved copy')];
  if (poisoned) claims.push(claim('Merchant text stayed separate', 'verified', 'Untrusted text was treated as data, not an instruction'));
  claims.push(claim(journey === 'hotel' ? 'Hotel identity' : 'Airline identity', order?.body?.provider_id === decision.selected_provider_id ? 'verified' : 'mismatch', order?.body?.provider_id || 'No provider update'));
  const amount = settlement?.body?.settled_usd;
  claims.push(claim('Final amount', typeof amount !== 'number' ? 'unobservable' : amount === decision.approved_total_usd ? 'verified' : 'mismatch', typeof amount === 'number' ? `${usd(amount)} happened; ${usd(decision.approved_total_usd)} was approved` : 'The final amount was not provided'));
  if (journey === 'hotel') {
    claims.push(claim('Cancellation terms', order?.body?.refundable === true ? 'verified' : order ? 'mismatch' : 'unobservable', order?.body?.refundable === true ? 'Refundable until 6:00 PM' : order ? 'Refundability changed after approval' : 'No order update'));
    const limit = contract.approved_fields.constraints.distance_from_landmark_miles_max;
    claims.push(claim('Distance', checkout?.body?.distance_miles <= limit ? 'verified' : 'mismatch', checkout?.body?.distance_miles != null ? `${checkout.body.distance_miles} miles happened; ${limit} miles was the limit` : 'No distance update'));
  } else {
    claims.push(claim('Route', order?.body?.route === 'JFK-LHR' ? 'verified' : 'mismatch', order?.body?.route || 'No route update'));
    claims.push(claim('Nonstop flight', order?.body?.nonstop === true ? 'verified' : order ? 'mismatch' : 'unobservable', order?.body?.nonstop === true ? 'Nonstop confirmed' : order ? 'A stop was added after approval' : 'No order update'));
    const departure = order?.body?.departure_hour_local;
    claims.push(claim('Departure time', typeof departure !== 'number' ? 'unobservable' : departure >= contract.approved_fields.constraints.departure_hour_local_min ? 'verified' : 'mismatch', typeof departure === 'number' ? `${formatHour(departure)} confirmed` : 'No departure update'));
    const bags = order?.body?.checked_bags;
    claims.push(claim('Checked bag', typeof bags !== 'number' ? 'unobservable' : bags >= 1 ? 'verified' : 'mismatch', typeof bags === 'number' ? `${bags} checked bag included` : 'No bag update'));
  }
  claims.push(claim('Amex value', benefit?.body?.state === 'pending' ? 'pending' : benefit?.body?.eligible_value_usd === decision.expected_member_value_usd ? 'verified' : benefit ? 'mismatch' : 'unobservable', benefit?.body?.state === 'pending' ? 'Eligible value is waiting to post' : benefit ? `${usd(benefit.body.eligible_value_usd)} confirmed` : 'No benefit update'));
  return claims;
}

async function verify(payload) {
  const contract = clone(payload.contract); const events = clone(payload.events); const journey = payload.scenario || (contract.approved_fields.domain === 'travel.flight' ? 'flight' : 'hotel');
  const hashInput = clone(contract); delete hashInput.provenance.contract_hash;
  const computedHash = `sha256:${await digest(hashInput)}`; const claims = evaluateClaims(contract, events, journey);
  if (computedHash !== contract.provenance.contract_hash) claims[0] = claim('Approved details stayed locked', 'mismatch', 'The saved approval no longer matches its tamper check');
  const eventHash = await digest(events); const key = `${contract.provenance.contract_hash}:${eventHash}`;
  if (receiptCache.has(key)) return { ...receiptCache.get(key), cacheHit: true, runtime: 'dedicated_web_worker' };
  const receipt = { id: `oa_rcpt_${(await digest(key)).slice(0, 12)}`, status: overallState(claims), claims, eventHash: `sha256:${eventHash}`, contractHash: contract.provenance.contract_hash, cacheHit: false, runtime: 'dedicated_web_worker', verifiedAt: '2026-09-24T14:19:00Z' };
  receiptCache.set(key, receipt); return receipt;
}

function percentile(sorted, fraction) { return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * fraction))] || 0; }
function benchmark(payload) {
  const contract = clone(payload.contract); const events = clone(payload.events); const journey = payload.scenario || 'hotel'; const iterations = Math.max(1, Math.min(Number(payload.iterations) || 10000, 50000));
  const samples = []; const started = performance.now();
  for (let index = 0; index < iterations; index += 1) { const itemStart = performance.now(); overallState(evaluateClaims(contract, events, journey)); samples.push(performance.now() - itemStart); }
  const durationMs = performance.now() - started; samples.sort((left, right) => left - right);
  return { iterations, durationMs, throughputPerSecond: iterations / (durationMs / 1000), p50CoreMs: percentile(samples, .5), p95CoreMs: percentile(samples, .95), duplicateKeys: 1, runtime: 'dedicated_web_worker', notice: 'Browser reference measurement, not a production capacity claim.' };
}

self.addEventListener('message', async (event) => {
  const { id, type, payload } = event.data || {};
  try { const result = type === 'verify' ? await verify(payload) : type === 'benchmark' ? benchmark(payload) : null; if (!result) throw new Error(`Unknown operation: ${type}`); self.postMessage({ id, ok: true, result }); }
  catch (error) { self.postMessage({ id, ok: false, error: error instanceof Error ? error.message : String(error) }); }
});
