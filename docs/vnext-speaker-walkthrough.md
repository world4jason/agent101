# Agent 101 vNext — Speaker Walkthrough + Beginner Comprehension Check

Parent: #7  
Execution ticket: #12  
Inputs: merged #11 learner-visible copy + merged #9/#10 teaching contract

> This issue validates **delivery flow and beginner comprehension before HTML/CSS implementation**. It does not redesign slides and does not implement the deck.

## Validation method

Three passes were run against the actual learner-visible copy:

1. **Forward speaker walkthrough** — read Slides 1–18 in order and check whether the speaker must jump backward to define a missing prerequisite.
2. **Timing pass** — assign a realistic live-teaching budget per slide, preserving the audience decision moment on Slide 12.
3. **Cold-beginner desk simulation** — answer the #7 learning questions using only concepts already introduced in the Core, without relying on Appendix / expert knowledge.

One prerequisite issue was found during the walkthrough:

- The running example used **LUT** before a non-image learner had any hook for the term.

Resolution applied in this issue:

> Slide 2 now says: **LUT 可先理解成「調色預設」**.

One small AC-example clarification was also applied:

> Slide 9 now says **390px 手機寬度** instead of only **390px 寬度**.

No architecture change was required.

---

# 1. Forward speaker walkthrough

## Slides 1–5 — What an Agent is

### Slide 1 → Slide 2

**Speaker bridge**

> 這堂課最後要會的是「想 → 拆 → 票 → 做 → 審 → 合」。但在開始管工作以前，先確認我們說的 Agent 到底是什麼。

**Prerequisite check**

- No Ticket / AC / PR vocabulary is required yet.
- Slide 1 stays plain-language.
- PASS.

### Slide 2 → Slide 3

**Speaker bridge**

> 如果 Agent 是一個能為目標持續行動的 AI 工作者，下一個最實際的問題就是：我到底要去哪裡開一個？

**Micro-demo state**

> Goal: 先檢查 LUT Gallery，找出使用者為什麼很難快速挑到喜歡的 LUT。

**Prerequisite check**

- LUT now has a plain-language first-use hook: 「調色預設」.
- PASS.

### Slide 3 → Slide 4

**Speaker bridge**

> 你不用先找一個通用的 Agent 按鈕；直接在工作介面給它明確工作即可。那它為什麼不會只回答一次就停？

**Micro-demo state**

> Same goal → open the project → 「先檢查，不要直接改。」

**Prerequisite check**

- No unexplained repo/task-surface jargon.
- PASS.

### Slide 4 → Slide 5

**Speaker bridge**

> 現在知道 Agent/App 怎麼讓 LLM 一步一步繼續。下一個問題是：它決定要做的動作，實際在哪裡發生？

**Micro-demo state**

> Same goal → read project/current UI → observe「目前只能逐顆找 LUT」→ next step.

**Prerequisite check**

- LLM is defined on first use.
- Input / action / observation / context are Chinese-first.
- No claim that all prior tokens are resent.
- PASS.

### Slide 5 → Slide 6

**Speaker bridge**

> 到這裡機制已經夠了。接下來不再談 Agent 內部，而是回到你真正會遇到的工作：我只有一個模糊問題，怎麼開始？

**Prerequisite check**

- Local/cloud, environment, permission are already introduced.
- PASS.

**Slides 2–4 continuity result: PASS.**  
The same LUT Gallery goal remains visible through start → inspect → observation → next step.

---

## Slides 6–9 — 想 / 拆 / 票

### Slide 6 → Slide 7

**Speaker bridge**

> 發散的目的只是增加選項，不是立刻產生待辦。接下來要做的是 Human 決策。

**Prerequisite check**

- Brainstorm stages are Chinese-first.
- PASS.

### Slide 7 → Slide 8

**Speaker bridge**

> 選定 Find Similar 之後，還不要直接開工。先決定這件事在整個專案裡是哪一層工作。

**Decision point**

Human compares:

