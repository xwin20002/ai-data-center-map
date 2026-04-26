/* G04 Phase 7 — NVIDIA GPU Market (4 SKU anchor)
 * H100 / H200 / B200 / GB200 — rental price + sell price + shipment + market share
 * Data 2026-04-27 · _research/phase7-gpu-market/gpu-market.jsonl (33 records)
 */

const DATA = [
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2023,
    "category": "rental_price_hr",
    "value": 4.5,
    "unit": "USD_per_hour",
    "provider": "AWS / Azure (peak)",
    "grade": "B",
    "source_url": "https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison",
    "source_date": "2023-Q3",
    "notes": "2023 Q3 H100 peak rental ~$4-8/hr (AWS/Azure on-demand)。Lambda 早期 $2.99-3.49。Hyperscaler shortage 推高價。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2024,
    "category": "rental_price_hr",
    "value": 2.5,
    "unit": "USD_per_hour",
    "provider": "Lambda / RunPod median",
    "grade": "B",
    "source_url": "https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison",
    "source_date": "2024-Q4",
    "notes": "2024 全年 H100 rental 從 $4 跌至 $2-3/hr。Hyperscaler supply 開始追上 demand，spot 價更低。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2025,
    "category": "rental_price_hr",
    "value": 1.5,
    "unit": "USD_per_hour",
    "provider": "Lambda spot",
    "grade": "B",
    "source_url": "https://www.thundercompute.com/blog/ai-gpu-rental-market-trends",
    "source_date": "2025-Q4",
    "notes": "2025 H100 spot 跌到 $1-2/hr。Lambda on-demand $2.99，CoreWeave $6.16。Commodity 化加速。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2026,
    "category": "rental_price_hr",
    "value": 1.49,
    "unit": "USD_per_hour",
    "provider": "Lambda Labs",
    "grade": "A",
    "source_url": "https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 IntuitionLabs 統計：H100 跨 15+ providers 從 $1.49（最低）到 $6.98/hr（AWS/Azure 高端）。Lambda $2.99 / CoreWeave $6.16 為主流定錨。3 年降 5x（vs 2023 $4-8）。A 級官方 pricing page。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2024,
    "category": "shipment_units",
    "value": 2000,
    "unit": "K_units",
    "provider": "NVIDIA total",
    "grade": "B",
    "source_url": "https://www.tomshardware.com/news/nvidia-to-reportedly-triple-output-of-compute-gpus-in-2024-up-to-2-million-h100s",
    "source_date": "2024-Q4",
    "notes": "2024 全年 H100 + H100-NVL + H200 出貨估 ~2M units（Tom's Hardware + TrendForce 整合）。NVIDIA Datacenter segment $115B FY25 主力。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2024,
    "category": "sell_price",
    "value": 30000,
    "unit": "USD",
    "provider": "NVIDIA-direct",
    "grade": "B",
    "source_url": "https://intuitionlabs.ai/articles/nvidia-ai-gpu-pricing-guide",
    "source_date": "2024-Q4",
    "notes": "H100 80GB SXM5 售價 $27K-40K（依採購量），8-GPU HGX baseboard $250K-300K。OEM 議價空間大。NVIDIA 不官方揭露，業界估算。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2026,
    "category": "market_share_deploy",
    "value": 35,
    "unit": "percent",
    "provider": "Cloud aggregate",
    "grade": "C",
    "source_url": "https://siliconanalysts.com/tools/cloud-pricing",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 全球 cloud GPU deployment H100 estimated ~35% (含 H100 + H200，Hopper generation)。逐季被 Blackwell 取代。"
  },
  {
    "gpu_sku": "H100 SXM5 80GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2026,
    "category": "tflops_fp16",
    "value": 1979,
    "unit": "TFLOPS",
    "provider": "NVIDIA spec",
    "grade": "A",
    "source_url": "https://www.nvidia.com/en-us/data-center/h100/",
    "source_date": "2024",
    "notes": "H100 SXM5 FP16/BF16: 1,979 TFLOPS (with sparsity)，FP8: 3,958 TFLOPS。HBM3 80GB / 3.35TB/s 帶寬。TDP 700W。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2024,
    "category": "rental_price_hr",
    "value": 6.0,
    "unit": "USD_per_hour",
    "provider": "Lambda / RunPod (launch)",
    "grade": "B",
    "source_url": "https://jarvislabs.ai/blog/h200-price",
    "source_date": "2024-Q4",
    "notes": "H200 launch 2024 H1，初期 rental $5-8/hr。141GB HBM3e 大容量是 LLM inference 殺手級。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2025,
    "category": "rental_price_hr",
    "value": 4.0,
    "unit": "USD_per_hour",
    "provider": "Lambda median",
    "grade": "B",
    "source_url": "https://jarvislabs.ai/blog/h200-price",
    "source_date": "2025-Q4",
    "notes": "2025 H200 rental 跌至 $3-5/hr。Hyperscaler 大量採購後 supply 充足。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2026,
    "category": "rental_price_hr",
    "value": 3.8,
    "unit": "USD_per_hour",
    "provider": "Jarvislabs",
    "grade": "A",
    "source_url": "https://jarvislabs.ai/blog/h200-price",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 H200: Jarvislabs $3.80/hr (最便宜 on-demand)，Google Cloud Spot $3.72/hr，AWS/Azure $10.60/hr 高端。價格分化大。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2025,
    "category": "sell_price",
    "value": 39000,
    "unit": "USD",
    "provider": "NVIDIA-direct",
    "grade": "B",
    "source_url": "https://intuitionlabs.ai/articles/nvidia-ai-gpu-pricing-guide",
    "source_date": "2025-Q4",
    "notes": "H200 8-GPU HGX system $315K = ~$39K/chip。比 H100 + 30% premium 因 141GB HBM3e。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2025,
    "category": "shipment_units",
    "value": 600,
    "unit": "K_units",
    "provider": "NVIDIA total",
    "grade": "C",
    "source_url": "https://evertiq.com/news/56157",
    "source_date": "2025-Q4",
    "notes": "2025 H200 出貨估 ~600K units (含中國市場 H200 受限版)。"
  },
  {
    "gpu_sku": "H200 SXM 141GB",
    "generation": "Hopper",
    "line": "gpu",
    "year": 2026,
    "category": "tflops_fp16",
    "value": 1979,
    "unit": "TFLOPS",
    "provider": "NVIDIA spec",
    "grade": "A",
    "source_url": "https://www.nvidia.com/en-us/data-center/h200/",
    "source_date": "2024",
    "notes": "H200 FP16/BF16 同 H100 (1,979 TFLOPS)，但 HBM3e 141GB / 4.8TB/s 帶寬 (vs H100 80GB / 3.35TB/s)。LLM inference 1.4-1.9x 加速 (memory-bound workload)。"
  },
  {
    "gpu_sku": "B200 HGX",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "rental_price_hr",
    "value": 6.0,
    "unit": "USD_per_hour",
    "provider": "Lambda spot (launch)",
    "grade": "B",
    "source_url": "https://www.thundercompute.com/blog/ai-gpu-rental-market-trends",
    "source_date": "2025-Q1",
    "notes": "B200 量產初期 $6+/hr，Lambda 後期降至 $5.50/hr。供應緊張。"
  },
  {
    "gpu_sku": "B200 HGX",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2026,
    "category": "rental_price_hr",
    "value": 5.5,
    "unit": "USD_per_hour",
    "provider": "Lambda median (cross-cloud average $20)",
    "grade": "A",
    "source_url": "https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 B200: Lambda $3.79/hr on-demand (best price)，Lambda spot $5.50/hr，AWS Capacity Blocks $9.36/hr，cross-cloud 平均 $20.14/hr，最低 $10.50/hr。價格分化反映 supply constraint。"
  },
  {
    "gpu_sku": "B200 HGX",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "sell_price",
    "value": 35000,
    "unit": "USD",
    "provider": "NVIDIA-direct",
    "grade": "B",
    "source_url": "https://tech-insider.org/nvidia-blackwell-gpu-pricing/",
    "source_date": "2025-Q4",
    "notes": "B200 個別售價估 $30-40K/chip。Epoch AI 揭露製造成本約 $6,400/chip，毛利率 ~80%+。"
  },
  {
    "gpu_sku": "B200 HGX",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "shipment_units",
    "value": 1500,
    "unit": "K_units",
    "provider": "NVIDIA Blackwell total",
    "grade": "B",
    "source_url": "https://markets.financialcontent.com/wral/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
    "source_date": "2025-Q4",
    "notes": "2025 全年 Blackwell (B100 + B200 + GB200) 出貨估 1.5-2M units。NVIDIA Q4 FY26 揭露 sold out 至 mid-2026，backlog 3.6M units。"
  },
  {
    "gpu_sku": "B200 HGX",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2026,
    "category": "tflops_fp16",
    "value": 4500,
    "unit": "TFLOPS",
    "provider": "NVIDIA spec",
    "grade": "A",
    "source_url": "https://www.nvidia.com/en-us/data-center/blackwell-architecture/",
    "source_date": "2024",
    "notes": "B200 FP16: 4,500 TFLOPS (~2.3x H100)，FP4: 9,000 TFLOPS。HBM3e 192GB / 8TB/s。TDP 1,000W。整體 throughput vs H100 約 2.3-3x (workload dependent)。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "rental_price_hr",
    "value": 13.25,
    "unit": "USD_per_hour",
    "provider": "Lambda / CoreWeave (per GPU)",
    "grade": "B",
    "source_url": "https://getdeploying.com/gpus/nvidia-gb200",
    "source_date": "2025-Q3",
    "notes": "GB200 launch 2025 Q1，Q3 cloud rental $13.25/hr per GPU (rack-level $11K+/hr)。供應極緊張。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2026,
    "category": "rental_price_hr",
    "value": 17.85,
    "unit": "USD_per_hour",
    "provider": "Lambda / CoreWeave (per GPU)",
    "grade": "A",
    "source_url": "https://getdeploying.com/gpus/nvidia-gb200",
    "source_date": "2026-Q1",
    "notes": "2026 Q1 GB200 per GPU on-demand $17.85/hr (vs 2025 Q3 $13.25 漲 35%)。**逆勢漲價**反映 supply 仍嚴重不足。整 NVL72 rack-level rental 超過 $1K/hr per rack。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2024,
    "category": "shipment_units",
    "value": 420,
    "unit": "K_units",
    "provider": "NVIDIA H2 2024",
    "grade": "A",
    "source_url": "https://markets.financialcontent.com/wral/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
    "source_date": "2024-Q4",
    "notes": "2024 H2 GB200 出貨 420K units (NVIDIA 公告)，主要 OpenAI/Oracle/Microsoft/Meta hyperscaler 客戶。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "sell_price",
    "value": 3000000,
    "unit": "USD",
    "provider": "NVIDIA-direct (per rack)",
    "grade": "B",
    "source_url": "https://tech-insider.org/nvidia-blackwell-gpu-pricing/",
    "source_date": "2025-Q4",
    "notes": "GB200 NVL72 整 rack 售價 $3M+ (含 72 GPU + NVLink switch + tray + cooling)。每 GPU $40-45K。NVIDIA 從晶片廠變 rack 廠。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2026,
    "category": "tflops_fp16",
    "value": 360,
    "unit": "PFLOPS",
    "provider": "NVIDIA spec (per rack)",
    "grade": "A",
    "source_url": "https://www.nvidia.com/en-us/data-center/gb200-nvl72/",
    "source_date": "2024",
    "notes": "GB200 NVL72 整 rack: FP16 360 PFLOPS, FP4 1.4 EFLOPS。HBM 13.5TB total。TDP 132kW per rack。性能對比 H100 cluster 同算力 25x 少 GPU、30x 少電。"
  },
  {
    "gpu_sku": "GB200 NVL72",
    "generation": "Blackwell",
    "line": "gpu",
    "year": 2025,
    "category": "shipment_units",
    "value": 30,
    "unit": "K_units",
    "provider": "NVIDIA full-year (rack)",
    "grade": "B",
    "source_url": "https://markets.financialcontent.com/wral/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
    "source_date": "2025-Q4",
    "notes": "2025 全年 GB200 NVL72 整 rack 出貨估 30K (= 2.16M GPU @ 72 GPU/rack)。Foxconn 月產能 2025 H2 達 1,700-1,800 racks，2026 目標 8,000-10,000 racks/month 峰值。"
  },
  {
    "gpu_sku": "GB300 NVL72",
    "generation": "Blackwell Ultra",
    "line": "gpu",
    "year": 2025,
    "category": "rental_price_hr",
    "value": 22,
    "unit": "USD_per_hour",
    "provider": "Lambda / CoreWeave (early)",
    "grade": "C",
    "source_url": "https://getdeploying.com/gpus/nvidia-gb200",
    "source_date": "2025-Q4",
    "notes": "GB300 launch 2025 Q4，初期 rental ~$22/hr/GPU (vs GB200 $17.85)。192GB HBM3e (vs GB200 144GB)，FP4 1.5x。"
  },
  {
    "gpu_sku": "GB300 NVL72",
    "generation": "Blackwell Ultra",
    "line": "gpu",
    "year": 2026,
    "category": "shipment_units",
    "value": 80,
    "unit": "K_units",
    "provider": "NVIDIA forecast",
    "grade": "C",
    "source_url": "https://markets.financialcontent.com/wral/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
    "source_date": "2026-Q1",
    "notes": "2026 全年 GB300 NVL72 整 rack 出貨估 80K racks (= 5.76M GPU)。GB200 + GB300 合計貢獻 NVIDIA Datacenter 主力。"
  },
  {
    "gpu_sku": "Cross-SKU",
    "generation": "all",
    "line": "gpu",
    "year": 2026,
    "category": "backlog_units",
    "value": 3600,
    "unit": "K_units",
    "provider": "NVIDIA Q4 FY26",
    "grade": "A",
    "source_url": "https://markets.financialcontent.com/wral/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
    "source_date": "2025-12",
    "notes": "2025/12 NVIDIA 揭露 Blackwell backlog 3.6M units (sold out 至 mid-2026)。Hyperscaler (Microsoft / Google / Meta / AWS / Oracle) + neocloud (CoreWeave / Lambda / Crusoe) 大量預訂。"
  },
  {
    "gpu_sku": "Cross-SKU",
    "generation": "all",
    "line": "gpu",
    "year": 2025,
    "category": "shipment_growth_yoy",
    "value": 55,
    "unit": "percent",
    "provider": "NVIDIA HE GPU full-year",
    "grade": "B",
    "source_url": "https://evertiq.com/news/56157",
    "source_date": "2025-Q4",
    "notes": "2025 NVIDIA high-end GPU 出貨 +55% YoY (vs 2024)。Datacenter 營收 $130B+ (FY26 估)。"
  },
  {
    "gpu_sku": "Cross-SKU",
    "generation": "all",
    "line": "gpu",
    "year": 2026,
    "category": "rental_commodity_ratio",
    "value": 5,
    "unit": "ratio",
    "provider": "Industry analysis",
    "grade": "B",
    "source_url": "https://www.thundercompute.com/blog/ai-gpu-rental-market-trends",
    "source_date": "2026-03",
    "notes": "H100 rental 從 2023 peak $4-8/hr → 2026 spot $1.49/hr，3 年降 5x (commodity 化)。但 newest gen GB200 逆勢漲價 35%。**舊代 commodity + 新代溢價** 的雙速市場是 GPU rental 結構特徵。"
  },
  {
    "gpu_sku": "Rubin / VR200",
    "generation": "Rubin",
    "line": "gpu",
    "year": 2026,
    "category": "release_forecast",
    "value": null,
    "unit": null,
    "provider": "NVIDIA roadmap",
    "grade": "C",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2026-Q1",
    "notes": "Rubin (VR200 NVL144) 預期 2026 H2 量產，Rubin Ultra (VR300 NVL576) 2027 H2。FP4 性能比 Blackwell ~2.5x，HBM4 / 高頻 NVLink。預期再次推升 frontier rental 價，舊代 H100/H200 commodity 化加速。"
  },
  {
    "gpu_sku": "Cross-SKU",
    "generation": "all",
    "line": "gpu",
    "year": 2026,
    "category": "hyperscaler_capex",
    "value": 350,
    "unit": "USD_B",
    "provider": "Top 5 Hyperscaler 2026 capex",
    "grade": "B",
    "source_url": "https://siliconanalysts.com/tools/cloud-pricing",
    "source_date": "2026-Q1",
    "notes": "Top 5 Hyperscaler (Microsoft + Google + Meta + AWS + Oracle) 2026 estimated AI capex $350B+ (vs 2025 ~$200B)。NVIDIA GPU 採購占大半 (~$150-200B)。"
  },
  {
    "gpu_sku": "Cross-SKU",
    "generation": "all",
    "line": "gpu",
    "year": 2026,
    "category": "stargate_demand",
    "value": 1200,
    "unit": "K_units",
    "provider": "OpenAI Stargate Phase 1",
    "grade": "C",
    "source_url": "https://www.cnbc.com/2025/09/23/openai-first-data-center-in-500-billion-stargate-project-up-in-texas.html",
    "source_date": "2025-09",
    "notes": "Stargate Phase 1 (Abilene, TX) 預估 1.2M GPU 規模。$500B 五年計劃含 Microsoft Azure + Oracle + Crusoe + SoftBank 多方融資。"
  }
];

