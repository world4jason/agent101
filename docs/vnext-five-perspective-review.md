# Agent 101 vNext — Five-Perspective Content Review

Parent: #7  
Execution ticket: #10  
Reviewed artifact: merged #9 storyboard, with #10 fixes applied on this branch

> This is a role-based review of the storyboard from five required perspectives. It reviews teaching flow and learner comprehension, not only factual correctness. It does **not** write final on-slide copy or implement HTML/CSS.

## Review outcome

**PASS after the storyboard fixes in this issue.**

The 18-slide architecture does not need another restructuring pass. The first review found three cross-cutting blockers:

1. beginner terminology was not always introduced in plain language on first use;
2. Slides 2–4 used the same topic but did not explicitly require one continuous micro-demo trace;
3. Slides 16–17 could regress into an equal-weight glossary wall during content/layout implementation.

A direct diff re-review then found three additional small blockers:

4. Slide 7's Human decision gate did not show the criteria used to converge;
5. Slide 4 expanded LLM imprecisely as “language model” instead of **Large Language Model**;
6. Slide 3 still violated the beginner-jargon guardrail with `repo / project task surface`.

All six blockers are now fixed in `docs/vnext-storyboard.md`. No blocker is being pushed into #11 silently.

---

# 1. UI/UX perspective

## Concrete pain points

### A. Advanced slides can easily become a glossary wall

Slide 16 contains five architecture slots plus examples such as:

- AGENTS.md / CLAUDE.md
- Memory
- Web Search
- MCP
- Connector / Plugin

Slide 17 then adds another capability map.

If every named item becomes a card or equal-weight label, the learner will again see multiple competing entry points—the exact problem #7 is trying to remove.

### B. Slide 9 is information-dense by nature

Ticket includes Goal / Scope / Non-goals / AC / Owner / Priority / Parent or Dependency / Evidence. This is required content, but it must still read as **one real ticket**, not a field encyclopedia.

## Blocking concern

**Blocker:** Slides 16–17 must preserve one dominant visual hierarchy instead of turning examples into equal-weight glossary cards.

## Resolution

**Fixed in storyboard.**

Slide 16 now explicitly requires:

- five architecture slots as the primary visual hierarchy;
- named technologies only as subordinate examples / progressive reveals;
- no equal-weight glossary-card treatment.

Slide 17 remains a **need → capability** relation map rather than a definition grid.

Slide 9 already requires one actual Ticket as the dominant visual, so no additional structure change is needed.

## Status

**PASS**

---

# 2. PM perspective

## Concrete pain points

### A. Brainstorm output must not become commitment automatically

A PM needs to preserve the distinction:

```text
ideas
→ Human decision
→ committed direction
```

Otherwise AI-generated options become accidental backlog.

### B. Work hierarchy and work state must remain separate

```text
Milestone → Epic → Story → Task
```

answers **what level of work is this?**

```text
Backlog → Doing → Review → Done
```

answers **where is it now?**

Mixing them creates poor planning and poor reporting.

### C. A complete Ticket is not automatically next

The important gate is:

```text
Ticket + AC
→ Priority / dependency check
→ Backlog
→ Doing
```

A PM still owns sequencing, value, dependency ordering and readiness.

## Blocking concern

**Blocker found in PR re-review:** Slide 7 had a Human decision gate, but did not say what Human evaluates. That risks teaching “AI generates options → Human arbitrarily picks one.”

## Resolution

**Fixed in storyboard.**

Slide 7 now requires the Human decision gate to compare:

- expected benefit;
- cost;
- risk;
- reversibility;
- evidence needed.

The running example explicitly shows that Human owns criteria, trade-offs and the final decision. The existing Priority / dependency gate on Slide 9 remains unchanged.

## Status

**PASS after fix**

---

# 3. Presentation speaker perspective

## Concrete pain points

### A. Slides 2–4 could still sound like definition → definition → definition

The sequence is logically correct:

1. What is an Agent?
2. How do I start?
3. How does the loop continue?

But a live audience can still lose the thread if each slide uses a fresh abstract example.

### B. Optional Advanced must be genuinely optional

A short talk must be able to end Core without breaking the closing summary.

The approved routing is:

```text
Core-only:
13 → 18

Full:
13 → 14 → 15 → 16 → 17 → 18
```

## Blocking concern

**Blocker:** Slides 2–4 need one explicit continuous micro-demo trace, not merely the same general LUT topic.

## Resolution

**Fixed in storyboard.**

The contract now requires one **60–90 second LUT Gallery micro-demo** across Slides 2–4:

```text
same human goal
→ Agent starts in the work surface
→ reads repo / current UI
→ gets an observation
→ chooses next step
```

Slide 4 now explicitly says not to switch examples.

The Core-only/full routing remains intact from #9.

## Status

**PASS**

---

# 4. LLM / Agent engineer perspective

## Concrete pain points

### A. Do not teach that the LLM itself owns durable project memory

The technically defensible model is:

```text
current input
→ model reasoning
→ output / tool request
→ action
→ observation
→ next input
```

The surrounding Agent/App carries relevant state forward.

### B. Avoid the false claim that every turn resends every previous token

Runtime may use:

- selected history;
- summaries / compaction;
- retrieved state;
- files;
- tool results;
- server-side state references.

### C. Tool availability is not the same as permission

A tool can exist while read/write/action approval remains separately constrained.

### D. Subagent must not look like a data source

Subagent is a worker/context isolation mechanism. RAG / Search / MCP / Connector solve different gaps.

## Blocking concern

No technical architecture blocker remains.

The storyboard already preserves:

- LLM step reasoning vs Agent/App loop;
- Agent vs Environment;
- Tool access ≠ permission;
- Memory under Context, not project source of truth;
- Web Search under Tools;
- Subagent only after Human roles.

## Small wording correction from this review

A direct re-review caught that `LLM (language model)` was still imprecise. Slide 4 now introduces **LLM (Large Language Model，大型語言模型)** on first use and avoids requiring a beginner to understand “model call context” before the mental model is established.

## Deferred to Agent 201 / Appendix

Correctly excluded from Core:

- context-window mechanics;
- compaction implementation;
- session semantics;
- embedding / chunking / reranking;
- MCP protocol internals;
- long-horizon durable-state mechanics.

## Status

**PASS**

---

# 5. Cold Agent beginner perspective

## Concrete pain points

A cold beginner is likely to stumble on terms that experts treat as obvious:

- LLM
- AC
- Evidence
- Kanban
- PR
- bounded goal
- durable work
- task surface

The issue is not that these terms are forbidden. The issue is **using them before the learner has a plain-language hook**.

## Blocking concern

**Blocker:** required beginner terminology must be introduced before later slides depend on it.

## Resolution

**Fixed in storyboard.**

First-use contract is now:

| First use | Beginner-facing introduction |
|---|---|
| Slide 4 | **LLM (Large Language Model，大型語言模型)** = model doing this reasoning step |
| Slide 9 | **Acceptance Criteria (AC)** = observable Pass/Fail completion conditions |
| Slide 9 | **Evidence** = what reviewer will actually inspect during Review |
| Slide 10 | **Kanban** = work-state board |
| Slide 11 | **Pull Request (PR)** = entry point to Review / Acceptance |
| Slide 15 | **Subagent** = isolated specialist worker/context |
| Slide 16 | Memory / Web Search / MCP appear only as subordinate advanced examples |

Beginner-facing storyboard wording also removes or translates:

- “agentic product”;
- “task surface”;
- “bounded goal”;
- “durable work”;
- unexplained “repo” on the first practical starting slide.

Slide 3 now says to start in the **專案工作介面** and, if code location must be referenced, use “專案 / 程式碼資料夾” instead of assuming the learner knows `repo`.

## Status

**PASS**

---

# Cross-perspective blocker ledger

| Concern | Perspective | Blocking? | Resolution |
|---|---|---:|---|
| Slides 16–17 could become glossary walls | UI/UX | Yes | Fixed in storyboard: primary architecture slots + subordinate examples |
| Ticket field density | UI/UX | No | Existing “one real Ticket” visual contract is sufficient |
| Brainstorm ≠ backlog | PM | Yes historically | Already fixed in Slides 6–7 |
| Human converge lacked explicit criteria | PM | Yes | Fixed in Slide 7: benefit / cost / risk / reversibility / evidence needed |
| Complete Ticket ≠ next to build | PM | Yes historically | Fixed in #9: Priority / dependency gate on Slide 9 |
| Slides 2–4 risk definition fatigue | Speaker | Yes | Fixed: one 60–90 sec continuous LUT micro-demo |
| Optional Advanced skip path | Speaker | Yes historically | Fixed in #9: 13→18 or 13→14→…→18 |
| LLM durable-memory overclaim | Agent engineer | Yes historically | Storyboard wording is technically defensible |
| LLM acronym expanded imprecisely | Agent engineer | Yes | Fixed: Large Language Model / 大型語言模型 on first use |
| Tool access vs permission | Agent engineer | Yes historically | Slide 5 / 16 preserve distinction |
| Subagent confused with knowledge source | Agent engineer | Yes historically | Slide 15 canonical definition |
| Beginner jargon before definition | Beginner | Yes | Fixed first-use terminology contract |
| Slide 3 still used `repo / project task surface` | Beginner | Yes | Fixed to plain-language 專案工作介面 / 專案・程式碼資料夾 |
| Deep context/session mechanics in Core | Beginner + Engineer | No—deferred | Explicit Appendix / Agent 201 disposition |

There are **no unresolved blocking concerns** after the storyboard patch in this issue.

---

# Teaching-flow check

## Core forward path

```text
1  Why this course
2  What is an Agent
3  How do I start
4  How does the loop continue
5  Where actions execute
6  Brainstorm
7  Human commitment
8  Work hierarchy
9  Ticket + AC + Priority/dependency gate
10 Work state
11 GitHub delivery path
12 Review / acceptance decision
13 Merge / Core stop
18 Summary (short route)
```

Each slide creates the reason for the next. The speaker does not need to jump backward to introduce a missing prerequisite.

## Full route

```text
13 Core stop
→ 14 Human roles
→ 15 Subagent
→ 16 architecture slots
→ 17 need → capability map
→ 18 summary
```

Advanced concepts appear only after the learner already has a problem they solve.

---

# #10 Acceptance check

- [x] UI/UX perspective lists concrete pain points and blocking concerns.
- [x] PM perspective lists concrete pain points and blocking concerns.
- [x] Presentation speaker perspective lists concrete pain points and blocking concerns.
- [x] LLM / Agent engineer perspective lists concrete pain points and blocking concerns.
- [x] Cold Agent beginner perspective lists concrete pain points and blocking concerns.
- [x] Every blocking concern is fixed in the storyboard or explicitly deferred to Agent 201 / Appendix.
- [x] Beginner terminology is introduced before later slides depend on it.
- [x] Review checks teaching flow, transitions and cognitive load—not only factual correctness.
- [x] No final slide copy, HTML, CSS or #11 implementation is included.

## Conclusion

The storyboard is ready to hand to **#11 Core content rewrite** once this review is approved and merged.
