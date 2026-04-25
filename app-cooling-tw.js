/* G04 Phase 3 — Taiwan Supply Chain / Cooling Line
 * Reverse index of AVC 3017 (奇鋐), Auras 3324 (雙鴻), Sunon 2421 (建準)
 * Data generated 2026-04-26 · see _research/phase3/cooling-tw.jsonl (68 records)
 *
 * IMPORTANT — Disclosure framework:
 *   Cooling vendor 揭露差異：cold plate / manifold 廠（AVC、Auras）採液冷占比公司
 *   aggregate；fan 廠（Sunon）公司不分項揭露 AI server fan 比例。所有 shipment-type
 *   categories (cold_plate / cdu / heatsink / vapor_chamber / fan / manifold / 
 *   quick_connect / hvac / coolant) 的 est_revenue_twd_mn 多為 null。
 *   Stat 3「2025E AI Cooling Revenue (Aggregate, est.)」採 per-supplier hardcoded：
 *     AVC 3017   : NT$3.91 千億  — 液冷占比 28% × 全年 1,396 億 (Grade C consensus)
 *     Auras 3324 : NT$0.79 千億 — 液冷占比 34% × 全年 232.76 億 (Grade A 算出)
 *     Sunon 2421 : NT$0.40 千億 — AI server fan 全年估 (Grade B 法說會數推算)
 *   Total ≈ NT$510 億 (NT$5.10 千億)。methodology section in cooling-tw.html 揭露完整算法。
 *   注意：台達電 2308 CDU 已在 power-tw 收錄，本頁不重複收。
 */

