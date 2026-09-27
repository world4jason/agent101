# Agent 101 vNext — Current Deck Inventory

Parent: #7  
Execution ticket: #8

## Decision rule

The current deck has 34 slides. vNext should not preserve slide count or chapter structure by default. Each current slide is evaluated against the two canonical mental models in #7:

1. **Agent loop** — Goal → Act → Observe → Continue.
2. **Delivery loop** — 想 → 拆 → 票 → 做 → 審 → 合.

A slide is kept only if it adds a new learner decision or mental model. Repeated definitions move to one canonical location.

The `Disposition` column uses exactly five values: **Keep / Rewrite / Merge / Move to Appendix / Delete**. It describes only the fate of the current slide; replacement/new-slide intent belongs in `vNext destination`.

## Slide-by-slide inventory

| # | Current slide | Learner question it is trying to answer | Disposition | vNext destination |
|---|---|---|---|---|
| 1 | 管理一支 Human + Agent 團隊 | 這堂課要幫我做什麼？ | Rewrite | Slide 1 — 管 AI 專案，本質是管工作 |
| 2 | Agent 101 是四個系統 | 整堂課有哪些部分？ | Delete | Old 4-system taxonomy is removed; #9 defines the new Agent-first orientation |
| 3 | 你到底要它完成什麼？ | 為什麼工作定義重要？ | Merge | Slides 6–9; becomes discovery → decision → ticket |
| 4 | Requirement / AC | Requirement 與 AC 差在哪？ | Merge | Slide 9; AC gets one canonical definition |
| 5 | BDD / Example Mapping | 怎麼把模糊需求變具體？ | Move to Appendix | Appendix / Agent 201; concrete examples remain inside Ticket/Review instead |
| 6 | Ticket 是工作契約 | Ticket 要包含什麼？ | Rewrite | Slide 9 — bounded Ticket + observable AC |
| 7 | Kanban 外部化狀態 | 工作現在做到哪？ | Rewrite | Slide 10 — Backlog → Doing → Review → Done; remove READY from core |
| 8 | Subagent | Subagent 何時有用？ | Rewrite | Slide 15, after human roles are understood |
| 9 | Skill vs Subagent | Skill 與 Subagent 差在哪？ | Merge | Slides 15 & 17; no standalone comparison slide |
| 10 | Git / GitHub 四個動作 | Branch / Commit / PR / Merge 是什麼？ | Rewrite | Slide 11 as one continuous GitHub work path |
| 11 | Gate by Gate 開發 | AI 工作如何前進？ | Merge | Slides 10–13; work state, GitHub, review and merge each get one job |
| 12 | 非技術驗收 | 非工程師要驗什麼？ | Merge | Slide 12 — Evidence + AC + human decision |
| 13 | Evidence Pack | 我要什麼證據？ | Merge | Slide 12; evidence is part of the review gate |
| 14 | 驗收流程 | PR 怎麼進到 Approve？ | Merge | Slide 12; avoid a second review definition |
| 15 | Preview → Production | Done 為什麼還不能上線？ | Rewrite | Slide 13 — Merge → Done / Deploy + visible Core stop |
| 16 | Agent Operating System | Agent 為什麼失控？ | Delete | Old Agent OS taxonomy is removed; #9 builds the advanced section by mapping back to the known Agent loop |
| 17 | Skills | Skill 是什麼？ | Merge | Slide 17 — “Need a repeatable method? → Skill” |
| 18 | 工具 / 方法資源地圖 | 各工具在哪一層？ | Move to Appendix | Appendix; too many named repos for beginner core |
| 19 | Matt Pocock Skills | composable skill workflow 是什麼？ | Move to Appendix | Appendix / Agent 201 |
| 20 | 一串 Skills | Skills 怎麼串起來？ | Move to Appendix | Appendix / Agent 201 |
| 21 | Skill / Search / RAG / MCP | 能力來源怎麼分？ | Merge | Web Search → Slide 16 as a built-in Tool example; Skill / RAG / MCP → Slides 16–17 per #7 capability architecture |
| 22 | 它們可以一起工作 | 這些能力怎麼組合？ | Merge | Slide 16 architecture + Slide 17 capability-gap map |
| 23 | Plugin / Apps / Connectors | Plugin 是什麼？ | Merge | Slide 17, grouped as packaged account/app integration |
| 24 | Plugin 權限 | 讀與寫的風險差在哪？ | Merge | Slide 16 — Permissions is a first-class bucket |
| 25 | 再加上 Subagent | Subagent 是不是資料來源？ | Merge | Slide 15; worker/context isolation is the canonical definition |
| 26 | Context | Context 與 durable state 差在哪？ | Merge | Slide 4 for runtime continuity; Slide 16 for architecture mapping |
| 27 | Compact | context compact 是什麼？ | Move to Appendix | Appendix / Agent 201 |
| 28 | External State + Fresh Bounded Execution | 長任務怎麼避免 context 漂移？ | Move to Appendix | Appendix / Agent 201; core uses durable Ticket/Issue/PR without naming this pattern |
| 29 | BDD / TDD / SDD / BMAD | 這些方法是否同一層？ | Move to Appendix | Appendix / Agent 201 |
| 30 | SDD | SDD 的流程？ | Move to Appendix | Appendix; only “larger delivery discipline → SDD” remains in Slide 17 |
| 31 | BMAD | BMAD 的流程？ | Move to Appendix | Appendix; only “larger delivery discipline → BMAD” remains in Slide 17 |
| 32 | 普通人 × AI | 非工程背景最重要的能力？ | Merge | Slide 18 summary |
| 33 | End-to-End 三問題 | 整套課最後怎麼記？ | Rewrite | Slide 18 — 想 → 拆 → 票 → 做 → 審 → 合 |
| 34 | References | 去哪裡延伸閱讀？ | Keep | Non-live Appendix reference slide / README links |

