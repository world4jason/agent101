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

> 不先學提示詞技巧，也不先背工具。  
> 先把工作變成 **可委派、可追蹤、可驗收、可交付**。

**Main roadmap**

> **想**  
> 先發散，再決定  
>
> **拆**  
> 分出工作層級  
>
> **票**  
> 寫清楚工作與完成條件  
>
> **做**  
> 開始執行、看狀態  
>
> **審**  
> 看證據、判斷是否通過  
>
> **合**  
> 接受後合併 / 交付

**Bottom line**

> 這堂課只建立兩個核心觀念：  
> **Agent 怎麼持續工作；Human + Agent 怎麼把工作交付出去。**

---

## Slide 2 — Agent = Goal → Act → Observe → Continue

**Eyebrow**

> Agent 是什麼？

**Title**

> Agent = **有目標、能行動、會看結果、再繼續**

**Main loop**

> **目標（Goal）**  
> 我要達成什麼？
>
> ↓
>
> **行動（Act）**  
> 做下一步
>
> ↓
>
> **觀察（Observe）**  
> 看結果
>
> ↓
>
> **繼續（Continue）**  
> 繼續、調整，或停下來問人
>
> ↺

**Running example**

> LUT Gallery（LUT 可先理解成「調色預設」）：  
> 「先檢查這個專案，找出使用者為什麼很難快速挑到喜歡的 LUT。先不要改。」

**Bottom line**

> Agent 不是「更會聊天的模型」。  
> 它是能為了目標 **行動 → 觀察 → 繼續** 的 AI 工作者。

---

## Slide 3 — 不用找「Agent 按鈕」

**Eyebrow**

> 怎麼開始？

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

## Slide 4 — LLM 做推理；Agent/App 維持工作循環

**Eyebrow**

> 為什麼它可以繼續做？

**Title**

> **LLM（Large Language Model，大型語言模型）**做這一步推理；  
> Agent/App 維持工作循環，把下一輪需要的資訊組回來

**Main flow**

> **目前輸入（Current Input）**  
> 這一步需要的資訊
>
> → **LLM**  
> 判斷下一步
>
> → **下一步輸出 / 工具請求**
>
> → **執行動作（Action）**
>
> → **觀察結果（Observation）**
>
> ↺ 回到下一輪輸入

**Same LUT micro-demo**

> 同一個目標  
> → Agent 讀專案 / 現有介面  
> → 發現「目前只能逐顆找 LUT」  
> → 把這個觀察結果帶進下一步

**Bottom line**

> 模型只對**這一步拿到的工作脈絡（context）**做推理。  
> Agent/App 會把相關指令、檔案、查回來的資料、工具結果等帶進下一輪；  
> **不代表每一輪都逐字重送全部歷史。**

---

## Slide 5 — Agent 決定；執行環境（Environment）執行

**Eyebrow**

> Agent 與執行環境

**Title**

> Agent 決定下一步；  
> **執行環境（Environment）決定動作在哪裡發生**

**Main comparison**

> **本機（Local）**  
> 你的電腦 / 專案 / 終端機（shell）
>
> **雲端（Cloud）**  
> 平台提供的隔離環境（sandbox）/ 虛擬機（VM）/ 瀏覽器（browser）

**Permission gate**

> **能用工具 ≠ 有操作權限（Permission）**
>
> 看得到工具  
> ≠  
> 這次就可以直接修改、發送或部署

**Bottom line**

> Agent = 決策與工作循環  
> 執行環境 = 動作真正發生的位置

---

## Slide 6 — 想：先發散，再收斂

**Eyebrow**

> 想 · 腦力激盪（Brainstorm）

**Title**

> 先讓 AI 發散，  
> **再由 Human 收斂**

**Main flow**

> **1 · 定義問題（Frame）**  
> 「挑 LUT 太慢，我想降低比較成本。」
>
> **2 · 發散（Diverge）**  
> 找相似 · 自動分群 · 並排比較 · 搜尋改善
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

---

## Slide 7 — 腦力激盪的結果不是正式工作

**Eyebrow**

> 想 → 做決策

**Title**

> 腦力激盪的結果不是正式工作；  
> **先做決策**

**Candidate side**

> **候選方案**
>
> 找相似（Find Similar）  
> 自動分群（Auto-group）  
> 並排比較（Compare）  
> LUT Editor

**Human decision gate**

> **Human 決策準則**
>
> 預期效益  
> 成本  
> 風險  
> 可逆性  
> 還需要什麼證據

**Result**

> **採用**  
> Find Similar
>
> **暫放**  
> Auto-group · Compare · LUT Editor

**Bottom line**

> **準則、取捨與最後決定都由 Human 負責。**  
> 不是 AI 生很多方案，Human 就隨便挑一個。