/* ====== DATA (inline; 68 records) ====== */
const DATA = [
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "aggregate-all-2025",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5710/9374326",
    "source_date": "2026-01",
    "est_revenue_twd_mn": 139639,
    "verified_date": "2026-04-25",
    "notes": "2025 全年合併營收 NT$1,396.39 億，YoY +94.59%，首次突破千億。毛利 NT$360 億（毛利率 25.8%），稅後淨利 NT$191.9 億，EPS 49.17 元（掛牌歷史新高）。A 級：經濟日報報導 + 公司公告。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "Q3-2025-earnings",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://mopsov.twse.com.tw/nas/STR/301720251112M001.pdf",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": 38940,
    "verified_date": "2026-04-25",
    "notes": "Q3 2025 營收 389.4 億（QoQ +31.6%, YoY +104.2%），毛利率 26.1%（季增 1.7ppts），EPS 13.67 元（季增 32.72%）。MOPS 法說會簡報揭露（A 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "2026Q1-trailing",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://technews.tw/2026/04/07/avc-3017-202603-financial-report/",
    "source_date": "2026-04",
    "est_revenue_twd_mn": 49037,
    "verified_date": "2026-04-25",
    "notes": "2026 Q1 累計營收 490.37 億，YoY +110%。3 月月營收 180.17 億（MoM +28.5%, YoY +111.72%，歷史單月新高）。TechNews 財報報導（A 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "NVIDIA-GB200-GB300-NVL72",
    "dc_operator": "NVIDIA-hyperscaler-aggregate",
    "grade": "B",
    "source_url": "https://vocus.cc/article/6760e08dfd897800011ad609",
    "source_date": "2025-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 與 CoolerMaster 為 NVIDIA GB200/GB300 cold plate 唯二認證供應商，各佔約 50% 份額。NVIDIA NVLink Switch Tray 估計 AVC 獨佔 100%。Cold plate gross margin ~40%，高於公司整體毛利率。B 級：多家券商共識交叉驗證。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "NVIDIA-GB300-upgrade",
    "dc_operator": "NVIDIA-CSP",
    "grade": "B",
    "source_url": "https://vocus.cc/article/68b99603fd89780001b53007",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "GB300 vs GB200 cold plate 用量增加 50%，含價值量提升約 25%。AVC Q3 2025 開始 GB300 出貨。Fubon/KGI 研究報告交叉確認（B 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "aggregate-liquid-cooling-2025",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://vocus.cc/article/68e1257bfd897800017e1e96",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": 39100,
    "verified_date": "2026-04-25",
    "notes": "業界共識估計 2025 年液冷占比 ~28%（2023 <2%，2024 ~7%），換算約 NT$391 億。公司未官方揭露細分占比。Fubon 另估 ~NT$200 億（可能僅計 cold plate+manifold 子集）。C 級：多家法人共識但無一手驗證。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Vietnam-V7V8-cold-plate-expansion",
    "dc_operator": "AVC-internal",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5612/9376909",
    "source_date": "2026-01",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "董事長沈慶行官方揭露：2026 年末 cold plate 月產能從 20 萬組擴至 100 萬組（5x），manifold 從 1,000 擴至 7,000 組/月，chassis 從 40 萬擴至 60 萬。越南 V7/V8 廠為主力，2026 H1 陸續量產。A 級：董事長法說會公開聲明。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Vietnam-total-investment",
    "dc_operator": "AVC-internal",
    "grade": "A",
    "source_url": "https://blog.fugle.tw/post/earnings-call-3017-2025-05-20",
    "source_date": "2025-05",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "越南工廠總投資計畫 NT$200 億，第三期（V5-V8）2024 Q4 動工，2025-2026 中陸續完工量產。V5/V6 機箱；V7/V8 液冷模組。2026 年底目標越南 12 座廠。富果法說備忘錄（來自法說會揭露，A 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "capex-2026-plan",
    "dc_operator": "AVC-internal",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5612/9455322",
    "source_date": "2026-01",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "2026 年 capex 官方揭露 >NT$150 億（2027 預計 ~170 億）。主要用於越南液冷模組、氣冷、機殼擴產。規模護城河策略核心。A 級：經濟日報 + 法說揭露。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "cdu",
    "dc_project": "CDU-sidecar-validation",
    "dc_operator": "aggregate-hyperscaler",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/post/earnings-call-3017-2025-05-20",
    "source_date": "2025-05",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC CDU sidecar 系統截至 2025 Q2 仍在客戶驗證階段（Customer validation），尚未大量量產出貨。包含 Rack Manifold、Pump、BNC、Fan Wall 等模組。台達電（2308）為 sidecar CDU 現有市場主導者。B 級：法說備忘錄。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "vapor_chamber",
    "dc_project": "3DVC-HGX-H100-H200",
    "dc_operator": "aggregate-server-OEM",
    "grade": "B",
    "source_url": "https://vocus.cc/article/6760e08dfd897800011ad609",
    "source_date": "2025-H1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 與 CoolerMaster 為 HGX H100/H200 3DVC（vapor chamber heatsink）雙寡頭供應商。2024 年出貨目標 300 萬組，2025 年目標 300-400 萬組。GB200/GB300 NVL72 1U 設計無法使用 3DVC，液冷取代為必然趨勢。B 級：多家研究報告。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "AWS-Trainium-ASIC-cooling",
    "dc_operator": "Amazon Web Services",
    "grade": "C",
    "source_url": "https://vocus.cc/article/69b76913fd897800010ad72e",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 預期在 AWS Trainium 熱管理及機箱解決方案取得 >50% 份額。ASIC 客製化壁壘高，設計贏單進行中。AWS Trainium3 下一代需液冷（>1kW 功耗）。C 級：多媒體報導交叉，無公司官方確認。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "Google-TPU-V8-cold-plate",
    "dc_operator": "Google",
    "grade": "C",
    "source_url": "https://vocus.cc/article/69b76913fd897800010ad72e",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 預計 Q3 2026 開始供應 Google TPU V8 水冷板，初始份額 40-45%，估計 2026 年貢獻約 NT$100 億收入。C 級：單一分析師報告，無公司官方確認。D 級元素：Bull 100億/Base 70億/Bear 30億（依量產進度）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "Microsoft-Meta-cold-plate-chassis",
    "dc_operator": "Microsoft / Meta",
    "grade": "C",
    "source_url": "https://vocus.cc/article/692a845bfd89780001efefac",
    "source_date": "2025-H1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 供應鏈涵蓋 Microsoft Azure 及 Meta（CSP 四大之二）的 cold plate、manifold 及 chassis。公司未官方揭露客戶比例。此為多媒體交叉推算（C 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "market_share",
    "dc_project": "liquid-cooling-penetration-2025",
    "dc_operator": "industry-aggregate",
    "grade": "B",
    "source_url": "https://www.trendforce.com/presscenter/news/20250821-12682.html",
    "source_date": "2025-08",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "TrendForce：2025 年 AI DC 液冷滲透率超過 33%（2024 年為 14%），2026 年預計達 76%。GB200/GB300 NVL72 每 rack TDP 130-140kW 超過氣冷極限，驅動液冷必選。AVC 列為主要 cold plate 供應商之一。B 級：TrendForce 研究報告。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "market_share",
    "dc_project": "cold-plate-competitive-landscape",
    "dc_operator": "industry-aggregate",
    "grade": "B",
    "source_url": "https://www.trendforce.com/presscenter/news/20250821-12682.html",
    "source_date": "2025-08",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "TrendForce：Cold plate 主要供應商：CoolerMaster、AVC、BOYD、Auras（雙鴻）。三家台廠（AVC、CoolerMaster、Auras）已在東南亞擴建液冷產能以滿足美國 CSP 需求。AVC + CoolerMaster 為現有雙寡頭。B 級。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "Goldman-Sachs-AVC-coverage",
    "dc_operator": "Goldman Sachs",
    "grade": "B",
    "source_url": "https://vocus.cc/article/68252bbffd89780001c72d85",
    "source_date": "2025-Q2",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Goldman Sachs 買進評等，12 個月目標價 NT$772-779，基於 18.5x 2026E P/E。主要 driver：AI 伺服器液冷滲透率提升、Q1 2025 operating income 超預期、Q2 2025 液冷營收加速成長。B 級：GS 報告摘要（透過媒體揭露）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "Daiwa-AVC-coverage-Oct2025",
    "dc_operator": "Daiwa Capital",
    "grade": "B",
    "source_url": "https://wantrich.chinatimes.com/news/20251028900400-420101",
    "source_date": "2025-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Daiwa 買進，目標價升至 NT$1,840（+40%），2025E EPS 48.02，2026E EPS 65.11，2025-2027 EPS CAGR 28.5%。視 AVC 為 2026 液冷最大受惠者，越南廠產能 YoY +50%。B 級：工商時報報導 Daiwa 報告摘要。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "US-broker-upgrade-2026",
    "dc_operator": "US broker (unnamed)",
    "grade": "B",
    "source_url": "https://cdnfinance.technews.tw/2026/03/13/ai-server-liquid-cooling-avc/",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "美系券商 Mar 2026 上修目標價，2025E EPS 86.2 元，2026E EPS 112.5 元，基於 20x 2026E P/E。TAM 持續擴大，液冷應用延伸至 ASIC 晶片、電源模組、次世代網通設備。B 級。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "US-broker-Apr2026-upgrade",
    "dc_operator": "US broker (unnamed)",
    "grade": "B",
    "source_url": "https://cdnfinance.technews.tw/2026/04/24/avc-ai-server-cooling/",
    "source_date": "2026-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "美系券商 Apr 2026 再度上修：2026E EPS 99.2，2027E EPS 131，2028E EPS 162，基於 27x 2027 P/E。Growth driver：Nvidia Rubin/LPU/CPX、Amazon Trainium、Google TPU。B 級。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "supply-chain-moat-one-stop-shop",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://vocus.cc/article/692a845bfd89780001efefac",
    "source_date": "2025-H2",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 競爭壁壘：一站式整合（chassis + cold plate + manifold + QD via Fositek + CDU），客戶只需一個 vendor 管理 80% 熱管理組件。子公司富世達（6805）提供 NVQD 快拆接頭，與 AVC cold plate 捆綁銷售，形成生態系黏性。B 級：分析師獨立評估。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "MCL-MLCP-tech-risk-2027",
    "dc_operator": "NVIDIA-roadmap",
    "grade": "B",
    "source_url": "https://vocus.cc/article/68b99603fd89780001b53007",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Micro-Channel Lid (MCL) / MLCP 可能 2027 後替代傳統 cold plate，JP Morgan 認為 Rubin 雙晶片版本（2026 H2）可能改採 MLCP；KGI 要求 AVC 2026 前完成 MLCP 認證。AVC 董事長公開否定 MCL 可行性，已開發 Diffusion Bonding 應對。B 級：多個分析師交叉。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "China-factory-footprint",
    "dc_operator": "AVC-internal",
    "grade": "B",
    "source_url": "https://en.wikipedia.org/wiki/Asia_Vital_Components",
    "source_date": "2025",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AVC 中國廠分布：Shenzhen、Dongguan、Chengdu、Wuhan（4 城市，5 廠），現有 cold plate 月產能約 5 萬組（2024 底）。中長期定位逐步降低中國比重，越南為主力擴產。Wikipedia + 法說資料交叉（B 級）。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "NVIDIA-Stargate-Rubin-cold-plate-2027-estimate",
    "dc_operator": "Stargate / NVIDIA",
    "grade": "D",
    "source_url": "https://vocus.cc/article/69b76913fd897800010ad72e",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "D 級推算：NVIDIA Rubin/Stargate（2026 H2 量產）cold plate 暴險估算。Bull：50% 份額 + MCCP 認證成功 + 50K rack/year → ~NT$80-100 億/年（2027）。Base：40% 份額 + 30K rack/year → ~NT$40-60 億（2027）。Bear：MCL 取代 + 份額 25% + 延遲 → ~NT$10-20 億（2027）。AVC Rubin 設計贏單仍在認證申請中，無官方確認。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3017",
    "supplier_name": "Asia Vital Components / 奇鋐",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "revenue-segment-breakdown-2025",
    "dc_operator": "AVC-internal",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5710/9374326",
    "source_date": "2026-01",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "2025 年業務結構：散熱產品 57%、機箱 18%、系統周邊 16%、子公司富世達 9%。伺服器應用佔比 ~52%。Q1 2025 細分：散熱 NT$137.9 億（58.1%）、機箱 36.3 億（15.6%）、系統 36.6 億（15.7%）、富世達 22.5 億（9.7%）。A 級：公司財報揭露。",
    "agent": "agent-avc-3017"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "Full Year 2025 Audited Results",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/11074/9357202",
    "source_date": "2026-03",
    "est_revenue_twd_mn": 23276,
    "verified_date": "2026-04-25",
    "notes": "2025 FY 合併營收 NT$23,276 百萬，YoY +47.5%；毛利率 27.38%；EPS 28.26 元（歷史新高）；稅後淨利 25.72 億，+35.9%。Q4 server 占 72%，liquid cooling 占 server 的 51%，氣冷 21%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "2025 FY Liquid Cooling Revenue Mix",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://blog.fugle.tw/post/earnings-call-3324-1",
    "source_date": "2026-03",
    "est_revenue_twd_mn": 7914,
    "verified_date": "2026-04-25",
    "notes": "2025 全年液冷占比 34%（2024 年為 12%，2023 年為 2%）；NT$232.76 億 × 34% ≈ NT$79.1 億液冷收入。Q4 液冷占 server 的 51%，Q1 2026 已達 56%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "2026 Annual Revenue Guidance",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5612/9140567",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "公司 guidance：2026 全年成長 50%+ YoY；server 占 72% 總收入；liquid cooling 占 55%+；CDU 將成主流（1:1 架構）；Vera Rubin Group A 4 家供應商候選，公司預計入選。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "2026 Q1 Monthly Revenue",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://statementdog.com/analysis/3324/monthly-revenue-growth-rate",
    "source_date": "2026-04",
    "est_revenue_twd_mn": 8550,
    "verified_date": "2026-04-25",
    "notes": "2026 Q1 累計營收 NT$85.50 億，YoY +93.7%。月份拆分：Jan 30.42（+121.6%）、Feb 21.78（+67.0%）、Mar 33.29（+91.7%）。驅動：泰國新產能 + GB300 全面放量 + ASIC 客戶持續增量。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "NVIDIA GB200/GB300 Cold Plate Supply",
    "dc_operator": "NVIDIA platform",
    "grade": "B",
    "source_url": "https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/auras-technology_3324-tt_20250908.pdf",
    "source_date": "2025-09",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "KGI 估 Auras GB300 cold plate 市占 25%；GB200 每計算 tray 2 塊大冷板，GB300 每 GPU/CPU 獨立小冷板。microchannel stainless steel 設計。NVIDIA RVL 認證已取得。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "manifold",
    "dc_project": "Rack Manifold GB200/GB300 NVL72",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://www.investing.com/news/analyst-ratings/auras-technology-stock-initiated-with-buy-rating-by-ubs-on-ai-cooling-growth-93CH-4392952",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "UBS 估 2025 Rack Manifold 市占 ~27%，預測 2030 年維持 19-22%+；manifold TAM 預計達 US$748M（2030F）；UBS target price NT$1,380，Buy。一台 NVL72 需 300+ quick connect 接頭，每 rack 1 pair Rack Manifold。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "cdu",
    "dc_project": "In-Row L2L CDU 1.6MW AI Data Center",
    "dc_operator": "undisclosed CSP",
    "grade": "B",
    "source_url": "https://statementdog.com/news/14745",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "1.6MW L2L（Liquid to Liquid）CDU，支援兆瓦級計算集群，2026 Q1 小量出貨開始（100-150 units/月，台灣），Q2 擴大。已有一家具名 CSP 客戶（未公開名稱）。L2A CDU（20U 30kW）已量產。朝向 1:1（一 CDU 配一機架）架構。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "CSP ASIC Custom Cooling Contracts Q3 2025",
    "dc_operator": "AWS + Meta (inferred)",
    "grade": "B",
    "source_url": "https://vocus.cc/article/6948c3a0fd89780001fc82b3",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Q3 2025 新取得兩家主要 US CSP 的 ASIC custom cooling 訂單（法說會提及但未具名）。多方 B 級分析來源指向 AWS（Trainium/Inferentia 系列）與 Meta。ASIC custom 毛利率最高，是驅動 2026F 毛利率至 31.1% 的核心（Goldman Sachs 假設）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "Top 5 US CSP Manifold and Cold Plate Supply",
    "dc_operator": "Top 5 US CSPs aggregate",
    "grade": "B",
    "source_url": "https://www.investing.com/news/analyst-ratings/auras-technology-stock-initiated-with-buy-rating-by-ubs-on-ai-cooling-growth-93CH-4392952",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "UBS 報告明確指出 Auras 供應 manifolds 和 cold plates 給「a major US server brand and top 5 US cloud service providers」。CSP 佔 server 業務約 70%（法說會 Q4 2025 數據）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "Oracle Supermicro HPE Liquid Cooling",
    "dc_operator": "Oracle / Supermicro / HPE",
    "grade": "B",
    "source_url": "https://www.trendforce.com/presscenter/news/20250724-12653.html",
    "source_date": "2025-07",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "TrendForce 報告指 Auras 主要客戶包括 Oracle、Supermicro、HPE；近期開始向 Meta 出貨。Enterprise OEM 佔 server 業務約 30%（CSP 70% 的餘量）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "AMD SP7 CPU Cold Plate Computex 2025",
    "dc_operator": "AMD SP7 platform",
    "grade": "B",
    "source_url": "https://www.servethehome.com/auras-amd-sp7-liquid-cooling-cold-plate-for-600w-cpus-shown-at-computex-2025/",
    "source_date": "2025-06",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AMD SP7（下一代 EPYC）cold plate：120.1 × 100.6 × 22.3 mm，額定 600W at 1 LPM。Computex 2025 展示。同時展示 Intel Birch Stream-AP、NVIDIA GB200 NVL4、AMD MI325 冷板。AMD vapor chamber certification 已取得（2024）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Thailand Phase 2 Factory Expansion",
    "dc_operator": "Auras internal",
    "grade": "A",
    "source_url": "https://blog.fugle.tw/post/earnings-call-3324-1",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Thailand Phase 2 目標 2026 暑假量產。產品：Cold Plate（合計擴至 20 萬套+/月）、DIMM Cold Plate（3 萬 units/月）、Rack Manifold。目標 2026 年 China 50% / Thailand 30% / Mexico 20% 產能比例。無塵室生產為液冷品質必要條件。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Capex Plan 2025-2026",
    "dc_operator": "Auras internal",
    "grade": "C",
    "source_url": "https://vocus.cc/article/6948c3a0fd89780001fc82b3",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "多方分析來源估計 Capex：2025 NT$25-30 億（泰國 Phase 2 建廠、台灣總部、精密設備）；2026 NT$20-25 億（持續擴產、CDU 產線）。台灣總部新建 2025 Q3 完工目標，作為 R&D + CDU 高端製造中心。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "market_share",
    "dc_project": "AI Server Liquid Cooling Market Share 2025",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://stockanalysis.com/quote/tpex/3324/company/",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "市場估計（C 級，多方券商共識）：cold plate 市占 ~25%（KGI）、rack manifold 市占 ~27%（UBS）；PC thermal module 全球市占 ~25%。Vapor chamber 2024 年出貨 1,200 萬片，58% 為 gaming laptop/tablet。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "Goldman Sachs Buy Rating Feb 2026",
    "dc_operator": "Goldman Sachs",
    "grade": "B",
    "source_url": "https://wantrich.chinatimes.com/news/20260225900454-420101",
    "source_date": "2026-02",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Goldman Sachs 維持 Buy，目標價 NT$1,283；2025/2026/2027 EPS 估：27.37 / 56.20 / 71.65 元；毛利率估：28.6% / 31.1% / 31.4%。三大理由：1) rack-level AI server 帶動液冷滲透 2) CSP 直接採購比重上升 3) Cold plate + CDU 新品拉力。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "KGI Securities Research Sep 2025",
    "dc_operator": "KGI Securities",
    "grade": "B",
    "source_url": "https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/auras-technology_3324-tt_20250908.pdf",
    "source_date": "2025-09",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "KGI Sep 2025 report：2025F EPS NT$26.58（+25% YoY），2026F EPS NT$44.74（+68% YoY）。Server weighting 預計 2026F 達 64%（from 53% 2025F），liquid cooling weighting 50-60%（from 30% 2025F）。July-August 液冷業務成長近 35%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "vapor_chamber",
    "dc_project": "Vapor Chamber PC NB AI Server Air Cooling",
    "dc_operator": "aggregate PC/NB/GPU",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/2023-auras-technology-report/",
    "source_date": "2024-09",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "3D VC（3D Vapor Chamber）技術用於 AI server air cooling（H100 等）及 PC/NB 高階散熱；2024 全年 VC 出貨估 1,200 萬片（~58% gaming laptop/tablet）。AMD vapor chamber certification 2024 取得。PC 散熱氣冷 2026F 占比下降至 27%（from 2025 57% server 中的氣冷部分）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "joint_venture_history",
    "dc_project": "Liquid Cooling Development History Since 2012",
    "dc_operator": "Auras internal",
    "grade": "B",
    "source_url": "https://statementdog.com/news/14745",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "雙鴻自 2012 年開始布局液冷研發，超過 10 年積累。公司累積涵蓋 cold plate、manifold、CDU、quick connect 完整液冷供應能力。2023 為「液冷元年」，2024 液冷占比 12%，2025 達 34%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "quick_connect",
    "dc_project": "Quick Connect UQD/MQD Self-Manufacturing",
    "dc_operator": "aggregate AI server",
    "grade": "A",
    "source_url": "https://vocus.cc/article/67504ab6fd89780001c47df8",
    "source_date": "2024-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Q3 2024 法說會：雙鴻自製快接頭（UQD/MQD），市場採購 $30-50 USD/個，不對外銷售。一台 NVL72 公母頭合計超過 300 個。作為戰略物資以提升供應鏈可靠度和成本控制。NVL72 每 1 pair Rack Manifold 含 88 個快接母頭。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "2026F Product Mix Guidance Server 72%",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://money.udn.com/money/story/5612/9140567",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "2026F 全年 guidance（公司法說會）：Server 72%、PC 18%、VGA 9%、其他 1%；liquid cooling 超過 55%；CDU 為主要新增量。Q4 2025 已達 server 72%。2025 FY：Server 57%、PC 27%、VGA 14%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "Vera Rubin Cold Plate Supplier Candidate",
    "dc_operator": "NVIDIA Vera Rubin platform",
    "grade": "D",
    "source_url": "https://www.digitimes.com/news/a20260318PD231/nvidia-rubin-liquid-cooling-ai-server-launch.html",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "D 級推估。Digitimes 報導 NVIDIA Vera Rubin 將標準化 cold plate，GTC 點名 4 家供應商（AVC 確認，其餘 3 家資訊在付費牆後）。雙鴻法說會 2026-03 表示「預計進入 Group A 名單」但非 NVIDIA 官方確認。Bear：Auras 未入名 -> 喪失 Rubin 倍數 ASP 機會；Base：Auras 為 4 家之一 -> Rubin 時代 cold plate ASP 倍增（3-4kW/chip 熱功耗）；Bull：Auras 獲最大份額 -> 收入測算 NT$100 億+ 增量（2027F）。概率評估：Base 55%、Bear 25%、Bull 20%。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "market_share",
    "dc_project": "Competitive Position vs AVC 3017 vs Delta 2308",
    "dc_operator": "aggregate cooling market",
    "grade": "C",
    "source_url": "https://blog.growin.tv/thermal-management-stock/",
    "source_date": "2026-01",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "競合定位：雙鴻（液冷純度最高，cold plate + manifold 主力，CSP ASIC custom 差異化）vs 奇鋐（整合系統能力，TPU V8 40-45% share，3D VC 主導）vs 台達電（facility-level CDU 主導，非 IT white space）。雙鴻與台達電 CDU 業務分屬不同市場層級（In-Row vs Building）。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "3324",
    "supplier_name": "Auras Technology / 雙鴻",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "2026F Revenue Scenario Estimate D-grade",
    "dc_operator": "aggregate",
    "grade": "D",
    "source_url": "https://vocus.cc/article/699ef9eefd89780001e80d8f",
    "source_date": "2026-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "D 級：2026F 全年營收自行推算（A 級 guidance 50%+ + Q1 93.7% 基礎外推）。Bear：50% 成長 -> NT$349 億，液冷 55% -> NT$192 億液冷收入；Base：65% 成長 -> NT$384 億，液冷 58% -> NT$222 億；Bull：80% 成長 -> NT$419 億，液冷 60% -> NT$251 億。2026F EPS Bear/Base/Bull：44 / 56 / 70 元。主要差異變數：Vera Rubin 時程、ASIC 客戶放量節奏、Thailand Phase 2 良率。",
    "agent": "agent-auras-3324"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "all",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://statementdog.com/news/14945",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": 18678,
    "verified_date": "2026-04-25",
    "notes": "2025 全年合併營收 186.78 億 NTD，年增 27.7%。全年 EPS 7.94 元，年增 45%。Q4 EPS 2.29 元（年增 43%）。2024 全年營收 146.24 億 NTD。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "fan",
    "dc_project": "GB300 NVL72",
    "dc_operator": "NVIDIA / Hyperscaler ODMs",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/earnings-call-2421-2025-11-20/",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "GB300 NVL72 每機架需 ~257 顆 4cm 對轉風扇（144 顆計算層 + ~60 顆 NVLink Switch + ~50 顆 PSU）。每機架風扇總值 >USD 5,000，較 H100 世代 USD 2,200–2,300 提升逾 100%。GB300 自 2025 年 9 月開始放量。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "fan",
    "dc_project": "GB200 / GB300 RVL",
    "dc_operator": "NVIDIA",
    "grade": "A",
    "source_url": "https://statementdog.com/news/12730",
    "source_date": "2025-07-15",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "建準 2025 年 7 月正式列入 NVIDIA 認證供應商名單，通過 GB200 與 GB300 RVL（Reference Validation List）系列伺服器認證。為已公開確認的 A 級信源。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "AI server fan",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://vocus.cc/article/689694c3fd8978000143a534",
    "source_date": "2025-08-07",
    "est_revenue_twd_mn": 1105,
    "verified_date": "2026-04-25",
    "notes": "Q2 2025 AI Server 營收 11.05 億 NTD（佔整體 24.2%），年增 61%。ASIC：GPU 比例 = 8:2。伺服器業務總計 21.15 億（佔 46.4%），年增 45%。此為 Q2 2025 法說會數據。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "AI server fan",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://statementdog.com/news/14945",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": 1135,
    "verified_date": "2026-04-25",
    "notes": "Q3 2025 AI Server 營收 11.35 億 NTD（佔整體 23.5%）。伺服器總計 22.6 億（佔 46.8%）。AI server 內 ASIC 70% / GPU（NVIDIA）30%。Q3 毛利率 31.4%（歷史新高）、EPS 2.55 元（歷史新高）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "all",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/earnings-call-2421-2025-11-20/",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "公司 guidance：AI server 占總營收由 2024 年 20% 提升至 2026 年 30%+。2026 年液冷（水冷板 + CDU）開始貢獻，初期占比為個位數百分比。2026E EPS 法人共識約 10.8–10.95 元（年增 36–38%）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "market_share",
    "dc_project": "global cooling fan",
    "dc_operator": "multiple",
    "grade": "C",
    "source_url": "https://cmnews.com.tw/article/3545-a0959ad6-d8c8-11ef-8d1f-c24ab3995ee6",
    "source_date": "2025-01-15",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "建準為全球第二大散熱風扇製造商，全球市占約 20%。AI server fan 細分市場預估市占可達 35–40%（法人估算，C 級信源）。競爭對手排名：Delta（第一，~25–30%）、Nidec（第三，~15%）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "fan",
    "dc_project": "AI server dual-rotor",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://uanalyze.com.tw/articles/8244711183",
    "source_date": "2025-03-20",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "AI server 風扇從單轉子升級至對轉（counter-rotating dual-rotor），ASP 提升 70–80%。主流規格為 40mm × 40mm（4cm），48V 或 54V 高壓設計。效率提升 50%+。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Philippines Bataan factory",
    "dc_operator": "N/A",
    "grade": "A",
    "source_url": "https://www.sunon.com/eu/News.aspx?id=AC703DFB574E3C20",
    "source_date": "2024-02-21",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "菲律賓 Bataan Hermosa Ecozone Industrial Park 新廠，14 公頃。第一期 2025 年 8 月開幕，月產能 200 萬台（佔收入 ~10%）。第二期 2026 年底完工，2027 年投產，目標月產能 650–750 萬台（佔總產能 40–50%）。戰略目的：Off-China 供鏈去風險。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "customer_disclosure",
    "dc_project": "air cooling module",
    "dc_operator": "Dell / HP / Lenovo",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/earnings-call-2421-2025-08-07/",
    "source_date": "2025-08-07",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "Q2 2025 法說會簡報明確點名 Dell、HP、Lenovo 為氣冷散熱模組直接客戶。透過這些品牌廠的 AI server（由 Inventec、Quanta 等 ODM 製造）間接供貨給 Hyperscaler。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "cold_plate",
    "dc_project": "water cold plate CDU",
    "dc_operator": "non-Tier1 DC",
    "grade": "B",
    "source_url": "https://technews.tw/2025/09/30/sunon-ocp-2025/",
    "source_date": "2025-09-30",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "OCP Global Summit 2025（2025.10.13–16）展出液冷方案：Water Cold Plate（支援 Intel/AMD CPU，Suzhou 製造）、In-Rack CDU（L2L，4kW，2026H1 量產）、In-Row CDU（2026H2 量產）、Closed-Loop Module。初期客戶定位：非 Tier-1，礦機 / 中小資料中心為先。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "cdu",
    "dc_project": "In-Rack CDU / In-Row CDU",
    "dc_operator": "non-Tier1 DC",
    "grade": "B",
    "source_url": "https://www.prnewswire.com/apac/zh/news-releases/ocp-2025--302565589.html",
    "source_date": "2025-09-25",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "In-Rack CDU：Liquid-to-Liquid，單台 4kW（可疊至 16kW/rack），模組化，2026H1 取安規後量產。In-Row CDU：較大功率，2026H2 量產。2026 完整 Roadmap 涵蓋 >1000kW L2L CDU、150kW L2A CDU 等。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "financial_guidance",
    "dc_project": "all",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://statementdog.com/analysis/2421/monthly-revenue",
    "source_date": "2026-04-10",
    "est_revenue_twd_mn": 5019,
    "verified_date": "2026-04-25",
    "notes": "2026 Q1 合計營收 50.19 億 NTD（1 月 17.78 億 +36.5% YoY；2 月 13.23 億 +2.3% YoY；3 月 19.18 億 +22.5% YoY 歷史新高）。2026 Q1 年增 20.6%，季增 2.06%。AI 伺服器散熱需求持續爆發為主要動能。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "analyst_target",
    "dc_project": "all",
    "dc_operator": "N/A",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/2421.TW/analysis/",
    "source_date": "2026-01-15",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "法人共識：目標價 NTD 159–200（中位約 170）；評級 Buy（3 家 Buy, 0 家 Sell）。Morgan Stanley 維持 Neutral，目標價兩度調升至 NTD 175。2026E EPS 共識：10.8–10.95 元（年增 36–38%）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "fan",
    "dc_project": "Vera Rubin NVL144 / NVL576",
    "dc_operator": "Hyperscaler",
    "grade": "C",
    "source_url": "https://wantrich.chinatimes.com/news/20260304900004-420101",
    "source_date": "2026-03-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "NVIDIA Vera Rubin NVL144（2026H2 量產）機架冷卻液流量增加 100%，機櫃風量需求降低 ~80%（CFM）。Vera Rubin Ultra NVL576（2027+，600kW 功率級別）設計目標 100% 液冷，徹底無風扇。對 Sunon 氣冷業務構成 2027+ 結構性壓力。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "joint_venture_history",
    "dc_project": "AI server supply chain",
    "dc_operator": "ASIC Hyperscaler (inferred)",
    "grade": "D",
    "source_url": "https://vocus.cc/article/689694c3fd8978000143a534",
    "source_date": "2025-08-07",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "D 級推算：Sunon AI server 收入 ASIC 占 80%，終端 Hyperscaler 客戶推測為 Google TPU、Microsoft Azure AI、Amazon Trainium/Inferentia。透過鴻海（2317）/ 廣達（2382）/ 緯穎（6669）/ 英業達（2356）ODM 間接供貨。Bear NTD 30–35 億 / Base NTD 38–42 億 / Bull NTD 44–50 億（2025 ASIC AI server 營收估算）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "hvac",
    "dc_project": "EC fan HVAC data center",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://www.sunon.com/News.aspx?c=p&id=9EC2C62FB656C835",
    "source_date": "2025-06-01",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "SUNON EC 能效風扇系列整合 DC 馬達 + 速控功能，較一般 AC 馬達省電 80%+，支援 100V–480V。用於資料中心 HVAC、冷卻塔、工業設備。受益於 AI DC 電力密度增加帶來的 HVAC 更換需求（此業務在財報中未單獨揭露規模）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "capacity_expansion",
    "dc_project": "Suzhou liquid cooling line",
    "dc_operator": "N/A",
    "grade": "B",
    "source_url": "https://cmnews.com.tw/article/snowbaby-a55b4034-be03-11f0-ad4e-7753b9cda11f",
    "source_date": "2025-10-15",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "蘇州廠新設水冷板量產產線。台北 R&D 中心負責設計研發。2025Q4 完成量產準備，2026Q1 正式量產水冷板（Cold Plate）。初期目標非 Tier-1 客戶（礦機、電源模組廠等）。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "AI_DC_revenue_share",
    "dc_project": "all server & networking",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/earnings-call-2421-2025-11-20/",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "2025 9M 業務結構：網通 & 伺服器 58.0%（年增 43%）、IT/筆電 15.4%（+10%）、工業醫療 9.4%（+37%）、車用 9.0%（+6%）、通路 4.8%（+11%）、家電 3.0%（+6%）。AI server 比重在伺服器業務中約佔 50%，即整體佔比約 23–25%。",
    "agent": "agent-sunon-2421"
  },
  {
    "supplier_ticker": "2421",
    "supplier_name": "Sunonwealth / 建準",
    "line": "cooling",
    "category": "fan",
    "dc_project": "GB300 NVL72 fan value",
    "dc_operator": "NVIDIA GB300 ecosystem",
    "grade": "B",
    "source_url": "https://blog.fugle.tw/earnings-call-2421-2025-11-20/",
    "source_date": "2025-11-20",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-25",
    "notes": "單台 GB300 NVL72 機架風扇總值超過 USD 5,000（vs H100 世代 USD 2,200–2,300，年增 >100%）。從 H200 到 GB300，摩根士丹利估算 GB300 機架散熱組件價值較 GB200 提升約 20%；後續 Vera Rubin 機架散熱價值再提升約 17%。",
    "agent": "agent-sunon-2421"
  }
];

