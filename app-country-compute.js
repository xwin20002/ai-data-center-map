/* G04 Phase 9 — Country Compute Race (US vs CN)
 * Dual methodology: CAICT FP16 intelligent compute vs Epoch AI frontier GPU cluster
 * Data 2026-04-27 · _research/phase9-country-compute/country-compute.jsonl (32 records)
 *
 * 兩口徑差 3-4x 的爭議刻意保留：
 *   CAICT 答 "total intelligent compute deployed"（含 inference + edge + 國產 ASIC）
 *   Epoch AI 答 "frontier training capacity"（嚴格只計 NVIDIA datacenter GPU equivalent）
 *   兩者都是有效的，回答的是不同問題
 */

const DATA = [
  {
    "country": "CN",
    "year": 2024,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 246,
    "unit": "EFLOPS",
    "grade": "A",
    "source_url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202401/P020250114401876249100.pdf",
    "source_date": "2024-12",
    "notes": "CAICT (中国信通院) 2024 全年中国智能算力规模 246 EFlops（FP16 等效）。含 NVIDIA H800/A800 + 国产昇腾 + 寒武纪 + 海光 + 壁仞等。包含训练 + 推论。A 级官方蓝皮书。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 782,
    "unit": "EFLOPS",
    "grade": "A",
    "source_url": "https://www.cls.cn/detail/2304820",
    "source_date": "2025-06",
    "notes": "CAICT 2025/06 截至中国智能算力 782 EFlops（YoY +96%）。占中国总算力 81%（总 962 EFlops）。占全球 21%。Q3-Q4 持续放量预期年底破 1000 EFlops。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute_yearend",
    "value": 1100,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202602/P020260202487301304903.pdf",
    "source_date": "2026-01",
    "notes": "2025 全年末 CAICT 估中国智能算力突破 1100 EFlops（H2 持续加速 + 国产昇腾 910C 量产 + 寒武纪国家级采购）。B 级（年初推估）。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute_forecast",
    "value": 1700,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2026-Q1",
    "notes": "CAICT 预测 2026 中国智能算力进入 ZFlops 级（1000+ EFlops 起跳）。Base case 估 1700 EFlops（YoY +55%）。Bull 2000+，Bear 1300。C 级 forecast。"
  },
  {
    "country": "CN",
    "year": 2024,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 50,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://epoch.ai/data/largest-training-runs",
    "source_date": "2024-Q4",
    "notes": "Epoch AI 2024 中国 frontier GPU cluster 算力估 ~50 EFLOPS（H800 + 国产）。严格只计 datacenter GPU 训练用 cluster，不含推论 + 边缘 + 较弱 ASIC。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 200,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://epoch.ai/data-insights/",
    "source_date": "2025-Q4",
    "notes": "Epoch AI 2025 中国 frontier GPU cluster 算力估 ~200 EFLOPS。**与 CAICT 782 EFlops 差近 4x**，差距来源：(1) Epoch 严格只计 NVIDIA datacenter equivalent (2) CAICT 含华为昇腾 + 寒武纪 + 海光等国产 ASIC (3) CAICT 含推论 + 边缘 + 多种精度 (FP16/BF16/INT8)。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute_forecast",
    "value": 350,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://epoch.ai/",
    "source_date": "2026-Q1",
    "notes": "Epoch AI 2026 中国 frontier GPU cluster 估 ~350 EFLOPS。即使含华为昇腾 910C 加速，仍受美对中出口管制（H100/H200/B200 禁运）严重压制。"
  },
  {
    "country": "US",
    "year": 2024,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 600,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2024-12",
    "notes": "CAICT 估 2024 美国智能算力 ~600 EFlops（含 NVIDIA H100/H200 + Google TPU + AWS Trainium + Microsoft Maia + Meta MTIA + AMD MI300）。约为中国 2.4x。B 级（CAICT 报告中提及）。"
  },
  {
    "country": "US",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 1500,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2025-Q4",
    "notes": "CAICT 估 2025 美国智能算力 ~1500 EFlops（B200/GB200 大规模量产 + Stargate 启动 + Hyperscaler in-house ASIC 加速）。占全球 ~40%。仍是中国 2x。"
  },
  {
    "country": "US",
    "year": 2026,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute_forecast",
    "value": 2800,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2026-Q1",
    "notes": "CAICT 估 2026 美国智能算力 ~2800 EFlops（GB300 全面量产 + Rubin 2026 H2 + Stargate Phase 1 兑现 1.2M GPU）。中美差距维持 ~2x（vs 中国 1700）。"
  },
  {
    "country": "US",
    "year": 2024,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 175,
    "unit": "EFLOPS",
    "grade": "A",
    "source_url": "https://epoch.ai/data/largest-training-runs",
    "source_date": "2024-Q4",
    "notes": "Epoch AI 2024 美国 frontier GPU cluster 算力 ~175 EFLOPS（NVIDIA H100/H200 主力 + xAI Memphis 100K H100）。严格 frontier 训练口径。"
  },
  {
    "country": "US",
    "year": 2025,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 500,
    "unit": "EFLOPS",
    "grade": "A",
    "source_url": "https://epoch.ai/data-insights/",
    "source_date": "2025-Q4",
    "notes": "Epoch AI 2025 美国 frontier GPU cluster ~500 EFLOPS（B200/GB200 量产 + xAI Colossus 200K + Stargate Abilene 启动）。**与 CAICT 1500 差 3x**（差距来源同中国 case）。"
  },
  {
    "country": "US",
    "year": 2026,
    "methodology": "Epoch_AI_GPU",
    "line": "country-compute",
    "category": "intelligent_compute_forecast",
    "value": 1000,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://epoch.ai/",
    "source_date": "2026-Q1",
    "notes": "Epoch AI 2026 美国 frontier GPU cluster 估 ~1000 EFLOPS（GB300 + Rubin H2 + Stargate Phase 1 ~1.2M GPU 部分上线）。中美 frontier GPU 差距 2.85x（vs 中国 350）。"
  },
  {
    "country": "Global",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "intelligent_compute",
    "value": 3820,
    "unit": "EFLOPS",
    "grade": "A",
    "source_url": "https://www.cls.cn/detail/2304820",
    "source_date": "2025-06",
    "notes": "CAICT 2025/06 全球智能算力规模 3820 EFlops（占全球总算力 4495 EFlops 的 85%）。中国 782 占 21%、美国估 1500 占 ~40%、其他 ~1500（EU + Japan + Korea + India 等）。"
  },
  {
    "country": "Global",
    "year": 2025,
    "methodology": "comparison",
    "line": "country-compute",
    "category": "caict_epoch_ratio",
    "value": 3.3,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://epoch.ai/",
    "source_date": "2025-Q4",
    "notes": "**CAICT/Epoch 口径差距比例**：US 1500/500 = 3.0x、CN 782/200 = 3.9x、Global 3820/1200 = 3.2x。两者差异核心：(1) Epoch 只计 NVIDIA frontier GPU cluster (2) CAICT 含所有 AI accelerator (3) CAICT 计 inference + edge + 多精度 (4) 中国端差距更大因国产 ASIC 计入。**两个口径都是有效的，回答的问题不同**：Epoch 答 frontier training capacity，CAICT 答 total intelligent compute deployed。"
  },
  {
    "country": "CN",
    "year": 2024,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "domestic_chip_share",
    "value": 18,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.sina.com.cn/roll/2025-10-09/doc-inftfzss2467211.shtml",
    "source_date": "2025-10",
    "notes": "2024 中国智能算力中国产 AI 芯片占比 ~18%（华为昇腾 ~10% + 寒武纪 + 海光 + 其他）。NVIDIA H800/H20 + 进口 ~70%、AMD/其他 ~12%。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "domestic_chip_share",
    "value": 35,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://finance.sina.com.cn/roll/2025-10-09/doc-inftfzss2467211.shtml",
    "source_date": "2025-Q4",
    "notes": "2025 中国国产 AI 芯片占比升至 ~35%（华为昇腾 910B/910C 大量量产 + 寒武纪国家采购 + 海光 DCU 增量）。NVIDIA H20（中国特供）占比下降至 ~50%。**国产化加速**响应美对中 H100/H200 全面禁运。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "domestic_chip_share",
    "value": 55,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2026-Q1",
    "notes": "2026 中国国产 AI 芯片占比预期突破 50%（华为 910C/910D 量产 + 寒武纪 MLU590 + 国家级 IDC 国产化政策）。NVIDIA 在中国市场占比可能跌至 35-40%。**国产化拐点**。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "domestic_eflops",
    "value": 274,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://finance.sina.com.cn/",
    "source_date": "2025-Q4",
    "notes": "2025 中国国产 AI 芯片贡献算力 ~274 EFlops（782 × 35%）。其中华为昇腾估 ~150 EFlops（最大单一国产 vendor）、寒武纪 ~50、海光 ~30、壁仞/燧原/沐曦/摩尔线程合计 ~44。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "CAICT_FP16",
    "line": "country-compute",
    "category": "domestic_eflops_forecast",
    "value": 935,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2026-Q1",
    "notes": "2026 中国国产 AI 芯片贡献算力估 ~935 EFlops（1700 × 55%）。华为昇腾领先优势扩大估 ~600 EFlops。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "domestic_vendor_huawei",
    "value": 150,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://www.huawei.com/en/news/2025/11/huawei-ascend",
    "source_date": "2025-Q4",
    "notes": "华为昇腾 2025 全年部署算力估 ~150 EFlops（占中国国产 ~55%）。910B 主力 + 910C 量产（2025 H2 launch）。Atlas 900 SuperCluster A2 单 cluster 1.6 EFlops。任正非 2025/06 公开承认昇腾「单芯片落后 NVIDIA 一代」但 cluster 整体性能可比 H100。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "domestic_vendor_cambricon",
    "value": 50,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://www.cambricon.com/",
    "source_date": "2025-Q4",
    "notes": "寒武纪 (688256.SH) 2025 部署算力估 ~50 EFlops。MLU370/590 系列 + 国家级超算中心。2025 全年营收估 RMB 80 亿（vs 2024 RMB 12 亿）+550% YoY。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "domestic_vendor_hygon",
    "value": 30,
    "unit": "EFLOPS",
    "grade": "C",
    "source_url": "https://www.hygon.cn/",
    "source_date": "2025-Q4",
    "notes": "海光信息 (688041.SH) DCU 系列 2025 部署算力估 ~30 EFlops。x86 兼容 + AMD GPU 架构。2025 营收估 RMB 60 亿。深算系列对标 NVIDIA H100。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "domestic_vendor_others",
    "value": 44,
    "unit": "EFLOPS",
    "grade": "D",
    "source_url": "https://www.semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "其他国产 GPU/ASIC 2025 合计估 ~44 EFlops。含壁仞 (BR100, 训练) + 燧原 (CloudBlazer, 训练+推论) + 沐曦 (MetaX C500) + 摩尔线程 (MTT S4000) + 天数智芯 + 比特大陆。多为 D 级（揭露稀，估算）。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "import_constraint",
    "line": "country-compute",
    "category": "nvidia_china_special",
    "value": 380,
    "unit": "EFLOPS",
    "grade": "B",
    "source_url": "https://www.tomshardware.com/tech-industry/semiconductors/nvidia-prepares-h200-shipments-to-china-as-chip-war-lines-blur",
    "source_date": "2025-Q4",
    "notes": "NVIDIA 中国市场 2025 部署算力估 ~380 EFlops（782 × 49%）。主力 H20（中国特供，性能 ~H100 的 1/4）+ 残留 H800/A800（2023 出口前订单）+ 2025/12 重启 H200 中国版（5K-10K modules ≈ 40K-80K chips）。"
  },
  {
    "country": "CN",
    "year": 2024,
    "methodology": "geopolitical",
    "line": "country-compute",
    "category": "us_export_ban_milestone",
    "value": null,
    "unit": null,
    "grade": "A",
    "source_url": "https://www.bis.doc.gov/",
    "source_date": "2024-12",
    "notes": "美对中 AI 芯片出口管制时间线：2022/10 限制 H100/A100; 2023/10 扩大限制 + 禁 H800/A800; 2024/12 进一步限制 H20 + 高带宽 HBM3e (FLOP/s × HBM 带宽阈值)。倒逼中国国产化加速。A 级 BIS 公告。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "geopolitical",
    "line": "country-compute",
    "category": "us_export_ban_milestone",
    "value": null,
    "unit": null,
    "grade": "A",
    "source_url": "https://www.bis.doc.gov/",
    "source_date": "2025-Q4",
    "notes": "2025/12 美中贸易缓和，NVIDIA 重启 H200 对中销售（25% 关税 + 限量 5K-10K modules）。但 GB200/B200/B300 仍全面禁运。Trump 2025 政策为「限量但不全断」转向。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "geopolitical",
    "line": "country-compute",
    "category": "us_export_ban_milestone",
    "value": null,
    "unit": null,
    "grade": "C",
    "source_url": "https://www.bis.doc.gov/",
    "source_date": "2026-Q1",
    "notes": "2026 美对中 export 政策仍在调整。中国回应：(1) 国产 AI 芯片产业化加速; (2) 中央明确目标 2026 国产 AI 算力比例破 50%; (3) 寒武纪 + 海光 IPO 后融资扩产; (4) 华为昇腾全栈生态加快建设。"
  },
  {
    "country": "Global",
    "year": 2025,
    "methodology": "comparison",
    "line": "country-compute",
    "category": "us_cn_gap",
    "value": 1.92,
    "unit": "ratio",
    "grade": "B",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2025-Q4",
    "notes": "2025 美中智能算力 gap：CAICT 口径 1500/782 = 1.92x（缩小，因中国国产化加速）。Epoch 口径 500/200 = 2.5x（仍差距大）。**两个口径都显示 gap 在缩小**，但 Epoch 显示 frontier training 仍美主导。"
  },
  {
    "country": "Global",
    "year": 2026,
    "methodology": "comparison",
    "line": "country-compute",
    "category": "us_cn_gap_forecast",
    "value": 1.65,
    "unit": "ratio",
    "grade": "C",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2026-Q1",
    "notes": "2026 美中算力 gap 预期：CAICT 2800/1700 = 1.65x（持续缩小）。Epoch 1000/350 = 2.86x（frontier gap 仍大）。**结构性观察**：中国 inference + edge + 推论可能反超美国，但 frontier training 仍落后 1-2 代。"
  },
  {
    "country": "CN",
    "year": 2026,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "huawei_ascend_910c",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://www.huawei.com/",
    "source_date": "2026-Q1",
    "notes": "华为昇腾 910C 2025 H2 量产 launch，性能估 ~H100 的 60-70%（cluster scaling 后单 cluster 接近 H200）。910D（2026 H2 预期）预计接近 H200 单芯片性能。Atlas 900 SuperCluster 部署超 50 个国家级智算中心。"
  },
  {
    "country": "CN",
    "year": 2025,
    "methodology": "vendor_breakdown",
    "line": "country-compute",
    "category": "national_compute_centers",
    "value": 35,
    "unit": "centers",
    "grade": "B",
    "source_url": "https://www.caict.ac.cn/",
    "source_date": "2025-Q4",
    "notes": "中国国家级智算中心 2025 部署 35+ 个（北京、上海、深圳、合肥、武汉、成都、贵州 etc.）。每中心算力 1-10 EFlops。「东数西算」工程框架下，西部（贵州、内蒙古）集中部署 inference + 训练。"
  }
];

