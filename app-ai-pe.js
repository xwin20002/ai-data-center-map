/* G04 Phase 10 — AI Top-10 P/E Ratio Index
 * 10 ticker: NVDA / AMD / TSM / GOOG / AMZN / AVGO / MU / DELL / COHR / 3231 (Wistron)
 * Data 2026-04-27 · _research/phase10-ai-pe/ai-pe.jsonl (105 records)
 *
 * Visualization: TTM vs Forward P/E + Market cap + AI revenue share + 1Y return
 */

const DATA = [
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 52,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/NVDA/",
    "source_date": "2026-04",
    "notes": "NVDA TTM P/E ~52 (FY26 EPS $3.50+ / 股價 ~$180)。Datacenter 營收占 ~88%，FY26 (Feb 2026) 全年營收估 $200B+。"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 32,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/NVDA/",
    "source_date": "2026-04",
    "notes": "NVDA Forward P/E ~32 (FY27 EPS 共識 $5.50)。Blackwell 滿單 + Rubin 2026 H2 推升。"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 4500,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/NVDA/",
    "source_date": "2026-04",
    "notes": "NVDA market cap ~$4.5T (2026 Q2 peak)。歷史最大公司市值。"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 88,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://nvidia.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~88% 營收（Datacenter segment）。Gaming + Pro Visualization + Auto 合計 ~12%。最純 AI play 之一。"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 50,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/NVDA/",
    "source_date": "2026-04",
    "notes": "1 年股票總報酬率 ~+50%（2025/04-2026/04）。Blackwell 量產 + Stargate 訂單推升。波動大（DeepSeek R1 衝擊單日 -17%）。"
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 75,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMD/",
    "source_date": "2026-04",
    "notes": "AMD TTM P/E ~75 (FY25 EPS $2.40 / 股價 ~$180)。MI300X/MI325X ramp 但毛利率仍受壓。"
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 32,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMD/",
    "source_date": "2026-04",
    "notes": "AMD Forward P/E ~32 (FY26 EPS 共識 $5.50+)。MI355X + MI400 推升 EPS。Forward/TTM gap 大。"
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 290,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMD/",
    "source_date": "2026-04",
    "notes": "AMD market cap ~$290B (2026 Q2)。NVIDIA 1/15 但增長動能強。"
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 35,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://amd.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~35%（Datacenter MI300/MI325/EPYC AI server CPU）。Gaming 25%、Embedded 20%、Client (Ryzen) 20%。"
  },
  {
    "ticker": "AMD",
    "company": "Advanced Micro Devices",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 15,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMD/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+15%。比 NVDA 緩，反映 MI300 量產初期毛利率壓力。"
  },
  {
    "ticker": "TSM",
    "company": "Taiwan Semiconductor (TSMC ADR)",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 32,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/TSM/",
    "source_date": "2026-04",
    "notes": "TSM TTM P/E ~32 (TSMC EPS NT$50 / ADR price ~$220)。3nm + 2nm node 主力 + CoWoS 緊張。"
  },
  {
    "ticker": "TSM",
    "company": "Taiwan Semiconductor (TSMC ADR)",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 25,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/TSM/",
    "source_date": "2026-04",
    "notes": "TSM Forward P/E ~25 (FY26 EPS 共識 NT$60+)。HPC + AI 訂單推升毛利率。"
  },
  {
    "ticker": "TSM",
    "company": "Taiwan Semiconductor (TSMC ADR)",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 1300,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/TSM/",
    "source_date": "2026-04",
    "notes": "TSMC market cap ~$1.3T (2026 Q2)。亞洲最大公司，tap出 Apple + NVIDIA + AMD 全 AI 生態。"
  },
  {
    "ticker": "TSM",
    "company": "Taiwan Semiconductor (TSMC ADR)",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 30,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://www.tsmc.com/",
    "source_date": "2026-04",
    "notes": "AI/HPC 暴險占 ~30%（高效能運算 segment 含 NVIDIA + AMD + Apple A series + Hyperscaler ASIC）。Smartphone ~40%、Auto/IoT 較小。"
  },
  {
    "ticker": "TSM",
    "company": "Taiwan Semiconductor (TSMC ADR)",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 50,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/TSM/",
    "source_date": "2026-04",
    "notes": "1Y ADR 股票報酬 ~+50%。AI 訂單滿載 + 美國 Arizona 廠進度。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet Inc. (Google)",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 26,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/GOOG/",
    "source_date": "2026-04",
    "notes": "GOOG TTM P/E ~26。Search 主業 + Cloud + AI integration。最便宜 mega-cap AI play。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet Inc. (Google)",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 22,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/GOOG/",
    "source_date": "2026-04",
    "notes": "GOOG Forward P/E ~22。Gemini ARR + Cloud +34% growth + TPU 自研垂直整合 cost advantage。Forward 估算保守。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet Inc. (Google)",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 2800,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/",
    "source_date": "2026-04",
    "notes": "Alphabet market cap ~$2.8T (2026 Q2)。第二大 mega-cap （vs NVDA $4.5T、AAPL $3.5T、MSFT $3.2T、AMZN $2.6T）。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet Inc. (Google)",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 25,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://abc.xyz/investor/",
    "source_date": "2026-04",
    "notes": "AI 暴險推估 ~25%（Cloud Vertex AI + Gemini Advanced + Search AI overviews 廣告 + Workspace AI）。Google 不獨立揭露 AI 營收，C 級估算。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet Inc. (Google)",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 20,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/",
    "source_date": "2026-04",
    "notes": "1Y 股票報酬 ~+20%。落後 NVDA + AVGO，但被視為「最便宜的 AI play」。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon.com Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 50,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMZN/",
    "source_date": "2026-04",
    "notes": "AMZN TTM P/E ~50。AWS 高毛利 + Retail 低毛利混合，AI capex 重壓 EPS。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon.com Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 35,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMZN/",
    "source_date": "2026-04",
    "notes": "AMZN Forward P/E ~35。AWS AI revenue 加速 + Anthropic 投資 + Trainium 2/3 cost advantage。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon.com Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 2600,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/",
    "source_date": "2026-04",
    "notes": "AMZN market cap ~$2.6T (2026 Q2)。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon.com Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 12,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://aboutamazon.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險推估 ~12%（AWS AI + Bedrock + Trainium + Anthropic 使用者）。Retail 仍是主業，AI 占比小但成長快。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon.com Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 25,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/",
    "source_date": "2026-04",
    "notes": "1Y 股票報酬 ~+25%。AWS 加速 + Anthropic 持股增值雙引擎。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 85,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AVGO/",
    "source_date": "2026-04",
    "notes": "AVGO TTM P/E ~85（高估值）。VMware 收購含 amortization 拖累 GAAP EPS。Adjusted P/E ~38。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 30,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AVGO/",
    "source_date": "2026-04",
    "notes": "AVGO Forward P/E ~30。AI ASIC 給 Google TPU + Meta MTIA + 網通晶片 Tomahawk/Jericho 雙引擎。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 1500,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AVGO/",
    "source_date": "2026-04",
    "notes": "Broadcom market cap ~$1.5T (2026 Q2)。第二大半導體公司（vs NVDA #1、TSM 跨資料中心）。CEO Hock Tan 預測 AI revenue 2027 達 $60-90B 區間。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 35,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://www.broadcom.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~35%（custom AI ASIC 為 Google/Meta/OpenAI 設計 + Tomahawk 5/Jericho 4 高速網通晶片）。Software (VMware) ~25%、Wireless (iPhone RF) ~15%、其他 ~25%。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom Inc.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 60,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AVGO/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+60%（最強 mega-cap AI play）。OpenAI custom ASIC 訂單 + Apple 設計 win 推升。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 14,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/MU/",
    "source_date": "2026-04",
    "notes": "MU TTM P/E ~14。DRAM cycle 中段 + HBM 高毛利推升 EPS。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 9,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/MU/",
    "source_date": "2026-04",
    "notes": "MU Forward P/E ~9（**最便宜 AI play**）。HBM3e/HBM4 量產加速 + DRAM 結構性短缺。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 160,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MU/",
    "source_date": "2026-04",
    "notes": "MU market cap ~$160B (2026 Q2)。HBM 三巨頭之一（vs SK Hynix + Samsung）。市值較另兩家低反映 SK Hynix HBM3e 領先。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 30,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://micron.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~30%（HBM 約 25% + AI server DDR5）。HBM 業務 1H FY26 已 sold out 至 2027。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 30,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MU/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+30%。HBM 業務 +400% YoY 但 commodity DRAM 部分週期波動。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 22,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/DELL/",
    "source_date": "2026-04",
    "notes": "DELL TTM P/E ~22。AI server (PowerEdge XE9680) ramp + 傳統 PC/Storage 業務混合。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 14,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/DELL/",
    "source_date": "2026-04",
    "notes": "DELL Forward P/E ~14。AI server backlog $5B+ 推升 FY27 EPS。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 120,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/DELL/",
    "source_date": "2026-04",
    "notes": "DELL market cap ~$120B (2026 Q2)。AI server #1 OEM 品牌（vs HPE/Lenovo/Supermicro）。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 20,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://dell.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~20%（AI server + ProSupport AI 服務）。Storage + Client (PC) 仍是大宗。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 30,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/DELL/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+30%。AI server backlog 持續加 + Michael Dell 樂觀展望 2026 再翻倍。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent Corp.",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 140,
    "unit": "ratio",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/COHR/",
    "source_date": "2026-04",
    "notes": "COHR TTM P/E ~140（高，剛從虧損轉正獲利）。FY25 EPS $0.50（剛轉正），股價 ~$70。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent Corp.",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 28,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/COHR/",
    "source_date": "2026-04",
    "notes": "COHR Forward P/E ~28（FY26 EPS 共識 $4.50+）。1.6T transceiver + InP 6-inch 量產推升毛利。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent Corp.",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 50,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/COHR/",
    "source_date": "2026-04",
    "notes": "COHR market cap ~$50B (2026 Q2)。光通訊巨頭，垂直整合 InP/EML/transceiver 三層。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent Corp.",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 50,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://coherent.com/",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~50%（Networking segment + 800G/1.6T transceiver + InP laser chip 上游）。Industrial laser + Lifecare 較小。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent Corp.",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 40,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/COHR/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+40%。Anderson 新 CEO turnaround + 1.6T supercycle 雙引擎。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "ttm_pe",
    "value": 22,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://www.wistron.com/Investors",
    "source_date": "2026-04",
    "notes": "Wistron 3231 TTM P/E ~22 (FY25 EPS NT$8.5 / 股價 NT$190)。AI server ODM 第二大（Foxconn 最大、Quanta 同級）。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "forward_pe",
    "value": 15,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://www.wistron.com/Investors",
    "source_date": "2026-04",
    "notes": "Wistron Forward P/E ~15 (FY26 EPS 共識 NT$13+)。緯穎子公司 6669 + 緯創自有 AI server 雙引擎。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "market_cap_usd_b",
    "value": 23,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://www.twse.com.tw/",
    "source_date": "2026-04",
    "notes": "Wistron market cap NT$700B = ~$23B USD。台廠 AI ODM 第二大（鴻海 #1 NT$2T+ / 廣達 NT$1T+）。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_revenue_share",
    "value": 45,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://www.wistron.com/Investors",
    "source_date": "2026-04",
    "notes": "AI 暴險占 ~45%（AI server ODM + 緯穎 6669 子公司 hyperscaler ODM）。NB/PC/Display 占 ~30%、其他 25%。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "stock_return_1y",
    "value": 60,
    "unit": "percent",
    "grade": "A",
    "source_url": "https://www.twse.com.tw/",
    "source_date": "2026-04",
    "notes": "1Y 股價報酬 ~+60%。AI server backlog 滿載 + 緯穎子公司 ARR 倍增。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://www.wistron.com/",
    "source_date": "2026-04",
    "notes": "Wistron 戰略：(1) AI server NVIDIA HGX/MGX 系統 ODM Microsoft + Meta 主客戶; (2) 緯穎 6669 (持股 51%) 為 hyperscaler ODM 純 AI play; (3) 美國 Texas 廠擴產; (4) 唯一台廠進入此 P/E top-10 list。"
  },
  {
    "ticker": "INSIGHT",
    "company": "Cross-vendor analysis",
    "exchange": "all",
    "hq_country": "all",
    "line": "ai-pe",
    "year": 2026,
    "category": "valuation_insights",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://www.koyfin.com/",
    "source_date": "2026-04",
    "notes": "10 vendor 估值排序（Forward P/E 由便宜到貴）：MU 9 < DELL 14 < Wistron 15 < GOOG 22 < TSM 25 < COHR 28 < AVGO 30 < NVDA 32 = AMD 32 < AMZN 35。**最便宜 AI play**: MU (HBM 純 play 但週期股); DELL/Wistron (AI server ODM commodity 風險); GOOG (mega-cap AI 但市場不買單)。**估值相對合理**: TSM (代工剛性 + AI 純度); NVDA (frontier 領先); COHR (turnaround story)。**估值偏高**: AMZN (capex 重壓); AVGO/AMD (AI 占比待證實)。"
  },
  {
    "ticker": "INSIGHT",
    "company": "Cross-vendor analysis",
    "exchange": "all",
    "hq_country": "all",
    "line": "ai-pe",
    "year": 2026,
    "category": "ai_purity_ranking",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://www.semianalysis.com/",
    "source_date": "2026-04",
    "notes": "AI 純度排序（AI revenue share 高至低）：NVDA 88% > COHR 50% > Wistron 45% > AMD 35% > AVGO 35% > TSM 30% > MU 30% > GOOG 25% > DELL 20% > AMZN 12%。**純 AI play**: NVDA + COHR; **混合大公司**: GOOG + AMZN（不是 AI play 但受惠）。"
  },
  {
    "ticker": "INSIGHT",
    "company": "Cross-vendor analysis",
    "exchange": "all",
    "hq_country": "all",
    "line": "ai-pe",
    "year": 2026,
    "category": "geographic_distribution",
    "value": null,
    "unit": null,
    "grade": "A",
    "source_url": "https://www.koyfin.com/",
    "source_date": "2026-04",
    "notes": "10 家 vendor 上市地：🇺🇸 8 家（NVDA + AMD + GOOG + AMZN + AVGO + MU + DELL + COHR）+ 🇹🇼 2 家（TSM ADR + Wistron）。市值合計 ~$13T，占全球前 100 大 AI 相關公司絕大部分。中國公司全部缺席（中際旭創 300308 / 寒武紀 688256 / 海光 688041 / 阿里 BABA 等可參考 phase 5/6/9）。"
  },
  {
    "ticker": "INSIGHT",
    "company": "Cross-vendor analysis",
    "exchange": "all",
    "hq_country": "all",
    "line": "ai-pe",
    "year": 2026,
    "category": "investment_takeaway",
    "value": null,
    "unit": null,
    "grade": "C",
    "source_url": "https://www.koyfin.com/",
    "source_date": "2026-04",
    "notes": "**Investor takeaway** (educational only, NOT investment advice): (1) **被動指數**: NVDA + GOOG + AMZN 占 mega-cap 三巨頭，被動買 SPY/QQQ 已自動暴險。(2) **主動 stock pick**: 看 Forward/TTM gap 大者（AMD 75→32, AVGO 85→30）= 增長預期高。(3) **Value AI play**: MU 9, DELL 14, Wistron 15（被市場低估？或 commodity 風險？）。(4) **Watch**: 若 AI 滲透率 ceiling 提早到（vs LLM Market 頁觀察），高 forward P/E 標的 (AMZN, AMD) 修正壓力大。"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 60.9,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/NVDA/financials",
    "source_date": "2023-Q4",
    "notes": "FY24 (end Jan 2024) Datacenter $47.5B 為主"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 130.5,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/NVDA/financials",
    "source_date": "2024-Q4",
    "notes": "FY25 (end Jan 2025) Datacenter $115.2B 占 88%, +217% YoY"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 200,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/NVDA/financials",
    "source_date": "2025-Q4",
    "notes": "FY26 (end Jan 2026 forecast) 年化 ARR $200B, Blackwell 主推"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 260,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/NVDA/financials",
    "source_date": "2026-Q4",
    "notes": "FY27 forecast $260B, Rubin H2 量產 + Stargate Phase 1 兌現"
  },
  {
    "ticker": "NVDA",
    "company": "NVIDIA Corp.",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 63,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/NVDA/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~63%（最高）。AI Datacenter 占比 78% → 90% 上升。"
  },
  {
    "ticker": "AMD",
    "company": "AMD",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 22.7,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMD/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 calendar; 全年 -3.9% YoY (PC 衰退)"
  },
  {
    "ticker": "AMD",
    "company": "AMD",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 25.8,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMD/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 +13.7% YoY, Datacenter MI300 ramp"
  },
  {
    "ticker": "AMD",
    "company": "AMD",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 32,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMD/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E +24% YoY, MI325X + EPYC server CPU 雙引擎"
  },
  {
    "ticker": "AMD",
    "company": "AMD",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 40,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMD/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +25% YoY, MI355X 量產 + MI400 H2 launch"
  },
  {
    "ticker": "AMD",
    "company": "AMD",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 21,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMD/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~21%。從 PC 衰退 + Datacenter 啟動。"
  },
  {
    "ticker": "TSM",
    "company": "TSMC",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 69.7,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/TSM/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 NT$2.16T = $69.7B, AI 需求剛萌芽"
  },
  {
    "ticker": "TSM",
    "company": "TSMC",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 93,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/TSM/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 NT$2.89T = $93B, +33% YoY (AI 帶動)"
  },
  {
    "ticker": "TSM",
    "company": "TSMC",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 113,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/TSM/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E NT$3.5T = $113B, +22% YoY (3nm 主力)"
  },
  {
    "ticker": "TSM",
    "company": "TSMC",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 136,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/TSM/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E NT$4.2T = $136B, +21% YoY (3nm + 2nm 量產)"
  },
  {
    "ticker": "TSM",
    "company": "TSMC",
    "exchange": "NYSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 25,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/TSM/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~25%。HPC/AI segment 從 30% → 45%+。"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 307,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 +9% YoY, 主要 Search+YouTube"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 350,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 +14% YoY, Cloud +30% 加速"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 400,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E +14% YoY, Gemini Advanced + AI Cloud"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 456,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +14% YoY, AI Overviews + Workspace AI monetize"
  },
  {
    "ticker": "GOOG",
    "company": "Alphabet",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 14,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~14%。但 Cloud 部分 +30%/年遠快於整體。"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 574,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 +12% YoY, AWS $90.8B"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 638,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 +11% YoY, AWS $107B (+19%)"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 720,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E +13% YoY, AWS $130B+ (+22%)"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 800,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +11% YoY, AWS AI services growth"
  },
  {
    "ticker": "AMZN",
    "company": "Amazon",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 12,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~12%（最低）。但 AWS 部分 +20%/年遠強於 Retail。"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 35.8,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AVGO/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 (end Oct 2023) +8% YoY, pre-VMware"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 51.6,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AVGO/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 +44% YoY, VMware acquisition H2 + AI ASIC"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 62,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AVGO/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E +20% YoY, AI ASIC $20B (Google + Meta)"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 75,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AVGO/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +21% YoY, AI ASIC $30B+ (Hock Tan 2027 target $60-90B)"
  },
  {
    "ticker": "AVGO",
    "company": "Broadcom",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 28,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/AVGO/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~28%。AI ASIC + VMware 雙引擎，最快 mega-cap 晶片廠。"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 15.5,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MU/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 (end Aug 2023) -49% YoY, DRAM cycle 谷底"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 25.1,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MU/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 +62% YoY, HBM3 量產 + DRAM 反彈"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 35,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/MU/financials",
    "source_date": "2025-Q4",
    "notes": "FY25E +39% YoY, HBM3e 量產 + AI demand"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 45,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/MU/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +29% YoY, HBM4 + DRAM 結構性短缺"
  },
  {
    "ticker": "MU",
    "company": "Micron Technology",
    "exchange": "NASDAQ",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 43,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/MU/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~43%（第二高，僅次 NVDA）。但 2023 為週期低點，CAGR 偏高。"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 88.4,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/DELL/financials",
    "source_date": "2023-Q4",
    "notes": "FY24 (end Feb 2024) -14% YoY, PC 衰退"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 95.6,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/DELL/financials",
    "source_date": "2024-Q4",
    "notes": "FY25 +8% YoY, AI server backlog 啟動"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 108,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/DELL/financials",
    "source_date": "2025-Q4",
    "notes": "FY26E +13% YoY, AI server PowerEdge XE9680 量產"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 122,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/DELL/financials",
    "source_date": "2026-Q4",
    "notes": "FY27E +13% YoY, AI server backlog $5B+"
  },
  {
    "ticker": "DELL",
    "company": "Dell Technologies",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 11,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/DELL/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~11%（受 PC commodity 業務拖累）。AI server segment +50%/年。"
  },
  {
    "ticker": "COHR",
    "company": "Coherent",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 4.7,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/COHR/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 (end Jun 2023) post II-VI merger 整合"
  },
  {
    "ticker": "COHR",
    "company": "Coherent",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 4.7,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/COHR/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 持平, Networking 開始 ramp"
  },
  {
    "ticker": "COHR",
    "company": "Coherent",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 5.8,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/COHR/financials",
    "source_date": "2025-Q4",
    "notes": "FY25 +23% YoY, Networking +45% (AI optical)"
  },
  {
    "ticker": "COHR",
    "company": "Coherent",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 6.9,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/COHR/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E +19% YoY, 1.6T transceiver supercycle"
  },
  {
    "ticker": "COHR",
    "company": "Coherent",
    "exchange": "NYSE",
    "hq_country": "US",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 14,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/COHR/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~14%。但 Networking segment +45%/年，是核心 AI driver。"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2023,
    "category": "annual_revenue",
    "value": 28,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/3231/financials",
    "source_date": "2023-Q4",
    "notes": "FY23 NT$867B = $28B, AI server 啟動"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2024,
    "category": "annual_revenue",
    "value": 35,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/3231/financials",
    "source_date": "2024-Q4",
    "notes": "FY24 NT$1,083B = $35B, +25% YoY"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2025,
    "category": "annual_revenue",
    "value": 39,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/3231/financials",
    "source_date": "2025-Q4",
    "notes": "FY25 NT$1,200B = $39B, +11% YoY (AI 內部成長 +50%)"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "annual_revenue",
    "value": 48,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/3231/financials",
    "source_date": "2026-Q4",
    "notes": "FY26E NT$1,500B = $48B, +23% YoY (NVIDIA HGX 全球出貨)"
  },
  {
    "ticker": "3231",
    "company": "Wistron 緯創",
    "exchange": "TWSE",
    "hq_country": "TW",
    "line": "ai-pe",
    "year": 2026,
    "category": "revenue_cagr_2023_2026",
    "value": 20,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/3231/financials",
    "source_date": "2026-04",
    "notes": "2023→2026 Revenue CAGR ~20%。AI server 內部成長 +50%/年, 帶動整體加速。"
  }
];

