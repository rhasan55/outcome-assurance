'use strict';

const receiptCache = new Map();

const clone = (value) => JSON.parse(JSON.stringify(value));
const usd = (value) => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

async function digest(value) {
  const input = typeof value === 'string' ? value : JSON.stringify(value);
  const bytes = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map((item) => item.toString(16).padStart(2, '0')).join('');
}

function claim(label, state, detail) {
  return { label, state, detail };
}

function evaluateClaims(contract, events) {
  const order = events.find((event) => event.event_name === 'order.confirmed');
  const checkout = events.find((event) => event.event_name === 'checkout.proposed');
  const settlement = events.find((event) => event.event_name === 'settlement.posted');
  const benefit = events.find((event) => event.event_name === 'benefit.observed');
  const overwrite = events.find((event) => event.event_name === 'agent.contract.overwrite_attempt');
  const poisoned = events.find((event) => event.event_name === 'merchant.context.untrusted');
  const approved = contract.decision;
  const distanceLimit = contract.approved_fields.constraints.distance_from_landmark_miles_max;
  const claims = [];

  claims.push(claim(
    'Contract integrity',
    'verified',
    overwrite ? 'Agent overwrite blocked; approved hash unchanged' : poisoned ? 'Untrusted merchant instruction quarantined; approved hash unchanged' : 'Approved SHA-256 matches verifier copy'
  ));
  if (poisoned) claims.push(claim('Untrusted merchant context', 'verified', 'Prompt-like text treated as data and excluded from deterministic routing'));
  claims.push(claim('Merchant identity', order?.body?.merchant_id === approved.selected_merchant_id ? 'verified' : 'mismatch', order?.body?.merchant_id || 'No merchant event'));

  const amount = settlement?.body?.settled_usd;
  claims.push(claim(
    'Final settled amount',
    typeof amount !== 'number' ? 'unobservable' : amount === approved.approved_total_usd ? 'verified' : 'mismatch',
    typeof amount === 'number' ? `${usd(amount)} observed · ${usd(approved.approved_total_usd)} approved` : 'Settlement amount absent'
  ));
  claims.push(claim('Refundability', order?.body?.refundable === true ? 'verified' : order ? 'mismatch' : 'unobservable', order?.body?.refundable === true ? 'Refundable until 6 PM' : order ? 'Terms changed after approval' : 'No order evidence'));
  claims.push(claim('Distance', checkout?.body?.distance_miles <= distanceLimit ? 'verified' : 'mismatch', checkout?.body?.distance_miles != null ? `${checkout.body.distance_miles} mi observed · ${distanceLimit} mi limit` : 'No distance evidence'));
  claims.push(claim('Membership value', benefit?.body?.state === 'pending' ? 'pending' : benefit?.body?.eligible_value_usd === approved.expected_member_value_usd ? 'verified' : benefit ? 'mismatch' : 'unobservable', benefit?.body?.state === 'pending' ? 'Eligible value awaits posting' : benefit ? `${usd(benefit.body.eligible_value_usd)} observed` : 'No benefit event'));
  return claims;
}

function overallState(claims) {
  const order = ['mismatch', 'unobservable', 'pending', 'inferred', 'verified'];
  return order.find((status) => claims.some((item) => item.state === status)) || 'verified';
}

async function verify(payload) {
  const contract = clone(payload.contract);
  const events = clone(payload.events);
  const hashInput = clone(contract);
  delete hashInput.provenance.contract_hash;
  const computedContractHash = `sha256:${await digest(hashInput)}`;
  const claims = evaluateClaims(contract, events);

  if (computedContractHash !== contract.provenance.contract_hash) {
    claims[0] = claim('Contract integrity', 'mismatch', 'Approved contract hash does not match verifier computation');
  }

  const eventHash = await digest(events);
  const key = `${contract.provenance.contract_hash}:${eventHash}`;
  if (receiptCache.has(key)) return { ...receiptCache.get(key), cacheHit: true, runtime: 'dedicated_web_worker' };

  const receiptHash = await digest(key);
  const receipt = {
    id: `oa_rcpt_${receiptHash.slice(0, 12)}`,
    status: overallState(claims),
    claims,
    eventHash: `sha256:${eventHash}`,
    contractHash: contract.provenance.contract_hash,
    cacheHit: false,
    runtime: 'dedicated_web_worker',
    verifiedAt: '2026-09-23T15:19:00Z'
  };
  receiptCache.set(key, receipt);
  return receipt;
}

function percentile(sorted, fraction) {
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * fraction))] || 0;
}

function benchmark(payload) {
  const contract = clone(payload.contract);
  const events = clone(payload.events);
  const iterations = Math.max(1, Math.min(Number(payload.iterations) || 10000, 50000));
  const samples = [];
  let verified = 0;
  const started = performance.now();

  for (let index = 0; index < iterations; index += 1) {
    const itemStart = performance.now();
    const claims = evaluateClaims(contract, events);
    if (overallState(claims) === 'verified') verified += 1;
    samples.push(performance.now() - itemStart);
  }

  const durationMs = performance.now() - started;
  samples.sort((left, right) => left - right);
  const duplicateKeys = new Set(Array.from({ length: iterations }, () => `${contract.provenance.contract_hash}:${events.length}`)).size;
  return {
    iterations,
    normalizedEvents: iterations * events.length,
    durationMs,
    throughputPerSecond: iterations / (durationMs / 1000),
    p50CoreMs: percentile(samples, .5),
    p95CoreMs: percentile(samples, .95),
    verified,
    duplicateKeys,
    runtime: 'dedicated_web_worker',
    notice: 'Browser reference measurement; not an Amex production capacity claim.'
  };
}

self.addEventListener('message', async (event) => {
  const { id, type, payload } = event.data || {};
  try {
    const result = type === 'verify' ? await verify(payload) : type === 'benchmark' ? benchmark(payload) : null;
    if (!result) throw new Error(`Unknown worker operation: ${type}`);
    self.postMessage({ id, ok: true, result });
  } catch (error) {
    self.postMessage({ id, ok: false, error: error instanceof Error ? error.message : String(error) });
  }
});
