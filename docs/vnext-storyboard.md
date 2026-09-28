# Agent 101 vNext — Slide Contract / Storyboard

Parent: #7  
Original execution ticket: #9  
Amended by release-blocking insertion: #23  
Input: merged #8 inventory / duplicate map

## Contract rules

This document defines the teaching contract **before** any on-slide copy rewrite or HTML/CSS implementation.

Each live slide must have exactly one primary learning job and must specify:

- learner question;
- one takeaway;
- dominant visual;
- running-example state (or explicitly **None before Slide 6**);
- prerequisite;
- transition to the next slide.

Canonical-location decisions inherited from #8 are binding:

- **PR is defined on Slide 11.** Slide 12 only consumes the existing PR for review.
- **Memory belongs to Slide 16 / Context.** It is optional product context, not the project source of truth.
- **Web Search belongs to Slide 16 / Tools.** It is a built-in-tool / fresh-public-information example, not a separate Slide 17 capability row.
- AC is defined once on Slide 9 and reused on Slide 12.
- Subagent is defined on Slide 15; later references must not redefine it.

## Teaching-flow guardrails

The merged #10 review remains binding, with the #23 release insertion replacing the old early micro-demo contract.

- **Slides 2–5 do not use the running product example.** First establish Agent intuition and anatomy.
- Slide 2 starts from a familiar delegation analogy: **coworker → Agent**.
- Slide 3 separates Model / Instructions / Current Context / Work conversation or Session / Tools + Environment + Permissions / Durable State or Memory.
- Slide 4 teaches the runtime loop before any product mapping.
- Slide 5 maps the already-known concepts to Codex / ChatGPT (with Claude Code as a subordinate example).
- **new chat / window / session ≠ Agent identity**.
- `AGENTS.md` is an example of project instructions; `MEMORY.md` is not taught as a universal standard.
- Product Memory may supply context but is not project source of truth.
- Plugins / Connectors are examples under Tools / integrations.
- Tool availability ≠ permission remains explicit.
- Beginner-facing terminology is introduced in plain language on first use.
- Slides 16–17 must not become a glossary wall: architecture slots are primary; named products/protocols are subordinate examples and may be progressively revealed.

## Running example

There is **no running example on Slides 2–5**.

Slide 6 introduces a self-contained example that requires no project-specific background:

> **活動報名頁：手機版很難找到「立即報名」按鈕。**

The same example must remain recognizable from Slide 6 through the Core close:

```text
problem
→ brainstorm options
→ choose 固定底部 CTA
→ hierarchy
→ #42 Ticket + AC
→ Kanban
→ GitHub Issue / Branch / Commit / PR #71
→ Evidence + Review
→ CTA overlap AC fails
→ Request Changes
→ fix
→ Human acceptance
→ Merge / GitHub Pages
```

---

# Live slide contract


## Slide 1 — 管 AI 專案，本質是管工作

- **Learner question:** 這堂課最後要讓我會什麼？
- **One takeaway:** 以前你把工作交給同事；現在也可以交給 Agent。工作管理沒有重來，協作介面變得更明確。
- **Dominant visual:** six-step roadmap：**Discover → Plan → Specify → Execute → Review → Deliver**。
- **Running example state:** None.
- **Prerequisite:** None.
- **Transition:** 你其實已經知道怎麼委派工作；先把「交代同事」映射成「交代 Agent」。


## Slide 2 — From coworker → Agent

- **Learner question:** 我平常怎麼把工作交給同事？換成 Agent 到底改了什麼？
- **One takeaway:** 委派邏輯相似：Goal / background / rules / tools / status / review；Agent 只是把這些合作條件明確化成 context / instructions / tools / permissions / observations。
- **Dominant visual:** 一條左右對照 mapping：coworker delegation → Agent delegation；不是兩套平行架構。
- **Running example state:** None.
- **Prerequisite:** Slide 1 course thesis.
- **Transition:** 既然 Agent 是一個可被委派的 worker，下一步要看「Agent/App 到底要替它管理哪些東西」。


## Slide 3 — Agent/App 要管理哪些東西？

- **Learner question:** Agent 只有 LLM 嗎？Context、session、tools、memory 各自是什麼？
- **One takeaway:** LLM 是 reasoning layer；Agent/App/runtime 另外管理 Instructions、Work conversation / Session、Tools、Environment / Permissions、Durable State + optional Memory，並在每一步組成 Current Context。Durable project state 是正式依據；product/harness Memory 只是可選 context 來源。
- **Dominant visual:** 外層 Agent/App/runtime → sources → **Current Context → LLM** 的單一路徑層級圖。
- **Running example state:** None.
- **Prerequisite:** Slide 2 delegation analogy.
- **Transition:** 知道有哪些部件後，接著看它們如何在每一步形成 Agent loop。


## Slide 4 — LLM 做當下推理；Agent/App 維持 loop

