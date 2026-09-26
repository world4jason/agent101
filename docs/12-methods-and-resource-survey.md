# 12｜方法與資源 Survey：Skill、SDD、BMAD、TDD、BDD 與特殊工具

這一章的目的不是叫大家把所有工具都裝起來，而是先分清楚它們分別解決哪一層問題。

> **Skill、Subagent、BDD、TDD、SDD、BMAD、GitHub、Token 壓縮工具不是同一類東西。**

---

# 1. 先分層

| 層級 | 代表方法 / 工具 | 解決的問題 |
|---|---|---|
| 行為探索 / shared understanding | BDD / Examples | 不同角色如何對預期行為形成共同理解 |
| 開發 feedback loop | TDD | 用 Red → Green → Refactor 驅動實作 |
| 規格驅動 | SDD / GitHub Spec Kit | 先定義 what / why，再進入 plan / tasks / implementation |
| 交付方法 | BMAD / Superpowers | 從釐清、規劃、實作、驗證到回饋的工作體系 |
| 能力封裝 | Agent Skills / Matt Pocock Skills | 把 instructions / scripts / resources 變成可重用能力 |
| 工作隔離 / delegation | Subagents | 用獨立 context / prompt / tools 執行專責或平行任務 |
| 執行與稽核 | GitHub / Git / PR | 留下工作狀態、差異、review 與發布紀錄 |
| Context / token hygiene | RTK / Caveman proxy 等 | 減少工具輸出或可恢復內容進入模型 context 的噪音 |
| Output style | Caveman skill / i-have-adhd | 改變 Agent 回覆的密度與可行動性 |

---

# 2. 核心資源

## Anthropic / Agent Skills

Skill 可以理解為一個可攜式能力包：instructions、scripts、references / resources。

重點是 **progressive disclosure**：Agent 先知道有哪些 Skills，需要時才載入完整內容，而不是一開始把所有 SOP 塞進 context。

來源：
- <https://github.com/anthropics/skills>
- <https://agentskills.io/>

## GitHub Spec Kit / SDD

官方核心流程目前是：

```text
Specify → Plan → Tasks → Implement → Converge
```

較完整的 production path 還可以加入 Clarify、Checklist、Analyze 等 quality gates。

`Converge` 不是一般 Git diff review；它會把目前 codebase 對照 spec / plan / tasks，找出未完成或矛盾的地方，必要時追加 tasks，再回到 Implement。

來源：<https://github.com/github/spec-kit>

## BMAD Method

目前官方強調：

- right-sized process
- durable context
- specialized perspectives
- guided collaboration

教學上比「背所有 persona / command」更值得先理解。

來源：<https://github.com/bmad-code-org/BMAD-METHOD>

## Superpowers

`obra/superpowers` 把自己定位成：

> complete software development methodology built on composable skills

基本流程包含：

```text
brainstorming
→ isolated git worktree
→ writing plans
→ subagent-driven-development / executing-plans
→ TDD
→ code review
→ finish branch
```

因此它不是單一「power-user skill」，而是一套比較強 opinionated 的開發方法。

來源：<https://github.com/obra/superpowers>

---

# 3. BDD / TDD 怎麼說才準確？

## BDD

BDD **不等於 Given / When / Then**。

Cucumber 對 BDD 的核心描述是：

- 跨角色協作
- 建立 shared understanding
- 用 concrete examples 描述預期行為
- 在短 feedback loop 中持續驗證

Given / When / Then 是一種把 Example 寫清楚的 Gherkin 表達方式。

其中 Then 應盡量驗證使用者或外部系統可觀察到的結果，而不是深埋在 implementation 裡的內部狀態。

來源：
- <https://cucumber.io/docs/bdd/>
- <https://cucumber.io/docs/gherkin/reference/>

## TDD

核心循環：

```text
Red → Green → Refactor
```

也就是先建立會失敗的測試，再寫最少實作讓它通過，最後重構。

對 Agent 101 的非技術受眾，不需要先學測試語法；先理解「建立 feedback loop」即可。

---

# 4. Matt Pocock Skills：主線與 misc 要分開

Matt Pocock 的主線強調小而可組合的 Skills。

常見主流程：

```text
grill-with-docs
→ to-spec
→ to-tickets
→ implement
→ code-review
```

