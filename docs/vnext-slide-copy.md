# Agent 101 vNext — Approved On-Slide Copy

Parent: #7  
Original execution ticket: #11  
Amended by release-blocking insertion: #23  
Inputs: merged #8 inventory, #9 storyboard, #10 review, #23 teaching-order amendment

> This file contains the **actual learner-visible copy** for the 18-slide live deck. It is intentionally not HTML/CSS and not a speaker script. #13 should implement this content without re-expanding deleted concepts or inventing new glossary pages.

## Copy rules

- One primary takeaway per slide.
- One concept has one canonical teaching location.
- Slides 2–5 contain **no running product example**; they establish Agent intuition, anatomy, loop, and product mapping first.
- The activity-registration example begins on Slide 6 and remains coherent through Merge.
- Slides 14–17 are optional; Slide 18 must still work directly after Slide 13.
- Named advanced tools stay subordinate to the architecture / capability question they answer.
- **Chinese-first for learner-visible copy:** if an English industry term must be learned, show its plain-language Chinese meaning at first sight; otherwise translate or remove it.
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

> 以前你把工作交給同事；現在也可以交給 Agent。  
> 差別是：**背景、規則、工具、權限與驗收，要說得更明確。**

**Main roadmap**

> **Discover**  
> 先理解問題、發散選項
>
> **Plan**  
> 分出工作層級
>
> **Specify**  
> 寫清楚工作與完成條件
>
> **Execute**  
> 開始執行、看狀態
>
> **Review**  
> 看證據、判斷是否通過
>
> **Deliver**  
> 接受後合併 / 交付

**Bottom line**

> **工作管理沒有重來；協作介面變得更明確。**


## Slide 2 — 從跟同事合作，到跟 Agent 合作

**Eyebrow**

> From coworker → Agent

**Title**

> 你已經會把工作交給人；  
> **Agent 只是把合作條件變得更明確**

**Main mapping**

> 你跟同事說「要完成什麼」  
> → **Goal / Task**
>
> 交代背景、現況與規則  
> → **Context + Instructions**
>
> 給文件、系統與可用權限  
> → **Files + Tools + Permissions**
>
> 同事做事、回報發生什麼  
> → **Act → Observe**
>
> 你決定要不要繼續 / 驗收  
> → **Continue / Human Review**

**Bottom line**

> **Agent = 能為目標採取行動、觀察結果，再繼續的 AI 工作者。**  
> 類比只幫你理解委派；framing、取捨與最後 acceptance 仍由 Human 負責。


## Slide 3 — Agent/App 到底要管理哪些東西？

**Eyebrow**

> Agent anatomy

**Title**

> LLM 只是其中一層；  
> **Agent/App 還要管理工作狀態、工具與規則**

**Outer runtime**

> **Instructions**  
> 系統 / 專案 / 任務規則
>
> **Work conversation / Session**  
> 這段工作的對話 / 執行邊界；**不是 Agent 身分本身**
>
> **Tools + Environment + Permissions**  
> 能做什麼、在哪裡做、允許做到哪
>
> **Durable State / Memory**  
> 跨步驟 / 跨對話要重新帶回來的長期資訊

**Current step**

> 上面的來源會被挑選、整理成這一步的  
> **Current Context**
>
> 目前 task + relevant conversation + files / knowledge + tool results  
> → **LLM / Model**

**Bottom line**

> Context 是「**這一步模型能用什麼**」。  
> 長期記憶 / durable state 是「**之後怎麼把重要資訊再帶回來**」。


## Slide 4 — LLM 做這一步推理；Agent/App 維持工作循環

**Eyebrow**

> Agent loop

**Title**

> **LLM 做這一步推理**；  
> Agent/App 把下一輪需要的東西組回來

**Main flow**

> **Current Input**  
> task + instructions + relevant context
>
> → **LLM**  
> 判斷下一步
>
> → **Tool / Action**  
> 呼叫工具或執行動作
>
> → **Observation**  
> 工具 / 環境回傳結果
>
> ↺ 回到下一輪 Input

**Input can come from**

> Instructions · Conversation / Session · Files / Knowledge · Memory / Durable state · Tool results

**Bottom line**

> 模型只對**這一步拿到的 context**做推理。  
> Agent/App 可能挑選、摘要、取回或引用相關狀態；  
> **不代表每輪逐字重送全部歷史。**


## Slide 5 — 這些概念在 Codex / ChatGPT 裡長什麼樣？

**Eyebrow**

> Product mapping

**Title**

