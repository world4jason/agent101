# Agent 101 vNext — Slide Contract / Storyboard

Parent: #7  
Execution ticket: #9  
Input: merged #8 inventory / duplicate map

## Contract rules

This document defines the teaching contract **before** any on-slide copy rewrite or HTML/CSS implementation.

Each live slide must have exactly one primary learning job and must specify:

- learner question;
- one takeaway;
- dominant visual;
- running LUT Gallery example state;
- prerequisite;
- transition to the next slide.

Canonical-location decisions inherited from #8 are binding:

- **PR is defined on Slide 11.** Slide 12 only consumes the existing PR for review.
- **Memory belongs to Slide 16 / Context.** It is optional product context, not the project source of truth.
- **Web Search belongs to Slide 16 / Tools.** It is a built-in-tool / fresh-public-information example, not a separate Slide 17 capability row.
- AC is defined once on Slide 9 and reused on Slide 12.
- Subagent is defined on Slide 15; later references must not redefine it.

## Running example

**LUT Gallery problem:** users have many LUTs and cannot quickly find a look they like.

The same example must remain recognizable across the core path:

```text
problem
→ brainstorm options
→ choose Find Similar
→ hierarchy
→ #42 Ticket + AC
→ Kanban
→ GitHub Issue / Branch / Commit / PR
→ Evidence + Review
→ Human acceptance
→ Merge
```

---

# Live slide contract

## Slide 1 — 管 AI 專案，本質是管工作

- **Learner question:** 這堂課最後要讓我會什麼？
- **One takeaway:** 不先背 prompt 或工具；先把工作變成可委派、可追蹤、可驗收、可交付。
- **Dominant visual:** 大型 roadmap：想 → 拆 → 票 → 做 → 審 → 合。
- **Running example state:** 只露出問題：「LUT 太多，挑一個喜歡的很慢。」
- **Prerequisite:** None.
- **Transition:** 要管理 Agent 的工作，先知道 Agent 到底是什麼。

## Slide 2 — Agent = Goal → Act → Observe → Continue

- **Learner question:** Agent 跟一般問答式聊天有什麼不同？
- **One takeaway:** Agent 是有目標、能選擇行動、使用工具、觀察結果並繼續的 AI worker。
- **Dominant visual:** Goal → Act → Observe → Continue loop。
- **Running example state:** Goal = 先檢查 LUT Gallery，找出 discovery 最卡的地方。
- **Prerequisite:** Slide 1 course goal.
- **Transition:** 知道 Agent 是什麼後，下一個實際問題是「我要去哪裡開一個？」

## Slide 3 — 不用找通用的「Agent 按鈕」

- **Learner question:** Codex / Claude Code / ChatGPT 裡，我到底怎麼開始 Agent work？
- **One takeaway:** Agent 是能力 / worker，不一定是一個獨立按鈕；在 agentic product 的 task surface 直接給 bounded goal 即可開始。
- **Dominant visual:** 三個 task-entry examples：Codex / Claude Code / ChatGPT Work。
- **Running example state:** 在 repo / project task surface 給出「先 inspect，不要直接改」的工作。
- **Prerequisite:** Slide 2 Agent definition.
- **Transition:** 既然 Agent 可以連做多步，模型到底怎麼延續上一輪工作？

## Slide 4 — LLM 做當下推理；Agent/App 維持 loop

- **Learner question:** 為什麼 Agent 不會在一次 model response 後就停？
- **One takeaway:** LLM 只對當下 call 的 context 做推理；Agent/App 組 current input、執行 action、收 observation，再建立下一輪 input。
- **Dominant visual:** Current Input → LLM → output/tool request → Action → Observation → next Input ↺。
- **Running example state:** current task + project instructions + relevant files → inspect → observation → next step。
- **Prerequisite:** Slides 2–3.
- **Transition:** Agent 決定做什麼，那些 action 實際在哪裡跑？

## Slide 5 — Agent 決定；Environment 執行

- **Learner question:** Local Agent 和 Cloud Agent 的差別到底在哪？
- **One takeaway:** Agent 是 decision/loop；Environment 是 action 執行的位置；Tool availability 也不等於 permission。
- **Dominant visual:** Agent center → Local environment / Cloud environment，外加 permission gate。
- **Running example state:** 同一個 LUT task 可在 local repo 或 cloud sandbox 執行。
- **Prerequisite:** Slide 4 runtime loop.
- **Transition:** 機制夠了，現在從真正的「模糊 idea」開始工作。

## Slide 6 — 想：先發散，再由 Human 收斂

- **Learner question:** 我只有「挑 LUT 很痛苦」這種模糊感受，怎麼跟 AI 開始？
- **One takeaway:** Human frame → AI diverge → challenge/cluster → Human converge。
- **Dominant visual:** diverge / converge funnel。
- **Running example state:** 候選包含 Find Similar / Auto-group / Compare / Search improvements。
- **Prerequisite:** Learner knows Agent can inspect/discuss.
- **Transition:** AI 想出很多點子，不代表它們都應該進 backlog。

