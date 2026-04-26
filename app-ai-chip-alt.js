/* G04 Phase 8 — AI Chip Alternatives (vs NVIDIA)
 * AMD MI300 / Google TPU / AWS Trainium / Microsoft Maia / Meta MTIA / Intel Gaudi
 * Data 2026-04-27 · _research/phase8-ai-chip-alt/ai-chip-alt.jsonl (31 records)
 */

const DATA = [
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html",
    "source_date": "2024-Q4",
    "notes": "2024 AMD MI300X 全球 AI accelerator 市占 ~5%（vs NVIDIA ~88%）。Microsoft Azure、Meta、Oracle、Dell 大客戶。Lisa Su 公布 MI300X 全年營收 >$5B。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 7,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.amd.com/",
    "source_date": "2025-Q4",
    "notes": "2025 AMD MI325X 出貨增加，市占升至 ~7%。Datacenter GPU 全年營收 ~$8-10B（vs NVIDIA Datacenter $130B+）。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 9,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.amd.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 AMD MI355X (CDNA 4) 量產，市占估 ~9%。MI400 (CDNA 5) 預計 2026 H2。Lisa Su 2026 AI 營收 guidance >$15B。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "hero_chip",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html",
    "source_date": "2024-10",
    "notes": "MI325X (Oct 2024 量產): CDNA 3 架構, HBM3e 256GB (vs H200 141GB), FP16 1.3 PFLOPS, 6 TB/s 帶寬。對比 H200 在 LLM inference memory-bound workload 有優勢。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "hero_chip",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.amd.com/",
    "source_date": "2026-Q1",
    "notes": "MI355X (CDNA 4, 2026 Q1): HBM3e 288GB, FP16 ~1.5 PFLOPS, FP4 native support。MI400 (CDNA 5, 2026 H2 預期): 對標 GB200/GB300。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "adoption_customer",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "public",
    "grade": "A",
    "source_url": "https://www.microsoft.com/en-us/research/",
    "source_date": "2025-Q1",
    "notes": "MI300X 採用客戶（揭露）：Microsoft Azure（GPT-4 inference）、Meta（Llama 訓練+inference）、Oracle Cloud、Dell、HPE、Lenovo、Supermicro。AMD 2024 Q4 法說會公開揭露 Top 5 客戶。"
  },
  {
    "vendor": "AMD",
    "ticker": "AMD",
    "chip_family": "MI300",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "performance_relative_h100",
    "value": 1.3,
    "unit": "ratio",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.amd.com/",
    "source_date": "2026-Q1",
    "notes": "MI325X vs H100 (FP16 throughput): 1.3x 領先（memory-bound workload 優勢更大 ~1.6x，HBM3e 256GB vs 80GB）。但 vs B200 (4.5 PFLOPS) 仍落後 ~3x。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "chip_family": "TPU",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 3,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://cloud.google.com/tpu",
    "source_date": "2024-Q4",
    "notes": "Google TPU 全球 AI accelerator 市占 ~3% (Google 自用 + Cloud Vertex AI 對外)。TPU v5e/v5p 主力，2024 部署量估 ~500K units。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "chip_family": "TPU",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://cloud.google.com/tpu",
    "source_date": "2025-Q4",
    "notes": "2025 TPU v6 Trillium 量產，市占升至 ~5%。Gemini 3 訓練 + AI Overviews inference 大量用 TPU。Cloud Vertex AI 對外提供 TPU 服務。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "chip_family": "TPU",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 7,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://cloud.google.com/tpu",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 TPU v8 Ironwood 量產（Q3 2026 起），市占估 ~7%。Hyperscaler ASIC 中 TPU 領先。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "chip_family": "TPU",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "hero_chip",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "A",
    "source_url": "https://cloud.google.com/blog/products/compute/introducing-trillium-6th-generation-tpus",
    "source_date": "2024-05",
    "notes": "TPU v6 Trillium (2024 launch): FP16 BF16 ~926 TFLOPS, HBM 32GB, 對標 H100。TPU v8 Ironwood (2026 Q3 預期): FP16 ~3 PFLOPS, HBM4 192GB, 對標 GB200/GB300。Google 內部 model（Gemini 全系列）100% 用 TPU 訓練。"
  },
  {
    "vendor": "Google",
    "ticker": "GOOG",
    "chip_family": "TPU",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://cloud.google.com/",
    "source_date": "2026-Q1",
    "notes": "Google TPU 戰略獨特：(1) 唯一從 v1 (2015) 至 v8 (2026) 連續 11 年自研 ASIC; (2) 100% 自家設計 + Broadcom 共同 fabless; (3) 算力垂直整合 cost advantage：Gemini 訓練成本 < OpenAI/Anthropic; (4) Cloud Vertex AI 對外，但仍 self-use 主導 (>70% 算力)。"
  },
  {
    "vendor": "AWS",
    "ticker": "AMZN",
    "chip_family": "Trainium",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 1,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://aws.amazon.com/machine-learning/trainium/",
    "source_date": "2024-Q4",
    "notes": "2024 AWS Trainium 1 + Trainium 2 估市占 ~1%。Anthropic Claude Bedrock inference 主用 Trainium 2，Anthropic 訓練計畫用 Trainium 3 (2025)。"
  },
  {
    "vendor": "AWS",
    "ticker": "AMZN",
    "chip_family": "Trainium",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 2,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://aws.amazon.com/machine-learning/trainium/",
    "source_date": "2025-Q4",
    "notes": "2025 AWS Trainium 2 大規模部署 (Project Rainier 400K Trainium 2 cluster)，Anthropic 簽約用此訓練 Claude。市占升至 ~2%。"
  },
  {
    "vendor": "AWS",
    "ticker": "AMZN",
    "chip_family": "Trainium",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 3,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://aws.amazon.com/machine-learning/trainium/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 AWS Trainium 3 量產，市占估 ~3%。AWS Bedrock 上 Claude / Llama / Mistral 多家 OSS 加速採用 Trainium 推論（cost advantage）。"
  },
  {
    "vendor": "AWS",
    "ticker": "AMZN",
    "chip_family": "Trainium",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "hero_chip",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://aws.amazon.com/machine-learning/trainium/",
    "source_date": "2026-Q1",
    "notes": "Trainium 2 (2024 Q4): FP16 1.3 PFLOPS, HBM 96GB, 對標 H200。Trainium 3 (2026 Q1): 預期對標 B200 (FP16 ~3-4 PFLOPS)。專為 LLM 訓練優化（不像 GPU 通用）。"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "chip_family": "Maia",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 0.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://news.microsoft.com/source/features/ai/in-house-chips-silicon-to-service-to-meet-ai-demand/",
    "source_date": "2024-Q4",
    "notes": "2024 Microsoft Maia 100 launch（in-house ASIC），Azure 內部部署初期 ~0.5% 市占。OpenAI GPT-4 inference 部分轉 Maia。"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "chip_family": "Maia",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 1,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://news.microsoft.com/",
    "source_date": "2025-Q4",
    "notes": "2025 Maia 100 全面部署 Azure Cognitive Services，市占 ~1%。Maia 200 (2025 Q4 launch) 對標 H100。"
  },
  {
    "vendor": "Microsoft",
    "ticker": "MSFT",
    "chip_family": "Maia",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 1.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "D",
    "source_url": "https://news.microsoft.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 Maia 200 大規模部署。Microsoft 戰略：減少 NVIDIA 依賴 + 自家 OpenAI inference cost down。市占 ~1.5%。D 級因揭露稀。"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "chip_family": "MTIA",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 0.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://ai.meta.com/blog/meta-training-inference-accelerator-mtia-v2/",
    "source_date": "2024-Q2",
    "notes": "2024 Meta MTIA v2 launch（in-house ASIC），用於 recommendation system 推論（Reels / FB / IG）。市占 ~0.5%。"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "chip_family": "MTIA",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 1,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://ai.meta.com/",
    "source_date": "2025-Q4",
    "notes": "2025 MTIA v2 推廣到 Llama 4 inference workload 部分。市占 ~1%。"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "chip_family": "MTIA",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 1.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "D",
    "source_url": "https://ai.meta.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Meta MTIA Santa Barbara (custom ASIC + 廣達 ODM 6,000 rack 量產)。市占 ~1.5%。D 級。"
  },
  {
    "vendor": "Meta",
    "ticker": "META",
    "chip_family": "MTIA",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "hero_chip",
    "value": null,
    "unit": null,
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "B",
    "source_url": "https://ai.meta.com/blog/meta-training-inference-accelerator-mtia-v2/",
    "source_date": "2026-Q1",
    "notes": "MTIA v2 (2024): FP16 ~354 TFLOPS, HBM 64GB, 90W TDP（極省電）。Recommendation 推論優化，非通用 GPU。Custom ASIC 路線：Meta + 廣達 (Quanta) ODM 合作。"
  },
  {
    "vendor": "Intel",
    "ticker": "INTC",
    "chip_family": "Gaudi",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 0.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html",
    "source_date": "2024-Q4",
    "notes": "2024 Intel Gaudi 3 launch，挑戰 H100 (號稱性能 1.5x、價格 -50%)。但市占 ~0.5%（生態系弱、CUDA lock-in）。Pat Gelsinger 卸任後 Intel AI 戰略不明。"
  },
  {
    "vendor": "Intel",
    "ticker": "INTC",
    "chip_family": "Gaudi",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 0.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.intel.com/",
    "source_date": "2025-Q4",
    "notes": "2025 Gaudi 3 量產但市占未起。Intel 2025 Q3 揭露 Gaudi 3 全年營收 ~$500M (vs NVIDIA H100 收入 ~$50B+)。市占停滯 ~0.5%。"
  },
  {
    "vendor": "Intel",
    "ticker": "INTC",
    "chip_family": "Gaudi",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 0.5,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "D",
    "source_url": "https://www.intel.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Falcon Shores（next-gen Intel AI accelerator）量產延後。市占維持 ~0.5%。Intel AI 戰略仍處重整期。D 級因揭露稀。"
  },
  {
    "vendor": "NVIDIA",
    "ticker": "NVDA",
    "chip_family": "Hopper+Blackwell",
    "line": "ai-chip-alt",
    "year": 2024,
    "category": "market_share",
    "value": 88,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2024-Q4",
    "notes": "2024 NVIDIA AI accelerator 全球市占 ~88%。CUDA 生態系 + 軟硬整合 = 護城河。AMD 5%、Google TPU 3%、AWS 1%、Microsoft 0.5%、Meta 0.5%、其他 2%。"
  },
  {
    "vendor": "NVIDIA",
    "ticker": "NVDA",
    "chip_family": "Hopper+Blackwell",
    "line": "ai-chip-alt",
    "year": 2025,
    "category": "market_share",
    "value": 84,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "B",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2025-Q4",
    "notes": "2025 NVIDIA 市占 ~84%（小幅縮小）。AMD MI325 + Google TPU v6 + AWS Trainium 2 三家加速崛起。但絕對量級仍持續快速成長 (Datacenter $130B+)。"
  },
  {
    "vendor": "NVIDIA",
    "ticker": "NVDA",
    "chip_family": "Blackwell+Rubin",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "market_share",
    "value": 80,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "public",
    "grade": "C",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 NVIDIA 市占估 ~80%。Hyperscaler in-house ASIC（TPU/Trainium/Maia/MTIA）合計從 5% → 13%。AMD 9%。但 Rubin 2026 H2 預期再次擴大 NVIDIA frontier 領先。"
  },
  {
    "vendor": "Cross-vendor",
    "ticker": "all",
    "chip_family": "all",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "strategic_pattern",
    "value": null,
    "unit": null,
    "hq_country": "all",
    "is_public": "all",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "三大趨勢：(1) Hyperscaler in-house ASIC (TPU/Trainium/Maia/MTIA) 從邊緣走向主流，2024 ~5% → 2026 ~13%。(2) AMD 是唯一可規模化挑戰 NVIDIA 的非 in-house 替代品（CDNA 4/5 接近 H200/B200 性能）。(3) Intel Gaudi 持續邊緣化（生態系敗）。長期：Hyperscaler 自用 ASIC + AMD/AWS 共存，但 NVIDIA frontier (Rubin/Rubin Ultra) 仍主導訓練前沿。"
  },
  {
    "vendor": "Cross-vendor",
    "ticker": "all",
    "chip_family": "all",
    "line": "ai-chip-alt",
    "year": 2026,
    "category": "self_use_share",
    "value": 8,
    "unit": "percent",
    "hq_country": "US",
    "is_public": "self-use",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "2026 Hyperscaler in-house ASIC（TPU + Trainium + Maia + MTIA）合計 ~8% 市占。比 2024 ~2% 翻 4 倍。Self-use 路線符合 Hyperscaler 降低 NVIDIA 依賴 + 內部 inference cost 優化策略。"
  }
];

