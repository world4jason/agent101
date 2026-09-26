# 11｜Skills、Subagents、開發流程與驗收流程

這一章把前面所有概念收斂成一個更實用的操作框架：

> **Skill 解決「怎麼做」；Subagent 解決「誰來看」；Workflow 解決「先後順序與驗收 gate」。**

---

# 1. Skill：把重複工作方法封裝起來

Skill 不是一次性的 prompt。

## Prompt

> 這一次我要你做什麼？

例如：

> 幫我把這份需求整理成投影片。

## Skill

> 遇到這一類工作時，應該怎麼做？

例如「投影片 Skill」可能包含：

- 先判斷受眾
- 一頁只講一個 message
- 優先用流程圖與圖像
- 產生後檢查字太小、溢出、重疊
- 最後輸出 HTML / PPT / PDF

所以 Skill 更接近：

**SOP + Playbook + Examples + Scripts + Resources**

Anthropic 的 Skills repository 也把 skill 描述成「folders of instructions, scripts, and resources」，由模型在需要時動態載入，以提升特定任務的表現。

參考：<https://github.com/anthropics/skills>

---

# 2. Subagent：把不同視角分開

Subagent 不一定是另一個真正獨立的模型，也可以是一個明確分工的角色。

重點是：

> **不要讓同一個 Agent 同時當 PM、工程師、QA、Reviewer，然後自己宣布自己完成。**

## 常見 Subagent 角色

| Subagent | 主要任務 | 不該做什麼 |
|---|---|---|
| Planner | 拆需求、列風險、產生 tasks | 直接寫 code |
| Builder | 實作明確 task | 擴大 scope |
| Reviewer | 對照 AC、找缺漏 | 直接替 Builder 開脫 |
| QA | 跑 scenario、找 regression | 只看 happy path |
| Researcher | survey 工具、文件、方案 | 把未驗證資料當事實 |
| Explainer | 把技術內容翻成非技術版本 | 過度簡化到失真 |

---

# 3. Skill vs Subagent

| 問題 | 用 Skill | 用 Subagent |
|---|---|---|
| 這類任務有固定做法 | ✅ | 可能不需要 |
| 需要不同專業視角 | 可能 | ✅ |
| 需要獨立審查 | 不夠 | ✅ |
| 需要重複產生相同格式 | ✅ | 可能不需要 |
| 需要避免自己審自己 | 不夠 | ✅ |

一句話：

> **Skill 是能力模組；Subagent 是責任分工。**

---

# 4. 開發流程：從想法到 PR

Agent 101 建議的基本開發流程：

```text
Goal / Problem
      ↓
Requirement / Spec
      ↓
AC + Examples
      ↓
Ticket
      ↓
Planner review
      ↓
Builder Agent
      ↓
Branch + Commit
      ↓
Pull Request
      ↓
Reviewer / QA
```

## 每個階段的 gate

### Gate 1：Ready to Build

- Goal 清楚
- Scope / Non-goals 清楚
- AC 可 Pass / Fail
- 至少有一個 Example
- 未決問題有列出，不讓 Agent 猜

### Gate 2：Ready for Review

- 有 PR
- 有 Preview 或可操作成果
- 有 AC 對照
- 有測試 / build / checks 結果
- 有 known limitations

### Gate 3：Ready to Merge

- AC 通過
- Reviewer 沒有 blocker
- Preview 驗收完成
- 沒有未說明的 scope creep
- 風險可接受

---

# 5. 驗收流程：非技術人員怎麼參與

驗收不是看 code，而是看行為與證據。

```text
PR
 ↓
Evidence Pack
 ↓
Preview
 ↓
AC Checklist
 ↓
Behaviour / Scenario Test
 ↓
Product Judgment
 ↓
Approve or Request Changes
```

## Evidence Pack 必備

- What：改了什麼
- Why：對應哪個 goal / issue
- AC checklist：逐條 pass / fail
- Preview：可以自己打開驗
- Visual evidence：UI 前後對照
- Automated evidence：build / test / lint
- Known limitations：哪些還沒做

---

# 6. 一個實務分工範例

```text
Human / PM
  定義 Goal、Scope、AC

Planner Subagent
  拆 tasks、指出 open questions

Builder Agent
  做其中一張 ticket

Reviewer Subagent
  對照 AC、檢查 scope creep

QA Subagent
  跑 scenario 與 edge cases

Human
  用 Preview 做最後產品驗收
```

這樣做的目的不是把流程變複雜，而是避免：

> **同一個 Agent 自己寫、自己驗、自己宣布成功。**

---

# 7. 何時不要啟用太多 Subagents？

小修改不要過度流程化。

例如 typo、文案、圖片替換：

```text
Ticket → Builder → Preview → Human check
```

就夠了。

大型、跨系統、高風險功能才需要更多角色。

這和 BMAD 的 right-sized process 是同一個精神。