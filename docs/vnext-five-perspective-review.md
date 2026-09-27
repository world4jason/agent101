# Agent 101 vNext — Five-Perspective Review

Parent: #7  
Execution ticket: #10

Reviewed artifact: `docs/vnext-storyboard.md`

## 1. UI/UX reviewer

### Pain in the current deck
- 34 slides create a false signal that every advanced term is equally important.
- Multiple neighboring slides repeat the same review/deploy idea with different diagrams.
- The long Agent OS section has too many card grids and competing entry points.
- The same LUT example is not visually continuous across the journey.

### Blocking requirements
1. **One dominant path per slide.**
2. **Core/Advanced boundary must be visible**, not just implied by section colors.
3. **Slide 17 must be question → capability**, not eight equal glossary cards.
4. The LUT Gallery example needs a persistent visual identity across Slides 6–13.
5. Avoid introducing decorative badges such as “sequence / relation / compare” to the audience; structure belongs in markup only.

### Resolution in storyboard
- Core stop is explicit on Slide 13.
- Advanced is only Slides 14–17.
- One running LUT example is specified on every delivery slide.
- Slide 17 is organized by learner need rather than tool definitions.

**Status: PASS for implementation.**

---

## 2. PM reviewer

### Pain in the current deck
- Discovery is almost absent; the current deck jumps from “what do you want?” to Requirement/AC.
- Brainstorm output can be mistaken for committed backlog.
- Hierarchy and status are not taught as different dimensions.
- Priority/dependency appear weakly compared with tooling vocabulary.
- “Done” is explained multiple times without one clear acceptance contract.

### Blocking requirements
1. Show **Human owns convergence/commitment** after AI ideation.
2. Show **Milestone → Epic → Story → Task before Kanban**.
3. Ticket must contain enough information to decide whether it is ready.
4. Review must reference the *same AC* defined in the Ticket.
5. Merge must be downstream of human acceptance.

### Resolution in storyboard
- Slides 6–7 separate generation from commitment.
- Slide 8 establishes hierarchy; Slide 10 separately establishes state.
- Slide 9 is the only canonical Ticket/AC definition.
- Slide 12 reuses, rather than redefines, AC.
- Slide 13 makes Merge downstream of acceptance.

**Status: PASS for implementation.**

---

## 3. Presentation speaker

### Pain in the current deck
- The speaker must currently repair missing prerequisites: “Agent 是什麼？” and “Subagent 為什麼突然出現？”
- The middle of the deck can be taught forward, but the advanced section restarts the architecture from another angle.
- Several pairs of slides are hard to distinguish while speaking: Evidence vs Acceptance, Skill vs resource map, Context vs compact vs external state.

### Blocking requirements
1. Slides 2–5 must form one continuous explanation: Agent → task entry → runtime loop → environment.
2. Each slide needs a spoken bridge that creates the need for the next slide.
3. The Core should end before optional roles/advanced material.
4. Slides 16–17 must say “remember Slide 4” conceptually, not invent a second architecture.
5. Include at least one audience judgment moment.

### Resolution in storyboard
- Every slide has a transition field.
- Slide 13 is the visible stop.
- Slides 16–17 explicitly map back to the known loop.
- Slide 12 asks the audience to judge an AC failure before the answer is revealed.

**Status: PASS for implementation.**

---

## 4. LLM / Agent engineer

### Pain in the current deck
- “Context is work memory” is useful but can be misread as the LLM itself owning persistent project memory.
- The course risks teaching an overly literal “every turn resends everything” model.
- Tool availability, execution environment and permission are not cleanly separated.
- Subagent can look like another data source because it is introduced near Search/RAG/MCP.

### Blocking requirements
1. Do **not** say “the LLM has zero memory” as an absolute.
2. Use the technically defensible model: **the model reasons over the input/context available to that call; surrounding runtime brings forward relevant state**.
3. Do not claim every prior token is resent every turn; allow summarization, compaction and selective retrieval.
4. Separate **Agent decision**, **Environment execution**, **Tool access** and **Permissions**.
5. Define Subagent as a worker/context isolation mechanism, not knowledge retrieval.
6. Self-report is not verification; independent evidence remains necessary.

### Resolution in storyboard
- Slide 4 uses per-call context wording and explicitly allows runtime selection.
- Slide 5 separates Agent from Environment.
- Slide 16 gives Permissions a first-class slot.
- Slide 15 defines Subagent after roles.
- Slide 12 requires independent evidence.

**Status: PASS for implementation.**

---

## 5. Cold Agent beginner

### Pain in the current deck
A beginner can currently leave with unresolved questions:
- “Agent 到底是什麼？”
- “我是不是要按一個 Create Agent？”
- “新 chat 是新 Agent 嗎？”
- “為什麼它可以連做很多步？”
- “20 個 brainstorm idea 要不要全部做？”
- “Branch / Commit / PR 到底跟我的工作有什麼關係？”
- “Agent 說完成，我要相信嗎？”

### Blocking requirements
1. Define Agent before Requirement/AC vocabulary.
2. Explicitly answer the “Agent button” question.
3. Explain multi-step continuity without requiring “session” as beginner vocabulary.
4. Use one concrete project throughout.
5. Explain GitHub objects by **purpose**, not by Git internals.
6. Make the review decision observable: if one AC fails, do not approve.
7. Show a point where the learner already knows enough to stop.

### Resolution in storyboard
- Slides 2–5 answer Agent, task entry, continuity and local/cloud.
- Slides 6–13 use one LUT Gallery example end-to-end.
- Slide 11 is purpose-first GitHub.
- Slide 12 has an explicit failed-AC decision.
- Slide 13 says Core is complete.

**Status: PASS for implementation.**

---

# Cross-perspective implementation guardrails

The five reviewers agree on the following non-negotiables:

1. **Do not grow the deck while rewriting it.** Target ~18 live slides.
2. **Do not preserve old chapter order just because the CSS exists.**
3. **Do not add new jargon unless it answers a learner question already created by the story.**
4. **Do not repeat definitions.** Later slides may reference or apply a canonical concept.
5. **Do not let Advanced visually dominate Core.**
6. **Do not hide acceptance behind automated tests.** Human/product judgment remains explicit.
7. **Do not let visual polish reintroduce reading load.**
8. **Do not make Session, compaction, vector DB, embedding, chunking or framework command names required beginner vocabulary.**

## Review conclusion

The storyboard is clear enough to proceed to content rewrite and HTML/CSS implementation. No blocking concern requires another architecture iteration.