/* ====== Per-supplier 2025E AI cooling revenue (NT$ 百萬 mn) ====== */
const AI_COOLING_REVENUE_2025_MN = {
  '3017': 39100, // AVC: 液冷 28% × 全年 1,396 億 (Grade C)
  '3324':  7914, // Auras: 液冷 34% × 全年 232.76 億 (Grade A)
  '2421':  4000, // Sunon: AI server fan 全年估 (Grade B)
};

/* ====== DC coordinate registry ======
 * Cooling-line factories + named DC clients (sparse; cooling vendor 多為 aggregate-only).
 */
const DC_COORDS = [
  // AVC 奇鋐 factories
  { match: /vietnam.*v[5-8]|越南.*[V五-八]廠|越南.*液冷|avc.*越南|vietnam.*cold.plate/i, lat: 11.0686, lng: 106.6736, label: 'AVC 越南 V5-V8 廠' },
  { match: /shenzhen.*avc|avc.*shenzhen|奇鋐.*深圳/i,                                    lat: 22.5429, lng: 114.0596, label: 'AVC 深圳廠' },
  { match: /dongguan.*avc|avc.*dongguan|奇鋐.*東莞/i,                                    lat: 23.0489, lng: 113.7447, label: 'AVC 東莞廠' },
  { match: /chengdu.*avc|avc.*chengdu|奇鋐.*成都/i,                                      lat: 30.5728, lng: 104.0668, label: 'AVC 成都廠' },
  { match: /wuhan.*avc|avc.*wuhan|奇鋐.*武漢/i,                                          lat: 30.5928, lng: 114.3055, label: 'AVC 武漢廠' },
  // Auras 雙鴻 factories
  { match: /thailand.*phase|泰國.*phase|auras.*thailand|雙鴻.*泰國/i,                    lat: 13.7563, lng: 100.5018, label: 'Auras 泰國廠 (Phase 1+2)' },
  { match: /guangzhou.*auras|auras.*guangzhou|雙鴻.*廣州|廣州.*雙鴻/i,                   lat: 23.1291, lng: 113.2644, label: 'Auras 廣州廠' },
  { match: /chongqing.*auras|auras.*chongqing|雙鴻.*重慶/i,                              lat: 29.5630, lng: 106.5516, label: 'Auras 重慶廠' },
  { match: /auras.*taiwan.*hq|新北.*auras|雙鴻.*新北|雙鴻.*總部|auras.*new taipei/i,     lat: 25.0136, lng: 121.4644, label: 'Auras 台灣總部 / 新北' },
  { match: /mexico.*auras|auras.*mexico|雙鴻.*墨西哥/i,                                  lat: 25.6866, lng: -100.3161, label: 'Auras 墨西哥廠 (規劃)' },
  // Sunon 建準 factories
  { match: /kaohsiung.*sunon|sunon.*kaohsiung|建準.*高雄|高雄.*建準/i,                   lat: 22.6273, lng: 120.3014, label: 'Sunon 高雄廠' },
  { match: /vietnam.*sunon|sunon.*vietnam|建準.*越南/i,                                  lat: 21.0285, lng: 105.8542, label: 'Sunon 越南廠' },
  { match: /sunon.*china|建準.*中國|kunshan.*sunon|sunon.*kunshan/i,                     lat: 31.3859, lng: 120.9543, label: 'Sunon 中國昆山廠' },
  // Named DC overlaps (rare in cooling line)
  { match: /stargate abilene/i,                                                          lat: 32.4487, lng: -99.7331,  label: 'Stargate Abilene, TX' },
  { match: /coreweave/i,                                                                 lat: 40.7589, lng: -73.9851,  label: 'CoreWeave (distributed HQ)' },
];

