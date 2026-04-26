/* G04 Phase 4 — Components (Global) / Connector Line
 * Anchor vendors with cross-country coverage (CN / US / TW listed)
 * Data generated 2026-04-26 · see _research/phase4-components/connector-global.jsonl
 *
 * IMPORTANT — Multi-currency framework:
 *   Phase 4 vendors come from SZSE / NYSE / NASDAQ / TWSE — schema includes
 *   hq_listed / home_country / currency / est_revenue_local_mn / est_revenue_twd_mn.
 *   Stat 3 uses TWD-equivalent (USD ÷ 0.0322 ≈ ×31; CNY ×4.4) for cross-vendor sum.
 *   Stat 3 = per-supplier hardcoded 2025 AI connector revenue est. (TWD mn).
 */

/* ====== DATA (inline; 12 records) ====== */
const DATA = [
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "financial_guidance",
    "dc_project": "Q3 2025 record quarter",
    "dc_operator": "aggregate",
    "grade": "A",
    "source_url": "https://investors.amphenol.com/news-and-events/news-details/2025/Amphenol-Reports-Record-Third-Quarter-2025-Results-and-Announces-Dividend-Increase/default.aspx",
    "source_date": "2025-Q3",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 5800,
    "est_revenue_twd_mn": 179800,
    "verified_date": "2026-04-26",
    "notes": "Q3 2025 record quarter sales +53% YoY；operating margin 27.5%。IT Datacom 為超出主要驅動，AI hyperscaler capex 持續加碼。換算 TWD ~1,798 億。A 級：official press release.",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "financial_guidance",
    "dc_project": "FY2025 estimated annual revenue",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://investors.amphenol.com/news-and-events/news-details/2025/Amphenol-Reports-Record-Third-Quarter-2025-Results-and-Announces-Dividend-Increase/default.aspx",
    "source_date": "2025-Q4",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 22000,
    "est_revenue_twd_mn": 682000,
    "verified_date": "2026-04-26",
    "notes": "FY2025 (CY2025) 全年合併營收估 USD 22B（+45% YoY，vs 2024 ~$15.2B）。Q1-Q3 累計 ~$16B + Q4 ~$6B 推估。換算 TWD ~6,820 億。B 級：法人共識 + 季報外推。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "AI_DC_revenue_share",
    "dc_project": "IT Datacom segment AI exposure",
    "dc_operator": "NVIDIA + Hyperscaler",
    "grade": "B",
    "source_url": "https://simplywall.st/stocks/us/tech/nyse-aph/amphenol/news/amphenol-aph-is-up-60-after-ai-datacenter-demand-lifts-nvidi",
    "source_date": "2026-04",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 6500,
    "est_revenue_twd_mn": 201500,
    "verified_date": "2026-04-26",
    "notes": "IT Datacom segment（含 AI/datacenter）占 FY2025 估 ~30% 整體營收 = USD 6.5B（YoY +85%）。AI 暴險佔 IT Datacom 主體。換算 TWD ~2,015 億。B 級：分析師整理 + 公司公告。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "customer_disclosure",
    "dc_project": "NVIDIA NVL72 GB200/GB300 twinax cable + connector",
    "dc_operator": "NVIDIA",
    "grade": "B",
    "source_url": "https://www.nvidia.com/en-us/on-demand/session/gtc24-s63148/",
    "source_date": "2024-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "NVIDIA GTC 2024 Amphenol 官方 session: 'Next-Generation Interconnects Supporting AI'。Amphenol 提供 NVL72 機架內部 twinax assemblies、high-speed connectors、internal harnesses，binding GPUs/switches/trays。GB200 NVL72 + GB300 主供。B 級：NVIDIA 公開 session。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "customer_disclosure",
    "dc_project": "NVIDIA Rubin platform alignment 2026-2027",
    "dc_operator": "NVIDIA Rubin",
    "grade": "B",
    "source_url": "https://finance.yahoo.com/news/amphenol-corporation-aph-poised-benefit-231210765.html",
    "source_date": "2026-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Evercore 指 Amphenol AI 暴險擴張 NVIDIA Blackwell ramp + Rubin platform alignment。對 Rubin 224G/448G NVLink high-speed I/O Amphenol 為主要供應商之一（與 TE Connectivity / Lotes 競合）。B 級：sell-side research。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "joint_venture_history",
    "dc_project": "CCS (Carlisle Interconnect) acquisition 2024",
    "dc_operator": "Amphenol post-acquisition",
    "grade": "A",
    "source_url": "https://simplywall.st/stocks/us/tech/nyse-aph/amphenol/news/amphenol-deepens-ai-datacenter-role-with-ccs-deal-and-nvidia",
    "source_date": "2024-Q2",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "2024 收購 Carlisle Interconnect Technologies (CCS) USD 2B 規模；強化 AI datacenter 線材整合能力。深化 NVIDIA 供應鏈 ties。A 級：8-K filing。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "market_share",
    "dc_project": "Hyperscaler high-speed connector market position",
    "dc_operator": "aggregate",
    "grade": "B",
    "source_url": "https://research.fpx.world/p/part-2-beyond-power-the-networking",
    "source_date": "2026-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "Amphenol 是 hyperscaler AI server high-speed connector + cable assembly 全球 #1（含 224G/448G PAM4 backplane connector），TE Connectivity 為次強。市占估 30-35%（無公開揭露）。B 級：頂級研究。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "transceiver_800g",
    "dc_project": "DAC (Direct Attach Cable) + AEC (Active Electric Cable) AI DC",
    "dc_operator": "aggregate AI DC",
    "grade": "B",
    "source_url": "https://research.fpx.world/p/part-2-beyond-power-the-networking",
    "source_date": "2026-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "AI DC short-reach interconnect 三類：DAC (passive copper, <3m), AEC (active electric copper with retimer, 3-7m), AOC (active optical, >7m)。Amphenol 在 DAC + AEC 主導，AOC optical 部分由 Innolight/Coherent 取代。NVL72 內部 ~5,000 條 cable。B 級：研究報告。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "AI_DC_revenue_share",
    "dc_project": "Beyond NVL72 — AI 暴險的 dependence question",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://globaltechresearch.substack.com/p/nvidia-nvda-us-2025-gtc-review-is",
    "source_date": "2025-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "GTC 2025 review 提出 Amphenol 對 NVL72 機架線材高度依賴，若 NVIDIA Rubin 採 silicon photonics CPO 替代 copper short-reach (>10m)，Amphenol 主業可能受衝擊。但內部機架 (<3m DAC) 預期保持 copper 直到 2028+。C 級：研究 + 推估。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "analyst_target",
    "dc_project": "Sell-side consensus 2026E",
    "dc_operator": "aggregate",
    "grade": "C",
    "source_url": "https://investorplace.com/hypergrowthinvesting/2026/03/the-next-ai-gold-rush-is-inside-the-data-center/",
    "source_date": "2026-03",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": 27000,
    "est_revenue_twd_mn": 837000,
    "verified_date": "2026-04-26",
    "notes": "2026E 全年營收法人共識 USD 27B (+23% YoY)，2026E EPS USD 4.5-5.0。AI datacenter 仍為核心 driver。換算 TWD 8,370 億。C 級：sell-side 共識。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "AI_DC_revenue_share",
    "dc_project": "Stargate / NVIDIA Rubin connector exposure (D-grade)",
    "dc_operator": "Stargate / NVIDIA Rubin",
    "grade": "D",
    "source_url": "https://finance.yahoo.com/news/amphenol-corporation-aph-poised-benefit-231210765.html",
    "source_date": "2026-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "D 級：Stargate Phase 1 (1.2M GPU) + Rubin 平台 connector 暴險。每 NVL72 ~5,000 cable + connector。Bear: NVL72 採 CPO 替代 copper → ~USD 200M; Base: NVL72 + Rubin 高速 copper 主導 → ~USD 800M; Bull: Stargate + Rubin + 後續 supercycle 全收 → ~USD 1,500M。換算 TWD: Bear ~62 億 / Base ~248 億 / Bull ~465 億。",
    "agent": "agent-amphenol-aph"
  },
  {
    "supplier_ticker": "APH",
    "supplier_name": "Amphenol Corp.",
    "line": "connector",
    "category": "market_share",
    "dc_project": "Competitive landscape vs TE / Molex / Samtec / Lotes",
    "dc_operator": "aggregate competitive",
    "grade": "B",
    "source_url": "https://research.fpx.world/p/part-2-beyond-power-the-networking",
    "source_date": "2026-Q1",
    "hq_listed": "NYSE",
    "home_country": "US",
    "currency": "USD",
    "est_revenue_local_mn": null,
    "est_revenue_twd_mn": null,
    "verified_date": "2026-04-26",
    "notes": "競合定位：Amphenol（30-35%）+ TE Connectivity（20-25%）= 美廠雙寡頭；Molex（Koch 私有，~15-20%）+ Samtec（私有，<10%）次供；Lotes 嘉澤（3533.TW）= CPU/GPU socket 主導者（不直接競 high-speed I/O cable）。Amphenol 在 NVL72 機架內 cable 領先。B 級。",
    "agent": "agent-amphenol-aph"
  }
];

