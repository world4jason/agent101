# Agent 101 vNext — Slide Contract / Storyboard

Parent: #7  
Execution ticket: #9

## Running example

**LUT Gallery goal:** help a user go from one LUT they like to a small set of similar candidates, reducing the cognitive load of comparing every LUT manually.

This same example must persist from brainstorm → hierarchy → Ticket → Kanban → GitHub → Review → Merge.

## Live sequence

### 1. 管 AI 專案，本質是管工作
- **Learner question:** 這堂課到底要讓我會什麼？
- **Takeaway:** You do not need prompt tricks first; you need work that can be delegated, tracked and accepted.
- **Dominant visual:** 想 → 拆 → 票 → 做 → 審 → 合.
- **Running example:** Show “挑 LUT 太慢” as the motivating problem.
- **Prerequisite:** None.
- **Transition:** Before managing Agent work, first define what an Agent actually is.

### 2. Agent = 有目標、能行動、會看結果、再繼續
- **Learner question:** Agent 跟聊天機器人差在哪？
- **Takeaway:** Agent is a goal-directed worker that can act, observe and continue within boundaries.
- **Dominant visual:** Goal → Act → Observe → Continue loop.
- **Running example:** Goal = “讓我從喜歡的 LUT 找到相似候選.”
- **Prerequisite:** None.
- **Transition:** If that is Agent work, where do I “create” one?

### 3. 不用找「Agent 按鈕」；先從工作入口開始
- **Learner question:** Codex / Claude Code / ChatGPT 裡到底哪裡是 Agent？
- **Takeaway:** In agentic products, the normal task surface may already be the Agent workflow; start by giving a bounded goal and environment, not by hunting for a universal Agent object.
- **Dominant visual:** Three task-entry examples: coding agent / coding agent / multi-step work surface.
- **Running example:** Ask the agent to inspect the LUT Gallery repo and propose a bounded plan.
- **Prerequisite:** Slide 2 Agent definition.
- **Transition:** What lets the model keep working across more than one step?

### 4. LLM 做下一步推理；Agent/App 把下一輪需要的東西組回來
- **Learner question:** LLM 本身怎麼「記得」上一輪並繼續？
- **Takeaway:** The model reasons over the context available to the current call; continuity is created by the surrounding Agent/App carrying forward relevant instructions, task state, files, retrieved information and tool observations.
- **Dominant visual:** Input → LLM → output/tool request → Action → Observation → next Input.
- **Running example:** Ticket + repo files → LLM → inspect code → observation → next call.
- **Prerequisite:** Slide 2.
- **Transition:** The Agent decides what to do; where does that action actually run?

### 5. Agent 決定下一步；Environment 執行
- **Learner question:** Local agent 和 cloud agent 真正差在哪？
- **Takeaway:** Local/cloud describes the execution environment; tool access and permission boundaries still decide what the Agent can actually do.
- **Dominant visual:** Agent in center; Local worktree / Cloud sandbox as two execution environments; permission gate between.
- **Running example:** Edit LUT Gallery locally vs in a cloud sandbox.
- **Prerequisite:** Slide 4.
- **Transition:** Now that the machinery is clear, start the project from a vague idea.

### 6. Brainstorm 先發散，再由 Human 收斂
- **Learner question:** 我只有一個模糊想法，第一步怎麼用 AI？
- **Takeaway:** Human frame → AI diverge → challenge/cluster → Human converge.
- **Dominant visual:** Diverge/converge funnel.
- **Running example:** Ideas: Find Similar, Auto-group, Compare mode, search/filter improvements.
- **Prerequisite:** Agent can inspect and discuss.
- **Transition:** Generated ideas are not work items yet.

### 7. Brainstorm output 不是 Backlog；先做決策
- **Learner question:** AI 想出 20 個點子，要全部開 issue 嗎？
- **Takeaway:** Separate generation from evaluation; Human decides what enters the committed work system.
- **Dominant visual:** Idea pool → Decision gate → committed outcome / parking lot.
- **Running example:** Commit “Find Similar” first; defer Auto-group and LUT editor.
- **Prerequisite:** Slide 6.
- **Transition:** Once a direction is chosen, break it into a work hierarchy.

### 8. 先分層級，再排狀態：Milestone → Epic → Story → Task
- **Learner question:** 大方向、功能、故事、任務怎麼分？
- **Takeaway:** Hierarchy says “what belongs under what”; Kanban later says “where it is now.”
- **Dominant visual:** Vertical hierarchy.
- **Running example:** Milestone “降低選 LUT 認知負荷” → Epic “探索與比較” → Story “從喜歡 LUT 找相似” → Task “Find Similar entry + result list”.
- **Prerequisite:** Slide 7 committed direction.
- **Transition:** The executable leaf becomes a Ticket.

### 9. Ticket 要讓別人不用猜；AC 要能 Pass / Fail
- **Learner question:** 什麼樣的 Ticket 才能交給 Agent？
- **Takeaway:** Goal + Scope + Non-goals + AC + Owner + Priority + Parent/Dependency + Evidence.
- **Dominant visual:** One real Ticket, not a checklist wall.
- **Running example:** #42 “從喜歡的 LUT 找到相似 LUT.”
- **Prerequisite:** Slide 8 hierarchy.
- **Transition:** Once ready, the Ticket enters the work state machine.

### 10. Kanban 只回答「現在在哪」；Doing 同時不要塞太多
- **Learner question:** Agent 開始做後，我怎麼知道進度？
- **Takeaway:** Backlog → Doing → Review → Done; active Doing WIP < 2 per worker; Review is active work.
- **Dominant visual:** 4-column Kanban with one ticket moving.
- **Running example:** #42 moves Backlog → Doing → Review.
- **Prerequisite:** Slide 9 ready Ticket.
- **Transition:** For software work, GitHub records the actual delivery path.

