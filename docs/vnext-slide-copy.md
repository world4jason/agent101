# Agent 101 vNext — Approved On-Slide Copy

Parent: #7  
Execution ticket: #11  
Inputs: merged #8 inventory, #9 storyboard, #10 five-perspective review

> This file contains the **actual learner-visible copy** for the 18-slide live deck. It is intentionally not HTML/CSS and not a speaker script. #13 should implement this content without re-expanding deleted concepts or inventing new glossary pages.

## Copy rules

- One primary takeaway per slide.
- One concept has one canonical teaching location.
- The LUT Gallery example remains the same example from brainstorm through merge.
- Slides 2–4 use one continuous micro-demo trace.
- Slides 14–17 are optional; Slide 18 must still work directly after Slide 13.
- Named advanced tools stay subordinate to the architecture / capability question they answer.
- Do not add extra definitions during implementation unless a later reviewed issue changes this contract.

---

# Core

## Slide 1 — 管 AI 專案，本質是管工作

**Eyebrow**

> Agent 101 · Human + Agent 協作入門

**Title**

> 管 AI 專案，  
> **本質是管工作**

**Lead**

> 不先學 prompt 技巧，也不先背工具。  
> 先把工作變成 **可委派、可追蹤、可驗收、可交付**。

**Main roadmap**

> **想**  
> 先發散，再決定  
>
> **拆**  
> 分出工作層級  
>
> **票**  
> Ticket + AC  
>
> **做**  
> 執行 + 狀態  
>
> **審**  
> Evidence + Review  
>
> **合**  
> Accept + Merge

**Bottom line**

> 這堂課只建立兩個 mental model：  
> **Agent 怎麼持續工作；Human + Agent 怎麼把工作交付出去。**

---

## Slide 2 — Agent = Goal → Act → Observe → Continue

**Eyebrow**

> What is an Agent?

**Title**

> Agent = **有目標、能行動、會看結果、再繼續**

**Main loop**

> **GOAL**  
> 我要達成什麼？
>
> ↓
>
> **ACT**  
> 做下一步
>
> ↓
>
> **OBSERVE**  
> 看結果
>
> ↓
>
> **CONTINUE**  
> 繼續、調整，或停下來問 Human
>
> ↺

**Running example**

> LUT Gallery：  
> 「先檢查這個專案，找出使用者為什麼很難快速挑到喜歡的 LUT。先不要改。」

**Bottom line**

> Agent 不是「更會聊天的模型」。  
> 它是能為了目標 **行動 → 觀察 → 繼續** 的 AI worker。

---

## Slide 3 — 不用找「Agent 按鈕」

**Eyebrow**

> How do I start?

**Title**

> 不用先找「Create Agent」；  
> **直接從工作介面開始**

**Three entry examples**

> **Codex**  
> 開啟專案 → 說清楚要它先做什麼
>
> **Claude Code**  
> 進入專案 → 直接交付一個明確工作
>
> **ChatGPT Work**  
> 把需要多步驟完成的工作交出去

**Running example**

> 在專案工作介面輸入：  
> **「先檢查，不要直接改。」**

**Small note**

> 需要指定程式碼位置時，再說「這個專案 / 程式碼資料夾」。

**Bottom line**

> Agent 是一種工作能力，不一定是一個獨立按鈕。

---

## Slide 4 — LLM 做推理；Agent/App 維持 loop

**Eyebrow**

> How does it continue?

**Title**

> **LLM（Large Language Model，大型語言模型）**做這一步推理；  
> Agent/App 把下一輪需要的資訊組回來

**Main flow**

> **CURRENT INPUT**  
> 這一步需要的資訊
>
> → **LLM**  
> 判斷下一步
>
> → **OUTPUT / TOOL REQUEST**
>
> → **ACTION**
>
> → **OBSERVATION**
>
> ↺ 回到下一輪 Input

**Same LUT micro-demo**

> 同一個 goal  
> → Agent 讀專案 / 現有 UI  
> → 發現「目前只能逐顆找 LUT」  
> → 把這個 observation 帶進下一步

**Bottom line**

> 模型只對**這一步拿到的 context**做推理。  
> Agent/App 會把相關指令、檔案、查回來的資料、工具結果等帶進下一輪；  
> **不代表每一輪都逐字重送全部歷史。**

---

## Slide 5 — Agent 決定；Environment 執行

**Eyebrow**

> Agent vs Environment

**Title**

> Agent 決定下一步；  
> **Environment 決定 action 在哪裡執行**

**Main comparison**

> **LOCAL**  
> 你的電腦 / 專案 / shell
>
> **CLOUD**  
> 平台提供的隔離工作環境（sandbox / VM / browser）

