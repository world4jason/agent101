# Agent 101 vNext — Speaker Walkthrough + Beginner Comprehension Check

Parent: #7  
Original execution ticket: #12  
Amended by release-blocking insertion: #23  
Inputs: merged #11 learner-visible copy + merged #9/#10 contract + #23 teaching-order amendment

> This issue validates **delivery flow and beginner comprehension before HTML/CSS implementation**. It does not redesign slides and does not implement the deck.

## Validation method

Three passes were run against the actual learner-visible copy:

1. **Forward speaker walkthrough** — read Slides 1–18 in order and check whether the speaker must jump backward to define a missing prerequisite.
2. **Timing budget pass** — assign a realistic live-teaching budget per slide, preserving the audience decision moment on Slide 12. **This is an estimate, not a measured read-aloud.**
3. **Cold-beginner answerability desk simulation** — answer the #7 learning questions using only concepts already introduced in the Core, without relying on Appendix / expert knowledge. **This proves the deck contains enough information to construct the answers; it does not prove a real cold participant can explain them.**

#23 replaces the old early-example contract.

New pre-example rule:

- Slides **2–5 contain no running product example**.
- Agent intuition is taught first through a **Human coworker → Agent** delegation analogy.
- Anatomy/state comes before runtime loop.
- Runtime loop comes before Codex / ChatGPT product mapping.
- Slide 6 is the first concrete running example: **活動報名頁：手機版很難找到「立即報名」**.

This is a deliberate teaching-order change, not a wording-only patch.

---

# 1. Forward speaker walkthrough

## Slides 1–5 — From familiar delegation → Agent model → products

### Slide 1 → Slide 2

**Speaker bridge**

> 以前你會把工作交給同事；現在只是多了一個可以被委派工作的 Agent。先不要碰產品名稱，先看「委派工作」本身有哪些共同條件。

**Prerequisite check**

- no Ticket / AC / PR vocabulary;
- no product mapping yet;
- no running example yet.

**Result: PASS.**

### Slide 2 → Slide 3

**Speaker bridge**

> 交代同事時，你會給目標、背景、規則、工具，再看他做了什麼。換成 Agent，這些東西分別由哪一層負責？

**Prerequisite check**

- Human coworker analogy is explicitly an intuition bridge, not an equality claim;
- Human still owns framing / trade-offs / acceptance.

**Result: PASS.**

### Slide 3 → Slide 4

**Speaker bridge**

> 現在知道 Agent/App 周圍有哪些 state / capability。下一步看它們怎麼被組成「這一次」LLM 真正拿到的 input。

**Prerequisite check**

- Work conversation / Session is separated from Agent identity;
- Current Context is separated from durable state / memory;
- Tools are separated from Environment / Permissions.

**Result: PASS.**

### Slide 4 → Slide 5

**Speaker bridge**

> 到這裡抽象模型才完整。現在再看 Codex / ChatGPT，就不會把「window」「project」「AGENTS.md」「Plugins」誤認成不同種類的 Agent。

**Prerequisite check**

- LLM vs Agent/App loop is already known;
- no token-resend overclaim;
- product names appear only after the abstraction.

**Result: PASS.**

### Slide 5 → Slide 6

**Speaker bridge**

> 現在你知道去哪裡開始，也知道每個產品介面大概對應到哪個 Agent 概念。接下來才真的拿一個普通工作問題來跑完整流程。

**Product-mapping check**

- Codex window / ChatGPT Work task = work conversation / task boundary, **not a new Agent identity**;
- `AGENTS.md` = project instructions example;
- `MEMORY.md` is not presented as a universal standard;
- Plugins / Connectors are Tools / integrations;
- product Memory may provide context but is not project source of truth;
- Tool access ≠ Permission.

**Result: PASS.**

---

## Slides 6–9 — Discover / Plan / Specify

### Slide 6 → Slide 7

**Speaker bridge**

> 活動報名頁的手機版很難找到「立即報名」。先不要叫 AI 直接改；先讓它幫忙擴大選項，再由 Human 決定。

**Prerequisite check**

- the running example starts here for the first time;
- no project-specific background is required.

**Result: PASS.**

### Slide 7 → Slide 8

**Speaker bridge**

> 我們用效益、成本、風險、可逆性與證據需求比較後，選「固定底部 CTA」。選定方向後，才進工作規劃。

**Decision point**

Human compares:

- 預期效益
- 成本
- 風險
- 可逆性
- 還需要什麼證據

**Result: PASS.**

### Slide 8 → Slide 9

**Speaker bridge**

> Milestone / Epic / Story / Task 只是在分工作層級。真正要交給 Agent 做的那個 Task，接著才變成一張不用猜的工作票。

**Prerequisite check**

- each hierarchy noun has a plain-language meaning;
- hierarchy is still distinct from Kanban state.

**Result: PASS.**

### Slide 9 → Slide 10

**Speaker bridge**

> Ticket 寫完整不代表現在就該做。先過優先順序與相依性檢查，才進 Backlog，接著才看執行狀態。

