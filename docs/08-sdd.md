# 08｜SDD：Spec-Driven Development

> 常見縮寫是 **SDD = Spec-Driven Development**。

核心想法非常簡單：

> **先把 What / Why 說清楚，再決定 How。**

這對 Agent 特別重要，因為 coding agent 很容易在需求還模糊時直接產生大量 implementation。

---

# Prompt-Driven vs Spec-Driven

## Prompt-Driven

```text
「幫我做一個收藏功能」
        ↓
Agent 開始 coding
        ↓
做到一半才發現雙方理解不同
```

## Spec-Driven

```text
Goal
 ↓
Spec / Requirement
 ↓
Clarify
 ↓
Plan
 ↓
Tasks
 ↓
Implement
 ↓
Verify / Converge
```

Spec 不是為了增加文件。

是為了：

> **在昂貴的 implementation 前，把重要 ambiguity 提早暴露。**

---

# GitHub Spec Kit 的 SDD 例子

GitHub 的 Spec Kit 把流程描述為：

```text
constitution
    ↓
specify
    ↓
plan
    ↓
tasks
    ↓
implement
    ↓
converge
```

它特別強調：

> Define **what and why** before deciding **how** to build it.

這很適合 Agent 101 用來展示「Spec 是工作契約，不是 bureaucracy」。

---

# SDD 與 AC / BDD 的關係

可以把三者想成不同層級。

## SDD

這個 feature 要成為什麼？

## AC

做到什麼程度算完成？

## BDD / Examples

在具體情境下，使用者應該看到什麼行為？

例如：

```text
Spec:
使用者可以收藏文章

AC:
重新整理後收藏狀態仍保留

BDD Example:
Given 我已登入並收藏文章 A
When 我重新整理頁面
Then 文章 A 仍顯示為已收藏
```

不是競爭關係，而是逐步把模糊變具體。

---

# Spec 不應該無限變大

最常見的反模式是：

> 為了「完整」，每一件小事都產生 20 頁文件。

Agent 101 應該教：

### 小改動

Ticket + AC 就可能夠。

### 中型 feature

Spec + AC + Tasks。

### 大型 / 高風險功能

再加入：

- Architecture
- UX flows
- data decisions
- migration plan
- test strategy

這叫 **right-sized specification**。

---

# SDD 真正解決的是 Context 問題

Spec 是 durable context。

Agent 不需要靠：

> 「你還記得我們三天前說付款流程要怎樣嗎？」

而是直接讀：

`spec/payment.md`

所以：

> **SDD 同時是需求管理，也是 context engineering。**

---

## 參考

- [GitHub Spec Kit](https://github.com/github/spec-kit)
- Spec Kit 核心流程：specify → plan → tasks → implement → converge
