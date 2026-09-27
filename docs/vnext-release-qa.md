# Agent 101 vNext — Visual QA + Release Validation

Parent: #7  
Execution ticket: #14  
Implemented source: merged #13 at `6090d5b87f185a7742450e2b713525817cec3c8d`

> This document records **rendered browser evidence**, release fixes, and the remaining empirical teaching gates. It does not mark human validation PASS without a real rehearsal / participant.

## Test environment

Rendered QA was run on an authorized macOS machine with:

- Google Chrome
- Playwright 1.51
- actual no-build deck served from the merged repository
- all fragments revealed when checking maximum-content layout

Viewports:

- desktop: **1920 × 1080**
- projection: **1280 × 720**
- mobile: **390 × 844**
- print: Chromium PDF using the deck's print media CSS

---

# 1. Desktop render — PASS

## 1920 × 1080

All **18 / 18** slides were rendered with every fragment revealed.

Mechanical checks:

- document horizontal overflow: **0 / 18**
- document vertical overflow: **0 / 18**
- slide horizontal overflow: **0 / 18**
- slide vertical overflow: **0 / 18**
- learner-visible text outside viewport: **0 / 18**

Representative slides visually inspected:

- Slide 1 — course thesis + six-step roadmap
- Slide 4 — Agent/App loop
- Slide 9 — Ticket / AC / Evidence
- Slide 13 — running-example closure + Core stop
- Slide 16 — five-slot advanced architecture
- Slide 18 — final summary

Result:

> **PASS — desktop hierarchy and one-primary-path layout survive the implemented deck.**

---

# 2. Projection — FAIL found, fixed, then PASS

## Initial 1280 × 720 run

The merged #13 CSS did **not** fit a 720p projector reliably.

With all fragments revealed:

- multiple slides had internal vertical overflow;
- Slides 4, 8, 9, 12, 13, 15, 17, 18 had learner-visible content outside the viewport.

This was a real #14 release bug, not a content-contract problem.

## Fix

Added a **screen-only compact projection breakpoint**:

```css
@media screen and (min-width: 901px) and (max-height: 800px) {
  ...
}
```

The breakpoint:

- reduces topbar / footer height;
- reduces slide padding;
- tightens card / flow gaps;
- keeps the same approved copy and DOM order;
- does not remove any teaching content;
- does not introduce scrolling as the projection solution.

## Re-test on exact #14 branch CSS

1280 × 720 after the fix:

- slides with horizontal overflow: **0 / 18**
- slides with vertical overflow: **0 / 18**
- slides with text outside viewport: **0 / 18**
- minimum main heading size: **42 px**
- smallest labels: **9 px**, limited to subordinate eyebrow / index-style labels

A full 18-slide contact-sheet review was also performed after the fix.

Observed hierarchy:

- section accent changes remain visible;
- slide purpose remains distinguishable at thumbnail scale;
- Slide 9 / 12 / 13 remain dense but have one dominant reading path;
- Slide 16 keeps the five architecture slots primary and named technologies subordinate;
- no new random card wall or competing primary reading path was introduced by the compact breakpoint.

Result:

> **PASS — 1280 × 720 projection layout.**

---

# 3. 390px mobile — PASS

Viewport: **390 × 844**.

All **18 / 18** slides were rendered with every fragment visible.

Mechanical checks:

- horizontal document overflow: **0 / 18**
- horizontal slide overflow: **0 / 18**
- primary DOM reading-order inversions: **0 / 18**
- fixed footer obscuring final reachable text at bottom: **0 / 18**
- minimum final-content clearance above fixed footer: **31 px**

The mobile layout intentionally uses vertical scrolling. This is not treated as failure as long as:

1. there is no horizontal overflow;
2. reading order remains correct;
3. all content is reachable;
4. the fixed navigation footer does not hide the end of the content.

All four conditions pass.

Result:

> **PASS — 390px mobile overflow and reading order.**

---

# 4. Interaction / fragment navigation — PASS

Browser interaction tests were run in fresh contexts.

## Fragment reveal

Slide 2:

- visible fragments before Next: **0**
- visible fragments after one ArrowRight: **1**
- current slide after fragment reveal: **2**

Result:

> Progressive disclosure advances fragments before advancing the slide.

## Core-only route

```text
13 → jump → 18 → Prev = 13
```

Observed:

- after jump: Slide **18**
- after ArrowLeft: Slide **13**

## Full route

Fresh normal navigation state at Slide 18:

```text
18 → Prev = 17
```

Observed:

- after ArrowLeft: Slide **17**

Result:

> **PASS — fragment navigation and Core-only / Full route semantics.**

---

# 5. Print / PDF — FAIL found, fixed, then PASS

## Initial print run

The #13 print CSS generated:

- **30 pages**
- Letter portrait page size

That violates the expectation that the 18-slide deck remains a usable presentation PDF.

## Fix

