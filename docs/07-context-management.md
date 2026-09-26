# 07｜Context Management：Context 越長，不代表 Agent 越懂你

Agent 很常見的一個錯覺是：

> Context window 很大，所以把所有資料都塞進去就好。

實務上不應該把 Context 當成永久資料庫。

比較好的心智模型：

> **Context = Agent 這一次工作的工作記憶。**

而：

> **Git / Spec / Issue / Docs = 長期 source of truth。**

---

# Context 太長會出現什麼問題？

## 1. 成本與延遲

送進模型的內容越多，通常處理成本與延遲也越高。

## 2. 注意力被稀釋

重要 Requirement、AC，可能埋在大量舊討論裡。

## 3. 舊決策污染新工作

之前某個已經被推翻的假設，可能仍留在 context。

## 4. Goal Drift

Agent 做了很久後，開始優化次要細節，忘記原本的 outcome。

## 5. 很難交接

只有「這一串聊天」知道做到哪裡，換 Agent 就要重新讀一次。

---

# Compact 是什麼？

不同 Agent 工具名稱不同，但概念大致是：

> **把前面很長的 conversation / execution history 摘要成比較短的狀態，騰出 context 空間。**

Compact 很有用，但它不是無損壓縮。

摘要可能：

- 省略細節
- 遺失例外條件
- 把暫時假設誤寫成決策
- 忘掉某個尚未完成的 edge case

所以不要把最重要的 state 只放在 chat 裡。

---

# Compact 前應該先做什麼？

把必要資訊寫回 durable state。

### Decision

已經決定什麼？

### Current State

做到哪一步？

### Evidence

哪些 test / preview 已經完成？

### Open Questions

還有哪些未知？

### Next Action

下一個 worker 應該做什麼？

例如：

```text
Issue #42
Status: In Progress

Done:
- Search UI complete
- Desktop verified

Pending:
- Mobile 390px overflow
- Empty state AC

Decision:
- v1 不做 fuzzy search

Next:
- fix mobile layout
- rerun AC2 / AC4
```

這比希望模型「記得全部」可靠。

---

# 最實用的 Agent Context Pattern

```text
Durable Goal / Spec
        ↓
Current Ticket + AC
        ↓
Fresh bounded execution
        ↓
Evidence / Decision
        ↓
Write back to external state
        ↓
Next fresh context
```

重點：

> **每一次 execution 可以短，但專案 state 要長久存在。**

---

# Fresh Context 不是浪費

很多人直覺會覺得：

> 新開 Agent / 新開 context，它不是又要重新理解？

但如果：

- Goal 有寫
- Spec 有寫
- Ticket 有寫
- AC 有寫
- Current state 有寫

新 context 只需要讀「這次真正需要的資料」。

反而比背著 200k tokens 的歷史更乾淨。

---

# Agent 101 的 Context 原則

1. **Context 是 working memory，不是 database。**
2. **重要決策外部化。**
3. **一個 execution 有清楚邊界。**
4. **做完就把 state / evidence 寫回。**
5. **需要時 compact，但不要把 compact 當 source of truth。**
6. **每次重新從 Goal + AC re-anchor。**

一句話：

> **不要追求「永遠不忘記的 Agent」，要建立「忘記也能重新接手的系統」。**
