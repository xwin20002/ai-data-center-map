/* ========== TOKEN PRODUCTION DATA (Q1) ==========

Schema:
  - dcCount: integer, AI/hyperscale DC count in the country
  - totalMW: integer, estimated MW committed to AI workloads
  - estTokensPerSec: string (scientific notation, e.g. "2.5e12")
  - category: "hyperscaler-hub" | "semi-hub" | "nordic-cooling" | "emerging"
  - region: "North America" | "Europe" | "APAC"

All values are country-level estimates; see details field for methodology.

========== */

const dataCenters = [
  {country:"United States",code:"US",lat:39.8283,lng:-98.5795,region:"North America",dcCount:5400,totalMW:35000,estTokensPerSec:"2.5e12",category:"hyperscaler-hub",details:"全球最大 AI DC 市場，Northern Virginia (Ashburn)、Dallas、Phoenix、Santa Clara 為四大樞紐；主要 operator 包含 Microsoft Azure、Google Cloud、AWS、Meta、Oracle、xAI（Memphis Colossus）、CoreWeave、Equinix、Digital Realty。旗艦案包含 Stargate (OpenAI/Oracle/SoftBank)、xAI Colossus（200k H100）、Meta Richland Parish（2GW 規模）。Estimate based on Synergy Research 2024 Q4 data 與 SemiAnalysis AI DC tracker。",source:"https://www.srgresearch.com/articles/hyperscale-data-center-capacity-has-doubled-in-under-four-years"},
  {country:"China",code:"CN",lat:35.8617,lng:104.1954,region:"APAC",dcCount:2800,totalMW:18000,estTokensPerSec:"9.0e11",category:"hyperscaler-hub",details:"全球第二大 AI DC 市場，核心聚落為北京、上海、深圳、內蒙古、貴州（東數西算）；主要 operator 包含 Alibaba Cloud、Tencent Cloud、Baidu AI Cloud、Huawei Cloud、ByteDance/Volcengine、China Telecom、GDS、VNET。受出口管制限制，主力使用 H20、昇騰 910B/C 與部分存量 H100/H800。",source:"https://www.semianalysis.com/p/china-ai-datacenter-buildout"},
  {country:"Ireland",code:"IE",lat:53.1424,lng:-7.6921,region:"Europe",dcCount:85,totalMW:1400,estTokensPerSec:"4.5e10",category:"hyperscaler-hub",details:"歐洲傳統 hyperscaler 落地點，Dublin 集中全國約 80% 容量；AWS、Microsoft、Google、Meta、Oracle 主力歐洲 region 位於此。EirGrid 自 2022 年起實質凍結 Dublin 新 DC 電網接入，新容量轉向 Athlone、Cork。",source:"https://www.eirgridgroup.com/site-files/library/EirGrid/EirGrid-All-Island-Generation-Capacity-Statement.pdf"},
  {country:"Germany",code:"DE",lat:51.1657,lng:10.4515,region:"Europe",dcCount:520,totalMW:2800,estTokensPerSec:"7.0e10",category:"hyperscaler-hub",details:"歐陸最大 DC 市場，Frankfurt (FRA) 為全球前四大互聯樞紐（DE-CIX）；AWS eu-central-1、Google europe-west3、Microsoft Germany West Central 皆在此。近期 AI 相關投資含 SAP 主導的主權雲聯盟與 Schwarz Group 的 StackIT。",source:"https://www.bitkom.org/Presse/Presseinformation/Rechenzentren-Deutschland-Standort"},
  {country:"Japan",code:"JP",lat:36.2048,lng:138.2529,region:"APAC",dcCount:280,totalMW:2200,estTokensPerSec:"6.0e10",category:"hyperscaler-hub",details:"亞洲第二大 AI DC 市場，Tokyo (Inzai)、Osaka 為雙核心；Microsoft 宣布 2024-2026 投資 $29 億、AWS 投資 $150 億、Oracle / Google 亦大額擴建。本土 operator 包含 NTT Data、KDDI、SoftBank、Sakura Internet（神戶 AI cluster）。",source:"https://www.reuters.com/technology/microsoft-invest-29-billion-japan-ai-cloud-2024-04-09/"},
  {country:"Singapore",code:"SG",lat:1.3521,lng:103.8198,region:"APAC",dcCount:95,totalMW:1150,estTokensPerSec:"3.5e10",category:"hyperscaler-hub",details:"東南亞互聯與 inference 核心，受 IMDA 自 2019 年 moratorium 與 2022 年 Green DC Roadmap 限制，新容量需符合 PUE ≤1.3；主要 operator 為 Equinix、Digital Realty、ST Telemedia、Keppel、Singtel、Microsoft、Google、AWS ap-southeast-1。",source:"https://www.imda.gov.sg/about-imda/news-and-events/news/green-dc-roadmap"},
  {country:"South Korea",code:"KR",lat:35.9078,lng:127.7669,region:"APAC",dcCount:190,totalMW:1600,estTokensPerSec:"4.0e10",category:"semi-hub",details:"Seoul 首都圈集中約 60% 容量，因 2023 年《分散政策法》鼓勵遷出；主要 operator 包含 Naver（Gak Sejong，超大 AI DC）、Kakao、SK Telecom、KT、LG U+；HBM 與 GPU 供應鏈緊鄰（SK hynix、Samsung）。",source:"https://www.motie.go.kr/motie/ne/presse/press2/ai-infrastructure"},
  {country:"Netherlands",code:"NL",lat:52.1326,lng:5.2913,region:"Europe",dcCount:210,totalMW:1350,estTokensPerSec:"3.5e10",category:"hyperscaler-hub",details:"Amsterdam (AMS) 為歐洲 FLAP-D 之一，AMS-IX 世界級互聯點；主要 operator 為 Equinix、Digital Realty、NTT、Microsoft (Middenmeer hyperscale)、Google (Eemshaven)。自 2022 年起政府暫緩 hyperscale 新建並進行環評改革。",source:"https://www.dutchdatacenters.nl/en/publications/"},
  {country:"United Kingdom",code:"GB",lat:55.3781,lng:-3.4360,region:"Europe",dcCount:510,totalMW:2600,estTokensPerSec:"6.5e10",category:"hyperscaler-hub",details:"London (Slough/Docklands) 為歐洲最大 DC 市場之一；2024 年政府將 DC 列為 Critical National Infrastructure 並公告 AI Growth Zone（Culham）。主要 operator 含 Microsoft、Google、AWS eu-west-2、Equinix、Digital Realty、Ark Data Centres、Nscale（蘇格蘭 AI cluster）。",source:"https://www.techuk.org/resource/uk-data-centre-sector"},
  {country:"France",code:"FR",lat:46.2276,lng:2.2137,region:"Europe",dcCount:320,totalMW:1450,estTokensPerSec:"3.8e10",category:"hyperscaler-hub",details:"Paris (PAR) 為歐陸第三大市場，核電基載供應低碳電力具吸引力；2025 AI Action Summit 公告 €109B AI 投資，包括 UAE 主導 1GW campus。主要 operator 含 Equinix、Data4、Digital Realty (Interxion)、OVHcloud (Roubaix)、Scaleway、Microsoft、Google。",source:"https://www.reuters.com/technology/france-ai-summit-109-billion-2025-02-09/"},
  {country:"Sweden",code:"SE",lat:60.1282,lng:18.6435,region:"Europe",dcCount:75,totalMW:750,estTokensPerSec:"2.0e10",category:"nordic-cooling",details:"北歐低碳 + 寒冷氣候 DC 代表，Luleå（Meta/Hydro66/EcoDataCenter）、Stockholm、Gävle 為核心；主要 operator 含 Meta、Microsoft (Sandviken/Gävle)、EvRoc、EcoDataCenter、Conapto、atNorth。近期 AI 投資含 EvRoc Stockholm AI factory。",source:"https://www.nodepole.com/insights/"},
  {country:"Finland",code:"FI",lat:61.9241,lng:25.7482,region:"Europe",dcCount:45,totalMW:500,estTokensPerSec:"1.3e10",category:"nordic-cooling",details:"以 Google Hamina（區域暖氣回收）、Microsoft Espoo-Kirkkonummi（Fortum 合作餘熱供暖）、CSC LUMI（歐洲前五 supercomputer、AMD MI250X）為代表；電力脫碳率全歐最高之一。主要 operator 含 Google、Microsoft、Hetzner、Verne Global、Ficolo。",source:"https://www.businessfinland.fi/en/do-business-with-finland/data-centers"},
  {country:"Iceland",code:"IS",lat:64.9631,lng:-19.0208,region:"Europe",dcCount:12,totalMW:180,estTokensPerSec:"4.0e9",category:"nordic-cooling",details:"100% 再生能源（地熱+水電）與天然冷卻，但海底電纜延遲大、電網容量有限；主要 operator 為 atNorth、Verne、Borealis Data Center；近年承接 AI training 與歐洲 HPC batch workload。",source:"https://www.invest.is/key-sectors/data-centers"},
  {country:"India",code:"IN",lat:20.5937,lng:78.9629,region:"APAC",dcCount:170,totalMW:1300,estTokensPerSec:"2.8e10",category:"emerging",details:"Mumbai、Chennai、Hyderabad 為三大樞紐；政府 IndiaAI Mission 2024 補貼 10,000 GPU 採購。主要 operator 含 Yotta (Hiranandani)、CtrlS、NxtGen、Reliance Jio、Adani Group、STT GDC、Nxtra (Bharti)、AWS ap-south-1、Microsoft、Google。",source:"https://indiaai.gov.in/"},
  {country:"Taiwan",code:"TW",lat:23.6978,lng:120.9605,region:"APAC",dcCount:55,totalMW:550,estTokensPerSec:"1.4e10",category:"semi-hub",details:"台灣為 GPU 供應鏈核心（TSMC、HBM 封裝、ODM Quanta/Foxconn/Wistron/Gigabyte 組裝 NVIDIA HGX），但本地 DC 規模相對小；Google Changhua 與 Yunlin、Microsoft、AWS tpe-1、Chunghwa Telecom、中華電信 是主要營運商。電力供應（尖峰備轉 < 6%）為擴建主要瓶頸。",source:"https://www.ndc.gov.tw/en/News.aspx"}
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  "hyperscaler-hub": "#3b82f6",
  "semi-hub":        "#8b5cf6",
  "nordic-cooling":  "#10b981",
  "emerging":        "#f59e0b"
};

