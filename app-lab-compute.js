/* G04 Phase 12 — Frontier Lab Compute Deployment (GW + Chip Mix)
 * 6 lab: OpenAI / Anthropic / Google DeepMind / Meta AI / xAI / DeepSeek
 * Data 2026-04-29 · _research/phase12-lab-compute/lab-compute.jsonl (71 records)
 *
 * 核心問題：各 lab 未來 GW 需求 + 各 chip vendor 占比？
 * Anthropic 範例：Trainium 50% + TPU 30% + NVIDIA 20% = 10GW = 500萬 GPU
 */

const DATA = [
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 1.5,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~1.5 GW（Microsoft Azure cluster 主力 + 早期 Stargate Phase 0）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 0.75,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "OpenAI 2025 ~0.75M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 4.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~4 GW（Stargate Abilene Phase 1 上線 1.2M GPU + Azure 持續擴）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 2.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "OpenAI 2026 ~2.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 9.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~9 GW（Stargate Phase 2-3 部署 + 新增 site）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 4.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "OpenAI 2027 ~4.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 22.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~22 GW（$500B Stargate 五年計劃 vision）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 11.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "OpenAI 2030 ~11.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_nvidia",
    "value": 70,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "OpenAI 2026 chip mix: NVIDIA 70%"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_amd",
    "value": 10,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "OpenAI 2026 chip mix: AMD 10%"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_maia",
    "value": 20,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "OpenAI 2026 chip mix: Maia 20%"
  },
  {
    "lab": "OpenAI",
    "ticker": "OPENAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "OpenAI 戰略：Stargate $500B 五年 (2025-2029) + Microsoft Azure 主軸 + Oracle/Crusoe/SoftBank 多方融資。Sam Altman 公開「需要更多 capacity」。Microsoft 持有 49% 股權但近期推 Maia 200 自家 ASIC inference 降本。"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 2.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~2 GW（AWS Project Rainier 400K Trainium 2 啟動 + GCP TPU + NVIDIA mix）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 1.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "Anthropic 2025 ~1.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 5.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~5 GW（Project Rainier 全部上線 + GCP Trillium TPU 大量採購）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 2.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "Anthropic 2026 ~2.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 7.5,
    "unit": "GW",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~7.5 GW（持續擴 Trainium 3 + Ironwood TPU + B200 增量）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 3.75,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "Anthropic 2027 ~3.75M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 10.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~10 GW = 約 500 萬 GPU 等效（user-defined）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 5.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "Anthropic 2030 ~5.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_nvidia",
    "value": 20,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Anthropic 2026 chip mix: NVIDIA 20%"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_tpu",
    "value": 30,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Anthropic 2026 chip mix: TPU 30%"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_trainium",
    "value": 50,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Anthropic 2026 chip mix: Trainium 50%"
  },
  {
    "lab": "Anthropic",
    "ticker": "ANTHROPIC-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Anthropic 戰略：三引擎 chip mix（Trainium 50% + TPU 30% + NVIDIA 20%）。Amazon 投資 $8B + Google 投資 $2B 雙方 cloud-back。獨特優勢：訓練成本比 OpenAI 4x 便宜 (公開揭露)。AWS Project Rainier 400K Trainium 2 cluster 為非 NVIDIA 訓練最大規模。"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 3.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~3 GW（自家 TPU v5e/v5p/v6 cluster，全球 #1 ASIC scale）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 1.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "Google DeepMind 2025 ~1.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 5.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~5 GW（Trillium v6 大量量產 + v8 Ironwood Q3 launch）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 2.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "Google DeepMind 2026 ~2.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 8.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~8 GW（v8 Ironwood + v9 + 對外 Cloud Vertex 擴大）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 4.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "Google DeepMind 2027 ~4.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 15.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~15 GW（TPU 自家設計 11 年累計優勢）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 7.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "Google DeepMind 2030 ~7.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_tpu",
    "value": 100,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Google DeepMind 2026 chip mix: TPU 100%"
  },
  {
    "lab": "Google DeepMind",
    "ticker": "GOOG",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Google DeepMind 戰略：100% TPU 垂直整合。從 v1 (2015) → v8 Ironwood (2026) 連續 11 年自研 ASIC。成本優勢：Gemini 訓練 3-4x 比 OpenAI/Anthropic 便宜（內部）。Cloud Vertex AI 對外 ~30%，self-use 70%。"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 3.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~3 GW（自家 NVIDIA H100/H200 cluster + MTIA v2）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 1.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "Meta AI 2025 ~1.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 5.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~5 GW（Llama 4/5 訓練 + Reels recommendation）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 2.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "Meta AI 2026 ~2.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 7.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~7 GW（MTIA Santa Barbara 6,000 rack + B200/B300 持續）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 3.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "Meta AI 2027 ~3.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 12.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~12 GW（Mark Zuckerberg 公開 AI infra commitment）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 6.0,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "Meta AI 2030 ~6.0M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_nvidia",
    "value": 80,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Meta AI 2026 chip mix: NVIDIA 80%"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_amd",
    "value": 5,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Meta AI 2026 chip mix: AMD 5%"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_inhouse",
    "value": 15,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Meta AI 2026 chip mix: Inhouse 15%"
  },
  {
    "lab": "Meta AI",
    "ticker": "META",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "Meta AI 戰略：NVIDIA 主力 + MTIA in-house ASIC（recommendation/inference）。Llama 開源生態副產品（成本由 advertising revenue 攤）。MTIA v2 2024 launch + Santa Barbara （廣達 ODM 6,000 rack 量產）為 Llama 4/5 訓練降本。"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 0.5,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~0.5 GW（Memphis Colossus 200K H100，Q4 launch）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 0.25,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "xAI 2025 ~0.25M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 1.5,
    "unit": "GW",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~1.5 GW（1M GPU target H2 2026 — Musk 公開承諾）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 0.75,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "xAI 2026 ~0.75M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 3.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~3 GW（Colossus expansion + 第二 site）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 1.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "xAI 2027 ~1.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 5.0,
    "unit": "GW",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~5 GW（Tesla + SpaceX synergy 但獨立 funding）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 2.5,
    "unit": "M_GPU",
    "hq_country": "US",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "xAI 2030 ~2.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_nvidia",
    "value": 100,
    "unit": "percent",
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "xAI 2026 chip mix: NVIDIA 100%"
  },
  {
    "lab": "xAI",
    "ticker": "XAI-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "xAI 戰略：100% NVIDIA + 純自建 cluster（不對外 cloud）。Musk speed-to-market：Memphis Colossus 122 天從零到 100K H100。Tesla AI training 共享 capacity（Robotaxi）+ SpaceX Starlink data。資金來源：私募 ($6B Series C 2025) + Tesla 借力。"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gw",
    "value": 0.3,
    "unit": "GW",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "2025 active ~0.3 GW（自有 ~10K H800 + 國產華為昇騰 + 量化基金 High-Flyer 資源）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2025,
    "category": "compute_total_gpu_m",
    "value": 0.15,
    "unit": "M_GPU",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "DeepSeek 2025 ~0.15M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gw",
    "value": 0.7,
    "unit": "GW",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "2026E ~0.7 GW（昇騰 910C 量產 + V4 訓練 cluster 擴）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "compute_total_gpu_m",
    "value": 0.35,
    "unit": "M_GPU",
    "hq_country": "CN",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "DeepSeek 2026 ~0.35M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gw",
    "value": 1.5,
    "unit": "GW",
    "hq_country": "CN",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "2027F ~1.5 GW（受出口管制限制，主要靠國產 ASIC）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2027,
    "category": "compute_total_gpu_m",
    "value": 0.75,
    "unit": "M_GPU",
    "hq_country": "CN",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "DeepSeek 2027 ~0.75M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gw",
    "value": 3.0,
    "unit": "GW",
    "hq_country": "CN",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "2030 vision ~3 GW（中國國產化政策推動）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2030,
    "category": "compute_total_gpu_m",
    "value": 1.5,
    "unit": "M_GPU",
    "hq_country": "CN",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2030-Q4",
    "notes": "DeepSeek 2030 ~1.5M GPU 等效（換算 1GW ≈ 500K GPU）"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_nvidia",
    "value": 50,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "DeepSeek 2026 chip mix: NVIDIA 50%"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "chip_mix_inhouse",
    "value": 50,
    "unit": "percent",
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "DeepSeek 2026 chip mix: Inhouse 50%"
  },
  {
    "lab": "DeepSeek",
    "ticker": "DEEPSEEK-PRIVATE",
    "line": "lab-compute",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "CN",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "DeepSeek 戰略：60% 殘留 NVIDIA H800（2023 出口前訂單）+ 40% 國產華為昇騰 + 寒武紀。**特殊**：V3 訓練只用 ~$5.6M cluster 算力（vs OpenAI ~$1B），algorithm efficiency 領先（MLA + MoE 創新）。受出口管制嚴重，但反而推動 algorithm 突破。"
  },
  {
    "lab": "AGGREGATE",
    "ticker": "all",
    "line": "lab-compute",
    "year": 2026,
    "category": "frontier_total_gw",
    "value": 22.7,
    "unit": "GW",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "6 frontier lab 2026 合計 active compute ~22.7 GW（OpenAI 4 + Anthropic 5 + GOOG 5 + Meta 5 + xAI 1.5 + DeepSeek 0.7 + Mistral/Cohere/Qwen/其他 ~1.5）。約 1130 萬 GPU 等效。"
  },
  {
    "lab": "AGGREGATE",
    "ticker": "all",
    "line": "lab-compute",
    "year": 2030,
    "category": "frontier_total_gw_vision",
    "value": 70.0,
    "unit": "GW",
    "hq_country": "all",
    "grade": "D",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "6 frontier lab 2030 vision ~70 GW（OpenAI 22 + GOOG 15 + Meta 12 + Anthropic 10 + xAI 5 + DeepSeek 3 + 其他 3）。約 3500 萬 GPU 等效。**TAM 上限 question**：是否市場真能消化？"
  },
  {
    "lab": "AGGREGATE",
    "ticker": "all",
    "line": "lab-compute",
    "year": 2026,
    "category": "non_nvidia_share",
    "value": 35,
    "unit": "percent",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**結構性觀察**：6 frontier lab 中 NVIDIA 占 ~65%（vs ai-chip-alt 頁顯示市占 80%）。frontier lab 端 NVIDIA share 已被自家 ASIC + Trainium + TPU 削弱，**前沿 lab 比 datacenter 更早 diversify**。"
  },
  {
    "lab": "AGGREGATE",
    "ticker": "all",
    "line": "lab-compute",
    "year": 2026,
    "category": "us_cn_split_compute",
    "value": 96,
    "unit": "percent",
    "hq_country": "all",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "frontier lab compute US/CN 比例 2026E：US 5 lab ~22 GW (96%) vs CN DeepSeek 0.7 GW (3%) + Alibaba/百川/月之暗面/智譜 等 < 1 GW。Gap 仍非常大。"
  }
];

