# Outcome Assurance: Evidence-Adjusted Hackathon Assessment

Assessment date: September 24, 2026

Scope: the live browser prototype, its source artifacts, fixed test fixtures, the original 16-page strategy PDF, and the supplied reference photographs.

Standard: score only what is demonstrated or inspectable. Do not award points for roadmap claims.

## Executive verdict

**Current evidence-adjusted hackathon score: 90/100.**

This is a strong, differentiated, working prototype with a credible Amex-specific thesis. It is above the level of an animation mockup because the contract, regret decision, Membership routing, protocol normalization, dedicated-worker verifier, live failure injection, receipt, downloadable proof bundle, measured replay, value model, and benchmark all run in the browser. **The 90/100 is a hack-readiness score, not a production-readiness claim.**

The concept is defensible as a hackathon winner if the team demonstrates the executable path and states the limits plainly. Four material production claims remain unproven:

1. No ACE-informed product or engineering owner has validated the boundary.
2. No Membership, Servicing, Merchant/ETS, Risk, Privacy, or Compliance owner is documented as a contributor or reviewer.
3. No real Amex event integration or production-grade load test exists; the measured replay is only a browser reference.
4. The editable business model is not populated with an internally validated baseline.

The best pitch is therefore: **“Here is a working decision-and-proof layer that is designed to sit beside ACE. Here is what it proves today, here is what remains synthetic, and here is the lowest-risk path to validate it.”**

## Weighted score

| Criterion | Weight | Score | Evidence for the score | Main deduction |
| --- | ---: | ---: | --- | --- |
| Feasibility & scalability | 30 | **27** | Deterministic policy path, schema-bound contract, dedicated-worker verifier, hash recomputation, idempotency, 3 adapters, context quarantine, measured 10,000-evaluation replay, access policy, and shadow rollout | Browser isolation is not deployed service/IAM isolation; no real Amex events or production load/error test |
| Innovation | 30 | **28** | Portable approved outcomes + decision-regret clarification + deterministic Membership routing + independent post-purchase proof + living recovery evidence now run across hotel and flight paths | The individual primitives are established; novelty depends on the composed outcome layer and experience |
| Business-unit value | 30 | **26** | Clear reuse across Card Members, Membership, Servicing, Merchants/ETS, Risk, and partner channels; external demand evidence, transparent economics, and measurable hotel-pilot gates | No named Amex owner validation, approved internal baseline, or pilot commitment |
| Hack completeness | 10 | **9** | Two live end-to-end paths, inspectable JSON, 3 adapters, 7 failure conditions, worker verifier, replay, downloadable proof, editable value model, and frozen test set | Still a synthetic front-end reference implementation with no live backend or recorded demo |
| **Total** | **100** | **90** | Winner-caliber working hack with explicit evidence and limits | Production and stakeholder validation remain the limiting factors |

## Prototype verification record

Final browser QA was run against the exact deployable bundle on September 24, 2026.

| Test | Observed result | Interpretation |
| --- | --- | --- |
| Staged review | 3 visible phases before the regret question | The wait explains extraction, regret testing, and evidence binding instead of jumping to an answer |
| Hotel decision | 1-mile answer selected The Pendry and showed a $21 next-best effective-cost delta | The ambiguity changes the winner; Membership value participates in code |
| Flight decision | 10:00 AM answer selected Delta 1; the term-change test detected that a stop was added | The second domain has its own request, question, ranking, approval, and proof |
| Worker isolation | Receipt reported `Dedicated worker`; worker recomputed the approved hash | Real browser execution boundary, but not production IAM/service isolation |
| Idempotency | Exact replay returned the same receipt with “no duplicate action” | Demonstrates deterministic replay behavior in one runtime |
| Failure injection | Hidden fee, refundability change, missing amount, pending benefit, overwrite attempt, and merchant prompt injection all produced the intended distinct state | Claim semantics are executable rather than slideware |
| Protocol adapters | AP2, UCP, and ACP each normalized to the same seven-event model and verified cleanly | Shows complementarity; fixtures are not live partner integrations |
| Browser replay | 10,000 evaluations; final QA observed 32,765 evaluations/s and 0.100 ms p95 core time with one repeat key | Reproducible local reference only; not a capacity or production-latency claim |
| OutcomeBench | 95.8% classification, 90.0% violation detection, 87.5% bundled reference-split accuracy | Synthetic evidence with a small sample and visible reference split |
| Accessibility/responsive | One H1, zero duplicate IDs, zero unlabeled form controls, no overflow at 390 px | Static/browser evidence of baseline interface quality, not a formal accessibility audit |
| Runtime health | No browser console errors or warnings after full journey | Clean tested path on the supported local bundle |

