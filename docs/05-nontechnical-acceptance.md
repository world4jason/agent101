# 05｜沒有技術背景，怎麼驗收 Agent 做得對不對？

這是 Agent 101 最重要的一章。

答案不是「學會看 code」。

答案是：

> **把驗收設計成不需要相信實作者本人。**

---

# 第一個觀念：你不是要證明「程式碼很好」

如果你是 PM、營運、設計、行銷，你通常不需要判斷：

- SQL 寫得漂不漂亮
- React component 怎麼拆
- API architecture 是否優雅

你的責任主要是：

> **交付結果是否符合原本約定的使用者行為與產品目的。**

技術內部品質，應該交給自動化 Gate、技術 Reviewer 或另一個獨立 Agent。

---

# 建議使用「四層驗收」

## Gate 1｜Delivery Gate：有沒有可驗收的東西？

至少有：

- 對應 Issue
- PR
- Preview / 可操作成果
- 修改摘要
- Evidence

如果只有一句：

> Agent：Done.

不能進 Review。

---

## Gate 2｜Mechanical Gate：基本技術檢查有沒有過？

例如：

- build pass
- tests pass
- lint pass
- type check pass
- security check 沒有 blocker

這些結果應由 CI / 工程師 / Reviewer Agent 提供。

非技術人員不用自己執行指令，只需要看到結果。

注意：

> 自動測試通過，只能證明「被測的東西通過」，不代表產品需求一定正確。

---

## Gate 3｜Behaviour Gate：逐條驗 AC

拿原本 Ticket 的 AC，一條一條操作。

例如：

AC：

- 未登入使用者按收藏後，會被要求登入。
- 不會錯誤顯示已收藏。

驗收：

1. 打開 Preview。
2. 確認未登入。
3. 找一篇文章。
4. 按收藏。
5. 看結果。

Pass / Fail。

這就是為什麼 AC 要在開工前寫，而不是做完後才想驗什麼。

---

## Gate 4｜Product Gate：它真的解決問題嗎？

有些東西即使 AC 全過，還是可能不好用。

例如：

- 流程雖然正確，但多了 5 個不必要步驟。
- 搜尋真的能搜尋，但結果排序完全不符合使用需求。
- 手機版沒有壞，但主要 CTA 被放到很難找到的位置。

這一層需要人的產品判斷。

所以：

> **AC 是最低可接受邊界，不是產品品質的全部。**

---

# 非技術 Reviewer 最需要的不是 Diff，而是 Evidence Pack

每個 Agent PR 建議強制提供：

## What

這次做了什麼？

## Why

對應哪個需求？

## AC Checklist

每條 AC 是否完成？

## Preview

我去哪裡操作？

## How to verify

給 Reviewer 3–7 個明確步驟。

## Visual Evidence

如果改 UI：

- Before
- After
- Desktop
- Mobile
- 必要時錄影

## Automated Evidence

- build
- tests
- checks

## Known limitations

哪些事情還沒解？

---

# 一個非技術人也能用的驗收表

| 問題 | 結果 |
|---|---|
| 我知道這次為什麼改嗎？ | Pass / Fail |
| 我知道這次「沒有要改」什麼嗎？ | Pass / Fail |
| 每條 AC 都有證據嗎？ | Pass / Fail |
| 我能在 Preview 重現主要 Scenario 嗎？ | Pass / Fail |
| 異常 / 空資料 / 未登入等重要狀態有處理嗎？ | Pass / Fail |
| 手機與桌面需要支援的畫面正常嗎？ | Pass / Fail |
| 自動檢查有沒有 blocker？ | Pass / Fail |
| Agent 有沒有偷偷擴大 Scope？ | Pass / Fail |
| 已知限制有沒有明講？ | Pass / Fail |

有任何重要 Fail：

> Request Changes，而不是 Merge。

---

# 什麼情況下不要接受「看起來可以」

## 1. Agent 沒有提供 Preview / 可操作成果

你根本無法獨立驗證。

## 2. AC 是 Agent 做完後才補的

容易變成用答案倒推題目。

## 3. 只有 happy path

例如登入成功有驗，但：

- 密碼錯誤
- 未登入
- 空資料
- 網路失敗

完全沒想過。

## 4. Agent 同時改了一堆需求外的東西

即使它說「順便整理」。

Scope creep 會增加驗收範圍與風險。

## 5. Test 全綠，但你實際操作不對

產品行為優先回到 Requirement / AC 判斷。

---

# 最後真正要建立的是 Trust，但不是 Blind Trust

成熟的 Agent 團隊不是：

> 我相信這個 Agent 很強，所以不用驗。

而是：

> 我相信這套流程能留下需求、修改、證據與獨立檢查，所以我知道什麼時候可以接受結果。

這叫做可驗證的信任。