const SKU_META = {
  'H100 SXM5 80GB':   { color: '#76b900', short: 'H100',  gen: 'Hopper' },
  'H200 SXM 141GB':   { color: '#5a9100', short: 'H200',  gen: 'Hopper' },
  'B200 HGX':         { color: '#b794f4', short: 'B200',  gen: 'Blackwell' },
  'GB200 NVL72':      { color: '#805ad5', short: 'GB200', gen: 'Blackwell' },
  'GB300 NVL72':      { color: '#553c9a', short: 'GB300', gen: 'Blackwell Ultra' },
  'Rubin / VR200':    { color: '#ff6b35', short: 'Rubin', gen: 'Rubin (forecast)' },
  'Cross-SKU':        { color: '#888',    short: 'all',   gen: 'aggregate' },
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };
const state = { filters: { sku: 'all', grade: 'all', year: 'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'USD_per_hour': return '$' + r.value + '/hr';
    case 'USD':          return r.value >= 1000000 ? '$' + (r.value/1000000).toFixed(1) + 'M' : '$' + (r.value/1000).toFixed(0) + 'K';
    case 'USD_B':        return '$' + r.value + 'B';
    case 'K_units':      return r.value + 'K';
    case 'percent':      return r.value + '%';
    case 'TFLOPS':       return r.value + ' TFLOPS';
    case 'PFLOPS':       return r.value + ' PFLOPS';
    case 'ratio':        return r.value + 'x';
    default:             return r.value;
  }
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.sku !== 'all' && d.gpu_sku !== state.filters.sku) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (q) {
      const hay = [d.gpu_sku, d.generation, d.category, d.notes, d.provider].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderStats(rows) {
  const skus = new Set(rows.map(r => r.gpu_sku).filter(s => s !== 'Cross-SKU'));
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  // Latest 2026 H100 rental
  const h100_2026 = rows.find(r => r.gpu_sku === 'H100 SXM5 80GB' && r.year === 2026 && r.category === 'rental_price_hr');
  // Latest 2026 GB200 rental
  const gb200_2026 = rows.find(r => r.gpu_sku === 'GB200 NVL72' && r.year === 2026 && r.category === 'rental_price_hr');
  document.getElementById('stat-skus').textContent = skus.size;
  document.getElementById('stat-h100').textContent = h100_2026 ? '$' + h100_2026.value + '/hr' : '—';
  document.getElementById('stat-gb200').textContent = gb200_2026 ? '$' + gb200_2026.value + '/hr' : '—';
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

function renderTrendChart(rows, category, containerId, title, yMax, yUnit, skus) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const years = [2023, 2024, 2025, 2026];
  const data = {};
  for (const s of skus) {
    data[s] = years.map(y => {
      const r = rows.find(x => x.gpu_sku === s && x.category === category && x.year === y);
      return r && r.value != null ? r.value : null;
    });
  }
  const W = 800, H = 320, PAD = 50;
  const groupW = (W - 2 * PAD) / years.length;
  const barW = groupW / (skus.length + 0.5);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">' + title + '</text>');
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    const v = (yMax / 4 * i).toFixed(yMax < 100 ? 1 : 0);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.15"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="11" opacity="0.7">' + v + yUnit + '</text>');
  }
  for (let yi = 0; yi < years.length; yi++) {
    const xBase = PAD + yi * groupW + (groupW - barW * skus.length) / 2;
    for (let pi = 0; pi < skus.length; pi++) {
      const s = skus[pi];
      const v = data[s][yi];
      if (v == null) continue;
      const meta = SKU_META[s];
      const barX = xBase + pi * barW;
      const barH = (v / yMax) * (H - 2 * PAD);
      const barY = H - PAD - barH;
      svg.push('<rect x="' + barX + '" y="' + barY + '" width="' + (barW - 2) + '" height="' + barH + '" fill="' + meta.color + '" opacity="0.85"/>');
      svg.push('<text x="' + (barX + barW/2 - 1) + '" y="' + (barY - 4) + '" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">' + v + '</text>');
    }
    svg.push('<text x="' + (PAD + yi * groupW + groupW/2) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[yi] + '</text>');
  }
  let lx = PAD;
  for (const s of skus) {
    const meta = SKU_META[s];
    svg.push('<rect x="' + lx + '" y="' + (H - 16) + '" width="11" height="11" fill="' + meta.color + '"/>');
    svg.push('<text x="' + (lx + 16) + '" y="' + (H - 6) + '" fill="currentColor" font-size="11">' + meta.short + '</text>');
    lx += 100;
  }
  svg.push('</svg>');
  container.innerHTML = svg.join('');
}