> 先懂 Agent，再看產品：  
> **Codex / ChatGPT 只是把同一套概念落到不同介面**

**Concept → product**

> **Work conversation / Session**  
> Codex：chat / window / thread  
> ChatGPT：Chat / Work task
>
> **Project boundary**  
> Codex：repo / project  
> ChatGPT：Work workspace / files / connected sources
>
> **Instructions**  
> Codex：`AGENTS.md` + task instructions  
> ChatGPT：workspace / task instructions + 你的指令
>
> **Current Context**  
> 目前 conversation + relevant files + tool results
>
> **Tools**  
> Codex：terminal / files / code / allowed integrations  
> ChatGPT：built-in tools + Plugins / Connectors
>
> **Environment / Permissions**  
> 執行在哪裡 + 哪些 action 需要 approval
>
> **Durable state / Memory**  
> Codex：repo docs / issues / files；harness 可另外帶 memory  
> ChatGPT：files / docs / connected sources / optional product Memory

**Start here**

> **Codex**：開 project / repo → 開工作對話 → 給 task  
> **ChatGPT Work**：開 Work → 給 task + 需要的 files / tools

**Small note**

> Claude Code 同樣可映射成 project + `CLAUDE.md` / rules + tools + work conversation。

**Bottom line**

> **New chat / new window ≠ new Agent。**  
> `AGENTS.md` 是 project instructions 的一種實作；`MEMORY.md` 不是通用標準。  
> Product Memory 可以提供 context，但不是 project source of truth。  
> **Tool access ≠ Permission。**


## Slide 6 — Discover：先發散，再收斂

**Eyebrow**

> Discover · Brainstorm

**Title**

> 先讓 AI 發散，  
> **再由 Human 收斂**

**Running example**

> **活動報名頁：手機版很難找到「立即報名」按鈕。**

**Main flow**

> **1 · 定義問題（Frame）**  
> 「手機版很難找到立即報名，我想降低使用者找報名入口的成本。」
>
> **2 · 發散（Diverge）**  
> 首屏 CTA · 固定底部 CTA · 導覽列入口 · 簡化報名步驟
>
> **3 · 挑戰 / 分群（Challenge / Cluster）**  
> 哪些解同一個問題？  
> 哪些成本太高？  
> 哪些需要更多資料？
>
> **4 · 收斂（Converge）**  
> 留下值得進一步比較的方案

**Bottom line**

> AI 幫你擴大選項；  
> **不要在發散階段就急著選答案。**


## Slide 7 — Brainstorm output 不是 Backlog

**Eyebrow**

> Discover → Decide

**Title**

> 腦力激盪的結果不是正式工作；  
> **先做決策**

**Candidate side**

> 首屏放大 CTA  
> 固定底部 CTA  
> 導覽列放報名入口  
> 簡化報名步驟

**Human decision gate**

> 預期效益  
> 成本  
> 風險  
> 可逆性  
> 還需要什麼證據

**Result**

> **採用**  
> 固定底部 CTA
>
> **暫放**  
> 首屏 CTA · 導覽列入口 · 簡化步驟

**Bottom line**

> **準則、取捨與最後決定都由 Human 負責。**


## Slide 8 — Plan：Milestone → Epic → Story → Task

**Eyebrow**

> Plan · Work Hierarchy

**Title**

> 先分工作層級，  
> **再談它現在做到哪**

**Hierarchy**

> **Milestone｜里程碑 / 交付節點**  
> 降低手機版報名阻力
>
> ↓
>
> **Epic｜主要能力 / 大主題**  
> 改善報名入口
>
> ↓
>
> **Story｜使用者要得到的結果**  
> 使用者在手機上能快速找到「立即報名」
>
> ↓
>
> **Task｜可以直接執行的工作**  
> 加入固定底部「立即報名」CTA

**Bottom line**

> 工作層級回答：**「它屬於哪一層？」**  
> 下一頁的工作狀態板才回答：**「它現在在哪？」**


## Slide 9 — Specify：工作票（Ticket）+ AC 是工作契約

**Eyebrow**

> Specify · Ticket + Acceptance Criteria

**Title**

> 工作票（Ticket）要讓別人不用猜；  
> **AC 要能明確通過 / 不通過**

**Ticket**

