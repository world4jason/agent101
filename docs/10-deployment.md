# 10｜從 Preview 到 Production：部署只需要先懂這些

Agent 101 不需要先教 DevOps。

非技術人員先懂兩個環境就夠了。

## Preview

這次修改的試映版。

用途：

- PM 驗需求
- Design 驗畫面
- QA 驗流程
- Stakeholder 提前看
- 不影響正式使用者

## Production

真正使用者正在使用的正式版本。

---

# 最重要的 Deployment workflow

Ticket  
↓  
Agent 修改  
↓  
PR  
↓  
Preview  
↓  
Human Acceptance  
↓  
Merge  
↓  
Production

這裡最重要的不是學哪一個 cloud。

而是：

> **不要把「Agent 做完」直接等同「上 Production」。**

中間要有可以驗收的 Preview 與 Gate。

---

# 第一階段只要認識這些工具角色

| 工具 | 在教材裡怎麼解釋 |
|---|---|
| GitHub Pages | 很簡單的靜態網站發布 |
| Vercel | Web App 與 PR Preview |
| Supabase | Database、Auth、Storage 等 backend 能力 |
| Cloudflare | 網路入口、Edge / API / Workers 等基礎設施 |

不需要第一堂課深入設定。

---

# 建議教學 Demo

準備一個已經能跑的簡單網站。

學員只做：

1. 寫 Requirement。
2. 寫 AC。
3. 建 Issue。
4. 交給 Agent。
5. Agent 建 PR。
6. 學員打開 Preview。
7. 對照 AC。
8. Approve / Request Changes。
9. Merge。
10. 看 Production 更新。

這 10 步跑過一次，比先上兩小時 Git 指令更容易建立正確心智模型。
