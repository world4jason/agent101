# Agent 101 vNext — Speaker Walkthrough / Desk Comprehension Check

Parent: #7  
Execution ticket: #12

This is a **desk walkthrough**, not a substitute for a real cold-participant usability test.

## Spoken flow

### Slides 1–5 — What an Agent is (~10 min)

**1 → 2**  
We start from the course promise: managing AI work is still managing work. Before discussing tickets or GitHub, define the worker.

**2 → 3**  
Once learners understand Goal → Act → Observe → Continue, the obvious practical question is: “Where do I create one?”

**3 → 4**  
Product entry points answer how to start, but not why the work can continue for multiple steps. Slide 4 opens the runtime.

**4 → 5**  
After separating LLM reasoning from the Agent/App loop, the remaining missing concept is where actions actually execute.

**No backward repair needed:** Agent, LLM/App, task entry and environment are introduced before project-management vocabulary.

---

### Slides 6–9 — 想 / 拆 / 票 (~9 min)

**5 → 6**  
Now the machinery is enough. Start with a vague product problem instead of introducing more tools.

**6 → 7**  
AI can generate options; that does not mean every option becomes committed work.

**7 → 8**  
Once Human chooses a direction, turn that decision into a hierarchy before discussing status.

**8 → 9**  
The executable leaf becomes a bounded Ticket with observable AC.

**No backward repair needed:** brainstorm, commitment, hierarchy and Ticket each have one distinct job.

---

### Slides 10–13 — 做 / 審 / 合 (~10 min)

**9 → 10**  
A ready Ticket enters the work state machine.

**10 → 11**  
For software work, GitHub records how the same bounded Ticket is isolated, changed and sent for review.

**11 → 12**  
PR is the beginning of acceptance, not the end of work.

**Audience decision moment on Slide 12**  
Show PR #71. Build passes, but AC 3 fails at 390px. Ask: “你會 Approve 嗎？”  
Reveal: **Request Changes**. This is the concrete demonstration that Agent self-report and green checks are not sufficient when agreed product behavior fails.

**12 → 13**  
Once all AC passes and Human accepts, merge. Slide 13 visibly closes Core.

**No backward repair needed:** AC is defined once on Slide 9 and only applied on Slide 12.

---

### Slides 14–17 — Optional roles / capability map (~8 min)

**13 → 14**  
Only continue if the audience needs larger-team operation.

**14 → 15**  
Human role ownership comes before Subagent. That makes Subagent a worker/context isolation technique, not mysterious architecture.

**15 → 16**  
All workers still depend on the same loop. Map later capabilities back into Instructions / Context / Tools / Environment / Permissions.

**16 → 17**  
Only now introduce Skill / Search / RAG / MCP / Connector / Plugin / SDD / BMAD, each as an answer to a concrete capability gap.

**No second architecture:** Slide 16 explicitly points back to Slide 4.

---

### Slide 18 — Transfer (~2 min)

End on one memory device:

**想 → 拆 → 票 → 做 → 審 → 合**

The LUT Gallery #42 trace restates the workflow using the same example rather than adding new concepts.

---

## Time budget

| Block | Target |
|---|---:|
| Slides 1–5 — Agent mental model | 10 min |
| Slides 6–9 — 想 / 拆 / 票 | 9 min |
| Slides 10–13 — 做 / 審 / 合 | 10 min |
| Slides 14–17 — Optional roles / capabilities | 8 min |
| Slide 18 — summary | 2 min |
| Audience judgment + questions | 5–10 min |
| **Total** | **44–49 min** |

This fits the #7 baseline of ~40–50 minutes including interaction.

## Cold-beginner desk questions

A learner should be able to answer these after Core without exact terminology.

### 1. LLM 和 Agent/App 差在哪？
Expected mental model:
- LLM reasons over the context available to the current call.
- Agent/App assembles relevant input, executes tools, observes results and continues the loop.

### 2. 我要去哪裡按「Create Agent」？
Expected mental model:
- There is no universal button.
- In agentic products, start from the product's task/work surface with a bounded goal, environment and permissions.

### 3. 為什麼 Agent 可以做很多步？
Expected mental model:
- Action produces observations.
- The runtime feeds relevant state/observations into the next call.
- This does not require believing the LLM itself permanently stores project state.

### 4. 我只有一個模糊 idea，第一步是什麼？
Expected mental model:
- Frame the problem.
- Let AI diverge.
- Challenge/cluster.
- Human decides what is actually committed.

### 5. 什麼 Ticket 才 ready？
Expected mental model:
- Goal / Scope / Non-goals / observable AC / owner / priority / parent or dependency / expected evidence are sufficiently clear that the worker does not need to invent product decisions.

### 6. Agent 說 Done，為什麼還不是 Done？
Expected mental model:
- “Done” from the worker means ready for review.
- Reviewer must inspect evidence against AC and scope.
- Failed AC means Request Changes.

### 7. 什麼時候才真正完成？
Expected mental model:
- After evidence passes, Human accepts, and the change is merged; deploy/release follows when applicable.

## Desk result

- Speaker can move forward without introducing missing prerequisites retroactively.
- Slides 2–5 form one continuous Agent explanation.
- Slides 6–13 form one continuous LUT Gallery delivery story.
- Advanced material is optional and maps back to the known loop.
- One audience decision moment is built in.

## Still requires real-world validation

Do **not** mark #12 fully proven until at least one real cold beginner runs through the Core and answers the questions above in their own words.

Do **not** mark #14 complete until browser/projection/mobile/print visual QA is run on the rendered deck.
