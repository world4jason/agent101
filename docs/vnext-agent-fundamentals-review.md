# #23 Five-Lens Review — Agent Fundamentals Reorder

Parent: #7  
Execution ticket: #23  
Reviewed head: `issue-23-agent-fundamentals`

This review evaluates the **actual learner-visible copy + live HTML/CSS**, not only the issue proposal.

## Final result

**PASS — all five lenses.**

The review found five concrete implementation/content problems during the pass:

1. the mobile Agent-anatomy arrow consumed excessive vertical space;
2. the mobile Codex / ChatGPT mapping initially required a horizontal table;
3. Durable project state and product/harness Memory were too easy to read as synonyms;
4. learner-visible copy reintroduced expert wording such as `framing / acceptance / source of truth`;
5. the new Agent-fundamentals slides regressed the approved **Chinese-first** rule by introducing several English terms before their plain-language Chinese meaning.

All five were fixed before this final review.

---

## 1. UI/UX — PASS

### What changed

Slides 2–5 now form one progressive disclosure sequence:

```text
familiar Human delegation
→ Agent anatomy / state
→ Agent loop
→ product mapping / where to start
```

The deck no longer opens with product surfaces before the learner has a mental model.

### Review findings

**Finding A — mobile anatomy layout**

The first mobile implementation rotated the “compose current context” connector and made it consume too much height.

**Resolution:** mobile anatomy now uses a simple downward connector.

**Finding B — product map on 390px**

The first implementation used a three-column horizontally scrollable table.

That preserved pixels but harmed reading order.

**Resolution:** on mobile each concept becomes a vertical unit:

```text
Concept
→ Codex
→ ChatGPT
```

No horizontal page overflow is required.

### Hierarchy check

- Slide 2: one mapping path, not a card wall.
- Slide 3: outer runtime → current context → model is the dominant path.
- Slide 4: one loop.
- Slide 5: one concept-to-product map.
- Slide 6 is the first running-example slide.

**UI/UX: PASS.**

---

## 2. PM — PASS

The revised course now begins from a familiar management action:

> “How would I delegate this to a coworker?”

and maps that to:

- goal / task;
- context;
- instructions;
- tools;
- permissions;
- action / observation;
- Human review.

Important PM ownership remains explicit:

- Human owns framing / criteria / trade-offs / acceptance;
- Brainstorm output is not Backlog;
- Ticket complete ≠ execute now;
- Priority / dependency gate remains before Backlog;
- Agent self-report ≠ acceptance.

The running example is now self-contained:

> **活動報名頁：手機版很難找到「立即報名」**

and remains coherent through:

```text
Discover
→ choose 固定底部 CTA
→ Plan hierarchy
→ #42 Ticket
→ Execute
→ PR #71
→ AC 3 fails
→ Request Changes
→ fix
→ Human accepts
→ Merge / GitHub Pages
```

**PM: PASS.**

---

## 3. Presentation speaker — PASS

### Forward flow

The speaker no longer has to explain a product noun before the learner knows what it maps to.

Approved order:

1. course thesis;
2. coworker → Agent delegation bridge;
3. Agent anatomy / state;
4. Agent loop;
5. Codex / ChatGPT product mapping;
6. first concrete running example.

### Transition logic

- Slide 2 creates the question “what does the Agent/App need to manage?”
- Slide 3 creates the question “how do those pieces become a working loop?”
- Slide 4 creates the question “where do these abstract pieces appear in products?”
- Slide 5 finally answers “where do I start?”
- Slide 6 begins actual project work.

No backward prerequisite repair is required.

### Timing

Desk timing budget after #23:

- Core: **~27:30**
- Full: **~42–48 min** including the previously budgeted optional section / interaction.

This remains an **estimate only**. Measured read-aloud is still a #14 empirical gate.

**Presentation speaker: PASS.**

---

## 4. LLM / Agent engineer — PASS

### Correct separations

The deck now distinguishes:

- **Model / LLM** — reasoning layer;
- **Instructions** — system / project / task rules;
- **Current Context** — information available to this step;
- **Work conversation / Session** — product-specific work / execution boundary, not Agent identity;
- **Tools** — callable capabilities;
- **Environment / Permissions** — where actions happen and what is allowed;
- **Durable project state** — docs / issues / code / commits / PR / evidence;
- **optional product / harness Memory** — long-term state that may later be brought into context.

### Review finding — state vs Memory

Earlier #23 copy used “Durable State / Memory”, which could imply equivalence.

**Resolution:** changed to **Durable State + optional Memory** and explicitly states:

> durable project state is the formal project basis; product/harness Memory is only an optional long-term context source.

### Product mapping guardrails

- new chat / window / session ≠ new Agent identity;
- `AGENTS.md` is one implementation of project instructions;
- `CLAUDE.md` is a subordinate Claude Code example;
- `MEMORY.md` is not a universal standard;
- Plugins / Connectors map under Tools / integrations;
- Tool access ≠ Permission;
- product mapping is a conceptual map, not a one-to-one API contract;
- no claim says every turn literally resends the whole conversation.

**LLM / Agent engineer: PASS.**

---

## 5. Cold Agent beginner — PASS

### Why the new entry works better

A beginner can start from something already familiar:

```text
tell coworker the goal
→ give background / rules
→ give tools / access
→ coworker acts
→ reports result
→ Human reviews
```

Then the same structure becomes Agent vocabulary.