const LAB_META = {
  'OpenAI':         { color: '#10a37f', flag: '🇺🇸', short: 'OpenAI' },
  'Anthropic':      { color: '#cd7f32', flag: '🇺🇸', short: 'Anthropic' },
  'Google DeepMind':{ color: '#4285f4', flag: '🇺🇸', short: 'GOOG/DM' },
  'Meta AI':        { color: '#1877f2', flag: '🇺🇸', short: 'Meta' },
  'xAI':            { color: '#ec4899', flag: '🇺🇸', short: 'xAI' },
  'DeepSeek':       { color: '#5e35b1', flag: '🇨🇳', short: 'DeepSeek' },
  'AGGREGATE':      { color: '#888',    flag: '🌐', short: 'all' },
};
const LAB_ORDER = ['OpenAI','Anthropic','Google DeepMind','Meta AI','xAI','DeepSeek'];

const CHIP_META = {
  'nvidia':   { color: '#76b900', label: 'NVIDIA' },
  'amd':      { color: '#ed1c24', label: 'AMD' },
  'maia':     { color: '#00a4ef', label: 'MS Maia' },
  'tpu':      { color: '#4285f4', label: 'Google TPU' },
  'trainium': { color: '#ff9900', label: 'AWS Trainium' },
  'inhouse':  { color: '#9333ea', label: 'In-house ASIC' },
};