function lookupCoord(dcProject) {
  if (!dcProject) return null;
  for (const e of DC_COORDS) {
    if (e.match.test(dcProject)) return e;
  }
  return null;
}

/* ====== State ====== */
const state = {
  filters: { supplier: 'all', grade: 'all' },
  search: '',
};

/* ====== Helpers ====== */
const SUPPLIER_META = {
  '3017': { name: '奇鋐', nameEn: 'AVC',    color: '#3b82f6' },
  '3324': { name: '雙鴻', nameEn: 'Auras',  color: '#8b5cf6' },
  '2421': { name: '建準', nameEn: 'Sunon',  color: '#10b981' },
};

const GRADE_COLORS = {
  A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444',
};

function formatNtdMn(n) {
  if (n == null) return '—';
  if (n >= 1_000_000) return 'NT$' + (n / 1_000_000).toFixed(2) + '兆';
  if (n >= 100_000)   return 'NT$' + (n / 10_000).toFixed(0) + '千億';
  if (n >= 100)       return 'NT$' + (n / 100).toFixed(1) + '億';
  return 'NT$' + n.toLocaleString() + 'M';
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
  /aggregate/i, /合併營收/, /事業群營收/, /營收占比/, /營收結構/, /\(法人估\)/, /overall/i,
  /累計/, /總訂單/, /新增.*訂單/, /全系列/, /市占/, /新廠擴產/,
  /annual results/i, /full year/i, /monthly revenue/i, /quarterly/i,
  /market share/i, /penetration/i, /landscape/i, /^all$/i,
];

