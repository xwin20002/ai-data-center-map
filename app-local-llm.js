/* G04 Phase 6 — Local / Open-Source LLM Market Index
 * 3 anchor OSS LLM families (>10% OpenRouter usage):
 *   Meta Llama (US, Llama community license)
 *   DeepSeek (CN, MIT license since V3.1)
 *   Alibaba Qwen (CN, Apache 2.0 since Qwen 3)
 * Data 2026-04-26 · _research/phase6-local-llm/local-llm.jsonl (45 records)
 *
 * Visualization: OpenRouter share trend + HF download trend + benchmark + license pie
 */

const DATA = [
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2024,
    "value": 22,
    "unit": "percent",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2025-Q1",
    "notes": "2024 OpenRouter OSS model 用量市占 ~22%（Llama 3.1 405B + 70B + 8B 加總）。OSS 第一。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2025,
    "value": 27,
    "unit": "percent",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-Q1",
    "notes": "2025 OpenRouter OSS 用量 ~27%（Llama 3.3 70B + 4 Scout + Maverick）。維持 OSS 第一。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2026,
    "value": 23,
    "unit": "percent",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-04",
    "notes": "2026 Q1 OpenRouter OSS 用量 ~23%（被 DeepSeek 追近）。Llama 4 Maverick 為主力，Scout 被 size niche 壓制。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2024,
    "value": 30,
    "unit": "downloads_M_per_month",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/meta-llama",
    "source_date": "2025-Q1",
    "notes": "2024 末 HuggingFace Llama family 月下載 ~30M（HF 累計第一）。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2025,
    "value": 50,
    "unit": "downloads_M_per_month",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/meta-llama",
    "source_date": "2026-Q1",
    "notes": "2025 全年末 HF Llama 月下載 ~50M（含 Llama 3.3 + Llama 4 各 size）。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2026,
    "value": 45,
    "unit": "downloads_M_per_month",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/meta-llama",
    "source_date": "2026-04",
    "notes": "2026 Q1 HF Llama 月下載 ~45M（DeepSeek/Qwen 競爭分流）。仍是累計下載第一。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2024,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://ai.meta.com/blog/meta-llama-3/",
    "source_date": "2024-04",
    "notes": "2024 hero model: Llama 3 (8B/70B Apr) + Llama 3.1 (8B/70B/405B Jul) + Llama 3.2 (1B/3B vision Sep) + Llama 3.3 (70B Dec)。一年發布 4 個 generation 創 OSS 紀錄。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2025,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
    "source_date": "2025-04",
    "notes": "2025 hero model: Llama 4 Scout (109B MoE / 17B active, Apr) + Llama 4 Maverick (400B MoE / 17B active, Apr)。MoE 架構轉型。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://ai.meta.com/",
    "source_date": "2026-04",
    "notes": "2026 預期 hero model: Llama 5 (Behemoth ~2T MoE, planned Q3 2026)。Llama 4.5 已有 reasoning variant 量產。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "parameter_size_range",
    "year": 2026,
    "value": null,
    "unit": "B",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://huggingface.co/meta-llama",
    "source_date": "2026-04",
    "notes": "Parameter size 範圍：1B (Llama 3.2) → 3B → 8B → 70B → 109B (4 Scout MoE) → 400B (4 Maverick MoE) → ~2T (5 Behemoth planned)。最廣 size 覆蓋。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "benchmark_mmlu",
    "year": 2025,
    "value": 87,
    "unit": "score",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
    "source_date": "2025-04",
    "notes": "Llama 4 Maverick MMLU ~87.0（GPT-5/Claude 4.6 在 88-92），best OSS open weights。Reasoning variants 接近 frontier。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "inference_cost",
    "year": 2026,
    "value": 0.6,
    "unit": "USD_per_M_token",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://together.ai/pricing",
    "source_date": "2026-04",
    "notes": "Together.ai Llama 4 Maverick pricing $0.27 input / $0.85 output 平均 ~$0.6/M token。對比 Claude 4.6 ~$15/M，Llama 是 25x 便宜。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "license_terms",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.llama.com/llama3/license/",
    "source_date": "2026-04",
    "notes": "License: Llama 3 community (custom)。允許商業使用 + 修改 + 分發，但 >700M MAU 用戶須申請額外授權。**not** Apache 2.0。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "fine_tune_count",
    "year": 2026,
    "value": 250000,
    "unit": "count",
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/meta-llama",
    "source_date": "2026-04",
    "notes": "HF 上 Llama-derived fine-tune model 數估 250K+（含 Code Llama / Llama Guard / 各種 instruct fine-tune）。最大 OSS 衍生生態。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "Meta",
    "ticker": "META",
    "model_family": "Llama",
    "line": "local-llm",
    "category": "strategic_note",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "US",
    "license": "Llama 3 community",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://ai.meta.com/",
    "source_date": "2026-04",
    "notes": "Meta OSS 戰略動因：(1) 抗衡 OpenAI 商用模式；(2) Recommendation/Reels 系統 in-house 訓練免授權費；(3) AGI Lab + FAIR 雙軸研究；(4) 廣告營收 monetize 不靠 model 收費。Mark Zuckerberg 公開: open-source AI 為 Meta 戰略。",
    "agent": "agent-meta-llama"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2024,
    "value": 3,
    "unit": "percent",
    "hq_country": "CN",
    "license": "DeepSeek License (V2-V3) / MIT (V3.1+)",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2025-Q1",
    "notes": "2024 年 OpenRouter OSS 用量 ~3%（V2 + Coder V2）。剛萌芽。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2025,
    "value": 18,
    "unit": "percent",
    "hq_country": "CN",
    "license": "DeepSeek License (V2-V3) / MIT (V3.1+)",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-Q1",
    "notes": "2025 OpenRouter OSS 用量爆增至 ~18%。V3 (Dec 2024) + R1 (Jan 2025) 雙產品。R1 reasoning 開源是業界 inflection。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2026,
    "value": 22,
    "unit": "percent",
    "hq_country": "CN",
    "license": "DeepSeek License (V2-V3) / MIT (V3.1+)",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-04",
    "notes": "2026 Q1 OpenRouter OSS 用量 ~22%（接近 Meta 23%）。V3.1 + V4（Q1 2026 reasoning + agentic）持續加速。MIT license 後採用無門檻。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2024,
    "value": 5,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "DeepSeek License",
    "is_public": "private",
    "grade": "C",
    "source_url": "https://huggingface.co/deepseek-ai",
    "source_date": "2025-Q1",
    "notes": "2024 末 HF DeepSeek 月下載 ~5M。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2025,
    "value": 35,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://huggingface.co/deepseek-ai",
    "source_date": "2026-Q1",
    "notes": "2025 HF 月下載 ~35M（V3 + R1 雙引擎）。R1 release 後一週內衝上 HF #1 trending。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2026,
    "value": 55,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "B",
    "source_url": "https://huggingface.co/deepseek-ai",
    "source_date": "2026-04",
    "notes": "2026 Q1 HF 月下載 ~55M（超越 Llama 45M），HF 月下載 #1 OSS family。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2024,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "DeepSeek License",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/DeepSeek-V3",
    "source_date": "2024-12",
    "notes": "2024 hero model: DeepSeek-V2 (May, 236B MoE / 21B active) + Coder V2 (Jul) + V3 (Dec, 671B MoE / 37B active)。V3 訓練成本僅 $5.6M（爆業界數量級低）震驚市場。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2025,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "DeepSeek License",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/DeepSeek-R1",
    "source_date": "2025-01",
    "notes": "2025 hero model: DeepSeek-R1 (Jan, reasoning 開源)、R1-Distill (1.5B → 70B size 範圍)、V3.1 (Dec 改 MIT license)。R1 reasoning OSS 是震撼業界事件 (跟 OpenAI o1 並列)。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/",
    "source_date": "2026-04",
    "notes": "2026 hero model: DeepSeek-V4 (long-context reasoning + coding + agentic, two large MoE models)。Apache 2.0 + MIT 雙 license 採取最寬鬆。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "parameter_size_range",
    "year": 2026,
    "value": null,
    "unit": "B",
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://huggingface.co/deepseek-ai",
    "source_date": "2026-04",
    "notes": "Parameter size 範圍: 1.5B (R1-Distill) → 7B → 14B → 32B → 70B → 236B MoE (V2) → 671B MoE (V3/R1) → ~1T MoE (V4 planned)。MoE 是 DeepSeek 規模化策略。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "benchmark_mmlu",
    "year": 2025,
    "value": 88,
    "unit": "score",
    "hq_country": "CN",
    "license": "DeepSeek License",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/DeepSeek-V3",
    "source_date": "2025-Q1",
    "notes": "DeepSeek V3 MMLU ~88.5（GPT-4o 88、Claude 3.5 88，超越多 frontier model）。R1 reasoning AIME 2024 達 79.8% (vs o1 79.2%)。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "inference_cost",
    "year": 2026,
    "value": 0.4,
    "unit": "USD_per_M_token",
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://api-docs.deepseek.com/quick_start/pricing",
    "source_date": "2026-04",
    "notes": "DeepSeek 自家 API: $0.27 input / $1.1 output (cached)。Together.ai $0.4/M 平均。對比 GPT-5 ~$2.5/M、Claude 4.6 ~$15/M，是 6-37x 便宜。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "license_terms",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/DeepSeek-V3/blob/main/LICENSE",
    "source_date": "2026-04",
    "notes": "V3.1 起 license 全面切換至 **MIT**，是最寬鬆 OSS license（任何商業 / 修改 / 分發無限制，僅需保留版權聲明）。早期 V2-V3 為 DeepSeek License (custom)。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "training_cost_disclosure",
    "year": 2024,
    "value": 5.6,
    "unit": "USD_M",
    "hq_country": "CN",
    "license": "DeepSeek License",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf",
    "source_date": "2024-12",
    "notes": "DeepSeek-V3 公開揭露訓練成本 $5.576M（GPT-5 估 ~$1B+ 的 1/200）。震驚業界，引發 frontier lab 重新評估 capex 結構。Sam Altman 在 X 公開承認被打到。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "model_family": "DeepSeek",
    "line": "local-llm",
    "category": "strategic_note",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "MIT",
    "is_public": "private",
    "grade": "A",
    "source_url": "https://www.deepseek.com/",
    "source_date": "2026-04",
    "notes": "DeepSeek 戰略：(1) 量化基金 High-Flyer 全資投入 AI lab; (2) 自有 GPU cluster (10K+ A100/H800) 訓練; (3) 激進開源 + MIT license = 中國 AI 反美封鎖戰術; (4) 訓練成本 60-200x 比美國 frontier lab 低，重構 GPU economics; (5) R1 reasoning OSS 引發 NVIDIA 股價 -17% 單日 (Jan 2025)。",
    "agent": "agent-deepseek"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2024,
    "value": 8,
    "unit": "percent",
    "hq_country": "CN",
    "license": "Qwen License (custom) / Apache 2.0 (smaller)",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2025-Q1",
    "notes": "2024 OpenRouter OSS 用量 ~8%（Qwen 2 family + 2.5）。第三 OSS family（Meta 第一、Mistral 第二）。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2025,
    "value": 13,
    "unit": "percent",
    "hq_country": "CN",
    "license": "Qwen License (custom) / Apache 2.0 (smaller)",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-Q1",
    "notes": "2025 OpenRouter OSS 用量 ~13%（Qwen 2.5 + 2.5-Max + QwQ reasoning）。亞洲市場主導。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "openrouter_share",
    "year": 2026,
    "value": 16,
    "unit": "percent",
    "hq_country": "CN",
    "license": "Apache 2.0 (Qwen 3 主力)",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://openrouter.ai/models",
    "source_date": "2026-04",
    "notes": "2026 Q1 OpenRouter OSS 用量 ~16%（Qwen 3 + Qwen3-Coder-480B-A35B 主導）。Apache 2.0 license 全面採用。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2024,
    "value": 12,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "Qwen License",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://huggingface.co/Qwen",
    "source_date": "2025-Q1",
    "notes": "2024 末 HF Qwen 月下載 ~12M。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2025,
    "value": 30,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/Qwen",
    "source_date": "2026-Q1",
    "notes": "2025 HF 月下載 ~30M（Qwen 2.5 family + QwQ + Qwen 3 launch Q4）。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hf_downloads_monthly",
    "year": 2026,
    "value": 40,
    "unit": "downloads_M_per_month",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/Qwen",
    "source_date": "2026-04",
    "notes": "2026 Q1 HF 月下載 ~40M。Qwen3-Coder-480B（Apache 2.0）為新 hero。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2024,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "Qwen License",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://github.com/QwenLM/Qwen2.5",
    "source_date": "2024-09",
    "notes": "2024 hero model: Qwen 2.5 family (Sep, 0.5B/1.5B/3B/7B/14B/32B/72B size 全範圍) + Qwen2.5-Coder + Qwen2.5-Math。最廣 size 覆蓋。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2025,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://github.com/QwenLM/Qwen3",
    "source_date": "2025-Q4",
    "notes": "2025 hero model: Qwen 2.5-Max (Jan, MoE), QwQ-32B-Preview (Nov reasoning), Qwen 3 (Apr 2025, 0.6B → 235B MoE), Qwen3-VL (vision)。轉 Apache 2.0 license。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "hero_model",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://github.com/QwenLM/Qwen3-Coder",
    "source_date": "2026-Q1",
    "notes": "2026 hero: Qwen3-Coder-480B-A35B (480B MoE / 35B active, coding 專用)、Qwen 3.5 預期 Q3。Coding-specialized 領先 OSS。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "parameter_size_range",
    "year": 2026,
    "value": null,
    "unit": "B",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://huggingface.co/Qwen",
    "source_date": "2026-04",
    "notes": "Parameter size 範圍 (最廣)：0.5B → 1.5B → 3B → 7B → 14B → 32B → 72B → 235B MoE (Qwen 3) → 480B MoE (Qwen3-Coder)。覆蓋 edge → frontier。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "benchmark_mmlu",
    "year": 2026,
    "value": 87,
    "unit": "score",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://github.com/QwenLM/Qwen3",
    "source_date": "2026-Q1",
    "notes": "Qwen 3 235B MoE MMLU ~87（vs DeepSeek V3 88.5、Llama 4 Maverick 87）。Coding HumanEval >85%。中英雙語強勢，多語言評測領先 OSS。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "inference_cost",
    "year": 2026,
    "value": 0.5,
    "unit": "USD_per_M_token",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://together.ai/pricing",
    "source_date": "2026-04",
    "notes": "Together.ai Qwen 3 235B pricing $0.27 input / $0.85 output 平均 $0.5/M token。Qwen3-Coder-480B 較貴 ~$1.5/M。整體 OSS 範圍內中等價位。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "license_terms",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://huggingface.co/Qwen/Qwen3-235B-A22B/blob/main/LICENSE",
    "source_date": "2026-04",
    "notes": "Qwen 3 起全面 **Apache 2.0** license（無 MAU 限制，超寬鬆，企業友好）。早期 Qwen 2.x 為 Qwen License (custom，>100M MAU 須申請)。Apache 2.0 是 OSS 業界 gold standard。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "fine_tune_count",
    "year": 2026,
    "value": 80000,
    "unit": "count",
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://huggingface.co/Qwen",
    "source_date": "2026-04",
    "notes": "HF 上 Qwen-derived fine-tune model 數估 80K+（含中文 coder、代碼補全、各語言 instruct）。亞洲市場 fine-tune 生態最豐富。",
    "agent": "agent-qwen"
  },
  {
    "provider": "Alibaba",
    "ticker": "BABA",
    "model_family": "Qwen",
    "line": "local-llm",
    "category": "strategic_note",
    "year": 2026,
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "license": "Apache 2.0",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.alibabacloud.com/",
    "source_date": "2026-04",
    "notes": "Alibaba Qwen 戰略：(1) Alibaba Cloud Vertex 自家服務 + 開源 dual-axis（model_studio）; (2) 中國市場主導 + 國際擴張; (3) Apache 2.0 license 是 enterprise 採用 gate (vs Llama community license 限制 >700M MAU); (4) Coding 專用模型 (Qwen3-Coder) 強化 dev 生態; (5) 規模 + size 多元化覆蓋從 edge (0.5B) 到 frontier (480B MoE)。",
    "agent": "agent-qwen"
  }
];

