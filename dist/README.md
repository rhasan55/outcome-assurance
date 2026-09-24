# Outcome Assurance

Outcome Assurance confirms what a Member means before an agent buys, uses proven Amex value to choose the best valid option, and independently checks whether the approved result actually happened.

This repository contains a static, front-end-only prototype. It has no API keys, backend, or build step. All purchase, merchant, price, benefit, order, and settlement data is synthetic.

## What works

- Two end-to-end journeys: hotel and flight.
- One ignored ambiguity and one decision-changing question in each journey.
- A plain-language approval and matching versioned JSON.
- Deterministic ranking with a visible next-best value difference.
- AP2, UCP, and ACP updates translated into one event format.
- A separate browser worker that checks the result without changing the approval.
- Clean, hidden-fee, changed-term, missing-amount, pending-benefit, overwrite, and hostile-merchant-text tests.
- Five proof states: matches, waiting, likely, no proof, and changed.
- Repeat-safe receipts and a downloadable support package.
- A browser repeat test, editable value model, rollout gates, and 24 fixed synthetic test cases.

## Preview locally

```bash
python3 -m http.server 4174
```

Open `http://localhost:4174`.

## Publish on GitHub Pages

1. Put the contents of this folder at the repository root.
2. In the GitHub repository, open Settings, then Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select the default branch and the `/ (root)` folder.
5. Save and open the published Pages URL.

The interactive prototype runs locally in the browser. The official ACE overview video and poster stream from American Express.

## Judge and presenter material

- [Submission brief](./SUBMISSION-BRIEF.md)
- [Four-minute presentation script](./PRESENTATION-SCRIPT-4-MIN.md)
- [Evidence-adjusted assessment](./HACKATHON-ASSESSMENT.md)
- [Design review](./DESIGN-REVIEW.md)
- [Research notes](./RESEARCH-2026.md)

The benchmark and repeat-test results show that the prototype code runs on fixed synthetic inputs. They are not Amex production-performance or Member-impact claims.
