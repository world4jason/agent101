# Agent 101

給 PM、營運、設計、行銷，以及沒有工程背景的人看的 Human + Agent 協作入門。

這份教材不是教你背 Agent 名詞，而是讓你能把一個模糊想法變成：

> **可委派 → 可追蹤 → 可驗收 → 可交付的工作。**

## Web Slides

這個 repository 內建一份純 HTML / CSS / JavaScript 簡報：

**[開啟投影片原始頁面](slides/index.html)**

合併到 `main` 並啟用 GitHub Pages 後，root `index.html` 會導向 `/slides/`。

投影片支援：

- 鍵盤逐步 reveal / fragment 動畫
- 手機版排版
- Browser Print / PDF
- 不需要 build step

使用方式見 [slides/README.md](slides/README.md)。

---

## 這堂課只建立兩個 mental model

### A. Agent 怎麼持續工作

```text
Goal
 → Act
 → Observe
 → Continue
      ↺
```

更技術一點：

```text
Current Input
 → LLM
 → output / tool request
 → Action
 → Observation
 → next Input
```

重點不是「LLM 自己永久記住專案」，而是周圍的 Agent / App runtime 把下一輪需要的 instructions、task state、files、retrieved information 與 tool results 帶回來。

### B. Human + Agent 怎麼把工作交付出去

```text
想 → 拆 → 票 → 做 → 審 → 合
```

展開：

```text
Brainstorm / Decide
 → Milestone / Epic / Story / Task
 → Ticket + AC
 → Backlog → Doing → Review → Done
 → Issue → Branch → Commit → PR
 → Evidence + AC + Human Review
 → Merge / Deploy
```

---

## Agent 101 Core

Core 只要求學員能完成一個小型 Human + Agent 專案：

1. 用白話解釋 Agent 與 LLM / Agent App 的差異。
2. 知道不需要先找一個通用的「Create Agent」按鈕。
3. 先 brainstorm，再由 Human 決定什麼真的進入工作系統。
4. 先分 Milestone → Epic → Story → Task，再用 Kanban 管狀態。
5. 寫一張 bounded Ticket，AC 能明確 Pass / Fail。
6. 理解 Project → Issue → Branch → Commit → PR 的目的。
7. 用 Evidence + AC 驗收；Agent 說 Done 只代表 ready for review。
8. Human 接受後才 Merge，之後才算 Done / Deploy。

Slides 1–13 是 Core；到 Slide 13 可以直接停。

---

## Optional / Advanced

只有當 Core 已經懂了，才補：

- PM / UIUX / FE / BE / Reviewer 的責任邊界
- Subagent = 隔離專責 worker / context
- Instructions / Context / Tools / Environment / Permissions
- Skill / Web Search / RAG / MCP / Connector / Plugin
- SDD / BMAD 這類較大的 delivery discipline

原則是：

> **先有 capability gap，再加能力；不要先把工具名詞裝滿。**

Context compaction、durable sessions、embedding / chunking / reranking、完整 SDD/BMAD mechanics、長篇 Skill repository survey 都屬於 Appendix / Agent 201。

---

## vNext 設計文件

- [Current deck inventory + duplicate map](docs/vnext-inventory.md)
- [18-slide storyboard / slide contract](docs/vnext-storyboard.md)
- [Five-perspective review](docs/vnext-five-perspective-review.md)

Parent architecture / source of truth: [Issue #7](https://github.com/world4jason/agent101/issues/7)

---

## 深入教材

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

## 實作模板

- [需求 / Ticket 模板](templates/TICKET_TEMPLATE.md)
- [非技術驗收 Checklist](templates/ACCEPTANCE_CHECKLIST.md)

## 這堂課不要求大家先學會

- git CLI 指令大全
- rebase / cherry-pick / Git internals
- CI/CD YAML / Kubernetes / database administration
- Agent framework API
- Context window / Session / Compact 的實作細節
- embedding / chunking / reranking
- BMAD 全部 commands / personas
- Cucumber 自動化測試程式碼
- 超長 Agent.md / rules 檔

Agent 101 第一階段只要求一件事：

> **你能不能把工作定義到另一個 Human / Agent 做完後，你有辦法獨立判斷對不對。**
