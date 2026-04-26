/* G04 Phase 4 — Components (Global) / Optical Line
 * Anchor vendors with cross-country coverage (CN / US / TW listed)
 * Data generated 2026-04-26 · see _research/phase4-components/optical-global.jsonl
 *
 * IMPORTANT — Multi-currency framework:
 *   Phase 4 vendors come from SZSE / NYSE / NASDAQ / TWSE — schema includes
 *   hq_listed / home_country / currency / est_revenue_local_mn / est_revenue_twd_mn.
 *   Stat 3 uses TWD-equivalent (USD ÷ 0.0322 ≈ ×31; CNY ×4.4) for cross-vendor sum.
 *   Stat 3 = per-supplier hardcoded 2025 AI optical revenue est. (TWD mn).
 */

/* ====== DATA (inline; 33 records) ====== */
const DATA = [
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "financial_guidance",
    "dc_project": "FY2025 annual results",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://news.futunn.com/en/post/64430745/innolight-technology-300308-q3-2025-earnings-report-commentary-steady-growth",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": 38240,
    "est_revenue_twd_mn": 168256,
    "verified_date": "2026-04-26",
    "notes": "2025 全年合併營收 RMB 382.4 億（YoY +60.25%），淨利 RMB 107.97 億（YoY +108.78%）。光通訊模組營收 RMB 374.57 億（YoY +63.67%，占整體 ~98%）。毛利率從 34.65% 升至 42.61%（+8pp），主因 800G/1.6T 高速產品占比提升。換算 TWD ~1,682 億。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "transceiver_800g",
    "dc_project": "800G global market share 2025",
    "dc_operator": "aggregate Hyperscaler+NVIDIA",
    "grade": "B",
    "source_url": "https://semianalysis.com/2023/08/23/nvidias-optical-ascent-1b-revenue/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "800G transceiver 全球出貨市占 ~40%（Innolight + Eoptolink 合計占 60% 以上 800G SFP 模組供應）。2025 800G 出貨估 1,200-1,500 萬顆（業界 SemiAnalysis + Cignal AI 共識，B 級）。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "transceiver_1_6t",
    "dc_project": "1.6T transceiver 2025-2026 ramp",
    "dc_operator": "NVIDIA Mellanox + Hyperscaler",
    "grade": "B",
    "source_url": "https://semianalysis.com/2023/08/23/nvidias-optical-ascent-1b-revenue/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "1.6T transceiver 全球市占估 50-70%（最大領先者）；2025 出貨 250-300 萬顆，初期 ASP $2,000，2026 預估 $1,200-1,500（年降 30-40%）。NVIDIA 占 1.6T 需求 ~80%。Innolight 為 NVIDIA Mellanox 主要 1.6T 供應商。B 級：SemiAnalysis + Goldman Sachs 共識，公司不官方揭露。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "AI_DC_revenue_share",
    "dc_project": "Optical module 2025 revenue",
    "dc_operator": "aggregate Hyperscaler",
    "grade": "A",
    "source_url": "https://news.futunn.com/en/post/64430745/innolight-technology-300308-q3-2025-earnings-report-commentary-steady-growth",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": 37457,
    "est_revenue_twd_mn": 164811,
    "verified_date": "2026-04-26",
    "notes": "2025 光通訊模組營收 RMB 374.57 億（占整體 ~98%），全部視為 AI DC / Hyperscaler / NVIDIA 暴險。換算 TWD ~1,648 億。A 級：SZSE 年報。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "customer_disclosure",
    "dc_project": "Top 5 customer concentration",
    "dc_operator": "NVIDIA + Top Hyperscalers",
    "grade": "B",
    "source_url": "https://www.perplexity.ai/finance/300308.SZ/financials",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Top 5 客戶佔營收 75-80%（SZSE 揭露要求）。業界估算分布：NVIDIA Mellanox 30-35%、Google 15-20%、AWS 10-15%、Meta 8-12%、Microsoft Azure 5-10%。具體比例公司不揭露，依模組供應商 share + Hyperscaler capex 推算（B 級）。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "capacity_expansion",
    "dc_project": "Annual capacity 2025-2026",
    "dc_operator": "Innolight internal",
    "grade": "A",
    "source_url": "https://news.futunn.com/en/post/71251871/innolight-technology-300308-strong-growth-in-demand-for-high-speed",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "2025 年化產能 2,800 萬個 transceiver，2026 計劃大幅擴產。蘇州總部 + 馬來西亞檳城（月產 200 萬個）+ 泰國（月產 50 萬個）+ 菲律賓擴產中。capex 2025-2026 估 RMB 50-70 億。A 級：法說會公開揭露。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "financial_guidance",
    "dc_project": "Gross margin expansion 2024-2025",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://news.futunn.com/en/post/64430745/innolight-technology-300308-q3-2025-earnings-report-commentary-steady-growth",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "光通訊模組毛利率 2024 年 34.65% → 2025 年 42.61%（+8pp）。主因 800G/1.6T 高速產品占比提升 + silicon photonics 整合 + 規模效應。A 級：SZSE 年報。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "silicon_photonics",
    "dc_project": "Silicon photonics integration acceleration",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://news.futunn.com/en/post/61494053/zhongji-xuchuang-300308-silicon-photonics-solutions-accelerate-volume-production-dual",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Silicon photonics 方案加速量產，是毛利率提升核心 driver。與 Tower Semiconductor 合作（2025/03 公告）整合 SiPho 製程。1.6T 與下一代 3.2T 的 SiPho 路徑成本優勢明確。B 級：研究報告 + Tower 公告。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "market_share",
    "dc_project": "Optical module global share 2025",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://introl.com/blog/fiber-optics-data-center-state-of-art-optical-interconnect-2025/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "全球 datacenter optical module 市占（按 revenue）：Innolight #1（~25-30%），其次 Eoptolink、Coherent、Lumentum、AAOI、Fabrinet。AI optical 細分市場 Innolight 領先優勢更明顯。B 級：Tier-1 媒體 + 業界共識。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "analyst_target",
    "dc_project": "2026E revenue forecast (consensus)",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://stockanalysis.com/quote/she/300308/revenue/",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": 47800,
    "est_revenue_twd_mn": 210320,
    "verified_date": "2026-04-26",
    "notes": "2026 全年營收法人共識 RMB 478 億（+25% YoY），net income RMB 145 億。基本情境假設 1.6T 出貨倍增、800G 持平、Hyperscaler 訂單延續。換算 TWD 2,103 億。C 級：多家券商共識。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "customer_disclosure",
    "dc_project": "NVIDIA GB200/GB300 NVL72 optical interconnect",
    "dc_operator": "NVIDIA platform",
    "grade": "B",
    "source_url": "https://ip-fiber.com/blogs/news/nvidia-orders-surge-innolight-and-eoptolink-dominate-60-of-800g-sfp-optical-modules-supply/",
    "source_date": "2025-Q3",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "GB200 NVL72 每 rack 配置 ~576 個 800G optical port（NVLink switch + InfiniBand spine + leaf），Innolight 估佔 NVIDIA 訂單 ~60%（與 Eoptolink 雙寡頭）。GB300 升級至 1.6T 後 Innolight 領先擴大。B 級：Tier-1 媒體 + 業界估算。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "customer_disclosure",
    "dc_project": "Google NPO + TPU optical module supply",
    "dc_operator": "Google",
    "grade": "B",
    "source_url": "https://deepfundamental.substack.com/p/deep-dive-optical-module-market/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Google NPO（Network Pluggable Optics）+ TPU 訓練網路 optical module Innolight 估占 ~60% 份額（B 級）。投資人會議揭露含 Google 客戶但不揭露具體比例。Google 內部 ASIC（TPU V8）訓練集群 800G/1.6T 需求預期 2026 加速放量。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "transceiver_1_6t",
    "dc_project": "1.6T ramp 2026 — Cignal AI consensus",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://cignal.ai/2025/05/800gbe-optics-shipments-to-grow-60-in-2025/",
    "source_date": "2025-05",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Cignal AI: 2025 800G shipments 60% YoY 成長; 1.6T 2025 開始小量量產，2026 加速。Innolight 領先 1.6T 認證 + 出貨節奏。C 級：研究報告。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "capacity_expansion",
    "dc_project": "Malaysia + Thailand factory",
    "dc_operator": "Innolight internal",
    "grade": "B",
    "source_url": "https://www.innolight.com/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "馬來西亞檳城廠月產能 200 萬個 transceiver（2025 完工），泰國月產能 50 萬個（2025 完工）。海外產能設置主要應對美國對中關稅 + 國際客戶 supply chain 多元化要求。B 級：公司網站 + 法說。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "joint_venture_history",
    "dc_project": "Tower Semiconductor SiPho partnership 2025",
    "dc_operator": "Tower Semiconductor",
    "grade": "A",
    "source_url": "https://towersemi.com/2025/03/10/031025/",
    "source_date": "2025-03",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "2025/03 與 Tower Semiconductor 簽訂 silicon photonics 製程合作，整合 InP / SiPho 雙路徑。Tower 為主流 silicon photonics foundry。對 Innolight 1.6T+ 世代成本與 form factor 競爭力關鍵。A 級：Tower 官方公告。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "AI_DC_revenue_share",
    "dc_project": "Stargate Abilene optical interconnect (D-grade)",
    "dc_operator": "OpenAI Stargate / Oracle / Crusoe",
    "grade": "D",
    "source_url": "https://www.cnbc.com/2025/09/23/openai-first-data-center-in-500-billion-stargate-project-up-in-texas.html",
    "source_date": "2025-09",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "D 級推估：Stargate Abilene Phase 1（GB200/GB300，預估 1.2M GPU 規模）optical module 需求估 1.2M × ~4-6 ports/GPU = 5-7M 800G/1.6T 模組。Innolight 估佔 60-70% 供應。Bear: 50% × 5M × $1,500 = $375M; Base: 65% × 6M × $1,500 = $585M; Bull: 80% × 7M × $1,800 = $1,008M。NVIDIA 與 OpenAI/Oracle 不官方揭露 vendor mix。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "market_share",
    "dc_project": "Coherent / Lumentum / AAOI competitive position",
    "dc_operator": "aggregate competitive",
    "grade": "B",
    "source_url": "https://iamfabian.substack.com/p/pluggables-power-and-geopolitics/",
    "source_date": "2025-Q4",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "競合定位：Innolight (Cn) + Eoptolink (Cn) = 中國雙巨頭 800G/1.6T 主導；Coherent (US) = InP laser chip + transceiver；Lumentum (US) = EML laser chip 上游；AAOI (US) = 800G transceiver 次要供應；Fabrinet (US) = OEM 製造。Innolight ASP 較美廠低 15-25%（製造成本優勢）但毛利率超越。B 級：Tier-1 分析。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "300308",
    "supplier_name": "Zhongji Innolight 中際旭創",
    "line": "optical",
    "category": "analyst_target",
    "dc_project": "Goldman Sachs / Daiwa / 法人共識 2026",
    "dc_operator": "aggregate analyst",
    "grade": "C",
    "source_url": "https://www.perplexity.ai/finance/300308.SZ/financials",
    "source_date": "2026-04",
    "hq_listed": "SZSE",
    "home_country": "CN",
    "currency": "CNY",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "法人共識：2026E EPS 約 RMB 12-14（vs 2025 ~RMB 9.6），P/E 多家機構給 25-30x（目標價區間 RMB 300-420）。1.6T 出貨倍增 + Hyperscaler capex 持續為核心 driver。C 級：多家券商交叉。",
    "agent": "agent-innolight-300308"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "financial_guidance",
    "dc_project": "FY2025 annual revenue (Jul 2024-Jun 2025)",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://www.coherent.com/content/dam/coherent/site/en/documents/investors/annual-filings/2025/coherent-annual-report-2025.pdf",
    "source_date": "2025-08",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 5810,
    "est_revenue_twd_mn": 180110,
    "verified_date": "2026-04-26",
    "notes": "FY2025 全年合併營收 USD 5,810M（+22% YoY）。Q3 FY25 單季 record USD 1.5B (+24% YoY)，Q4 FY25 ~$1.5B。換算 TWD ~1,801 億。財年截至 2025/06/30。A 級：10-K 年報。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "financial_guidance",
    "dc_project": "Q2 FY2026 quarterly revenue (Oct-Dec 2025)",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://www.fool.com/earnings/call-transcripts/2025/11/06/coherent-cohr-q1-2026-earnings-call-transcript/",
    "source_date": "2026-02",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 1690,
    "est_revenue_twd_mn": 52390,
    "verified_date": "2026-04-26",
    "notes": "Q2 FY2026 (Oct-Dec 2025) 合併營收 USD 1.69B（QoQ +12%、YoY +27%）。連續 3 季創新高。Datacom Communications 26% YoY 帶動。換算 TWD 524 億。A 級：earnings call。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "AI_DC_revenue_share",
    "dc_project": "Networking segment FY2025 H2 revenue",
    "dc_operator": "aggregate AI/Hyperscaler",
    "grade": "A",
    "source_url": "https://futurumgroup.com/insights/coherent-q3-fy-2025-delivers-record-revenue-led-by-strength-in-ai-infrastructure/",
    "source_date": "2025-Q3",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Q3 FY25 Networking 營收 +45% YoY +10% sequentially。Datacom +54% YoY +11% sequentially。Networking + Datacom 合計約佔 Q3 營收 ~55%（USD ~825M）。AI 暴險佔 networking 主體。A 級：10-Q + earnings call。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "transceiver_800g",
    "dc_project": "800G ZR/ZR+ QSFP-DD General Availability",
    "dc_operator": "Hyperscaler + Telco",
    "grade": "A",
    "source_url": "https://www.globenewswire.com/news-release/2025/03/28/3051358/0/en/Coherent-Announces-General-Availability-of-800G-ZR-ZR-QSFP-DD-Transceiver.html",
    "source_date": "2025-03",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "2025/03 公告 800G ZR/ZR+ QSFP-DD GA（General Availability），coherent transmission 跨 DC 級長距 + AI fabric 應用。Hyperscaler + Telco 雙客群。A 級：官方新聞稿。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "transceiver_1_6t",
    "dc_project": "1.6T transceiver booking record Q1 FY2026",
    "dc_operator": "AI/Hyperscaler",
    "grade": "A",
    "source_url": "https://www.fool.com/earnings/call-transcripts/2025/11/06/coherent-cohr-q1-2026-earnings-call-transcript/",
    "source_date": "2025-Q4",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Q1 FY2026（Jul-Sep 2025）Datacenter Communications +26% YoY，1.6T transceiver booking 創新高。Anderson 新 CEO 強調 AI photonics inflection。A 級：earnings call 揭露。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "laser_chip",
    "dc_project": "Indium Phosphide 6-inch production lines TX + Sweden",
    "dc_operator": "Coherent internal",
    "grade": "A",
    "source_url": "https://www.beyondspx.com/quote/COHR/coherent-s-ai-photonics-inflection-why-vertical-integration-is-driving-margin-expansion-nasdaq-cohr",
    "source_date": "2025-Q4",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "20-year InP（Indium Phosphide）平台 scaling through 6-inch production lines（Texas Sherman + Sweden Järfälla），全球首條 6-inch InP 量產線，初期良率超越 3-inch。垂直整合 InP wafer + EML laser + transceiver 三層，A 級：分析師深度報告 + 公司公告。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "capacity_expansion",
    "dc_project": "Internal InP capacity tripling 2026",
    "dc_operator": "Coherent internal",
    "grade": "B",
    "source_url": "https://www.beyondspx.com/quote/COHR/coherent-s-ai-photonics-inflection-why-vertical-integration-is-driving-margin-expansion-nasdaq-cohr",
    "source_date": "2025-Q4",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "公司宣告內部 InP 產能 2026 倍增至 3 倍（vs 2024 baseline），對比競爭者依賴外購 EML chip。垂直整合是 margin moat 核心 driver。B 級：管理層 guidance + 分析師整理。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "customer_disclosure",
    "dc_project": "NVIDIA Mellanox optical InP supply",
    "dc_operator": "NVIDIA Mellanox",
    "grade": "B",
    "source_url": "https://markets.financialcontent.com/stocks/article/finterra-2026-2-23-coherent-corp-cohr-2026-deep-dive-the-16t-networking-supercycle-and-the-anderson-turnaround",
    "source_date": "2026-02",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Coherent InP 平台是 NVIDIA Mellanox 1.6T optical 主要 chip 供應商之一（與 Lumentum 雙寡頭）。1.6T transceiver 自家整合（含 Innolight 等中國模組廠採購 Coherent EML chip 上游）。B 級：分析師深度。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "market_share",
    "dc_project": "AI photonics vertical integration moat",
    "dc_operator": "aggregate competitive",
    "grade": "B",
    "source_url": "https://markets.financialcontent.com/stocks/article/finterra-2026-4-7-the-light-of-intelligence-a-deep-dive-into-coherent-corp-cohr-and-the-future-of-ai-photonics",
    "source_date": "2026-04",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Coherent 是唯一垂直整合 InP wafer → EML laser → transceiver 三層的 AI photonics vendor。Lumentum 主要供 EML laser 但無自家 transceiver 規模；Innolight / Eoptolink 採購 Coherent EML 上游。1.6T 世代 InP 路徑優勢明確。B 級：頂級研究。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "transceiver_1_6t",
    "dc_project": "1.6T networking supercycle 2025-2027",
    "dc_operator": "AI Hyperscaler aggregate",
    "grade": "B",
    "source_url": "https://markets.financialcontent.com/stocks/article/finterra-2026-2-23-coherent-corp-cohr-2026-deep-dive-the-16t-networking-supercycle-and-the-anderson-turnaround",
    "source_date": "2026-02",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "1.6T networking supercycle 估 2025-2027 持續，Coherent positioning 為「美廠 anchor」對抗中國 Innolight + Eoptolink。Anderson CEO（2024 上任）轉型策略：剝離非核心、聚焦 AI photonics + InP 垂直整合。B 級：策略分析。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "financial_guidance",
    "dc_project": "FY2026 guidance (Jul 2025-Jun 2026)",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://www.fool.com/earnings/call-transcripts/2025/11/06/coherent-cohr-q1-2026-earnings-call-transcript/",
    "source_date": "2025-11",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 6900,
    "est_revenue_twd_mn": 213900,
    "verified_date": "2026-04-26",
    "notes": "FY2026 guidance USD 6.7-7.1B（中位 6.9B，YoY +19%），毛利率擴張 100-200 bps。換算 TWD ~2,139 億。A 級：earnings call guidance。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "analyst_target",
    "dc_project": "Sell-side consensus 2026E",
    "dc_operator": "aggregate analyst",
    "grade": "C",
    "source_url": "https://simplywall.st/community/narratives/us/tech/nyse-cohr/coherent/unnwslk5-coherent-corp-cohr-the-optical-engine-of-the-16t-ai-supercycle",
    "source_date": "2026-04",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Sell-side 2026E EPS USD 4.5-5.5（vs FY2025 ~$3.2），目標價區間 $130-180。Buy/Strong Buy 共識。1.6T supercycle + InP 垂直整合 + Anderson turnaround 三大 driver。C 級：多家券商共識。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "joint_venture_history",
    "dc_project": "II-VI + Coherent merger 2022",
    "dc_operator": "Coherent (post-merger)",
    "grade": "A",
    "source_url": "https://www.coherent.com/content/dam/coherent/site/en/documents/investors/annual-filings/2025/coherent-annual-report-2025.pdf",
    "source_date": "2025",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "現 Coherent Corp 由 2022 II-VI Inc. + Coherent Inc. 合併。II-VI 為 InP / SiC 材料商（Sherman, TX），Coherent 為 laser systems。合併後縱向整合材料 → chip → module 三層。A 級：年報。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "AI_DC_revenue_share",
    "dc_project": "AI Datacenter exposure aggregate",
    "dc_operator": "aggregate Hyperscaler",
    "grade": "B",
    "source_url": "https://futurumgroup.com/insights/coherent-q3-fy-2025-delivers-record-revenue-led-by-strength-in-ai-infrastructure/",
    "source_date": "2025-Q3",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 2500,
    "est_revenue_twd_mn": 77500,
    "verified_date": "2026-04-26",
    "notes": "FY2025 AI datacenter 暴險估 USD 2,500M（佔整體 ~43%），含 800G/1.6T transceiver + InP laser chip 雙軸。FY2026E 估 USD 3,500-4,000M（佔比 50%+）。換算 TWD ~775 億。B 級：分析師整理。",
    "agent": "agent-coherent-cohr"
  },
  {
    "supplier_ticker": "COHR",
    "supplier_name": "Coherent Corp.",
    "line": "optical",
    "category": "AI_DC_revenue_share",
    "dc_project": "Stargate / NVIDIA Rubin InP supply (D-grade)",
    "dc_operator": "Stargate / NVIDIA",
    "grade": "D",
    "source_url": "https://markets.financialcontent.com/stocks/article/finterra-2026-4-7-the-light-of-intelligence-a-deep-dive-into-coherent-corp-cohr-and-the-future-of-ai-photonics",
    "source_date": "2026-04",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "D 級推估：Stargate Phase 1 + NVIDIA Rubin（2026 H2）optical 暴險估算。Bear: NVIDIA Rubin CPO 加速 → Coherent transceiver 訂單下修，年收入 ~USD 200M; Base: 1.6T pluggable 主導 + Coherent 30% 份額 → ~USD 500M; Bull: InP 垂直整合 + 2027 3.2T 領先 → ~USD 1,000M。NVIDIA / OpenAI 不官方揭露 vendor。",
    "agent": "agent-coherent-cohr"
  }
];

