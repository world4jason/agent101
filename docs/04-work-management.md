# 04｜GitHub / Kanban / PR：怎麼管理 Agent 的工作

## 先從看板開始，不要先從 Git 指令開始

任何人都能理解：

Backlog → Ready → In Progress → Review → Done

這已經是 Agent 工作管理最重要的骨架。

---

# Issue / Ticket = 工作契約

一張好的 Ticket 應該讓「沒有參加原始對話的人」也能接手。

至少應該有：

- Goal
- Context
- Scope
- Non-goals
- AC
- Examples
- Evidence Required

Agent 不應該需要靠「你記得我們剛才聊的那個吧」才能做事。

---

# Kanban = 外部工作狀態

## Backlog

有價值，但現在還沒準備做。

## Ready

需求已經清楚，可以開始。

## In Progress

有人或 Agent 正在處理。

## Review

實作方認為已完成，等待獨立驗收。

## Done

符合 AC 與團隊 DoD。

注意：

> **Agent 說做完，只代表可以從 In Progress 移到 Review，不代表可以直接進 Done。**

---

# 為什麼要限制同時進行中的工作？

Agent 很容易讓團隊產生錯覺：

> 既然 Agent 很快，那一次開 30 件事應該更快。

但結果可能是：

- 30 件都做到一半
- review 塞車
- 互相修改相同區域
- 大量 conflict
- 人根本驗收不完

所以 Agent 越容易平行，越需要 WIP（Work In Progress）限制。

---

# Git 只需要先懂四件事

## Branch

一條不影響正式版本的工作線。

## Commit

一次可追蹤的修改紀錄。

## Pull Request

「這份工作我做完了，請驗收。」

## Merge

「這份修改被接受，正式納入。」

非工程師第一階段不用背 git add、git rebase、git cherry-pick。

---

# PR 不只是 Code Review

在 Agent 101，PR 應該被當成「交付包」。

理想 PR 應該回答：

### 1. 為什麼改？

連回 Issue / Goal。

### 2. 改了什麼？

用人看得懂的摘要。

### 3. AC 是否逐條完成？

每一條明確標記。

### 4. 我要去哪裡看成果？

提供 Preview URL。

### 5. 有什麼證據？

- Before / After screenshot
- 操作錄影
- 自動測試結果
- 重要 log

### 6. 還有什麼風險？

已知限制、尚未處理項目、需要特別驗的地方。

---

# Review 的分工

## Agent / 自動化

適合檢查：

- build 是否成功
- test 是否通過
- lint / type check
- 明顯 regression
- security scan
- AC 是否有缺漏

## 技術 Reviewer

適合檢查：

- 架構
- 可維護性
- 資料安全
- 權限
- migration
- 隱性技術風險

## 非技術 Reviewer

適合檢查：

- 真正使用起來是否符合需求
- 行為是否符合 AC / Example
- 文案與體驗
- Scope 是否跑掉
- 是否真的解決原本問題

每個角色驗不同東西，不需要所有人都會看 code。
