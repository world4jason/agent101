# 15｜Web Search、MCP、Skill、RAG 到底差在哪？

這四個概念很容易被混在一起，但它們其實回答不同問題。

最簡單的版本：

| 概念 | 一句話 | 主要解決什麼？ |
|---|---|---|
| **Skill** | 教 AI「這類事情怎麼做」 | 方法 / SOP / workflow |
| **Web Search** | 讓 AI 去公開網路找最新資料 | 新鮮外部資訊 |
| **RAG** | 先從指定資料庫找相關內容，再交給模型回答 | 私有 / 專門知識 |
| **MCP** | 用共同協定把 AI 接到外部工具、資料與服務 | 連接能力 |

---

# 給外行人的比喻

把 Agent 想成一個新同事。

## Model = 腦袋

它本身會推理、寫作、理解語言。

但腦袋不代表它知道今天剛發生什麼，也不代表它可以讀你的公司資料或操作 GitHub。

---

## Skill = SOP / 工作手冊

例如：

> 做 PR review 時，要先看 AC、再看 tests、最後檢查 scope creep。

Skill 讓 Agent 知道：

> **遇到這類工作，應該用什麼方法做。**

它本身不保證有最新資料，也不等於能連到外部系統。

Anthropic 的 Skills repo 把 Skills 描述成 dynamically loaded 的 instructions、scripts、resources，用來讓 Agent 對特定任務有可重複的做法。

來源：
- <https://github.com/anthropics/skills>
- <https://agentskills.io/>

---

## Web Search = 去網路查

適合：

- 今天的新聞
- 最新版本
- 現在價格
- 最新官方文件
- 最近的 GitHub release
- 公開網頁上的資料

重點是：

> **資料是公開網路，而且新鮮度重要。**

Web Search 是一種 Tool / capability。

它可以直接由 Agent 平台提供，也可以透過 MCP server 暴露成一個 tool；但「Web Search」本身不是 MCP。

---

## RAG = 去指定資料庫找

RAG = Retrieval-Augmented Generation。

典型流程：

```text
User Question
      ↓
Retrieve relevant documents
      ↓
把找到的 context 給 LLM
      ↓
Generate answer
```

例如：

> 「公司的請假規定是什麼？」

Agent 不需要上整個 Internet 搜尋，而是去：

- 公司 Handbook
- Notion / Confluence
- Google Drive
- Product docs
- 客服知識庫
- 歷史 tickets

找最相關內容，再回答。

OpenAI Cookbook 的 RAG 範例包含 semantic search → top results → LLM generation；也有 graph database、vector database 等做法。

重要：

> **RAG 不等於 Vector DB。**

Vector search 很常見，但 retrieval 也可以是：

- keyword / BM25
- SQL
- graph query
- hybrid search
- metadata filter
- full-text search

RAG 的核心是：

> **先 Retrieval，再用 retrieved context 幫助 Generation。**

來源：
- <https://github.com/openai/openai-cookbook>

---

## MCP = 插座 / 連接標準

MCP = Model Context Protocol。

它不是搜尋引擎，也不是資料庫。

它解決的是：

> **不同 AI client 要怎麼用一致的方式連接外部 tools / resources / prompts。**

MCP Server 可以提供：

- Tools：可以呼叫的動作
- Resources：可以讀的資料
- Prompts：server 提供的 prompt template / workflow entry

例如一個 GitHub MCP Server 可以讓 Agent：

- 查 issue
- 讀 PR
- 建立 issue
- review PR

一個資料庫 MCP Server 可以讓 Agent：

- query DB
- 讀 schema
- 執行允許的操作

來源：
- <https://github.com/modelcontextprotocol/modelcontextprotocol>
- <https://modelcontextprotocol.io/>

---

# 四者不是競爭關係

它們可以一起用：

```text
          Skill
「研究競品時要怎麼做」
             │
             ▼
           Agent
        ┌────┴────┐
        │         │
 Web Search      MCP
公開網路最新資訊   連公司工具
                  │
                  ▼
                 RAG
              公司知識庫
```

