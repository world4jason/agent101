# 16｜ChatGPT Plugins / Apps / Connectors：產品層的外部能力

在 ChatGPT 裡，「外掛」現在可以理解成一種 **產品層的整合套件**。

ChatGPT 的產品介面裡，這類能力可能被稱作：

- Plugin
- App
- Connector
- Tool

不同名稱的產品細節會變，但對使用者最重要的心智模型是：

> **Plugin = 把某個外部服務、資料來源或動作，包成 ChatGPT 可以直接使用的能力。**

---

# 一個最簡單的例子

如果沒有外掛：

```text
你：
「幫我整理今天的重要 email」

ChatGPT：
我看不到你的 Gmail，
請把 email 貼上來。
```

如果已經連接 Gmail Plugin：

```text
你
 ↓
ChatGPT
 ↓
Gmail Plugin
 ↓
你的 Gmail
 ↓
搜尋 / 讀取 / 整理
 ↓
ChatGPT 回答
```

也就是：

> **Plugin 讓 ChatGPT 從「只能跟你聊天」變成「可以直接和你的工具合作」。**

---

# 目前可以看到什麼類型的 Plugin？

目前 ChatGPT Plugin Directory 裡，可以看到例如：

- Google Drive
- Gmail
- Google Calendar
- GitHub
- Slack
- Vercel
- Todoist
- 其他第三方服務

有些偏：

### Read

例如：

- 搜尋 email
- 讀文件
- 查行事曆
- 查 repository / issue / PR

有些也可以：

### Write / Action

例如：

- 建立草稿
- 新增行事曆事件
- 建 Issue / PR
- 部署應用
- 更新外部系統資料

實際能做什麼，取決於那個 Plugin 提供的 action 與權限。

---

# Plugin 和 MCP 差在哪？

這是最容易混淆的一組。

## MCP

是 **protocol / interface standard**。

它回答：

> Agent 要怎麼和外部 Tool / Resource 溝通？

## ChatGPT Plugin

是 **ChatGPT 產品裡可安裝 / 連接的整合單位**。

它回答：

> 我要把哪個 App / Service 接進 ChatGPT？

可以這樣理解：

```text
MCP
= USB / API 規格

ChatGPT Plugin
= 你實際插進來的裝置 / App
```

但這只是一個方便理解的比喻。

實際上 Plugin 的底層實作可能不同；**不要直接把「Plugin = MCP Server」畫上等號。**

---

# Plugin 和 Skill 差在哪？

## Skill

教 Agent：

> **怎麼做。**

例如：

```text
分析會議：
1. 找 decision
2. 找 owner
3. 找 deadline
4. 找 unresolved question
```

## Plugin

提供：

> **去哪裡拿資料 / 做動作。**

例如：

```text
Google Drive Plugin
Slack Plugin
GitHub Plugin
Gmail Plugin
```

兩個可以組合：

```text
Meeting Summary Skill
        ↓
ChatGPT
  ├─ Google Drive Plugin
  ├─ Slack Plugin
  └─ Calendar Plugin
```

Skill 是 Know-how。

Plugin 是 External Capability。

---

# Plugin 和 RAG 差在哪？

Plugin 也不等於 RAG。

例如 Google Drive Plugin 可以：

- 找檔案
- 讀文件
- 編輯文件
- 回覆 comments

其中「搜尋相關文件，再把內容給模型回答」這一段，概念上可能形成 retrieval workflow。

但：

> **Plugin 是外部服務整合。**
>
> **RAG 是 retrieval + generation 的資訊處理模式。**

所以一個 Plugin 可以參與 RAG，但 Plugin 本身不是 RAG。

---

# Plugin 和 Web Search 差在哪？

## Web Search

主要找：

> 公開網路上的資訊。

## Plugin

主要連：

> 你的帳號、工作系統或特定第三方服務。

例如：

```text
「最近 Vercel 有什麼新功能？」
→ Web Search

「我的 Vercel 專案為什麼 deploy 失敗？」
→ Vercel Plugin / Connector
```

前者是「公開世界」。

後者是「我的系統」。

---

# 權限是 Plugin 教學一定要講的一頁

一旦 Agent 能做的不只是讀，而是：

- 寄信
- 改行事曆
- 建 PR
- 更新 task
- deploy

就需要理解：

> **能力越大，權限與確認機制越重要。**

對普通使用者最重要的是分清楚：

### Read

> 幫我查。

### Write / Action

> 幫我改 / 建立 / 發送。

所以課堂上應該建立一個習慣：

> **高影響操作要知道 Agent 正準備做什麼，再確認。**

ChatGPT 的 Plugin 有產品層權限設定；可以設定外掛讀寫時何時需要再次確認。

---

# ChatGPT Work + Plugin

當工作變成：

```text
查 Gmail
 ↓
找 Google Drive 文件
 ↓
看 Calendar
 ↓
更新 GitHub
 ↓
產出報告
```

Plugin 就不只是一個「查資料的小外掛」。

它會變成 Agent workflow 裡的 **action layer**。

在 ChatGPT Work 這種長任務模式裡，Plugins 可以被串進較長的 multi-step workflow。

---

# Native Capability 不一定是 Plugin

這點也值得教。

像：

- Web Search
- Image Generation
- Memory
- 檔案處理

可能是 ChatGPT 本身的 native capability。

不要看到「ChatGPT 會做某件事」就認為它一定是 Plugin。

比較好的分類是：

```text
ChatGPT Native Capability
        +
Plugins / Apps / Connectors
        +
Skills / Instructions
        +
External data / RAG
        =
完整 Agent 能力
```

---

# 放回整張 Agent 能力地圖

```text
                    Human
                      │
                 Goal / AC
                      │
                      ▼
                  ChatGPT
       ┌──────────────┼──────────────┐
       │              │              │
     Skills        Plugins        Subagents
    怎麼做？       接哪些 App？      誰來做？
       │              │              │
       │       ┌──────┼──────┐       │
       │       │      │      │       │
       │     Gmail  GitHub  Drive    │
       │                             │
       └──────── Tools / Data ───────┘
                    │
          ┌─────────┼──────────┐
          │         │          │
      Web Search   MCP        RAG
      公開資訊     連接標準     檢索模式
```

---

# 初階怎麼講？

外行人只需要先記住：

> **Skill：教 AI 怎麼做。**
>
> **Plugin：把你的 App 接進 ChatGPT。**
>
> **Web Search：查公開世界。**
>
> **RAG：查指定知識。**
>
> **MCP：外部工具的共同連接標準。**
>
> **Subagent：另一個專責 worker。**

這樣就夠。

---

# 進階再講

- Plugin permissions
- OAuth / authentication
- read vs write actions
- ChatGPT Work + Plugins
- MCP server / client
- custom integrations
- organization policy
- tool selection
- approval gates
- least privilege

對 Agent 101 而言，真正重要的不是「外掛怎麼安裝」。

而是：

> **當 AI 開始能讀你的資料、操作你的系統時，你必須知道它擁有什麼能力，以及哪些動作需要人類確認。**
