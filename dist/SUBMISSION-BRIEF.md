# Outcome Assurance

## One-sentence description

Outcome Assurance confirms what a Member means before an agent buys, finds the best valid choice using proven Amex value, and independently checks whether the approved result actually happened.

## The problem

Agentic payment systems can establish identity, permission, credentials, and transaction facts. A gap remains between permission to pay and proof that the Member received the result they intended.

Everyday requests contain phrases such as “near,” “good,” “refundable,” or “under $400.” An agent can make a technically valid purchase while interpreting one of those phrases incorrectly. Afterward, the Member or servicing team may have to reconstruct the request, approval, merchant terms, final amount, and Membership benefit from several systems.

## The opportunity

Add a portable outcome layer beside existing payment and commerce infrastructure. It would:

1. Turn the Member's request into a short, readable approval.
2. Ask only when an unclear phrase can change the best choice.
3. Apply eligible Membership value through fixed, inspectable rules.
4. Save the same approval in a machine-readable format.
5. Use a separate checker to compare later events with that approval.
6. Prepare the evidence for servicing when something changed or could not be proven.

## What the working prototype demonstrates

- Hotel and flight journeys with different questions, requirements, choices, and proof.
- One ignored ambiguity and one decision-changing ambiguity in each journey.
- A human-readable approval and a versioned JSON representation.
- A tamper check that changes when approved fields change.
- Deterministic candidate ranking and a visible next-best value difference.
- AP2, UCP, and ACP event translation into one internal event format.
- A separate browser worker that checks the result without changing the approval.
- Five distinct evidence states: matches, waiting, likely, no proof, and changed.
- Repeat-safe receipts, adversarial event injection, a support package, and a 24-case test lab.

This is a coded front-end reference implementation using synthetic data. It is not connected to Amex production systems and does not make purchases, issue refunds, or open disputes.

## Why Amex

Amex can connect three assets that are often separate: trusted payment signals, Membership value, and premium servicing. Outcome Assurance makes that combination visible at the moment of choice and usable again if the outcome needs support.

Potential enterprise value should be measured in four places:

- Member control: fewer unnecessary questions and fewer wrong interpretations.
- Membership value: more eligible value surfaced and correctly attributed to the decision.
- Servicing efficiency: less time spent reconstructing what was requested and what changed.
- Risk and compliance: explicit approval, separate duties, version history, and claim-level evidence.

The editable value model in the prototype uses illustrative inputs only. It deliberately excludes conversion and brand effects until they are measured.

## How this differs from adjacent solutions

| Capability | Primary role | Outcome Assurance adds |
|---|---|---|
| ACE and payment infrastructure | Account enablement, identity, permission, credentials, and payment | A Member-approved definition of success and an independent result check |
| AP2 | Mandates, authorization, and payment audit trail | Requirements before payment and outcome evidence after payment |
| UCP | Discovery, checkout, order, and fulfillment events | One outcome format that can travel across merchants |
| ACP | Structured merchant data and agent-to-merchant commerce | Approved meaning, Membership value difference, and recovery evidence |
| Shopping assistants | Personalized discovery and recommendations | Explicit approval, decision-sensitive clarification, and proof after action |

The novelty claim is the composed outcome layer. It is not a claim that Amex invented identity, mandates, schemas, event logs, or agent observability.

## First production-minded pilot

Start with one hotel flow in shadow mode. The system observes approved data and events but takes no customer action.

Proposed pass or fail gates:

- At least 90% of important facts observable.
- At least 90% of seeded mismatches detected.
- No more than one clarification question per purchase on average.
- Stable repeat behavior with no duplicate support action.
- Privacy, Legal, Servicing, Membership, Travel, Risk, and Data owners approve the event fields and retention policy.

## Estimated effort

Planning estimate for a one-domain shadow pilot: medium effort, about 8 to 12 weeks after data access and owner approval.

Likely workstreams:

- 2 to 3 engineers for the contract service, event translation, checker, and pilot interface.
- 1 data or platform engineer for approved event access and monitoring.
- Part-time product, design, risk, privacy, legal, servicing, travel, and Membership Rewards support.
- Security review, access controls, retention decision, test-set ownership, and operational runbooks.

Production rollout is a separate, higher-effort phase. The largest uncertainty is not the deterministic checker. It is access to complete, timely, contractually usable merchant, order, settlement, and benefit events across domains.

## Objective hackathon assessment

| Criterion | Weight | Score | Evidence and remaining gap |
|---|---:|---:|---|
| Feasibility and scalability | 30 | 27 | Working deterministic path, separate checker, repeat safety, event translation, shadow plan, and measurable gates. Missing production data contracts, threat model, retention approval, and distributed load evidence. |
| Innovation | 30 | 28 | Strong combination of portable approved outcomes, decision-regret clarification, Membership value routing, and independent post-purchase proof. Each component has precedents, so the claim must stay focused on the combination. |
| Business unit value | 30 | 26 | Clear fit for Travel, Membership, Servicing, Risk, and merchant ecosystems, with an editable value model. Business owners have not yet validated inputs or committed to a pilot. |
| Hack completeness | 10 | 9 | Two coded journeys, failure injection, downloadable artifacts, test lab, and judge-ready script. It remains a synthetic browser prototype rather than an integrated proof of concept. |
| **Total** | **100** | **90** | **Strong finalist if the live demo stays simple and the team is precise about evidence versus assumptions.** |

## Highest-priority gaps

1. Secure named business and data owners before claiming readiness for a pilot.
2. Validate which hotel facts, flight facts, settlement facts, and benefit facts are available at the required time.
3. Set retention and access rules with Privacy and Legal.
4. Expand the blind test set and have an independent reviewer own it.
5. Define the purchasing-agent and checker trust boundary in an enterprise deployment.
6. Replace illustrative value inputs with approved Amex baselines.
7. Run shadow mode before any customer-facing enforcement or automated recovery.

## Submission form copy

### Product description

Outcome Assurance converts a natural-language purchase request into clear approved requirements, applies proven Membership value to the choice, and independently checks the final result. If an important term changes or evidence is missing, it creates a support-ready proof package.

### Opportunity statement

Agentic commerce is improving how systems discover, authorize, and pay. The next opportunity is to prove that the Member received the outcome they meant, especially when requests contain vague but decision-changing language.

### Enterprise value

The solution can reduce avoidable wrong outcomes, make Membership value visible in the decision, shorten servicing investigation, and add auditable controls across travel and merchant journeys. The same approved outcome format can support multiple agents, protocols, merchants, and business units.

### Estimated effort

Medium for a one-domain, no-customer-action shadow pilot. Planning estimate: 8 to 12 weeks after approved data access and owner alignment. Production expansion requires additional security, privacy, reliability, and domain integration work.

### Additional information

The prototype uses synthetic data and fixed deterministic choices so every demonstration is repeatable. It does not replace ACE, AP2, UCP, ACP, authorization, identity, mandates, checkout, or order systems. It consumes their trusted facts and adds the Member-approved outcome, result verification, and recovery evidence.
