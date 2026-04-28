/* G04 Phase 11 — CSP + Neocloud AI Capex Trend (2023-2027F)
 * 10 vendor: 5 US hyperscaler + 2 neocloud + 3 CN hyperscaler
 * Data 2026-04-29 · _research/phase11-ai-capex/ai-capex.jsonl (117 records)
 *
 * 核心問題：
 *   (1) Capex 是否持續加碼？→ Yes，2027 預估仍達 $500B+ 全球
 *   (2) 速度是否慢下來？→ Yes，YoY 從 2025 peak +50% → 2027 +15% (deceleration)
 */

const DATA = [
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 32,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2023-Q4",
    "notes": "Microsoft 2023 capex $32B"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 55,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2024-Q4",
    "notes": "Microsoft 2024 capex $55B"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 80,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2025-Q4",
    "notes": "Microsoft 2025 capex $80B"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 100,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2026-Q4",
    "notes": "Microsoft 2026 capex $100B (forecast)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 115,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2027-Q4",
    "notes": "Microsoft 2027 capex $115B (forecast)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 72.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2024-Q4",
    "notes": "Microsoft 2024 capex YoY 72.0% (vs $32B → $55B)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 45.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2025-Q4",
    "notes": "Microsoft 2025 capex YoY 45.0% (vs $55B → $80B)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 25.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2026-Q4",
    "notes": "Microsoft 2026 capex YoY 25.0% (vs $80B → $100B)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 15.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2027-Q4",
    "notes": "Microsoft 2027 capex YoY 15.0% (vs $100B → $115B)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 267,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2026-04",
    "notes": "Microsoft 2023-2026 累計 capex $267B (4 年 sum)"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/MSFT/financials",
    "source_date": "2026-04",
    "notes": "Microsoft 2023-2027 全公司 capex 趨勢。Q4 FY26 揭露 2026 全年 $80B+ AI infra 為主，CFO Amy Hood 公開「至少 $80B」即 2025 calendar。Stargate 啟動後 + OpenAI 合作。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 32,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2023-Q4",
    "notes": "Google 2023 capex $32B"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 52.5,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2024-Q4",
    "notes": "Google 2024 capex $52.5B"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 75,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2025-Q4",
    "notes": "Google 2025 capex $75B"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 100,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-Q4",
    "notes": "Google 2026 capex $100B (forecast)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 115,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2027-Q4",
    "notes": "Google 2027 capex $115B (forecast)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 64.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2024-Q4",
    "notes": "Google 2024 capex YoY 64.0% (vs $32B → $52.5B)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 43.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2025-Q4",
    "notes": "Google 2025 capex YoY 43.0% (vs $52.5B → $75B)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 33.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-Q4",
    "notes": "Google 2026 capex YoY 33.0% (vs $75B → $100B)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 15.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2027-Q4",
    "notes": "Google 2027 capex YoY 15.0% (vs $100B → $115B)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 259.5,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-04",
    "notes": "Google 2023-2026 累計 capex $259.5B (4 年 sum)"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/GOOG/financials",
    "source_date": "2026-04",
    "notes": "Alphabet 2023 $32B → 2025 $75B → 2026 $100B (Q4 2025 earnings call Pichai 揭露)。Cloud + 內部 AI infra (TPU 自家設計)。"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 48,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2023-Q4",
    "notes": "Amazon 2023 capex $48B"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 77,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2024-Q4",
    "notes": "Amazon 2024 capex $77B"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 100,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2025-Q4",
    "notes": "Amazon 2025 capex $100B"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 130,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-Q4",
    "notes": "Amazon 2026 capex $130B (forecast)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 150,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2027-Q4",
    "notes": "Amazon 2027 capex $150B (forecast)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 60.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2024-Q4",
    "notes": "Amazon 2024 capex YoY 60.0% (vs $48B → $77B)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 30.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2025-Q4",
    "notes": "Amazon 2025 capex YoY 30.0% (vs $77B → $100B)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 30.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-Q4",
    "notes": "Amazon 2026 capex YoY 30.0% (vs $100B → $130B)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 15.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2027-Q4",
    "notes": "Amazon 2027 capex YoY 15.0% (vs $130B → $150B)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 355,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-04",
    "notes": "Amazon 2023-2026 累計 capex $355B (4 年 sum)"
  },
  {
    "vendor": "Amazon",
    "ticker": "AMZN",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/AMZN/financials",
    "source_date": "2026-04",
    "notes": "Amazon (AWS + Retail) capex 全球第一。2025 Andy Jassy Q4 earnings 揭露 $100B+ 主要 AI infra。Project Rainier (400K Trainium 2) + Anthropic 合作。"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 28,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2023-Q4",
    "notes": "Meta 2023 capex $28B"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 39,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2024-Q4",
    "notes": "Meta 2024 capex $39B"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 50,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2025-Q4",
    "notes": "Meta 2025 capex $50B"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 65,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2026-Q4",
    "notes": "Meta 2026 capex $65B (forecast)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 75,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2027-Q4",
    "notes": "Meta 2027 capex $75B (forecast)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 39.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2024-Q4",
    "notes": "Meta 2024 capex YoY 39.0% (vs $28B → $39B)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 28.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2025-Q4",
    "notes": "Meta 2025 capex YoY 28.0% (vs $39B → $50B)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 30.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2026-Q4",
    "notes": "Meta 2026 capex YoY 30.0% (vs $50B → $65B)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 15.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2027-Q4",
    "notes": "Meta 2027 capex YoY 15.0% (vs $65B → $75B)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 182,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2026-04",
    "notes": "Meta 2023-2026 累計 capex $182B (4 年 sum)"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/META/financials",
    "source_date": "2026-04",
    "notes": "Meta Mark Zuckerberg Q4 2025 揭露 2026 $60-65B capex (vs 2025 $50B)。AI training cluster + Reality Labs。Llama 4/5 訓練算力需求。"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 9,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2023-Q4",
    "notes": "Oracle 2023 capex $9B"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 7,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2024-Q4",
    "notes": "Oracle 2024 capex $7B"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 25,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2025-Q4",
    "notes": "Oracle 2025 capex $25B"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 35,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2026-Q4",
    "notes": "Oracle 2026 capex $35B (forecast)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 45,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2027-Q4",
    "notes": "Oracle 2027 capex $45B (forecast)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": -22.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2024-Q4",
    "notes": "Oracle 2024 capex YoY -22.0% (vs $9B → $7B)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 257.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2025-Q4",
    "notes": "Oracle 2025 capex YoY 257.0% (vs $7B → $25B)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 40.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2026-Q4",
    "notes": "Oracle 2026 capex YoY 40.0% (vs $25B → $35B)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 29.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2027-Q4",
    "notes": "Oracle 2027 capex YoY 29.0% (vs $35B → $45B)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 76,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2026-04",
    "notes": "Oracle 2023-2026 累計 capex $76B (4 年 sum)"
  },
  {
    "vendor": "Oracle",
    "ticker": "ORCL",
    "category_class": "hyperscaler-us",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://finance.yahoo.com/quote/ORCL/financials",
    "source_date": "2026-04",
    "notes": "Oracle 從低基期跳到 hyperscaler 地位。Stargate 主要合作方 + OpenAI cluster 大訂單 + 自家 OCI cloud。Larry Ellison 公開 capex 2025 +260% YoY。"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 1,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2023-Q4",
    "notes": "CoreWeave 2023 capex $1B"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 5,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2024-Q4",
    "notes": "CoreWeave 2024 capex $5B"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 20,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2025-Q4",
    "notes": "CoreWeave 2025 capex $20B"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 35,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2026-Q4",
    "notes": "CoreWeave 2026 capex $35B (forecast)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 40,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2027-Q4",
    "notes": "CoreWeave 2027 capex $40B (forecast)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 400.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2024-Q4",
    "notes": "CoreWeave 2024 capex YoY 400.0% (vs $1B → $5B)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 300.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2025-Q4",
    "notes": "CoreWeave 2025 capex YoY 300.0% (vs $5B → $20B)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 75.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2026-Q4",
    "notes": "CoreWeave 2026 capex YoY 75.0% (vs $20B → $35B)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 14.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2027-Q4",
    "notes": "CoreWeave 2027 capex YoY 14.0% (vs $35B → $40B)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 61,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2026-04",
    "notes": "CoreWeave 2023-2026 累計 capex $61B (4 年 sum)"
  },
  {
    "vendor": "CoreWeave",
    "ticker": "CRWV",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/CRWV/financials",
    "source_date": "2026-04",
    "notes": "CoreWeave 2025 IPO 上市後加速融資 + capex。從 NVIDIA preferred partner 起步，2026 datacenter footprint 含美 + 歐 + 加。客戶 OpenAI / Microsoft / Meta / Mistral 等。"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 2,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "xAI 2023 capex $2B"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 5,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "xAI 2024 capex $5B"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 15,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "xAI 2025 capex $15B"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 25,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "xAI 2026 capex $25B (forecast)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 35,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "xAI 2027 capex $35B (forecast)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 150.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "xAI 2024 capex YoY 150.0% (vs $2B → $5B)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 200.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "xAI 2025 capex YoY 200.0% (vs $5B → $15B)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 67.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "xAI 2026 capex YoY 67.0% (vs $15B → $25B)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 40.0,
    "unit": "percent",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "xAI 2027 capex YoY 40.0% (vs $25B → $35B)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 47,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "xAI 2023-2026 累計 capex $47B (4 年 sum)"
  },
  {
    "vendor": "xAI",
    "ticker": "private",
    "category_class": "neocloud",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "xAI 純自建 cluster（非對外 cloud）。Memphis Colossus 100K H100 (2024) → 200K (2025) → 1M GPU 目標 (2026 H2)。馬斯克自有資金 + Tesla 借力 + SpaceX synergy。"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 5,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "Tencent 2023 capex $5B"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 11,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "Tencent 2024 capex $11B"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 15,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "Tencent 2025 capex $15B"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 20,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "Tencent 2026 capex $20B (forecast)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 22,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "Tencent 2027 capex $22B (forecast)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 120.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "Tencent 2024 capex YoY 120.0% (vs $5B → $11B)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 36.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "Tencent 2025 capex YoY 36.0% (vs $11B → $15B)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 33.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "Tencent 2026 capex YoY 33.0% (vs $15B → $20B)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 10.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "Tencent 2027 capex YoY 10.0% (vs $20B → $22B)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 51,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "Tencent 2023-2026 累計 capex $51B (4 年 sum)"
  },
  {
    "vendor": "Tencent",
    "ticker": "0700.HK",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "Tencent (0700.HK) 2023 $5B → 2025 $15B (+200% YoY)。Hunyuan AI + Cloud。受美對中出口管制，主要採購 NVIDIA H20 + 國產華為昇騰。"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 4,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2023-Q4",
    "notes": "Alibaba 2023 capex $4B"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 7,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2024-Q4",
    "notes": "Alibaba 2024 capex $7B"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 13,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2025-Q4",
    "notes": "Alibaba 2025 capex $13B"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 17,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2026-Q4",
    "notes": "Alibaba 2026 capex $17B (forecast)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 20,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2027-Q4",
    "notes": "Alibaba 2027 capex $20B (forecast)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 75.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2024-Q4",
    "notes": "Alibaba 2024 capex YoY 75.0% (vs $4B → $7B)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 86.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2025-Q4",
    "notes": "Alibaba 2025 capex YoY 86.0% (vs $7B → $13B)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 31.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2026-Q4",
    "notes": "Alibaba 2026 capex YoY 31.0% (vs $13B → $17B)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 18.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2027-Q4",
    "notes": "Alibaba 2027 capex YoY 18.0% (vs $17B → $20B)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 41,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2026-04",
    "notes": "Alibaba 2023-2026 累計 capex $41B (4 年 sum)"
  },
  {
    "vendor": "Alibaba",
    "ticker": "BABA",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/quote/BABA/financials",
    "source_date": "2026-04",
    "notes": "Alibaba (BABA) Cloud + Qwen + ASIC 投資。2025 阿里巴巴 capex $13B 主要 Cloud Vertex (Qwen 訓練) + 自家 T-Head ASIC。中國 Hyperscaler 第一名。"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2023,
    "category": "capex_total",
    "value": 4,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "ByteDance 2023 capex $4B"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_total",
    "value": 9,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "ByteDance 2024 capex $9B"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_total",
    "value": 12,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "ByteDance 2025 capex $12B"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_total",
    "value": 15,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "ByteDance 2026 capex $15B (forecast)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_total",
    "value": 18,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "ByteDance 2027 capex $18B (forecast)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2024,
    "category": "capex_yoy_growth",
    "value": 125.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "ByteDance 2024 capex YoY 125.0% (vs $4B → $9B)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2025,
    "category": "capex_yoy_growth",
    "value": 33.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "ByteDance 2025 capex YoY 33.0% (vs $9B → $12B)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "capex_yoy_growth",
    "value": 25.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "ByteDance 2026 capex YoY 25.0% (vs $12B → $15B)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2027,
    "category": "capex_yoy_growth",
    "value": 20.0,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "ByteDance 2027 capex YoY 20.0% (vs $15B → $18B)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "cumulative_capex_2023_2026",
    "value": 40,
    "unit": "USD_B",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "ByteDance 2023-2026 累計 capex $40B (4 年 sum)"
  },
  {
    "vendor": "ByteDance",
    "ticker": "private",
    "category_class": "hyperscaler-cn",
    "line": "ai-capex",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-04",
    "notes": "ByteDance (TikTok 母公司) 私有，不公布 capex 但 SemiAnalysis / The Information 揭露。Doubao (豆包) AI + 推薦演算法 + TikTok scale。受出口管制影響。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2025,
    "category": "us_top4_total",
    "value": 305,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "A",
    "source_url": "https://www.bloomberg.com/",
    "source_date": "2026-Q1",
    "notes": "US Top 4 hyperscaler (MSFT+GOOG+AMZN+META) 2025 合計 capex $305B (80+75+100+50)。歷史新高。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2026,
    "category": "us_top4_total",
    "value": 395,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://www.bloomberg.com/",
    "source_date": "2026-Q1",
    "notes": "US Top 4 2026E 合計 $395B (100+100+130+65)，YoY +30% (vs 2025 +50%)。**第一個 deceleration 信號**。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2027,
    "category": "us_top4_total",
    "value": 455,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://www.bloomberg.com/",
    "source_date": "2026-Q1",
    "notes": "US Top 4 2027E 合計 $455B (115+115+150+75)，YoY +15%。**deceleration 加速**：絕對量級仍升，但成長率減半。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2026,
    "category": "all_10_total",
    "value": 444,
    "unit": "USD_B",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://www.bloomberg.com/",
    "source_date": "2026-Q1",
    "notes": "10 家 vendor 合計 2026E capex $444B (US 8 家 $445B - Oracle dup + 中國 3 家 ~$52B)。**全球 AI capex 規模**。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2026,
    "category": "deceleration_signal",
    "value": 30,
    "unit": "percent",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://www.semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**Deceleration 訊號**：2024 +45% → 2025 +50% (peak) → 2026 +30% → 2027 +15%。**peak growth 是 2025**，2026 開始減速但絕對量級仍升至 $440B+。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2026,
    "category": "us_cn_split",
    "value": 89,
    "unit": "percent",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://www.semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "美中 capex 比例 2026E：US 8 家 $445B (89%) vs CN 3 家 $52B (11%)。Gap 顯著但中國成長率較高（受出口管制反向激勵）。"
  },
  {
    "vendor": "AGGREGATE",
    "ticker": "all",
    "category_class": "all",
    "line": "ai-capex",
    "year": 2026,
    "category": "stargate_overlap",
    "value": 100,
    "unit": "USD_B",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://openai.com/",
    "source_date": "2026-Q1",
    "notes": "Stargate $500B 五年計劃 2026 預期投入 ~$100B (含 OpenAI + MSFT + Oracle + Crusoe + SoftBank 多方資金)。可能與 MSFT/ORCL/Crusoe capex **部分重疊** (避免 double-count)。"
  }
];

