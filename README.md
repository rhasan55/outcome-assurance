# Outcome Assurance Lab — hackathon prototype

This is a static, front-end-only reference implementation. It has no backend, API keys, or build step.

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

The page is self-contained except for Google Fonts loaded from the public web. Primary claims link directly to official specifications and research. All Member, merchant, Offer, transaction, event, and settlement data is synthetic or illustrative. OutcomeBench results are measured only against the bundled synthetic fixtures and are not production-performance claims.