**Permission gate**

> **Tool access ≠ Permission**
>
> 看得到工具  
> ≠  
> 這次就可以直接修改、發送或部署

**Bottom line**

> Agent = decision / loop  
> Environment = execution place

---

## Slide 6 — 想：先發散，再收斂

**Eyebrow**

> 想 · Brainstorm

**Title**

> 先讓 AI 發散，  
> **再由 Human 收斂**

**Main flow**

> **1 · FRAME**  
> 「挑 LUT 太慢，我想降低比較成本。」
>
> **2 · DIVERGE**  
> Find Similar · Auto-group · Compare · Search
>
> **3 · CHALLENGE / CLUSTER**  
> 哪些解同一個問題？  
> 哪些成本太高？  
> 哪些需要更多資料？
>
> **4 · CONVERGE**  
> 留下值得進一步比較的方案

**Bottom line**

> AI 幫你擴大選項；  
> **不要在發散階段就急著選答案。**

---

## Slide 7 — Brainstorm output 不是 Backlog

**Eyebrow**

> 想 → Commit

**Title**

> Brainstorm output 不是 Backlog；  
> **先做決策**

**Candidate side**

> **CANDIDATES**
>
> Find Similar  
> Auto-group  
> Compare mode  
> LUT Editor

**Human decision gate**

> **HUMAN DECISION**
>
> Expected benefit  
> Cost  
> Risk  
> Reversibility  
> Evidence needed

**Result**

> **COMMIT**  
> Find Similar
>
> **PARK**  
> Auto-group · Compare · LUT Editor

**Bottom line**

> **Human owns criteria / trade-offs / final decision.**  
> 不是 AI 生很多方案，Human 就隨便挑一個。

---

## Slide 8 — 拆：Milestone → Epic → Story → Task

**Eyebrow**

> 拆 · Work Hierarchy

**Title**

> 先分工作層級，  
> **再談它現在做到哪**

**Hierarchy**

> **MILESTONE**  
> 降低挑 LUT 的認知負荷
>
> ↓
>
> **EPIC**  
> Improve LUT discovery
>
> ↓
>
> **STORY**  
> 使用者可以從一個喜歡的 LUT 找到相似候選
>
> ↓
>
> **TASK**  
> Find Similar entry + result list

**Bottom line**

> Hierarchy 回答：**「它屬於哪一層？」**  
> Kanban 等一下才回答：**「它現在在哪？」**

**Small note**

> 團隊名稱可以不同；先學工作層級，不背一套固定名詞體系。

---

## Slide 9 — 票：Ticket + AC 是工作契約

**Eyebrow**

> 票 · Ticket + Acceptance Criteria

**Title**

> Ticket 要讓別人不用猜；  
> **AC 要能 Pass / Fail**

**Ticket**

> **#42 · 從喜歡的 LUT 找到相似 LUT**
>
> **Goal**  
> 降低使用者逐顆比較 LUT 的認知負荷。
>
> **Scope**  
> 從既有 LUT 找相似候選。
>
> **Non-goals**  
> 不做 Auto-group；不做 LUT Editor。
>
> **Acceptance Criteria（AC）**  
> ① 點「找相似」後會出現候選  
> ② 資料不足時有明確 Empty State  
> ③ 390px 寬度沒有水平捲軸
>
> **Owner / Priority / Parent**  
> Agent A · P1 · Improve LUT discovery
>
> **Evidence**  
> Preview + desktop/mobile screenshots + checks

**Gate after the Ticket**

> Ticket + AC  
> → **Priority / Dependency Check**  
> → Backlog

**Bottom line**

> **AC = 可觀察、可 Pass / Fail 的完成條件。**  
> **Evidence = Review 時 reviewer 要實際檢查的證據。**  
> Ticket 寫完整，**不代表現在就應該做**。

---

## Slide 10 — 做：Kanban 只回答「現在在哪」

**Eyebrow**

> 做 · Kanban

**Title**

> Kanban 是工作狀態板；  
> **不要把它和工作層級混在一起**

**Board**

> **BACKLOG**  
> #43 Auto-group  
> #44 Compare mode
>
> **DOING · WIP 1/2**  
> #42 Similar LUT · Agent A
>
> **REVIEW**  
> 下一站：PR + Evidence + AC
>
> **DONE**  
> #38 Collection filter

**Bottom line**

> Core flow = **Backlog → Doing → Review → Done**  
> Review 也是 active work。  
> 每個 worker 同時進行中的工作（WIP）：**少於 2 件**。

---

## Slide 11 — 同一張 Ticket 在 GitHub 裡一路走