- **Learner question:** Agent 為什麼能做多步，而不是一次 model response 就停？
- **One takeaway:** Agent/App 組 Current Input → LLM 判斷下一步 → Tool / Action → Observation → 建立下一輪 input。
- **Dominant visual:** Current Input → LLM → Tool / Action → Observation → next Input ↺。
- **Running example state:** None.
- **Prerequisite:** Slide 3 anatomy / state buckets.
- **Transition:** 抽象模型已經完整；現在才把它映射到 Codex / ChatGPT，回答「我到底去哪裡開始」。


## Slide 5 — 這些概念在 Codex / ChatGPT 裡長什麼樣？

- **Learner question:** Codex 的 window / project / AGENTS.md，或 ChatGPT 的 Work / Plugins / Memory，跟剛剛那些 Agent 概念怎麼對應？
- **One takeaway:** 產品 UI 只是同一套抽象概念的不同實作；work conversation / session 是工作邊界，不是 Agent 身分本身。
- **Dominant visual:** Concept → Codex → ChatGPT 對照表；下方只保留兩個 start entry。
- **Running example state:** None.
- **Prerequisite:** Slides 2–4.
- **Transition:** 現在才開始一個具體、所有人都能理解的專案例子。
- **Canonical product mapping:**  
  - Work conversation / Session → Codex chat/window/thread；ChatGPT Chat / Work task  
  - Project boundary → Codex repo/project；ChatGPT Work workspace/files/connected sources  
  - Instructions → `AGENTS.md` + task instructions；ChatGPT workspace/task/user instructions  
  - Current Context → current conversation + relevant files + tool results  
  - Tools → terminal/files/code/integrations；ChatGPT built-in tools + Plugins / Connectors  
  - Environment / Permissions → local/cloud execution + allowed actions / approvals  
  - Durable State + optional Memory → repo docs/issues/files or harness-specific memory；ChatGPT files/docs/connected sources/product Memory
- **Guardrail:** Claude Code is a subordinate mapping example: project + `CLAUDE.md` / rules + tools + work conversation.


## Slide 6 — Discover：先發散，再由 Human 收斂

- **Learner question:** 我只知道「手機版很難找到立即報名」，怎麼跟 AI 開始？
- **One takeaway:** Human frame → AI diverge → challenge/cluster → Human converge。
- **Dominant visual:** diverge / converge funnel。
- **Running example state:** 活動報名頁；候選包含首屏 CTA / 固定底部 CTA / 導覽列入口 / 簡化報名步驟。
- **Prerequisite:** Learner already understands Agent anatomy and product mapping.
- **Transition:** AI 想出很多點子，不代表它們都應該進 backlog。


## Slide 7 — Brainstorm output 不是 Backlog

- **Learner question:** AI 給了很多 idea，要不要全部開 issue？
- **One takeaway:** Generation 和 Evaluation 要分開；只有 Human consciously selected direction 才變成正式工作項目。
- **Dominant visual:** idea pool → Human decision gate → Adopt / Park。Decision gate 明確列出：預期效益 / 成本 / 風險 / 可逆性 / 還需要什麼證據。
- **Running example state:** 採用「固定底部 CTA」；暫放首屏 CTA / 導覽列入口 / 簡化步驟。
- **Prerequisite:** Slide 6 brainstorm process.
- **Transition:** 選定方向後，先判斷工作層級，不要立刻丟進 Kanban。


## Slide 8 — Plan：Milestone → Epic → Story → Task

- **Learner question:** 大方向、能力、使用者結果、可執行工作怎麼分？
- **One takeaway:** Hierarchy 回答「它屬於哪一層」；不是在回答「它現在做到哪」。
- **Dominant visual:** single vertical hierarchy。
- **Running example state:** Milestone「降低手機版報名阻力」→ Epic「改善報名入口」→ Story「手機上快速找到立即報名」→ Task「固定底部 CTA」。
- **Prerequisite:** Slide 7 committed direction.
- **Transition:** 最下面那個可執行單位，接著要變成不用猜的 Ticket。


## Slide 9 — Specify：Ticket + Acceptance Criteria（AC）是工作契約

- **Learner question:** 怎樣才算一張可以交給 Agent 的 Ticket？
- **One takeaway:** Ticket 至少包含 Title / Goal / Scope / Non-goals / Acceptance Criteria（AC）/ Owner / Priority / Parent or Dependency / Evidence；**AC = 可觀察、可 Pass/Fail 的完成條件**，**Evidence = Review 時 reviewer 要實際檢查的證據**。Ticket 寫完整，不代表現在就應該做。
- **Dominant visual:** 一張實際 Ticket + 小型 gate：Ticket + AC → Priority / dependency check → Backlog。
- **Running example state:** #42「手機版固定顯示立即報名 CTA」；AC：390px 完整顯示 CTA / 捲動時固定底部 / 不遮主要內容且無水平捲軸。
- **Prerequisite:** Slide 8 executable Task.
- **Transition:** 通過 Priority / dependency gate 後，下一頁只回答工作「現在在哪個狀態」。


