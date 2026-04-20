/* ========== HBM CAPACITY DATA ==========

Schema:
  - capacityWafers: integer, HBM-allocated wafers per month
  - generation: comma-separated (HBM3, HBM3e, HBM4)
  - category: "sk-hynix" | "samsung" | "micron"
  - investment: string like "$8B"

HBM is produced at DRAM fabs and then TSV-stacked. When a fab is mixed-use
DRAM + HBM, the HBM-allocated wafer share is estimated and noted in details.

========== */

const dataCenters = [
  {
    project: "M15 (Cheongju HBM TSV)",
    company: "SK Hynix",
    location: "Cheongju, South Korea",
    lat: 36.6424,
    lng: 127.4890,
    generation: "HBM3, HBM3e, HBM4",
    capacity: "~50K wpm DRAM/HBM mix, TSV line expanding",
    capacityWafers: 50000,
    investment: "$8B+ (cumulative)",
    status: "Operational",
    expected: "HBM4 TSV ramp 2026",
    details: "Built in 2018, M15 houses SK Hynix's core HBM TSV stacking line feeding HBM3/HBM3e to NVIDIA. TSV capacity is being expanded through 2026 to support HBM4. Wafer figure is an estimate for the HBM-allocated portion of the mixed DRAM/HBM fab.",
    category: "sk-hynix",
    region: "asia-pacific",
    source: "https://news.skhynix.com/corporate/fact-sheet/"
  },
  {
    project: "M16 (Icheon DRAM/HBM)",
    company: "SK Hynix",
    location: "Icheon, South Korea",
    lat: 37.2720,
    lng: 127.4350,
    generation: "HBM3e, HBM4",
    capacity: "~80K wpm expansion planned at M16/M10",
    capacityWafers: 80000,
    investment: "$10B+",
    status: "Operational",
    expected: "HBM4 DRAM ramp 2026",
    details: "M16 was completed in 2021 as SK Hynix's flagship Icheon DRAM fab. The company is ordering equipment to add ~80K wpm of DRAM/HBM capacity across M16 and M10. HBM4 1c DRAM production is being prepared here alongside M15X. Figure represents announced incremental expansion.",
    category: "sk-hynix",
    region: "asia-pacific",
    source: "https://www.tweaktown.com/news/99896/sk-hynix-preparing-to-expand-dram-capacity-hbm-by-80k-wafers-per-month-at-m16-m10-fabs/index.html"
  },
  {
    project: "M15X (Cheongju New Fab)",
    company: "SK Hynix",
    location: "Cheongju, South Korea",
    lat: 36.6514,
    lng: 127.4860,
    generation: "HBM3e, HBM4",
    capacity: "~60K wpm at full ramp (2027)",
    capacityWafers: 60000,
    investment: "$15B (reported)",
    status: "Ramping",
    expected: "Production start Feb 2026; 50K wpm by Q4 2026",
    details: "M15X starts 1b DRAM production for HBM4 in February 2026, ~4 months ahead of schedule. Initial output ~10K wpm scaling to ~50K wpm by Q4 2026 and ~60K wpm by mid-2027. Core of SK Hynix's bid to retain HBM4 leadership (est. 70% share of NVIDIA Rubin HBM4).",
    category: "sk-hynix",
    region: "asia-pacific",
    source: "https://en.sedaily.com/finance/2025/12/25/sk-hynix-to-launch-m15x-fab-in-may-2026-cementing-global-ai"
  },
  {
    project: "Cheongju Advanced Packaging Fab",
    company: "SK Hynix",
    location: "Cheongju, South Korea",
    lat: 36.6450,
    lng: 127.4900,
    generation: "HBM3e, HBM4, HBM4e",
    capacity: "Dedicated HBM stacking/TSV (capacity TBD)",
    capacityWafers: 30000,
    investment: "~$13B announced",
    status: "Under Construction",
    expected: "Operational 2027",
    details: "Announced Jan 2026, dedicated HBM advanced packaging and TSV fab in Cheongju to boost HBM output through 2027. Estimate of 30K wpm is Bear/Base for stacking throughput based on peer facility footprints; exact capacity not disclosed.",
    category: "sk-hynix",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2026/01/13/news-sk-hynix-to-build-cheongju-advanced-packaging-fab-boosting-hbm-output-by-2027/"
  },
  {
    project: "Wuxi C2/C2F (DRAM, HBM feeder)",
    company: "SK Hynix",
    location: "Wuxi, China",
    lat: 31.4912,
    lng: 120.3120,
    generation: "DDR5, LPDDR (HBM-adjacent DRAM)",
    capacity: "~40% of SK Hynix DRAM wafer output",
    capacityWafers: 130000,
    investment: "$8B+ (C2F expansion)",
    status: "Operational",
    expected: "No HBM TSV onsite (DRAM feeder only)",
    details: "Wuxi C2/C2F accounts for ~40% of SK Hynix total DRAM wafer capacity. HBM stacking/TSV is not done here (geopolitical and equipment constraints); Wuxi supplies commodity DRAM while freeing Korean fabs for HBM. Figure is estimated total DRAM wafer output, not HBM-specific.",
    category: "sk-hynix",
    region: "asia-pacific",
    source: "https://news.skhynix.com/sk-hynix-completes-expanded-fab-c2f-in-wuxi-china/"
  },
  {
    project: "West Lafayette Advanced Packaging",
    company: "SK Hynix",
    location: "West Lafayette, Indiana, USA",
    lat: 40.4259,
    lng: -86.9081,
    generation: "HBM4, HBM4e",
    capacity: "HBM advanced packaging (capacity undisclosed)",
    capacityWafers: 20000,
    investment: "$3.87B ($458M CHIPS Act)",
    status: "Under Construction",
    expected: "Mass production H2 2028",
    details: "First US-based HBM packaging plant, partnered with Purdue University. Will focus on next-gen HBM (post-HBM4) stacking. Capacity estimate (20K wpm-equivalent) is a Base-case placeholder; Micron/SK Hynix do not publish packaging throughput numbers for this site.",
    category: "sk-hynix",
    region: "north-america",
    source: "https://www.nist.gov/chips/sk-hynix-indiana-west-lafayette"
  },
  {
    project: "Pyeongtaek P2 (DRAM/HBM)",
    company: "Samsung",
    location: "Pyeongtaek, South Korea",
    lat: 36.9933,
    lng: 127.1122,
    generation: "HBM3, HBM3e",
    capacity: "Key HBM3e DRAM + TSV hub",
    capacityWafers: 60000,
    investment: "$30B+ (P2 campus)",
    status: "Operational",
    expected: "HBM3e 12H mass production ongoing",
    details: "P2 runs Samsung's 12-layer HBM3e line that finally passed NVIDIA qualification in Q3 2025. Yields reportedly stabilized in H2 2025 after earlier struggles (vs SK Hynix 60-70%). Capacity figure is HBM-allocated portion estimate; Samsung does not break out per-line numbers.",
    category: "samsung",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2025/05/23/news-samsung-reportedly-nears-nvidia-hbm3e-approval-but-order-outlook-remains-in-doubt/"
  },
  {
    project: "Pyeongtaek P4 (HBM4 1c DRAM)",
    company: "Samsung",
    location: "Pyeongtaek, South Korea",
    lat: 36.9950,
    lng: 127.1150,
    generation: "HBM4 (1c DRAM + base die)",
    capacity: "60K wpm Q4 2025 -> 200K wpm Q4 2026",
    capacityWafers: 140000,
    investment: "Part of multi-trillion KRW Pyeongtaek campus",
    status: "Ramping",
    expected: "HBM4 mass production H2 2026",
    details: "P4 is Samsung's aggressive HBM4 bet: 60K wpm in Q4 2025, +80K in Q2 2026, +60K in Q4 2026. Over 50% of P4 foundry capacity is reportedly allocated to in-house HBM4 base dies (OpenAI rumored as customer). Figure is 2026 end-state HBM-allocated portion.",
    category: "samsung",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2026/03/20/news-samsung-reportedly-allocates-50-of-pyeongtaek-foundry-capacity-to-hbm4-base-die-said-to-win-openai-as-customer/"
  },
  {
    project: "Hwaseong 1c DRAM/HBM line",
    company: "Samsung",
    location: "Hwaseong, South Korea",
    lat: 37.2080,
    lng: 127.0650,
    generation: "HBM3e, HBM4",
    capacity: "Hwaseong 17 legacy line being converted to 1c",
    capacityWafers: 50000,
    investment: "Undisclosed (line conversion)",
    status: "Ramping",
    expected: "1c DRAM conversion 2026",
    details: "Samsung is converting the legacy Hwaseong 17 line from 1z to 1c DRAM to feed HBM4. Together with Pyeongtaek, Samsung targets ~250K wpm total HBM capacity by end-2026 (+47% YoY from ~170K). Capacity is estimate for Hwaseong HBM-allocated portion.",
    category: "samsung",
    region: "asia-pacific",
    source: "https://www.trendforce.com/news/2025/05/22/news-samsung-reportedly-plans-1c-dram-expansion-for-hbm4-in-hwaseong-and-pyeongtaek-by-year-end/"
  },
  {
    project: "Taichung Fab 11 / AATT",
    company: "Micron",
    location: "Taichung, Taiwan",
    lat: 24.1747,
    lng: 120.6400,
    generation: "HBM3e, HBM4",
    capacity: "Micron's primary HBM hub (DRAM + packaging)",
    capacityWafers: 60000,
    investment: "NT$ ~300B+ cumulative",
    status: "Operational",
    expected: "HBM3e volume 2025-2026; 2026 fully booked",
    details: "Taichung hosts Micron's 1-beta/1-gamma DRAM fab and the new AATT advanced assembly/test facility (300K sqft cleanroom) for HBM3e stacking. Micron has stated its entire HBM3e/HBM4 2026 inventory is sold out. Figure is estimated HBM-allocated wafer output.",
    category: "micron",
    region: "asia-pacific",
    source: "https://www.tomshardware.com/pc-components/ram/inside-microns-most-advanced-memory-fab-we-visited-the-colossal-control-room-and-newest-a3-fab-in-taiwan"
  },
  {
    project: "Tongluo P5 (PSMC acquisition)",
    company: "Micron",
    location: "Tongluo, Miaoli, Taiwan",
    lat: 24.4990,
    lng: 120.7840,
    generation: "DRAM + HBM back-end",
    capacity: "Acquired; HBM back-end line being added",
    capacityWafers: 25000,
    investment: "$1.8B acquisition",
    status: "Under Construction",
    expected: "DRAM contribution H2 2027",
    details: "Micron announced Jan 2026 acquisition of PSMC's P5 fab for $1.8B. Plans include HBM back-end manufacturing lines plus DRAM expansion. Deal closes Q2 2026, meaningful output from H2 2027. Capacity is estimated Base-case for HBM back-end contribution.",
    category: "micron",
    region: "asia-pacific",
    source: "https://markets.financialcontent.com/stocks/article/tokenring-2026-1-23-micron-secures-18-billion-taiwan-fab-acquisition-to-combat-global-ai-memory-shortage"
  },
  {
    project: "Hiroshima HBM Fab",
    company: "Micron",
    location: "Hiroshima, Japan",
    lat: 34.3850,
    lng: 132.4550,
    generation: "HBM4, HBM4e",
    capacity: "Dedicated HBM-focused DRAM fab",
    capacityWafers: 40000,
    investment: "$9.6B (¥1.5T); up to $3.2B METI subsidy",
    status: "Under Construction",
    expected: "First HBM shipments 2028",
    details: "Announced Dec 2025. Construction starts May 2026 on Micron's existing Hiroshima campus, which also runs a new EUV-based 1-gamma DRAM line (LPDDR5X sampling 2025). Capacity is estimated Base-case for a dedicated HBM fab of this investment scale.",
    category: "micron",
    region: "asia-pacific",
    source: "https://www.tomshardware.com/tech-industry/semiconductors/micron-plans-hbm-fab-in-japan-as-ai-memory-race-accelerates"
  },
  {
    project: "Boise Idaho Fabs (ID1/ID2)",
    company: "Micron",
    location: "Boise, Idaho, USA",
    lat: 43.6150,
    lng: -116.2023,
    generation: "Leading-edge DRAM (HBM feeder)",
    capacity: "2x 600K sqft cleanrooms",
    capacityWafers: 100000,
    investment: "Part of $200B US investment",
    status: "Under Construction",
    expected: "ID1 meaningful DRAM output 2027",
    details: "Two Boise fabs (~600K sqft cleanroom each) focused on leading-edge DRAM that will feed US-based HBM packaging. Construction began Oct 2023; ID1 online 2027. US HBM advanced packaging in Virginia depends on Boise DRAM ramp. Figure is Base-case combined DRAM output.",
    category: "micron",
    region: "north-america",
    source: "https://www.nist.gov/chips/micron-idaho-boise"
  },
  {
    project: "Manassas Virginia HBM Packaging",
    company: "Micron",
    location: "Manassas, Virginia, USA",
    lat: 38.7509,
    lng: -77.4753,
    generation: "HBM (advanced packaging)",
    capacity: "HBM stacking/assembly (first US HBM packaging)",
    capacityWafers: 15000,
    investment: "$275M CHIPS Act funding",
    status: "Under Construction",
    expected: "HBM packaging after Boise DRAM ramps",
    details: "Manassas is being modernized with HBM advanced packaging capability, making it Micron's first US HBM assembly site. Activation conditional on Boise DRAM output. Capacity is estimated Base-case for stacking throughput (Micron does not publish packaging wpm).",
    category: "micron",
    region: "north-america",
    source: "https://www.globenewswire.com/news-release/2025/06/12/3098344/0/en/Micron-and-Trump-Administration-Announce-Expanded-U-S-Investments-in-Leading-Edge-DRAM-Manufacturing-and-R-D.html"
  },
  {
    project: "Sanand ATMP (India)",
    company: "Micron",
    location: "Sanand, Gujarat, India",
    lat: 22.9780,
    lng: 72.3800,
    generation: "DRAM/NAND assembly (HBM-adjacent)",
    capacity: "500K+ sqft cleanroom, assembly/test only",
    capacityWafers: 10000,
    investment: "Rs 22,516 crore (~$2.75B)",
    status: "Operational",
    expected: "Opened Feb 2026",
    details: "India's first semiconductor ATMP facility, opened Feb 28, 2026. Tens of millions of chips in 2026 scaling to hundreds of millions in 2027. Focus is DRAM/NAND conventional assembly; HBM3e advanced packaging remains at Taichung AATT. Capacity is estimated wafer-equivalent throughput.",
    category: "micron",
    region: "asia-pacific",
    source: "https://investors.micron.com/news-releases/news-release-details/micron-celebrates-opening-indias-first-semiconductor-assembly"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  "sk-hynix": "#ef4444",
  "samsung":  "#3b82f6",
  "micron":   "#10b981"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [36, 127],
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

function getMarkerRadius(capacityWafers) {
  if (capacityWafers >= 80000) return 18;
  if (capacityWafers >= 40000) return 14;
  if (capacityWafers >= 20000) return 11;
  if (capacityWafers >= 5000)  return 8;
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
          <span class="popup-detail-label">Generation</span>
          <span class="popup-detail-value">${dc.generation}</span>
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