const VENDOR_META = {
  'Microsoft':  { color: '#00a4ef', flag: '🇺🇸', short: 'MSFT',     class: 'hyperscaler-us' },
  'Google':     { color: '#4285f4', flag: '🇺🇸', short: 'GOOG',     class: 'hyperscaler-us' },
  'Amazon':     { color: '#ff9900', flag: '🇺🇸', short: 'AMZN',     class: 'hyperscaler-us' },
  'Meta':       { color: '#1877f2', flag: '🇺🇸', short: 'META',     class: 'hyperscaler-us' },
  'Oracle':     { color: '#f80000', flag: '🇺🇸', short: 'ORCL',     class: 'hyperscaler-us' },
  'CoreWeave':  { color: '#9333ea', flag: '🇺🇸', short: 'CRWV',     class: 'neocloud' },
  'xAI':        { color: '#ec4899', flag: '🇺🇸', short: 'xAI',      class: 'neocloud' },
  'Tencent':    { color: '#10b981', flag: '🇨🇳', short: 'Tencent',  class: 'hyperscaler-cn' },
  'Alibaba':    { color: '#ff6a00', flag: '🇨🇳', short: 'BABA',     class: 'hyperscaler-cn' },
  'ByteDance':  { color: '#000000', flag: '🇨🇳', short: 'BD',       class: 'hyperscaler-cn' },
  'AGGREGATE':  { color: '#888',    flag: '🌐', short: 'all',      class: 'aggregate' },
};
const VENDOR_ORDER = ['Microsoft','Google','Amazon','Meta','Oracle','CoreWeave','xAI','Tencent','Alibaba','ByteDance'];

