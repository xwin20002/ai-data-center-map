/* G04 Phase 5 — LLM Market Share + Revenue Index
 * 3 anchor LLM providers: OpenAI / Anthropic / Google (Gemini)
 * Data generated 2026-04-26 · see _research/phase5-llm/llm-market.jsonl (61 records)
 *
 * Schema differs from phase 3/4 (supply chain reverse index):
 *   { provider, ticker, model_family, category, year, value, unit, hq_country, is_public, grade, ... }
 *
 * Visualization: SVG ARR trend chart (替代 Leaflet map) + B2C/B2B donut + market share bars
 */

/* ====== DATA (inline; 61 records) ====== */
const DATA = [
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_total",
    "year": 2023,
    "value": 2000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/openai-crosses-12-billion-arr-the-3-year-sprint-that-redefined-whats-possible-in-scaling-software/",
    "source_date": "2026-04",
    "notes": "2023 ARR $2B (CFO Sarah Friar 確認 Jan 2026)。基準年。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_total",
    "year": 2024,
    "value": 6000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/openai-crosses-12-billion-arr-the-3-year-sprint-that-redefined-whats-possible-in-scaling-software/",
    "source_date": "2026-04",
    "notes": "2024 ARR $6B (3x YoY，CFO 確認)。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_total",
    "year": 2025,
    "value": 20000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://futuresearch.ai/openai-revenue-forecast/",
    "source_date": "2026-04",
    "notes": "2025 全年 ARR $20B (3x YoY)。Mid-2025 $12B → Dec 2025 $20B。CFO Friar 公開確認。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_total",
    "year": 2026,
    "value": 29400,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence/",
    "source_date": "2026-04",
    "notes": "2026 全年 target $29.4B（OpenAI 官方公告）。Mar 2026 已達 $25B+ ARR ($2B/月)。B 級因為是 forecast。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_B2C",
    "year": 2024,
    "value": 2400,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2024 B2C ARR 估 $2.4B（ChatGPT Plus + Pro 訂閱）。佔 total ARR ~40%。Sacra estimate。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_B2C",
    "year": 2025,
    "value": 8000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 B2C ARR 估 $8B（佔 total ~40%）。50M+ paid consumer subscribers × ASP ~$160/year。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_B2B",
    "year": 2024,
    "value": 3600,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2024 B2B ARR 估 $3.6B（API + Enterprise + ChatGPT Business / Edu）。佔 ~60% total。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_B2B",
    "year": 2025,
    "value": 12000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 B2B ARR 估 $12B（API + Enterprise）。佔 ~60% total。Microsoft Azure 整合貢獻巨。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2024,
    "value": 300,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/chatgpt-statistics/",
    "source_date": "2026-04",
    "notes": "2024 末 ChatGPT MAU 估 300M（Sam Altman 公開揭露）。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2025,
    "value": 700,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/chatgpt-statistics/",
    "source_date": "2026-04",
    "notes": "2025 mid (Jul 2025) Weekly Active Users 700M（公司公告）。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2026,
    "value": 900,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/chatgpt-statistics/",
    "source_date": "2026-04",
    "notes": "2026 Mar Weekly Active Users 900M+（公司公告）。Largest consumer AI chatbot globally。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "paying_subscribers",
    "year": 2025,
    "value": 50,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 末 paid consumer subscribers 50M+（含 Plus + Pro + Edu + Business），最大付費 AI consumer base。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "market_share_consumer",
    "year": 2025,
    "value": 65,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://www.businessofapps.com/data/chatgpt-statistics/",
    "source_date": "2026-04",
    "notes": "2025 全球 AI chatbot consumer 流量市占 ~65%（Similarweb-based）。Gemini 21.5%, Claude ~5%, Grok 3-5%。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "market_share_enterprise",
    "year": 2025,
    "value": 35,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2025 enterprise API 市占估 ~35-40%（被 Anthropic 追上至 30%+）。2026 Q1 Anthropic 在 enterprise 反超 OpenAI（$30B vs $25B ARR）。Inflection point。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "subscription_pricing",
    "year": 2026,
    "value": 20,
    "unit": "USD_per_month",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://openai.com/chatgpt/pricing/",
    "source_date": "2026-04",
    "notes": "ChatGPT Plus $20/月 (since 2023)。Pro $200/月。Enterprise variable。Edu/Business $25-30/seat。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "model_release",
    "year": 2024,
    "value": 3,
    "unit": "models",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://openai.com/",
    "source_date": "2026-04",
    "notes": "2024 重大 model 發布：GPT-4o (May)、o1 (Sep)、Sora (Feb)。模型路徑從 GPT 走向 reasoning (o-series) 雙軸。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "model_release",
    "year": 2025,
    "value": 4,
    "unit": "models",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://openai.com/",
    "source_date": "2026-04",
    "notes": "2025 重大 model：o3 (Apr)、GPT-5 (Jul)、Sora 2 (Sep)、GPT-5.1 (Q4)。Reasoning-first 策略確立。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "valuation",
    "year": 2025,
    "value": 500000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 私募估值 $500B (post-money，Oct 2025 SoftBank 領投)。最高 AI 公司估值。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "ARR_total",
    "year": 2027,
    "value": null,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "D",
    "source_url": "https://futuresearch.ai/openai-revenue-forecast/",
    "source_date": "2026-04",
    "notes": "D 級：2027 ARR forecast。Bear $35B (Anthropic 進一步分食)。Base $50B (Stargate 計劃 + 雙位數 Hyperscaler 客戶簽約)。Bull $80B+ (AGI 商業化 + Sora 訂閱爆發)。",
    "agent": "agent-openai"
  },
  {
    "provider": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "model_family": "GPT",
    "line": "llm",
    "category": "compute_capex",
    "year": 2025,
    "value": 11000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 算力支出估 $11B（給 Microsoft Azure + 自建）。2026 Stargate 計劃 $500B 五年期，年均 ~$100B（含合作 Oracle/SoftBank/Crusoe）。Cost of revenue 結構性挑戰。",
    "agent": "agent-openai"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_total",
    "year": 2024,
    "value": 1000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/anthropic-just-hit-14-billion-in-arr-up-from-1-billion-just-14-months-ago/",
    "source_date": "2026-04",
    "notes": "2024 末 ARR $1B (基準年)。CEO Dario Amodei 公開揭露。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_total",
    "year": 2025,
    "value": 9000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2025 末 ARR $9B (9x YoY)。Aug 2025 $5B → Dec 2025 $9B。Claude Code + Enterprise API 雙軸驅動。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_total",
    "year": 2026,
    "value": 30000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/anthropic-just-hit-14-billion-in-arr-up-from-1-billion-just-14-months-ago/",
    "source_date": "2026-04",
    "notes": "2026 Mar ARR $30B (1,400% YoY)。一年內從 $1B → $30B 的 30x 成長軌跡。歷史最快 SaaS scaling。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_B2B",
    "year": 2025,
    "value": 8100,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2025 B2B ARR 估 $8.1B（佔 total ~90%）。Anthropic 為 enterprise-first 策略，B2B 占比顯著高於 OpenAI (60%)。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_B2B",
    "year": 2026,
    "value": 27000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2026 Mar B2B ARR 估 $27B（佔 total ~90%）。1,000+ enterprise customer 年付 >$1M。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_B2C",
    "year": 2025,
    "value": 900,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://www.getpanto.ai/blog/claude-ai-statistics",
    "source_date": "2026-04",
    "notes": "2025 B2C ARR 估 $900M（佔 total ~10%）。Claude.ai 訂閱（Plus $20/月、Max $100-200/月）。較 OpenAI 弱很多。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_B2C",
    "year": 2026,
    "value": 3000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://www.getpanto.ai/blog/claude-ai-statistics",
    "source_date": "2026-04",
    "notes": "2026 Mar B2C ARR 估 $3B（佔 total ~10%）。Consumer base 仍弱於 OpenAI 但雙位數百萬訂戶。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2026,
    "value": 50,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://www.getpanto.ai/blog/claude-ai-statistics",
    "source_date": "2026-04",
    "notes": "2026 Feb Claude.ai 月訪 287.93M（Semrush，含 unique + repeat），unique MAU 估 50M+。AI website 全球 #4。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "enterprise_customers",
    "year": 2026,
    "value": 300000,
    "unit": "businesses",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    "source_date": "2026-03",
    "notes": "2026 Mar enterprise customers 300,000+ businesses（公司公告）。包括 Fortune 500 多家。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "high_value_customers",
    "year": 2026,
    "value": 1000,
    "unit": "businesses",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/anthropic-just-hit-14-billion-in-arr-up-from-1-billion-just-14-months-ago/",
    "source_date": "2026-04",
    "notes": "2026 Apr 1,000+ enterprise 年付 >$1M（Series G announce 時 500，2 個月後 doubled）。深度 enterprise 滲透。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "market_share_consumer",
    "year": 2025,
    "value": 5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://www.businessofapps.com/data/chatgpt-statistics/",
    "source_date": "2026-04",
    "notes": "2025 全球 AI chatbot consumer 流量市占 ~5%（Similarweb-based）。被 ChatGPT 65% + Gemini 21.5% 壓制。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "market_share_enterprise",
    "year": 2025,
    "value": 32,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2025 enterprise API 市占估 ~32%。Bedrock + Vertex 雙路徑分銷強勢。Coding 是 killer use case。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "market_share_enterprise",
    "year": 2026,
    "value": 42,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2026 Mar enterprise API 市占反超 OpenAI 至 ~42%。Anthropic ARR $30B vs OpenAI $25B 為 inflection point。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "subscription_pricing",
    "year": 2026,
    "value": 20,
    "unit": "USD_per_month",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/pricing",
    "source_date": "2026-04",
    "notes": "Claude.ai Plus $20/月，Max $100-200/月，Team $25/seat，Enterprise variable。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "model_release",
    "year": 2024,
    "value": 3,
    "unit": "models",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/news",
    "source_date": "2026-04",
    "notes": "2024 重大 model：Claude 3 (Mar)、Claude 3.5 Sonnet (Jun)、Claude 3.5 Sonnet v2 + Haiku 3.5 (Oct)。AI 編碼能力突破。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "model_release",
    "year": 2025,
    "value": 4,
    "unit": "models",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/news",
    "source_date": "2026-04",
    "notes": "2025 重大 model：Claude 4 Sonnet (Feb)、Claude 4.5 (Aug)、Claude 4.6 (Nov)、Claude Code 1.0 (Aug 量產)。Reasoning + Code dual-axis。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "model_release",
    "year": 2026,
    "value": 1,
    "unit": "models",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/news",
    "source_date": "2026-04",
    "notes": "2026 Apr Claude 4.7 (Opus + Sonnet + Haiku)。預期 Q3 2026 Claude 5。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "valuation",
    "year": 2026,
    "value": 380000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    "source_date": "2026-03",
    "notes": "2026 Mar Series G $30B at $380B post-money valuation。第二高 AI 公司估值（vs OpenAI $500B）。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "ARR_total",
    "year": 2027,
    "value": null,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "D",
    "source_url": "https://www.saastr.com/anthropic-just-hit-14-billion-in-arr-up-from-1-billion-just-14-months-ago/",
    "source_date": "2026-04",
    "notes": "D 級：2027 ARR forecast。Bear $50B (成長收斂至 +60-80%)。Base $80B (持續 Hyperscaler 簽約 + Code 滲透)。Bull $120B+ (Reasoning + agentic 取代多 SaaS 工具)。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "model_family": "Claude",
    "line": "llm",
    "category": "killer_app",
    "year": 2026,
    "value": 2500,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.saastr.com/anthropic-just-hit-14-billion-in-arr-up-from-1-billion-just-14-months-ago/",
    "source_date": "2026-02",
    "notes": "Claude Code 2026 Feb ARR $2.5B（單一產品線）。從 2026 初翻倍以上。Coding agent 是 Anthropic 增速最快 driver。",
    "agent": "agent-anthropic"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2025,
    "value": 400,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://techcrunch.com/2026/02/04/googles-gemini-app-has-surpassed-750m-monthly-active-users/",
    "source_date": "2025-Q3",
    "notes": "2025 mid Gemini app MAU 400M。Q2 2025 announce 35x YoY usage growth。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "MAU_consumer",
    "year": 2026,
    "value": 750,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://techcrunch.com/2026/02/04/googles-gemini-app-has-surpassed-750m-monthly-active-users/",
    "source_date": "2026-02",
    "notes": "2026 Feb Gemini app MAU 超過 750M（Google Q4 2025 earnings 公告）。第二大 AI chatbot consumer app。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ai_overview_users",
    "year": 2026,
    "value": 2000,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-02",
    "notes": "2026 Q1 AI Overviews monthly users 2B+（Search 內整合，廣覆蓋）。是 Gemini 廣告 monetization 核心。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "enterprise_customers",
    "year": 2025,
    "value": 85000,
    "unit": "businesses",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2025-Q2",
    "notes": "2025 Q2 85,000+ enterprises building with Gemini（Google 公告）。35x YoY usage growth。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "enterprise_customers",
    "year": 2026,
    "value": 120000,
    "unit": "businesses",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 120,000+ enterprises 使用 Gemini，含 95% 的 top-20 全球 SaaS 公司。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "paid_seats",
    "year": 2026,
    "value": 8,
    "unit": "M_users",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 enterprise paid seats 8M+（Google AI Pro $20/月 + Ultra $250/月）。Workspace 整合 Gemini Advanced 後加速。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ARR_total",
    "year": 2025,
    "value": 5000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "2025 Gemini-attributable ARR 估 $5B（不獨立揭露）。含 Gemini Advanced 訂閱 + Vertex AI + Gemini API。比例: ~$1B Advanced + $4B Vertex/API。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ARR_total",
    "year": 2026,
    "value": 12000,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-04",
    "notes": "2026 Gemini-attributable ARR 估 $12B（推算）。Google Cloud Q4 2025 +34% YoY 大半 Gemini-driven。Workspace AI 升級貢獻。C 級因 Google 不揭露 standalone。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ARR_B2B",
    "year": 2026,
    "value": 9500,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-04",
    "notes": "2026 B2B Gemini ARR 估 $9.5B（Vertex AI + Gemini API + Workspace AI for enterprise）。佔 ~80% total。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ARR_B2C",
    "year": 2026,
    "value": 2500,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-04",
    "notes": "2026 B2C Gemini Advanced ARR 估 $2.5B（Google AI Pro/Ultra 訂閱）。AI Overviews 不收費但廣告收入間接 monetize。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "market_share_consumer",
    "year": 2025,
    "value": 5.7,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2025-01",
    "notes": "2025 Jan Gemini global GenAI chatbot traffic 市占 5.7%（Similarweb-based）。被 ChatGPT 壓制。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "market_share_consumer",
    "year": 2026,
    "value": 21.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-01",
    "notes": "2026 Jan Gemini chatbot traffic 市占 21.5%（一年成長 4x）。Google Search 整合 + Workspace 默認推升。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "market_share_enterprise",
    "year": 2025,
    "value": 18,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://medium.com/@david.j.sea/anthropic-just-passed-openai-in-revenue-here-is-why-it-matters-e3dd9bb04069",
    "source_date": "2026-04",
    "notes": "2025 enterprise API 市占估 ~18%（Vertex AI），Google Cloud 客戶基礎為主要 driver。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "subscription_pricing",
    "year": 2026,
    "value": 20,
    "unit": "USD_per_month",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://one.google.com/about/ai-premium/",
    "source_date": "2026-04",
    "notes": "Google AI Pro $20/月（Gemini Advanced），Google AI Ultra $250/月（Veo 視訊 + 高 quota）。Workspace Business AI 額外 $30/seat。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "model_release",
    "year": 2024,
    "value": 3,
    "unit": "models",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://blog.google/technology/ai/",
    "source_date": "2026-04",
    "notes": "2024 重大 model：Gemini 1.5 Pro/Flash (Feb)、Gemini 2.0 Flash (Dec)、Imagen 3。Google 從 Bard 改版到 Gemini 統一品牌。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "model_release",
    "year": 2025,
    "value": 4,
    "unit": "models",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://blog.google/technology/ai/",
    "source_date": "2026-04",
    "notes": "2025 重大 model：Gemini 2.5 Pro/Flash (Mar)、Gemini 3 Pro (Q4)、Veo 2/3、Imagen 4。Long context (1M-2M tokens) 領先優勢。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "model_release",
    "year": 2026,
    "value": 2,
    "unit": "models",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://tech-insider.org/google-gemini-750-million-users-march-2026-updates/",
    "source_date": "2026-04",
    "notes": "2026 重大 model：Gemini 3.1 Pro (Q1)、Gemini 3 Flash 預期。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "api_requests",
    "year": 2025,
    "value": 35,
    "unit": "B_per_month",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2025-03",
    "notes": "2025 Mar Gemini API 月請求數 35B。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "api_requests",
    "year": 2026,
    "value": 85,
    "unit": "B_per_month",
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-01",
    "notes": "2026 Jan Gemini API 月請求數 85B（+142% YoY）。OpenAI 月請求估 ~50B（互相超越時點）。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "competitive_advantage",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.businessofapps.com/data/google-gemini-statistics/",
    "source_date": "2026-04",
    "notes": "Google 獨特優勢：(1) 自家 TPU 算力垂直整合，無依賴 NVIDIA (cost advantage); (2) Search 25 年 distribution 默認推升 Gemini; (3) Workspace Suite 整合 (Gmail/Docs/Sheets); (4) Long context 1-2M tokens 業界領先。",
    "agent": "agent-google"
  },
  {
    "provider": "Google (Alphabet)",
    "ticker": "GOOG",
    "model_family": "Gemini",
    "line": "llm",
    "category": "ARR_total",
    "year": 2027,
    "value": null,
    "unit": "USD_mn",
    "hq_country": "US",
    "is_public": "public",
    "grade": "D",
    "source_url": "https://sacra.com/c/openai/",
    "source_date": "2026-04",
    "notes": "D 級：2027 Gemini-attributable ARR forecast。Bear $20B (Apple Search 整合受阻 + 美法案壓力)。Base $30B (Workspace AI 滲透 + Cloud Vertex 持續 growth)。Bull $50B+ (Search AI 直接 monetization 突破 + agentic 取代多 SaaS)。",
    "agent": "agent-google"
  }
];

