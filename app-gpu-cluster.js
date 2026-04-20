/* ========== GPU CLUSTER DATA ==========

Schema:
  - capacityGpus: integer, GPU count (H100-equivalent where mixed)
  - chip: comma-separated (H100, H200, B200, GB200, MI300X, TPU v5p, TPU v6e)
  - category: "hyperscaler" | "neocloud" | "sovereign" | "idm-internal"
  - investment: string like "$7B"

GPU counts for private operators (xAI, CoreWeave, Tesla) and for per-site
TPU splits (Google does not disclose) are estimates; noted in `details`.

========== */

const dataCenters = [
  {
    project: "Colossus 1",
    company: "xAI",
    location: "Memphis, Tennessee, USA",
    lat: 35.1174,
    lng: -90.0400,
    chip: "H100, H200, GB200",
    capacity: "~230,000 GPUs (30K+ GB200)",
    capacityGpus: 230000,
    investment: "~$7B",
    status: "Operational",
    expected: "Ramping toward 555K GPUs with Colossus 2 (estimate)",
    details: "xAI's flagship supercomputer in Memphis. As of January 2026, Colossus 1 houses ~230K GPUs including 30K+ GB200 Blackwell chips. Used to train Grok models. Figures are company-disclosed estimates.",
    category: "neocloud",
    region: "north-america",
    source: "https://introl.com/blog/xai-colossus-2-gigawatt-expansion-555k-gpus-january-2026"
  },
  {
    project: "Colossus 2",
    company: "xAI",
    location: "Memphis, Tennessee, USA",
    lat: 35.0850,
    lng: -90.0200,
    chip: "GB200, GB300",
    capacity: "Target ~550,000 Blackwell GPUs",
    capacityGpus: 550000,
    investment: "~$18B (combined Colossus 1+2)",
    status: "Ramping",
    expected: "Initial batch of 550K Blackwell chips coming online 2026",
    details: "Second Memphis site expanding xAI's compute footprint to 2 GW. Combined with Colossus 1, targets roughly 1 million GPUs across xAI sites by late 2026. Estimate based on xAI/Nvidia disclosures.",
    category: "neocloud",
    region: "north-america",
    source: "https://i10x.ai/news/xai-gigafactory-compute-memphis-colossus-2"
  },
  {
    project: "Prometheus",
    company: "Meta",
    location: "New Albany, Ohio, USA",
    lat: 40.0806,
    lng: -82.8088,
    chip: "H100, H200, GB200",
    capacity: "~500,000 GPUs at 1.02 GW",
    capacityGpus: 500000,
    investment: "$10B+",
    status: "Under Construction",
    expected: "First 1 GW AI training cluster online 2026",
    details: "Meta's first gigawatt-scale AI training cluster at 1500 Beech Road. Designed around rapid-deployment tent-like structures. Powered partly by 400 MW of behind-the-meter generation. GPU mix is an industry estimate.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.nbc4i.com/news/local-news/new-albany/meet-prometheus-worlds-highest-capacity-data-center-slated-to-open-in-ohio-in-2026/"
  },
  {
    project: "Hyperion",
    company: "Meta",
    location: "Richland Parish, Louisiana, USA",
    lat: 32.4057,
    lng: -91.7334,
    chip: "GB200, GB300, Rubin",
    capacity: "Up to 5 GW build-out (~2M GPUs est.)",
    capacityGpus: 2000000,
    investment: "$10B+",
    status: "Under Construction",
    expected: "1.5 GW IT power by end of 2027, full 5 GW by 2030",
    details: "Meta's 4M sq ft mega-campus in northeast Louisiana. Scales to 5 GW across multiple years. Meta has purchased 1.3M+ GPUs for its fleet; Hyperion absorbs the largest share. GPU count at full build is estimate.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.datacenterfrontier.com/hyperscale/article/55310441/ownership-and-power-challenges-in-metas-hyperion-and-prometheus-data-centers"
  },
  {
    project: "Stargate Abilene",
    company: "OpenAI / Oracle / SoftBank",
    location: "Abilene, Texas, USA",
    lat: 32.4487,
    lng: -99.7331,
    chip: "GB200",
    capacity: "450,000+ GB200 GPUs at 1.2 GW",
    capacityGpus: 450000,
    investment: "~$40B site-level",
    status: "Ramping",
    expected: "Remaining 6 of 8 buildings complete mid-2026",
    details: "Anchor site of the $500B Stargate program. Two buildings live since Sep 2025; full site will host 450K+ GB200 under a 15-year Oracle lease. Uses 1.2 GW of power.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/openai-and-oracle-to-deploy-450000-gb200-gpus-at-stargate-abilene-data-center/"
  },
  {
    project: "Stargate UAE",
    company: "G42 / OpenAI / Oracle",
    location: "Abu Dhabi, UAE",
    lat: 24.4539,
    lng: 54.3773,
    chip: "GB300, Vera Rubin",
    capacity: "1 GW cluster within 5 GW campus (~hundreds of thousands GPUs)",
    capacityGpus: 300000,
    investment: "~$30B Phase 1",
    status: "Under Construction",
    expected: "First 200 MW live Q3 2026; 1 GW full in later phases",
    details: "First international Stargate site. 10 sq mile campus run by G42 with OpenAI, Oracle, SoftBank, Cisco, Nvidia. Will deploy Vera Rubin GPUs. Backed by Barakah nuclear baseload. GPU count is estimate based on 1 GW power envelope.",
    category: "sovereign",
    region: "middle-east",
    source: "https://openai.com/index/introducing-stargate-uae/"
  },
  {
    project: "Project Rainier",
    company: "AWS / Anthropic",
    location: "New Carlisle, Indiana, USA",
    lat: 41.7003,
    lng: -86.5089,
    chip: "Trainium2",
    capacity: "~500,000 Trainium2 chips (target 1M in 2026)",
    capacityGpus: 500000,
    investment: "$11B",
    status: "Operational",
    expected: "Expanding toward 1M Trainium chips by end of 2026; Trainium3 imminent",
    details: "AWS-built supercluster on 1,200 acres near Lake Michigan, dedicated to Anthropic model training on Amazon's custom silicon. 7 data center buildings. Trainium2 count is AWS-disclosed.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/aws-activates-project-rainier-cluster-of-nearly-500000-trainium2-chips/"
  },
  {
    project: "Fairwater",
    company: "Microsoft / OpenAI",
    location: "Mount Pleasant, Wisconsin, USA",
    lat: 42.7261,
    lng: -87.8876,
    chip: "GB200, H100",
    capacity: "Hundreds of thousands of Nvidia GPUs",
    capacityGpus: 200000,
    investment: "$7.3B (multi-phase)",
    status: "Ramping",
    expected: "First building online early 2026; 15 more DCs approved",
    details: "Microsoft's 315-acre Fairwater AI datacenter on former Foxconn site. 1.2M sq ft across 3 buildings in first phase. Powers OpenAI and Copilot training. GPU count is estimate based on Microsoft disclosures.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://blogs.microsoft.com/blog/2025/09/18/inside-the-worlds-most-powerful-ai-datacenter/"
  },
  {
    project: "CoreWeave Plano",
    company: "CoreWeave",
    location: "Plano, Texas, USA",
    lat: 33.0198,
    lng: -96.6989,
    chip: "H100, H200, B200",
    capacity: "~450,000 sq ft / tens of thousands of GPUs",
    capacityGpus: 35000,
    investment: "$1.6B",
    status: "Operational",
    expected: "Part of CoreWeave's ~600K GPU fleet across 32 DCs",
    details: "CoreWeave's flagship Nvidia supercomputer site in Plano, TX. 450K sq ft facility built around Hopper-class GPUs with growing Blackwell share. GPU count is site-level estimate.",
    category: "neocloud",
    region: "north-america",
    source: "https://www.nextplatform.com/2025/03/05/coreweaves-250000-strong-gpu-fleet-undercuts-the-big-clouds/"
  },
  {
    project: "CoreWeave Kenilworth",
    company: "CoreWeave",
    location: "Kenilworth, New Jersey, USA",
    lat: 40.6767,
    lng: -74.2907,
    chip: "H100, H200, B200",
    capacity: "280,000 sq ft / tens of thousands of GPUs",
    capacityGpus: 25000,
    investment: "$1.2B",
    status: "Under Construction",
    expected: "East Coast anchor for CoreWeave's GPU cloud",
    details: "CoreWeave's $1.2B lease at the Northeast Science and Technology Center. 280K sq ft Hopper/Blackwell site. Per-site GPU figure is estimate.",
    category: "neocloud",
    region: "north-america",
    source: "https://dgtlinfra.com/coreweave-data-center-locations/"
  },
  {
    project: "Cortex",
    company: "Tesla",
    location: "Austin, Texas, USA (Giga Texas)",
    lat: 30.2226,
    lng: -97.6178,
    chip: "H100, H200, Dojo D1",
    capacity: "50,000 H100 + 20K in-house (growing to ~350K GPUs)",
    capacityGpus: 70000,
    investment: "$1B+ (estimate)",
    status: "Operational",
    expected: "Cortex 2 ramp toward 350K GPUs; Dojo 2 ~100K H100-equiv in 2026",
    details: "Tesla's in-house AI training cluster at Giga Texas for FSD and Optimus. Launched Q4 2024 with 50K H100s plus ~20K Dojo. Power envelope expanding from 130 MW to 500 MW by 2026.",
    category: "idm-internal",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/teslas-50000-gpu-cortex-supercomputer-went-live-in-q4-2024/"
  },
  {
    project: "Google Council Bluffs Campus",
    company: "Google",
    location: "Council Bluffs, Iowa, USA",
    lat: 41.2619,
    lng: -95.8608,
    chip: "TPU v5p, TPU v6e, H100",
    capacity: "2.9M sq ft / large TPU pods + A3 H100",
    capacityGpus: 100000,
    investment: "$5B+ cumulative",
    status: "Operational",
    expected: "Continued expansion with additional $1B in 2025",
    details: "Google's largest US data center complex with two sites (Lake Manawa + Southlands, 4 buildings). A major host for TPU v5p/Trillium pods and A3 (H100) instances. Accelerator count is estimate.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://datacenters.google/locations/iowa/"
  },
  {
    project: "Google Mayes County Campus",
    company: "Google",
    location: "Pryor, Oklahoma, USA",
    lat: 36.3114,
    lng: -95.3497,
    chip: "TPU v5p, TPU v6e",
    capacity: "Google's #2 global DC / major TPU region",
    capacityGpus: 80000,
    investment: "$5.7B+",
    status: "Operational",
    expected: "Continued multi-phase expansion",
    details: "Google's second-largest data center globally (after Council Bluffs). Major US-Central TPU region supporting Trillium and v5p pods. Accelerator count is estimate.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://datacenters.google/locations/mayes-county-oklahoma/"
  },
  {
    project: "Google Eemshaven",
    company: "Google",
    location: "Eemshaven, Netherlands",
    lat: 53.4417,
    lng: 6.8361,
    chip: "TPU v5e, TPU v6e, H100",
    capacity: "Primary EU TPU region",
    capacityGpus: 40000,
    investment: "$3B+ cumulative",
    status: "Operational",
    expected: "Europe-West TPU capacity expansion through 2026",
    details: "Google's flagship European data center and main EU TPU region. Hosts Trillium (v6e) and A3 H100 machine types for europe-west4. Accelerator count is estimate.",
    category: "hyperscaler",
    region: "europe",
    source: "https://docs.cloud.google.com/compute/docs/regions-zones/tpu-regions-zones"
  },
  {
    project: "Eos",
    company: "Nvidia",
    location: "Santa Clara, California, USA",
    lat: 37.3541,
    lng: -121.9552,
    chip: "H100",
    capacity: "4,608 H100 GPUs / 18.4 EFLOPS FP8",
    capacityGpus: 4608,
    investment: "~$500M (est.)",
    status: "Operational",
    expected: "Internal Nvidia reference cluster for DGX and CUDA dev",
    details: "Nvidia's own reference AI supercomputer at HQ. 576 DGX H100 systems, Quantum-2 InfiniBand. Ranked top-10 on TOP500. Used for internal R&D and MLPerf benchmarks.",
    category: "idm-internal",
    region: "north-america",
    source: "https://blogs.nvidia.com/blog/eos/"
  },
  {
    project: "Lambda On-Demand Cloud",
    company: "Lambda",
    location: "San Francisco Bay Area, California, USA",
    lat: 37.7749,
    lng: -122.4194,
    chip: "H100, H200",
    capacity: "~32,000 H100 SXM5 GPUs",
    capacityGpus: 32000,
    investment: "~$1B",
    status: "Operational",
    expected: "1-Click Clusters scale 64 to 2,040+ H100 per tenant",
    details: "Lambda's primary US GPU cloud offering on-demand and reserved H100/H200 capacity with Quantum-2 InfiniBand. Site location is Lambda's HQ region; fleet spans multiple colos.",
    category: "neocloud",
    region: "north-america",
    source: "https://flopper.io/datacenter/lambda-labs-h100-h200"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  hyperscaler:   "#3b82f6",
  neocloud:      "#8b5cf6",
  sovereign:     "#f59e0b",
  "idm-internal":"#10b981"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [35, 0],
    zoom: 2.5,
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

function getMarkerRadius(gpus) {
  if (gpus >= 500000) return 20;
  if (gpus >= 200000) return 16;
  if (gpus >= 100000) return 13;
  if (gpus >= 30000)  return 10;
  if (gpus >= 5000)   return 7;
  return 5;
}

function formatGpus(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000)    return Math.round(n / 1000) + "K";
  return n.toString();
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.capacityGpus);

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
          <span class="popup-detail-label">Chip</span>
          <span class="popup-detail-value">${dc.chip}</span>
          <span class="popup-detail-label">GPUs</span>
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

  let totalGpus = 0;
  data.forEach(dc => { totalGpus += dc.capacityGpus; });
  document.getElementById("stat-capacity").textContent = formatGpus(totalGpus);

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
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.chip}</td>
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
      (dc.chip && dc.chip.toLowerCase().includes(searchTerm)) ||
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