/* ====== Per-supplier 2025E AI optical revenue (TWD mn) ====== */
const AI_REVENUE_2025_TWD_MN = {
  '300308': 164811,  // Innolight FY2025 光模組 RMB 374.57億 ×4.4 (Grade A),
  'COHR': 77500,  // Coherent FY2025 AI DC USD 2,500M ×31 (Grade B)
};

/* ====== DC coordinate registry (vendor factories + named DC) ====== */
const DC_COORDS = [
  // Innolight factories
  { match: /malaysia.*innolight|innolight.*malaysia|penang/i,                lat: 5.4164, lng: 100.3327, label: 'Innolight Penang Malaysia' },
  { match: /innolight.*thailand|thailand.*innolight/i,                       lat: 13.7563, lng: 100.5018, label: 'Innolight Thailand' },
  { match: /suzhou.*innolight|innolight.*suzhou|蘇州/i,                      lat: 31.2989, lng: 120.5853, label: 'Innolight Suzhou HQ' },
  { match: /philippines.*innolight|innolight.*philippines/i,                 lat: 14.5995, lng: 120.9842, label: 'Innolight Philippines' },
  // Coherent factories
  { match: /sherman.*tx|sherman.*texas|coherent.*texas/i,                    lat: 33.6357, lng: -96.6089, label: 'Coherent InP Sherman TX' },
  { match: /sweden.*coherent|coherent.*sweden|järfälla|jarfalla/i,           lat: 59.4258, lng: 17.8431, label: 'Coherent InP Järfälla Sweden' },
  { match: /easton.*pa|easton.*coherent/i,                                   lat: 40.6884, lng: -75.2207, label: 'Coherent EML Easton PA' },
  { match: /coherent.*hong kong|hong kong.*coherent/i,                       lat: 22.3193, lng: 114.1694, label: 'Coherent Transceiver Hong Kong' },
  { match: /coherent.*vietnam|vietnam.*coherent/i,                           lat: 10.8231, lng: 106.6297, label: 'Coherent Transceiver Vietnam' },

  { match: /stargate.*abilene|abilene/i,                                     lat: 32.4487, lng: -99.7331,  label: 'Stargate Abilene, TX' },
  { match: /coreweave/i,                                                     lat: 40.7589, lng: -73.9851,  label: 'CoreWeave (distributed HQ)' },
  { match: /nvidia.*rubin|rubin platform/i,                                  lat: 37.3688, lng: -122.0363, label: 'NVIDIA HQ (Santa Clara)' },
];