const PROVIDER_META = {
  'OpenAI':            { color: '#10a37f', flag: '🇺🇸', shortName: 'GPT' },
  'Anthropic':         { color: '#cd7f32', flag: '🇺🇸', shortName: 'Claude' },
  'Google (Alphabet)': { color: '#4285f4', flag: '🇺🇸', shortName: 'Gemini' },
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };

const state = { filters: { provider: 'all', grade: 'all', year: 'all' }, search: '' };

function fmtUSDmn(n) {
  if (n == null) return '—';
  if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'B';
  return '$' + n.toLocaleString() + 'M';
}

function fmtMnUsers(n) {
  if (n == null) return '—';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'B';
  return n + 'M';
}

function fmtPct(n) { return n == null ? '—' : n.toFixed(1) + '%'; }

function fmtValue(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'USD_mn':         return fmtUSDmn(r.value);
    case 'M_users':        return fmtMnUsers(r.value);
    case 'percent':        return fmtPct(r.value);
    case 'USD_per_month':  return '$' + r.value + '/mo';
    case 'businesses':     return r.value.toLocaleString();
    case 'B_per_month':    return r.value + 'B req/mo';
    case 'models':         return r.value + ' models';
    default:               return r.value.toLocaleString() + (r.unit ? ' ' + r.unit : '');
  }
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.provider !== 'all' && d.provider !== state.filters.provider) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (q) {
      const hay = [d.provider, d.model_family, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/* ====== Stats bar ====== */
function renderStats(rows) {
  const providers = new Set(rows.map(r => r.provider));
  // Total ARR 2025 (across providers in current filter)
  const arr2025 = rows.filter(r => r.category === 'ARR_total' && r.year === 2025 && r.value != null);
  const arr2026 = rows.filter(r => r.category === 'ARR_total' && r.year === 2026 && r.value != null);
  const sum2025 = arr2025.reduce((s, r) => s + r.value, 0);
  const sum2026 = arr2026.reduce((s, r) => s + r.value, 0);
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-providers').textContent = providers.size;
  document.getElementById('stat-arr-2025').textContent = fmtUSDmn(sum2025);
  document.getElementById('stat-arr-2026').textContent = fmtUSDmn(sum2026);
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

/* ====== ARR Trend Chart (SVG) ====== */
function renderTrendChart(rows) {
  const container = document.getElementById('trend-chart');
  container.innerHTML = '';
  // Get ARR_total for years 2023-2026
  const years = [2023, 2024, 2025, 2026];
  const providers = ['OpenAI', 'Anthropic', 'Google (Alphabet)'];
  const data = {};
  for (const p of providers) {
    data[p] = years.map(y => {
      const r = rows.find(x => x.provider === p && x.category === 'ARR_total' && x.year === y);
      return r && r.value != null ? r.value : null;
    });
  }

  const W = 800, H = 360, PAD = 50;
  const maxVal = 32000; // $32B max scale
  const groupCount = years.length;
  const groupW = (W - 2 * PAD) / groupCount;
  const barW = groupW / (providers.length + 0.5);

  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  // Title
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="16" font-weight="600">Total ARR Trend ($USD M, 2023-2026)</text>');
  // Y-axis grid
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    const v = (maxVal / 4 * i / 1000).toFixed(0);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="11" opacity="0.7">$' + v + 'B</text>');
  }
  // Bars
  for (let yi = 0; yi < years.length; yi++) {
    const y = years[yi];
    const xBase = PAD + yi * groupW + (groupW - barW * providers.length) / 2;
    for (let pi = 0; pi < providers.length; pi++) {
      const p = providers[pi];
      const v = data[p][yi];
      if (v == null) continue;
      const meta = PROVIDER_META[p];
      const barX = xBase + pi * barW;
      const barH = (v / maxVal) * (H - 2 * PAD);
      const barY = H - PAD - barH;
      svg.push('<rect x="' + barX + '" y="' + barY + '" width="' + (barW - 2) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.85"/>');
      // Value label on top
      svg.push('<text x="' + (barX + barW/2 - 1) + '" y="' + (barY - 4) + '" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">$' + (v / 1000).toFixed(v < 1000 ? 1 : 0) + 'B</text>');
    }
    // Year label
    svg.push('<text x="' + (PAD + yi * groupW + groupW/2) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + y + '</text>');
  }
  // Legend
  const legendY = H - 12;
  let lx = PAD;
  for (const p of providers) {
    const meta = PROVIDER_META[p];
    svg.push('<rect x="' + lx + '" y="' + (legendY - 9) + '" width="12" height="12" fill="' + meta.color + '"/>');
    svg.push('<text x="' + (lx + 17) + '" y="' + (legendY) + '" fill="currentColor" font-size="12">' + meta.flag + ' ' + p + ' (' + meta.shortName + ')</text>');
    lx += 230;
  }
  svg.push('</svg>');
  container.innerHTML = svg.join('');
}

/* ====== B2C vs B2B Donut + Market Share Bars ====== */
function renderShareCharts(rows) {
  // B2B/B2C donut for 2026
  const donut = document.getElementById('donut-chart');
  donut.innerHTML = '';
  const providers = ['OpenAI', 'Anthropic', 'Google (Alphabet)'];
  const W = 380, H = 280, cx = 110, cy = 130, r = 70, irr = 35;

  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2026 ARR: B2B vs B2C Mix</text>');

  // For each provider, get B2B + B2C 2026
  let yOff = 50;
  for (const p of providers) {
    const b2b = rows.find(x => x.provider === p && x.category === 'ARR_B2B' && x.year === 2026);
    const b2c = rows.find(x => x.provider === p && x.category === 'ARR_B2C' && x.year === 2026);
    const bV = b2b ? b2b.value || 0 : 0;
    const cV = b2c ? b2c.value || 0 : 0;
    const total = bV + cV;
    if (total === 0) continue;
    const meta = PROVIDER_META[p];
    const pctB2B = (bV / total * 100).toFixed(0);
    const pctB2C = (cV / total * 100).toFixed(0);
    svg.push('<text x="180" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + meta.flag + ' ' + p + '</text>');
    // Stacked horizontal bar
    const barX = 180, barY = yOff + 6, barW = 180, barH = 18;
    const b2bW = bV / total * barW;
    svg.push('<rect x="' + barX + '" y="' + barY + '" width="' + b2bW + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.9"/>');
    svg.push('<rect x="' + (barX + b2bW) + '" y="' + barY + '" width="' + (barW - b2bW) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.4"/>');
    // Labels
    svg.push('<text x="' + (barX + b2bW/2) + '" y="' + (barY + 13) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + pctB2B + '% B2B</text>');
    svg.push('<text x="' + (barX + b2bW + (barW - b2bW)/2) + '" y="' + (barY + 13) + '" text-anchor="middle" fill="currentColor" font-size="10">' + pctB2C + '% B2C</text>');
    // Total ARR
    svg.push('<text x="370" y="' + (barY + 13) + '" text-anchor="end" fill="currentColor" font-size="11" font-weight="600">$' + (total / 1000).toFixed(1) + 'B</text>');
    yOff += 50;
  }
  // Legend
  svg.push('<text x="' + cx + '" y="' + (H - 16) + '" text-anchor="middle" fill="currentColor" font-size="11" opacity="0.7">Solid = B2B (Enterprise/API), Light = B2C (Consumer)</text>');
  svg.push('</svg>');
  donut.innerHTML = svg.join('');

  // Market share consumer / enterprise dual bar chart
  const ms = document.getElementById('share-chart');
  ms.innerHTML = '';
  const W2 = 460, H2 = 240;
  const svg2 = ['<svg viewBox="0 0 ' + W2 + ' ' + H2 + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg2.push('<text x="' + (W2/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2026 Market Share: Consumer vs Enterprise</text>');

  const sections = [
    { title: 'Consumer (chatbot traffic)', cat: 'market_share_consumer', y: 60 },
    { title: 'Enterprise (API)',           cat: 'market_share_enterprise', y: 150 },
  ];

  for (const sec of sections) {
    svg2.push('<text x="20" y="' + sec.y + '" fill="currentColor" font-size="12" font-weight="500">' + sec.title + '</text>');
    let barX = 20;
    const barY = sec.y + 8;
    const barW = 380, barH = 26;
    const segs = [];
    let totalCovered = 0;
    for (const p of providers) {
      // Use 2026 first, fallback to 2025
      let r = rows.find(x => x.provider === p && x.category === sec.cat && x.year === 2026);
      if (!r) r = rows.find(x => x.provider === p && x.category === sec.cat && x.year === 2025);
      const v = r && r.value != null ? r.value : 0;
      segs.push({ provider: p, value: v });
      totalCovered += v;
    }
    segs.push({ provider: 'Others', value: Math.max(0, 100 - totalCovered) });
    let curX = barX;
    for (const s of segs) {
      const w = (s.value / 100) * barW;
      const meta = PROVIDER_META[s.provider] || { color: '#888' };
      svg2.push('<rect x="' + curX + '" y="' + barY + '" width="' + w + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.85"/>');
      if (w > 30) svg2.push('<text x="' + (curX + w/2) + '" y="' + (barY + 17) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + s.value.toFixed(0) + '%</text>');
      curX += w;
    }
    // Inline legend below
    let lx = 20;
    for (const s of segs) {
      const meta = PROVIDER_META[s.provider] || { color: '#888' };
      svg2.push('<rect x="' + lx + '" y="' + (barY + 36) + '" width="10" height="10" fill="' + meta.color + '"/>');
      const sn = s.provider === 'Others' ? 'Others' : (PROVIDER_META[s.provider]?.shortName || s.provider);
      svg2.push('<text x="' + (lx + 14) + '" y="' + (barY + 45) + '" fill="currentColor" font-size="10">' + sn + ' ' + s.value.toFixed(1) + '%</text>');
      lx += 105;
    }
  }
  svg2.push('</svg>');
  ms.innerHTML = svg2.join('');
}

/* ====== Flat data table ====== */
function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
    if (a.year !== b.year) return b.year - a.year;
    const ga = { A: 0, B: 1, C: 2, D: 3 }[a.grade] ?? 9;
    const gb = { A: 0, B: 1, C: 2, D: 3 }[b.grade] ?? 9;
    return ga - gb;
  });
  for (const r of sorted) {
    const meta = PROVIDER_META[r.provider] || { color: '#888', flag: '🌐', shortName: r.provider };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + sanitize(meta.shortName) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtValue(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 60) + ((r.notes || '').length > 60 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_url || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderTrendChart(rows);
  renderShareCharts(rows);
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.provider !== undefined) {
        state.filters.provider = btn.dataset.provider;
        document.querySelectorAll('[data-provider]').forEach(b => b.classList.toggle('active', b === btn));
      } else if (btn.dataset.grade !== undefined) {
        state.filters.grade = btn.dataset.grade;
        document.querySelectorAll('[data-grade]').forEach(b => b.classList.toggle('active', b === btn));
      } else if (btn.dataset.year !== undefined) {
        state.filters.year = btn.dataset.year;
        document.querySelectorAll('[data-year]').forEach(b => b.classList.toggle('active', b === btn));
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

document.addEventListener('DOMContentLoaded', () => { wireFilters(); wireTheme(); renderAll(); });