**Eyebrow**

> 做 · GitHub

**Title**

> 不用先背 Git 名詞；  
> **看同一張 Ticket 怎麼一路交付**

**Main path**

> **PROJECT**  
> 看整體工作與狀態
>
> →
>
> **ISSUE #42**  
> 工作契約 / AC
>
> →
>
> **BRANCH**  
> 隔離這張票的改動
>
> →
>
> **COMMIT**  
> 可追蹤的 checkpoint
>
> →
>
> **PULL REQUEST（PR）#71**  
> 進入 Review / Acceptance

**Bottom line**

> PR 在這裡只有一個定義：  
> **送交 Review / Acceptance 的入口。**

**Small note**

> 一般 feature work 不直接推 main。

---

## Slide 12 — 審：Agent 說 Done = Ready for Review

**Eyebrow**

> 審 · Review / Acceptance

**Title**

> Agent 說「Done」  
> **只代表可以開始 Review**

**PR #71 evidence**

> **Evidence**  
> Preview + screenshots + checks ✅
>
> **AC 1**  
> 點「找相似」會出候選 ✅
>
> **AC 2**  
> 資料不足有 Empty State ✅
>
> **AC 3**  
> 390px 沒有水平捲軸 ❌
>
> **Known limits**  
> 尚未做 Auto-group；符合 Non-goals

**Audience decision — show before answer**

> **你會 Approve 嗎？**
>
> Build / Test 都是綠的，  
> 但 AC 3 失敗。

**Reveal after audience answers**

> **REQUEST CHANGES**
>
> 一條已約定的 AC 失敗，  
> 就還不能過。

**Bottom line**

> Review 看：**Evidence + AC + Scope + Known limits + Human decision**。  
> Self-report 和 automated checks 都不是自動 acceptance。

---

## Slide 13 — 合：Accept → Merge → Done

**Eyebrow**

> 合 · Merge / Deploy

**Title**

> 被接受、Merge 之後，  
> **這張工作才真的完成**

**Main flow**

> Review  
> → **Human Accept**  
> → **Merge**  
> → **Done**  
> → Deploy / Release（需要時）

**Running example**

> PR #71 修完 mobile AC  
> → Human accepts  
> → Merge  
> → GitHub Pages 更新

**Core stop**

> **AGENT 101 CORE COMPLETE**
>
> 到這裡，你已經能跑一個小型 Human + Agent 專案：  
> **想 → 拆 → 票 → 做 → 審 → 合**

---

# Optional / light advanced

## Slide 14 — 先定 Human 責任，再談 Agent 角色

**Eyebrow**

> Optional · Human Roles

**Title**

> 先定 Human responsibility；  
> **再談 Agent 可以扮演什麼角色**

**Responsibility map**

> **PM**  
> Goal · Priority · Scope · AC · Acceptance
>
> **UI/UX**  
> User flow · State · Interaction · Visual spec
>
> **FE**  
> UI · Client behavior · Integration
>
> **BE**  
> API · Data · Auth · Business logic
>
> **Reviewer / QA**  
> Independent verification

**Bottom line**

> Agent 可以做某個角色的工作；  
> **Human accountability 不會因為用了 Agent 就消失。**

---

## Slide 15 — Subagent = 隔離專責 worker / context

**Eyebrow**

> Optional · Subagent

**Title**

> Subagent 不是另一種資料來源；  
> **它是另一個專責 worker / context**

**Assignment formula**

> **Role + Ticket + Boundaries + Tools + Acceptance**

**Running example**

> **Reviewer Subagent**
>
> Role：Reviewer  
> Ticket：#42 Similar LUT  
> Boundary：不改 code，只驗 AC  
> Tools：Preview · Tests · Diff  
> Acceptance：交付獨立 Pass / Fail evidence

**Bottom line**

> 需要 specialization、independent review、context isolation 時再用。  
> **不要為了「看起來像 multi-agent」而先拆人。**

---

## Slide 16 — 能力都只是插回五個位置

**Eyebrow**

> Optional · Agent Architecture

**Title**

> 後面的能力都只是插回五個位置；  
> **Agent loop 沒有換一套**

**Primary architecture**

> **1 · INSTRUCTIONS**  
> 專案規則 / Skills  
> _examples: AGENTS.md · CLAUDE.md_
>
> **2 · CONTEXT**  
> 目前工作 / 檔案 / 查回來的專案知識  
> _example: optional product Memory_
>
> **3 · TOOLS**  
> 可以呼叫的外部能力  
> _examples: built-in tools · Web Search · MCP · Connectors_
>
> **4 · ENVIRONMENT**  
> action 在哪裡執行  
> _examples: local · cloud sandbox_
>
> **5 · PERMISSIONS**  
> 哪些 read / write / action 要 approval