function isShipmentRow(r) {
  if (AGGREGATE_CATEGORIES.has(r.category)) return false;
  if (r.dc_project && AGGREGATE_DC_PATTERNS.some(p => p.test(r.dc_project))) return false;
  return true;
}

/* ====== Filtering ====== */
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

/* ====== Stats ====== */
function renderStats(rows) {
  const suppliers = new Set(rows.map(r => r.supplier_ticker));
  const shipmentRows = rows.filter(isShipmentRow);
  const dcs = new Set(shipmentRows.map(r => r.dc_project).filter(Boolean));

  // Stat 3: COOLING-LINE per-supplier hardcoded AI cooling revenue
  let aggregateRevenue = 0;
  for (const t of suppliers) {
    aggregateRevenue += AI_COOLING_REVENUE_2025_MN[t] || 0;
  }

  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;

  document.getElementById('stat-suppliers').textContent = suppliers.size;
  document.getElementById('stat-dc-projects').textContent = dcs.size;
  document.getElementById('stat-revenue').textContent = formatNtdMn(aggregateRevenue);
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

/* ====== Map ====== */
let mapInstance = null;
const markerLayer = [];

function initMap() {
  mapInstance = L.map('map', { worldCopyJump: true }).setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(mapInstance);
}

function renderMap(rows) {
  markerLayer.forEach(m => m.remove());
  markerLayer.length = 0;

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
    const m = L.circleMarker([coord.lat, coord.lng], {
      radius, color, weight: 2, fillColor: color, fillOpacity: 0.45,
    });

    const html = [
      '<div class="popup-tw">',
      '<div class="popup-tw-header">' + sanitize(coord.label) + '</div>',
      '<div class="popup-tw-body">',
      gRows.map(r => {
        const sup = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888' };
        const rev = r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—';
        const grade = r.grade || '—';
        const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
        return (
          '<div class="popup-tw-row">' +
          '<span class="popup-tw-supplier" style="color:' + sup.color + '">' + sanitize(r.supplier_ticker) + ' ' + sanitize(sup.name) + '</span>' +
          '<span class="grade-badge grade-' + grade + '">' + grade + '</span>' +
          '<span class="popup-tw-cat">' + sanitize(r.category) + '</span>' +
          '<span class="popup-tw-rev">' + rev + '</span>' +
          (url ? '<a class="popup-tw-link" href="' + sanitize(url) + '" target="_blank" rel="noopener">source</a>' : '') +
          '</div>'
        );
      }).join(''),
      '</div>',
      '</div>'
    ].join('');
    m.bindPopup(html, { maxWidth: 420 });
    m.addTo(mapInstance);
    markerLayer.push(m);
  }
}