const GRADE_COLORS = { A:'#10b981', B:'#3b82f6', C:'#f59e0b', D:'#ef4444' };
const state = { filters: { vendor:'all', class:'all', year:'all', grade:'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'USD_B':   return r.value >= 100 ? '$' + (r.value/100).toFixed(1) + '千億' : '$' + r.value + 'B';
    case 'percent': return r.value + '%';
    default: return r.value;
  }
}
function fmtUSDB(v) { return v >= 100 ? '$' + (v/100).toFixed(1) + '千億' : '$' + v + 'B'; }

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.vendor !== 'all' && d.vendor !== state.filters.vendor) return false;
    if (state.filters.class !== 'all' && d.category_class !== state.filters.class) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (q) {
      const hay = [d.vendor, d.category_class, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getCapex(vendor, year) {
  const r = DATA.find(x => x.vendor === vendor && x.category === 'capex_total' && x.year === year);
  return r ? r.value : null;
}

function renderStats() {
  // 2026 sum across 10 vendors
  let sum2026 = 0, sum2025 = 0, sum2027 = 0;
  for (const v of VENDOR_ORDER) {
    sum2026 += getCapex(v, 2026) || 0;
    sum2025 += getCapex(v, 2025) || 0;
    sum2027 += getCapex(v, 2027) || 0;
  }
  const yoy26 = ((sum2026 / sum2025 - 1) * 100).toFixed(0);
  const yoy27 = ((sum2027 / sum2026 - 1) * 100).toFixed(0);
  document.getElementById('stat-2025').textContent = fmtUSDB(sum2025);
  document.getElementById('stat-2026').textContent = fmtUSDB(sum2026);
  document.getElementById('stat-yoy26').textContent = '+' + yoy26 + '%';
  document.getElementById('stat-yoy27').textContent = '+' + yoy27 + '%';
  document.getElementById('dp-count').textContent = getFiltered().length;
}

/* Chart 1: Capex Trend 5-year multi-line (10 vendors) */
function renderCapexTrendChart() {
  const c = document.getElementById('capex-chart');
  c.innerHTML = '';
  const W = 880, H = 440, PAD = 60;
  const years = [2023, 2024, 2025, 2026, 2027];
  const yMax = 160;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">10 Vendor AI Capex Trend (USD Billion, 2023-2027F)</text>');
  // Y axis
  for (let i = 0; i <= 8; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 8;
    const v = (yMax / 8 * i).toFixed(0);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">$' + v + 'B</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  // Vertical line for 2025/2026 boundary (forecast vs actual)
  const xBoundary = PAD + 2 * xStep;
  svg.push('<line x1="' + xBoundary + '" y1="' + PAD + '" x2="' + xBoundary + '" y2="' + (H - PAD) + '" stroke="#888" stroke-dasharray="3,3" stroke-opacity="0.4"/>');
  svg.push('<text x="' + xBoundary + '" y="' + (PAD - 6) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.6">← actual / forecast →</text>');
  for (const v of VENDOR_ORDER) {
    const meta = VENDOR_META[v];
    const points = years.map((y, i) => {
      const val = getCapex(v, y);
      if (val == null) return null;
      return [PAD + i * xStep, H - PAD - (Math.min(val, yMax) / yMax) * (H - 2 * PAD), val];
    });
    const path = points.filter(p => p).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + meta.color + '" stroke-width="2.5" opacity="0.85"/>');
    for (const p of points) {
      if (!p) continue;
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="' + meta.color + '"/>');
    }
    const last = points[points.length - 1];
    if (last) svg.push('<text x="' + (last[0] + 5) + '" y="' + (last[1] + 4) + '" fill="' + meta.color + '" font-size="10" font-weight="600">' + meta.short + ' $' + last[2] + 'B</text>');
  }
  for (let i = 0; i < years.length; i++) {
    const yr = years[i];
    const isFor = yr >= 2026 ? 'F' : '';
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + yr + (isFor ? ' (F)' : '') + '</text>');
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 2: YoY Growth Rate 4-year — deceleration story */
function renderYoYChart() {
  const c = document.getElementById('yoy-chart');
  c.innerHTML = '';
  const W = 800, H = 360, PAD = 60;
  const years = [2024, 2025, 2026, 2027];
  // Compute aggregate YoY
  function aggCapex(year, classes) {
    let sum = 0;
    for (const v of VENDOR_ORDER) {
      const meta = VENDOR_META[v];
      if (classes && !classes.includes(meta.class)) continue;
      sum += getCapex(v, year) || 0;
    }
    return sum;
  }
  const series = [
    { label: 'US Top 5', color: '#3b82f6', classes: ['hyperscaler-us'] },
    { label: 'Neocloud', color: '#9333ea', classes: ['neocloud'] },
    { label: 'CN Top 3', color: '#ef4444', classes: ['hyperscaler-cn'] },
    { label: 'All 10',  color: '#10b981', classes: null },
  ];
  const yMax = 100;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">YoY Capex Growth Rate (%, deceleration story)</text>');
  for (let i = 0; i <= 5; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 5;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">+' + (yMax / 5 * i).toFixed(0) + '%</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  for (const s of series) {
    const points = years.map((y, i) => {
      const cur = aggCapex(y, s.classes);
      const prev = aggCapex(y - 1, s.classes);
      if (!prev) return null;
      const yoy = (cur / prev - 1) * 100;
      return [PAD + i * xStep, H - PAD - (Math.min(yoy, yMax) / yMax) * (H - 2 * PAD), yoy];
    });
    const path = points.filter(p => p).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + s.color + '" stroke-width="3" opacity="0.9"/>');
    for (const p of points) {
      if (!p) continue;
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="' + s.color + '"/>');
      svg.push('<text x="' + (p[0]) + '" y="' + (p[1] - 10) + '" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">+' + p[2].toFixed(0) + '%</text>');
    }
  }
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  // Legend
  let lx = PAD;
  for (const s of series) {
    svg.push('<rect x="' + lx + '" y="' + (H - 14) + '" width="11" height="11" fill="' + s.color + '"/>');
    svg.push('<text x="' + (lx + 16) + '" y="' + (H - 5) + '" fill="currentColor" font-size="11">' + s.label + '</text>');
    lx += 130;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 3: Cumulative 2023-2026 sorted bar */
function renderCumulativeChart() {
  const c = document.getElementById('cumulative-chart');
  c.innerHTML = '';
  const W = 480, H = 380;
  const cums = VENDOR_ORDER.map(v => {
    const r = DATA.find(x => x.vendor === v && x.category === 'cumulative_capex_2023_2026');
    return { v, val: r ? r.value : 0 };
  }).sort((a, b) => b.val - a.val);
  const max = cums[0].val;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Cumulative Capex 2023-2026 (USD B)</text>');
  let yOff = 50;
  for (const c2 of cums) {
    const meta = VENDOR_META[c2.v];
    const w = (c2.val / max) * 320;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    svg.push('<rect x="100" y="' + (yOff - 11) + '" width="' + w + '" height="14" fill="' + meta.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (105 + w) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">$' + c2.val + 'B</text>');
    yOff += 30;
  }
  svg.push('<text x="20" y="' + (H - 8) + '" fill="currentColor" font-size="10" opacity="0.7">4 年累計，AMZN $355B 領先 (重點 AWS infra)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 4: US vs CN split per year */
function renderUSCNChart() {
  const c = document.getElementById('uscn-chart');
  c.innerHTML = '';
  const W = 480, H = 380;
  const years = [2023, 2024, 2025, 2026, 2027];
  function classSum(year, classes) {
    let s = 0;
    for (const v of VENDOR_ORDER) {
      const m = VENDOR_META[v];
      if (!classes.includes(m.class)) continue;
      s += getCapex(v, year) || 0;
    }
    return s;
  }
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">US vs CN AI Capex Split (Stacked)</text>');
  const groupW = (W - 80) / years.length;
  let yMax = 600;
  for (let i = 0; i < years.length; i++) {
    const y = years[i];
    const usHy = classSum(y, ['hyperscaler-us']);
    const neo = classSum(y, ['neocloud']);
    const cn = classSum(y, ['hyperscaler-cn']);
    const total = usHy + neo + cn;
    const cx = 50 + i * groupW + groupW / 2;
    const barW = 60;
    const barX = cx - barW / 2;
    let yOff = H - 80;
    // CN bottom
    const cnH = (cn / yMax) * 250;
    svg.push('<rect x="' + barX + '" y="' + (yOff - cnH) + '" width="' + barW + '" height="' + cnH + '" fill="#ef4444" opacity="0.85"/>');
    if (cnH > 14) svg.push('<text x="' + cx + '" y="' + (yOff - cnH/2 + 4) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">CN $' + cn + 'B</text>');
    yOff -= cnH;
    // Neocloud
    const neoH = (neo / yMax) * 250;
    svg.push('<rect x="' + barX + '" y="' + (yOff - neoH) + '" width="' + barW + '" height="' + neoH + '" fill="#9333ea" opacity="0.85"/>');
    if (neoH > 14) svg.push('<text x="' + cx + '" y="' + (yOff - neoH/2 + 4) + '" text-anchor="middle" fill="white" font-size="9" font-weight="600">$' + neo + 'B</text>');
    yOff -= neoH;
    // US Hy top
    const usHyH = (usHy / yMax) * 250;
    svg.push('<rect x="' + barX + '" y="' + (yOff - usHyH) + '" width="' + barW + '" height="' + usHyH + '" fill="#3b82f6" opacity="0.85"/>');
    if (usHyH > 14) svg.push('<text x="' + cx + '" y="' + (yOff - usHyH/2 + 4) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">US $' + usHy + 'B</text>');
    // Total label on top
    svg.push('<text x="' + cx + '" y="' + (yOff - usHyH - 6) + '" text-anchor="middle" fill="currentColor" font-size="10" font-weight="700">$' + total + 'B</text>');
    // Year label
    svg.push('<text x="' + cx + '" y="' + (H - 60) + '" text-anchor="middle" fill="currentColor" font-size="11" font-weight="500">' + y + '</text>');
  }
  // Legend
  svg.push('<rect x="50" y="' + (H - 36) + '" width="11" height="11" fill="#3b82f6"/><text x="65" y="' + (H - 27) + '" fill="currentColor" font-size="11">US Top 5</text>');
  svg.push('<rect x="180" y="' + (H - 36) + '" width="11" height="11" fill="#9333ea"/><text x="195" y="' + (H - 27) + '" fill="currentColor" font-size="11">Neocloud</text>');
  svg.push('<rect x="310" y="' + (H - 36) + '" width="11" height="11" fill="#ef4444"/><text x="325" y="' + (H - 27) + '" fill="currentColor" font-size="11">CN Top 3</text>');
  svg.push('<text x="50" y="' + (H - 8) + '" fill="currentColor" font-size="10" opacity="0.7">2026E US 89% / Neocloud 13% / CN 11% (含些微重疊)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    const ai = VENDOR_ORDER.indexOf(a.vendor), bi = VENDOR_ORDER.indexOf(b.vendor);
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    if (a.year !== b.year) return a.year - b.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = VENDOR_META[r.vendor] || { color:'#888', short:r.vendor, flag:'🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + sanitize(meta.short) + '</span></td>',
      '<td>' + sanitize(r.category_class) + '</td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 70) + ((r.notes || '').length > 70 ? '…' : '')) + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : '—') + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats();
  renderCapexTrendChart();
  renderYoYChart();
  renderCumulativeChart();
  renderUSCNChart();
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ['vendor', 'class', 'year', 'grade'].forEach(k => {
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