> **#42 · 手機版固定顯示「立即報名」CTA**
>
> **目標（Goal）**  
> 降低使用者在手機上找不到報名入口的阻力。
>
> **範圍（Scope）**  
> 在手機版加入固定底部「立即報名」CTA。
>
> **明確不做（Non-goals）**  
> 不重做整份報名表；不改活動頁資訊架構。
>
> **驗收條件（Acceptance Criteria，AC）**  
> ① 390px 手機寬度完整顯示「立即報名」  
> ② 捲動時 CTA 固定在底部  
> ③ CTA 不遮住主要內容，且沒有水平捲軸
>
> **負責人 / 優先順序 / 上層工作**  
> Agent A · P1 · 改善報名入口
>
> **驗收證據（Evidence）**  
> 可操作預覽 + 桌機 / 手機截圖 + 自動檢查

**Gate after the Ticket**

> 工作票 + AC  
> → **優先順序 / 相依性檢查**  
> → 待辦（Backlog）

**Bottom line**

> **AC = 可觀察、可明確通過 / 不通過的完成條件。**  
> **Evidence = 審查時 reviewer 要實際檢查的證據。**  
> 工作票寫完整，**不代表現在就應該做**。


## Slide 10 — Execute：Kanban 只回答「現在在哪」

**Eyebrow**

> Execute · Kanban

**Title**

> Kanban 是工作狀態板；  
> **不要把它和工作層級混在一起**

**Board**

> **待辦（Backlog）**  
> #43 導覽列報名入口  
> #44 簡化報名步驟
>
> **進行中（Doing）· 同時進行 1/2（WIP）**  
> #42 手機版報名 CTA · Agent A
>
> **審查（Review）**  
> 下一站：送審 + 驗收證據 + AC
>
> **完成（Done）**  
> #38 活動資訊區塊

**Bottom line**

> 核心流程 = **待辦 → 進行中 → 審查 → 完成**  
> 審查也是正在進行的工作。  
> 每個工作者同時進行中的工作（WIP）：**少於 2 件**。


## Slide 11 — Execute：同一張 Ticket 在 GitHub 裡一路走

**Eyebrow**

> Execute · GitHub

**Title**

> 不用先背 Git 名詞；  
> **看同一張 Ticket 怎麼一路交付**

**Main path**

> **專案看板（Project）**  
> 看整體工作與狀態
>
> → **工作票（Issue）#42**  
> 工作契約 / AC
>
> → **工作分支（Branch）**  
> `feat/42-mobile-cta`
>
> → **提交紀錄（Commit）**  
> 可追蹤的版本節點
>
> → **Pull Request（PR）#71｜送審入口**

**Bottom line**

> PR 在這裡只有一個定義：  
> **送交審查 / 驗收的入口。**


## Slide 12 — Review：Agent 說「完成」= 可以開始審查

**Eyebrow**

> Review · Acceptance

**Title**

> Agent 說「完成」  
> **只代表可以開始審查**

**PR #71 evidence**

> **驗收證據（Evidence）**  
> 可操作預覽 + 截圖 + 自動檢查 ✅
>
> **AC 1**  
> 390px 完整顯示「立即報名」 ✅
>
> **AC 2**  
> 捲動時 CTA 固定底部 ✅
>
> **AC 3**  
> CTA 遮住主要內容 ❌
>
> **已知限制**  
> 尚未簡化報名步驟；符合明確不做的範圍

**Audience decision — show before answer**

> **你會通過（Approve）嗎？**
>
> 建置 / 測試都通過，  
> 但 AC 3 失敗。

**Reveal after audience answers**

> **退回修改（Request Changes）**

**Bottom line**

> 審查要看：**驗收證據 + AC + 範圍 + 已知限制 + Human 決定**。  
> Agent 自己說完成、自動檢查通過，都不等於自動驗收。


## Slide 13 — Deliver：接受 → 合併 → 完成

**Eyebrow**

> Deliver · Merge / Deploy

**Title**

> 被接受、合併（Merge）之後，  
> **這張工作才真的完成**

**Main flow**

> Review  
> → **Human 接受**  
> → **Merge**  
> → **Done**  
> → Deploy / Release（需要時）

**Running example**

> PR #71 修完 CTA 遮擋 AC  
> → Human 接受  
> → 合併  
> → GitHub Pages 更新

**Core stop**

> **AGENT 101 核心課程完成**
>
> **Discover → Plan → Specify → Execute → Review → Deliver**

## Slide 14 — 先定 Human 責任，再談 Agent 角色

**Eyebrow**

> 選修 · Human 角色

**Title**

> 先定 Human 的責任；  
> **再談 Agent 可以扮演什麼角色**

**Responsibility map**

