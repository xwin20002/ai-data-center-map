/* G04 Phase 3 — Taiwan Supply Chain / Rack Line
 * Reverse index of Foxconn (2317), Quanta (2382), Wiwynn (6669), Inventec (2356)
 * Data generated 2026-04-25 · see _research/phase3/rack-tw.jsonl (85 records)
 *
 * IMPORTANT — Disclosure framework:
 *   Rack ODM 公司皆採「公司整體 / 雲端網路產品 / AI 伺服器」aggregate 揭露，
 *   無法逐一對應到單一 DC。所有 shipment 類別 (rack_assembly / l6_server / l10_server /
 *   l11_rack / backend_network) 的 est_revenue_twd_mn 一律為 null。
 *   Stat 3「2025E AI Server Revenue (Aggregate, est.)」採以下方式計算：
 *     Foxconn 2317  : NT$1.0 兆  — 2025 前三季法說會 AI server 營收破兆 (Grade A)
 *     Quanta 2382   : NT$1.0 兆  — 2025 全年法說會 AI server 略超 1 兆 (Grade A)
 *     Wiwynn 6669   : NT$0.475 兆 — 2025 NT$950.66B × AI 占比 ~50% (官方占比過半 estimate)
 *     Inventec 2356 : NT$0.20 兆  — 2025E ~NT$200B = 33% of total (Grade C self-derived)
 *   Total ≈ NT$2.675 兆。methodology section in rack-tw.html 完整揭露此計算基礎。
 */