## 1. Feasibility & scalability — 27/30

### What is feasible now

- The outcome contract is a versioned, machine-readable JSON object with a schema ID, approved fields, evidence policy, observability policy, provenance, and hash.
- The natural-language layer proposes structure; deterministic code handles monetary limits, eligibility, ranking, question policy, and evidence verdicts.
- The purchasing path and verification path are separated. The buying agent receives a read-only contract; a dedicated Web Worker evaluates cloned input and independently recomputes the approved hash.
- The verifier is idempotent: replaying the same contract and normalized event log returns the same receipt key without a second side effect.
- AP2, UCP, and ACP are treated as event sources through adapters, not as competing inventions.
- Untrusted merchant free text is quarantined, structured event fields are allowlisted, and the policy forbids context from changing the approved contract.
- A repeatable 10,000-evaluation browser replay measures core p50/p95 time, throughput, event count, and duplicate-key behavior while remaining explicitly labeled as non-production evidence.
- The rollout begins with replay and shadow mode before any customer-facing intervention.

### Why the architecture can scale in principle

The production form should be a stateless decision/verifier tier plus durable, append-only storage:

1. Partition requests and events by `contract_id`.
2. Accept at-least-once delivery and deduplicate by event ID + contract hash.
3. Keep contract registry reads cacheable and immutable by version.
4. Keep the verifier horizontally scalable and free of buying-agent write authority.
5. Store receipts and evidence hashes separately from agent-controlled systems.
6. Use backpressure and dead-letter handling for missing, late, or malformed events.
7. Separate hot operational evidence from longer-term retained proof according to approved policy.

This is a standard scalable systems shape. The challenge is integration and governance, not a novel distributed-systems primitive.

### Control, compliance, and brand strengths

- Explicit evidence states prevent “pending,” “inferred,” and “unobservable” from being displayed as “verified.”
- Approved fields and a bound hash establish what the Member actually authorized.
- The verifier cannot rewrite the contract it grades.
- Recovery creates an evidence package; it does **not** autonomously dispute, refund, or promise coverage.
- Weakly observable subjective claims remain labeled as limitations.
- Shadow mode allows measurement before customer action.
- The recovery bundle exports the approved contract, event log, independent receipt, access policy, and recovery policy without autonomously disputing or refunding.

### Production evidence still required

- Data classification for contract fields, prompts, events, and receipts.
- PCI-scope review and confirmation that account data and credentials remain outside this service.
- OAuth/mTLS service identity, least-privilege roles, key management, access review, and revocation design.
- Retention, deletion, legal-hold, residency, and subject-access policies.
- Threat model covering replay, event forgery, agent overwrite, merchant misreporting, clock skew, and policy-version rollback.
- Load test at realistic peak event volume, including backpressure and degraded dependencies.
- Measured p50/p95/p99 latency, error budgets, fail-open/fail-closed decisions, and recovery time.
- Model-risk and change-management review for the language-to-schema compiler.

## 2. Innovation: 28/30

### The actual novelty

The novelty is not “AI guardrails,” “agent authorization,” or “a better receipt.” It is the combination of:

1. **Portable outcome semantics:** fuzzy intent becomes a versioned interface shared by people and systems.
2. **Decision-regret clarification:** the system asks only when an ambiguity can change the winning compliant outcome enough to justify interruption.
3. **Deterministic Membership routing:** the winner reflects hard constraints and provable Membership value, with a transparent next-best counterfactual.
4. **Independent proof:** post-purchase events are reconciled against the approved contract by a verifier the buying agent cannot overwrite.
5. **Living evidence:** claims can evolve from pending to verified or mismatch without rewriting history.
6. **Measured value:** success includes Verified Outcome Rate, questions per purchase, violation detection, verified value captured, and evidence completeness.

The September 2026 research makes the need concrete. [Wharton Generative AI Labs](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping/) found source order, competing context, injected memory, and tool-delivery format could shift choices across roughly 26,000 agentic-shopping tests. [Unit 42](https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/) documents indirect merchant-content injection as a commerce attack path. This prototype converts those risks into executable controls: frozen approved meaning, deterministic routing, untrusted-context quarantine, independent reconciliation, and visible recovery evidence.

### Competitive boundary

- [Amex ACE](https://www.americanexpress.com/en-us/company/agentic-commerce/) focuses on verified agents, account enablement, intent, scoped credentials, cart context, controls, and Amex-backed agentic commerce.
- [Google AP2](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md) secures checkout and payment mandates and receipts. Its specification states that how the shopping agent determines the user’s task is outside AP2’s scope.
- [Shopify UCP](https://www.shopify.com/ucp) standardizes discovery, checkout, orders, fulfillment, post-purchase, negotiation, and extensions.
- [OpenAI ACP](https://developers.openai.com/commerce) connects structured merchant catalog data and commerce experiences to ChatGPT shoppers.

Outcome Assurance should consume these rails. It should not claim ownership of identity, authorization, payment credentials, mandate signing, checkout transport, or merchant order lifecycle.

### What is not novel

- JSON Schema and contract registries.
- Rules engines and policy as code.
- Event normalization and append-only logs.
- Idempotency keys and hash-bound artifacts.
- Confidence intervals and frozen evaluation sets.
- Receipts, claims, and servicing evidence packages.

The invention claim must stay at the **composed outcome layer and its Member experience**, not at any one of those primitives.

## 3. Business-unit value: 26/30

### Card Member value

- Fewer irrelevant clarification questions.
- Fewer technically compliant but practically wrong purchases.
- Visible Membership value in the decision, not after the fact.
- Clear distinction between what is verified and what remains unknown.
- Faster, evidence-rich recovery when the observed outcome differs from the approved outcome.

### Membership and loyalty value

- Measures whether an eligible benefit or offer actually changed the best compliant outcome.
- Produces a counterfactual: selected outcome versus next-best valid alternative.
- Can surface relevant Amex Offers, travel benefits, rewards, dining inventory, and premium service as deterministic inputs when eligibility and terms are available.

### Servicing and protection value

- Gives servicing the original request, approved contract, decision rationale, normalized events, mismatch, and provenance in one package.
- Can reduce the work of reconstructing “what the Member meant” after a failure.
- Helps scope which claims are provable versus subjective or unobservable.

### Merchant, network, and ETS value

- Portable criteria can reduce interpretation drift across agent, merchant, processor, and servicing systems.
- Normalized claim evidence can improve investigation consistency.
- Adapters allow the same outcome layer to consume multiple protocol/event formats.
- The contract/verifier pattern can be reused for travel, retail, dining, servicing, and commercial procurement.

### Economic model — use parameters, not invented savings

Annual net impact should be modeled as:

`verified Membership value uplift + avoided remediation cost + retained spend/trust value - platform and operating cost`

Required internal inputs:

- Eligible agentic purchases per year.
- Current wrong-outcome, complaint, return, dispute, and manual-servicing rates.
- Average handling time and fully loaded handling cost.
- Benefit/offer breakage and successful value-realization rate.
- Conversion or abandonment response to targeted versus generic clarification.
- Incremental infrastructure, governance, and partner-integration cost.

The live calculator exposes eligible volume, avoidable wrong-outcome rate, recovery cost, value lift, and operating cost; it reports gross value, net value, and break-even lift. Defaults are explicitly illustrative. The hotel shadow-pilot gates require material-claim coverage, mismatch detection with false-intervention reporting, no more than one question per purchase without higher abandonment, and measured operations/recovery performance.

External evidence supports the problem, not the Amex-specific financial forecast. [Visa’s survey](https://corporate.visa.com/en/products/intelligent-commerce/earning-trust-report.html) covered 3,700 consumers across three markets and found nearly nine in ten wanted decision transparency, while about half would stop if control disappeared. [NMI](https://www.nmi.com/about-us/news/nmi-research-consumers-want-ai-to-help-them-shop-not-control-their-spending/) reports consumers favor shopping assistance far more than delegating final purchase control. These findings support the experience choices; internal baselines are still required to validate dollars.

### Largest business-value deduction

There is no evidence that product/process owners were consulted or are on the team. Before final judging, document at least one named signal from each of these groups:

- ACE / Digital Payments or Global Innovation.
- Membership / Offers / Travel / Resy.
- Servicing / disputes / purchase protection.
- Merchant or network / ETS integration.
- Risk, Privacy, Legal, Compliance, and model governance.

A 15-minute documented boundary review from an ACE-informed owner is more valuable than another visual feature.

## 4. Hack completeness — 9/10

### What is genuinely working

- Plain-language request to contract preview.
- One ignored ambiguity and one decision-changing ambiguity.
- Deterministic hotel and flight winners with visible next-best value logic.
- Contract approval and hash binding.
- AP2, UCP, and ACP normalized event paths.
- Clean, hidden-fee, refundability-change, missing-amount, pending-benefit, overwrite-attempt, and merchant-context-injection cases.
- Dedicated-worker claim-level receipt with verified, pending, inferred, unobservable, and mismatch states.
- Idempotent replay.
- Downloadable recovery proof bundle.
- Measured 10,000-evaluation browser replay.
- Editable value model and explicit pilot gates.
- Frozen 24-case OutcomeBench with development/reference split, baseline, failures, manifest, and uncertainty intervals.

### What remains simulated

- Language extraction uses fixed local behavior rather than a production compiler service.
- Candidate inventory, offers, eligibility, prices, and events are synthetic.
- Service separation is enforced by a dedicated worker, cloned inputs, hash recomputation, and policy—not separate deployed identities and stores.
- Protocol adapters normalize fixtures rather than live partner events.
- Verification core time is measured in the browser replay; availability and production latency targets remain proposed.
- The benchmark is small and owned by the builder team.

### Skills and dependencies

The implementation does not require rare technology. Amex can readily source skills in TypeScript/Java, JSON Schema, policy/rules engines, event streaming, API security, observability, data engineering, and web/mobile product design. The harder dependencies are organizational: access to ACE schemas and sandbox events, ownership of Membership eligibility/terms, servicing integration, data governance, and sign-off authority.

## Metric integrity

| Metric | Current prototype result | Correct interpretation | Production requirement |
| --- | ---: | --- | --- |
| Verified Outcome Rate | 95.8% | 23/24 correct classifications on frozen synthetic cases; Wilson interval is wide | Blind, externally governed holdout with real domain distributions |
| Violation detection | 90.0% | Detects 9/10 synthetic mismatches in the fixture set | Error-severity weighting, false-positive cost, and adversarial coverage |
| Questions per purchase | 0.33 | 8 questions across 24 synthetic cases | Compare to abandonment and wrong-outcome rates in shadow/advisory pilot |
| Verified value captured | $187 | Aggregate eligible synthetic value for correctly handled cases | Use actual posted benefits/offers and document valuation policy |
| Evidence completeness | 75.0% | 18/24 fixtures intentionally contain complete evidence | Measure availability by claim type and partner/domain |
| Avoidable regret | 0.0% | No required clarification was skipped in the deterministic fixture set | Calibrate question cost and regret using observed Member behavior |
| Reference-split accuracy | 87.5% | 7/8 bundled synthetic reference cases; not a blind holdout | Keep a larger externally governed holdout outside the deployable bundle |

[NIST’s January 2026 draft benchmark practices](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-2.ipd.pdf) support reporting benchmark versions, protocols, statistical uncertainty, qualified claims, and reproducibility details. The prototype follows that direction but is not large enough to establish external validity.

## Low-risk production path

### Phase 0 — Replay

Use frozen historical-like fixtures. Validate schema compatibility, deterministic replay, failure taxonomy, and observability gaps.

### Phase 1 — Shadow

Consume sandbox or mirrored events. Produce no Member-facing result and take no transaction action. Measure coverage, latency, disagreement, and missing evidence.

### Phase 2 — Advisory

Show internal decision/receipt output to trained operators. Require human confirmation for any recovery action. Record usefulness and handling-time change.

### Phase 3 — Guarded

Permit narrow, reversible controls for high-confidence, high-severity mismatches. Preserve manual override and full audit.

### Phase 4 — Scaled by domain

Expand only when a domain meets accuracy, evidence coverage, latency, false-intervention, privacy, and support-readiness gates.

## Pilot design that can prove value

Use one hotel journey first.

| Cohort | Behavior | Purpose |
| --- | --- | --- |
| Baseline | Existing agent/experience | Establish current question rate, wrong-outcome rate, and Membership value realization |
| Shadow Outcome Assurance | Contract + verifier invisible to Member | Measure observability, disagreements, coverage, and latency safely |
| Advisory Outcome Assurance | Targeted clarification + decision card + receipt | Measure Member effort, decision quality, value delta, trust, and support impact |

Primary metrics:

- Verified Outcome Rate.
- Constraint violation detection and false intervention.
- Questions per purchase and abandonment.
- Verified Value Delta.
- Evidence completeness by claim.
- Avoidable regret.
- Recovery-package completeness.
- Servicing handling time and repeat-contact rate.

Guardrails:

- No autonomous disputes or refunds.
- No action on inferred/unobservable claims.
- No production claim from synthetic benchmark results.
- No retention period without Privacy/Legal approval.
- No Membership value without eligibility and terms provenance.

## Red-team judge objections

| Objection | Defensible answer | Residual risk |
| --- | --- | --- |
| “ACE already does this.” | ACE is the trusted identity, intent, payment, and context foundation. Outcome Assurance adds decision-regret semantics, deterministic Membership choice, and independent outcome proof. | Boundary remains high-risk until validated by an ACE-informed owner. |
| “AP2/UCP/ACP already standardize this.” | They provide mandates and commerce/event rails. The prototype consumes those facts and evaluates success against a portable outcome contract. | Standards will evolve; avoid absolute novelty claims. |
| “This is just guardrails.” | Guardrails constrain permissible action. This demo compares multiple permissible choices and proves which best satisfies the approved Member outcome. | The live counterexample must be shown, not merely described. |
| “This is just a receipt.” | The artifact begins before purchase, carries approved meaning and decision proof, and evolves with post-purchase evidence. | A receipt-like visual without the earlier steps weakens the case. |
| “Synthetic data proves nothing.” | It proves executable logic, reproducibility, and failure behavior—not production impact. | External validity remains unresolved until a shadow pilot. |
| “Subjective outcomes are unverifiable.” | They stay unobservable unless converted into Member-approved measurable proxies. | Some domains will remain weakly observable. |
| “This is rewards optimization.” | The router combines hard constraints, full economics, eligibility, preferences, and verified posting, then shows the next-best counterfactual. | Benefit terms and exclusions need authoritative sources. |
| “The scope is too large.” | The hack freezes one hotel journey and uses extension points for other domains. | The team must resist adding more verticals before proving one. |
| “The LLM can poison the controls.” | The LLM proposes fields; schema validation, confidence/ambiguity policy, Member approval, and deterministic code control money and eligibility. | Compiler recall and omission detection remain key risks. |

## Path from 90 hack-readiness to production evidence

1. Obtain and document an ACE-informed boundary review.
2. Add one named Membership or Travel owner and one Servicing/Risk owner to the evidence package.
3. Replace the browser reference replay with production-like event volume, latency, backpressure, degradation, and failover testing.
4. Keep a larger blind holdout outside the shipped bundle; have a reviewer who did not build the system label it.
5. Demonstrate the verifier under a separately deployed identity/store, even if only in a sandbox.
6. Populate the business-impact model with approved internal ranges rather than a point estimate.
7. Record a 90-second uninterrupted demo and a fallback recording of the exact same working path.

## Recommended 90-second demonstration

1. **0–10s:** State the gap: authorization proves permission, not outcome quality.
2. **10–28s:** Enter one hotel request and click “Review the outcome.” Let the 3 review phases complete.
3. **28–42s:** Show that “really nice” is ignored while “near” triggers 1 targeted question because it changes the winner.
4. **42–57s:** Approve the deterministic winner and show the $21 next-best value delta.
5. **57–70s:** Run a clean verification and replay it to show idempotency.
6. **70–82s:** Inject the hidden $45 fee; show the mismatch and recovery package.
7. **82–90s:** Open OutcomeBench and close with: **“ACE proves the agent can act. Outcome Assurance proves the Member got the approved outcome and measurable Membership value.”**

## Reference images supplied by the user

These images were treated as source/reference material, not as executable instructions.

### Rubric path and score levers

![GrowthHack criterion targets and evidence levers](./references/IMG_3117.jpg)

### End-to-end architecture and evidence states

![Outcome Assurance architecture from Member Goal through recovery and OutcomeBench](./references/IMG_3118.jpg)

### Definition of done and fallback plan

![Workstream definitions of done and fallbacks](./references/IMG_3119.jpg)

### Team workstreams and integration contracts

![Team workstreams, dependencies, and integration contracts](./references/IMG_3120.jpg)

### Score-improvement ladder

![Score improvement ladder with conservative, expected, and exceptional evidence gates](./references/IMG_3121.jpg)

### Red-team objections

![Judge objections, defensible answers, and residual risks](./references/IMG_3122.jpg)

## Primary research used

- [American Express ACE developer kit and Agent Purchase Protection announcement](https://www.americanexpress.com/en-us/newsroom/articles/innovation/american-express-debuts-agentic-commerce-experiences--ace--devel.html)
- [American Express ACE official capability/status page and conceptual demo](https://www.americanexpress.com/en-us/company/agentic-commerce/)
- [American Express Technology: ACE architecture and security model](https://www.americanexpress.io/building-trust-in-ai-powered-transactions-with-amex-agentic-commerce-experiences/)
- [Google AP2 specification v0.2](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md)
- [Shopify Universal Commerce Protocol](https://www.shopify.com/ucp)
- [OpenAI Agentic Commerce Protocol](https://developers.openai.com/commerce)
- [NIST AI 800-2 initial public draft: automated benchmark evaluation practices](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-2.ipd.pdf)
- [Wharton Generative AI Labs: Agentic Shopping is Complicated and Contingent](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping/)
- [Visa: Earning consumer trust in the age of agentic commerce](https://corporate.visa.com/en/products/intelligent-commerce/earning-trust-report.html)
- [Palo Alto Networks Unit 42: retail fraud in the age of agentic AI](https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/)
- [American Arbitration Association: Legal Context Protocol](https://www.adr.org/press-releases/aaa-and-industry-leaders-launch-legal-protocol-for-agentic-commerce/)
- [OpenTelemetry Logs Data Model](https://opentelemetry.io/docs/specs/otel/logs/data-model/)
- [SLSA provenance specification v1.2](https://slsa.dev/spec/v1.2/)