例如：

> 「幫我分析這個客戶最近為什麼不滿。」

可能會是：

1. **Skill** 告訴 Agent 分析客訴的 SOP。
2. **MCP** 連到 Zendesk / CRM / Slack。
3. **RAG** 從歷史 tickets 與產品文件撈相關 context。
4. **Web Search** 查這個產品最近是否有公開 outage / news。
5. Agent 整理答案。
6. Human 驗收。

---

# Search 和 RAG 最容易混淆

## Web Search

通常問：

> 公開世界現在有什麼？

資料：
- Internet
- 新鮮
- 不一定受你控制

## RAG

通常問：

> 我自己的資料裡有什麼？

資料：
- 指定 corpus
- 企業 / 專案 / domain-specific
- 通常有 indexing / retrieval layer

但邊界不是絕對。

例如你也可以把大量公開網頁 index 起來做 RAG；也可以讓 Search engine 當 RAG 的 retriever。

所以真正差異不是「有沒有搜尋」。

是：

> **retrieval 的資料來源、控制方式與用途。**

---

# MCP 和 RAG 最容易混淆

MCP 可以暴露一個「search knowledge base」工具。

此時：

- MCP = Agent 怎麼呼叫它
- RAG = 後面怎麼找資料並組成 context

例如：

```text
Agent
  ↓ MCP call
knowledge.search("退款規則")
  ↓
Retriever
  ↓
Vector / keyword / hybrid search
  ↓
Relevant docs
  ↓
LLM
```

所以：

> **MCP 是介面；RAG 是 retrieval + generation pattern。**

---

# Skill 和 MCP 最容易混淆

Skill：

> 「做這類工作應該怎麼做？」

MCP：

> 「你可以連到哪些外部能力？」

例如：

### Skill

```text
處理客服退款：
1. 先查訂單
2. 確認退款資格
3. 查 policy
4. 不符合就 escalation
```

### MCP

提供：

```text
orders.get()
policy.search()
refund.create()
support.escalate()
```

所以可以記：

> **Skill = Know-how**
>
> **MCP = Connection**
>
> **RAG = Retrieval**
>
> **Web Search = Fresh public information**

---

# 再加上 Subagent

Subagent 又是另一層：

> **把一部分工作交給另一個獨立 worker / context。**

例如：

```text
Main Agent
 ├─ Research Subagent → Web Search
 ├─ Internal Knowledge Subagent → RAG
 ├─ GitHub Subagent → MCP
 └─ Reviewer Subagent → Skill + AC
```

所以 Subagent 不是資料來源，也不是 protocol。

---

# Agent 101 應該怎麼教？

## 初階只講一張

用這四句：

> **Skill：教它怎麼做。**
>
> **Search：讓它知道外面現在發生什麼。**
>
> **RAG：讓它查你自己的資料。**
>
> **MCP：讓它接上外部工具與系統。**

不用教 embeddings、protocol schema、transport。

---

## 進階才展開

再講：

- MCP client / server
- tools / resources / prompts
- permissions / confirmation
- RAG indexing / chunking / retrieval
- embeddings
- hybrid search
- reranking
- citations / provenance
- tool selection
- context budget
- retrieval quality evaluation

---

# 一個更完整的 Agent 心智模型

```text
                    Human
                      │
                 Goal / AC
                      │
                      ▼
                  Main Agent
        ┌─────────────┼──────────────┐
        │             │              │
      Skills       Subagents      Context
     怎麼做？        誰來做？       現在知道什麼？
        │             │              │
        └──────┬──────┘              │
               ▼                     │
             Tools                   │
        ┌──────┼───────┐             │
        │      │       │             │
      Search   MCP    Local Tool      │
        │      │                      │
        ▼      ▼                      │
   Public Web  Apps / DB / APIs       │
               │                      │
               └─────── RAG ─────────┘
                       │
                 Retrieved context
```

這張圖的重點不是技術細節。

而是讓學生知道：

> **模型本身、做事方法、外部工具、知識來源、工作分工，是不同東西。**