/* ====== DATA (inline; 85 records) ====== */
const DATA = [
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "集團整體 AI server 營收（2025 前三季）",
    "dc_operator": "unspecified (CSP + hyperscaler mix)",
    "grade": "A",
    "source_url": "https://finance.technews.tw/2025/11/12/ff-ai-server-q325",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": 1000000,
    "verified_date": "2026-04-24",
    "notes": "2025 前三季 AI server 營收破兆元（>NT$1,000,000 mn）。法說會（2025/11/12）劉揚偉揭露。雲端網路產品 Q3 占集團營收 42%（vs 2024 Q3 為 32%）。此為 aggregate，涵蓋整機櫃 + L10 + L6 + 網通，無法對應單一 DC。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "集團整體 2025 年度 + 雲端網路占比",
    "dc_operator": "unspecified",
    "grade": "A",
    "source_url": "https://udn.com/news/story/7253/9245814",
    "source_date": "2025-12",
    "est_revenue_twd_mn": 8100000,
    "verified_date": "2026-04-24",
    "notes": "2025 全年合併營收 8.1 兆 NT$（年增 18%，台灣上市公司紀錄）；雲端網路產品 Q4 單季破 1 兆元，全年占比約 40%。AI server 全年破兆是確定事實但全年度確切數字未單獨揭露。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "market_share",
    "dc_project": "NVIDIA GB200 NVL72 全球 rack 出貨市占",
    "dc_operator": "NVIDIA ecosystem (Oracle/CoreWeave/Meta/AWS 等)",
    "grade": "B",
    "source_url": "https://www.tweaktown.com/news/105151/nvidia-gb200-nvl72-ai-server-shipments-1500-units-in-april-compared-to-1000-q1-2025/index.html",
    "source_date": "2025-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2025/04 單月 Foxconn 出 1,000 櫃、Quanta 300-400、Wistron 150，估 Foxconn 市占 40%，Quanta 30%。Tier-1 媒體整合 TrendForce 數據，屬 B 級。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "GB200 + GB300 NVL72 整櫃出貨（Q4 2025 月產能）",
    "dc_operator": "multiple (FII 揭露)",
    "grade": "B",
    "source_url": "https://www.semiconsam.com/p/fii-foxconn-industrial-internet-expert",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "FII（鴻海工業互聯網 A 股子公司）expert call 揭露：2025 Q4 GB200/GB300 各佔約 50%，月產能 1,700-1,800 櫃；2026/5-6 月產能高峰估 8,000-10,000 櫃/月。單櫃報價 NT$100M+，以 1,800 櫃/月計算年化營收可達數千億 NT$。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "AI 機櫃 Q3 2025 季增",
    "dc_operator": "multiple",
    "grade": "A",
    "source_url": "https://finance.technews.tw/2025/11/12/ff-ai-server-q325",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2025 Q3 AI rack 出貨季增 300%，Q4 預估再高雙位數季增。法說會一手揭露。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Stargate（OpenAI × Oracle × SoftBank × MGX）",
    "dc_operator": "OpenAI / Oracle / SoftBank",
    "grade": "A",
    "source_url": "https://openai.com/index/openai-and-foxconn-collaborate/",
    "source_date": "2025-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "OpenAI 官網 2025/11/20 公告：與 Foxconn 共同設計、工程、開發 multiple generations 的 AI DC rack。初期無採購承諾，OpenAI 有 early evaluation 和購買選擇權。涵蓋 Wisconsin/Ohio/Texas/Virginia/Indiana 美國廠。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Ohio Lordstown（SoftBank 收購、Foxconn 續營運）",
    "dc_operator": "SoftBank (Stargate 首座製造據點)",
    "grade": "A",
    "source_url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/softbank-acquires-foxconns-ohio-facility-to-build-stargate-ai-servers-usd375-million-deal-says-foxconn-will-continue-to-operate-the-plant",
    "source_date": "2025-08",
    "est_revenue_twd_mn": 11500,
    "verified_date": "2026-04-24",
    "notes": "SoftBank 以 US$375M（約 NT$11.5B）收購 Foxconn Ohio Lordstown 廠（620 萬平方呎）。Foxconn 繼續營運，工廠改造為 Stargate AI server 製造據點。Foxconn×SoftBank 各持 50% JV 營運權。est_revenue 為交易對價而非訂單金額。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Mexico Jalisco/Chihuahua AI server 超級工廠",
    "dc_operator": "NVIDIA（供 Stargate、CoreWeave、Oracle 等）",
    "grade": "B",
    "source_url": "https://equalocean.com/news/2025030621380",
    "source_date": "2025-03",
    "est_revenue_twd_mn": 27000,
    "verified_date": "2026-04-24",
    "notes": "投資 US$900M（≈NT$27B）擴產。規劃月產 20,000 台 Blackwell 伺服器（24 萬台/年），為全球最大 AI server 組裝廠。分兩期：擴 El Salto 既有廠 + Tonala 新廠。2025 底 - 2026 初投產。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Houston 美國 AI server 廠擴產",
    "dc_operator": "multiple (NVIDIA GB200/GB300 ODM)",
    "grade": "B",
    "source_url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/softbank-acquires-foxconns-ohio-facility-to-build-stargate-ai-servers-usd375-million-deal-says-foxconn-will-continue-to-operate-the-plant",
    "source_date": "2025-08",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Ohio Lordstown 規模為 Houston 廠 6 倍（Tom's Hardware 對比）。Houston 廠同樣擴產做 AI server；具體金額未揭露。B 級（Tier-1 媒體提及但非一手）。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Visionbay 亞灣超算中心（高雄）",
    "dc_operator": "Foxconn 自營（GPUaaS）",
    "grade": "A",
    "source_url": "https://statementdog.com/news/15098",
    "source_date": "2025-11",
    "est_revenue_twd_mn": 43000,
    "verified_date": "2026-04-24",
    "notes": "Foxconn 投資 US$1.4B（≈NT$43B）建 27MW GB300 NVL72 超算中心，亞太首座 GB300 AI DC、全台最大 GPU cluster。2026 上半年對外啟用，提供 GPUaaS。屬 Foxconn 自營 DC（既是供應商又是運營商）。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "Foxconn Kaohsiung HPC（2,304 GB200 superchip, 64 rack NVL72）",
    "dc_operator": "Foxconn（與 NVIDIA 合作）",
    "grade": "A",
    "source_url": "https://www.nextplatform.com/2024/10/09/taiwans-fastest-ai-supercomputer-goes-to-foxconn/",
    "source_date": "2024-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2024/10 公告：高雄超算採 2,304 顆 GB200 superchip，配置為 64 個 NVL72 rack。NVIDIA 官網確認為台灣最快 AI 超算。此為 Visionbay 前身。rack BOM 約 US$3M/櫃 × 64 = US$192M（≈NT$5.9B）為推算。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "CoreWeave GB200/GB300 NVL72 雲實例",
    "dc_operator": "CoreWeave",
    "grade": "B",
    "source_url": "https://www.prnewswire.com/news-releases/coreweave-becomes-first-hyperscaler-to-deploy-nvidia-gb300-nvl72-platform-302497802.html",
    "source_date": "2025-07",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "CoreWeave 2025/02 首家 GA GB200 NVL72、2025/07 首家部署 GB300 NVL72。Foxconn 為主要 rack ODM 之一（與 Supermicro、Dell、Quanta 共同供應）。金額未揭露；Foxconn 在 CoreWeave 訂單內的具體份額屬 C 級推算。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "Oracle Cloud Infrastructure GB200 NVL72 部署",
    "dc_operator": "Oracle Cloud Infrastructure",
    "grade": "B",
    "source_url": "https://www.bloomberg.com/news/articles/2025-08-18/foxconn-to-operate-softbank-s-stargate-ai-server-site-in-ohio",
    "source_date": "2025-08",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Bloomberg 2025/08：Foxconn 為 Oracle 最大 AI server 供應商（\"biggest AI server supplier\"）。Stargate Abilene（Crusoe 建置、Oracle 運營）內的 NVL72 rack 由 Foxconn 供應為合理推論；Oracle/OpenAI 未單獨公告 Foxconn 於 Abilene 的具體金額。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "NVIDIA GB200 / GB300 L10 整機伺服器",
    "dc_operator": "multiple (NVIDIA ecosystem)",
    "grade": "A",
    "source_url": "https://www.foxconn.com/zh-tw/press-center/press-releases/latest-news/1556",
    "source_date": "2025-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Foxconn/Ingrasys 為 GB200 NVL72 及 GB300 NVL72 平台 PBR（Pilot Build Request）供應商，參與 reference design。L10 代表整機伺服器（含 compute tray），為 rack assembly 上游 BOM。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Vera Rubin NVL144 MGX 次世代平台",
    "dc_operator": "multiple (NVIDIA ecosystem, 2H2026 量產)",
    "grade": "B",
    "source_url": "https://www.tweaktown.com/news/108368/foxconn-developing-nvidias-cutting-edge-next-gen-vera-rubin-ai-servers-ready-for-2026/index.html",
    "source_date": "2025-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Foxconn 為 NVIDIA Vera Rubin NVL144 MGX 主要開發夥伴，2H2026 量產。單櫃報價 US$8.8M（Tom's Hardware）比 GB300 高；但 server maker 毛利承壓（NVIDIA 往上游吃 BOM）。B 級：Tier-1 媒體引 SemiAnalysis。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "2026 AI server 展望（法說會）",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://unbias.tw/%E9%B4%BB%E6%B5%B7%E6%B3%95%E8%AA%AA%E6%9C%83%EF%BD%9C2025%E5%B9%B4%E5%89%8D%E4%B8%89%E5%AD%A3ai%E4%BC%BA%E6%9C%8D%E5%99%A8%E7%87%9F%E6%94%B6%E7%A0%B4%E5%85%86%E5%85%83%EF%BC%8C2026%E5%B9%B4%E9%9C%80/",
    "source_date": "2025-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "劉揚偉 2025/11 法說會：2026 AI rack 需求倍增（2x YoY），AI server 將占整體 server 業務 >50%，雲端網路部門將超越消費智能成為集團最大營收貢獻部門（45-50%）。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "2026 雲端網路占比法說會展望",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://www.sinotrade.com.tw/richclub/hotstock/%E9%B4%BB%E6%B5%B7%E6%B3%95%E8%AA%AA-%E7%87%9F%E6%94%B6%E7%A0%B48%E5%85%86-EPS-13-61%E5%85%83%E9%9B%99%E5%89%B5%E6%96%B0%E9%AB%98-%E4%BB%8A%E5%B9%B4AI%E6%A9%9F%E6%AB%83%E5%87%BA%E8%B2%A8%E8%A1%9D%E5%80%8D%E6%95%B8%E6%88%90%E9%95%B7-%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-69b7c3a8435757638e4e7191",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2026/03 年報法說：2026 AI 機櫃出貨衝倍數成長，EPS 13.61 創高；2026 Q1 營收 2.13 兆創同期新高，雲端網路占比推升至 40%+。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Meta GB200 NVL72 系統整合",
    "dc_operator": "Meta",
    "grade": "C",
    "source_url": "https://intuitionlabs.ai/articles/nvidia-gb200-supply-chain",
    "source_date": "2025-06",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "產業共識：Meta 採 Foxconn 整合的 GB200 NVL72（與 AWS 並列為主要客戶）。C 級 — 多源提及但無 Meta/Foxconn 任一方官方證實具體金額或 DC site。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "backend_network",
    "dc_project": "AI server 網通 + cabling（集團合併揭露）",
    "dc_operator": "-",
    "grade": "C",
    "source_url": "https://finance.technews.tw/2025/11/12/ff-ai-server-q325",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Foxconn 雲端網路產品部門涵蓋 NIC、switch、cable assembly（InfiniBand/Ethernet），但未單獨揭露網通子項。C 級：合併財報範疇無法拆分。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "2026 AI server 年收估 NT$2-3 兆",
    "dc_operator": "-",
    "grade": "D",
    "source_url": "https://www.moneyweekly.com.tw/ArticleData/Info/Article/222050",
    "source_date": "2026-03",
    "est_revenue_twd_mn": 2500000,
    "verified_date": "2026-04-24",
    "notes": "券商推算 2026 AI server 年收 NT$2-3 兆（Base NT$2.5 兆）。Bear: NT$1.8 兆（GB300 rack 良率/NVIDIA 排擠）/ Base: NT$2.5 兆（倍數成長 delivery）/ Bull: NT$3.2 兆（Vera Rubin 提前加上 CoreWeave/Meta 超預期）。D 級推算，非法說 guidance。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "US 五州 AI 硬體製造佈局",
    "dc_operator": "OpenAI（未來共同客戶）",
    "grade": "A",
    "source_url": "https://openai.com/index/openai-and-foxconn-collaborate/",
    "source_date": "2025-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "OpenAI 官公告：Foxconn 於 Wisconsin/Ohio/Texas/Virginia/Indiana 5 州布局，製造 power system、networking、cooling 及 rack；Wisconsin 原為 LCD 園區轉型；Texas 與 Stargate Abilene 同區域但不同廠。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "l6_server",
    "dc_project": "NVIDIA Blackwell / Rubin 主機板（L6）",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://newsletter.semianalysis.com/p/gb200-hardware-architecture-and-component",
    "source_date": "2025-02",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "SemiAnalysis GB200 BOM 拆解：Foxconn（含 Ingrasys）在 compute tray 主機板 + switch tray 主機板供應，與 Wistron、Quanta、Inventec 分享。單一 NVL72 rack BOM 中 L6 主機板組佔 ~8-12%。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2317",
    "supplier_name": "Hon Hai / Foxconn",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "Foxconn Mexico 月產能 20,000 台（推算）",
    "dc_operator": "multiple",
    "grade": "D",
    "source_url": "https://en.tmtpost.com/post/7276609",
    "source_date": "2025-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "推算：月產 20,000 台 L10 server ≈ 月 280 個 NVL72 等效 rack（72 台/rack），佔 2025 Q4 月產 1,700-1,800 rack 的 16%。Bear: 15% 利用率 / Base: 60% 利用率 / Bull: 90% 利用率（需 Vera Rubin 量產配合）。D 級推算。",
    "agent": "agent-foxconn"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "NVIDIA GB200 NVL72 ecosystem partner",
    "dc_operator": "NVIDIA_reference",
    "grade": "A",
    "source_url": "https://www.nvidia.com/gtc/keynote/",
    "source_date": "2024-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "GTC 2024 keynote Inventec logo listed as GB200 NVL72 ecosystem partner; actual shipping share estimated 3-8% vs Foxconn 40%+",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Google Axion Arm CPU server ODM",
    "dc_operator": "Google",
    "grade": "A",
    "source_url": "https://cloud.google.com/blog/products/compute/introducing-googles-new-arm-based-cpu",
    "source_date": "2024-Q2",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Google Cloud Next 2024 officially mentioned Inventec as Axion ODM partner; specific DC not disclosed",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Google TPU pod (Trillium / v5 era)",
    "dc_operator": "Google",
    "grade": "C",
    "source_url": "https://www.semianalysis.com/",
    "source_date": "2024-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Market consensus (SemiAnalysis, Digitimes) that Inventec is one of 2-3 ODMs for TPU pod infrastructure servers; not officially confirmed by either party",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Google x86 general-purpose compute ODM (historical)",
    "dc_operator": "Google",
    "grade": "B",
    "source_url": "Inventec annual report 2023",
    "source_date": "2023-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Multi-year (2013+) Google x86 ODM relationship; annual report mentions 'major US hyperscaler' without naming; market consensus = Google",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Meta AI server OCP platform (Grand Teton / Catalina era)",
    "dc_operator": "Meta",
    "grade": "C",
    "source_url": "https://www.digitimes.com/",
    "source_date": "2025-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Digitimes + SemiAnalysis reporting Inventec entered Meta AI server supply chain 2024H2; specific platform uncertain (Grand Teton / Catalina / MTIA v2)",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Mexico AI server production expansion (Juarez / Guadalajara)",
    "dc_operator": "multi_hyperscaler",
    "grade": "A",
    "source_url": "Inventec 2024Q4 earnings call",
    "source_date": "2024-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Company confirmed Mexico is primary AI server production base for North America hyperscaler demand; ramp 2025Q3",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Taoyuan Guanyin AI server L10/L11 new line",
    "dc_operator": "multi_hyperscaler",
    "grade": "B",
    "source_url": "Inventec 2025Q1 earnings call",
    "source_date": "2025-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Company mentioned new AI server lines at Taoyuan Guanyin plant for high-mix orders; target ramp 2025-2026",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "AI server share of total server revenue 2025E",
    "dc_operator": "na",
    "grade": "B",
    "source_url": "Inventec 2025Q3 earnings call",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Management guided AI server exceeded 50% of server revenue by 2025Q4; exact percentage not disclosed",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "2025 full-year revenue ~600 bn NT$",
    "dc_operator": "na",
    "grade": "B",
    "source_url": "Inventec 2025 annual report / market consensus",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": 600000,
    "verified_date": "2026-04-24",
    "notes": "Consolidated revenue 2025E ~580-620 bn NT$; server share ~65%, AI server ~40-50% of server = ~160-200 bn NT$ AI server",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "GB200 NVL72 rack integration",
    "dc_operator": "NVIDIA_reference",
    "grade": "D",
    "source_url": "supply chain estimates",
    "source_date": "2025-Q2",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Bear: 3-5% market share; Base: 5-8%; Bull: 10-12%. Foxconn dominates 40%+, Quanta 15-20%, Wiwynn 8-12%, Inventec as tier-2",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "GB300 (Blackwell Ultra) rack orders",
    "dc_operator": "NVIDIA_reference",
    "grade": "C",
    "source_url": "Inventec 2025Q4 earnings call",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Company confirmed 'GB300 orders secured' without quantity; market estimates share may rise 5%->7-10% vs GB200",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "market_share",
    "dc_project": "AI server rack ODM overall market share",
    "dc_operator": "na",
    "grade": "D",
    "source_url": "analyst consensus (JPM / MS / Citi)",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Bear 3%, Base 5-8%, Bull 10%. 2025 AI server rack ODM landscape: Foxconn 40%+, Quanta 15-20%, Wiwynn 8-12%, Inventec 5-8%, others <10%",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "2026 AI server revenue growth guidance",
    "dc_operator": "na",
    "grade": "C",
    "source_url": "JPMorgan / MS research notes 2025Q4",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Analyst consensus 2026 AI server revenue +40-60% YoY; highly sensitive to Meta & Google allocation",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Inventec Mexico 20+ year presence",
    "dc_operator": "multi_hyperscaler",
    "grade": "B",
    "source_url": "Inventec annual report",
    "source_date": "2024-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Inventec has operated in Mexico since late 1990s (Juarez); mature logistics vs Foxconn/Quanta recent expansions",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "l6_server",
    "dc_project": "Microsoft Maia / Cobalt server (speculative)",
    "dc_operator": "Microsoft",
    "grade": "D",
    "source_url": "supply chain rumors",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Unconfirmed rumors of small MSFT orders; Bear: no meaningful share; Base: <5% of MSFT AI server; Bull: 10% if diversification accelerates",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "Server gross margin trend",
    "dc_operator": "na",
    "grade": "B",
    "source_url": "Inventec 2024-2025 quarterly earnings",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Server GM historically 4-5%; AI server ramp may lift to 5-6%; still below Wiwynn's 8-10% reflecting L6/L10 vs rack-scale positioning",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "AI server revenue 2023->2025 trajectory",
    "dc_operator": "na",
    "grade": "C",
    "source_url": "back-calculation from earnings + market consensus",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2023 ~60 bn NT$ (12% of rev) -> 2024 ~140 bn (25%) -> 2025E ~200 bn (33%). AI server tripled in 2 years from low base",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2356",
    "supplier_name": "Inventec",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "US domestic manufacturing footprint",
    "dc_operator": "na",
    "grade": "B",
    "source_url": "Inventec earnings 2024-2025",
    "source_date": "2025-Q2",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Inventec has NOT announced major US domestic plant comparable to Foxconn Wisconsin or Quanta Tennessee; Mexico-centric strategy",
    "agent": "agent-inventec"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "2025 前三季合併營收（含 AI server 揭露）",
    "dc_operator": "unspecified (AWS/Google/Meta/Microsoft mix)",
    "grade": "A",
    "source_url": "https://blog.fugle.tw/earnings-call-2382-2025-11-12/",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": 1480000,
    "verified_date": "2026-04-24",
    "notes": "2025 前三季合併營收 NT$1.48 兆（YoY +49.5%），Q3 單季 NT$495,258M。法說會 2025/11/12 揭露。AI server 占整體營收約 50%（全年超過 NT$1 兆）、占 server 業務 >70%。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "2025 全年 AI server 營收揭露",
    "dc_operator": "unspecified",
    "grade": "A",
    "source_url": "https://news.nextapple.com/finance/20251112/09C99427A064C11C71469917E92D9A7E",
    "source_date": "2025-11",
    "est_revenue_twd_mn": 1000000,
    "verified_date": "2026-04-24",
    "notes": "劉揚偉級揭露：2025 全年 AI server 營收『略超 NT$1 兆』、YoY +100%+，占整體營收約 50%。此為 aggregate，不拆分客戶。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "2026 AI server 展望（法說會）",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://finance.technews.tw/2026/03/02/2026-quanta-ai-server/",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2026/03 法說：2026 AI server 再倍增，AI server 占 server 業務 >80%，整體合併營收衝 NT$3 兆；訂單能見度到 2027。Daiwa 與 Morgan Stanley 目標價齊升至 NT$370。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "market_share",
    "dc_project": "NVIDIA GB200/GB300 rack 全球市占 2025",
    "dc_operator": "NVIDIA ecosystem (CoreWeave/Oracle/hyperscaler mix)",
    "grade": "B",
    "source_url": "https://eu.36kr.com/en/p/3590983777108229",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2025 GB200/GB300 rack ODM 市占：Foxconn 52%、Wistron 21%、Quanta 約 19%。36kr / TrendForce 整合數據。Quanta 排第二。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "market_share",
    "dc_project": "Cloud server 全球 ODM 市占",
    "dc_operator": "AWS / Google / Meta / Microsoft",
    "grade": "C",
    "source_url": "https://marketintelo.com/report/odm-direct-server-market/amp",
    "source_date": "2024",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Quanta 是全球 cloud server ODM 第一（~45-50% 市占），為 global leader。ODM-Direct server 市場 2024 US$19.8B。四大客戶 AWS/Google/Meta/Microsoft 為業界共識，公司不單獨 name-drop。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "QCT 首批 GB200 NVL72 出貨 WhiteFiber（北美 GPU cloud）",
    "dc_operator": "WhiteFiber",
    "grade": "A",
    "source_url": "https://www.qct.io/Press-Releases/index/PR/Server/QCT-Announces-First-Shipment-of-its-NVIDIA-GB200-NVL72-System/1/0",
    "source_date": "2025-05",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "QCT 2025/05/27 press release：首批 GB200 NVL72 出貨北美 WhiteFiber。18×QuantaGrid D75B-1U compute tray，72 Blackwell GPU，1.4 exaFLOPS AI compute。2025/03 出貨，2025/05 安裝運營。Quanta 少數 A 級 name-drop 案例之一。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "GB200 NVL72 2025/04 單月出貨 300-400 櫃",
    "dc_operator": "multiple (NVIDIA ecosystem)",
    "grade": "B",
    "source_url": "https://www.tweaktown.com/news/105151/nvidia-gb200-nvl72-ai-server-shipments-1500-units-in-april-compared-to-1000-q1-2025/index.html",
    "source_date": "2025-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "TweakTown + TrendForce：2025/04 單月 Quanta 出 300-400 GB200 NVL72 rack（Foxconn 1,000、Wistron 150）。Quanta 排第二。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "NVIDIA HGX/MGX/Blackwell Partner Program 首批 ODM",
    "dc_operator": "NVIDIA ecosystem",
    "grade": "A",
    "source_url": "https://nvidianews.nvidia.com/news/nvidia-partners-with-world-s-top-server-manufacturers-to-advance-ai-cloud-computing",
    "source_date": "2024",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Quanta 為 NVIDIA HGX 首批認證 ODM 四強之一（另三家：Foxconn、Inventec、Wistron）。MGX / Blackwell Partner Program 延續此地位。A 級 NVIDIA 官方。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "NVIDIA Vera Rubin NVL144 MGX 2H2026 量產",
    "dc_operator": "multiple (NVIDIA ecosystem)",
    "grade": "B",
    "source_url": "https://wccftech.com/nvidia-rubin-ai-servers-to-ship-to-customers-by-august-this-year/",
    "source_date": "2026-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Quanta 為 NVIDIA Vera Rubin NVL144 主要 ODM 之一（與 Foxconn 並列），2H2026 量產。NVIDIA 上游吃 BOM，server maker 毛利承壓。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "Meta MTIA 下一代 ASIC server『Santa Barbara』6,000 rack",
    "dc_operator": "Meta (via Broadcom)",
    "grade": "B",
    "source_url": "https://www.datacenterdynamics.com/en/news/meta-places-order-for-its-next-gen-asic-powered-ai-servers-partners-with-broadcom-and-quanta-computer/",
    "source_date": "2025-08",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "TrendForce + DCD 2025/08：Meta × Broadcom × Quanta 三方。Broadcom 供 MTIA ASIC，Quanta 負責 server final assembly。代號 Santa Barbara，取代現行 Minerva；目標 6,000 rack，2025 Q4 試產、2026 量產。Quanta 最強 ASIC rack 揭露。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Meta × Broadcom 1GW MTIA 延長合作（2029 前 multi-GW rollout）",
    "dc_operator": "Meta",
    "grade": "A",
    "source_url": "https://investors.broadcom.com/news-releases/news-release-details/broadcom-announces-extended-partnership-meta-deploy-technology",
    "source_date": "2026-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2026/04/14 Broadcom × Meta 延長合作官方公告：Meta 承諾 1 GW 初期 MTIA silicon + multi-gigawatt rollout 到 2029；MTIA 為首款 2nm AI ASIC。Quanta 為 final assembly 夥伴屬合理延伸但 Broadcom/Meta 官方公告未直接 name-drop Quanta。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Microsoft Mt. Shasta OCP modular system",
    "dc_operator": "Microsoft Azure",
    "grade": "A",
    "source_url": "https://www.prweb.com/releases/qct_quanta_cloud_technology_leverages_hyperscale_datacenter_offerings_to_combine_intel_rack_scale_architecture_solutions_with_pioneering_open_compute_experience/prweb12907176.htm",
    "source_date": "2019",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Microsoft Mt. Shasta modular system 由 Quanta × Molex 共同設計，兼容 OCP Open Rack V3。歷史 A 級；近年 Azure 新世代 AI server 廣達份額推估降低但無 B 級以上佐證。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "backend_network",
    "dc_project": "QCT × Arrcus AI-optimized rack solution（OCP 2025）",
    "dc_operator": "QCT customer（未單獨揭露）",
    "grade": "A",
    "source_url": "https://www.businesswire.com/news/home/20251013692922/en/Arrcus-and-Quanta-Cloud-Technology-Announce-Strategic-Collaboration-to-Deliver-AI-Optimized-Rack-Solutions",
    "source_date": "2025-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2025/10/13 OCP Global Summit：QCT × Arrcus 發表整合 ArcOS + QCT switch 的 AI rack solution，支援 IP CLOS / VDR、RoCEv2 lossless Ethernet。QCT 品牌機對接 AI cluster 網通。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "l6_server",
    "dc_project": "NVIDIA GB200/GB300 compute tray L6 主機板（多 ODM 分工）",
    "dc_operator": "multiple",
    "grade": "B",
    "source_url": "https://newsletter.semianalysis.com/p/gb200-hardware-architecture-and-component",
    "source_date": "2025-02",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "SemiAnalysis GB200 BOM 拆解：Quanta（含 QCT）在 compute tray / switch tray 主機板供應，與 Foxconn、Wistron、Inventec 共享。單 NVL72 L6 主機板組佔 ~8-12% BOM。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Tennessee Nashville（QMN）注資擴產",
    "dc_operator": "multiple US CSP（Meta/Amazon/Google）",
    "grade": "A",
    "source_url": "https://en.tmtpost.com/news/7339348",
    "source_date": "2025-08",
    "est_revenue_twd_mn": 30000,
    "verified_date": "2026-04-24",
    "notes": "Quanta 2025 年 Tennessee（La Vergne）注資：2025/05 US$1B 額度 + 2025/08 再 US$170M 現金 + 設備購買 US$47.4M。員工 600+。LinkedIn 自述主要客戶為最大 social media / online retailer / search engine，即 Meta / Amazon / Google。est_revenue_twd_mn ≈ 2025 擴產注資總額 US$1B（約 NT$30B 部分已撥款）。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "California Fremont 三座新廠共 557,000 sqft",
    "dc_operator": "multiple US CSP",
    "grade": "A",
    "source_url": "https://news.theregistrysf.com/quanta-manufacturing-secures-557000-sqft-across-three-silicon-valley-locations-in-massive-q4-expansion/",
    "source_date": "2025-Q4",
    "est_revenue_twd_mn": 1400,
    "verified_date": "2026-04-24",
    "notes": "2025 Q4 Quanta 在 Bay Area 拿下三座新廠共 557,000 sqft。Fremont 旗艦廠 119,702 sqft（US$15.56M 77 個月租）+ 100,290 sqft warehouse + 第三座。Digitimes 2025/09/26 另報 US$45.6M 租賃。est_revenue 取三座租賃總額推估 ~US$47M ≈ NT$1.4B。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Fremont 廠 Bloom Energy SOFC 燃料電池微電網",
    "dc_operator": "Quanta 自用",
    "grade": "A",
    "source_url": "https://www.microgridknowledge.com/commercial-industrial-microgrids/article/55243256/quanta-technologies-factory-to-be-powered-by-bloom-energy-fuel-cell-microgrid",
    "source_date": "2024-04",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2024/04 Quanta × Bloom Energy 合作部署 SOFC 燃料電池微電網於 Fremont 廠，支持 AI server 製造擴產。2025 產能規劃擴增 150%。Quanta 解決矽谷電力瓶頸的獨有方案，台廠領先。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Mexico Nuevo León / García 擴產",
    "dc_operator": "multiple (EV + cloud server)",
    "grade": "B",
    "source_url": "https://www.americanindustriesgroup.com/news/quanta-computer-to-invest-1-bln-in-northern-mexico/",
    "source_date": "2023-05",
    "est_revenue_twd_mn": 30000,
    "verified_date": "2026-04-24",
    "notes": "Quanta 墨西哥 Nuevo León 累計投資 US$1B（NT$30B），2,500 新工作 + 2,500 既有工作。主要為 EV 電子 + cloud server 製造（非純 AI server 專用）。市場有誤傳 US$1.5B AI server 為誇大。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "台灣 Linkou / Guishan AI server 產能 2026 倍增",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://www.digitimes.com/news/a20251113PD234/quanta-2027-expansion-2026-revenue.html",
    "source_date": "2025-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Digitimes 2025/11/13 + 法說：台灣 AI server 產能 2026 年底再倍增；訂單能見度到 2027。具體擴產金額未單獨揭露（多散於合併 Capex）。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "Google TPU server ODM（業界推估）",
    "dc_operator": "Google Cloud",
    "grade": "C",
    "source_url": "https://www.digitimes.com/news/a20251210PD211/asic-2026-google-tpu-inventec.html",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Digitimes 2025/12/10 明確點名 Inventec 為 Google TPU server 供應商。Quanta 在 ASIC 賽道有份但具體 TPU 世代 / 份額無 A/B 級佐證。QCT 官網列 Google Cloud 為 hyperscale 客戶。業界推估 Google 2026 TPU 出貨 3.325M 顆由多家 ODM 分工。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "AWS cloud server / networking ODM（歷史長期）",
    "dc_operator": "AWS",
    "grade": "C",
    "source_url": "https://journal.uptimeinstitute.com/how-awss-own-silicon-and-software-deliver-cloud-scalability/",
    "source_date": "2024",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Uptime Institute + 業界報導：AWS networking 設備由 Wiwynn 與 Quanta 共同 ODM。AWS Nitro server（支援 x86/ARM/Trainium/Inferentia）由多家 ODM 供應，Quanta 為長期夥伴。AWS 從不單獨 name-drop ODM，金額完全黑箱。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "2026 外資目標價 NT$370（Daiwa / Morgan Stanley）",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://finance.technews.tw/2026/03/02/2026-quanta-ai-server/",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2026/03 Daiwa 與 Morgan Stanley 目標價齊升至 NT$370。Simply Wall St / TradingView 共識：343-364 TWD（high 420-425、low 240-250）。Quanta 2382。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "2026 Quanta 合併營收推算（Base NT$3 兆）",
    "dc_operator": "-",
    "grade": "D",
    "source_url": "https://finance.technews.tw/2026/03/02/2026-quanta-ai-server/",
    "source_date": "2026-03",
    "est_revenue_twd_mn": 3000000,
    "verified_date": "2026-04-24",
    "notes": "管理層 guidance：2026 AI server 倍增、合併營收 NT$3 兆。Bear: NT$2.5 兆（AI server YoY +60%，GB300/Santa Barbara 延宕）/ Base: NT$3 兆（AI server YoY +100%，同 guidance）/ Bull: NT$3.3 兆（Vera Rubin 提前 + Santa Barbara 超預期）。D 級推算。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "2382",
    "supplier_name": "Quanta Computer",
    "line": "rack",
    "category": "rack_assembly",
    "dc_project": "ASIC server 業務 2026 出貨倍增 guidance",
    "dc_operator": "unspecified ASIC 客戶（推論含 Meta MTIA、可能含 Google / AWS ASIC）",
    "grade": "A",
    "source_url": "https://finance.technews.tw/2026/03/02/2026-quanta-ai-server/",
    "source_date": "2026-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "法說會揭露 ASIC server 業務開始量產，2026 出貨量預期倍增。管理層未 name-drop 客戶；Meta Santa Barbara 為推論最大貢獻。",
    "agent": "agent-quanta"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "2025 全年合併營收 + AI 產品占比",
    "dc_operator": "unspecified (Meta / Microsoft / AWS mix)",
    "grade": "A",
    "source_url": "https://www.digitimes.com/news/a20260227PD200/csp-revenue-2025-profit-wiwynn.html",
    "source_date": "2025-FY",
    "est_revenue_twd_mn": 950660,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 2025 全年合併營收 NT$950.66B（+163.7% YoY），AI 產品占比過半。獲利倍增。Digitimes 2026/02/27。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "3Q25 單季營收",
    "dc_operator": "unspecified",
    "grade": "A",
    "source_url": "https://www.wiwynn.com/news/wiwynn-reports-third-quarter-2025-financial-results",
    "source_date": "2025-Q3",
    "est_revenue_twd_mn": 266824,
    "verified_date": "2026-04-24",
    "notes": "3Q25 合併營收 NT$266.824B（YoY +172.8%）。毛利率 8.8%、營業利益率 7.3%、PAT 率 5.8%。PAT NT$15.411B（YoY +143.5%）。EPS NT$82.92。Wiwynn 官方 3Q25 FS。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "AI_DC_revenue_share",
    "dc_project": "2024 三大客戶營收集中度",
    "dc_operator": "Meta / Microsoft / AWS (推定)",
    "grade": "B",
    "source_url": "https://silbadeepdives.substack.com/p/6669-wiwynn-the-heavy-metal-behind",
    "source_date": "2024-FY",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2024 三大客戶占營收 49% / 28% / 21%（合計 98%）。3Q25 末 AR ~95% 集中在這三家。Silba 引用 TWSE 年報與券商報告，推定為 Meta（#1）/ Microsoft / AWS。B 級業界共識。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "Microsoft Azure 首批 supercomputer-scale GB300 NVL72 cluster（for OpenAI）",
    "dc_operator": "Microsoft Azure",
    "grade": "A",
    "source_url": "https://blogs.nvidia.com/blog/microsoft-azure-worlds-first-gb300-nvl72-supercomputing-cluster-openai/",
    "source_date": "2025-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Microsoft Azure 部署世界首個 supercomputer-scale GB300 NVL72 cluster（4,608 GPU、92.1 exaFLOPS FP4 inference），專供 OpenAI workloads。Wiwynn 為 early GB300 NVL72 ODM（與 Wistron 並列首批）。NVIDIA 官方 blog 2025/10。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "Meta Catalina Pod GB200 NVL72 (OCP 2024)",
    "dc_operator": "Meta",
    "grade": "A",
    "source_url": "https://engineering.fb.com/2024/10/15/data-infrastructure/metas-open-ai-hardware-vision/",
    "source_date": "2024-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Meta 2024/10 OCP Global Summit 公開 Catalina Pod spec（NVIDIA GB200 Grace Blackwell + ORv3 HPR + 140kW liquid cooling + Wedge 400 fabric switch）。Wiwynn 為 OCP 長期貢獻者，為此 spec 主要 ODM 之一（與 Foxconn / Quanta 共同）。Wiwynn 具體份額未官方揭露。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "Wiwynn OCP 2025 Double-Wide Rack (HVDC + 液冷 busbar)",
    "dc_operator": "target: Meta / Microsoft 下一代",
    "grade": "A",
    "source_url": "https://www.wiwynn.com/news/wiwynn-debuts-double-wide-rack-architecture-for-next-generation-ai-at-ocp-global-summit-2025",
    "source_date": "2025-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 2025/10 OCP Summit 發表 Double-Wide Rack architecture：4× AI accelerator 並排、支援 9.5-reticle + 12× HBM + 120x150mm substrate、±400/800 VDC HVDC power rack、液冷 busbar。業界視為對接 Meta 下一代 Grand Teton / Catalina II 與 Microsoft 下一代 AI rack spec。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "AWS Trainium 2 air-cooled server 2025 H1 量產",
    "dc_operator": "AWS",
    "grade": "B",
    "source_url": "https://medium.com/@mingchikuo/wiwynns-2025-business-momentum-may-exceed-expectations-with-structural-growth-expected-in-cf9d552a4309",
    "source_date": "2025-02",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Trainium 2 servers 2025 H1 量產出貨 Wiwynn。郭明錤 2025/02 點名 Wiwynn 為 AWS Trainium 關鍵供應商；業界共識 AWS ASIC server Wiwynn 為首選。air-cooled 版 2025 年產線全速，液冷版 2025 年底量產。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "AWS Trainium 3 / Trn3 UltraServers 液冷量產",
    "dc_operator": "AWS",
    "grade": "B",
    "source_url": "https://english.cw.com.tw/article/article.action?id=4491",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "AWS Trainium 3 / Trn3 UltraServers 2025/12 發表，Wiwynn 為液冷版主力 ODM。CommonWealth Magazine 2025/12 專文『Amazon AI Chip Gambit Backed by Taiwan Supply Chain』直接點名 Wiwynn 為 AWS silicon 台廠供應鏈核心。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "YTL Malaysia Johor 600MW DC GB200 NVL72 部署",
    "dc_operator": "YTL Group (Malaysia)",
    "grade": "A",
    "source_url": "https://www.prnewswire.com/news-releases/wiwynn-delivers-best-mlperf-training-v5-1-closed-llama-2-70b-lora-results-at-ytl-malaysia-data-center-302616715.html",
    "source_date": "2025-11",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "YTL 2024/11 因 Supermicro 財報危機轉單 Wiwynn。初單 100-200 rack GB200 NVL72。YTL Johor 600MW DC complex（first 100MW 完工）。Wiwynn 2025/11 於 YTL Malaysia DC 跑出 MLPerf Training v5.1 Closed Llama 2 70B LoRA 最佳成績（1x/8x GB200 NVL72）。Wiwynn 少見的 turnkey DC buildout 案例。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "OpenAI × Broadcom ASIC server 預期 4Q26-1Q27 量產",
    "dc_operator": "OpenAI (via Broadcom)",
    "grade": "B",
    "source_url": "https://www.taipeitimes.com/News/biz/archives/2026/02/10/2003852050",
    "source_date": "2026-02",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Broadcom 設計 OpenAI 自研 ASIC，Wiwynn 為 server final assembly 候選；液冷設計。Taipei Times 2026/02/10 引用供應鏈分析師報導，4Q26 earliest mass production、1Q27 ramp。未有官方公告。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "market_share",
    "dc_project": "2025 NVIDIA GB200/GB300 rack 全球 ODM 市占",
    "dc_operator": "NVIDIA ecosystem",
    "grade": "B",
    "source_url": "https://eu.36kr.com/en/p/3590983777108229",
    "source_date": "2025-12",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "2025 GB200/GB300 NVL72 rack ODM 市占：Foxconn 52% / Wistron 21% / Quanta 19% / Wiwynn ~8%。36kr/TrendForce 整合。Wiwynn 不是 NVIDIA rack 整櫃主力，但在 GB300 for Microsoft/OpenAI 為早期出貨之一。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l10_server",
    "dc_project": "NVIDIA HGX 認證 ODM 四強之一",
    "dc_operator": "NVIDIA ecosystem",
    "grade": "A",
    "source_url": "https://nvidianews.nvidia.com/news/nvidia-partners-with-world-s-top-server-manufacturers-to-advance-ai-cloud-computing",
    "source_date": "2024",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 與 Wistron（母公司）同為 NVIDIA HGX 認證四強之一（另為 Foxconn / Inventec / Quanta）。MGX / Blackwell / GB300 Partner Program 延續地位。A 級 NVIDIA 官方。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Texas El Paso / Socorro 新廠",
    "dc_operator": "北美 CSP（Meta/Microsoft/AWS）",
    "grade": "A",
    "source_url": "https://texasedc.org/news/member-news/2025-06-05/1749133435",
    "source_date": "2025-06",
    "est_revenue_twd_mn": 4600,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 投資 US$152M（~NT$4.6B）在 Texas El Paso 地區 Socorro Logistics Center（9220 Socorro Logistics Lane）。833,000 sqft 兩棟建築，500+ 新工作，2026 H1 量產。Texas EDC 2025/06 + El Paso Inc。注意：非 US$1.55B（市場數字混淆）。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "台南科學園區新廠（server PCB + AI server test/cert）",
    "dc_operator": "-（內部產能）",
    "grade": "A",
    "source_url": "https://www.taipeitimes.com/News/biz/archives/2025/10/03/2003844815",
    "source_date": "2025-10",
    "est_revenue_twd_mn": 6200,
    "verified_date": "2026-04-24",
    "notes": "台南科學園區租地建廠，投資 NT$6.2B（~US$192.6M）。用途：server PCB、AI server 測試認證。北部電力緊張驅動南遷。第二座台南廠建設中（on schedule）。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "capacity_expansion",
    "dc_project": "Malaysia Johor Phase I + II server/rack integration",
    "dc_operator": "YTL + 東南亞 hyperscaler",
    "grade": "A",
    "source_url": "https://www.wiwynn.com/news/wiwynn-unveils-milestone-server-plant-in-johor-malaysia-initiates-rack-integration-for-hyperscale-data-centers",
    "source_date": "2023-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Phase I 2021/12 完工、rack integration。Phase II 2024 完工、擴增 PCBA + rack integration。Grand Opening 2023/10/12 於 Senai Airport City。Wiwynn 海外第一個 rack 廠，銜接 YTL 600MW DC 與東南亞/印度 hyperscaler。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "financial_guidance",
    "dc_project": "訂單能見度到 2027 + 2025 Capex 3x",
    "dc_operator": "-",
    "grade": "A",
    "source_url": "https://www.digitimes.com/news/a20250310PD210/wiwynn-ai-server-capex-tariff-2025.html",
    "source_date": "2025-03",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 董事長 Emily Hong 揭露：AI server 訂單能見度到 2027。2025 Capex 為 2024 的 3 倍。新產能即使 Texas 廠開廠仍偏緊。Digitimes 2025/03 + 2025/10 追蹤。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "l11_rack",
    "dc_project": "OCP 2024 GS1400A (NVIDIA MGX 4U H200) + GS1300N (3U 8× Hopper/Blackwell)",
    "dc_operator": "Meta / Microsoft 推定",
    "grade": "A",
    "source_url": "https://www.wiwynn.com/news/wiwynn-launches-state-of-the-art-ai-data-center-and-cooling-solutions-at-ocp-global-summit-2024",
    "source_date": "2024-10",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "OCP 2024 Summit 發表：GS1400A（NVIDIA MGX 4U，8× H200 + NVLink/NVSwitch）、GS1300N（3U 8× Hopper/Blackwell，DLC 散熱 >90%）。與 Wistron 共同設計 rack-level AI system。Wiwynn 官方 OCP 2024 press release。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "joint_venture_history",
    "dc_project": "Wiwynn 2016 年從 Wistron spin-off",
    "dc_operator": "Meta（作為 spin-off 主因客戶）",
    "grade": "A",
    "source_url": "https://en.wikipedia.org/wiki/Wiwynn",
    "source_date": "2016",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "Wiwynn 為 Wistron（3231）2016 年 spin-off 的 cloud server 子公司，專攻 hyperscaler（Meta 為主要初始客戶）。母公司 Wistron 仍持有多數股權。此結構是『為什麼 Wiwynn 客戶只有 3 家』的歷史根源。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "Wiwynn 2026 目標價共識",
    "dc_operator": "-",
    "grade": "B",
    "source_url": "https://www.investing.com/equities/wiwynn-consensus-estimates",
    "source_date": "2026-Q1",
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-24",
    "notes": "分析師共識 12 月目標價 NT$5,999.71（high 7,145 / low 5,000）。18 個買入、0 賣出，Strong Buy。B 級券商共識整合（Investing.com）。",
    "agent": "agent-wiwynn"
  },
  {
    "supplier_ticker": "6669",
    "supplier_name": "Wiwynn",
    "line": "rack",
    "category": "analyst_target",
    "dc_project": "2026 Wiwynn 合併營收推算（Base NT$1.5 兆）",
    "dc_operator": "-",
    "grade": "D",
    "source_url": "https://www.digitimes.com/news/a20251003PD204/wiwynn-demand-expansion-ai-server-manufacturing.html",
    "source_date": "2025-10",
    "est_revenue_twd_mn": 1500000,
    "verified_date": "2026-04-24",
    "notes": "管理層『AI 訂單能見度到 2027』 + 2025 YoY +164% + Capex 3x → 2026 Bear: NT$1.2 兆（YoY +26%，Meta Capex 縮減 + GB300→Rubin 過渡延宕）/ Base: NT$1.5 兆（YoY +58%，AI server 成長持續）/ Bull: NT$1.8 兆（YoY +89%，AWS Trainium 3 + OpenAI 提前 + YTL Phase 2 全開）。D 級推算。",
    "agent": "agent-wiwynn"
  }
];