/* ====== Per-supplier 2025E AI connector revenue (TWD mn) ====== */
const AI_REVENUE_2025_TWD_MN = {
  'APH': 201500,  // Amphenol FY2025 IT Datacom USD 6,500M ×31 (Grade B)
};

/* ====== DC coordinate registry (vendor factories + named DC) ====== */
const DC_COORDS = [
  // Amphenol HQ + factories
  { match: /amphenol.*wallingford|wallingford.*amphenol|amphenol.*hq/i,      lat: 41.4570, lng: -72.8231, label: 'Amphenol HQ Wallingford CT' },
  { match: /carlisle.*ccs|ccs.*amphenol|carlisle interconnect/i,             lat: 40.2014, lng: -77.1975, label: 'Amphenol CCS (acquired)' },
  { match: /nvl72|gb200.*nvl72|gb300.*nvl72/i,                               lat: 37.3688, lng: -122.0363, label: 'NVIDIA NVL72 platform' },

  { match: /stargate.*abilene|abilene/i,                                     lat: 32.4487, lng: -99.7331,  label: 'Stargate Abilene, TX' },
  { match: /coreweave/i,                                                     lat: 40.7589, lng: -73.9851,  label: 'CoreWeave (distributed HQ)' },
  { match: /nvidia.*rubin|rubin platform/i,                                  lat: 37.3688, lng: -122.0363, label: 'NVIDIA HQ (Santa Clara)' },
];

