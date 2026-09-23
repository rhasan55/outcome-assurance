# Outcome Assurance design review

## Verdict

The redesigned site now behaves like a product demonstration instead of a hackathon presentation. The core hotel journey is the default surface; architecture, standards, rollout controls, and benchmark data are progressively disclosed.

| Before | After | Why |
| --- | --- | --- |
| Six-step rail plus three competing panes | Three-step journey with one two-column workspace | Reduces the number of concepts a first-time user must parse before acting |
| Giant editorial headline and multiple proof walls | Compact product framing followed immediately by the working surface | Keeps the task, not the pitch, at the center of the first viewport |
| Regret gauge and six always-visible assurance tiers | One consequence-based question; full tier policy lives in technical details | Demonstrates the differentiator without making users learn the policy model first |
| Dense uppercase labels, neon accent, dark control-room styling | System typography, Amex blue, neutral surfaces, restrained status color | Improves familiarity, legibility, and perceived trust |
| Architecture, registry, SLOs, benchmark, sources, protocol boundary, and judging criteria all compete equally | Contract, verifier, and receipt are primary; technical proof is grouped into four disclosures | Applies progressive disclosure while preserving completeness |
| Hackathon evidence map speaks to evaluators | Evidence map removed | Product surfaces should serve the user; judges can infer completeness from the working flow |
| Fixed presentation-style copy | Editable request field and direct actions | Gives the visitor agency and makes the prototype feel testable |
| Elaborate motion and decorative UI cues | Immediate press feedback and short property-specific transitions | Keeps feedback responsive without slowing a frequently used workflow |
| Review action jumped directly to the answer | A 3-phase, 1.4-second review state shows extraction, regret testing, and evidence binding | Makes the system legible while the user waits and gives the delay an explanatory purpose |
| ACE appeared only in a protocol table | Official status, Amex conceptual demo, capability-by-capability state, and a precise extension boundary | Grounds the concept in Amex’s current platform without pretending Outcome Assurance replaces it |
| Synthetic metrics appeared only after opening OutcomeBench | A compact bridge maps existing ACE signals to new outcome measures, with a production-claim disclaimer | Shows why the new layer matters before asking a judge to inspect benchmark internals |

## Scorecard

| Dimension | Score | Assessment |
| --- | ---: | --- |
| End-user clarity | 9.3/10 | The page answers what the product does, what the user should do, and what happens next without technical prerequisites. |
| Task discoverability | 9.2/10 | The primary request and action are visible in the first desktop viewport; mobile becomes a single linear flow. |
| Trust and evidence clarity | 9.3/10 | Approval, hash, event log, claim states, idempotency, and recovery remain explicit and distinct. |
| Visual craft | 9.0/10 | Consistent spacing, system typography, restrained color, focus states, press feedback, and reduced-motion support. |
| Technical completeness | 9.2/10 | Contract JSON, regret-aware question, deterministic routing, adapters, independent verifier, recovery, benchmark, and rollout plan remain executable or inspectable. |
| Accessibility | 9.1/10 | Semantic controls, labels, one H1, visible focus, skip link, reduced-motion/transparency/contrast modes, and no horizontal overflow at 390 px. |
| Mobile usability | 9.0/10 | Single-column flow, full-width actions, readable typography, and no horizontal overflow. |
| Distinctiveness | 8.6/10 | Calm assurance-product character without decorative novelty competing with the proof. |

**Overall UX/design score: 9.1/10.** This is ready for hackathon demonstration and design review. This score covers interface quality only; it is not the weighted hackathon score. See `HACKATHON-ASSESSMENT.md` for the evidence-adjusted 78/100 rubric judgment.

## Remaining risks

- The compiler is intentionally scoped to a synthetic hotel schema. Free-form edits do not create a new domain model.
- Benchmark results are synthetic reference evidence, not production performance claims.
- The technical disclosures should be observed in a short usability test to confirm that engineering judges discover the depth without prompting.
- A production deployment still needs real enterprise event access, authorization boundaries, retention governance, and external holdout management.
- The official ACE video is streamed from American Express; the surrounding text and source link preserve the core status explanation if media delivery is unavailable.

## Review basis

- Apple Human Interface Guidelines and the Apple design principles of purpose, agency, familiarity, simplicity, craft, and restrained feedback.
- GitHub Primer guidance for focused layouts, responsive single-column adaptation, and context-preserving progressive disclosure.
- Emil Kowalski's design-engineering rules for responsive press states, property-specific transitions, short UI timings, and reduced-motion behavior.
- Vercel Web Interface Guidelines for semantic controls, labels, focus visibility, touch behavior, responsive layout, and accessible motion.