/* ====== Per-supplier AI server revenue estimates (2025) ======
 * Sums to Stat 3 "AI Server Revenue (Aggregate)". See methodology section.
 */
const AI_SERVER_REVENUE_2025_MN = {
  '2317': 1000000, // Foxconn 前三季 AI server 1兆+ (Grade A 法說會)
  '2382': 1000000, // Quanta 全年 AI server 略超 1兆 (Grade A 法說會)
  '6669':  475000, // Wiwynn NT$950.66B × ~50% AI 占比 (estimate)
  '2356':  200000, // Inventec 2025E ~NT$200B (Grade C 自有推算)
};

/* ====== DC coordinate registry ======
 * Most rack-line rows have generic dc_project labels (集團整體 / overall);
 * those are intentionally NOT matched to map markers. Only named factory sites
 * + named DC projects are mapped.
 */
const DC_COORDS = [
  // Foxconn factory sites
  { match: /lordstown/i,                                                     lat: 41.4934, lng: -80.8126,  label: 'Foxconn Lordstown, Ohio' },
  { match: /鴻佰高雄|高雄路竹|kaohsiung|visionbay|軟體園區/i,                lat: 22.7610, lng: 120.2750, label: 'Foxconn 高雄路竹 / 軟體園區' },
  { match: /chihuahua|墨西哥.*奇瓦瓦/i,                                      lat: 28.6353, lng: -106.0889, label: 'Foxconn Chihuahua, MX' },
  { match: /jalisco|guadalajara|墨西哥.*哈利斯科/i,                          lat: 20.6597, lng: -103.3496, label: 'Foxconn Jalisco / Guadalajara' },
  // Quanta factory sites
  { match: /quanta.*tennessee|tennessee.*quanta|nashville|廣達.*田納西/i,    lat: 36.1627, lng: -86.7816,  label: 'Quanta Tennessee (Nashville area)' },
  { match: /fremont|廣達.*加州|california.*quanta/i,                         lat: 37.5485, lng: -121.9886, label: 'Quanta Fremont, CA' },
  { match: /廣達.*墨西哥|quanta.*mexico|nuevo le[oó]n|monterrey/i,           lat: 25.6866, lng: -100.3161, label: 'Quanta Nuevo León, MX' },
  // Wiwynn factory sites
  { match: /el paso|wiwynn.*texas|wiwynn.*德州|緯穎.*德州/i,                 lat: 31.7619, lng: -106.4850, label: 'Wiwynn El Paso, TX' },
  { match: /緯穎.*台南|wiwynn.*tainan|tainan.*wiwynn|stsp/i,                 lat: 22.9981, lng: 120.2180, label: 'Wiwynn 台南科學園區' },
  // Inventec factory sites
  { match: /inventec.*mexico|英業達.*墨西哥|juarez/i,                        lat: 31.6904, lng: -106.4245, label: 'Inventec Juárez, MX' },
  { match: /inventec.*taoyuan|英業達.*桃園|taoyuan.*inventec|guishan|龜山/i, lat: 25.0356, lng: 121.3500, label: 'Inventec 桃園龜山' },
  // Named DC overlaps (rare in rack-line data but kept for consistency)
  { match: /stargate abilene/i,                                              lat: 32.4487, lng: -99.7331,  label: 'Stargate Abilene, TX' },
  { match: /coreweave/i,                                                     lat: 40.7589, lng: -73.9851,  label: 'CoreWeave (distributed HQ)' },
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
  '2317': { name: '鴻海',   nameEn: 'Foxconn',  color: '#ef4444' },
  '2382': { name: '廣達',   nameEn: 'Quanta',   color: '#3b82f6' },
  '6669': { name: '緯穎',   nameEn: 'Wiwynn',   color: '#8b5cf6' },
  '2356': { name: '英業達', nameEn: 'Inventec', color: '#10b981' },
};