/* ====== Matrix ====== */
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
  thead.innerHTML = '';
  tbody.innerHTML = '';

  const headRow = document.createElement('tr');
  headRow.innerHTML = '<th class="matrix-supplier-col">Supplier</th>' + topDcs.map(d => '<th class="matrix-dc-col" title="' + sanitize(d) + '">' + sanitize(d.length > 22 ? d.slice(0, 20) + '…' : d) + '</th>').join('');
  thead.appendChild(headRow);

  for (const s of suppliers) {
    const meta = SUPPLIER_META[s] || { name: s, color: '#888' };
    const tr = document.createElement('tr');
    const cells = topDcs.map(d => {
      const c = cell.get(s + '|' + d);
      if (!c) return '<td class="matrix-cell matrix-empty">·</td>';
      const bestGrade = Array.from(c.grades).sort()[0] || '—';
      const revText = c.rev ? formatNtdMn(c.rev) : '#' + c.count;
      return '<td class="matrix-cell"><span class="grade-badge grade-' + bestGrade + '">' + bestGrade + '</span> ' + sanitize(revText) + '</td>';
    }).join('');
    tr.innerHTML = '<td class="matrix-supplier-cell" style="border-left: 3px solid ' + meta.color + '">' + s + '<br><span class="matrix-supplier-sub">' + sanitize(meta.name) + '</span></td>' + cells;
    tbody.appendChild(tr);
  }
}

/* ====== Flat table ====== */
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
    const meta = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + r.supplier_ticker + ' ' + sanitize(meta.name) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize(r.dc_project || '—') + '</td>',
      '<td>' + sanitize(r.dc_operator || '—') + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + (r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—') + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_url || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderMap(rows);
  renderMatrix(rows);
  renderFlatTable(rows);
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

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  wireFilters();
  wireTheme();
  renderAll();
});