---

## Slide 8 — 拆：Milestone → Epic → Story → Task

**Eyebrow**

> 拆 · 工作層級

**Title**

> 先分工作層級，  
> **再談它現在做到哪**

**Hierarchy**

> **Milestone｜里程碑 / 交付節點**  
> 降低挑 LUT 的認知負荷
>
> ↓
>
> **Epic｜主要能力 / 大主題**  
> 改善 LUT 探索
>
> ↓
>
> **Story｜使用者要得到的結果**  
> 使用者可以從一個喜歡的 LUT 找到相似候選
>
> ↓
>
> **Task｜可以直接執行的工作**  
> 加入「找相似」入口 + 候選結果列表

**Bottom line**

> 工作層級回答：**「它屬於哪一層？」**  
> 下一頁的工作狀態板才回答：**「它現在在哪？」**

**Small note**

> 團隊名稱可以不同；先學工作層級，不背一套固定名詞體系。

---

## Slide 9 — 票：工作票（Ticket）+ AC 是工作契約

**Eyebrow**

> 票 · 工作票（Ticket）+ 驗收條件（Acceptance Criteria）

**Title**

> 工作票（Ticket）要讓別人不用猜；  
> **AC 要能明確通過 / 不通過**

**Ticket**

> **#42 · 從喜歡的 LUT 找到相似 LUT**
>
> **目標（Goal）**  
> 降低使用者逐顆比較 LUT 的認知負荷。
>
> **範圍（Scope）**  
> 從既有 LUT 找相似候選。
>
> **明確不做（Non-goals）**  
> 不做 Auto-group；不做 LUT Editor。
>
> **驗收條件（Acceptance Criteria，AC）**  
> ① 點「找相似」後會出現候選  
> ② 資料不足時有明確空狀態（Empty State）  
> ③ 390px 手機寬度沒有水平捲軸
>
> **負責人 / 優先順序 / 上層工作**  
> Agent A · P1 · 改善 LUT 探索
>
> **驗收證據（Evidence）**  
> 可操作預覽（Preview）+ 桌機 / 手機截圖 + 自動檢查

**Gate after the Ticket**

> 工作票 + AC  
> → **優先順序 / 相依性檢查**  
> → 待辦（Backlog）

**Bottom line**

> **AC = 可觀察、可明確通過 / 不通過的完成條件。**  
> **Evidence = 審查時 reviewer 要實際檢查的證據。**  
> 工作票寫完整，**不代表現在就應該做**。

---

## Slide 10 — 做：Kanban（工作狀態板）只回答「現在在哪」

**Eyebrow**

> 做 · Kanban（工作狀態板）

**Title**

> Kanban 是工作狀態板；  
> **不要把它和工作層級混在一起**

**Board**

> **待辦（Backlog）**  
> #43 自動分群  
> #44 並排比較
>
> **進行中（Doing）· 同時進行 1/2（WIP）**  
> #42 找相似 LUT · Agent A
>
> **審查（Review）**  
> 下一站：送審 + 驗收證據 + AC
>
> **完成（Done）**  
> #38 Collection filter

**Bottom line**

> 核心流程 = **待辦 → 進行中 → 審查 → 完成**  
> 審查也是正在進行的工作。  
> 每個工作者同時進行中的工作（WIP）：**少於 2 件**。

---

## Slide 11 — 同一張 Ticket 在 GitHub 裡一路走

**Eyebrow**

> 做 · GitHub

**Title**

> 不用先背 Git 名詞；  
> **看同一張 Ticket 怎麼一路交付**

**Main path**

> **專案看板（Project）**  
> 看整體工作與狀態
>
> →
>
> **工作票（Issue）#42**  
> 工作契約 / AC
>
> →
>
> **工作分支（Branch）**  
> 隔離這張票的改動
>
> →
>
> **提交紀錄（Commit）**  
> 可追蹤的版本節點
>
> →
>
> **Pull Request（PR）#71｜送審入口**  
> 進入審查 / 驗收

**Bottom line**

> PR 在這裡只有一個定義：  
> **送交審查 / 驗收的入口。**

**Small note**

> 一般功能開發不要直接改 main（主分支）。

---

## Slide 12 — 審：Agent 說「完成」= 可以開始審查

**Eyebrow**

> 審 · 審查 / 驗收（Review / Acceptance）

**Title**

> Agent 說「完成」  
> **只代表可以開始審查**

**PR #71 evidence**

> **驗收證據（Evidence）**  
> 可操作預覽 + 截圖 + 自動檢查 ✅
>
> **AC 1**  
> 點「找相似」會出候選 ✅
>
> **AC 2**  
> 資料不足有空狀態 ✅
>
> **AC 3**  
> 390px 沒有水平捲軸 ❌
>
> **已知限制**  
> 尚未做自動分群；符合明確不做的範圍

