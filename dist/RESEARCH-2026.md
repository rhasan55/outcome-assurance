# Outcome Assurance — September 2026 research brief

Research cutoff: September 23, 2026

Method: prioritize primary protocol specifications, first-party product disclosures, original research, and named security analysis. Distinguish observed evidence from prototype response and from unproven production claims.

## Executive finding

Agentic-commerce infrastructure is rapidly covering identity, delegated authority, payment, checkout, and merchant interoperability. The unresolved customer problem is different: whether an agent selected and delivered the outcome the person meant, whether the reasons remain inspectable, and whether recovery has usable evidence.

The browser prototype responds to that gap with a portable, approved outcome contract; decision-regret clarification; deterministic Membership routing; a separately executing verifier; explicit evidence states; and a downloadable recovery bundle. It proves an executable design on synthetic data. It does not prove production accuracy, Amex-volume capacity, or business impact.

## Current failure landscape and prototype response

| Observed issue | Current evidence | Prototype response | What remains unproven |
| --- | --- | --- | --- |
| Agent choices are context-sensitive | [Wharton Generative AI Labs](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping/) ran roughly 26,000 tests and found source order, competing context, injected memory, and tool-delivery format could change purchases. | The model may propose fields, but approved constraints, regret tests, eligibility, ranking, and verdicts execute deterministically. | Real-world extraction recall, omission detection, and multi-domain calibration. |
| Consumers want control, transparency, and reversibility | [Visa’s consumer research](https://corporate.visa.com/en/products/intelligent-commerce/earning-trust-report.html) covered the U.S. (n=1,600), Australia (n=1,600), and New Zealand (n=500); nearly nine in ten wanted decision transparency and about half would stop if control disappeared. | One targeted clarification, contract preview, explicit approval, claim-level receipt, and evidence-first recovery. | Member usability, abandonment, trust lift, and accessibility in a representative study. |
| Merchant content can become an adversarial instruction | [Palo Alto Networks Unit 42](https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/) documents indirect prompt-injection scenarios in commerce, including manipulated carts and concealed unauthorized items. | Merchant free text is classified as untrusted, quarantined from the approved contract, and surfaced as a live verifier test. | A full threat model, red-team corpus, signed event provenance, and deployed least-privilege identities. |
| Payment proof does not capture terms and recourse | The [American Arbitration Association’s Legal Context Protocol announcement](https://www.adr.org/press-releases/aaa-and-industry-leaders-launch-legal-protocol-for-agentic-commerce/) targets discoverable terms, consent, jurisdiction, and dispute resolution. | The proof bundle retains the approved contract, normalized events, receipt, access policy, and a human-controlled recovery path. | Legal review, retention policy, jurisdictional rules, and servicing integration. |
| People prefer assistance to surrendering the final purchase decision | [NMI’s 2026 consumer research](https://www.nmi.com/about-us/news/nmi-research-consumers-want-ai-to-help-them-shop-not-control-their-spending/) reports only 11% would let AI complete purchases, while assistance with discovery and deals is more welcome. | Explicit approval remains between recommendation and verification; the system does not autonomously dispute or refund. | Segment-level willingness, category thresholds, and high-consequence approval design. |
| Trust requires concrete controls | [Checkout.com research](https://www.checkout.com/newsroom/consumer-demand-for-ai-shopping-is-forming-fast-but-trust-for-agentic-commerce-is-still-catching-up) reports spending caps, instant revocation, and easy cancellation as leading non-negotiables. | The outcome layer preserves approved limits and recovery evidence while leaving identity, authority, credential revocation, and payment controls to ACE and commerce protocols. | Live integration with those controls and proof that boundaries are understood by Members. |

## Competitive boundary

Outcome Assurance is complementary infrastructure, not another payment protocol.

- [Amex ACE](https://www.americanexpress.com/en-us/company/agentic-commerce/) supplies the trusted Amex foundation around agents, accounts, intent, credentials, context, and controls.
- [Google AP2](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md) supplies mandates and authenticated payment context.
- [Universal Commerce Protocol](https://www.shopify.com/ucp) standardizes merchant discovery, checkout, order, fulfillment, and post-purchase interactions.
- [OpenAI Agentic Commerce Protocol](https://developers.openai.com/commerce) connects structured merchant data and commerce experiences to AI shoppers.
- Outcome Assurance owns the portable definition of success, consequence-aware clarification, deterministic Membership-aware selection, independent reconciliation, and outcome evidence.

It explicitly does not claim ownership of identity, authorization, payment credentials, mandate signing, checkout transport, merchant order lifecycle, cryptographic proof systems, or autonomous disputes/refunds.

## Evidence added to the prototype

1. A dedicated Web Worker receives cloned contracts and event batches, recomputes the contract hash, evaluates claims, and returns an idempotent receipt. The UI has no callback that lets the purchasing flow rewrite that verdict.
2. A repeatable 10,000-evaluation browser replay reports throughput, p50/p95 core time, normalized-event count, and duplicate-key behavior. It is labeled a browser reference test, not an Amex-volume load claim.
3. The contract policy declares merchant free text quarantined, structured event fields allowlisted, and untrusted context unable to change the approved contract.
4. A live `Merchant prompt injection` condition proves that prompt-like merchant content is treated as data and produces a claim-level audit record.
5. A downloadable proof bundle contains the approved contract, normalized event log, receipt, access policy, and recovery policy.
6. An editable value model exposes every assumption, reports gross value, net value, and break-even value lift, and avoids treating illustrative inputs as an Amex forecast.
7. Pilot gates cover material-claim observability, mismatch detection and false interventions, Member effort, latency, replay safety, and recovery time.

## Benchmark integrity

OutcomeBench 2.0 contains 24 frozen synthetic hotel fixtures: 16 development cases and an 8-case bundled reference split. Both deterministic and prompt-only evaluators use the same browser harness. Results include Wilson 95% intervals and a manifest with dataset hash, versions, seed, metrics, and failure taxonomy.

Because the reference split is visible inside the deployable bundle, it is not described as a truly blind holdout. A production evaluation still needs a larger, externally governed, sealed set and real distributional data. This follows the qualified-claim and reproducibility direction in [NIST AI 800-2’s January 2026 draft benchmark practices](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-2.ipd.pdf).

## Honest conclusion

The prototype is strong hackathon evidence of an executable product thesis. The remaining risk is organizational and empirical, not visual: Amex owner validation, live/sandbox schemas, separately deployed service identities and storage, privacy/legal approval, production load/error testing, a sealed external holdout, and an internally validated business baseline.