**Prerequisite check**

- AC / Evidence are defined here once;
- mobile CTA AC is observable Pass / Fail.

**Result: PASS.**

---

## Slides 10–13 — Execute / Review / Deliver

### Slide 10 → Slide 11

**Speaker bridge**

> Kanban 只告訴你「現在在哪」。軟體工作還需要知道同一張工作票怎麼被隔離、修改、送審。

**Prerequisite check**

- WIP is already explained at first sight;
- Slide 10 does not use PR before definition.

**Result: PASS.**

### Slide 11 → Slide 12

**Speaker bridge**

> 到這裡才第一次正式介紹 Pull Request：它是送交審查 / 驗收的入口。下一頁直接判斷這張 PR 能不能過。

**Result: PASS.**

### Slide 12 → Slide 13

**Speaker bridge**

> 建置 / 測試都綠，但 CTA 還會遮住主要內容，所以 AC 3 失敗。先退回修改；修掉這條 AC 之後，Human 才接受並 Merge。

**Audience decision moment**

Before reveal:

> **你會通過（Approve）嗎？**

Given:

- Evidence exists
- AC 1 ✅
- AC 2 ✅
- AC 3 ❌

Expected audience judgment:

> **退回修改（Request Changes）**

**Result: PASS.**

### Slide 13 → Slide 18 or Slide 14

**Speaker bridge — Core-only**

> 到這裡你已經走完 Discover → Plan → Specify → Execute → Review → Deliver。短版課程直接跳 Slide 18。

**Speaker bridge — Full**

> 如果還要談角色分工、Subagent 與進階能力，再進 Optional。

**Core stop check: PASS.**

---

# 2. Optional / Advanced forward check

## Slide 14 → Slide 15

Human responsibility comes before Subagent.

**PASS.**

## Slide 15 → Slide 16

Subagent is already defined as specialist worker/context before architecture examples.

**PASS.**

## Slide 16 → Slide 17

Speaker explicitly re-anchors:

> 回想 Slide 4：輸入 → LLM → 動作 → 觀察結果。

Therefore Slide 16 does **not** teach a second Agent architecture.

**PASS.**

## Slide 17 → Slide 18

Capability map answers a need; it does not become a glossary.

**PASS.**

---

# 3. Timing budget — estimate only

The target in #7 is roughly:

- Core ≈ 25–30 min
- Roles + Advanced ≈ 10 min
- Interaction / questions ≈ 5–10 min
- Total ≈ 40–50 min

## Core timing budget

| Slide | Topic | Target |
|---:|---|---:|
| 1 | Course promise / six-step map | 1:00 |
| 2 | Coworker → Agent delegation bridge | 2:00 |
| 3 | Agent anatomy / context / session / memory | 2:30 |
| 4 | LLM vs Agent/App loop | 2:15 |
| 5 | Codex / ChatGPT product mapping + start | 2:30 |
| 6 | Brainstorm | 2:00 |
| 7 | Human decision | 2:00 |
| 8 | Work hierarchy | 2:00 |
| 9 | Ticket + AC + priority/dependency | 3:00 |
| 10 | Kanban / WIP | 1:30 |
| 11 | GitHub delivery path | 2:00 |
| 12 | Review decision exercise | 3:30 |
| 13 | Merge / Core stop | 1:15 |
| **Core total** |  | **27:30** |

This budget fits the #7 Core target **on paper**, because the terminology has already been reduced / translated in #11.

**Validation status:** ESTIMATE ONLY. No measured read-aloud rehearsal has been performed in this PR. The empirical timing gate is deferred to #14 release validation.

## Full-session timing

| Block | Target |
|---|---:|
| Core | 27:30 |
| Slide 14 — Human roles | 2:00 |
| Slide 15 — Subagent | 2:00 |
| Slide 16 — Architecture slots | 2:30 |
| Slide 17 — Need → capability | 2:30 |
| Slide 18 — Summary | 1:30 |
| Questions / audience interaction | 5–10 min |
| **Full session** | **42–48 min** |

**Timing budget result: PLANNING PASS; empirical timing UNVERIFIED.**

### Cut order if time slips

1. Keep Slides 1–13.
2. Skip Slides 14–17.
3. Go directly 13 → 18.
4. Do **not** cut Slides 2–5, Discover → Ticket, or Slide 12 acceptance exercise.

---

# 4. Cold-beginner answerability check — empirical comprehension deferred

This is a **desk simulation against the actual Core copy**, not a claim that an external human participant has already been tested.

The purpose is narrower:

> verify that every expected answer can be constructed from concepts introduced before the question is asked.

Therefore each Q1–Q7 result below is an **answerability result**, not a human-comprehension result.

A real cold participant must use the same Q1–Q7 questions during #14 release validation.

## Q1 — 跟同事合作換成跟 Agent 合作，哪些事情其實沒有變？

**Pass answer in plain language**

> 還是要說清楚目標、背景、規則、能用的工具 / 權限，然後看它做了什麼、再由 Human 判斷要不要繼續或驗收。Agent 只是把這些合作條件變得更明確。

