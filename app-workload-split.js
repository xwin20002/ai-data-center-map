/* ========== WORKLOAD SPLIT DATA (Q2) ==========

Schema:
  - totalMW: integer, estimated MW committed to AI workloads
  - trainPct / inferPct / idlePct: percentages, must sum to 100
  - dominant: "training-heavy" (train>50%) | "inference-heavy" (infer>50%) | "balanced"
  - region: "North America" | "Europe" | "APAC"

All splits are country-level estimates.

========== */

const dataCenters = [
  {country:"United States",code:"US",lat:39.8283,lng:-98.5795,region:"North America",totalMW:35000,trainPct:45,inferPct:45,idlePct:10,dominant:"balanced",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 美國同時為 frontier model training 中心（OpenAI、Anthropic、xAI、Google DeepMind、Meta）與全球 inference 主要服務節點；training 集中於西岸與南部大型 campus，inference 分佈於全美 edge。",source:"https://www.semianalysis.com/p/ai-datacenter-2025"},
  {country:"China",code:"CN",lat:35.8617,lng:104.1954,region:"APAC",totalMW:18000,trainPct:50,inferPct:40,idlePct:10,dominant:"training-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 中國仍處於 frontier model 追趕期（DeepSeek、Qwen、Doubao、Kimi、GLM 等），training 強度高；但受制於 GPU 算力密度與出口管制，部分 idle 源自合規與電力配額。",source:"https://www.semianalysis.com/p/china-ai-datacenter-buildout"},
  {country:"Ireland",code:"IE",lat:53.1424,lng:-7.6921,region:"Europe",totalMW:1400,trainPct:15,inferPct:70,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 愛爾蘭為歐洲 inference 與 enterprise workload 樞紐（data residency / GDPR），新 AI training 集群多轉向北歐與中東；idle 比例偏高反映電網限制下的預留容量。",source:"https://www.eirgridgroup.com/site-files/library/EirGrid/EirGrid-All-Island-Generation-Capacity-Statement.pdf"},
  {country:"Germany",code:"DE",lat:51.1657,lng:10.4515,region:"Europe",totalMW:2800,trainPct:20,inferPct:65,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 德國以 enterprise SaaS inference 與 GDPR sovereign workload 為主；training 因電價偏高較少落地，主權 AI 專案（Aleph Alpha、TNG）規模有限。",source:"https://www.bitkom.org/Presse/Presseinformation/Rechenzentren-Deutschland-Standort"},
  {country:"Japan",code:"JP",lat:36.2048,lng:138.2529,region:"APAC",totalMW:2200,trainPct:30,inferPct:55,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 日本具備本土 training 需求（SoftBank、SakanaAI、NICT/AIST），但主要仍為 hyperscaler 的亞洲 inference 節點與 enterprise workload。",source:"https://www.meti.go.jp/english/press/2024/datacenter.html"},
  {country:"Singapore",code:"SG",lat:1.3521,lng:103.8198,region:"APAC",totalMW:1150,trainPct:15,inferPct:75,idlePct:10,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 新加坡為東南亞 inference 與 SaaS edge 中樞，training 幾乎不在本地進行（電力與土地限制），對外延伸至 Johor (MY) 與 Batam (ID)。",source:"https://www.imda.gov.sg/about-imda/news-and-events/news/green-dc-roadmap"},
  {country:"South Korea",code:"KR",lat:35.9078,lng:127.7669,region:"APAC",totalMW:1600,trainPct:35,inferPct:55,idlePct:10,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 韓國 training 由 Naver HyperCLOVA、KakaoBrain、LG AI Research、SK AI 主導；inference 以本土 SaaS 與全球 hyperscaler 區域節點為主。",source:"https://www.motie.go.kr/motie/ne/presse/press2/ai-infrastructure"},
  {country:"Netherlands",code:"NL",lat:52.1326,lng:5.2913,region:"Europe",totalMW:1350,trainPct:20,inferPct:65,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 荷蘭以歐洲 inference 與互聯樞紐 workload 為主，training 較少；Microsoft Middenmeer 與 Google Eemshaven 承接部分 batch AI training。",source:"https://www.dutchdatacenters.nl/en/publications/"},
  {country:"United Kingdom",code:"GB",lat:55.3781,lng:-3.4360,region:"Europe",totalMW:2600,trainPct:30,inferPct:55,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 英國 training 強度高於歐陸平均（DeepMind、Stability、Wayve、Isomorphic Labs、Nscale AI factory），但整體 workload 仍以 inference 為主。",source:"https://www.gov.uk/government/publications/ai-opportunities-action-plan"},
  {country:"France",code:"FR",lat:46.2276,lng:2.2137,region:"Europe",totalMW:1450,trainPct:30,inferPct:55,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 法國 training 由 Mistral、Kyutai、H Company、LightOn 主導，搭配 Scaleway Jeumont AI cluster；inference 服務歐洲南部與本土 enterprise。",source:"https://www.francedatacenter.com/en/publications/"},
  {country:"Sweden",code:"SE",lat:60.1282,lng:18.6435,region:"Europe",totalMW:750,trainPct:55,inferPct:30,idlePct:15,dominant:"training-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 瑞典憑低碳水電與低溫適合 training batch job；Meta Luleå、Microsoft Gävle、EvRoc 承接大量 AI training，inference 因延遲較少部署。",source:"https://business-sweden.com/insights/reports/data-centers-sweden"},
  {country:"Finland",code:"FI",lat:61.9241,lng:25.7482,region:"Europe",totalMW:500,trainPct:60,inferPct:25,idlePct:15,dominant:"training-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 芬蘭定位為 training / HPC 集群，LUMI 與 hyperscaler 新 AI factory（Nebius、Microsoft）主力為 batch training；地理偏遠限制 inference latency。",source:"https://www.lumi-supercomputer.eu/"},
  {country:"Iceland",code:"IS",lat:64.9631,lng:-19.0208,region:"Europe",totalMW:180,trainPct:65,inferPct:15,idlePct:20,dominant:"training-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 冰島因高延遲幾乎不承接 inference，以 training、HPC 模擬、crypto remnants 與綠色 batch workload 為主；idle 比例偏高反映電力配額上限。",source:"https://www.invest.is/key-sectors/data-centers"},
  {country:"India",code:"IN",lat:20.5937,lng:78.9629,region:"APAC",totalMW:1300,trainPct:25,inferPct:60,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 印度為大型 inference 市場（人口與語言多樣性）+ sovereign AI training 起步（BharatGen、Sarvam、Krutrim、OpenHathi），training 占比逐年提高但仍低於 inference。",source:"https://indiaai.gov.in/"},
  {country:"Taiwan",code:"TW",lat:23.6978,lng:120.9605,region:"APAC",totalMW:550,trainPct:30,inferPct:55,idlePct:15,dominant:"inference-heavy",details:"Country-level estimate; hyperscalers do not publish per-country workload splits. 台灣 training 以 TAIDE、TWCC（國網中心 Forerunner 1）、鴻海研究院 為主；inference 服務本土繁體中文市場與 hyperscaler 區域節點。",source:"https://www.ndc.gov.tw/en/News.aspx"}
];

/* ========== MAP INITIALIZATION ========== */

const dominantColors = {
  "training-heavy":  "#ef4444",
  "inference-heavy": "#3b82f6",
  "balanced":        "#8a8f9f"
};

const dominantLabels = {
  "training-heavy":  "Training-heavy",
  "inference-heavy": "Inference-heavy",
  "balanced":        "Balanced"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [25, 20],
    zoom: 2,
    minZoom: 2,
    maxZoom: 10,
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  });

  updateTileLayer();
  addMarkers(dataCenters);

  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

let currentTileLayer = null;

function updateTileLayer() {
  if (currentTileLayer) map.removeLayer(currentTileLayer);

  const theme = document.documentElement.getAttribute("data-theme");
  const isDark = theme !== "light";

  const urlTemplate = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  currentTileLayer = L.tileLayer(urlTemplate, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  });
  currentTileLayer.addTo(map);
}

function getMarkerRadius(mw) {
  if (mw >= 10000) return 20;
  if (mw >= 2000) return 16;
  if (mw >= 1000) return 12;
  if (mw >= 400) return 9;
  return 6;
}

function formatMw(mw) {
  if (mw >= 1000) return (mw / 1000).toFixed(1) + " GW";
  return Math.round(mw) + " MW";
}

/* Mini stacked bar generated inline for popup display */
function renderMiniBar(train, infer, idle) {
  return `
    <div style="display:flex;height:14px;border-radius:4px;overflow:hidden;margin-top:4px;">
      <div style="width:${train}%;background:#ef4444;" title="Training ${train}%"></div>
      <div style="width:${infer}%;background:#3b82f6;" title="Inference ${infer}%"></div>
      <div style="width:${idle}%;background:#8a8f9f;" title="Idle ${idle}%"></div>
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:3px;font-size:10px;font-family:var(--font-mono);color:var(--color-text-muted);">
      <span>T ${train}%</span><span>I ${infer}%</span><span>Idle ${idle}%</span>
    </div>
  `;
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = dominantColors[dc.dominant] || "#8a8f9f";
    const radius = getMarkerRadius(dc.totalMW);

    const marker = L.circleMarker([dc.lat, dc.lng], {
      radius: radius,
      fillColor: color,
      color: color,
      weight: 2,
      opacity: 0.9,
      fillOpacity: 0.45,
      className: "pulse-marker"
    });

    const popupContent = `
      <div class="popup-inner">
        <div class="popup-header">
          <span class="popup-cat-dot" style="background:${color}"></span>
          <span class="popup-project-name">${dc.country}</span>
        </div>
        <div class="popup-company">${dominantLabels[dc.dominant]} · ${dc.region}</div>
        <div class="popup-details">
          <span class="popup-detail-label">Total AI MW</span>
          <span class="popup-detail-value">${formatMw(dc.totalMW)}</span>
          <span class="popup-detail-label">Workload</span>
          <span class="popup-detail-value">${renderMiniBar(dc.trainPct, dc.inferPct, dc.idlePct)}</span>
          <span class="popup-detail-label">Dominant</span>
          <span class="popup-detail-value">${dominantLabels[dc.dominant]}</span>
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--color-text-muted);line-height:1.5;">${dc.details}</div>
        <div class="popup-source"><a href="${dc.source}" target="_blank" rel="noopener noreferrer">View source →</a></div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 360, minWidth: 280 });
    marker.bindTooltip(dc.country, {
      direction: "top",
      offset: [0, -radius],
      className: "custom-tooltip"
    });

    marker.addTo(map);
    markers.push(marker);
  });
}

/* ========== STATS ========== */

function updateStats(data) {
  document.getElementById("stat-total").textContent = data.length;

  let totalMw = 0;
  let sumTrain = 0;
  let sumInfer = 0;
  data.forEach(dc => {
    totalMw += dc.totalMW;
    sumTrain += dc.trainPct;
    sumInfer += dc.inferPct;
  });
  const n = data.length || 1;
  document.getElementById("stat-capacity").textContent = formatMw(totalMw);
  document.getElementById("stat-train").textContent = Math.round(sumTrain / n) + "%";
  document.getElementById("stat-infer").textContent = Math.round(sumInfer / n) + "%";
}

/* ========== TABLE ========== */

function renderTable(data) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  data.forEach(dc => {
    const color = dominantColors[dc.dominant];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.country}</td>
      <td>${dc.region}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${formatMw(dc.totalMW)}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);color:#ef4444;">${dc.trainPct}%</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);color:#3b82f6;">${dc.inferPct}%</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);color:#8a8f9f;">${dc.idlePct}%</td>
      <td><span class="status-badge status-groundbreaking" style="background:${color}22;color:${color};">${dominantLabels[dc.dominant]}</span></td>
    `;

    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      map.setView([dc.lat, dc.lng], 5);
      const markerIndex = dataCenters.indexOf(dc);
      if (markers[markerIndex]) markers[markerIndex].openPopup();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    tbody.appendChild(row);
  });
}

/* ========== FILTERS ========== */

function filterData() {
  let filtered = dataCenters;

  if (activeFilter !== "all") {
    filtered = filtered.filter(dc => dc.dominant === activeFilter);
  }
  if (activeRegion !== "all") {
    filtered = filtered.filter(dc => dc.region === activeRegion);
  }

  const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(dc =>
      dc.country.toLowerCase().includes(searchTerm) ||
      dc.region.toLowerCase().includes(searchTerm) ||
      dc.dominant.toLowerCase().includes(searchTerm) ||
      dc.details.toLowerCase().includes(searchTerm)
    );
  }

  addMarkers(filtered);
  updateStats(filtered);
  renderTable(filtered);

  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    filterData();
  });
});

document.querySelectorAll("[data-region]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-region]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeRegion = btn.dataset.region;
    filterData();
  });
});

