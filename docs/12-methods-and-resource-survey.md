# 12｜方法與資源 Survey：Skill、SDD、BMAD、TDD、BDD 與特殊工具

這一章不是要把所有工具都變成必學。

目標是幫學員建立一張地圖：

> **這些工具 / 方法分別解決什麼問題？什麼時候該用？什麼時候不要用？**

---

# 1. 先分層，不要混在一起比較

| 層級 | 代表方法 / 工具 | 解決的問題 |
|---|---|---|
| 行為描述 | BDD / Examples | 使用者在具體情境下應該看到什麼 |
| 開發紀律 | TDD | 先寫測試，讓實作被測試牽引 |
| 規格驅動 | SDD / Spec Kit | 先定義 what / why，再決定 how |
| 交付體系 | BMAD | clarify → plan → build → verify 的完整 delivery loop |
| 能力封裝 | Skills | 把一類工作的 SOP 變成可重用能力 |
| 角色分工 | Subagents | 用不同視角規劃、實作、審查、測試 |
| 執行與稽核 | GitHub / Git / PR | 留下工作紀錄、差異、審查與發布紀錄 |

所以不要問：

> BDD、TDD、SDD、BMAD 哪個比較好？

比較好的問法是：

> 我現在卡的是行為定義、測試紀律、規格、交付流程，還是 Agent 能力重用？

---

# 2. 已確認適合放進 Agent 101 的核心資源

## Anthropic Skills

適合放在「Skill 是什麼」章節。

重點：

- Skill 是 instructions、scripts、resources 的資料夾
- 目標是讓 Agent 對特定任務有可重複做法
- 不應該每次都靠 prompt 重新講 SOP

來源：<https://github.com/anthropics/skills>

## GitHub Spec Kit / SDD

適合放在「Spec-Driven Development」章節。

重點：

- open source toolkit
- 讓 AI coding agents 使用 structured processes、templates、documented outcomes
- 核心是先定義 what / why，再進入 how
- SDD 流程：specify → plan → tasks → implement → converge
- 也包含 bug fixing 與 idea assessment 的入口

來源：<https://github.com/github/spec-kit>

## BMAD Method

適合放在「Agent delivery operating model」章節。

重點：

- Agile AI Driven Development
- 強調不只 coding，而是 what to build、how it holds together、how it changes
- right-sized process
- durable context
- specialized perspectives
- guided collaboration

來源：<https://github.com/bmad-code-org/BMAD-METHOD>

---

# 3. TDD、BDD、SDD、BMAD 怎麼教？

## BDD：先教

因為它最貼近非工程師。

它回答：

> 這個情境下，使用者應該看到什麼行為？

適合格式：

```text
Given 前提
When 行為
Then 結果
```

適合對象：PM、設計、營運、QA、工程、Agent。

## TDD：用來說明「測試驅動實作」

TDD 不需要一開始教大家寫測試程式碼。

先讓大家理解：

```text
先定義失敗的測試
      ↓
寫最少實作讓它通過
      ↓
重構
```

對非技術人員，TDD 的價值是：

> 好的驗收條件，會變成可自動化的測試基礎。

## SDD：用來管理較大功能

當需求開始大到不能只靠一張 ticket 時，需要 Spec。

```text
Spec
 ↓
Plan
 ↓
Tasks
 ↓
Implementation
 ↓
Converge / Verify
```

## BMAD：用來管理大型 Agent project

當一件事需要產品、UX、架構、測試、實作等多個視角時，才需要更完整的 delivery method。

---

# 4. 候選 Skill / Tool 清單

以下是課程可提到但不建議第一堂深入教的候選。

目前在這份教材中先用「用途類型」整理；實際教學前應再確認最新版 repo、授權、安裝方式與維護狀態。

| 名稱 | 暫定定位 | 課程中怎麼講 |
|---|---|---|
| Superpower / Superpowers | power-user skill / workflow 增強 | 可當作「如何把常用能力包成 skill」案例；需確認最新版來源 |
| GrillMe | adversarial review / challenge assumptions | 可示範 reviewer subagent：專門挑漏洞、問尖銳問題 |
| Spec Kit | SDD / spec-driven workflow | 核心案例，可教 specify → plan → tasks → implement → converge |
| SSD | 待確認 | 可能是 SDD 誤寫；若是特定工具，需再確認來源 |
| BMAD | delivery operating model | 核心案例，但放在後半段 |
| Caveman | simplification / blunt explanation | 可示範 explainer subagent：把過度抽象的內容翻成白話 |
| RTK | 待確認 | 名稱可能有多個同名工具；需確認是否為 coding / review / research skill |
| i-have-adhd | focus / task slicing helper | 可示範「降低認知負荷」類 skill，但不要做醫療宣稱 |

---

# 5. Survey 時應該看什麼？

每個資源都應該用同一張表評估。

## 基本資料

- Repo / website
- 作者 / 組織
- License
- 最近更新時間
- 支援工具：Claude Code、Codex、Copilot、Cursor、Gemini CLI 等

## 它解決什麼問題？

- Requirement / spec？
- coding？
- review？
- testing？
- context management？
- human collaboration？

## 它適合誰？

- 非技術人員
- PM
- 工程師
- AI power user
- team lead

## 採用風險

- 是否過度複雜
- 是否會污染 context
- 是否維護中
- 是否有安全風險
- 是否需要大量工具權限
- 是否和既有 workflow 衝突

## 教學價值

- 適合 demo 嗎？
- 受眾能在 5 分鐘內理解嗎？
- 能不能放進 Agent 101 的四大系統？

---

# 6. Agent 101 的建議取捨

## 第一堂必講

- Skill vs Prompt
- Subagent vs Skill
- 開發流程
- 驗收流程
- BDD / AC
- SDD / Spec Kit 概念
- BMAD 的三個觀念：right-sized process、durable context、specialized perspectives

## 第一堂只提，不深入

- Superpower / GrillMe
- Caveman / RTK / i-have-adhd
- 各家 agent framework
- 完整 plugin / marketplace 安裝

## 不要一開始教

- 大量 command
- 安裝細節
- 多 Agent 自動編排
- 完整測試框架語法
- 長篇 prompt library

---

# 7. 教學句型

最容易讓普通人理解的說法：

> **Skill 是工具箱，Subagent 是職務，Workflow 是工作規則，PR / Preview / Evidence 是驗收憑證。**

以及：

> **普通人不需要會寫 code，仍然可以透過需求、AC、例子與 Preview 驗收，和 AI 有效合作。**