function lookupCoord(dcProject) {
  if (!dcProject) return null;
  for (const e of DC_COORDS) if (e.match.test(dcProject)) return e;
  return null;
}

/* ====== State ====== */
const state = { filters: { supplier: 'all', grade: 'all' }, search: '' };

/* ====== Helpers ====== */
const SUPPLIER_META = {
  'APH': { name: 'Amphenol', nameEn: 'Amphenol', color: '#8b5cf6', flag: '🇺🇸' }
};

const GRADE_COLORS = { A: '#10b981', B: '#3b82f6', C: '#f59e0b', D: '#ef4444' };

function formatNtdMn(n) {
  if (n == null) return '—';
  if (n >= 1_000_000) return 'NT$' + (n / 1_000_000).toFixed(2) + '兆';
  if (n >= 100_000)   return 'NT$' + (n / 10_000).toFixed(0) + '千億';
  if (n >= 100)       return 'NT$' + (n / 100).toFixed(1) + '億';
  return 'NT$' + n.toLocaleString() + 'M';
}

function formatLocalMn(n, currency) {
  if (n == null) return '—';
  const symbols = { USD: '$', CNY: '¥', TWD: 'NT$' };
  const sym = symbols[currency] || '';
  if (n >= 1000) return sym + (n / 1000).toFixed(2) + 'B';
  return sym + n.toLocaleString() + 'M';
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
  /aggregate/i, /合併營收/, /營收占比/, /\(法人估\)/, /overall/i,
  /annual results/i, /full year/i, /quarterly/i, /quarterly revenue/i,
  /market share/i, /market position/i, /landscape/i, /supply chain/i,
  /global market/i, /supercycle/i, /^all$/i,
];

function isShipmentRow(r) {
  if (AGGREGATE_CATEGORIES.has(r.category)) return false;
  if (r.dc_project && AGGREGATE_DC_PATTERNS.some(p => p.test(r.dc_project))) return false;
  return true;
}

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

function renderStats(rows) {
  const suppliers = new Set(rows.map(r => r.supplier_ticker));
  const shipmentRows = rows.filter(isShipmentRow);
  const dcs = new Set(shipmentRows.map(r => r.dc_project).filter(Boolean));
  let aggregateRevenue = 0;
  for (const t of suppliers) aggregateRevenue += AI_REVENUE_2025_TWD_MN[t] || 0;
  const aCount = rows.filter(r => r.grade === 'A').length;
  const aRatio = rows.length ? (aCount / rows.length * 100).toFixed(1) : 0;
  document.getElementById('stat-suppliers').textContent = suppliers.size;
  document.getElementById('stat-dc-projects').textContent = dcs.size;
  document.getElementById('stat-revenue').textContent = formatNtdMn(aggregateRevenue);
  document.getElementById('stat-a-ratio').textContent = aRatio + '%';
  document.getElementById('dp-count').textContent = rows.length;
}