document.querySelector('[data-region="all"]').classList.add("active");

let searchTimeout;
document.getElementById("search-input").addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(filterData, 300);
});

/* ========== TABLE SORTING ========== */

let sortCol = null;
let sortAsc = true;

document.querySelectorAll("th[data-sort]").forEach(th => {
  th.addEventListener("click", () => {
    const col = th.dataset.sort;
    if (sortCol === col) sortAsc = !sortAsc;
    else { sortCol = col; sortAsc = true; }

    document.querySelectorAll("th[data-sort]").forEach(h => {
      h.textContent = h.textContent.replace(/ [▲▼]/, "");
    });
    th.textContent += sortAsc ? " ▲" : " ▼";

    const rows = Array.from(document.getElementById("table-body").children);
    rows.sort((a, b) => {
      const cellA = a.children[getColIndex(col)].textContent.trim();
      const cellB = b.children[getColIndex(col)].textContent.trim();
      if (["totalMW","trainPct","inferPct","idlePct"].includes(col)) {
        const nA = parseFloat(cellA.replace(/[^0-9.]/g,"")) || 0;
        const nB = parseFloat(cellB.replace(/[^0-9.]/g,"")) || 0;
        return sortAsc ? nA - nB : nB - nA;
      }
      return sortAsc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    const tbody = document.getElementById("table-body");
    rows.forEach(r => tbody.appendChild(r));
  });
});

function getColIndex(col) {
  const map = { country: 0, region: 1, totalMW: 2, trainPct: 3, inferPct: 4, idlePct: 5, dominant: 6 };
  return map[col] || 0;
}

/* ========== THEME TOGGLE ========== */

(function() {
  const t = document.querySelector("[data-theme-toggle]");
  const r = document.documentElement;
  let d = "dark";
  r.setAttribute("data-theme", d);
  if (t) {
    t.addEventListener("click", () => {
      d = d === "dark" ? "light" : "dark";
      r.setAttribute("data-theme", d);
      t.setAttribute("aria-label", "Switch to " + (d === "dark" ? "light" : "dark") + " mode");
      t.innerHTML = d === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      if (map) updateTileLayer();
    });
  }
})();

/* ========== TOOLTIP STYLE ========== */

const tooltipStyle = document.createElement("style");
tooltipStyle.textContent = `
  .custom-tooltip {
    background: var(--color-surface) !important;
    color: var(--color-text) !important;
    border: 1px solid var(--color-border) !important;
    border-radius: var(--radius-md) !important;
    padding: 4px 10px !important;
    font-size: 12px !important;
    font-family: var(--font-body) !important;
    font-weight: 600 !important;
    box-shadow: var(--shadow-md) !important;
  }
  .custom-tooltip::before { border-top-color: var(--color-border) !important; }
`;
document.head.appendChild(tooltipStyle);

/* ========== INIT ========== */

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  updateStats(dataCenters);
  renderTable(dataCenters);
});