function lookupCoord(dcProject) {
  if (!dcProject) return null;
  for (const e of DC_COORDS) if (e.match.test(dcProject)) return e;
  return null;
}

/* ====== State ====== */
const state = { filters: { supplier: 'all', grade: 'all' }, search: '' };

/* ====== Helpers ====== */
const SUPPLIER_META = {
  '300308': { name: '中際旭創', nameEn: 'Innolight', color: '#ef4444', flag: '🇨🇳' },
  'COHR': { name: 'Coherent', nameEn: 'Coherent', color: '#3b82f6', flag: '🇺🇸' }
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };

function formatNtdMn(n) {
  if (n == null) return '—';
  if (n >= 1_000_000) return 'NT$' + (n / 1_000_000).toFixed(2) + '兆';
  if (n >= 100_000)   return 'NT$' + (n / 10_000).toFixed(0) + '千億';
  if (n >= 100)       return 'NT$' + (n / 100).toFixed(1) + '億';
  return 'NT$' + n.toLocaleString() + 'M';
}

function formatLocalMn(n, currency) {
  if (n == null) return '—';
  const symbols = { USD: '$', CNY: '¥', TWD: 'NT$' };
  const sym = symbols[currency] || '';
  if (n >= 1000) return sym + (n / 1000).toFixed(2) + 'B';
  return sym + n.toLocaleString() + 'M';
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const AGGREGATE_CATEGORIES = new Set([
  'financial_guidance', 'analyst_target', 'AI_DC_revenue_share',
  'joint_venture_history', 'capacity_expansion', 'utility_customer_pool',
  'market_share', 'customer_disclosure',
]);
const AGGREGATE_DC_PATTERNS = [
  /aggregate/i, /合併營收/, /營收占比/, /\(法人估\)/, /overall/i,
  /annual results/i, /full year/i, /quarterly/i, /quarterly revenue/i,
  /market share/i, /market position/i, /landscape/i, /supply chain/i,
  /global market/i, /supercycle/i, /^all$/i,
];

function isShipmentRow(r) {
  if (AGGREGATE_CATEGORIES.has(r.category)) return false;
  if (r.dc_project && AGGREGATE_DC_PATTERNS.some(p => p.test(r.dc_project))) return false;
  return true;
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.supplier !== 'all' && d.supplier_ticker !== state.filters.supplier) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (q) {
      const hay = [d.supplier_name, d.dc_project, d.dc_operator, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderStats(rows) {
  const suppliers = new Set(rows.map(r => r.supplier_ticker));
  const shipmentRows = rows.filter(isShipmentRow);
  const dcs = new Set(shipmentRows.map(r => r.dc_project).filter(Boolean));
  let aggregateRevenue = 0;
  for (const t of suppliers) aggregateRevenue += AI_REVENUE_2025_TWD_MN[t] || 0;
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-suppliers').textContent = suppliers.size;
  document.getElementById('stat-dc-projects').textContent = dcs.size;
  document.getElementById('stat-revenue').textContent = formatNtdMn(aggregateRevenue);
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

let mapInstance = null; const markerLayer = [];

function initMap() {
  mapInstance = L.map('map', { worldCopyJump: true }).setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: 'abcd', maxZoom: 19,
  }).addTo(mapInstance);
}

function renderMap(rows) {
  markerLayer.forEach(m => m.remove()); markerLayer.length = 0;
  const groups = new Map();
  for (const r of rows) {
    const coord = lookupCoord(r.dc_project);
    if (!coord) continue;
    const key = coord.lat + ',' + coord.lng;
    if (!groups.has(key)) groups.set(key, { coord, rows: [] });
    groups.get(key).rows.push(r);
  }
  for (const { coord, rows: gRows } of groups.values()) {
    const best = gRows.map(r => r.grade).sort()[0] || 'D';
    const color = GRADE_COLORS[best] || '#888';
    const radius = Math.min(6 + gRows.length * 2, 18);
    const m = L.circleMarker([coord.lat, coord.lng], { radius, color, weight: 2, fillColor: color, fillOpacity: 0.45 });
    const html = [
      '<div class="popup-tw">',
      '<div class="popup-tw-header">' + sanitize(coord.label) + '</div>',
      '<div class="popup-tw-body">',
      gRows.map(r => {
        const sup = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888', flag: '🌐' };
        const rev = r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—';
        const localRev = r.est_revenue_local_mn != null ? formatLocalMn(r.est_revenue_local_mn, r.currency) : '';
        const grade = r.grade || '—';
        const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
        return '<div class="popup-tw-row">' +
          '<span class="popup-tw-supplier" style="color:' + sup.color + '">' + sup.flag + ' ' + sanitize(r.supplier_ticker) + ' ' + sanitize(sup.name) + '</span>' +
          '<span class="grade-badge grade-' + grade + '">' + grade + '</span>' +
          '<span class="popup-tw-cat">' + sanitize(r.category) + '</span>' +
          '<span class="popup-tw-rev">' + rev + (localRev ? ' (' + localRev + ')' : '') + '</span>' +
          (url ? '<a class="popup-tw-link" href="' + sanitize(url) + '" target="_blank" rel="noopener">source</a>' : '') +
          '</div>';
      }).join(''),
      '</div></div>'
    ].join('');
    m.bindPopup(html, { maxWidth: 460 });
    m.addTo(mapInstance);
    markerLayer.push(m);
  }
}

function renderMatrix(rows) {
  const shipmentOnly = rows.filter(isShipmentRow);
  const dcs = Array.from(new Set(shipmentOnly.map(r => r.dc_project).filter(Boolean)));
  const suppliers = Array.from(new Set(shipmentOnly.map(r => r.supplier_ticker))).sort();
  const dcScore = new Map();
  for (const r of shipmentOnly) {
    if (!r.dc_project) continue;
    dcScore.set(r.dc_project, (dcScore.get(r.dc_project) || 0) + 1);
  }
  const topDcs = dcs.sort((a, b) => (dcScore.get(b) || 0) - (dcScore.get(a) || 0)).slice(0, 12);
  const cell = new Map();
  for (const r of shipmentOnly) {
    if (!r.dc_project || !topDcs.includes(r.dc_project)) continue;
    const key = r.supplier_ticker + '|' + r.dc_project;
    if (!cell.has(key)) cell.set(key, { rev: 0, grades: new Set(), count: 0 });
    const c = cell.get(key);
    if (r.est_revenue_twd_mn) c.rev += r.est_revenue_twd_mn;
    if (r.grade) c.grades.add(r.grade);
    c.count += 1;
  }
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  thead.innerHTML = ''; tbody.innerHTML = '';
  const headRow = document.createElement('tr');
  headRow.innerHTML = '<th class="matrix-supplier-col">Supplier</th>' +
    topDcs.map(d => '<th class="matrix-dc-col" title="' + sanitize(d) + '">' + sanitize(d.length > 22 ? d.slice(0, 20) + '…' : d) + '</th>').join('');
  thead.appendChild(headRow);
  for (const s of suppliers) {
    const meta = SUPPLIER_META[s] || { name: s, color: '#888', flag: '🌐' };
    const tr = document.createElement('tr');
    const cells = topDcs.map(d => {
      const c = cell.get(s + '|' + d);
      if (!c) return '<td class="matrix-cell matrix-empty">·</td>';
      const bestGrade = Array.from(c.grades).sort()[0] || '—';
      const revText = c.rev ? formatNtdMn(c.rev) : '#' + c.count;
      return '<td class="matrix-cell"><span class="grade-badge grade-' + bestGrade + '">' + bestGrade + '</span> ' + sanitize(revText) + '</td>';
    }).join('');
    tr.innerHTML = '<td class="matrix-supplier-cell" style="border-left: 3px solid ' + meta.color + '">' + meta.flag + ' ' + s + '<br><span class="matrix-supplier-sub">' + sanitize(meta.name) + '</span></td>' + cells;
    tbody.appendChild(tr);
  }
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.supplier_ticker !== b.supplier_ticker) return a.supplier_ticker.localeCompare(b.supplier_ticker);
    const ga = { A: 0, B: 1, C: 2, D: 3 }[a.grade] ?? 9;
    const gb = { A: 0, B: 1, C: 2, D: 3 }[b.grade] ?? 9;
    if (ga !== gb) return ga - gb;
    return (b.est_revenue_twd_mn || 0) - (a.est_revenue_twd_mn || 0);
  });
  for (const r of sorted) {
    const meta = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888', flag: '🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    const localRev = r.est_revenue_local_mn != null ? formatLocalMn(r.est_revenue_local_mn, r.currency) : '';
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + r.supplier_ticker + ' ' + sanitize(meta.name) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize(r.dc_project || '—') + '</td>',
      '<td>' + sanitize(r.dc_operator || '—') + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + (r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—') + (localRev ? '<br><small style="opacity:0.7">' + localRev + '</small>' : '') + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_url || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows); renderMap(rows); renderMatrix(rows); renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.supplier) {
        state.filters.supplier = btn.dataset.supplier;
        document.querySelectorAll('[data-supplier]').forEach(b => b.classList.toggle('active', b === btn));
      } else if (btn.dataset.grade) {
        state.filters.grade = btn.dataset.grade;
        document.querySelectorAll('[data-grade]').forEach(b => b.classList.toggle('active', b === btn));
      }
      renderAll();
    });
  });
  const input = document.getElementById('search-input');
  if (input) input.addEventListener('input', e => { state.search = e.target.value; renderAll(); });
}

function wireTheme() {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? '' : 'light';
    if (cur) document.documentElement.setAttribute('data-theme', cur);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', cur);
  });
}

document.addEventListener('DOMContentLoaded', () => { initMap(); wireFilters(); wireTheme(); renderAll(); });