function renderSpecChart(rows) {
  const c = document.getElementById('spec-chart');
  c.innerHTML = '';
  const skus = ['H100 SXM5 80GB', 'H200 SXM 141GB', 'B200 HGX'];
  const W = 480, H = 280;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">FP16 TFLOPS Comparison</text>');
  let yOff = 60;
  const maxT = 4500;
  for (const s of skus) {
    const r = rows.find(x => x.gpu_sku === s && x.category === 'tflops_fp16');
    if (!r) continue;
    const meta = SKU_META[s];
    const barW = (r.value / maxT) * 360;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + meta.short + '</text>');
    svg.push('<rect x="80" y="' + (yOff - 11) + '" width="' + barW + '" height="16" fill="' + meta.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (85 + barW) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">' + r.value + ' TFLOPS</text>');
    yOff += 50;
  }
  // GB200 NVL72 rack-level (per rack 360 PFLOPS)
  svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">GB200 rack</text>');
  svg.push('<rect x="80" y="' + (yOff - 11) + '" width="360" height="16" fill="' + SKU_META['GB200 NVL72'].color + '" opacity="0.85" rx="2"/>');
  svg.push('<text x="' + 250 + '" y="' + (yOff + 1) + '" fill="white" font-size="11" font-weight="600">360 PFLOPS (per rack)</text>');
  svg.push('<text x="' + (W/2) + '" y="' + (H - 12) + '" text-anchor="middle" fill="currentColor" font-size="11" opacity="0.7">B200 vs H100: ~2.3x throughput; GB200 NVL72 = 25x H100 cluster</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderInsightChart(rows) {
  const c = document.getElementById('insight-chart');
  c.innerHTML = '';
  const W = 480, H = 280;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2026 Market Snapshot</text>');
  // 2 boxes
  const items = [
    { label: 'H100 rental decay', val: '5x ↓', sub: '$4-8/hr (2023) → $1.49/hr (2026 spot)', color: '#10b981' },
    { label: 'GB200 逆勢漲價', val: '+35%', sub: '$13.25/hr (2025 Q3) → $17.85/hr (2026 Q1)', color: '#ef4444' },
    { label: 'Blackwell backlog', val: '3.6M', sub: 'Sold out 至 mid-2026 (NVIDIA Q4 FY26)', color: '#3b82f6' },
    { label: '2026 Hyperscaler capex', val: '$350B', sub: 'Top 5: MS + GOOG + META + AMZN + ORCL', color: '#8b5cf6' },
  ];
  let y = 60;
  for (const item of items) {
    svg.push('<text x="20" y="' + y + '" fill="currentColor" font-size="11" opacity="0.85">' + item.label + '</text>');
    svg.push('<text x="' + (W - 20) + '" y="' + y + '" text-anchor="end" fill="' + item.color + '" font-size="18" font-weight="700">' + item.val + '</text>');
    svg.push('<text x="20" y="' + (y + 18) + '" fill="currentColor" font-size="10" opacity="0.7">' + item.sub + '</text>');
    y += 50;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.gpu_sku !== b.gpu_sku) return a.gpu_sku.localeCompare(b.gpu_sku);
    if (a.year !== b.year) return b.year - a.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = SKU_META[r.gpu_sku] || { color: '#888', short: r.gpu_sku };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + sanitize(meta.short) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 70) + ((r.notes || '').length > 70 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.provider || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderTrendChart(rows, 'rental_price_hr', 'rental-chart', 'Rental Price Trend ($/GPU/hour, 2023-2026)', 25, '$', ['H100 SXM5 80GB', 'H200 SXM 141GB', 'B200 HGX', 'GB200 NVL72']);
  renderTrendChart(rows, 'shipment_units', 'shipment-chart', 'Shipment Units (K, 2023-2026)', 2200, 'K', ['H100 SXM5 80GB', 'H200 SXM 141GB', 'B200 HGX', 'GB200 NVL72']);
  renderSpecChart(rows);
  renderInsightChart(rows);
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.sku !== undefined) {
        state.filters.sku = btn.dataset.sku;
        document.querySelectorAll('[data-sku]').forEach(b => b.classList.toggle('active', b === btn));
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