## Slide 7 — Brainstorm output 不是 Backlog

- **Learner question:** AI 給了 20 個 idea，要不要全部開 issue？
- **One takeaway:** Generation 和 Evaluation 要分開；只有 Human consciously selected direction 才變 durable work。
- **Dominant visual:** idea pool → Human decision gate → Commit / Parking lot。
- **Running example state:** Commit = Find Similar；Park = Auto-group / Compare / LUT editor。
- **Prerequisite:** Slide 6 brainstorm process.
- **Transition:** 選定方向後，先判斷工作層級，不要立刻丟進 Kanban。

## Slide 8 — 拆：Milestone → Epic → Story → Task

- **Learner question:** 大方向、能力、使用者結果、可執行工作怎麼分？
- **One takeaway:** Hierarchy 回答「它屬於哪一層」；不是在回答「它現在做到哪」。
- **Dominant visual:** single vertical hierarchy。
- **Running example state:** Milestone「降低選 LUT 認知負荷」→ Epic「Improve LUT discovery」→ Story「find similar from one liked LUT」→ bounded Task。
- **Prerequisite:** Slide 7 committed direction.
- **Transition:** 最下面那個可執行單位，接著要變成不用猜的 Ticket。

## Slide 9 — 票：Ticket + AC 是工作契約

- **Learner question:** 怎樣才算一張可以交給 Agent 的 Ticket？
- **One takeaway:** Ticket 至少包含 Title / Goal / Scope / Non-goals / AC / Owner / Priority / Parent or Dependency / Evidence；AC 必須可觀察、可 Pass/Fail。**Ticket 寫完整，不代表現在就應該做**：Human / PM 還要做 Priority / dependency check，確認價值、順序與 readiness。
- **Dominant visual:** 一張實際 Ticket + 小型 gate：Ticket + AC → Priority / dependency check → Backlog。
- **Running example state:** #42「從喜歡的 LUT 找到相似 LUT」；AC 包含結果、empty state、390px behavior；確認它目前沒有 blocker 且優先級足夠後才進 Backlog。
- **Prerequisite:** Slide 8 bounded Task.
- **Transition:** 通過 Priority / dependency gate 的 Ticket 才進 Backlog；下一頁只回答它進入執行後「現在在哪個狀態」。

## Slide 10 — 做：Kanban 只回答「現在在哪」

- **Learner question:** Agent 開始工作後，我怎麼知道目前進度？
- **One takeaway:** Core state = Backlog → Doing → Review → Done；active Doing WIP < 2 per worker，Review 也是 active work。
- **Dominant visual:** 四欄 Kanban，一張 #42 card 向右移。
- **Running example state:** #42 從 Backlog → Doing → Review。
- **Prerequisite:** Slide 9 ready Ticket.
- **Transition:** 軟體工作除了狀態，還需要一條可追蹤的實際交付路徑。

## Slide 11 — 做：同一張 Ticket 在 GitHub 裡一路走

- **Learner question:** Project / Issue / Branch / Commit / PR 跟我的 Ticket 到底有什麼關係？
- **One takeaway:** Project → Issue → Branch → Commit → PR 是同一份 bounded work 的管理、隔離、紀錄與交付路徑。
- **Dominant visual:** continuous sequence；每個 node 下只寫「purpose」。
- **Running example state:** Project → Issue #42 → branch `feat/42-similar-lut` → commits → PR #71。
- **Prerequisite:** Slide 10 work state.
- **Transition:** **PR 在這裡已被定義為 review / acceptance entry point。** 下一頁不再重講 PR，只回答怎麼審。

## Slide 12 — 審：Agent 說 Done = Ready for Review

- **Learner question:** PR 已經出來了，我怎麼判斷要 Approve 還是 Request Changes？
- **One takeaway:** Review = Evidence + 既有 AC + scope + known limits + Human decision；self-report 或 green checks 都不是自動 acceptance。
- **Dominant visual:** existing PR #71 → Evidence → AC check → Approve / Request Changes。
- **Running example state:** AC 1/2 pass，但 390px AC fail；先問 audience「你會 Approve 嗎？」再 reveal Request Changes。
- **Prerequisite:** Slide 11 PR + Slide 9 AC.
- **Transition:** 全部 acceptance condition 通過後，才進 Merge。

## Slide 13 — 合：Accept → Merge → Done / Deploy

- **Learner question:** 什麼時候這張工作才真的叫 Done？
- **One takeaway:** Human accepts → Merge → Done；需要發布的產品再接 Deploy / Release。
- **Dominant visual:** short terminal sequence + clear Core stopping marker。
- **Running example state:** PR #71 修完 mobile AC → accepted → merged → deployed。
- **Prerequisite:** Slide 12 review decision.
- **Transition:** **Visible stop: Agent 101 Core complete.** 後面只在團隊 / 系統需要時再加。

## Routing after Core

The optional section must be truly skippable:

```text
Core-only / short session:
13 → 18

Full session:
13 → 14 → 15 → 16 → 17 → 18
```

