# G04 Prompt Playbook — 用 prompt 重現「AI Data Center Map」級結果

> 建立日期：2026-04-20
> 專案：G04 GitHub Page Static Site Study
> 目的：將本 repo 的產出拆解為「prompt → result」對照，建立可重用的 prompt 資產
> 版本：V0.1（初稿，待 Jason 審修）

---

## 為什麼寫這份文件？

Stage 2 原定是「讀懂 1200 行 app.js」。實際動手前發現：
- 讀懂 addMarkers / filterData / updateStats 這些實作細節，Stage 3 只換資料其實用不到
- **真正該學的是**：給一樣的 prompt，換到不同工具鏈上，怎麼拿到相近結果

這份 playbook 就是答案。讀完它，下次要做「類似展示型網站」，你能自己判斷：
用哪個工具？prompt 要多細？控制度留多少？

---

## Part 1 — Perplexity Computer 原版 prompt 解構

### 1.1 原文（Jason 實際輸入的）

```
Create a website that shows map of all data centers being built right now for ai.
conduct research using all available data on the internet about those data centers,
include all available data on the map (hover shows details).
```

2 句話，43 個英文單字。

### 1.2 實際產出（這個 repo）

- 4 個檔案：index.html (150) + style.css (542) + app.js (1227) + eslint.config.mjs (32)
- 50 筆真實資料（含經緯度、投資額、capacity、信源連結）
- 完整互動：filter + search + sort + popup + dark/light toggle + fit-bounds
- 無 build step，CDN 引入 Leaflet / Google Fonts，可直接 GitHub Pages

### 1.3 它憑空補了什麼（你沒說，它做的決策）

| 你沒說的 | 它做的決定 | 為什麼它能做這決定 |
|---------|----------|-----------------|
| 技術選型 | Leaflet + 純 HTML/CSS/JS | 訓練資料中「地圖網站」最常見 pattern |
| 設計語言 | dark-first + CSS tokens + Inter 字型 | 模仿 dashboard 風格（Vercel / Linear 類） |
| 互動完整度 | 4 種過濾 + 排序 + popup + tooltip | 假設使用者要「完整 demo」而不是 MVP |
| 資料結構 | 13 欄 JSON-like 陣列 | 從地圖站範本推導出必要欄位 |
| 部署目標 | 無 build step 純靜態 | 「GitHub Pages 友善」是隱含 default |
| 50 筆數量 | 業界實際項目約這個規模 | web research 取得 |

### 1.4 它背後的三個能力

1. **Agentic research loop** — 能自主上網查 50 筆資料、驗證、整理成結構化格式
2. **內建設計範本庫** — 訓練資料 + 設計系統偏好
3. **多步驟編排** — research → plan → code → 自我驗證 → 輸出

這三個能力其中 **1 和 3 是一般 Claude 也有的**（WebSearch + agentic loop），**2 需要 prompt 補齊**。

---

## Part 2 — Claude.ai Projects 版

### 2.1 丟原 prompt 會發生什麼？

**預期結果（大約 60% 相似度）：**
- ✅ HTML/CSS/JS 結構寫得出來
- ✅ Leaflet 整合沒問題
- ❌ 資料會是「範例」或虛構 10 筆（除非你明確要 WebSearch）
- 🔶 設計可能比較 bootstrap-like，不會自動用 CSS tokens
- 🔶 會停下來問「你要什麼資料？」而不是自己去找

### 2.2 精修版 prompt（目標 85% 相似度）

```
Build a static website showing all AI data centers currently being
built worldwide. Use Leaflet for the map.

Phase 1 — Research (use web search extensively):
  Find 40-60 real AI data center projects announced since 2024.
  For each: project name, operator/company, precise lat/lng,
  investment (USD), capacity (MW), status, expected completion,
  source URL. Output as data.json.

Phase 2 — Build:
  Create index.html + style.css + app.js (no build step, CDN only).
  Use CartoDB dark tiles by default.
  Design language: dark-first dashboard, CSS custom properties for
  theme tokens, Inter font from Google Fonts.

Phase 3 — Interact:
  Add: search box (instant filter), category filter buttons,
  region filter buttons, sortable table below map,
  marker popups with details + source link, dark/light toggle.

Deploy target: GitHub Pages (no server, all static).
```

### 2.3 你還需要做的事

1. **手動啟動 WebSearch**（Project settings 啟用）
2. **給一個風格參考**：貼一個你喜歡的 dashboard 截圖或 URL
3. **分 3 次發**：先 Phase 1 等資料出來，再 Phase 2，再 Phase 3。不要一次丟完，結果會比較淺

---

## Part 3 — Claude Code agentic 版

### 3.1 工作流

```
Step 1: 啟動新專案
   └─ mkdir <proj>; cd <proj>; git init

Step 2: 用 autoresearch skill 跑資料
   └─ /autoresearch "gather 50 AI data centers worldwide with
      lat/lng, investment, capacity, status, source URL.
      Output as data.json in this directory."

Step 3: 給 Claude Code 本體寫網站
   └─ (見 3.2 prompt)

Step 4: 本機驗證
   └─ open index.html  (觀察 UI)

Step 5: 部署
   └─ gh repo create --public --source=. --push
   └─ 到 GitHub Pages settings 啟用
```

### 3.2 Phase 2 的 Claude Code prompt

```
Build a static site (no build step) that reads data.json and
displays it as an interactive Leaflet map + sortable table.

Requirements:
- Files: index.html, style.css, app.js, eslint.config.mjs
- CDN: Leaflet 1.9.4 + Google Fonts (Inter, JetBrains Mono)
- Design: dark-first with CSS custom properties, CartoDB dark tiles
- Features: category filter, region filter, search (debounced 300ms),
  table with click-to-zoom markers, popup with source link,
  dark/light toggle with tile layer swap
- Circle marker radius scales by capacity tier (6-18 px)
- Fit bounds on filter change

Constraints:
- No React / Vue / Svelte — vanilla JS only
- No build step
- All CDN external, no npm install
- Must work when opened directly as file:// in browser
```

