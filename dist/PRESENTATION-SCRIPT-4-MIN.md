# Four-Minute Presentation Script

## 0:00 to 0:30 | The problem

**Slide or page: Hero**

“Agents are getting very good at finding products and making payments. But payment permission is not the same as proof that the Member got the right result.

If I say, ‘Book a really nice refundable hotel near Hudson Yards for under $400,’ an agent can complete a valid transaction and still misunderstand ‘near,’ miss a fee, or fail to apply Membership value.

Outcome Assurance closes that gap. It confirms what success means before the purchase, then checks what actually happened.”

## 0:30 to 1:35 | The live Member experience

**Page: Try It. Keep Hotel selected. Click “Check What I Mean.”**

“The Member speaks normally. The system turns the request into a short approval that anyone can read.

Notice the highlighted item. We found two unclear phrases, but we do not ask about both. ‘Really nice’ does not change the winner, so we leave the Member alone. ‘Near Hudson Yards’ does change the winner, so we ask one targeted question.”

**Click “Yes, within 1 mile.”**

“That answer changes the eligible set. Fixed rules now compare the final price, cancellation terms, distance, and only Membership value that can be proven.

The Pendry wins at $389. After $50 of eligible Amex value, its effective cost is $339, which is $21 better than the next valid option.”

**Click “Approve this choice.”**

“The Member sees plain language. Systems receive the same approval as versioned JSON with a tamper check. The buying agent gets a read-only copy and cannot quietly loosen the requirements later.”

## 1:35 to 2:20 | Independent proof

**Scroll to “Check what actually happened.” Select “A hidden $45 fee appears.” Click “Check the Result.”**

“After the purchase, a separate checker consumes order, payment, settlement, and benefit updates. It does not trust the buying agent to grade its own work.

Here the final amount is $45 higher than approved. The result says ‘Something changed’ and shows exactly which promise failed. Other claims remain separate: they can match, wait, be likely, have no proof, or change.

The event translator lets AP2, UCP, and ACP remain complementary. They supply trusted commerce facts. We translate those facts into one outcome format.”

**Click “Check Again,” then “Prepare Support Package.”**

“The same inputs return the same receipt, so no duplicate action is created. If help is needed, servicing receives the request, approval, event history, exact mismatch, and technical fingerprints. The prototype does not issue an automatic refund or dispute.”

## 2:20 to 3:00 | Business opportunity and enterprise value

**Scroll to “The business case in plain language.”**

“The opportunity is an outcome layer beside ACE and the commerce protocols, not a replacement for them.

For Members, it means fewer unnecessary questions and clearer control. For Membership, it shows when eligible value actually changed the winner. For Servicing, it reduces the work of reconstructing what happened. For Risk and Compliance, it creates explicit approval, separate duties, and claim-level evidence.

The same pattern can serve hotels, flights, retail, and other domains. You can switch to the flight journey now and see a different request, question, ranking, approval, and verification path.”

## 3:00 to 3:35 | Feasibility and measured evidence

**Open “How it can scale safely,” then “Test lab.”**

“This is a working coded prototype with two end-to-end journeys, failure injection, a separate browser worker, repeat safety, downloadable artifacts, and 24 fixed test cases.

Our next step is a hotel shadow pilot with no customer action. We would gate progress on proof coverage, mismatch detection, Member effort, reliability, access controls, and an approved retention policy.

The planning estimate is 8 to 12 weeks after data access and owner approval. The hard production question is event availability across merchants, orders, settlement, and benefits, not whether the deterministic comparison can run.”

## 3:35 to 4:00 | Close

**Return to the top or show the four-step strip.**

“Payment infrastructure answers, ‘Can this agent make this payment?’ Outcome Assurance answers the next question: ‘Did the Member get the result they approved?’

The innovation is the combination: a portable definition of success, one question only when the decision can change, deterministic Membership value, independent proof after purchase, and support-ready recovery.

Understand. Choose. Check. Help. That is how Amex can make agentic commerce feel not only possible, but trusted.”

## Presenter notes

- Keep the live demo on the hotel path unless a judge asks for another domain.
- Use the flight switch only to prove portability. Do not replay every step.
- Say “approved details,” not “outcome contract,” unless an engineer asks.
- Say “tamper check,” not “SHA-256 hash,” until the technical proof is opened.
- Call every benchmark result synthetic. Do not present it as production performance or Member impact.
- If asked about competitors, say that shopping assistants personalize discovery, while this prototype adds explicit approval and independent post-purchase proof.
- If asked what is missing, name data access, owner validation, retention approval, threat modeling, and a larger independent blind test set.