const TICKER_META = {
  'NVDA':    { color: '#76b900', flag: '🇺🇸', short: 'NVDA' },
  'AMD':     { color: '#ed1c24', flag: '🇺🇸', short: 'AMD' },
  'TSM':     { color: '#cc0000', flag: '🇹🇼', short: 'TSM' },
  'GOOG':    { color: '#4285f4', flag: '🇺🇸', short: 'GOOG' },
  'AMZN':    { color: '#ff9900', flag: '🇺🇸', short: 'AMZN' },
  'AVGO':    { color: '#cc092f', flag: '🇺🇸', short: 'AVGO' },
  'MU':      { color: '#005bbb', flag: '🇺🇸', short: 'MU' },
  'DELL':    { color: '#007db8', flag: '🇺🇸', short: 'DELL' },
  'COHR':    { color: '#3b82f6', flag: '🇺🇸', short: 'COHR' },
  '3231':    { color: '#ed1c24', flag: '🇹🇼', short: 'Wistron' },
  'INSIGHT': { color: '#888',    flag: '🌐', short: 'Insight' },
};
const TICKER_ORDER = ['NVDA', 'AMD', 'TSM', 'GOOG', 'AMZN', 'AVGO', 'MU', 'DELL', 'COHR', '3231'];

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };
const state = { filters: { ticker: 'all', grade: 'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'ratio':   return r.value.toFixed(0) + 'x';
    case 'USD_B':   return r.value >= 1000 ? '$' + (r.value/1000).toFixed(2) + 'T' : '$' + r.value + 'B';
    case 'percent': return r.value + '%';
    default:        return r.value;
  }
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.ticker !== 'all' && d.ticker !== state.filters.ticker) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (q) {
      const hay = [d.ticker, d.company, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getMetric(ticker, category) {
  const r = DATA.find(x => x.ticker === ticker && x.category === category);
  return r ? r.value : null;
}

function renderStats() {
  // Total market cap
  let totalMcap = 0;
  for (const t of TICKER_ORDER) totalMcap += getMetric(t, 'market_cap_usd_b') || 0;
  // Cheapest forward PE
  let cheap = { ticker: '', value: 999 };
  for (const t of TICKER_ORDER) {
    const v = getMetric(t, 'forward_pe');
    if (v && v < cheap.value) cheap = { ticker: t, value: v };
  }
  // Most expensive forward PE
  let expensive = { ticker: '', value: 0 };
  for (const t of TICKER_ORDER) {
    const v = getMetric(t, 'forward_pe');
    if (v && v > expensive.value) expensive = { ticker: t, value: v };
  }
  document.getElementById('stat-vendors').textContent = '10';
  document.getElementById('stat-mcap').textContent = '$' + (totalMcap/1000).toFixed(1) + 'T';
  document.getElementById('stat-cheap').textContent = cheap.ticker + ' ' + cheap.value + 'x';
  document.getElementById('stat-expensive').textContent = expensive.ticker + ' ' + expensive.value + 'x';
  document.getElementById('dp-count').textContent = getFiltered().length;
}

/* Chart 1: TTM vs Forward P/E grouped bar */
function renderPEChart() {
  const c = document.getElementById('pe-chart');
  c.innerHTML = '';
  const W = 800, H = 400, PAD = 50;
  const yMax = 150;
  const barW = (W - 2 * PAD) / TICKER_ORDER.length / 2.5;
  const groupW = (W - 2 * PAD) / TICKER_ORDER.length;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">P/E Ratio: TTM (深) vs Forward NTM (淺)</text>');
  // Y axis
  for (let i = 0; i <= 5; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 5;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.12"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">' + (yMax / 5 * i).toFixed(0) + 'x</text>');
  }
  for (let i = 0; i < TICKER_ORDER.length; i++) {
    const t = TICKER_ORDER[i];
    const meta = TICKER_META[t];
    const ttm = getMetric(t, 'ttm_pe');
    const fwd = getMetric(t, 'forward_pe');
    const xBase = PAD + i * groupW + (groupW - barW * 2 - 2) / 2;
    if (ttm) {
      const barH = Math.min(ttm / yMax, 1) * (H - 2 * PAD);
      svg.push('<rect x="' + xBase + '" y="' + (H - PAD - barH) + '" width="' + (barW - 1) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.95"/>');
      svg.push('<text x="' + (xBase + barW/2) + '" y="' + (H - PAD - barH - 4) + '" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">' + ttm + '</text>');
    }
    if (fwd) {
      const barH = Math.min(fwd / yMax, 1) * (H - 2 * PAD);
      svg.push('<rect x="' + (xBase + barW + 2) + '" y="' + (H - PAD - barH) + '" width="' + (barW - 1) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.5"/>');
      svg.push('<text x="' + (xBase + barW + 2 + barW/2) + '" y="' + (H - PAD - barH - 4) + '" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">' + fwd + '</text>');
    }
    svg.push('<text x="' + (PAD + i * groupW + groupW/2) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + '</text>');
    svg.push('<text x="' + (PAD + i * groupW + groupW/2) + '" y="' + (H - PAD + 32) + '" text-anchor="middle" fill="' + meta.color + '" font-size="11" font-weight="600">' + meta.short + '</text>');
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 2: Market cap sorted bar */
function renderMcapChart() {
  const c = document.getElementById('mcap-chart');
  c.innerHTML = '';
  const W = 480, H = 360;
  const sorted = TICKER_ORDER.map(t => ({ t, mcap: getMetric(t, 'market_cap_usd_b') || 0 })).sort((a,b) => b.mcap - a.mcap);
  const max = sorted[0].mcap;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Market Cap (USD)</text>');
  let yOff = 50;
  for (const s of sorted) {
    const meta = TICKER_META[s.t];
    const w = (s.mcap / max) * 320;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    svg.push('<rect x="100" y="' + (yOff - 11) + '" width="' + w + '" height="14" fill="' + meta.color + '" opacity="0.85" rx="2"/>');
    const lbl = s.mcap >= 1000 ? '$' + (s.mcap/1000).toFixed(2) + 'T' : '$' + s.mcap + 'B';
    svg.push('<text x="' + (105 + w) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="10" font-weight="600">' + lbl + '</text>');
    yOff += 30;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 3: AI revenue share + 1Y return */
function renderAIRevChart() {
  const c = document.getElementById('airev-chart');
  c.innerHTML = '';
  const W = 480, H = 360;
  const sorted = TICKER_ORDER.map(t => ({ t, share: getMetric(t, 'ai_revenue_share') || 0, ret: getMetric(t, 'stock_return_1y') || 0 })).sort((a,b) => b.share - a.share);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">AI Revenue Share + 1Y Stock Return</text>');
  let yOff = 50;
  for (const s of sorted) {
    const meta = TICKER_META[s.t];
    const w1 = (s.share / 100) * 180;
    const w2 = (s.ret / 100) * 180;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    // AI share (left, into middle)
    svg.push('<rect x="100" y="' + (yOff - 11) + '" width="' + w1 + '" height="11" fill="' + meta.color + '" opacity="0.85"/>');
    svg.push('<text x="' + (105 + w1) + '" y="' + (yOff - 2) + '" fill="currentColor" font-size="9" font-weight="600">AI ' + s.share + '%</text>');
    // 1Y return (below)
    svg.push('<rect x="100" y="' + (yOff + 1) + '" width="' + w2 + '" height="11" fill="' + meta.color + '" opacity="0.5"/>');
    svg.push('<text x="' + (105 + w2) + '" y="' + (yOff + 10) + '" fill="currentColor" font-size="9" font-weight="600">1Y +' + s.ret + '%</text>');
    yOff += 30;
  }
  svg.push('<text x="20" y="' + (H - 8) + '" fill="currentColor" font-size="10" opacity="0.7">深色 = AI 暴險占比　淺色 = 1 年股價報酬</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 4: Forward P/E vs AI revenue share scatter */
function renderScatterChart() {
  const c = document.getElementById('scatter-chart');
  c.innerHTML = '';
  const W = 480, H = 360, PAD = 50;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Forward P/E vs AI Revenue Share</text>');
  // Axes
  svg.push('<line x1="' + PAD + '" y1="' + (H - PAD) + '" x2="' + (W - PAD) + '" y2="' + (H - PAD) + '" stroke="currentColor" stroke-opacity="0.4"/>');
  svg.push('<line x1="' + PAD + '" y1="' + PAD + '" x2="' + PAD + '" y2="' + (H - PAD) + '" stroke="currentColor" stroke-opacity="0.4"/>');
  // X = AI share (0-100%)
  for (let i = 0; i <= 4; i++) {
    const x = PAD + i * (W - 2 * PAD) / 4;
    svg.push('<text x="' + x + '" y="' + (H - PAD + 14) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">' + (25 * i) + '%</text>');
  }
  // Y = forward PE (0-40)
  const yMax = 40;
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    svg.push('<text x="' + (PAD - 6) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">' + (yMax / 4 * i).toFixed(0) + 'x</text>');
  }
  for (const t of TICKER_ORDER) {
    const meta = TICKER_META[t];
    const share = getMetric(t, 'ai_revenue_share');
    const fwd = getMetric(t, 'forward_pe');
    if (!share || !fwd) continue;
    const x = PAD + (share / 100) * (W - 2 * PAD);
    const y = H - PAD - (Math.min(fwd, yMax) / yMax) * (H - 2 * PAD);
    svg.push('<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + meta.color + '" opacity="0.9" stroke="white" stroke-width="1.5"/>');
    svg.push('<text x="' + (x + 10) + '" y="' + (y + 4) + '" fill="currentColor" font-size="10" font-weight="600">' + meta.short + ' ' + fwd + 'x</text>');
  }
  svg.push('<text x="' + (W/2) + '" y="' + (H - 6) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.85">→ AI Revenue Share (越右越純 AI play)</text>');
  svg.push('<text x="14" y="' + (H/2) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.85" transform="rotate(-90 14 ' + (H/2) + ')">↑ Forward P/E (越上越貴)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}


/* Chart 5: Annual Revenue Trend 2023-2026 (10 lines) */
function renderRevenueTrendChart() {
  const c = document.getElementById('revenue-chart');
  if (!c) return;
  c.innerHTML = '';
  const W = 800, H = 400, PAD = 60;
  const years = [2023, 2024, 2025, 2026];
  const yMax = 900; // USD B
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">Annual Revenue Trend (USD Billion, 2023-2026)</text>');
  // Y axis (log-ish jumps)
  const yTicks = [0, 50, 100, 200, 400, 800];
  for (const v of yTicks) {
    const y = H - PAD - (v / yMax) * (H - 2 * PAD);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.12"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">$' + v + 'B</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  for (const t of TICKER_ORDER) {
    const meta = TICKER_META[t];
    const points = years.map((y, i) => {
      const r = DATA.find(x => x.ticker === t && x.category === 'annual_revenue' && x.year === y);
      if (!r || r.value == null) return null;
      return [PAD + i * xStep, H - PAD - (Math.min(r.value, yMax) / yMax) * (H - 2 * PAD), r.value];
    });
    const path = points.filter(p => p).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + meta.color + '" stroke-width="2" opacity="0.85"/>');
    for (const p of points) {
      if (!p) continue;
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="' + meta.color + '"/>');
    }
    // Endpoint label
    const last = points[points.length - 1];
    if (last) svg.push('<text x="' + (last[0] + 6) + '" y="' + (last[1] + 4) + '" fill="' + meta.color + '" font-size="10" font-weight="600">' + meta.short + ' $' + (last[2] >= 1000 ? (last[2]/1000).toFixed(1) + 'T' : last[2] + 'B') + '</text>');
  }
  // X axis years
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  svg.push('<text x="' + (W/2) + '" y="' + (H - 8) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">注意：Y 軸非線性比例（使 small caps 與 mega-caps 都可視）</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 6: Revenue CAGR 2023-2026 ranking */
function renderCAGRChart() {
  const c = document.getElementById('cagr-chart');
  if (!c) return;
  c.innerHTML = '';
  const W = 480, H = 380;
  const cagrs = TICKER_ORDER.map(t => {
    const r = DATA.find(x => x.ticker === t && x.category === 'revenue_cagr_2023_2026');
    return { t, val: r ? r.value : 0 };
  }).sort((a, b) => b.val - a.val);
  const max = cagrs[0].val;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Revenue CAGR 2023-2026 (%/year)</text>');
  let yOff = 50;
  for (const c2 of cagrs) {
    const meta = TICKER_META[c2.t];
    const w = (c2.val / max) * 320;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    svg.push('<rect x="100" y="' + (yOff - 11) + '" width="' + w + '" height="14" fill="' + meta.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (105 + w) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">' + c2.val + '%</text>');
    yOff += 30;
  }
  svg.push('<text x="20" y="' + (H - 8) + '" fill="currentColor" font-size="10" opacity="0.7">3 年年化成長率，越高越快</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    const ai = TICKER_ORDER.indexOf(a.ticker), bi = TICKER_ORDER.indexOf(b.ticker);
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = TICKER_META[r.ticker] || { color: '#888', short: r.ticker, flag: '🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + sanitize(meta.short) + '</span></td>',
      '<td>' + sanitize(r.company || '') + '</td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 70) + ((r.notes || '').length > 70 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : '—') + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats();
  renderPEChart();
  renderMcapChart();
  renderAIRevChart();
  renderScatterChart();
  renderRevenueTrendChart();
  renderCAGRChart();
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ['ticker', 'grade'].forEach(k => {
        if (btn.dataset[k] !== undefined) {
          state.filters[k] = btn.dataset[k];
          document.querySelectorAll('[data-' + k + ']').forEach(b => b.classList.toggle('active', b === btn));
        }
      });
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

document.addEventListener('DOMContentLoaded', () => { wireFilters(); wireTheme(); renderAll(); });
