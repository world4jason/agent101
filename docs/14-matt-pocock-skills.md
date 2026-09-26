# 14｜Matt Pocock Skills：小而可組合的工程工作法

來源：[mattpocock/skills](https://github.com/mattpocock/skills)

Matt Pocock 把這套定位成 **Skills For Real Engineers**。

他的核心立場不是「讓一個大型 framework 接管整個開發流程」，而是：

> **把工程紀律拆成小而可組合、可修改、可重用的 Skills。**

他在 README 裡明確拿 GSD、BMAD、Spec Kit 做對照：這些方法傾向「擁有整個 process」，而他的 Skills 比較偏向讓你保留控制權，再依情況組合需要的能力。

---

# 為什麼這套很適合 Agent 101？

因為它剛好可以示範：

- Skill 不等於 Agent。
- Skill 不等於完整 workflow。
- 同一個 workflow 可以由多個 Skills 組成。
- 有些 Skill 是人主動叫，有些則可以讓 Agent 自動使用。
- Subagent 可以被 Skill 叫來做獨立 review，降低「自己做、自己驗」的問題。

---

# Matt Pocock 把常見失敗拆成四類

## 1. Agent 沒做成你真正想要的東西

解法：

- `/grill-me`
- `/grill-with-docs`

重點不是讓 AI 猜，而是讓 AI **反過來訪談你**。

`grill-with-docs` 還會幫忙建立：

- shared language
- `CONTEXT.md`
- ADR

對 Agent 101 來說，這就是：

> Requirement Clarification + Durable Context

---

## 2. Agent 太囉嗦、每次都重新理解專案

他的做法是建立 shared language。

例如 domain 裡有一個明確詞彙，就不要每次用二十個字重新描述。

這會同時改善：

- 人和 Agent 的溝通
- 變數 / function / file 命名
- Agent 對 codebase 的導航
- token 使用量

這和 Agent 101 的 Context Management 是同一條線。

---

## 3. Agent 寫出來的東西不能用

重點是建立 feedback loops。

代表性 Skills：

- `/tdd`：Red → Green → Refactor
- `/diagnosing-bugs`：先讓 bug 可重現，再最小化、提出假設、instrument、修正、補 regression test

這不是「叫 AI 再試一次」。

而是：

> **建立一個 Agent 能看到自己對不對的迴路。**

---

## 4. Agent 很快，但 codebase 也很快變成一團

代表性 Skills：

- `/to-spec`
- `/improve-codebase-architecture`
- `/codebase-design`
- `/code-review`

Matt 的觀點是：Agent 加速 coding，也會加速 software entropy。

所以速度越快，越需要設計與 review。

---

# User-invoked vs Model-invoked

這套裡很值得教的一個概念是：

## User-invoked Skill

由人主動叫。

比較像 orchestration / workflow entry point。

例如：

- `/ask-matt`
- `/grill-me`
- `/grill-with-docs`
- `/triage`
- `/to-spec`
- `/to-tickets`
- `/implement`
- `/wayfinder`
- `/handoff`

## Model-invoked Skill

人可以叫，Agent 也可以在適合時自己使用。

例如：

- `/tdd`
- `/diagnosing-bugs`
- `/research`
- `/domain-modeling`
- `/codebase-design`
- `/code-review`
- `/resolving-merge-conflicts`
- `/wizard`

這很適合用來解釋：

> **不是所有 Skill 都應該永遠掛在主流程上。需要時才載入。**

---

# 幾個特別值得 Agent 101 示範的 Skill

## /grill-me

把 AI 從「回答者」變成「採訪者」。

適合：

- 想法還模糊
- 自己其實也不知道需求邊界
- 重要決策還沒做完

---

## /grill-with-docs

在 grill 的同時，把結果變成 durable context。

適合：

- 新 feature
- domain 名詞很多
- 團隊常常重新解釋同一件事
- 有重要架構 decision

---

## /to-spec

把目前討論整理成 spec。

這可以接在 grill 後面，也可以直接整理已經成熟的 conversation。

---

## /to-tickets

把 spec / plan 拆成可以執行的 tickets，而且明確描述 blocking relationship。

這正好能接到：

> Spec → Issue / Ticket → Kanban

---

## /implement

不是單純「開始寫 code」。

它會帶著：

- spec / tickets
- TDD
- code review

一起走。

所以很適合拿來示範：

> Skill 可以 orchestrate 其他 Skill。

---

## /code-review

這個特別值得講 Subagent。

Matt 的 README 描述它會用兩條 review 軸：

- Standards
- Spec fidelity

而且用平行 sub-agents 做，避免兩種 review 視角互相污染。

這就是很好的：

> **獨立驗收，不要讓同一個 Agent 自己做、自己宣布完成。**

---

## /handoff

把當前 conversation 壓成 handoff document，讓另一個 Agent 可以繼續。

這可以直接接 Agent 101 的：

- context 太長
- compact
- durable state
- fresh context

---

## /wayfinder

用在「一個 Agent session 根本放不下」的大型工作。

不是硬把所有 context 塞進同一個視窗，而是用 issue tracker 上的 decision tickets 當共同地圖。

這其實就是：

> external task state + bounded execution

---

# 一個很適合課堂展示的 Matt Pocock 流程

```text
模糊想法
   ↓
/grill-with-docs
   ↓
shared language / CONTEXT.md / ADR
   ↓
/to-spec
   ↓
/to-tickets
   ↓
/implement
   ├─ /tdd
   └─ /code-review
   ↓
PR / Preview / Evidence
   ↓
Human Acceptance
```

這不是唯一正解。

它的價值是讓學生看到：

> **一個成熟 Agent workflow 可以由多個小 Skill 組合，而不是靠一個超長 Prompt。**

---

# 和你貼的「四大階段指令清單」要分開看

前一版教材這裡有一個錯誤：我只看了 Matt Pocock README 的主 reference，因而把幾個 `skills/misc/` 下的 Skill 誤判成「不在目前 repo」。

實際搜尋 repo 後可以確認：

| 名稱 | 是否存在 | 正確用途 |
|---|---|---|
| `/grill-with-docs` | ✅ 主線 | 深度訪談 + shared language + CONTEXT.md / ADR |
| `/to-spec` | ✅ 主線 | 把已決定內容整理成 spec |
| `/to-tickets` | ✅ 主線 | 拆成有 blocking edges、fresh session 可執行的 tickets |
| `/tdd` | ✅ 主線 | Red → Green → Refactor |
| `/diagnosing-bugs` | ✅ 主線 | disciplined diagnosis / regression loop |
| `/improve-codebase-architecture` | ✅ 主線 | 掃描 deepening opportunities |
| `/handoff` | ✅ 主線 | 產生可攜的 handoff artifact |
| `/setup-pre-commit` | ✅ misc | Husky / lint-staged / Prettier / type check / tests |
| `/git-guardrails-claude-code` | ✅ misc | 阻擋危險 Git commands；不是敏感資訊掃描 |
| `/migrate-to-shoehorn` | ✅ misc | 特定 TypeScript test migration：`as` → `@total-typescript/shoehorn` |
| `/scaffold-exercises` | ✅ misc | 建立課程 exercise directory / problem / solution 結構 |

Matt repo 的 misc README 把後四個描述為「keep around but rarely use, not promoted in the plugin」。

另外，你貼文中的 `/to-prd`、`/to-issues`、`/diagnose` 並不是 Matt Pocock 目前主線 Skill 的正式名稱；對應概念比較接近 `/to-spec`、`/to-tickets`、`/diagnosing-bugs`。

---

# 和 BMAD / Spec Kit 的差異

## Matt Pocock Skills

偏向：

> 小而可組合的工程能力。

## Spec Kit

偏向：

> 用 spec 驅動 feature development。

## BMAD

偏向：

> 一套較完整的 AI-driven delivery operating model。

可以這樣教：

```text
Skill        = 一個做事能力
Spec Kit     = 一種 feature delivery process
BMAD         = 更完整的 delivery operating model
GitHub       = 工作狀態、協作與 audit trail
```

它們不是一定要四選一。

---

## 安裝方式（知道即可）

Matt Pocock README 目前提供：

### Claude Code plugin

```bash
claude plugins install mattpocock-skills
```

### Codex / 其他 Agent

```bash
npx skills@latest add mattpocock/skills
```

Agent 101 不需要把安裝當教學核心。

真正重要的是：

> 看懂這套 Skills 在解決哪些 Agent failure modes，以及為什麼要把工作方法外部化、可重用化。