- 預期效益
- 成本
- 風險
- 可逆性
- 還需要什麼證據

**Prerequisite check**

- Human owns criteria / trade-offs / final decision.
- PASS.

### Slide 8 → Slide 9

**Speaker bridge**

> Milestone / Epic / Story / Task 只是工作層級。真正要交給 Agent 執行的那一小塊，才要變成一張不需要猜的工作票。

**Prerequisite check**

- Milestone / Epic / Story / Task each have a plain-language meaning.
- PASS.

### Slide 9 → Slide 10

**Speaker bridge**

> Ticket 寫完整不代表現在就該做。先過優先順序與相依性檢查，通過之後才進待辦，接著才開始看工作狀態。

**Prerequisite check**

- AC / Evidence are defined here once.
- Priority/dependency gate is explicit.
- 390px example now says「手機寬度」.
- PASS.

---

## Slides 10–13 — 做 / 審 / 合

### Slide 10 → Slide 11

**Speaker bridge**

> Kanban 只告訴你「現在在哪」。對軟體工作來說，我們還需要知道同一張工作票實際怎麼被隔離、修改、送審。

**Prerequisite check**

- WIP is explained at first sight.
- Slide 10 says「送審」and does **not** use PR before definition.
- PASS.

### Slide 11 → Slide 12

**Speaker bridge**

> 到這裡才第一次正式介紹 Pull Request，也就是送交審查 / 驗收的入口。下一頁不再重講 PR，而是直接判斷這一張要不要過。

**Prerequisite check**

- PR first-use canonical location is preserved.
- PASS.

### Slide 12 → Slide 13

**Speaker bridge**

> Build / Test 都綠，但只要一條事先約定的 AC 失敗，就還不能通過。等所有條件通過、Human 接受之後，才進合併。

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

**Prerequisite check**

- AC is reused, not redefined.
- Self-report / automated checks ≠ acceptance.
- PASS.

### Slide 13 → Slide 18 or Slide 14

**Speaker bridge — Core-only**

> 到這裡你已經能跑一個小型 Human + Agent 專案。如果今天只上 Core，直接跳最後一頁收束。

**Speaker bridge — Full**

> 如果還要談多人責任、Subagent 與進階能力，再往下走。

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

# 3. Timing pass

The target in #7 is roughly:

- Core ≈ 25–30 min
- Roles + Advanced ≈ 10 min
- Interaction / questions ≈ 5–10 min
- Total ≈ 40–50 min

## Core timing budget

| Slide | Topic | Target |
|---:|---|---:|
| 1 | Course promise / six-step map | 1:00 |
| 2 | What is an Agent | 1:45 |
| 3 | How to start | 1:30 |
| 4 | LLM vs Agent/App loop | 2:30 |
| 5 | Agent vs Environment | 1:30 |
| 6 | Brainstorm | 2:00 |
| 7 | Human decision | 2:00 |
| 8 | Work hierarchy | 2:00 |
| 9 | Ticket + AC + priority/dependency | 3:00 |
| 10 | Kanban / WIP | 1:30 |
| 11 | GitHub delivery path | 2:00 |
| 12 | Review decision exercise | 3:30 |
| 13 | Merge / Core stop | 1:15 |
| **Core total** |  | **25:30** |

This fits the #7 Core target **without rushing glossary definitions**, because the terminology has already been reduced / translated in #11.

## Full-session timing

| Block | Target |
|---|---:|
| Core | 25:30 |
| Slide 14 — Human roles | 2:00 |
| Slide 15 — Subagent | 2:00 |
| Slide 16 — Architecture slots | 2:30 |
| Slide 17 — Need → capability | 2:30 |
| Slide 18 — Summary | 1:30 |
| Questions / audience interaction | 5–10 min |
| **Full session** | **40–46 min** |

**Timing result: PASS.**

### Cut order if time slips

1. Keep Slides 1–13.
2. Skip Slides 14–17.
3. Go directly 13 → 18.
4. Do **not** cut Slides 2–4, Brainstorm → Ticket, or Slide 12 acceptance exercise.