**Supported by**

Slides 1–2.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q2 — LLM 和 Agent/App 有什麼不同？

**Pass answer**

> LLM 負責這一步的推理。Agent/App 管理 instructions、context、tools、environment / permissions、conversation/session 與 durable state，再把需要的資訊組成下一輪 input。

**Supported by**

Slides 3–4.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q3 — Codex 的一個 window / ChatGPT Work task，就是一個新的 Agent 嗎？

**Pass answer**

> 不一定。比較像一段工作的 conversation / task boundary。Agent/App 還可能從 project instructions、files、tools、product memory 或 durable state 帶入其他資訊。New chat / window 不等於 new Agent identity。

**Supported by**

Slide 5.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q4 — 我只有一個模糊 idea，為什麼不能直接叫 AI 開工？

**Pass answer**

> 先讓 AI 幫忙發散、挑戰和分群，再由 Human 用效益、成本、風險、可逆性、需要的證據做選擇。選定之後才變成正式工作。

**Supported by**

Slides 6–7.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q5 — Milestone / Epic / Story / Task 和 Kanban 有什麼差別？

**Pass answer**

> 前者是在分「工作有多大、屬於哪一層」；Kanban 是看「工作現在在哪個狀態」。

**Supported by**

Slides 8–10.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q6 — 一張 Ticket 什麼時候才 ready？

**Pass answer**

> Goal、Scope、Non-goals、AC、負責人、優先順序、上層工作和 Evidence 要夠清楚，AC 要能通過 / 不通過；而且還要確認優先順序與相依性，完整不代表現在就該做。

**Supported by**

Slide 9.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

## Q7 — Agent 說「完成」、Build / Test 都綠，為什麼還可能不能 Merge？

**Pass answer**

> Agent 自己說完成和自動檢查都只是證據的一部分。還要逐條看 AC、範圍與已知限制；只要已約定的產品行為 AC 失敗，就要退回修改，最後由 Human 決定是否接受。

**Supported by**

Slides 12–13.

**Desk answerability: PASS. Human comprehension: UNVERIFIED.**

---

# 5. Backward-jump audit

The walkthrough specifically checked whether the speaker would need to say:

> 「這個名詞等一下才解釋」

or jump backward to repair a missing prerequisite.

## Result

No required backward repair remains in Core.

Key first-use order:

| Concept | First formal teaching location |
|---|---:|
| Human delegation → Agent intuition | Slide 2 |
| Context / Session / Tools / Memory / Environment / Permission | Slide 3 |
| LLM vs Agent/App loop | Slide 4 |
| Codex / ChatGPT product mapping | Slide 5 |
| Brainstorm decision criteria | Slides 6–7 |
| Milestone / Epic / Story / Task | Slide 8 |
| Ticket / AC / Evidence | Slide 9 |
| Kanban / WIP | Slide 10 |
| Pull Request（PR） | Slide 11 |
| Review / Acceptance decision | Slide 12 |
| Merge / Done | Slide 13 |
| Subagent | Slide 15 |
| Memory / Web Search architecture examples | Slide 16 |
| Skill / RAG / MCP / Connector / SDD / BMAD capability map | Slide 17 |

**Backward-jump result: PASS.**

---

# 6. #12 Acceptance check

- [x] Speaker can move forward without jumping backward to repair missing prerequisites.
- [x] Timing **budget** fits the #7 target on paper: Core **~27:30**, Full **~42–48 min**.
- [ ] **Measured read-aloud timing** verifies the Core / Full duration without rushing. **Deferred to #14 release validation.**
- [x] Cold-beginner **desk answerability** confirms the approved copy contains enough information to answer:
  - LLM vs Agent/App;
  - brainstorm-before-ticket;
  - what makes a Ticket ready;
  - why Agent “done” still needs Review.
- [ ] A **real cold beginner** can explain the Q1–Q7 concepts in their own words. **Deferred to #14 release validation.**
- [x] Slides 2–5 contain no running example and follow delegation analogy → anatomy → loop → product mapping.
- [x] Advanced slides explicitly refer back to the known Agent loop instead of teaching a second architecture.
- [x] Core-only route remains 13 → 18.
- [x] No HTML/CSS implementation or visual QA is included.

## Acceptance disposition

#12 validates what can be validated **before implementation**:

### Verified in #12
- forward teaching flow;
- prerequisite ordering;
- Slides 2–5 Agent-fundamentals order;
- Core-only / Full routing;
- Advanced re-anchor;
- Q1–Q7 answerability from the approved copy;
- timing budget / cut order.

### Explicitly not yet empirically validated
- **measured read-aloud duration**;
- **real cold-beginner comprehension**.

Those two empirical gates are moved to **#14 Visual QA + release**, where the rendered deck exists and a real rehearsal / participant test can be recorded.

## Conclusion

The content is ready to hand to **#13 HTML/CSS implementation** once this issue is reviewed and merged, with the two empirical release gates still open in #14.