Print now uses a fixed 16:9 page:

```css
@page {
  size: 13.333in 7.5in;
  margin: 0;
}
```

Each slide is rendered against a 16:9 internal print canvas and scaled to the page. The print rule also:

- forces all slides visible;
- forces fragments visible;
- hides live controls / jump buttons;
- keeps one slide per printed page.

## Re-test on exact #14 branch CSS

Chromium PDF result:

- pages: **18**
- page size: **960 × 540 pt**
- aspect ratio: **16:9**
- print horizontal overflow: **0 / 18**
- print vertical overflow: **0 / 18**

Result:

> **PASS — print / PDF CSS produces one usable 16:9 page per slide.**

---

# 6. GitHub Pages path / deployment — source + deployment PASS, final-head recheck pending

For merged #13 commit `6090d5b`:

- repository metadata: `has_pages = true`
- GitHub Actions run: **pages build and deployment**
- run ID: **36338437265**
- status: **completed**
- conclusion: **success**
- deployed head SHA: `6090d5b87f185a7742450e2b713525817cec3c8d`

Source-path check:

- root `index.html` redirects to `./slides/`;
- `slides/index.html` loads `./styles.css`;
- `slides/index.html` loads `./app.js`.

No build step or external runtime dependency is required.

## Release caveat

The projection / print fixes in this #14 branch are not on `main` yet, so the **final #14 head Pages deployment must be rechecked after merge**.

Current status:

> **PASS for path configuration and #13 deployment; final-head Pages deployment = pending post-merge confirmation.**

---

# 7. Thumbnail / overview hierarchy — PASS

The 18-slide projection contact sheet was inspected as a single overview.

Checks:

- major section color changes are distinguishable;
- title hierarchy remains visible;
- the running LUT example remains visually recognizable through the Core;
- Core / Optional boundary is visible at Slide 13;
- advanced slides do not visually dominate the Core;
- Slide 16 remains an architecture diagram, not a product-name glossary wall;
- Slide 17 remains a need → capability map.

Result:

> **PASS — overview hierarchy and section transitions.**

---

# 8. Empirical teaching validation — OPEN

These gates **cannot be satisfied by browser automation or desk simulation**.

They remain open exactly as required by #7 / #12 / #14.

## A. Measured read-aloud rehearsal — NOT YET VALIDATED

Required evidence:

1. Use the implemented deck.
2. Speak the material aloud at actual teaching pace.
3. Preserve the Slide 12 audience-decision pause.
4. Record:
   - time at the end of Slide 13 (**Core**);
   - time at the end of Slide 18 (**Full**, if taking the Advanced route);
   - any slide that required rushing, skipping, or unplanned repair explanation.

Target:

- Core Slides 1–13: approximately **25–30 minutes**
- Roles + Advanced: approximately **10 minutes**
- interaction / questions: approximately **5–10 minutes**
- full teaching session: approximately **40–50 minutes including interaction**

Do not replace this with the existing timing budget.

## B. Real cold-beginner Q1–Q7 — NOT YET VALIDATED

Use at least **one real participant who is cold to Agent concepts**.

After the Core, ask Q1–Q7 from `docs/vnext-speaker-walkthrough.md` without giving the pass answers first.

Record anonymized:

- participant paraphrase;
- PASS / PARTIAL / MISS;
- confusion or unexpected vocabulary;
- any change required before release.

Minimum concepts the participant must be able to explain in their own words:

- LLM vs Agent/App;
- brainstorm before Ticket;
- what makes a Ticket ready;
- why Agent “done” still requires Review.

Do not treat model simulation as participant evidence.

---

# 9. Release gate summary

| Gate | Status |
|---|---|
| 1920×1080 desktop | **PASS** |
| 1280×720 projection | **PASS after #14 CSS fix** |
| 390×844 mobile overflow | **PASS** |
| Mobile reading order / footer clearance | **PASS** |
| Fragment navigation | **PASS** |
| Core-only 13→18→13 | **PASS** |
| Full 18→17 back-navigation | **PASS** |
| Print / PDF 18-page 16:9 output | **PASS after #14 CSS fix** |
| Thumbnail / overview hierarchy | **PASS** |
| Accidental card-wall / dual-primary-path check | **PASS** |
| GitHub Pages source path + #13 deployment | **PASS** |
| Final #14-head Pages deployment | **PENDING POST-MERGE** |
| Measured read-aloud timing | **OPEN — HUMAN EVIDENCE REQUIRED** |
| Real cold-beginner Q1–Q7 | **OPEN — HUMAN EVIDENCE REQUIRED** |

## Current release disposition

The implemented deck has passed the **visual / browser / layout / interaction** QA that can be performed objectively.

It is **not yet release-complete** because the two empirical teaching gates remain open:

1. measured read-aloud rehearsal;
2. real cold-beginner comprehension.

Issue #14 must remain open until those are recorded and any resulting failures are fixed.