---

# 4. Cold-beginner comprehension check

This is a **desk simulation against the actual Core copy**, not a claim that an external human participant has already been tested. The purpose is to verify that every expected answer can be constructed from concepts introduced before the question is asked.

A real participant can use the same questions during final teaching validation.

## Q1 — LLM 和 Agent/App 有什麼不同？

**Pass answer in plain language**

> LLM 是每一步負責推理的模型。Agent/App 會準備這一步需要的資訊、執行工具、看結果，再把需要的資訊帶到下一步，所以工作可以繼續。

**Must not require**

- session
- context window internals
- compaction
- memory implementation

**Supported by**

Slides 2–4.

**Desk result: PASS.**

---

## Q2 — 我是不是要先找一個「Create Agent」按鈕？

**Pass answer**

> 不一定。像 Codex、Claude Code、ChatGPT Work 這些工具，本來就可以用 Agent 方式工作；在工作介面給清楚的目標與限制就能開始。

**Supported by**

Slide 3.

**Desk result: PASS.**

---

## Q3 — 我只有一個模糊 idea，為什麼不能直接叫 AI 開工？

**Pass answer**

> 先讓 AI 幫忙發散、挑戰和分群，再由 Human 用效益、成本、風險、可逆性、需要的證據做選擇。選定之後才變成正式工作。

**Supported by**

Slides 6–7.

**Desk result: PASS.**

---

## Q4 — Milestone / Epic / Story / Task 和 Kanban 有什麼差別？

**Pass answer**

> 前者是在分「工作有多大、屬於哪一層」；Kanban 是看「工作現在在哪個狀態」。

**Supported by**

Slides 8–10.

**Desk result: PASS.**

---

## Q5 — 一張 Ticket 什麼時候才 ready？

**Pass answer**

> Goal、Scope、Non-goals、AC、負責人、優先順序、上層工作和 Evidence 要夠清楚，AC 要能通過 / 不通過；而且還要確認優先順序與相依性，完整不代表現在就該做。

**Supported by**

Slide 9.

**Desk result: PASS.**

---

## Q6 — Agent 說「完成」，為什麼還不能直接算 Done？

**Pass answer**

> 因為它只是說自己做完了。還要看驗收證據、逐條對 AC、確認範圍和已知限制，再由 Human 決定要通過還是退回。

**Supported by**

Slide 12.

**Desk result: PASS.**

---

## Q7 — Build / Test 都綠，為什麼還可能不能 Merge？

**Pass answer**

> 因為自動檢查只是證據的一部分。如果事先約定的產品行為 AC 還有一條失敗，就不能通過。

**Supported by**

Slides 12–13.

**Desk result: PASS.**

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
| Agent | Slide 2 |
| LLM | Slide 4 |
| Environment / Permission | Slide 5 |
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
- [x] Core fits the #7 target delivery time: **~25:30** before questions.
- [x] Cold-beginner desk simulation can explain:
  - LLM vs Agent/App;
  - brainstorm-before-ticket;
  - what makes a Ticket ready;
  - why Agent “done” still needs Review.
- [x] Slides 2–4 use one continuous LUT Gallery micro-demo.
- [x] Advanced slides explicitly refer back to the known Agent loop instead of teaching a second architecture.
- [x] Core-only route remains 13 → 18.
- [x] One domain-specific first-use issue found during walkthrough (LUT) was fixed in learner-visible copy.
- [x] No HTML/CSS implementation or visual QA is included.

## What #12 does not claim

This is a structured **speaker desk walkthrough + cold-beginner desk simulation**. It does not claim that an external human participant has already completed a live class.

If a real cold participant is available before release, reuse Q1–Q7 above as the live comprehension check; any failure should be treated as #14 release feedback rather than silently changing the approved teaching architecture.

## Conclusion

The content is ready to hand to **#13 HTML/CSS implementation** once this issue is reviewed and merged.