const PROVIDER_META = {
  'Meta':     { color: '#1877f2', flag: '🇺🇸', shortName: 'Llama' },
  'DeepSeek': { color: '#5e35b1', flag: '🇨🇳', shortName: 'DeepSeek' },
  'Alibaba':  { color: '#ff6a00', flag: '🇨🇳', shortName: 'Qwen' },
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };

const state = { filters: { provider: 'all', grade: 'all', year: 'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'percent':                 return r.value.toFixed(1) + '%';
    case 'downloads_M_per_month':   return r.value + 'M/mo';
    case 'B':                       return r.value + 'B';
    case 'score':                   return r.value;
    case 'USD_per_M_token':         return '$' + r.value + '/M';
    case 'count':                   return r.value.toLocaleString();
    case 'USD_M':                   return '$' + r.value + 'M';
    default: return r.value;
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
      const hay = [d.provider, d.model_family, d.category, d.notes, d.license].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderStats(rows) {
  const providers = new Set(rows.map(r => r.provider));
  // 2026 OpenRouter share total
  const share2026 = rows.filter(r => r.category === 'openrouter_share' && r.year === 2026);
  const sumShare = share2026.reduce((s, r) => s + (r.value || 0), 0);
  // 2026 HF downloads total
  const dl2026 = rows.filter(r => r.category === 'hf_downloads_monthly' && r.year === 2026);
  const sumDL = dl2026.reduce((s, r) => s + (r.value || 0), 0);
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-providers').textContent = providers.size;
  document.getElementById('stat-share').textContent = sumShare.toFixed(0) + '%';
  document.getElementById('stat-downloads').textContent = sumDL + 'M/mo';
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

function renderTrendChart(rows, category, containerId, title, yMax, yUnit) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const years = [2024, 2025, 2026];
  const providers = ['Meta', 'DeepSeek', 'Alibaba'];
  const data = {};
  for (const p of providers) {
    data[p] = years.map(y => {
      const r = rows.find(x => x.provider === p && x.category === category && x.year === y);
      return r && r.value != null ? r.value : null;
    });
  }
  const W = 800, H = 320, PAD = 50;
  const groupW = (W - 2 * PAD) / years.length;
  const barW = groupW / (providers.length + 0.5);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">' + title + '</text>');
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    const v = (yMax / 4 * i).toFixed(0);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="11" opacity="0.7">' + v + yUnit + '</text>');
  }
  for (let yi = 0; yi < years.length; yi++) {
    const xBase = PAD + yi * groupW + (groupW - barW * providers.length) / 2;
    for (let pi = 0; pi < providers.length; pi++) {
      const p = providers[pi];
      const v = data[p][yi];
      if (v == null) continue;
      const meta = PROVIDER_META[p];
      const barX = xBase + pi * barW;
      const barH = (v / yMax) * (H - 2 * PAD);
      const barY = H - PAD - barH;
      svg.push('<rect x="' + barX + '" y="' + barY + '" width="' + (barW - 2) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.85"/>');
      svg.push('<text x="' + (barX + barW/2 - 1) + '" y="' + (barY - 4) + '" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">' + v + yUnit + '</text>');
    }
    svg.push('<text x="' + (PAD + yi * groupW + groupW/2) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[yi] + '</text>');
  }
  // Legend
  let lx = PAD;
  for (const p of providers) {
    const meta = PROVIDER_META[p];
    svg.push('<rect x="' + lx + '" y="' + (H - 16) + '" width="11" height="11" fill="' + meta.color + '"/>');
    svg.push('<text x="' + (lx + 16) + '" y="' + (H - 6) + '" fill="currentColor" font-size="11">' + meta.flag + ' ' + meta.shortName + '</text>');
    lx += 130;
  }
  svg.push('</svg>');
  container.innerHTML = svg.join('');
}

function renderBenchmarkInferenceChart(rows) {
  const ms = document.getElementById('benchmark-cost-chart');
  ms.innerHTML = '';
  const W = 460, H = 280;
  const providers = ['Meta', 'DeepSeek', 'Alibaba'];
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">MMLU benchmark vs Inference cost ($/1M tok)</text>');

  // Get latest benchmark + cost per provider
  const benchData = providers.map(p => {
    const b = rows.find(r => r.provider === p && r.category === 'benchmark_mmlu');
    const c = rows.find(r => r.provider === p && r.category === 'inference_cost');
    return { provider: p, mmlu: b?.value || 0, cost: c?.value || 0 };
  });

  let yOff = 60;
  for (const d of benchData) {
    const meta = PROVIDER_META[d.provider];
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + meta.flag + ' ' + meta.shortName + '</text>');
    // MMLU bar (max 100)
    const barW1 = (d.mmlu / 100) * 250;
    svg.push('<rect x="120" y="' + (yOff - 10) + '" width="' + barW1 + '" height="14" fill="' + meta.color + '" opacity="0.85"/>');
    svg.push('<text x="' + (120 + barW1 + 4) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">MMLU ' + d.mmlu + '</text>');
    // Cost label
    svg.push('<text x="120" y="' + (yOff + 25) + '" fill="currentColor" font-size="11" opacity="0.85">cost: $' + d.cost + '/1M tok ← (vs GPT-5 ~$2.5, Claude 4.6 ~$15)</text>');
    yOff += 60;
  }
  svg.push('<text x="' + (W/2) + '" y="' + (H - 12) + '" text-anchor="middle" fill="currentColor" font-size="11" opacity="0.7">All 3 OSS anchors are 5-30x cheaper than frontier closed-source</text>');
  svg.push('</svg>');
  ms.innerHTML = svg.join('');
}

function renderLicenseChart(rows) {
  const ms = document.getElementById('license-chart');
  ms.innerHTML = '';
  const W = 460, H = 280;
  const providers = ['Meta', 'DeepSeek', 'Alibaba'];
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">License + Parameter Size Range (2026)</text>');

  let yOff = 60;
  for (const p of providers) {
    const meta = PROVIDER_META[p];
    const lic = rows.find(r => r.provider === p && r.category === 'license_terms');
    const range = rows.find(r => r.provider === p && r.category === 'parameter_size_range');
    const licStr = lic?.license || '';
    const isPermissive = licStr.includes('Apache') || licStr.includes('MIT');
    const licColor = isPermissive ? '#10b981' : '#f59e0b';
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + meta.flag + ' ' + meta.shortName + '</text>');
    svg.push('<rect x="120" y="' + (yOff - 11) + '" width="180" height="16" fill="' + licColor + '" opacity="0.85" rx="3"/>');
    svg.push('<text x="' + (120 + 90) + '" y="' + (yOff + 1) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + licStr.substring(0, 26) + '</text>');
    // Size range
    const noteText = range?.notes || '';
    const sizeMatch = noteText.match(/[範圍|range][^：:]*[：:]\s*([^。]*?)(?:。|$)/);
    const sizeStr = sizeMatch ? sizeMatch[1].substring(0, 50) : '';
    svg.push('<text x="120" y="' + (yOff + 22) + '" fill="currentColor" font-size="10" opacity="0.85">' + sizeStr + '</text>');
    yOff += 60;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11"><tspan fill="#10b981">●</tspan> Permissive (Apache 2.0 / MIT, enterprise-friendly)</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="11"><tspan fill="#f59e0b">●</tspan> Custom community license (Llama: >700M MAU restriction)</text>');
  svg.push('</svg>');
  ms.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
    if (a.year !== b.year) return b.year - a.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
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
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 70) + ((r.notes || '').length > 70 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_url || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderTrendChart(rows, 'openrouter_share',     'share-chart',    'OpenRouter Usage Share Trend (2024-2026)', 30, '%');
  renderTrendChart(rows, 'hf_downloads_monthly', 'download-chart', 'HuggingFace Monthly Downloads (2024-2026)', 60, 'M');
  renderBenchmarkInferenceChart(rows);
  renderLicenseChart(rows);
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