> **PM｜產品 / 專案負責人**  
> 目標 · 優先順序 · 範圍 · AC · 驗收
>
> **UI/UX｜介面 / 體驗設計**  
> 使用者流程 · 狀態 · 互動 · 視覺規格
>
> **FE｜前端**  
> 介面 · 前端行為 · 串接
>
> **BE｜後端**  
> API · 資料 · 權限驗證 · 商業邏輯
>
> **Reviewer / QA｜審查 / 品質驗證**  
> 獨立驗證

**Bottom line**

> Agent 可以做某個角色的工作；  
> **Human 的最終責任不會因為用了 Agent 就消失。**

---

## Slide 15 — Subagent = 隔離專責工作者 / 工作脈絡

**Eyebrow**

> 選修 · Subagent

**Title**

> Subagent 不是另一種資料來源；  
> **它是另一個專責工作者 / 工作脈絡**

**Assignment formula**

> **角色 + 工作票 + 邊界 + 工具 + 驗收條件**

**Running example**

> **Reviewer Subagent**
>
> 角色：Reviewer  
> 工作票：#42 手機版報名 CTA  
> 邊界：不改程式碼，只驗 AC  
> 工具：可操作預覽 · 測試 · 差異（Diff）  
> 驗收：交付獨立的通過 / 不通過證據

**Bottom line**

> 需要專業分工、獨立審查或隔離工作脈絡時再用。  
> **不要為了「看起來像多 Agent」而先拆人。**

---

## Slide 16 — 能力都只是插回五個位置

**Eyebrow**

> 選修 · Agent 架構

**Title**

> 後面的能力都只是插回五個位置；  
> **Agent loop 沒有換一套**

**Primary architecture**

> **1 · 指令（Instructions）**  
> 專案規則 / Skills  
> _例：AGENTS.md · CLAUDE.md_
>
> **2 · 工作脈絡（Context）**  
> 目前工作 / 檔案 / 查回來的專案知識  
> _例：可選的產品記憶（Memory）_
>
> **3 · 工具（Tools）**  
> 可以呼叫的外部能力  
> _例：內建工具 · Web Search · MCP · Connectors_
>
> **4 · 執行環境（Environment）**  
> 動作在哪裡執行  
> _例：本機 · 雲端隔離環境_
>
> **5 · 權限（Permissions）**  
> 哪些讀取 / 修改 / 執行需要 Human 確認

**Bottom line**

> 回想 Slide 4：**輸入 → LLM → 動作 → 觀察結果**。  
> 這一頁只是告訴你，能力從哪裡插進去。

**Small note**

> 產品記憶（Memory）可以提供工作脈絡；  
> **它不是專案的正式依據。**

---

## Slide 17 — 缺什麼能力，再加什麼

**Eyebrow**

> 選修 · 能力地圖

**Title**

> 不要先把工具裝滿；  
> **先問你缺什麼能力**

**需求 → 能力**

> 這類事情每次都要照同一套方法？  
> **→ Skill｜可重用工作方法**
>
> 要找公司 / 專案私有知識？  
> **→ RAG｜先檢索，再回答**
>
> 要讓 Agent 接外部工具 / 資料介面？  
> **→ MCP｜外部能力連接協定**
>
> 要把 SaaS / 帳號能力接進產品？  
> **→ Connector / Plugin｜產品整合**
>
> 要隔離一個專責工作者 / 工作脈絡？  
> **→ Subagent｜獨立工作者 / 工作脈絡**
>
> 大型交付需要更完整的規格 / 規劃方法？  
> **→ SDD / BMAD｜大型交付方法**

**Bottom line**

> 這不是名詞表。  
> **先遇到能力缺口，再加工具 / 方法。**

---


## Slide 18 — 最後只記：Discover → Plan → Specify → Execute → Review → Deliver

**Eyebrow**

> 重點整理

**Title**

> 最後只記：  
> **Discover → Plan → Specify → Execute → Review → Deliver**

**Six-step summary**

> **Discover**  
> AI 發散，Human 決定
>
> **Plan**  
> 把大方向拆成可執行工作
>
> **Specify**  
> 目標 · 範圍 · AC · 驗收證據
>
> **Execute**  
> 低同時進行量（WIP）· 範圍清楚的工作 · GitHub
>
> **Review**  
> PR · 驗收證據 · AC · Human 審查
>
> **Deliver**  
> 接受 → 合併 → 完成 / 上線

**One-line example trace**

> 手機版找不到「立即報名」  
> → 固定底部 CTA  
> → #42 Ticket  
> → PR #71  
> → AC Review  
> → Merge

**起步工具參考**