**Audience decision — show before answer**

> **你會通過（Approve）嗎？**
>
> 建置 / 測試都通過，  
> 但 AC 3 失敗。

**Reveal after audience answers**

> **退回修改（Request Changes）**
>
> 一條已約定的 AC 失敗，  
> 就還不能過。

**Bottom line**

> 審查要看：**驗收證據 + AC + 範圍 + 已知限制 + Human 決定**。  
> Agent 自己說完成、自動檢查通過，都不等於自動驗收。

---

## Slide 13 — 合：接受 → 合併 → 完成

**Eyebrow**

> 合 · 合併 / 上線（Merge / Deploy）

**Title**

> 被接受、合併（Merge）之後，  
> **這張工作才真的完成**

**Main flow**

> 審查  
> → **Human 接受**  
> → **合併（Merge）**  
> → **完成（Done）**  
> → 部署 / 發布（需要時）

**Running example**

> PR #71 修完手機版 AC  
> → Human 接受  
> → 合併  
> → GitHub Pages 更新

**Core stop**

> **AGENT 101 核心課程完成**
>
> 到這裡，你已經能跑一個小型「人 + Agent」專案：  
> **想 → 拆 → 票 → 做 → 審 → 合**

---

# Optional / light advanced

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
> 工作票：#42 找相似 LUT  
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

## Slide 18 — 最後只記：想 → 拆 → 票 → 做 → 審 → 合

**Eyebrow**

> 重點整理

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
> 目標 · 範圍 · AC · 驗收證據
>
> **做**  
> 低同時進行量（WIP）· 範圍清楚的工作 · GitHub
>
> **審**  
> PR · 驗收證據 · AC · Human 審查
>
> **合**  
> 接受 → 合併 → 完成 / 上線

**One-line LUT trace**

> 挑 LUT 太慢  
> → 找相似（Find Similar）  
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

# Learner-language audit — editorial only, not on-slide

| Disposition | Terms | Rule applied |
|---|---|---|
| **Keep — industry term to learn** | Agent, AI, LLM, Ticket, AC, Kanban, WIP, GitHub, Issue, Branch, Commit, Pull Request / PR, Merge, Milestone, Epic, Story, Task, Subagent, Skill, RAG, MCP, Connector / Plugin, SDD / BMAD | Keep the industry term, but give a plain-language Chinese hook at first sight when the audience may not know it. |
| **Keep — product / proper name** | Codex, Claude Code, ChatGPT Work, LUT Gallery, GitHub Pages, Supabase, PostHog, Cloudflare, Resend, AGENTS.md, CLAUDE.md | Keep as names; explain what they are used for instead of translating the name itself. |
| **Translate — Chinese first** | Goal / Act / Observe / Continue, Context, Output / Tool Request, Action, Observation, Environment, Permission, Local / Cloud, Frame / Diverge / Challenge / Cluster / Converge, Benefit / Cost / Risk / Reversibility, Backlog / Doing / Review / Done, Owner / Priority / Parent, Evidence / Preview, Approve / Request Changes, role / responsibility / accountability, Instructions / Tools / Permissions, Need / Capability | Chinese meaning is primary; English is secondary or omitted when it adds no learning value. |
| **Remove — not a learning objective** | mental model, bounded work, durable work, checkpoint, feature work, automated checks, multi-agent, planning discipline, glossary, capability gap, source of truth | Replace with plain Chinese; do not require the learner to acquire this extra jargon. |
| **Translate when retained for technical orientation** | shell, sandbox, VM, browser, API, SaaS, Diff | Keep only where it helps recognize a real tool/system term, with Chinese meaning first. |

This audit applies to **all learner-visible copy in Slides 1–18**, not only the Core. Future implementation must not reintroduce removed jargon.

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
- [x] Slide 1 does not preload Ticket / AC / Evidence / PR / Merge before their canonical teaching slides.
- [x] Core Slides 1–13 follow a Chinese-first rule; industry terms get a plain-language hook on first sight.
- [x] Every learner-visible English term / acronym in Slides 1–18 has been classified as Keep / Translate / Remove in the editorial language audit.
- [x] Removed jargon from #10 (for example `bounded work`, `checkpoint`, `capability gap`) is absent from learner-visible slide copy.
- [x] No HTML/CSS, speaker walkthrough, or visual QA is included.

## Non-goal for #11

Do not treat this document as permission to improvise more content during #13. If implementation pressure makes a slide unreadable, preserve the teaching contract and resolve the layout in #13/#14 rather than silently restoring deleted material.
