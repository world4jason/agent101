# 09｜BMAD：把 Agent 團隊的規劃與交付制度化

BMAD 現在把自己定位成：

> **Agile AI Driven Development — 從想法或 change request 到 working software，但不放棄思考與人類判斷。**

它很適合放在 Agent 101 後段，因為前面已經學過：

- Requirement
- AC / BDD
- Ticket
- Context
- Skill
- Review

這時候再看 BMAD，會理解它到底在制度化什麼。

---

# BMAD 的核心不是「很多 Persona」

比較重要的是這幾個觀念。

## 1. Right-sized process

小 change 不需要完整規劃儀式。

複雜系統則需要更深的：

- product thinking
- architecture
- UX
- test planning

也就是：

> 工作有多複雜，process 才跟著多深。

---

## 2. Durable Context

BMAD 強調把重要 decisions 保留下來。

例如：

- brief
- requirements
- architecture
- UX decisions
- stories
- test strategy

後面的 Agent 不需要依賴前一個 Agent 的聊天記憶。

這和前一章 Context Management 是同一件事。

---

## 3. Specialized Perspectives

產品、架構、UX、開發、測試是不同問題。

多 Agent 的價值不是：

> 同時叫十個 Agent 寫 code。

而是：

> 在需要不同判斷時，引入不同專業視角。

---

## 4. Guided Collaboration

BMAD 的重點不是全自動。

它強調：

> structured workflows + multiple-agent discussions，但不把 judgment 全部交出去。

這也符合 Agent 101 的原則：

> **Human 決定 Why / Outcome / Trade-off；Agent 幫忙分析與執行。**

---

# BMAD Delivery Loop 可以怎麼教？

不要先背 command。

用這個概念就夠：

```text
Clarify
  ↓
Plan
  ↓
Build
  ↓
Verify
  ↓
Learn / Adjust
  ↺
```

其中：

### Clarify

我們真正要解決什麼？

### Plan

怎麼拆、有哪些風險？

### Build

Agent / Human 實作。

### Verify

對照 AC、測試、review。

### Learn

結果是否改變下一個決策？

---

# BMAD 與 SDD 差在哪？

可以用很粗略的方式理解：

## SDD

強調：

> **Specification 驅動 implementation。**

## BMAD

更像：

> **一套涵蓋 clarify → plan → build → verify 的 AI-driven delivery operating model。**

所以 BMAD 可以使用 spec，也可以使用 skills，也仍然需要 Git / PR / Review。

它不是 GitHub workflow 的替代品。

---

# Agent 101 怎麼介紹 BMAD？

建議只教三件事：

1. **Right-sized process**
2. **Durable context**
3. **Specialized perspectives**

等學員真的開始管理大型 Agent project，再深入：

- 安裝
- skills
- modules
- agents
- workflows
- artifacts

---

## 參考

- [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD)
