/* ========== ADVANCED PACKAGING DATA ==========

Schema:
  - capacityWafers: integer, CoWoS-equivalent wafers per month
  - technology: comma-separated (CoWoS-S, CoWoS-L, SoIC, FOPLP, Foveros, 2.5D, 3D IC)
  - category: "foundry" | "osat" | "idm"
  - investment: string like "$8B"

Advanced packaging is the post-fab step that stacks logic + HBM via silicon
interposers (CoWoS), hybrid bonding (SoIC), or panel-level substrate (FOPLP).
TSMC CoWoS is currently the gating resource for Nvidia / AMD AI GPU supply.

========== */

const dataCenters = [
  {
    project: "AP3 (Longtan)",
    company: "TSMC",
    location: "Longtan, Taoyuan, Taiwan",
    lat: 24.8639,
    lng: 121.2167,
    technology: "InFO, WMCM, CoWoS",
    capacity: "~15K wpm equivalent (InFO/WMCM primary)",
    capacityWafers: 15000,
    investment: "$3B",
    status: "Operational",
    expected: "WMCM upgrade ramping 2025-2026",
    details: "Primarily InFO/WMCM line serving Apple's high-end processors; being upgraded to expand WMCM equipment. Also supports 3DFabric advanced packaging development. Investment figure is estimated.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2026/01/20/news-tsmc-reportedly-expands-wmcm-packaging-for-apple-capacity-may-more-than-double-by-2027/"
  },
  {
    project: "AP6 (Zhunan)",
    company: "TSMC",
    location: "Zhunan, Miaoli, Taiwan",
    lat: 24.6833,
    lng: 120.8833,
    technology: "CoWoS, SoIC, InFO",
    capacity: "~15K wpm CoWoS-eq + core SoIC line",
    capacityWafers: 15000,
    investment: "$8B",
    status: "Operational",
    expected: "SoIC capacity scaling toward 10K wpm by 2027",
    details: "TSMC's first fully automated fab integrating 3DFabric front-to-back-end plus testing. Core SoIC production site (~2K wpm SoIC late 2024, doubling). Serves Nvidia Blackwell/Rubin, AMD MI-series, Broadcom AI ASICs.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://pr.tsmc.com/english/news/3033"
  },
  {
    project: "AP7 (Chiayi)",
    company: "TSMC",
    location: "Chiayi, Taiwan",
    lat: 23.4791,
    lng: 120.4491,
    technology: "CoWoS-L, SoIC, WMCM, CoPoS",
    capacity: "~30-40K wpm CoWoS by 2027 (Phase 1+2)",
    capacityWafers: 30000,
    investment: "$15B",
    status: "Under Construction",
    expected: "Phase 2 production 2026, Phase 1 mass production 2027",
    details: "Will be world's largest advanced packaging hub with 8 phases planned on 15,000 sqm site. Hosts CoWoS-L, SoIC, WMCM, and pilot CoPoS (Chip-on-Panel-on-Substrate). Key to TSMC's 130K wpm target by late 2026.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2025/12/04/news-tsmc-speeds-advanced-packaging-ap7-targets-2026-output-arizona-p6-eyed-for-u-s-packaging-hub/"
  },
  {
    project: "AP8 (Nanke / Tainan)",
    company: "TSMC",
    location: "Tainan Science Park, Tainan, Taiwan",
    lat: 23.1040,
    lng: 120.2842,
    technology: "CoWoS-L, CoWoS-S, SoIC, FoPLP, CPO",
    capacity: "~45K wpm CoWoS-eq (P1 end-2025)",
    capacityWafers: 45000,
    investment: "$4B",
    status: "Ramping",
    expected: "P1 >40K wpm end-2025; P2 under expedited construction",
    details: "Converted from Innolux display fab ($550M acquisition); 96,000 sqm floor, 9x larger than AP6. Main concentration of CoWoS capacity, also allocating to SoIC, CPO and FoPLP. Core of TSMC's CoWoS ramp from 75K to 130K wpm by end-2026.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2024/12/13/news-tsmc-ramps-up-cowos-capacity-across-taiwan-projected-to-nearly-triple-by-2026/"
  },
  {
    project: "Arizona AP1/AP2",
    company: "TSMC",
    location: "Phoenix, Arizona, USA",
    lat: 33.7280,
    lng: -112.1080,
    technology: "SoIC, CoW, CoPoS",
    capacity: "~5-10K wpm CoWoS-eq by 2028 (est.)",
    capacityWafers: 7500,
    investment: "$12B",
    status: "Under Construction",
    expected: "Construction begins 2H 2026; mass production 2028",
    details: "Two co-located advanced packaging fabs (AP1 SoIC/CoW, AP2 CoPoS) on TSMC Arizona campus. Part of expanded US-Taiwan $500B semiconductor deal; will localize packaging for Nvidia/AMD/Apple US-fabbed dies.",
    category: "foundry",
    region: "north-america",
    source: "https://www.trendforce.com/news/2025/08/26/news-tsmc-reportedly-fast-tracks-u-s-packaging-plants-for-2h26-construction-2028-production/"
  },
  {
    project: "K18 / K28 Kaohsiung",
    company: "ASE Technology",
    location: "Kaohsiung, Taiwan",
    lat: 22.6273,
    lng: 120.3014,
    technology: "CoWoS, CoWoP, FOPLP, 2.5D",
    capacity: "~20-25K wpm CoWoS-eq by end-2026",
    capacityWafers: 25000,
    investment: "$7B",
    status: "Ramping",
    expected: "Tripling CoWoS-equivalent capacity through 2026",
    details: "ASE's flagship advanced packaging cluster. Broke ground on K18B in Oct 2025 for 3D CoWoS expansion; K28 equipment move-in planned. Also adding 600mm FOPLP line (acquired from WIN Semi). Picks up overflow CoWoS orders from TSMC for Nvidia/AMD.",
    category: "osat",
    region: "asia-pacific",
    source: "https://focustaiwan.tw/business/202511250007"
  },
  {
    project: "Zhongli",
    company: "ASE Technology",
    location: "Zhongli, Taoyuan, Taiwan",
    lat: 24.9538,
    lng: 121.2250,
    technology: "Flip-chip, wafer-level packaging, 2.5D",
    capacity: "~10K wpm-eq (running at full capacity)",
    capacityWafers: 10000,
    investment: "$2B",
    status: "Operational",
    expected: "Expansion adds NT$20B/year revenue capacity",
    details: "Major ASE/SPIL advanced packaging hub serving HPC, automotive, 5G. Existing facilities running at full utilization; expansion adds 2,000 jobs. Target annual sales NT$100B. Capacity estimated (OSAT units differ from foundry CoWoS).",
    category: "osat",
    region: "asia-pacific",
    source: "https://www.pinoyformosa.com/2022/07/ase-chungli-to-expand-its-production.html"
  },
  {
    project: "Penang Plant 5 (M5)",
    company: "ASE Technology",
    location: "Bayan Lepas, Penang, Malaysia",
    lat: 5.2961,
    lng: 100.2735,
    technology: "SiP, advanced assembly, test, FOPLP",
    capacity: "~8K wpm-eq (doubling floor to 3.4M sq ft)",
    capacityWafers: 8000,
    investment: "$300M",
    status: "Operational",
    expected: "Doubles IC packaging/testing capacity for AI and automotive",
    details: "Fifth ASE Malaysia plant opened Feb 2025. Expansion triples footprint from 1M to 3.4M sq ft; adding 1,500 workers. Key diversification hub outside Taiwan for US/EU/JP/KR customers. Acquiring ADI's Penang plant by 1H26.",
    category: "osat",
    region: "asia-pacific",
    source: "https://focustaiwan.tw/business/202502180017"
  },
  {
    project: "Bac Ninh (ATV)",
    company: "Amkor Technology",
    location: "Yen Phong 2C IP, Bac Ninh, Vietnam",
    lat: 21.2340,
    lng: 105.9750,
    technology: "Advanced SiP, flip-chip, memory, test",
    capacity: "~5K wpm-eq (Phase 1 cleanroom)",
    capacityWafers: 5000,
    investment: "$1.6B",
    status: "Operational",
    expected: "Long-term build-out to $1.6B by 2035; Amkor's largest",
    details: "Inaugurated Oct 2023 on 230,000 sqm site. Phase 1 investment $200-250M, total commitment ~$1.6B over 10+ years. Focuses on advanced SiP assembly/test for mobile, auto, communications customers seeking non-China diversification.",
    category: "osat",
    region: "asia-pacific",
    source: "https://ir.amkor.com/news-releases/news-release-details/amkor-technology-announces-plans-expand-advanced-packaging"
  },
  {
    project: "K5 Songdo",
    company: "Amkor Technology",
    location: "Songdo, Incheon, South Korea",
    lat: 37.3833,
    lng: 126.6561,
    technology: "EMIB, 2.5D, SiP, wafer-level",
    capacity: "~4K wpm-eq (class-100 cleanroom; EMIB for Intel)",
    capacityWafers: 4000,
    investment: "$1.6B",
    status: "Operational",
    expected: "Running EMIB packaging for Intel products from 2025+",
    details: "Amkor's global R&D center and most advanced OSAT facility globally (class-100 particle control). Selected by Intel as first-ever EMIB outsourcing partner for Intel Products and Intel Foundry customers.",
    category: "osat",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2025/12/01/news-intel-reportedly-taps-amkors-songdo-facility-for-emib-packaging-in-first-ever-outsourcing-move/"
  },
  {
    project: "Peoria Arizona Campus",
    company: "Amkor Technology",
    location: "Peoria, Arizona, USA",
    lat: 33.5806,
    lng: -112.2374,
    technology: "2.5D, advanced SiP, test",
    capacity: "~6K wpm-eq (>750K sqft cleanroom)",
    capacityWafers: 6000,
    investment: "$7B",
    status: "Under Construction",
    expected: "Phase 1 complete mid-2027; production early 2028",
    details: "CHIPS Act direct funding up to $407M. Broke ground Oct 2025 with scope expanded from $2B to $7B. Will create up to 3,000 jobs. 2.5D technology for AI/HPC. Partners with TSMC Arizona.",
    category: "osat",
    region: "north-america",
    source: "https://ir.amkor.com/news-releases/news-release-details/amkor-technology-breaks-ground-new-semiconductor-advanced"
  },
  {
    project: "Fab 9 Rio Rancho",
    company: "Intel",
    location: "Rio Rancho, New Mexico, USA",
    lat: 35.2628,
    lng: -106.7308,
    technology: "Foveros (3D), Foveros Direct",
    capacity: "~8K wpm-eq (Foveros capacity quadrupled from 2023)",
    capacityWafers: 8000,
    investment: "$3.5B",
    status: "Operational",
    expected: "Continued Foveros ramp through 2026",
    details: "Opened Jan 2024. Believed to be the single most expensive advanced packaging facility ever built. Intel's only high-volume Foveros site for at least 2-3 years. Co-located with Fab 11X die source. Powers Meteor/Lunar/Panther Lake and AI accelerators.",
    category: "idm",
    region: "north-america",
    source: "https://www.tomshardware.com/pc-components/cpus/intel-opens-dollar35-billion-advanced-foveros-3d-chip-packaging-facility-in-new-mexico"
  },
  {
    project: "Penang & Kulim AP",
    company: "Intel",
    location: "Penang / Kulim, Malaysia",
    lat: 5.3274,
    lng: 100.3103,
    technology: "EMIB, Foveros, 3D stacking",
    capacity: "~10K wpm-eq (new Malaysia complex)",
    capacityWafers: 10000,
    investment: "$7B",
    status: "Ramping",
    expected: "First-phase operational late 2026",
    details: "RM12B Penang campus 99% complete; handles die sort/prep, EMIB and Foveros flows. Additional $208M (RM860M) committed Dec 2025. 10-year RM30B plan for Penang+Kulim. Supports 120x120mm EMIB packages with 12+ HBM stacks.",
    category: "idm",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2026/03/18/news-intel-ramps-up-advanced-packaging-malaysia-complex-operational-in-2026-emib-update/"
  },
  {
    project: "Cheonan / Onyang AP",
    company: "Samsung Electronics",
    location: "Cheonan, South Chungcheong, South Korea",
    lat: 36.8151,
    lng: 127.1139,
    technology: "HBM TSV, I-Cube (2.5D), X-Cube (3D)",
    capacity: "~20K wpm-eq (50% surge in 2026)",
    capacityWafers: 20000,
    investment: "$4B",
    status: "Ramping",
    expected: "New Cheonan HBM line complete by end 2027",
    details: "Samsung's primary HBM back-end cluster. Onyang hit saturation, driving new 280,000 sqm Cheonan site leased from Samsung Display for HBM3E and HBM4 mass production. Also does I-Cube 2.5D for AI accelerators (reportedly Nvidia).",
    category: "idm",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2024/11/13/news-samsung-to-expand-hbm-packaging-facilities-south-of-seoul-targeting-completion-by-2027/"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  foundry: "#3b82f6",
  osat:    "#10b981",
  idm:     "#f59e0b"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [30, 120],
    zoom: 3,
    minZoom: 2,
    maxZoom: 12,
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
  if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }

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

function getMarkerRadius(capacityWafers) {
  if (capacityWafers >= 50000) return 18;
  if (capacityWafers >= 25000) return 14;
  if (capacityWafers >= 10000) return 11;
  if (capacityWafers >= 3000)  return 8;
  return 6;
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.capacityWafers);

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
          <span class="popup-project-name">${dc.project}</span>
        </div>
        <div class="popup-company">${dc.company}</div>
        <div class="popup-details">
          <span class="popup-detail-label">Location</span>
          <span class="popup-detail-value">${dc.location}</span>
          <span class="popup-detail-label">Technology</span>
          <span class="popup-detail-value">${dc.technology}</span>
          <span class="popup-detail-label">Capacity</span>
          <span class="popup-detail-value">${dc.capacity}</span>
          <span class="popup-detail-label">Investment</span>
          <span class="popup-detail-value">${dc.investment}</span>
          <span class="popup-detail-label">Status</span>
          <span class="popup-detail-value">${dc.status}</span>
          <span class="popup-detail-label">Timeline</span>
          <span class="popup-detail-value">${dc.expected}</span>
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--color-text-muted);line-height:1.5;">${dc.details}</div>
        <div class="popup-source"><a href="${dc.source}" target="_blank" rel="noopener noreferrer">View source →</a></div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 340, minWidth: 240 });
    marker.bindTooltip(dc.project, {
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

  let totalB = 0;
  data.forEach(dc => {
    const match = dc.investment.match(/\$(\d+(?:\.\d+)?)\s*B/i);
    if (match) totalB += parseFloat(match[1]);
    const matchM = dc.investment.match(/\$(\d+(?:\.\d+)?)\s*M/i);
    if (matchM && !match) totalB += parseFloat(matchM[1]) / 1000;
  });
  if (totalB >= 1000) {
    document.getElementById("stat-investment").textContent = "$" + (totalB / 1000).toFixed(1) + "T+";
  } else {
    document.getElementById("stat-investment").textContent = "$" + Math.round(totalB) + "B+";
  }

  let totalWafers = 0;
  data.forEach(dc => { totalWafers += dc.capacityWafers; });
  if (totalWafers >= 1000000) {
    document.getElementById("stat-capacity").textContent = (totalWafers / 1000000).toFixed(1) + "M wpm";
  } else if (totalWafers >= 1000) {
    document.getElementById("stat-capacity").textContent = Math.round(totalWafers / 1000) + "K wpm";
  } else {
    document.getElementById("stat-capacity").textContent = totalWafers + " wpm";
  }

  const countries = new Set();
  data.forEach(dc => {
    const parts = dc.location.split(",");
    countries.add(parts[parts.length - 1].trim());
  });
  document.getElementById("stat-countries").textContent = countries.size;
}

/* ========== TABLE ========== */

function renderTable(data) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  data.forEach(dc => {
    const statusClass = dc.status.toLowerCase().includes("construction") ? "construction"
      : dc.status.toLowerCase().includes("operational") || dc.status.toLowerCase().includes("ramping") ? "groundbreaking"
      : dc.status.toLowerCase().includes("planned") || dc.status.toLowerCase().includes("announced") ? "announced"
      : "partial";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.project}</td>
      <td>${dc.company}</td>
      <td>${dc.location}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.technology}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.capacity}</td>
      <td><span class="status-badge status-${statusClass}">${dc.status}</span></td>
    `;

    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      map.setView([dc.lat, dc.lng], 8);
      const markerIndex = dataCenters.indexOf(dc);
      if (markers[markerIndex]) {
        markers[markerIndex].openPopup();
      }
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
      dc.project.toLowerCase().includes(searchTerm) ||
      dc.company.toLowerCase().includes(searchTerm) ||
      dc.location.toLowerCase().includes(searchTerm) ||
      (dc.technology && dc.technology.toLowerCase().includes(searchTerm)) ||
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
    if (sortCol === col) {
      sortAsc = !sortAsc;
    } else {
      sortCol = col;
      sortAsc = true;
    }

    document.querySelectorAll("th[data-sort]").forEach(h => {
      h.textContent = h.textContent.replace(/ [▲▼]/, "");
    });
    th.textContent += sortAsc ? " ▲" : " ▼";

    const rows = Array.from(document.getElementById("table-body").children);
    rows.sort((a, b) => {
      const cellA = a.children[getColIndex(col)].textContent.trim();
      const cellB = b.children[getColIndex(col)].textContent.trim();
      return sortAsc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    const tbody = document.getElementById("table-body");
    rows.forEach(r => tbody.appendChild(r));
  });
});

function getColIndex(col) {
  const map = { project: 0, company: 1, location: 2, investment: 3, capacity: 4, status: 5 };
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
  .custom-tooltip::before {
    border-top-color: var(--color-border) !important;
  }
`;
document.head.appendChild(tooltipStyle);

/* ========== INIT ========== */

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  updateStats(dataCenters);
  renderTable(dataCenters);
});
