# Agent 101 Web Slides

這份簡報刻意做成 **純 HTML / CSS / JavaScript**，不需要 build step。

## 本機開啟

直接打開 `slides/index.html` 即可。

若瀏覽器限制本機檔案，可在 repository root 執行：

```bash
python -m http.server 8000
```

然後開啟：

```text
http://localhost:8000/slides/
```

## 操作

- `→` / Space：顯示下一個 fragment；全部顯示後進下一頁
- `←`：上一頁
- `Home`：第一頁
- `End`：最後一頁
- 右下角按鈕也可以操作

## GitHub Pages

合併到 `main` 後，如果 repository 的 GitHub Pages 設定為從 root branch 部署，入口可以是：

```text
https://world4jason.github.io/agent101/
```

root `index.html` 會導向 `/slides/`。

## vNext 教學結構

Live deck 以兩個 mental model 為主：

1. **Agent loop**：Goal → Act → Observe → Continue
2. **Delivery loop**：想 → 拆 → 票 → 做 → 審 → 合

視覺 rail 只做導航：

1. Agent
2. 想・拆・票
3. 做・審・合
4. 人・能力

Slides 1–13 是 **Agent 101 Core**；Slide 13 有明確停止點。Slides 14–17 是 optional roles / advanced capability map，Slide 18 收束。

每張 slide 都在 markup 上用 `data-structure` 標示 sequence / compare / hierarchy / relation / checklist / roadmap 等資訊結構，但不把這些結構名稱做成觀眾可見的 badge。