## Slide 10 — Execute：Kanban（工作狀態板）只回答「現在在哪」

- **Learner question:** Agent 開始工作後，我怎麼知道目前進度？
- **One takeaway:** Kanban 在這堂課只是一張工作狀態板。Core state = Backlog → Doing → Review → Done；active Doing WIP < 2 per worker，Review 也是 active work。
- **Dominant visual:** 四欄 Kanban，一張 #42 card 向右移。
- **Running example state:** #42 手機版報名 CTA 從 Backlog → Doing → Review。
- **Prerequisite:** Slide 9 ready Ticket.
- **Transition:** 軟體工作除了狀態，還需要一條可追蹤的實際交付路徑。


## Slide 11 — Execute：同一張 Ticket 在 GitHub 裡一路走

- **Learner question:** Project / Issue / Branch / Commit / Pull Request（PR）跟我的 Ticket 到底有什麼關係？
- **One takeaway:** Project → Issue → Branch → Commit → Pull Request（PR）是同一份明確範圍工作的管理、隔離、紀錄與交付路徑。PR 在這裡第一次被定義成「進入 Review / Acceptance 的入口」。
- **Dominant visual:** continuous sequence；每個 node 下只寫 purpose。
- **Running example state:** Project → Issue #42 → branch `feat/42-mobile-cta` → commits → PR #71。
- **Prerequisite:** Slide 10 work state.
- **Transition:** PR 已是 review / acceptance entry point；下一頁直接回答怎麼審。


## Slide 12 — Review：Agent 說 Done = Ready for Review

- **Learner question:** PR 已經出來了，我怎麼判斷要 Approve 還是 Request Changes？
- **One takeaway:** Review = Evidence + 既有 AC + scope + known limits + Human decision；self-report 或 green checks 都不是自動 acceptance。
- **Dominant visual:** existing PR #71 → Evidence → AC check → Approve / Request Changes。
- **Running example state:** AC 1/2 pass，但「CTA 遮住主要內容」fail；先問 audience「你會 Approve 嗎？」再 reveal Request Changes。
- **Prerequisite:** Slide 11 PR + Slide 9 AC.
- **Transition:** 修掉 failed AC、全部 acceptance condition 通過後，才進 Merge。


## Slide 13 — Deliver：Accept → Merge → Done / Deploy

- **Learner question:** 什麼時候這張工作才真的叫 Done？
- **One takeaway:** Human accepts → Merge → Done；需要發布的產品再接 Deploy / Release。
- **Dominant visual:** short terminal sequence + clear Core stopping marker。
- **Running example state:** PR #71 修完 CTA 遮擋 AC → accepted → merged → GitHub Pages 更新。
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
- **Dominant visual:** five-slot architecture mapped back to Slide 4；五個 slot 是第一視覺層級，AGENTS.md / Memory / Web Search / MCP 等只作小型 subordinate examples 或逐步 reveal，不做等權重 glossary cards。
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

## Slide 18 — 最後只記：Discover → Plan → Specify → Execute → Review → Deliver

- **Learner question:** 離開教室後，最低限度要記住什麼？
- **One takeaway:** Understand Agent → Human decides → break down → verifiable Ticket → low-WIP execution → evidence-based review → merge after acceptance。
- **Dominant visual:** 大型 six-step roadmap + 一條活動報名頁 #42 trace；底部保留一條很小的 **Starter toolbox reference strip**，不搶主視覺。
- **Running example state:** 手機版找不到立即報名 → 固定底部 CTA → hierarchy → #42 → PR #71 → AC review → Merge。
- **Starter toolbox reference:** static site / demo → GitHub Pages；backend / DB / auth → Supabase；product analytics → PostHog；DNS / CDN / edge → Cloudflare；transactional email → Resend。只教「什麼時候可能需要」，不展開 vendor features。
- **Prerequisite:** **Core complete (Slide 13).** Slides 14–17 are optional; Slide 18 must work whether they were shown or skipped.
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

- [x] Core path follows **Agent fundamentals → Discover → Plan → Specify → Execute → Review → Deliver**.
- [x] Live target is **18 slides**.
- [x] Every proposed slide specifies learner question / one takeaway / dominant visual / running-example state / prerequisite / transition.
- [x] A visible stopping point exists on **Slide 13** after Merge / Done.
- [x] The activity-registration example begins only on Slide 6 and runs coherently through merge.
- [x] PR / Memory / Web Search canonical locations match the merged #8 inventory.
- [x] Storyboard is reviewable without writing on-slide copy or touching HTML/CSS.

## Non-goal for #9

This file is a **storyboard contract only**. It does not contain final slide copy, speaker script, rendered layout, CSS decisions, or visual QA evidence. Those belong to later tickets.
