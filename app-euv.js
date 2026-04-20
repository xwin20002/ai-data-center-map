/* ========== EUV TOOL DESTINATION DATA ==========

Schema:
  - toolCount: integer, total NXE + EXE scanners at the fab (estimates)
  - generation: comma-separated (NXE:3400C, NXE:3600D, NXE:3800E, EXE:5000, EXE:5200B)
  - category: "foundry" | "memory" | "idm"
  - investment: string like "$25B" (cumulative fab investment)

ASML and fabs do not publish per-site tool counts. Most figures are
Base-case estimates from SemiAnalysis, Bits&Chips, and TechInsights.

========== */

const dataCenters = [
  {
    project: "Fab 18 (Tainan GigaFab)",
    company: "TSMC",
    location: "Tainan, Taiwan",
    lat: 23.0469,
    lng: 120.2797,
    generation: "NXE:3400C, NXE:3600D, NXE:3800E",
    capacity: "~80-100 EUV tools (est., largest single concentration globally)",
    toolCount: 90,
    investment: "$40B+ (cumulative across Phases 1-8)",
    status: "Operational",
    expected: "N3P full ramp 2025; N2 support 2026",
    details: "Fab 18 is TSMC's flagship 5nm/3nm GigaFab across 8 phases in Tainan Science Park, housing the world's single-largest EUV concentration. Supplies N5/N4/N3 wafers to Apple, NVIDIA, AMD, Qualcomm. Tool count is a SemiAnalysis-style estimate — TSMC does not disclose per-fab scanner inventory; base-case 80-100 NXE units across phases, weighted toward NXE:3600D/3800E.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.tsmc.com/english/dedicatedFoundry/manufacturing/gigafab"
  },
  {
    project: "Fab 20 (Hsinchu N2 GigaFab)",
    company: "TSMC",
    location: "Hsinchu, Taiwan",
    lat: 24.7742,
    lng: 121.0436,
    generation: "NXE:3800E, EXE:5000 (R&D)",
    capacity: "~20-30 EUV tools at initial ramp; High-NA R&D co-located",
    toolCount: 25,
    investment: "$30B+ (Phases 1-4 planned)",
    status: "Ramping",
    expected: "N2 mass production reached Jan 2026; High-NA EXE:5000 evaluation ongoing",
    details: "Fab 20 sits adjacent to TSMC's R&D center in Hsinchu Science Park and anchored TSMC's N2 volume ramp in January 2026 (GAA nanosheet). TSMC has at least one EXE:5000 for R&D but N2 will use only 0.33NA EUV; High-NA is targeted for A14/A10. Tool count is initial-phase estimate; will grow as Phases 2-4 come online alongside Kaohsiung Fab 22.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.tomshardware.com/tech-industry/semiconductors/tsmc-begins-quietly-volume-production-of-2nm-class-chips-first-gaa-transistor-for-tsmc-claims-up-to-15-percent-improvement-at-iso-power"
  },
  {
    project: "Fab 21 (Arizona)",
    company: "TSMC",
    location: "Phoenix, Arizona, USA",
    lat: 33.7490,
    lng: -112.1859,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "~10-15 EUV tools across Phases 1-2 at full ramp",
    toolCount: 12,
    investment: "$65B (3-fab commitment, CHIPS Act support)",
    status: "Ramping",
    expected: "Phase 1 N4 HVM Q4 2024 (achieved); Phase 2 N3 2028; Phase 3 N2/A16 pulled to 2027",
    details: "Fab 21 Phase 1 reached mass production on N4P in early 2025 with reported ~92% yield parity versus Taiwan fabs, supplying Apple and NVIDIA. Phase 2 is installing 3nm equipment ahead of schedule; Phase 3 targets N2/A16. Tool count is a base-case estimate for Phase 1+2 EUV fleet — TSMC has not publicly disclosed Arizona scanner inventory.",
    category: "foundry",
    region: "north-america",
    source: "https://www.tomshardware.com/tech-industry/semiconductors/tsmc-brings-its-most-advanced-chipmaking-node-to-the-us-yet-to-begin-equipment-installation-for-3mn-months-ahead-of-schedule-arizona-fab-slated-for-production-in-2027"
  },
  {
    project: "Hwaseong Campus (S3/S5 Foundry)",
    company: "Samsung",
    location: "Hwaseong, South Korea",
    lat: 37.2082,
    lng: 127.0648,
    generation: "NXE:3400C, NXE:3600D, NXE:3800E, EXE:5000",
    capacity: "~25-30 EUV tools + first High-NA EXE:5000 (R&D, Mar 2025)",
    toolCount: 28,
    investment: "$30B+ (cumulative)",
    status: "Operational",
    expected: "GAA N2 ramp 2025-2026; second EXE:5200B H1 2026",
    details: "Hwaseong is Samsung Foundry's historical EUV hub — S3 line has run 7nm/5nm/4nm EUV production since 2019 and S5 runs 3nm GAA. Samsung brought in its first High-NA EXE:5000 in March 2025 and is ordering a second EXE:5200B for 1H26. Total fleet across Hwaseong+Pyeongtaek reportedly 30+ units; allocation to each campus is an analyst estimate.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2025/03/12/news-samsung-reportedly-brings-high-na-euv-machine-to-hwaseong-campus-in-early-march-amid-2nm-race/"
  },
  {
    project: "Pyeongtaek Campus (P1/P2/P3/P5)",
    company: "Samsung",
    location: "Pyeongtaek, South Korea",
    lat: 36.9839,
    lng: 127.1189,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "~15-20 EUV tools today; P5 order ~20 additional scanners (~$7B deal)",
    toolCount: 18,
    investment: "$100B+ (Pyeongtaek campus cumulative)",
    status: "Operational",
    expected: "P5 EUV move-in 2026-2027; HBM4 DRAM 1c ramp",
    details: "Pyeongtaek hosts Samsung's largest memory footprint (P1/P2/P3) running EUV on 1a/1b/1c DRAM for HBM, plus some foundry capacity. Samsung signed a >10 trillion won order for ~20 EUV machines destined for the P5 fab. Current installed tool count is an estimate; Samsung does not publish scanner-level disclosure.",
    category: "memory",
    region: "asia-pacific",
    source: "https://en.sedaily.com/finance/2026/04/06/samsung-orders-20-euv-machines-for-p5-fab-in-over-10"
  },
  {
    project: "Taylor Fab (S5 Texas)",
    company: "Samsung",
    location: "Taylor, Texas, USA",
    lat: 30.5710,
    lng: -97.4092,
    generation: "NXE:3800E",
    capacity: "EUV tools in trial March 2026; full fleet TBD",
    toolCount: 6,
    investment: "$44B (CHIPS Act $4.7B grant)",
    status: "Under Construction",
    expected: "Trial production 2026; 2nm mass production slipped to 2027 (customer shortage)",
    details: "Samsung obtained partial TCO in Feb 2026 and EUV tools began trial operations in March 2026, but full mass production has slipped to early 2027 due to lack of confirmed foundry customers. Originally planned for 4nm, upgraded to 2nm to compete with TSMC Arizona. Tool count is an initial-install estimate — Samsung has not published the Taylor scanner allocation.",
    category: "foundry",
    region: "north-america",
    source: "https://www.trendforce.com/news/2026/03/03/news-delay-at-samsungs-taylor-reportedly-slips-mass-production-to-2027-raising-concerns-for-tesla/"
  },
  {
    project: "D1X (Ronler Acres, Hillsboro)",
    company: "Intel",
    location: "Hillsboro, Oregon, USA",
    lat: 45.5446,
    lng: -122.9660,
    generation: "NXE:3600D, NXE:3800E, EXE:5000, EXE:5200B",
    capacity: "~15-20 EUV tools + world-first commercial High-NA EXE:5000 + 2nd-gen EXE:5200B acceptance 2025",
    toolCount: 18,
    investment: "$30B+ (D1X Mod 1/2/3)",
    status: "Operational",
    expected: "Intel 18A R&D support; 14A development on High-NA 2026-2027",
    details: "D1X Mod 3 is Intel's R&D and leading-edge development hub — received industry-first EXE:5000 in Jan 2024 (assembly complete April 2024) and completed first 2nd-gen High-NA EXE:5200B acceptance testing in Dec 2025. Low-NA EUV fleet supports Intel 4/3/18A process proving. Tool count is an estimate including R&D scanners that are not always captured in production fleet tallies.",
    category: "idm",
    region: "north-america",
    source: "https://newsroom.intel.com/intel-foundry/intel-foundry-opens-new-frontier-chipmaking"
  },
  {
    project: "Fab 34 (Leixlip, Ireland)",
    company: "Intel",
    location: "Leixlip, County Kildare, Ireland",
    lat: 53.3689,
    lng: -6.5017,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "~10-12 EUV tools (Europe's first HVM EUV fab)",
    toolCount: 11,
    investment: "$18.4B",
    status: "Operational",
    expected: "Intel 4/3 HVM; Apollo JV ownership restructured 2024",
    details: "Fab 34 started HVM on Intel 4 in Sept 2023, the first high-volume EUV fab in Europe, and is also qualified for Intel 3. Intel sold a minority stake to Apollo via a JV in 2024. Tool count is an analyst estimate covering the Phase 1 build-out; Intel does not disclose a per-fab scanner count.",
    category: "idm",
    region: "europe",
    source: "https://newsroom.intel.com/manufacturing/new-fab-ireland-high-volume-production-intel-4-technology"
  },
  {
    project: "Fab 52 (Ocotillo, Arizona)",
    company: "Intel",
    location: "Chandler, Arizona, USA",
    lat: 33.3211,
    lng: -111.8722,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "\"At least 15 EUV machines\" (Intel CNBC disclosure Dec 2025)",
    toolCount: 15,
    investment: "$30B+ (part of >$100B US commitment)",
    status: "Ramping",
    expected: "Intel 18A mass production end-2025; Panther Lake client + Xeon ramp",
    details: "Fab 52 is Intel's US home for the 18A node — officially stated to house at least 15 EUV scanners, already including NXE:3800E and 0.33NA systems. Target throughput is 10K wafer-starts/week (~40K WSPM). This is one of the few fabs with publicly confirmed EUV tool count (via Intel executive to CNBC).",
    category: "idm",
    region: "north-america",
    source: "https://www.cnbc.com/2025/12/19/intel-aims-to-find-clients-and-catch-tsmc-with-new-chip-fab-in-arizona.html"
  },
  {
    project: "Fab 38 (Kiryat Gat Expansion)",
    company: "Intel",
    location: "Kiryat Gat, Southern District, Israel",
    lat: 31.6100,
    lng: 34.7642,
    generation: "NXE:3800E (planned)",
    capacity: "EUV allocation on hold — construction paused mid-2024",
    toolCount: 0,
    investment: "$25B (announced; $3.2B Israeli gov grant)",
    status: "Announced",
    expected: "Construction paused 2024; no firm restart date",
    details: "Fab 38 was announced in Dec 2023 as Intel's $25B Israeli EUV expansion adjacent to the existing non-EUV Fab 28, originally targeting 2nm / 18A production by 2028. Construction was paused in mid-2024 amid Intel cash constraints and geopolitics, and no EUV tools have been delivered. Current Intel Israel (Fab 28) does NOT have EUV — this entry tracks the planned future EUV site.",
    category: "idm",
    region: "asia-pacific",
    source: "https://www.tomshardware.com/tech-industry/manufacturing/intel-secures-dollar325b-israeli-govt-grant-to-build-dollar25b-chip-fab-in-israel-amid-ongoing-tensions"
  },
  {
    project: "M16 (Icheon)",
    company: "SK Hynix",
    location: "Icheon, Gyeonggi, South Korea",
    lat: 37.2720,
    lng: 127.4350,
    generation: "NXE:3600D, NXE:3800E, EXE:5200B",
    capacity: "~15-20 EUV tools + industry-first commercial High-NA EXE:5200B (Sept 2025)",
    toolCount: 18,
    investment: "$10B+ (M16 fab) + $3B+ High-NA EUV",
    status: "Operational",
    expected: "1c DRAM mass production 2025; HBM4 support; 20 more EUV by 2027",
    details: "M16 is SK Hynix's flagship DRAM fab running EUV on 1a (1 layer), 1b (4 layers), and 1c (5-6 layers) to feed HBM3e/HBM4. SK Hynix assembled the industry's first commercial High-NA EXE:5200B here in Sept 2025. The company plans to add ~20 more EUV systems by 2027, potentially doubling its fleet and ranking third globally behind TSMC and Samsung.",
    category: "memory",
    region: "asia-pacific",
    source: "https://news.skhynix.com/sk-hynix-introduces-industrys-first-commercial-high-na-euv/"
  },
  {
    project: "Hiroshima Fab (F2 EUV line)",
    company: "Micron",
    location: "Higashihiroshima, Hiroshima, Japan",
    lat: 34.4200,
    lng: 132.7100,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "~4-6 EUV tools (first EUV in Japan; 1-gamma DRAM)",
    toolCount: 5,
    investment: "$3.6B (initial) + ~$10B Hiroshima F2 expansion (Japanese gov subsidy ~$3.2B)",
    status: "Ramping",
    expected: "1-gamma HVM ramp 2025-2026; F2 HBM-focused DRAM fab online by 2027",
    details: "Hiroshima is Micron's first EUV site globally and the first EUV fab in Japan, bringing 1-gamma (1γ) DRAM online in 2025 for HBM applications. The new F2 building targets HBM-focused DRAM with additional EUV capacity by 2027. Tool count is a base-case estimate; Micron has not published scanner allocation but confirmed 1γ entry on EUV.",
    category: "memory",
    region: "asia-pacific",
    source: "https://investors.micron.com/news-releases/news-release-details/micron-bring-euv-technology-japan-advancing-next-generation"
  },
  {
    project: "Fab 16 (Taichung)",
    company: "Micron",
    location: "Taichung, Taiwan",
    lat: 24.1836,
    lng: 120.6189,
    generation: "NXE:3600D, NXE:3800E",
    capacity: "~4-6 EUV tools for 1-gamma DRAM ramp",
    toolCount: 5,
    investment: "$10B+ (Taichung cumulative across A3/F16)",
    status: "Ramping",
    expected: "1-gamma HVM 2025-2026; HBM3e/HBM4 backend stacking co-located",
    details: "Micron's Taichung campus (A3/F16) hosts 1-gamma DRAM production on EUV alongside the Hiroshima site, and is Micron's primary HBM backend stacking location feeding NVIDIA. Tool count is an estimate — Micron confirms EUV on 1γ at Taichung+Hiroshima but does not break out per-site scanner counts.",
    category: "memory",
    region: "asia-pacific",
    source: "https://www.eenewseurope.com/en/micron-to-make-1-gamma-drams-in-japan-taiwan/"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  foundry: "#3b82f6",
  memory:  "#10b981",
  idm:     "#f59e0b"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [30, 60],
    zoom: 2,
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

function getMarkerRadius(tools) {
  if (tools >= 60) return 20;
  if (tools >= 25) return 15;
  if (tools >= 12) return 11;
  if (tools >= 5) return 8;
  return 5;
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.toolCount);

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
          <span class="popup-detail-label">Tool Gen</span>
          <span class="popup-detail-value">${dc.generation}</span>
          <span class="popup-detail-label">Tools</span>
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

  let totalTools = 0;
  data.forEach(dc => { totalTools += dc.toolCount; });
  document.getElementById("stat-capacity").textContent = totalTools + " tools";

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
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.generation}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.capacity}</td>
      <td><span class="status-badge status-${statusClass}">${dc.status}</span></td>
    `;

    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      map.setView([dc.lat, dc.lng], 8);
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
      dc.project.toLowerCase().includes(searchTerm) ||
      dc.company.toLowerCase().includes(searchTerm) ||
      dc.location.toLowerCase().includes(searchTerm) ||
      (dc.generation && dc.generation.toLowerCase().includes(searchTerm)) ||
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
  .custom-tooltip::before { border-top-color: var(--color-border) !important; }
`;
document.head.appendChild(tooltipStyle);

/* ========== INIT ========== */

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  updateStats(dataCenters);
  renderTable(dataCenters);
});