const GRADE_COLORS = {
  A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444',
};

// Input n is in NT$ 百萬 (millions).
// 1 億 = 100 百萬;  1 千億 = 100,000 百萬;  1 兆 = 1,000,000 百萬
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
  'market_share',
]);
const AGGREGATE_DC_PATTERNS = [
  /集團整體/, /合併營收/, /事業群營收/, /營收占比/, /營收結構/, /\(法人估\)/, /overall/i,
  /累計/, /總訂單/, /新增.*訂單/, /全系列/, /市占/, /新廠擴產/,
  /AI server.*營收/, /AI 伺服器.*整體/, /雲端網路產品/, /單季營收/,
  /share of total/i, /trajectory/i, /客戶營收集中/, /先進產品銷售/,
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

  // Stat 3 — RACK-LINE SPECIFIC AGGREGATE METHODOLOGY:
  // Use AI_SERVER_REVENUE_2025_MN per-supplier estimates (not raw row sum) because
  // rack ODM disclosure mixes 全公司營收 / 雲端網路占比 / AI server breakout in
  // AI_DC_revenue_share rows; raw sum would double-count. Methodology in HTML.
  let aggregateRevenue = 0;
  for (const t of suppliers) {
    aggregateRevenue += AI_SERVER_REVENUE_2025_MN[t] || 0;
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

/* ====== Matrix table ====== */
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

/* ====== Flat data table ====== */
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

/* ====== Orchestration ====== */
function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderMap(rows);
  renderMatrix(rows);
  renderFlatTable(rows);
}

/* ====== Filter button handlers ====== */
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

/* ====== Theme toggle ====== */
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

/* ====== Init ====== */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  wireFilters();
  wireTheme();
  renderAll();
});