let mapInstance = null; const markerLayer = [];

function initMap() {
  mapInstance = L.map('map', { worldCopyJump: true }).setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: 'abcd', maxZoom: 19,
  }).addTo(mapInstance);
}

function renderMap(rows) {
  markerLayer.forEach(m => m.remove()); markerLayer.length = 0;
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
    const m = L.circleMarker([coord.lat, coord.lng], { radius, color, weight: 2, fillColor: color, fillOpacity: 0.45 });
    const html = [
      '<div class="popup-tw">',
      '<div class="popup-tw-header">' + sanitize(coord.label) + '</div>',
      '<div class="popup-tw-body">',
      gRows.map(r => {
        const sup = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888', flag: '🌐' };
        const rev = r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—';
        const localRev = r.est_revenue_local_mn != null ? formatLocalMn(r.est_revenue_local_mn, r.currency) : '';
        const grade = r.grade || '—';
        const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
        return '<div class="popup-tw-row">' +
          '<span class="popup-tw-supplier" style="color:' + sup.color + '">' + sup.flag + ' ' + sanitize(r.supplier_ticker) + ' ' + sanitize(sup.name) + '</span>' +
          '<span class="grade-badge grade-' + grade + '">' + grade + '</span>' +
          '<span class="popup-tw-cat">' + sanitize(r.category) + '</span>' +
          '<span class="popup-tw-rev">' + rev + (localRev ? ' (' + localRev + ')' : '') + '</span>' +
          (url ? '<a class="popup-tw-link" href="' + sanitize(url) + '" target="_blank" rel="noopener">source</a>' : '') +
          '</div>';
      }).join(''),
      '</div></div>'
    ].join('');
    m.bindPopup(html, { maxWidth: 460 });
    m.addTo(mapInstance);
    markerLayer.push(m);
  }
}

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
  thead.innerHTML = ''; tbody.innerHTML = '';
  const headRow = document.createElement('tr');
  headRow.innerHTML = '<th class="matrix-supplier-col">Supplier</th>' +
    topDcs.map(d => '<th class="matrix-dc-col" title="' + sanitize(d) + '">' + sanitize(d.length > 22 ? d.slice(0, 20) + '…' : d) + '</th>').join('');
  thead.appendChild(headRow);
  for (const s of suppliers) {
    const meta = SUPPLIER_META[s] || { name: s, color: '#888', flag: '🌐' };
    const tr = document.createElement('tr');
    const cells = topDcs.map(d => {
      const c = cell.get(s + '|' + d);
      if (!c) return '<td class="matrix-cell matrix-empty">·</td>';
      const bestGrade = Array.from(c.grades).sort()[0] || '—';
      const revText = c.rev ? formatNtdMn(c.rev) : '#' + c.count;
      return '<td class="matrix-cell"><span class="grade-badge grade-' + bestGrade + '">' + bestGrade + '</span> ' + sanitize(revText) + '</td>';
    }).join('');
    tr.innerHTML = '<td class="matrix-supplier-cell" style="border-left: 3px solid ' + meta.color + '">' + meta.flag + ' ' + s + '<br><span class="matrix-supplier-sub">' + sanitize(meta.name) + '</span></td>' + cells;
    tbody.appendChild(tr);
  }
}

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
    const meta = SUPPLIER_META[r.supplier_ticker] || { name: r.supplier_name, color: '#888', flag: '🌐' };
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    const localRev = r.est_revenue_local_mn != null ? formatLocalMn(r.est_revenue_local_mn, r.currency) : '';
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + meta.color + ';color:' + meta.color + '">' + meta.flag + ' ' + r.supplier_ticker + ' ' + sanitize(meta.name) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize(r.dc_project || '—') + '</td>',
      '<td>' + sanitize(r.dc_operator || '—') + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + (r.est_revenue_twd_mn != null ? formatNtdMn(r.est_revenue_twd_mn) : '—') + (localRev ? '<br><small style="opacity:0.7">' + localRev + '</small>' : '') + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : sanitize(r.source_url || '—')) + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats(rows); renderMap(rows); renderMatrix(rows); renderFlatTable(rows);
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

document.addEventListener('DOMContentLoaded', () => { initMap(); wireFilters(); wireTheme(); renderAll(); });