其中：

- `grill-me` / `grill-with-docs`：訪談使用者，把 plan / design 問清楚；不是 code adversarial review。
- `to-spec`：把已經決定的內容整理成可跨 session 保存的 spec。
- `to-tickets`：把工作切成 fresh session 可以完成的 tracer-bullet tickets。
- `implement`：實作並驅動 TDD / closing review。
- `code-review`：Standards 與 Spec fidelity 兩條 review 軸，可用平行 subagents。

### Matt repo 裡也確實有 misc skills

以下不是「網路上誤傳」，而是真的存在於 `skills/misc/`；只是 repo 自己把它們描述成 **rarely use / not promoted in the plugin**：

| Skill | 正確用途 |
|---|---|
| `setup-pre-commit` | 設定 Husky、lint-staged、Prettier、type checking、tests 等 commit-time checks |
| `git-guardrails-claude-code` | 用 Claude Code hook 阻擋危險 Git 指令，例如 push、reset --hard、clean、branch -D；**不是 secret scanner** |
| `migrate-to-shoehorn` | 很特定：把測試中的 TypeScript `as` assertions 遷移到 `@total-typescript/shoehorn` |
| `scaffold-exercises` | 建立 course exercise 的 sections / problems / solutions / explainers；**不是一般新人 onboarding scaffold** |

來源：<https://github.com/mattpocock/skills>

---

# 5. 特殊工具：先搞清楚它到底縮哪一層

## Caveman

來源：<https://github.com/JuliusBrussee/caveman>

要分成兩件事：

### Caveman Skill

主要讓 Agent **說得更短**：

- 去掉 filler
- 保留技術名詞、code、error、必要順序
- 有不同輸出密度

它本身 **不壓縮 input context**。

### Caveman Proxy / Engine

才會處理 Agent **讀進去的** logs、JSON、diff、test output 等可恢復資料。

所以不要把「Caveman skill」直接講成「context 壓縮」。

---

## RTK — Rust Token Killer

來源：<https://github.com/rtk-ai/rtk>

RTK 是 **CLI proxy / hook**，不是主要靠 Prompt 的 Skill。

它攔截 shell commands，將輸出過濾 / group / truncate / deduplicate 後再交給 Agent。

作者的「最高 90%」指的是：

> **Bash command output bytes 的減少**

不是：

- 整體 context 減少 90%
- token bill 減少 90%
- API 費用減少 90%

這個區分在課堂上應該明講。

---

## i-have-adhd

來源：<https://github.com/ayghri/i-have-adhd>

它主要是 **輸出格式 / interaction style Skill**：

- 先講下一個 action
- 多步驟編號
- suppress tangents
- 每回合重述 progress / state
- 給具體時間估計
- 結尾只留一個 concrete next step

作者自己寫的是：

> ADHD-friendly outputs. No ADHD diagnosis needed.

所以教材不要說它是治療、診斷或改善 ADHD 的工具；它比較像降低回覆認知負荷的 response-format policy。

---

# 6. Subagent 要怎麼教才準確？

不要把它定義成「職務角色」。

比較精確：

> **Subagent 是主 Agent 派出的獨立專責 worker，通常有自己的 context，並可有自己的 prompt、tools、permissions。**

Planner、Researcher、Builder、Reviewer、QA 都只是常見角色。

它的主要價值包括：

- context isolation
- parallel work
- specialized instructions
- independent review

但「要避免自己做自己驗」不代表任何 review 都必須用 Subagent；Human reviewer、CI、automated tests 也可以構成獨立 Gate。

---

# 7. 教學優先順序

## 第一層：人人都要懂

- Goal / Requirement
- AC
- Examples / BDD
- Ticket / Kanban
- PR / Preview / Evidence
- Human Acceptance

## 第二層：開始大量使用 Agent 時

- Skills
- Subagents
- Context / Compact
- fresh bounded execution
- TDD feedback loop

## 第三層：大型軟體交付

- Spec Kit / SDD
- Superpowers
- BMAD
- 更完整的 Git / CI / deployment

## 第四層：Context / Token 優化

- Caveman
- RTK
- handoff
- context hygiene

原則：

> **先把工作做對，再優化 Agent 做得多快、多省 token。**