### 3.3 控制度 × 學習收穫（Claude Code 的優勢）

| 你可以… | Perplexity Computer | Claude Code |
|---------|--------------------|-----------|
| 看每一步生成什麼 | ❌ 黑盒 | ✅ 每個 tool call 都可見 |
| 中途改需求 | ❌ 要重跑 | ✅ 邊做邊改 |
| 指定 coding style | 🔶 有限 | ✅ 完全可控 |
| 把過程當學習材料 | ❌ 看不到 | ✅ 每個決定都有 reasoning |
| 重現到另一台機器 | ❌ 要訂閱 | ✅ git clone + 環境變數 |

---

## Part 4 — Trade-off 對照表

| 維度 | Perplexity Computer | Claude.ai Projects | Claude Code |
|------|---------------------|--------------------|-----------|
| 時間 | 5-10 min | 20-30 min | 60-90 min |
| 資料真實性 | 高（自動 web research） | 中-高（需啟 WebSearch） | 高（autoresearch） |
| 設計品質 | 高（內建範本） | 中（需指定） | 中-高（需指定 + 可迭代） |
| 控制度 | 低 | 中 | 高 |
| 可迭代性 | 低（要重跑） | 中（在同一 project 裡聊） | 高（檔案層級修改） |
| 費用 | Perplexity Pro 訂閱 | Claude Pro 訂閱 | API token 計費 |
| 學習收穫 | 低（看不到 code） | 中 | 高（可 diff 每個決策） |
| 部署便利 | 要 export | 要 export | 直接 git push |
| **最適合** | Demo、原型、一次性 | 探索需求、迭代草稿 | 長期維護、學習、團隊協作 |

---

## Part 5 — 可重用 prompt template

### Template A：地理分布展示型（本專案類別）

```
Build a static site (no build step) that shows {N} {items}
on an interactive map.

Data to research / provide:
  {items} with lat/lng, {必要欄位 1}, {必要欄位 2}, {狀態欄位},
  source URL each.

Design: dark-first, CSS custom properties, Leaflet + CartoDB dark.
Interact: search, category filter, region filter, sortable table,
  click-to-zoom markers, popup with source link.

Deploy: GitHub Pages.
```

**案例換法：**
- `{items}=AI data centers`, `{N}=50` → 本專案
- `{items}=Taiwan 半導體廠`, `{N}=30`
- `{items}=百大咖啡館`, `{N}=100`
- `{items}=你爬過的山`, `{N}=15`

### Template B：純 dashboard 型（無地圖）

```
Build a static dashboard (no build step) showing {topic} metrics.
Layout: stats bar (4 KPIs) → filter controls → sortable table →
  time-series chart (use Chart.js CDN).
Design: dark-first, CSS tokens, Inter font.
Deploy: GitHub Pages.
```

### Template C：資料視覺化敘事型

```
Build a single-page scrollytelling site explaining {topic}.
Structure: hero → 3-5 chart sections with prose between → conclusion.
Charts: D3.js CDN or Observable Plot.
Design: editorial (NYT-like), high typography quality, CSS tokens.
Deploy: GitHub Pages.
```

---

## Part 6 — 何時用哪個工具？

```
需要 5 分鐘 demo → Perplexity Computer
需要探索需求、還不確定做什麼 → Claude.ai Projects
需要長期維護、想學、想改細節 → Claude Code
想做給別人看、不維護 → Perplexity Computer 做好 → export → 部署
要重現到另一台機器 → Claude Code（唯一可 git 版控）
```

---

## Part 7 — G04 專案複盤

### 7.1 如果現在重做，我會怎麼做？

假設時間回到 3 月初，你想做「AI Data Center Map」，**最省時的組合**：

1. **用 Perplexity Computer 產初版**（5-10 min，拿到 4 個檔案）
2. **用 Claude Code 接手**（git init → commit → 改資料 → push）
3. **學習重點放在 "prompt-to-result gap"**，不是讀 code

這正是你現在走的路徑。G04 是「逆向學習」— 先看結果、再分析 prompt、最後理解工具鏈。

### 7.2 下次做類似專案的決策清單

- [ ] 先寫 1 句話 prompt，丟 Perplexity Computer 看結果
- [ ] 評估結果品質（60% / 85% / 95%）
- [ ] 決定：直接用 / 要改 / 重寫
- [ ] 要改 → 用 Claude Code 接手（因為可以 diff + 版控）
- [ ] 要重寫 → 用 Template A/B/C 改造成精細 prompt

### 7.3 Stage 3 換資料時的 prompt 提示

當你 Stage 3 要換新主題資料，**不要手刻 30 筆**，用：

```
/autoresearch "find 20-30 {你的主題} worldwide with:
  name, lat, lng, {你選 2-3 個量化欄位}, status, source URL.
  Output as JavaScript array assignable to `dataCenters =` in app.js.
  Match existing schema in app.js line 1-865."
```

這樣 20 分鐘就完成 Stage 3 的資料準備。

---

## 未決定項目（審修時決定）

1. 這份 playbook 要 commit 到 public repo 嗎？還是放 Obsidian 當個人筆記？
2. Part 5 的 Template 要補 D/E/F 嗎？（例如 admin UI 型、form 型）
3. Part 7.3 的 autoresearch prompt 實際跑一次做驗證，把結果貼回來？

---

## 版本記錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-04-20 | V0.1 | 初稿，基於 Jason 的 Software 3.0 insight 產出 |