This makes terms such as Context / Instructions / Tools / Permission answer a real question instead of appearing as a glossary.

### Review finding — expert wording regression

Learner-visible copy temporarily reintroduced:

- `framing`;
- `acceptance` outside its canonical review context;
- `project source of truth`.

**Resolution:** translated to plain Chinese:

- 定義問題;
- 決定是否驗收;
- 專案的正式依據.

### Review finding — Chinese-first regression

The reordered Slides 2–5 were technically correct but initially displayed several new concepts English-first.

**Resolution:** learner-visible first use now shows the plain-language Chinese meaning first, with the industry term retained as the secondary label. Examples:

- 目標 / 工作（Goal / Task）
- 工作脈絡 + 指令（Context + Instructions）
- 工作對話 / Session
- 目前工作脈絡（Current Context）
- 工具 / 行動（Tool / Action）
- 觀察結果（Observation）
- 專案邊界（Project boundary）
- 正式專案狀態 + 可選記憶

This keeps the industry vocabulary learnable without requiring it as a prerequisite.

### Example check

There is no learner-visible LUT Gallery reference.

The activity-registration example requires no prior project knowledge and starts only after the Agent fundamentals are complete.

**Cold Agent beginner: PASS.**

---

# Naming review

Top-level workflow is now:

```text
Discover
→ Plan
→ Specify
→ Execute
→ Review
→ Deliver
```

Navigation rail:

- 01 Agent
- 02 Plan
- 03 Delivery
- 04 Advanced

The old shorthand labels are absent from the live deck:

- 想・拆・票
- 做・審・合
- 人・能力

**PASS.**

---

# Render / implementation validation

## Standalone #23 branch

1920×1080 Chrome:

- horizontal document overflow: **0 / 18**
- slide horizontal overflow: **0 / 18**
- slide vertical overflow: **0 / 18**
- viewport-outside learner-visible text: **0 / 18**

## Final-release composition simulation

Because #14 currently owns unmerged projection / print fixes, #23 was also tested locally as:

> **latest #23 head + current #14 projection/print CSS patch**

This simulates the required post-#23 #14 revalidation without moving #14 code into the #23 PR.

Results:

### 1920×1080
- document horizontal overflow: **0 / 18**
- slide overflow: **0 / 18**

### 1280×720
- document horizontal overflow: **0 / 18**
- slide horizontal overflow: **0 / 18**
- slide vertical overflow: **0 / 18**
- learner-visible text outside viewport: **0 / 18**
- minimum main heading size: **42px**

### 390×844
- document horizontal overflow: **0 / 18**
- slide horizontal overflow: **0 / 18**
- fixed-footer overlap at bottom: **0 / 18**
- product mapping uses vertical reading order, not horizontal table scrolling

### Print / PDF
- pages: **18**
- page size: **960×540pt**
- aspect ratio: **16:9**
- print overflow: **0 / 18**

Final release still requires #14 to rerun these checks after #23 merges.

---

# #23 Acceptance check

## Teaching order
- [x] Human coworker → Agent analogy appears before architecture jargon.
- [x] Slides 2–5 follow delegation bridge → anatomy/state → loop → product mapping.
- [x] Product names do not appear before the abstract Agent model is established.
- [x] Environment / Permission is integrated into anatomy / product mapping.
- [x] Slide 6 is the first running-example slide.

## Technical correctness
- [x] Chat/window/session is separated from Agent identity.
- [x] Current Context is distinguished from durable state / optional Memory.
- [x] Instructions / Tools / Environment / Permissions are distinct.
- [x] `AGENTS.md` is only a project-instructions example.
- [x] `MEMORY.md` is not taught as universal.
- [x] Product Memory is not project formal truth.
- [x] Plugins / Connectors map to Tools / integrations.
- [x] Tool availability ≠ Permission remains explicit.
- [x] No full-history resend claim.

## Example / comprehension
- [x] No learner-visible LUT Gallery reference remains.
- [x] Generic activity-registration example requires no project background.
- [x] Same example remains coherent from Slide 6 through Merge.
- [x] Q1–Q7 desk answerability has been updated for the new mental model.

## Naming
- [x] Main workflow uses Discover → Plan → Specify → Execute → Review → Deliver.
- [x] Top navigation no longer uses the old Chinese shorthand.
- [x] Chinese explanation remains where it improves beginner comprehension.

## Source / implementation
- [x] #7, storyboard, slide copy, walkthrough, and live deck agree on the new order / example.
- [x] AC / Evidence / PR / Review / Merge canonical teaching locations remain unchanged.
- [x] Live slide count remains 18.
- [x] No new build step / runtime dependency.

## Review / validation
- [x] Review pass 1: source-of-truth / technical correctness PASS.
- [x] Review pass 2: speaker / cold beginner PASS after Chinese-first fix.
- [x] Review pass 3: render / navigation / regression PASS.
- [x] UI/UX lens PASS.
- [x] PM lens PASS.
- [x] presentation speaker lens PASS.
- [x] LLM / Agent engineer lens PASS.
- [x] cold beginner lens PASS.
- [x] Changed deck was re-rendered at desktop / projection / mobile / print release targets.

## Remaining release dependency

#23 itself is review-ready.

#14 / PR #22 remains blocked until:

1. #23 is reviewed and merged;
2. #14 refreshes from the new main;
3. final render checks are rerun on the merged composition;
4. measured read-aloud + real cold-beginner empirical gates are completed.