const GRADE_COLORS = { A:'#10b981', B:'#3b82f6', C:'#f59e0b', D:'#ef4444' };
const state = { filters: { lab:'all', year:'all', grade:'all' }, search:'' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'GW':      return r.value + ' GW';
    case 'M_GPU':   return r.value + 'M GPU';
    case 'percent': return r.value + '%';
    default: return r.value;
  }
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.lab !== 'all' && d.lab !== state.filters.lab) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (q) {
      const hay = [d.lab, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getGW(lab, year) {
  const r = DATA.find(x => x.lab === lab && x.category === 'compute_total_gw' && x.year === year);
  return r ? r.value : null;
}

function renderStats() {
  let sum2026 = 0, sum2030 = 0;
  for (const l of LAB_ORDER) {
    sum2026 += getGW(l, 2026) || 0;
    sum2030 += getGW(l, 2030) || 0;
  }
  // Anthropic 2030
  const anthropic2030 = getGW('Anthropic', 2030);
  document.getElementById('stat-2026').textContent = sum2026.toFixed(1) + ' GW';
  document.getElementById('stat-2030').textContent = sum2030.toFixed(0) + ' GW';
  document.getElementById('stat-anthropic').textContent = (anthropic2030 || 0) + ' GW';
  document.getElementById('stat-gpu').textContent = (sum2030 / 2).toFixed(0) + 'M';
  document.getElementById('dp-count').textContent = getFiltered().length;
}

/* Chart 1: GW Trend per lab (2025-2030) */
function renderGWTrend() {
  const c = document.getElementById('gw-chart');
  c.innerHTML = '';
  const W = 800, H = 420, PAD = 60;
  const years = [2025, 2026, 2027, 2030];
  const yMax = 25;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">Frontier Lab Compute Deployment (GW, 2025-2030F)</text>');
  for (let i = 0; i <= 5; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 5;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.12"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">' + (yMax / 5 * i).toFixed(0) + ' GW</text>');
  }
  // Non-uniform x: 2025/2026/2027 are 1 year apart, 2027 to 2030 is 3 years
  // Use proportional spacing
  const yearPositions = years.map(y => (y - 2025) / 5); // 0, 0.2, 0.4, 1.0
  for (const l of LAB_ORDER) {
    const meta = LAB_META[l];
    const points = years.map((y, i) => {
      const v = getGW(l, y);
      if (v == null) return null;
      return [PAD + yearPositions[i] * (W - 2 * PAD), H - PAD - (Math.min(v, yMax) / yMax) * (H - 2 * PAD), v];
    });
    const path = points.filter(p => p).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + meta.color + '" stroke-width="2.5" opacity="0.85"/>');
    for (const p of points) {
      if (!p) continue;
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + meta.color + '"/>');
    }
    const last = points[points.length - 1];
    if (last) svg.push('<text x="' + (last[0] + 6) + '" y="' + (last[1] + 4) + '" fill="' + meta.color + '" font-size="11" font-weight="600">' + meta.short + ' ' + last[2] + 'GW</text>');
  }
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + yearPositions[i] * (W - 2 * PAD)) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  svg.push('<text x="' + (W/2) + '" y="' + (H - 8) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">2030 為 vision (D 級)，反映各 lab 公開承諾或 capex commitment</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 2: Chip Mix per lab (2026 stacked bar) */
function renderChipMix() {
  const c = document.getElementById('chip-chart');
  c.innerHTML = '';
  const W = 800, H = 380;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">Chip Vendor Mix per Lab (2026)</text>');
  let yOff = 60;
  const chipKeys = Object.keys(CHIP_META);
  for (const l of LAB_ORDER) {
    const meta = LAB_META[l];
    const gw2026 = getGW(l, 2026) || 0;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + ' ' + gw2026 + 'GW</text>');
    let curX = 200;
    const totalW = 540;
    for (const ck of chipKeys) {
      const r = DATA.find(x => x.lab === l && x.category === 'chip_mix_' + ck);
      if (!r || !r.value) continue;
      const cm = CHIP_META[ck];
      const w = (r.value / 100) * totalW;
      svg.push('<rect x="' + curX + '" y="' + (yOff - 11) + '" width="' + w + '" height="18" fill="' + cm.color + '" opacity="0.9"/>');
      if (w > 40) svg.push('<text x="' + (curX + w/2) + '" y="' + (yOff + 1) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + cm.label + ' ' + r.value + '%</text>');
      curX += w;
    }
    yOff += 38;
  }
  // Legend
  let lx = 20;
  for (const ck of chipKeys) {
    const cm = CHIP_META[ck];
    svg.push('<rect x="' + lx + '" y="' + (H - 14) + '" width="11" height="11" fill="' + cm.color + '"/>');
    svg.push('<text x="' + (lx + 16) + '" y="' + (H - 5) + '" fill="currentColor" font-size="10">' + cm.label + '</text>');
    lx += 130;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 3: GPU equivalent total */
function renderGPUTotal() {
  const c = document.getElementById('gpu-chart');
  c.innerHTML = '';
  const W = 480, H = 380;
  const labs2030 = LAB_ORDER.map(l => {
    const r = DATA.find(x => x.lab === l && x.category === 'compute_total_gpu_m' && x.year === 2030);
    return { l, val: r ? r.value : 0 };
  }).sort((a, b) => b.val - a.val);
  const max = labs2030[0].val;
  const total = labs2030.reduce((s, x) => s + x.val, 0);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2030 Vision: GPU Equivalent (Million)</text>');
  let yOff = 60;
  for (const x of labs2030) {
    const meta = LAB_META[x.l];
    const w = (x.val / max) * 320;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    svg.push('<rect x="100" y="' + (yOff - 11) + '" width="' + w + '" height="14" fill="' + meta.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (105 + w) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">' + x.val + 'M GPU</text>');
    yOff += 32;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11" font-weight="600">總和：' + total.toFixed(1) + 'M GPU 等效（vs 全球 NVIDIA 累計總出貨）</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="10" opacity="0.7">換算 1 GW ≈ 500K GPU（含 datacenter overhead）</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 4: Aggregate chip vendor share (sum across labs) */
function renderAggChipShare() {
  const c = document.getElementById('agg-chart');
  c.innerHTML = '';
  const W = 480, H = 380;
  // Compute weighted by GW 2026
  const weighted = {};
  for (const ck of Object.keys(CHIP_META)) weighted[ck] = 0;
  let totalGW = 0;
  for (const l of LAB_ORDER) {
    const gw = getGW(l, 2026) || 0;
    totalGW += gw;
    for (const ck of Object.keys(CHIP_META)) {
      const r = DATA.find(x => x.lab === l && x.category === 'chip_mix_' + ck);
      if (r && r.value) weighted[ck] += (r.value / 100) * gw;
    }
  }
  const sortedKeys = Object.entries(weighted).sort((a, b) => b[1] - a[1]).map(x => x[0]);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2026 Aggregate Chip Mix (GW-weighted, 6 labs)</text>');
  let yOff = 60;
  const max = Math.max(...Object.values(weighted));
  for (const ck of sortedKeys) {
    const v = weighted[ck];
    if (v === 0) continue;
    const cm = CHIP_META[ck];
    const w = (v / max) * 280;
    const pct = (v / totalGW * 100).toFixed(0);
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + cm.label + '</text>');
    svg.push('<rect x="140" y="' + (yOff - 11) + '" width="' + w + '" height="16" fill="' + cm.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (145 + w) + '" y="' + (yOff + 2) + '" fill="currentColor" font-size="11" font-weight="600">' + v.toFixed(1) + 'GW (' + pct + '%)</text>');
    yOff += 36;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11" opacity="0.85">**結構性觀察**：frontier lab 端 NVIDIA 占 ~65%</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="10" opacity="0.7">vs 全 datacenter NVIDIA 占 80% (見 ai-chip-alt 頁)。前沿 lab 較早 diversify。</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    const ai = LAB_ORDER.indexOf(a.lab), bi = LAB_ORDER.indexOf(b.lab);
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    if (a.year !== b.year) return a.year - b.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = LAB_META[r.lab] || { color:'#888', short:r.lab, flag:'🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + sanitize(meta.short) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 80) + ((r.notes || '').length > 80 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : '—') + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats();
  renderGWTrend();
  renderChipMix();
  renderGPUTotal();
  renderAggChipShare();
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ['lab', 'year', 'grade'].forEach(k => {
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
