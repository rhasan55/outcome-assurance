# Outcome Assurance — interactive prototype

This is a static, front-end-only reference implementation. It has no backend, API keys, or build step.

The interface is organized for a first-time user: one editable request, a visible 3-phase review, one decision-sensitive clarification, one transparent recommendation, and one independent receipt. The ACE section uses American Express' official status and conceptual demo to establish the current platform boundary. Architecture, assurance tiers, rollout controls, protocol boundaries, and OutcomeBench are progressively disclosed under Technical details.

The executable path demonstrates:

- a versioned portable Outcome Contract and JSON Schema;
- regret-aware clarification where only winner-changing ambiguity earns a question;
- deterministic Membership value routing with a transparent counterfactual;
- AP2, UCP, and ACP adapters normalized into one event model;
- an independent, idempotent verifier and Living Trust Receipt;
- explicit verified, pending, inferred, unobservable, and mismatch evidence states;
- a recovery evidence package; and
- OutcomeBench 2.0 with a frozen synthetic dataset, holdout partition, baseline, manifest, and uncertainty reporting.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish on GitHub Pages

1. Put `index.html` at the root of a GitHub repository.
2. In the repository settings, enable Pages from the default branch and root folder.
3. Open the generated Pages URL.

The page uses the system font stack and needs no runtime API. The ACE overview video and poster stream from American Express; the interactive prototype itself remains local and deterministic. Primary claims link directly to official specifications and research. All Member, merchant, Offer, transaction, event, and settlement data is synthetic or illustrative. OutcomeBench results are measured only against the bundled synthetic fixtures and are not production-performance claims.

See `DESIGN-REVIEW.md` for the before/after UX critique. See `HACKATHON-ASSESSMENT.md` for the candid weighted score, production gaps, pilot plan, metric interpretation, red-team objections, and the 6 supplied reference images.
