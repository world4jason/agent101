# 06｜Skill：把 Agent 的「做事方法」變成可重用能力

## 為什麼 Agent 101 要講 Skill？

當你每次都要重新告訴 Agent：

- PPT 應該怎麼做
- PR 要附哪些證據
- 品牌文案要遵守什麼規則
- 某種資料分析要跑哪些步驟
- 怎麼驗證一個網站

代表這些「做事方法」還只存在某次 prompt 裡。

Skill 的核心概念是：

> **把某一類工作的 instructions、流程、範例、腳本與資源封裝成可重用能力。**

以 Agent Skills 的實作為例，一個 Skill 可以是一個資料夾，裡面有 `SKILL.md`，以及需要的 scripts / references / assets。

---

# Skill 不等於 Prompt

## Prompt

比較像：

> 這一次我要你做什麼。

## Skill

比較像：

> 當你遇到這類工作時，應該怎麼做。

例如：

### Prompt

> 幫我把這份需求做成投影片。

### Skill

> 做簡報時：
> - 先判斷 audience
> - 一頁只講一個 message
> - 優先視覺化流程
> - 產生後做 overflow / readability 檢查
> - 最後 export 與 render 驗證

所以 Skill 比較接近：

**SOP + playbook + examples + tools**

---

# 為什麼不要把所有 Skill 都塞進 Context？

因為 Context 不是免費的。

如果一開始就把：

- PPT Skill
- PDF Skill
- SQL Skill
- Brand Skill
- Git Skill
- QA Skill
- Deployment Skill

全部放進同一個 prompt，Agent 會帶著大量這次根本用不到的資訊工作。

比較好的概念是：

> **需要時才載入相關能力。**

這叫做 progressive disclosure / dynamic loading 的思路。

---

# Skill、Rule、Spec、Ticket 的差別

| 東西 | 回答什麼問題？ | 生命週期 |
|---|---|---|
| Rule / Policy | 永遠不能違反什麼？ | 長期 |
| Skill | 這類事情通常怎麼做？ | 可重用 |
| Spec | 這個產品 / feature 要成為什麼？ | 中長期 |
| Ticket | 這一次具體要完成什麼？ | 短期 |
| Current Context | 現在正在處理什麼資訊？ | 暫時 |

把這幾個混在同一份超長 Agent.md 裡，通常會越來越難維護。

---

# Agent 101 的教學重點

不需要教大家怎麼寫複雜 Skill。

只要先讓大家理解：

1. **Prompt 是一次性指令。**
2. **Skill 是可重用工作方法。**
3. **重要流程應該被版本控制，而不是只存在某個人的聊天紀錄。**
4. **Skill 也需要驗證，不是寫了就永遠正確。**

---

# 一個簡單 Skill 的例子

```markdown
---
name: pr-evidence
description: 完成 PR 時，產生可供非技術 reviewer 驗收的 evidence pack
---

# PR Evidence Skill

完成工作後：

1. 對照原始 Issue。
2. 逐條列出 AC。
3. 提供 Preview URL。
4. UI 改動附 Before / After。
5. 列出 automated checks。
6. 寫出 known limitations。
7. 不要把 out-of-scope 問題偷偷一起修掉。
```

這樣下一個 Agent 不需要重新猜「交付格式」。

---

## 參考

- [Anthropic Skills repository](https://github.com/anthropics/skills)
- [Agent Skills](https://agentskills.io/)