const categoryLabels = {
  "hyperscaler-hub": "Hyperscaler hub",
  "semi-hub":        "Semi hub",
  "nordic-cooling":  "Nordic cooling",
  "emerging":        "Emerging"
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

/* radius based on estTokensPerSec thresholds (log-scale) */
function getMarkerRadius(tokensStr) {
  const n = parseFloat(tokensStr);
  if (n >= 1e12) return 20;
  if (n >= 3e11) return 16;
  if (n >= 5e10) return 12;
  if (n >= 1e10) return 9;
  return 6;
}

function formatMw(mw) {
  if (mw >= 1000) return (mw / 1000).toFixed(1) + " GW";
  return Math.round(mw) + " MW";
}

function formatTokens(str) {
  const n = parseFloat(str);
  if (n >= 1e12) return (n / 1e12).toFixed(1) + "T/s";
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B/s";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M/s";
  return n + "/s";
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.estTokensPerSec);

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
        <div class="popup-company">${categoryLabels[dc.category]} · ${dc.region}</div>
        <div class="popup-details">
          <span class="popup-detail-label">AI Data Centers</span>
          <span class="popup-detail-value">${dc.dcCount.toLocaleString()}</span>
          <span class="popup-detail-label">Total AI MW</span>
          <span class="popup-detail-value">${formatMw(dc.totalMW)}</span>
          <span class="popup-detail-label">Tokens / sec</span>
          <span class="popup-detail-value">${formatTokens(dc.estTokensPerSec)}</span>
          <span class="popup-detail-label">Hub Type</span>
          <span class="popup-detail-value">${categoryLabels[dc.category]}</span>
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--color-text-muted);line-height:1.5;">${dc.details}</div>
        <div class="popup-source"><a href="${dc.source}" target="_blank" rel="noopener noreferrer">View source →</a></div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 340, minWidth: 260 });
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

  let totalDcs = 0;
  let totalMw = 0;
  let totalTokens = 0;
  data.forEach(dc => {
    totalDcs += dc.dcCount;
    totalMw += dc.totalMW;
    totalTokens += parseFloat(dc.estTokensPerSec);
  });
  document.getElementById("stat-dcs").textContent = totalDcs.toLocaleString();
  document.getElementById("stat-capacity").textContent = formatMw(totalMw);
  document.getElementById("stat-tokens").textContent = formatTokens(String(totalTokens));
}

/* ========== TABLE ========== */

function renderTable(data) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  data.forEach(dc => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.country}</td>
      <td>${dc.region}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.dcCount.toLocaleString()}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${formatMw(dc.totalMW)}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${formatTokens(dc.estTokensPerSec)}</td>
      <td><span class="status-badge status-groundbreaking" style="background:${categoryColors[dc.category]}22;color:${categoryColors[dc.category]};">${categoryLabels[dc.category]}</span></td>
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
    filtered = filtered.filter(dc => dc.category === activeFilter);
  }
  if (activeRegion !== "all") {
    filtered = filtered.filter(dc => dc.region === activeRegion);
  }

  const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(dc =>
      dc.country.toLowerCase().includes(searchTerm) ||
      dc.region.toLowerCase().includes(searchTerm) ||
      dc.category.toLowerCase().includes(searchTerm) ||
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
      // Numeric-first comparison for MW/tokens/dcs
      if (["dcCount","totalMW","tokens"].includes(col)) {
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
  const map = { country: 0, region: 1, dcCount: 2, totalMW: 3, tokens: 4, category: 5 };
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