Slide 18 is therefore the closing summary for **both** routes.

---

# Optional / light advanced section

## Slide 14 — 先定 Human responsibility，再談 Agent roles

- **Learner question:** PM / UIUX / FE / BE / Reviewer 各自到底負責什麼？
- **One takeaway:** Agent 可以做角色工作，但 Human accountability 仍要明確。
- **Dominant visual:** responsibility map，不做五張獨立卡片牆。
- **Running example state:** #42 中 PM owns goal/AC/acceptance；UIUX owns flow/state；FE/BE implement；Reviewer verifies。
- **Prerequisite:** Core delivery path complete.
- **Transition:** 責任邊界清楚後，才容易理解什麼叫 specialist Subagent。

## Slide 15 — Subagent = 隔離專責 worker / context

- **Learner question:** 什麼時候需要 Subagent？
- **One takeaway:** 用 Role + Ticket + boundaries + tools + acceptance 定義 specialist worker；只在 specialization / independent review / context isolation 等確實有價值時使用。
- **Dominant visual:** Main Agent → one bounded specialist worker。
- **Running example state:** Reviewer Subagent 只驗 #42 AC，不改 implementation。
- **Prerequisite:** Slide 14 Human roles.
- **Transition:** Subagent 仍然使用同一套 Agent loop；接著把後面的能力放回既有架構。

## Slide 16 — 能力只會插回 Instructions / Context / Tools / Environment / Permissions

- **Learner question:** AGENTS.md、Memory、Web Search、MCP 等到底放在哪？
- **One takeaway:** Advanced features 不是第二套 Agent architecture；它們只是補到已知 loop 周圍的五個位置。
- **Dominant visual:** five-slot architecture mapped back to Slide 4。
- **Running example state:**  
  - Instructions: project rules / AGENTS.md / CLAUDE.md / Skill examples  
  - Context: current conversation / project files / retrieved knowledge / **optional product Memory**  
  - Tools: built-in tools / **Web Search** / MCP / Connector examples  
  - Environment: local / cloud sandbox  
  - Permissions: read / write / approval boundaries
- **Prerequisite:** Slides 4–5; Slide 15 only if subagent is referenced.
- **Transition:** 知道能力「插在哪」後，最後只需問「什麼問題值得加什麼能力」。

## Slide 17 — 缺什麼 capability，再加什麼

- **Learner question:** 什麼時候該加 Skill / RAG / MCP / Connector / Plugin / Subagent / SDD / BMAD？
- **One takeaway:** 從 capability gap 出發，不從工具名詞出發。
- **Dominant visual:** need → capability relation map。
- **Running example state:**  
  - repeatable method → Skill  
  - private/project knowledge retrieval → RAG  
  - external tool/data connection → MCP  
  - packaged SaaS/account integration → Connector / Plugin  
  - isolated specialist work → **Subagent (reference Slide 15; do not redefine)**  
  - larger delivery discipline → SDD / BMAD
- **Prerequisite:** Slide 16 architecture.
- **Transition:** 工具地圖只作補充；最後回到真正要記住的 delivery loop。
- **Canonical guardrail:** **Web Search 不在這頁重新分類。** 它已在 Slide 16 / Tools 定位。

## Slide 18 — 最後只記：想 → 拆 → 票 → 做 → 審 → 合

- **Learner question:** 離開教室後，最低限度要記住什麼？
- **One takeaway:** Understand Agent → Human decides → break down → verifiable Ticket → low-WIP execution → evidence-based review → merge after acceptance。
- **Dominant visual:** 大型 six-step roadmap + 一條 LUT #42 trace。
- **Running example state:** LUT problem → Find Similar → hierarchy → #42 → PR #71 → AC review → Merge。
- **Prerequisite:** Entire live sequence.
- **Transition:** End / optional non-live references.

---

# Non-live references

The current reference material remains available outside the 18-slide live path. Deep-detail topics stay in Appendix / Agent 201, including:

- BDD / TDD mechanics;
- Context compaction / session semantics;
- long-horizon durable-state patterns;
- MCP protocol internals;
- embedding / chunking / reranking;
- detailed SDD / BMAD commands/personas;
- long Skill / framework repository surveys;
- full GitHub metadata taxonomy.

These do not become additional live slides unless a later issue explicitly changes the course scope.

---

# #9 Acceptance check

- [x] Core path follows **Agent → 想 → 拆 → 票 → 做 → 審 → 合**.
- [x] Live target is **18 slides**.
- [x] Every proposed slide specifies learner question / one takeaway / dominant visual / running-example state / prerequisite / transition.
- [x] A visible stopping point exists on **Slide 13** after Merge / Done.
- [x] The same LUT Gallery example runs from brainstorm through merge.
- [x] PR / Memory / Web Search canonical locations match the merged #8 inventory.
- [x] Storyboard is reviewable without writing on-slide copy or touching HTML/CSS.

## Non-goal for #9

This file is a **storyboard contract only**. It does not contain final slide copy, speaker script, rendered layout, CSS decisions, or visual QA evidence. Those belong to later tickets.