> 靜態網站 / Demo → **GitHub Pages**  
> 後端 / 資料庫 / 登入 → **Supabase**  
> 產品分析 → **PostHog**  
> 網域 / 網路加速 → **Cloudflare**  
> 系統通知信 → **Resend**

**Final line**

> 不是追求「最會寫程式碼的 Agent」，  
> 而是建立**可以放心委派工作的系統**。

# Canonical teaching-location check

| Concept | Canonical slide | Later use |
|---|---:|---|
| Agent definition | 2 | Applied, never redefined |
| Human delegation → Agent intuition | 2 | Used as the beginner bridge; never equate Agent with a human |
| Agent anatomy / context / session / tools / durable state | 3 | Slide 16 re-anchors without redefining |
| LLM vs Agent/App loop | 4 | Slide 16 maps capabilities back to it |
| Product mapping / how to start | 5 | Codex / ChatGPT mapping only after abstract model is known |
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

# Learner-language audit — editorial only, not on-slide

| Disposition | Terms | Rule applied |
|---|---|---|
| **Keep — industry term to learn** | Agent, AI, LLM, Ticket, AC, Kanban, WIP, GitHub, Issue, Branch, Commit, Pull Request / PR, Merge, Milestone, Epic, Story, Task, Subagent, Skill, RAG, MCP, Connector / Plugin, SDD / BMAD | Keep the industry term, but give a plain-language Chinese hook at first sight when the audience may not know it. |
| **Keep — product / proper name** | Codex, Claude Code, ChatGPT Work, GitHub Pages, Supabase, PostHog, Cloudflare, Resend, AGENTS.md, CLAUDE.md | Keep as names; explain what they are used for instead of translating the name itself. |
| **Translate — Chinese first** | Goal / Act / Observe / Continue, Context, Output / Tool Request, Action, Observation, Environment, Permission, Local / Cloud, Frame / Diverge / Challenge / Cluster / Converge, Benefit / Cost / Risk / Reversibility, Backlog / Doing / Review / Done, Owner / Priority / Parent, Evidence / Preview, Approve / Request Changes, role / responsibility / accountability, Instructions / Tools / Permissions, Need / Capability | Chinese meaning is primary; English is secondary or omitted when it adds no learning value. |
| **Remove — not a learning objective** | mental model, bounded work, durable work, checkpoint, feature work, automated checks, multi-agent, planning discipline, glossary, capability gap, source of truth | Replace with plain Chinese; do not require the learner to acquire this extra jargon. |
| **Translate when retained for technical orientation** | shell, sandbox, VM, browser, API, SaaS, Diff | Keep only where it helps recognize a real tool/system term, with Chinese meaning first. |

This audit applies to **all learner-visible copy in Slides 1–18**, not only the Core. Future implementation must not reintroduce removed jargon.

# #11 Acceptance check

- [x] Actual on-slide content exists for all 18 approved live slides.
- [x] One concept has one canonical teaching location.
- [x] No new glossary page or random card-wall content model is introduced.
- [x] Slides 2–5 teach Agent fundamentals without a running product example.
- [x] The activity-registration example begins on Slide 6 and runs coherently through #42 → PR #71 → Review → Merge.
- [x] Product mapping appears only after Agent definition/anatomy/loop.
- [x] Chat/window/session is separated from Agent identity.
- [x] AGENTS.md is project instructions; MEMORY.md is not taught as a universal standard.
- [x] Plugins / Connectors map under Tools / integrations.
- [x] Agent-loop wording does not claim every prior token is literally resent.
- [x] AC is observable Pass/Fail and is defined on Slide 9, then reused on Slide 12.
- [x] Slide 12 contains an audience decision moment before the answer is revealed.
- [x] Slide 13 is a visible Core stop.
- [x] Slide 18 works after either Core-only or Full routing.
- [x] Slide 1 does not preload Ticket / AC / Evidence / PR / Merge before their canonical teaching slides.
- [x] Core Slides 1–13 follow a Chinese-first rule; industry terms get a plain-language hook on first sight.
- [x] Every learner-visible English term / acronym in Slides 1–18 has been classified as Keep / Translate / Remove in the editorial language audit.
- [x] Removed jargon from #10 (for example `bounded work`, `checkpoint`, `capability gap`) is absent from learner-visible slide copy.
- [x] No HTML/CSS, speaker walkthrough, or visual QA is included.

## Non-goal for #11

Do not treat this document as permission to improvise more content during #13. If implementation pressure makes a slide unreadable, preserve the teaching contract and resolve the layout in #13/#14 rather than silently restoring deleted material.