const VENDOR_META = {
  'NVIDIA':       { color: '#76b900', short: 'NVIDIA',   flag: '🇺🇸', model: 'sell-public' },
  'AMD':          { color: '#ed1c24', short: 'AMD',      flag: '🇺🇸', model: 'sell-public' },
  'Google':       { color: '#4285f4', short: 'TPU',      flag: '🇺🇸', model: 'self+cloud' },
  'AWS':          { color: '#ff9900', short: 'Trainium', flag: '🇺🇸', model: 'self+cloud' },
  'Microsoft':    { color: '#00a4ef', short: 'Maia',     flag: '🇺🇸', model: 'self+cloud' },
  'Meta':         { color: '#1877f2', short: 'MTIA',     flag: '🇺🇸', model: 'self-only' },
  'Intel':        { color: '#0071c5', short: 'Gaudi',    flag: '🇺🇸', model: 'sell-public' },
  'Cross-vendor': { color: '#888',    short: 'all',      flag: '🌐', model: 'aggregate' },
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };
const state = { filters: { vendor: 'all', grade: 'all', year: 'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'percent': return r.value + '%';
    case 'K_units': return r.value + 'K';
    case 'GB':      return r.value + 'GB';
    case 'ratio':   return r.value + 'x';
    case 'USD':     return '$' + r.value.toLocaleString();
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
    if (state.filters.vendor !== 'all' && d.vendor !== state.filters.vendor) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (q) {
      const hay = [d.vendor, d.chip_family, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderStats(rows) {
  const vendors = new Set(rows.map(r => r.vendor).filter(v => v !== 'Cross-vendor'));
  // NVIDIA 2026 share
  const nv2026 = rows.find(r => r.vendor === 'NVIDIA' && r.category === 'market_share' && r.year === 2026);
  // In-house ASIC aggregate 2026
  const asic2026 = rows.find(r => r.vendor === 'Cross-vendor' && r.category === 'self_use_share' && r.year === 2026);
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-vendors').textContent = vendors.size;
  document.getElementById('stat-nv-share').textContent = nv2026 ? nv2026.value + '%' : '—';
  document.getElementById('stat-asic-share').textContent = asic2026 ? asic2026.value + '%' : '—';
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

function renderShareTrendChart(rows) {
  const c = document.getElementById('share-chart');
  c.innerHTML = '';
  const years = [2024, 2025, 2026];
  const vendors = ['NVIDIA', 'AMD', 'Google', 'AWS', 'Microsoft', 'Meta', 'Intel'];
  const data = {};
  for (const v of vendors) {
    data[v] = years.map(y => {
      const r = rows.find(x => x.vendor === v && x.category === 'market_share' && x.year === y);
      return r && r.value != null ? r.value : 0;
    });
  }
  const W = 800, H = 360, PAD = 50;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">AI Accelerator Market Share Trend (2024-2026)</text>');
  // Stacked bar per year (each year stacks all vendors + others)
  const groupW = (W - 2 * PAD) / years.length;
  for (let yi = 0; yi < years.length; yi++) {
    const y = years[yi];
    let totalCovered = 0;
    let stackY = H - PAD;
    const xCenter = PAD + yi * groupW + groupW / 2;
    const barW = 100;
    const barX = xCenter - barW / 2;
    for (const v of vendors) {
      const val = data[v][yi];
      if (val === 0) continue;
      totalCovered += val;
      const meta = VENDOR_META[v];
      const segH = (val / 100) * (H - 2 * PAD);
      stackY -= segH;
      svg.push('<rect x="' + barX + '" y="' + stackY + '" width="' + barW + '" height="' + segH + '" fill="' + meta.color + '" opacity="0.9"/>');
      if (segH > 18) svg.push('<text x="' + xCenter + '" y="' + (stackY + segH/2 + 4) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + meta.short + ' ' + val + '%</text>');
    }
    // Others
    const others = 100 - totalCovered;
    if (others > 0) {
      const segH = (others / 100) * (H - 2 * PAD);
      stackY -= segH;
      svg.push('<rect x="' + barX + '" y="' + stackY + '" width="' + barW + '" height="' + segH + '" fill="#444" opacity="0.5"/>');
      if (segH > 16) svg.push('<text x="' + xCenter + '" y="' + (stackY + segH/2 + 4) + '" text-anchor="middle" fill="white" font-size="10">others ' + others + '%</text>');
    }
    svg.push('<text x="' + xCenter + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + y + '</text>');
  }
  // Y axis
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="11" opacity="0.7">' + (25 * i) + '%</text>');
  }
  // Legend
  let lx = PAD;
  for (const v of vendors) {
    const meta = VENDOR_META[v];
    svg.push('<rect x="' + lx + '" y="' + (H - 18) + '" width="10" height="10" fill="' + meta.color + '"/>');
    svg.push('<text x="' + (lx + 14) + '" y="' + (H - 9) + '" fill="currentColor" font-size="10">' + meta.flag + ' ' + meta.short + '</text>');
    lx += 100;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderInhouseAsicChart(rows) {
  const c = document.getElementById('asic-chart');
  c.innerHTML = '';
  const W = 480, H = 280;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Hyperscaler In-House ASIC Trend</text>');
  const inhouse = ['Google', 'AWS', 'Microsoft', 'Meta'];
  const years = [2024, 2025, 2026];
  let yOff = 60;
  for (const v of inhouse) {
    const meta = VENDOR_META[v];
    const vals = years.map(y => {
      const r = rows.find(x => x.vendor === v && x.category === 'market_share' && x.year === y);
      return r ? r.value : 0;
    });
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + meta.flag + ' ' + meta.short + '</text>');
    for (let i = 0; i < years.length; i++) {
      const x = 110 + i * 90;
      const w = (vals[i] / 8) * 80; // max 8% scale
      svg.push('<rect x="' + x + '" y="' + (yOff - 11) + '" width="' + Math.max(w, 2) + '" height="14" fill="' + meta.color + '" opacity="0.85"/>');
      svg.push('<text x="' + (x + Math.max(w, 25)) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="10" font-weight="600">' + vals[i] + '%</text>');
    }
    yOff += 50;
  }
  // Year labels
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (110 + i * 90 + 40) + '" y="50" text-anchor="middle" fill="currentColor" font-size="11" opacity="0.7">' + years[i] + '</text>');
  }
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="11" opacity="0.7">In-house ASIC 合計：2024 ~2% → 2026 ~8% (4x growth)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.vendor !== b.vendor) return a.vendor.localeCompare(b.vendor);
    if (a.year !== b.year) return b.year - a.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = VENDOR_META[r.vendor] || { color: '#888', short: r.vendor, flag: '🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + sanitize(meta.short) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 70) + ((r.notes || '').length > 70 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.chip_family || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderShareTrendChart(rows);
  renderInhouseAsicChart(rows);
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.vendor !== undefined) {
        state.filters.vendor = btn.dataset.vendor;
        document.querySelectorAll('[data-vendor]').forEach(b => b.classList.toggle('active', b === btn));
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