## Duplicate-concept map

| Concept | Current repetition | Canonical vNext location | Rule after that |
|---|---|---|---|
| Agent definition | Implicit across 2, 8, 16, 25 | Slide 2 | Later slides only apply the definition |
| LLM vs Agent/App runtime | Context slides + Agent OS framing | Slide 4 | No later redefinition of the loop |
| Agent vs Environment | Not explicit enough | Slide 5 | Later examples only reference local/cloud execution |
| Brainstorm vs decision | Missing | Slides 6–7 | Do not create work items from raw ideation |
| Work hierarchy | Missing / mixed with state | Slide 8 | Kanban never teaches hierarchy |
| Requirement / Ticket / AC | Slides 3, 4, 6, 11 | Slide 9 | AC is reused in Review, not redefined |
| Work state / Kanban | Slides 7, 11 | Slide 10 | One state flow only |
| GitHub delivery path | Slides 10, 11, 14, 15 | Slide 11 | Issue → Branch → Commit → PR is taught as one continuous delivery path |
| PR | Slides 10, 11, 14, 15 | Slide 11 | Slide 11 defines PR as the review / acceptance entry point; Slide 12 only consumes the existing PR for review and does not redefine it |
| Evidence / Review / Acceptance | Slides 12–15, 33 | Slide 12 | “Agent done” always means ready for review |
| Merge / Done / Deploy | Slides 15, 33 | Slide 13 | Core visibly stops here |
| Human roles | Missing before Subagent | Slide 14 | Human accountability precedes automation |
| Subagent | Slides 8, 9, 25 | Slide 15 | Specialist worker/context isolation only |
| Instructions / Context / Tools / Environment / Permissions | Spread across 16, 22, 24, 26 | Slide 16 | Advanced terms must plug into this existing architecture |
| Memory | Implicit in current Context / memory wording | Slide 16 under Context | Product memory may be named as an optional context source, but it is not the project source of truth; deep memory/session mechanics stay in Appendix / Agent 201 |
| Web Search | Current Slide 21 mixes Search with Skill / RAG / MCP | Slide 16 under Tools | Treat Web Search as a built-in Tool / fresh-public-information example; it is not a separate Slide 17 capability row in the current #7 source of truth |
| Skill / RAG / MCP / Connector / Plugin / SDD / BMAD | Slides 17–25, 29–31 | Slide 17 | One capability-gap map; details go to Appendix |
| Context compaction / durable sessions / long-horizon patterns | Slides 26–28 | Appendix / Agent 201 | Not beginner vocabulary |

## What is structurally wrong in the current deck

1. **The deck starts with project-management vocabulary before defining Agent itself.**
2. **Discovery is missing.** The current path jumps quickly from vague request to Requirement/AC/Ticket.
3. **Work hierarchy and work state are not separated.**
4. **GitHub is taught partly as vocabulary and partly as delivery flow, causing repetition.**
5. **Evidence, acceptance and deploy are explained in four neighboring slides that mostly rephrase one gate.**
6. **The current “Agent OS” section is longer than the core delivery workflow.** This makes advanced implementation details feel like mandatory beginner knowledge.
7. **Subagent appears before human role ownership.**
8. **Context/memory/session mechanics are overrepresented for Agent 101.**
9. **The running LUT example appears in Ticket but does not remain visible through brainstorm, hierarchy, GitHub and review.**
10. **There is no obvious “you can stop here and run a small project” boundary.**

## Inventory conclusion

The vNext rewrite should **not** be a 34-slide polish pass. The correct migration is a content contraction: keep the useful visuals and examples, but rebuild the teaching order around Agent-first mental model + one end-to-end LUT Gallery ticket.
