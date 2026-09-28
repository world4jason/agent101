# Agent 101

給 PM、營運、設計、行銷，以及沒有工程背景的人看的 Agent 協作入門。

這份教材不是教你寫程式，而是教你：

> **當 Agent 可以像團隊成員一樣工作時，怎麼把需求說清楚、拆成工作、追蹤進度、驗收成果，最後安全上線。**

## Web Slides

**Live GitHub Pages：<https://world4jason.github.io/agent101/>**

直接進投影片：**<https://world4jason.github.io/agent101/slides/>**

這個 repository 內建一份可直接播放的 HTML 簡報：

- [開啟 repository 內的投影片原始頁面](slides/index.html)
- [開啟 GitHub Pages 線上版](https://world4jason.github.io/agent101/)

root `index.html` 會導向 `/slides/`。

投影片支援：

- 鍵盤逐步 reveal / fragment 動畫
- 四個章節的視覺分類
- 手機版排版
- Browser Print / PDF
- 不需要 build step

使用方式見 [slides/README.md](slides/README.md)。

---

## 課程的四個系統

### 01｜定義工作

**Goal → Requirement → AC / Examples → Ticket**

把模糊想法變成另一個 Human / Agent 可以執行，而且你有辦法驗收的工作。

### 02｜管理執行

**Kanban → Agent / Subagent → Branch / Commit → PR**

工作狀態放在外部系統，不靠某個 Agent 的聊天記憶；不同視角交給不同 subagent / reviewer。

### 03｜驗收交付

**Checks → Preview → Evidence → Human Acceptance → Production**

Agent 說 Done 不等於完成；成果必須可以被獨立驗證。

### 04｜Agent Operating System

**Skills → Context Management → SDD / Spec Kit → BMAD → Collaboration**

解決能力如何重用、context 怎麼不要越堆越亂、如何用 spec 與 delivery method 管大型工作。

---

## 核心觀念

- **Agent = worker**：可以接工作，但「它說做完了」不等於真的完成。
- **Subagent = 獨立專責 worker / context**：Planner、Builder、Reviewer、QA、Researcher 是常見角色。
- **Skill = 可重用工作方法**：不要每次重新 prompt SOP。
- **Web Search = 新鮮公開資訊**：需要最新外部事實時去查網路。
- **RAG = Retrieval + Generation**：先從指定知識來源取回相關內容，再交給模型回答。
- **MCP = 外部能力連接標準**：把 tools、resources、prompts 接給 Agent；它本身不是搜尋或資料庫。
- **ChatGPT Plugin / App / Connector = 產品層整合**：把 Gmail、Drive、GitHub、Slack、Vercel 等外部服務接進 ChatGPT，並以權限控制 read / write actions。
- **需求 / AC = 工作契約**：先說清楚成功長什麼樣，再開始做。
- **BDD / Examples = shared understanding**：用具體行為消除「我以為你懂」。
- **TDD = 測試驅動實作**：好的 AC / examples 可以成為自動化測試的基礎。
- **SDD = Spec-Driven Development**：先定義 What / Why，再進入 How。
- **BMAD = AI-driven delivery operating model**：right-sized process、durable context、specialized perspectives。
- **Kanban = 外部工作狀態**：知道有哪些事、誰正在做、卡在哪。
- **Git / GitHub = 工作紀錄與協作基礎設施**：讓修改可追蹤、可比較、可回復。
- **PR = 交付與驗收點**：不是只給工程師看 code。
- **Preview + Evidence = 非技術 Reviewer 的驗收介面**。
- **Context = working memory，不是 source of truth**。
- **Compact = 摘要，不是無損壓縮**：重要決策要先寫回 durable state。

---

## 教材

1. [先懂體系：Agent 不是魔法，是新的 Worker](docs/01-system.md)
2. [什麼是需求？什麼是 Acceptance Criteria？](docs/02-requirements-and-ac.md)
3. [BDD：用具體例子把「我以為」變成可驗收行為](docs/03-bdd-and-example-mapping.md)
4. [GitHub / Kanban / PR：怎麼管理 Agent 的工作](docs/04-work-management.md)
5. [沒有技術背景，怎麼驗收 Agent 做得對不對？](docs/05-nontechnical-acceptance.md)
6. [Skill：把 Agent 的做事方法變成可重用能力](docs/06-skills.md)
7. [Context Management：Context 太長、Compact 與 Fresh Context](docs/07-context-management.md)
8. [SDD：Spec-Driven Development](docs/08-sdd.md)
9. [BMAD：把 Agent 團隊的規劃與交付制度化](docs/09-bmad.md)
10. [從 Preview 到 Production：部署只需要先懂這些](docs/10-deployment.md)
11. [Skills、Subagents、開發流程與驗收流程](docs/11-skills-subagents-and-workflows.md)
12. [方法與資源 Survey：Skill、SDD、BMAD、TDD、BDD 與特殊工具](docs/12-methods-and-resource-survey.md)
13. [普通人怎麼和 AI 合作？](docs/13-human-ai-collaboration.md)
14. [Matt Pocock Skills：小而可組合的工程工作法](docs/14-matt-pocock-skills.md)
15. [Web Search、MCP、Skill、RAG 到底差在哪？](docs/15-search-mcp-rag.md)
16. [ChatGPT Plugins / Apps / Connectors：產品層的外部能力](docs/16-chatgpt-plugins.md)

---

## 一張圖看完整體系

```text
Goal / Problem
      ↓
Requirement / Spec
      ↓
AC + BDD Examples
      ↓
Issue / Ticket
      ↓
Kanban
      ↓
Human / Agent / Subagent
      ↓
Branch + Commit
      ↓
Pull Request
      ↓
Checks + Preview + Evidence
      ↓
Human Acceptance
      ↓
Merge
      ↓
Production

橫跨整條流程的是：

Skills         = 可重用做事方法
Subagents      = 規劃、實作、審查、測試的責任分工
Context        = 這一次工作的 working memory
Durable State  = Spec / Issue / Git / PR
SDD            = Spec 驅動實作
BMAD           = Clarify → Plan → Build → Verify 的交付體系
```

---

## 實作模板

- [需求 / Ticket 模板](templates/TICKET_TEMPLATE.md)
- [非技術驗收 Checklist](templates/ACCEPTANCE_CHECKLIST.md)

---

## 這堂課不要求大家先學會

- git CLI 指令大全
- rebase / cherry-pick / Git internals
- CI/CD YAML
- Kubernetes
- database administration
- Agent framework API
- BMAD 全部 commands / personas
- Cucumber 自動化測試程式碼
- 超長 Agent.md / rules 檔

Agent 101 第一階段只要求一件事：

> **你能不能把一件工作定義到「另一個人或 Agent 做完後，你有辦法客觀判斷對不對」。**
