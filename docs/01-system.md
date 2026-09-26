# 01｜先懂體系：Agent 不是魔法，是新的 Worker

## 這堂課真正要教的不是 AI

以前一個團隊會把工作交給人：

需求 → Ticket → 工程師 / 設計師 → Review → 上線

現在其中一部分工作，可以交給 Agent：

需求 → Ticket → Agent → Review → 上線

**變的是 Worker，不變的是管理工作的基本問題：**

1. 到底要做什麼？
2. 為什麼要做？
3. 哪些東西不在這次範圍？
4. 怎樣叫做完成？
5. 誰負責驗收？
6. 有問題能不能找到是哪一次修改造成的？
7. 能不能安全地把成果交給使用者？

這就是為什麼 Agent 時代仍然需要需求、Ticket、Kanban、Git、PR、Review 與 Deployment。

---

## Human 與 Agent 的責任不是一樣的

### Human 應該掌握

- Why：為什麼做
- Outcome：想改善什麼
- Priority：哪個重要
- Constraint：哪些不能碰
- Acceptance：什麼結果可以接受
- Trade-off：遇到衝突時怎麼選

### Agent 很適合負責

- 分析現況
- 產生方案
- 執行明確工作
- 修改檔案
- 建立測試
- 產生文件
- 自我檢查
- 整理 PR 與證據

所以不要把 Agent 想成「會幫你完成一切的聊天機器人」。

比較好的模型是：

> **Agent 是能力很強、速度很快，但必須被清楚委派與驗收的團隊成員。**

---

## GitHub 在這門課的角色

GitHub 不只是放程式碼的地方。

對這門課來說，它是一個「工作可視化系統」：

| 概念 | 非工程師版本 |
|---|---|
| Repository | 這個產品 / 專案的共同工作空間 |
| Issue | 一張工作單 |
| Project / Kanban | 工作看板 |
| Branch | 不影響正式版本的獨立工作線 |
| Commit | 一次可追蹤的工作紀錄 |
| Pull Request | 把成果送交驗收 |
| Review | 接受、要求修改、討論 |
| Merge | 正式採用這份成果 |
| Deployment | 把採用後的成果送到使用者面前 |

你不需要先學會 Git 指令，才能理解這套工作方式。

---

## 第一個重要原則：外部狀態比 Agent 記憶可靠

不要讓「做到哪裡」只存在 Agent 的聊天紀錄裡。

應該存在外部系統：

- Goal / Brief
- Issue
- AC
- Kanban 狀態
- Commit
- PR
- Review comment
- Test result
- Preview URL

這樣就算：

- 換了一個 Agent
- 對話 context 被清掉
- Agent 執行失敗
- 人員交接

新的 Worker 還是能知道目前狀態。

---

## 第二個重要原則：做的人不能單方面宣布自己完成

最危險的流程：

Agent：我做完了。  
Human：好。

比較好的流程：

Agent：我做完了。這是 PR、Preview、AC 對照與測試結果。  
Human / Reviewer：我依照事先約定的條件驗收。

所以 Agent workflow 的重點不是「讓 Agent 自己做更多」。

而是：

> **讓工作可以被獨立驗證。**