**Bottom line**

> 回想 Slide 4：**Input → LLM → Action → Observation**。  
> 這一頁只是告訴你，能力從哪裡插進去。

**Small note**

> Product Memory 可以提供 context；  
> **它不是 project source of truth。**

---

## Slide 17 — 缺什麼能力，再加什麼

**Eyebrow**

> Optional · Capability Map

**Title**

> 不要先把工具裝滿；  
> **先問你缺什麼能力**

**Need → Capability**

> 這類事情每次都要照同一套方法？  
> **→ Skill**
>
> 要找公司 / 專案私有知識？  
> **→ RAG**
>
> 要讓 Agent 接外部工具 / 資料介面？  
> **→ MCP**
>
> 要把 SaaS / 帳號能力接進產品？  
> **→ Connector / Plugin**
>
> 要隔離一個專責 worker / context？  
> **→ Subagent**
>
> 大型交付需要更完整的 spec / planning discipline？  
> **→ SDD / BMAD**

**Bottom line**

> 這不是 glossary。  
> **先有 capability gap，再加能力。**

---

## Slide 18 — 最後只記：想 → 拆 → 票 → 做 → 審 → 合

**Eyebrow**

> Takeaway

**Title**

> 最後只記：  
> **想 → 拆 → 票 → 做 → 審 → 合**

**Six-step summary**

> **想**  
> AI 發散，Human 決定
>
> **拆**  
> 把大方向拆成可執行工作
>
> **票**  
> Goal · Scope · AC · Evidence
>
> **做**  
> 低 WIP · bounded work · GitHub
>
> **審**  
> PR · Evidence · AC · Human Review
>
> **合**  
> Accept → Merge → Done / Deploy

**One-line LUT trace**

> 挑 LUT 太慢  
> → Find Similar  
> → #42 Ticket  
> → PR #71  
> → AC Review  
> → Merge

**Starter toolbox reference strip**

> Static site / demo → **GitHub Pages**  
> Backend / DB / auth → **Supabase**  
> Product analytics → **PostHog**  
> DNS / CDN / edge → **Cloudflare**  
> Transactional email → **Resend**

**Final line**

> 不是追求「最會寫 code 的 Agent」，  
> 而是建立**可以放心委派工作的系統**。

---

# Canonical teaching-location check

| Concept | Canonical slide | Later use |
|---|---:|---|
| Agent definition | 2 | Applied, never redefined |
| How to start Agent work | 3 | No second product-entry chapter |
| LLM vs Agent/App loop | 4 | Slide 16 maps capabilities back to it |
| Agent vs Environment / permission | 5 | Slide 16 references the same distinction |
| Brainstorm / Human convergence | 6–7 | Later work starts from committed direction |
| Work hierarchy | 8 | Kanban does not redefine hierarchy |
| Ticket / AC / Evidence definition | 9 | Slide 12 only checks the existing AC/Evidence |
| Work state / Kanban | 10 | No second status taxonomy |
| PR definition | 11 | Slide 12 consumes existing PR |
| Review / Acceptance | 12 | No duplicate Evidence/Acceptance chapter |
| Merge / Done | 13 | Slide 18 summarizes only |
| Human roles | 14 | Subagent follows role ownership |
| Subagent | 15 | Slide 17 only references it |
| Memory | 16 / Context | Not project source of truth |
| Web Search | 16 / Tools | Not reclassified on Slide 17 |
| Capability gaps | 17 | No glossary expansion |
| Starter toolbox | 18 | Reference strip only |

# #11 Acceptance check

- [x] Actual on-slide content exists for all 18 approved live slides.
- [x] One concept has one canonical teaching location.
- [x] No new glossary page or random card-wall content model is introduced.
- [x] LUT Gallery remains one coherent example from brainstorm → #42 → PR #71 → Review → Merge.
- [x] Slides 2–4 use one continuous LUT Gallery micro-demo.
- [x] Agent-loop wording does not claim every prior token is literally resent.
- [x] AC is observable Pass/Fail and is defined on Slide 9, then reused on Slide 12.
- [x] Slide 12 contains an audience decision moment before the answer is revealed.
- [x] Slide 13 is a visible Core stop.
- [x] Slide 18 works after either Core-only or Full routing.
- [x] No HTML/CSS, speaker walkthrough, or visual QA is included.

## Non-goal for #11

Do not treat this document as permission to improvise more content during #13. If implementation pressure makes a slide unreadable, preserve the teaching contract and resolve the layout in #13/#14 rather than silently restoring deleted material.