### 11. 一張 Ticket 在 GitHub 裡一路走：Project → Issue → Branch → Commit → PR
- **Learner question:** GitHub 這些名詞跟我的 Ticket 有什麼關係？
- **Takeaway:** Each Git object exists to isolate, record or review the same bounded work.
- **Dominant visual:** Continuous sequence with purpose under each step.
- **Running example:** Issue #42 → feat/42-similar-lut → commits → PR #71.
- **Prerequisite:** Slide 10 work state.
- **Transition:** A PR is not “Done”; it is the entry point to acceptance.

### 12. Agent 說 Done = 可以開始 Review
- **Learner question:** 我怎麼判斷這個 PR 可以過？
- **Takeaway:** Review = Evidence + AC + scope + limitations + human decision.
- **Dominant visual:** PR → Evidence → AC → Approve / Request Changes.
- **Running example:** Tests pass, but 390px preview still horizontally scrolls.
- **Audience decision:** “你會 Approve 嗎？” Reveal: Request Changes, because AC fails.
- **Prerequisite:** Slide 11 PR.
- **Transition:** Once accepted, then merge and deploy.

### 13. Merge 之後才叫完成；到這裡 Core 已足夠跑一個小專案
- **Learner question:** 什麼時候才真的 Done？
- **Takeaway:** Accept → Merge → Done / Deploy. A beginner can stop here and run a small Human + Agent project.
- **Dominant visual:** Review accepted → Merge → Deploy, plus a visible “Agent 101 Core complete” stop marker.
- **Running example:** PR #71 passes AC, merges, deploys to Pages.
- **Prerequisite:** Slide 12 acceptance.
- **Transition:** Optional: if the project grows, define role ownership before adding more agents.

### 14. 先定 Human 責任，再談 Agent 角色
- **Learner question:** PM / UIUX / FE / BE / Reviewer 各自負責什麼？
- **Takeaway:** Human accountability must be explicit even when an Agent performs parts of the work.
- **Dominant visual:** Five-role ownership map.
- **Running example:** PM owns outcome/AC; UIUX owns flow/state; FE/BE implement; Reviewer verifies independently.
- **Prerequisite:** Core flow.
- **Transition:** Once roles are understood, a Subagent becomes easy to place.

### 15. Agent 可以扮演角色；Subagent 用來隔離專責 worker / context
- **Learner question:** 什麼時候需要 Subagent？
- **Takeaway:** Assign Role + Ticket + boundaries + tools + acceptance; use Subagent when isolated specialist work/context is useful.
- **Dominant visual:** Main Agent delegates one bounded research/review task to a specialist worker.
- **Running example:** Reviewer subagent checks #42 AC independently.
- **Prerequisite:** Slide 14 roles.
- **Transition:** These workers still rely on the same Agent architecture shown earlier.

### 16. 後面的能力都只是塞回五個位置：Instructions / Context / Tools / Environment / Permissions
- **Learner question:** AGENTS.md、RAG、MCP、Plugin 到底放在哪？
- **Takeaway:** Later capabilities are additions to the known loop, not a second Agent architecture.
- **Dominant visual:** Five-slot architecture mapped back to Slide 4.
- **Examples:** project instructions; conversation/files/retrieval; built-in/MCP/connector tools; local/cloud; read/write approval.
- **Prerequisite:** Slides 4–5.
- **Transition:** Add a capability only when a concrete gap appears.

### 17. 缺什麼能力，再加什麼；不要先裝滿工具
- **Learner question:** 什麼時候該用 Skill / RAG / MCP / Plugin / SDD / BMAD？
- **Takeaway:** Question → capability, not glossary.
- **Dominant visual:** Need-to-capability map.
- **Mapping:** repeatable method → Skill; fresh public info → Search; private/project knowledge → RAG; external tool access → MCP; packaged account/app access → Connector/Plugin; isolated specialist → Subagent; larger delivery discipline → SDD/BMAD.
- **Prerequisite:** Slide 16 architecture.
- **Transition:** Return to the one workflow the learner should actually remember.

### 18. 最後只記：想 → 拆 → 票 → 做 → 審 → 合
- **Learner question:** 離開教室後我要記住什麼？
- **Takeaway:** Understand the Agent, decide before ticketing, break work down, write verifiable work, limit WIP, inspect evidence, merge only after acceptance.
- **Dominant visual:** Large six-step roadmap.
- **Running example:** LUT Gallery path shown as one-line trace under the roadmap.
- **Secondary reference:** GitHub Pages / Supabase / PostHog / Cloudflare / Resend as optional starter toolbox only.
- **Prerequisite:** Entire talk.
- **Transition:** End / references.

## Non-live reference material

The current named-tool surveys, BDD/TDD/SDD/BMAD mechanics, compact/context-window details, long-horizon state patterns and large Skill repo examples move to Appendix / Agent 201. They remain useful, but must not compete with the beginner path.

## Storyboard acceptance check

- One learning job per slide: yes.
- Agent defined in first four slides: yes.
- “Do I need an Agent button?” answered: yes.
- Brainstorm before Ticket: yes.
- Hierarchy before Kanban: yes.
- GitHub taught as one ticket path: yes.
- Review/Evidence/Acceptance collapsed into one gate: yes.
- Human roles before Subagent: yes.
- Advanced concepts map back to known architecture: yes.
- Visible stopping point after Core: yes.
- Running LUT example spans end-to-end: yes.
