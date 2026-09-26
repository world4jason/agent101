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

## 設計原則

投影片不是把 Markdown 搬上螢幕，而是用視覺分成四個系統：

1. 定義工作
2. 管理執行
3. 驗收交付
4. Agent Operating System

第四部分涵蓋 Skills、Context / Compact、SDD、BMAD。
