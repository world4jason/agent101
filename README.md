# Agent 101

給 PM、營運、設計、行銷，以及沒有工程背景的人看的 Agent 協作入門。

這份教材不是教你寫程式，而是教你：

> **當 Agent 可以像團隊成員一樣工作時，怎麼把需求說清楚、拆成工作、追蹤進度、驗收成果，最後安全上線。**

核心觀念：

- **Agent = worker**：可以接工作，但「它說做完了」不等於真的完成。
- **需求 / AC = 工作契約**：先說清楚成功長什麼樣，再開始做。
- **Kanban = 工作狀態**：知道有哪些事、誰正在做、卡在哪。
- **Git / GitHub = 工作紀錄與協作基礎設施**：讓修改可追蹤、可比較、可回復。
- **PR = 交付與驗收點**：不是只給工程師看 code。
- **Preview = 非技術人員最重要的驗收介面**：直接操作成果，對照 AC。
- **Deploy = 把已驗收成果交給真正使用者**。

## 一張圖看完整體系

需求 / Goal  
↓  
Requirement  
↓  
AC + 具體例子  
↓  
Issue / Ticket  
↓  
Kanban  
↓  
Human / Agent 執行  
↓  
Branch + Commit  
↓  
Pull Request  
↓  
自動檢查 + Preview + Evidence  
↓  
Human Acceptance  
↓  
Merge  
↓  
Production

## 教材

1. [先懂體系：Agent 不是魔法，是新的 Worker](docs/01-system.md)
2. [什麼是需求？什麼是 Acceptance Criteria？](docs/02-requirements-and-ac.md)
3. [BDD：用具體例子把「我以為」變成可驗收行為](docs/03-bdd-and-example-mapping.md)
4. [GitHub / Kanban / PR：怎麼管理 Agent 的工作](docs/04-work-management.md)
5. [沒有技術背景，怎麼驗收 Agent 做得對不對？](docs/05-nontechnical-acceptance.md)
6. [BMAD 放在哪裡？把它當成 Agent 團隊作業系統案例](docs/06-bmad.md)
7. [從 Preview 到 Production：部署只需要先懂這些](docs/07-deployment.md)

## 實作模板

- [需求 / Ticket 模板](templates/TICKET_TEMPLATE.md)
- [非技術驗收 Checklist](templates/ACCEPTANCE_CHECKLIST.md)
- Repository 內也提供 GitHub Issue 與 Pull Request template，可直接實際操作。

## 這堂課不打算先教什麼

第一輪不要求學員會：

- git CLI 指令大全
- rebase / cherry-pick / Git internals
- CI/CD YAML
- Kubernetes
- database administration
- Agent framework API
- BMAD 安裝與全部角色命令
- Cucumber 自動化測試程式碼

這些都可以之後再學。

Agent 101 第一階段只要求一件事：

> **你能不能把一件工作定義到「另一個人或 Agent 做完後，你有辦法客觀判斷對不對」。**