const COUNTRY_META = {
  'US':     { color: '#3b82f6', flag: '🇺🇸', short: 'US' },
  'CN':     { color: '#ef4444', flag: '🇨🇳', short: 'CN' },
  'Global': { color: '#888',    flag: '🌐', short: 'Global' },
};
const METHODOLOGY_COLORS = {
  'CAICT_FP16':   '#10b981',  // 綠 = CAICT 寬鬆口徑
  'Epoch_AI_GPU': '#f59e0b',  // 黃 = Epoch 嚴格口徑
};
const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };
const state = { filters: { country: 'all', methodology: 'all', grade: 'all', year: 'all' }, search: '' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'EFLOPS':  return r.value + ' EFLOPS';
    case 'percent': return r.value + '%';
    case 'ratio':   return r.value.toFixed(2) + 'x';
    case 'centers': return r.value + ' centers';
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
    if (state.filters.country !== 'all' && d.country !== state.filters.country) return false;
    if (state.filters.methodology !== 'all' && d.methodology !== state.filters.methodology) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (q) {
      const hay = [d.country, d.methodology, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getCompute(c, y, m) {
  const cats = ['intelligent_compute', 'intelligent_compute_yearend', 'intelligent_compute_forecast'];
  const r = DATA.find(x => x.country === c && x.year === y && x.methodology === m && cats.includes(x.category));
  return r ? r.value : null;
}

function renderStats(rows) {
  const cn2025 = getCompute('CN', 2025, 'CAICT_FP16');
  const us2025 = getCompute('US', 2025, 'CAICT_FP16');
  const ratio = (us2025 && cn2025) ? (us2025 / cn2025).toFixed(2) : '—';
  // Domestic share 2025
  const dom = DATA.find(r => r.country === 'CN' && r.year === 2025 && r.category === 'domestic_chip_share');
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-cn-2025').textContent = cn2025 ? cn2025 + ' EF' : '—';
  document.getElementById('stat-us-cn-gap').textContent = ratio + 'x';
  document.getElementById('stat-domestic').textContent = dom ? dom.value + '%' : '—';
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

/* ====== Chart 1: Dual-methodology trend (CN + US × CAICT + Epoch) ====== */
function renderDualTrendChart() {
  const c = document.getElementById('trend-chart');
  c.innerHTML = '';
  const W = 800, H = 380, PAD = 60;
  const years = [2024, 2025, 2026];
  const series = [
    { country: 'US', methodology: 'CAICT_FP16',   color: '#3b82f6', dash: '' },
    { country: 'US', methodology: 'Epoch_AI_GPU', color: '#3b82f6', dash: '6,4' },
    { country: 'CN', methodology: 'CAICT_FP16',   color: '#ef4444', dash: '' },
    { country: 'CN', methodology: 'Epoch_AI_GPU', color: '#ef4444', dash: '6,4' },
  ];
  const yMax = 3000;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">CAICT FP16 vs Epoch AI GPU — US vs CN Compute Trend (EFLOPS)</text>');
  // Y axis
  for (let i = 0; i <= 6; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 6;
    const v = (yMax / 6 * i).toFixed(0);
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.12"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">' + v + '</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  // Plot lines
  for (const s of series) {
    const points = years.map((y, i) => {
      const v = getCompute(s.country, y, s.methodology);
      return v == null ? null : [PAD + i * xStep, H - PAD - (v / yMax) * (H - 2 * PAD), v];
    });
    // Polyline
    const path = points.filter(p => p).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + s.color + '" stroke-width="2.5" stroke-dasharray="' + s.dash + '" opacity="0.85"/>');
    // Points + labels
    for (const p of points) {
      if (!p) continue;
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + s.color + '"/>');
      svg.push('<text x="' + p[0] + '" y="' + (p[1] - 8) + '" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">' + p[2] + '</text>');
    }
  }
  // X-axis years
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  // Legend
  let lx = PAD;
  for (const s of series) {
    svg.push('<line x1="' + lx + '" y1="' + (H - 14) + '" x2="' + (lx + 22) + '" y2="' + (H - 14) + '" stroke="' + s.color + '" stroke-width="2.5" stroke-dasharray="' + s.dash + '"/>');
    svg.push('<text x="' + (lx + 26) + '" y="' + (H - 10) + '" fill="currentColor" font-size="10">' + s.country + ' ' + s.methodology.replace('_FP16', '').replace('Epoch_AI_GPU', 'Epoch') + '</text>');
    lx += 165;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* ====== Chart 2: CAICT vs Epoch ratio gap (3-4x controversy) ====== */
function renderRatioChart() {
  const c = document.getElementById('ratio-chart');
  c.innerHTML = '';
  const W = 480, H = 300;
  const years = [2024, 2025, 2026];
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">CAICT/Epoch Ratio (口徑差距 3-4x)</text>');
  let yOff = 60;
  for (const y of years) {
    const cnRatio = (getCompute('CN', y, 'CAICT_FP16') / getCompute('CN', y, 'Epoch_AI_GPU')).toFixed(2);
    const usRatio = (getCompute('US', y, 'CAICT_FP16') / getCompute('US', y, 'Epoch_AI_GPU')).toFixed(2);
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + y + '</text>');
    // CN bar
    const cnW = (cnRatio / 5) * 280;
    svg.push('<rect x="80" y="' + (yOff - 11) + '" width="' + cnW + '" height="14" fill="#ef4444" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (85 + cnW) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="10" font-weight="600">🇨🇳 ' + cnRatio + 'x</text>');
    // US bar
    const usW = (usRatio / 5) * 280;
    svg.push('<rect x="80" y="' + (yOff + 8) + '" width="' + usW + '" height="14" fill="#3b82f6" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (85 + usW) + '" y="' + (yOff + 19) + '" fill="currentColor" font-size="10" font-weight="600">🇺🇸 ' + usRatio + 'x</text>');
    yOff += 60;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11" opacity="0.85">CN 比 US 倍率更大 → 因國產 ASIC 計入</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="11" opacity="0.85">兩口徑都有效，回答不同問題（total deployed vs frontier training）</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* ====== Chart 3: China domestic chip share trend ====== */
function renderDomesticChart() {
  const c = document.getElementById('domestic-chart');
  c.innerHTML = '';
  const W = 480, H = 300;
  const years = [2024, 2025, 2026];
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">中國國產 AI 晶片占比 Trend (CAICT)</text>');
  let yOff = 60;
  for (const y of years) {
    const r = DATA.find(x => x.country === 'CN' && x.year === y && x.category === 'domestic_chip_share');
    if (!r) continue;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="12" font-weight="500">' + y + '</text>');
    // Domestic
    const w = (r.value / 100) * 320;
    svg.push('<rect x="80" y="' + (yOff - 11) + '" width="' + w + '" height="20" fill="#ef4444" opacity="0.9" rx="2"/>');
    svg.push('<text x="' + (80 + w/2) + '" y="' + (yOff + 3) + '" text-anchor="middle" fill="white" font-size="11" font-weight="700">國產 ' + r.value + '%</text>');
    // Imported
    const remW = ((100 - r.value) / 100) * 320;
    svg.push('<rect x="' + (80 + w) + '" y="' + (yOff - 11) + '" width="' + remW + '" height="20" fill="#76b900" opacity="0.7" rx="2"/>');
    svg.push('<text x="' + (80 + w + remW/2) + '" y="' + (yOff + 3) + '" text-anchor="middle" fill="white" font-size="11" font-weight="600">進口 ' + (100 - r.value) + '%</text>');
    yOff += 60;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11" opacity="0.85">2026 國產破 50% 為政策目標 + 出口管制倒逼結果</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="11" opacity="0.85">紅 = 國產（華為昇騰 + 寒武紀 + 海光 + 其他），綠 = NVIDIA / 進口</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* ====== Chart 4: 2025 China vendor breakdown (domestic chips) ====== */
function renderVendorChart() {
  const c = document.getElementById('vendor-chart');
  c.innerHTML = '';
  const W = 480, H = 300;
  const vendors = [
    { name: '華為昇騰', val: 150, color: '#ef4444', cat: 'domestic_vendor_huawei' },
    { name: '寒武紀',   val: 50,  color: '#f97316', cat: 'domestic_vendor_cambricon' },
    { name: '海光 DCU', val: 30,  color: '#fbbf24', cat: 'domestic_vendor_hygon' },
    { name: '其他國產', val: 44,  color: '#a78bfa', cat: 'domestic_vendor_others' },
  ];
  const total = vendors.reduce((s, v) => s + v.val, 0);
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2025 中國國產 AI 算力分佈 (' + total + ' EFLOPS)</text>');
  // Stacked horizontal bar
  let curX = 40;
  const barW = 400;
  const barY = 80;
  const barH = 30;
  for (const v of vendors) {
    const w = (v.val / total) * barW;
    svg.push('<rect x="' + curX + '" y="' + barY + '" width="' + w + '" height="' + barH + '" fill="' + v.color + '" opacity="0.9"/>');
    if (w > 50) svg.push('<text x="' + (curX + w/2) + '" y="' + (barY + 19) + '" text-anchor="middle" fill="white" font-size="10" font-weight="600">' + v.name + ' ' + ((v.val/total*100).toFixed(0)) + '%</text>');
    curX += w;
  }
  // Per-vendor info
  let yOff = 150;
  for (const v of vendors) {
    svg.push('<rect x="40" y="' + (yOff - 9) + '" width="11" height="11" fill="' + v.color + '"/>');
    svg.push('<text x="56" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="500">' + v.name + '</text>');
    svg.push('<text x="' + (W - 40) + '" y="' + (yOff + 1) + '" text-anchor="end" fill="currentColor" font-size="11" font-weight="600">' + v.val + ' EFLOPS</text>');
    yOff += 22;
  }
  svg.push('<text x="40" y="' + (H - 12) + '" fill="currentColor" font-size="11" opacity="0.85">合計 274 EFLOPS = 中國 2025 智能算力 35% (vs 進口 NVIDIA 49%)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const sorted = rows.slice().sort((a, b) => {
    if (a.country !== b.country) return a.country.localeCompare(b.country);
    if (a.year !== b.year) return b.year - a.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const meta = COUNTRY_META[r.country] || { color: '#888', flag: '🌐', short: r.country };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    const methColor = METHODOLOGY_COLORS[r.methodology] || '#888';
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + meta.short + '</span></td>',
      '<td><span style="color:' + methColor + ';font-weight:600">' + sanitize(r.methodology) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 60) + ((r.notes || '').length > 60 ? '…' : '')) + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_date || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows);
  renderDualTrendChart();
  renderRatioChart();
  renderDomesticChart();
  renderVendorChart();
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ['country', 'methodology', 'grade', 'year'].forEach(k => {
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
