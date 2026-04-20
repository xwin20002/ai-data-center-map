/* ========== POWER / NUCLEAR DEAL DATA ==========

Schema:
  - capacityMw: integer, MW committed to the offtaker (not plant nameplate)
  - fuel: comma-separated (Nuclear (PWR), Nuclear (SMR), Gas, Solar, Wind, Hydro)
  - category: "nuclear-restart" | "nuclear-smr" | "gas" | "renewable" | "behind-meter"
  - investment: string like "$1.6B" (offtaker's spend / PPA value)

Most dollar figures are estimates; flagged in `details`.

========== */

const dataCenters = [
  {
    project: "Crane Clean Energy Center (Three Mile Island Unit 1 restart)",
    company: "Microsoft + Constellation",
    location: "Middletown, Pennsylvania, USA",
    lat: 40.1533,
    lng: -76.7253,
    fuel: "Nuclear (PWR)",
    capacity: "835 MW",
    capacityMw: 835,
    investment: "$1.6B",
    status: "Restart",
    expected: "Restart 2028",
    details: "20-year PPA signed Sept 2024. 100% of the 835 MW output goes to Microsoft to match data center load across PJM (Pennsylvania, Virginia, Ohio, Chicago). Constellation is spending ~$1.6B to refurbish the unit; DOE added a $1B loan guarantee. Plant renamed after former Exelon CEO Chris Crane.",
    category: "nuclear-restart",
    region: "north-america",
    source: "https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html"
  },
  {
    project: "Susquehanna Nuclear (Cumulus campus)",
    company: "Amazon (AWS) + Talen Energy",
    location: "Berwick, Pennsylvania, USA",
    lat: 41.0894,
    lng: -76.1472,
    fuel: "Nuclear (BWR)",
    capacity: "1,920 MW",
    capacityMw: 1920,
    investment: "$0.65B (campus acquisition) + long-term PPA",
    status: "Operational",
    expected: "Ramp through 2032",
    details: "AWS acquired Talen's Cumulus data center campus directly connected to Susquehanna for $650M in March 2024. A follow-on June 2025 PPA expanded AWS's committed offtake from the 2.5 GW plant to up to 1,920 MW, sidestepping the FERC ISA rejection. Talen and Amazon are also exploring co-sited SMRs.",
    category: "nuclear-restart",
    region: "north-america",
    source: "https://www.utilitydive.com/news/talen-amazon-aws-susquehanna-nuclear-data-centert/750440/"
  },
  {
    project: "Duane Arnold Energy Center restart",
    company: "Google + NextEra",
    location: "Palo, Iowa, USA",
    lat: 42.1011,
    lng: -91.7781,
    fuel: "Nuclear (BWR)",
    capacity: "615 MW",
    capacityMw: 615,
    investment: "Undisclosed (25-yr PPA)",
    status: "Restart",
    expected: "Restart Q1 2029",
    details: "Announced Oct 2025. Google signed a 25-year PPA for majority of the 615 MW output; CIPCO takes the remainder on matching terms. NextEra is buying out the 30% minority interests to reach 100% ownership. Supports Google's Iowa and Midwest AI/cloud load. Investment value not disclosed by Google.",
    category: "nuclear-restart",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/google-signs-power-deal-with-nextenergy-to-restart-iowas-615mw-duane-arnold-nuclear-plant-for-ai-data-centers/"
  },
  {
    project: "Clinton Clean Energy Center",
    company: "Meta + Constellation",
    location: "Clinton, Illinois, USA",
    lat: 40.1725,
    lng: -88.8347,
    fuel: "Nuclear (BWR)",
    capacity: "1,121 MW",
    capacityMw: 1121,
    investment: "Undisclosed (20-yr PPA)",
    status: "Operational",
    expected: "PPA start June 2027, runs through ~2047",
    details: "20-year PPA signed June 2025; Meta takes the full 1,121 MW output of Clinton plus a 30 MW uprate. Replaces expiring Illinois ZEC subsidy with private market cashflow. Constellation is also evaluating an SMR at the Clinton site. PPA $ value not disclosed.",
    category: "nuclear-restart",
    region: "north-america",
    source: "https://www.constellationenergy.com/newsroom/2025/constellation-meta-sign-20-year-deal-for-clean-reliable-nuclear-energy-in-illinois.html"
  },
  {
    project: "Hermes 2 SMR (Kairos Power)",
    company: "Google + TVA",
    location: "Oak Ridge, Tennessee, USA",
    lat: 35.9207,
    lng: -84.3867,
    fuel: "Nuclear (SMR)",
    capacity: "50 MW (first of 500 MW deal)",
    capacityMw: 50,
    investment: "Undisclosed (Google anchor)",
    status: "Under Construction",
    expected: "SMR online 2030",
    details: "First deployment under Google-Kairos 500 MW master deal. TVA is the counterparty PPA holder and becomes the first US utility to buy Gen IV reactor power. Plant is a fluoride-salt high-temp reactor on the former K-33 site. Committed MW of 50 reflects Hermes 2; Google has optioned up to 500 MW by 2035 across follow-on Kairos sites.",
    category: "nuclear-smr",
    region: "north-america",
    source: "https://www.world-nuclear-news.org/articles/google-kairos-power-tva-announce-collaboration"
  },
  {
    project: "Cascade SMR (Columbia Generating Station / X-energy Xe-100)",
    company: "Amazon + Energy Northwest",
    location: "Richland, Washington, USA",
    lat: 46.4712,
    lng: -119.3336,
    fuel: "Nuclear (SMR)",
    capacity: "320 MW (option to 960 MW)",
    capacityMw: 320,
    investment: "$0.5B (X-energy Series C-1 anchor) + site spend",
    status: "Announced",
    expected: "First modules online early 2030s",
    details: "Oct 2024 agreement plus separate Amazon-Dominion SMR MOU in Virginia. Amazon funds feasibility and takes rights to the first four 80 MW Xe-100 modules (320 MW); Energy Northwest can add 8 more for a total 960 MW. Amazon announced the project could scale to 5 GW of SMRs alongside X-energy. Site is adjacent to the existing Columbia BWR.",
    category: "nuclear-smr",
    region: "north-america",
    source: "https://www.energy-northwest.com/news-releases/amazon-energy-northwest-announce-plans-to-develop-advanced-nuclear-technology-in-washington/"
  },
  {
    project: "Oklo Aurora powerhouses",
    company: "Equinix + Oklo",
    location: "Idaho Falls, Idaho, USA",
    lat: 43.5213,
    lng: -112.0407,
    fuel: "Nuclear (SMR)",
    capacity: "500 MW",
    capacityMw: 500,
    investment: "$0.025B (pre-payment)",
    status: "Announced",
    expected: "First Aurora ~2028-2030",
    details: "April 2024 pre-agreement: first SMR deal by a colocation operator. Equinix paid $25M for right of first refusal on up to 500 MW across Oklo's Aurora fast reactors. Lead site is INL in Idaho Falls. Equinix has since layered on additional SMR pre-agreements with Radiant, Stellaria, and ULC-Energy (Rolls-Royce). Committed MW is an option ceiling, not firm.",
    category: "nuclear-smr",
    region: "north-america",
    source: "https://www.datacenterfrontier.com/energy/article/55018022/equinix-puts-down-25m-in-data-center-nuclear-power-deal-with-sam-altmans-oklo"
  },
  {
    project: "Socrates / Prometheus behind-the-meter gas",
    company: "Meta + Williams",
    location: "New Albany, Ohio, USA",
    lat: 40.0806,
    lng: -82.8088,
    fuel: "Gas",
    capacity: "400 MW",
    capacityMw: 400,
    investment: "$1.6B",
    status: "Under Construction",
    expected: "Phase 1 Q3 2026, full 400 MW late 2026",
    details: "Two 200 MW behind-the-meter gas generation sites (Socrates stations) built by Williams subsidiary Will-Power OH LLC, dedicated to Meta's Prometheus 1 GW AI training campus. Not connected to PJM grid. Fueled via dedicated 24-inch Transco laterals. Ohio OPSB approved June 2025.",
    category: "behind-meter",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/ohio-regulators-approve-construction-of-200mw-gas-power-plant-to-serve-meta-data-center-in-new-albany-ohio/"
  },
  {
    project: "Colossus gas turbine fleet (Solaris JV)",
    company: "xAI + Solaris Energy Infrastructure",
    location: "Memphis, Tennessee, USA",
    lat: 35.0639,
    lng: -90.0555,
    fuel: "Gas",
    capacity: "~1,140 MW (fleet, ~400 MW currently serving xAI)",
    capacityMw: 1140,
    investment: "~$2B (estimate, JV 49.9% xAI)",
    status: "Operational",
    expected: "Southaven MS 40-turbine expansion 2026",
    details: "Behind-the-meter mobile gas turbines powering Colossus 1 in Memphis (~240 MW, 15 permitted turbines) and Colossus 2 in Southaven, MS (seven 35 MW units plus 40-turbine expansion). Solaris owns ~600 MW; a new JV (50.1% Solaris / 49.9% xAI) holds a further ~900 MW. Figures are SemiAnalysis/Solaris disclosures; permit caps and actual dispatch vary. Controversial Shelby County air-permit dispute ongoing.",
    category: "behind-meter",
    region: "north-america",
    source: "https://newsletter.semianalysis.com/p/xais-colossus-2-first-gigawatt-datacenter"
  },
  {
    project: "Stargate Abilene gas turbines",
    company: "OpenAI + Oracle + Crusoe",
    location: "Abilene, Texas, USA",
    lat: 32.4487,
    lng: -99.7331,
    fuel: "Gas",
    capacity: "1,015 MW (29 turbines x 35 MW)",
    capacityMw: 1015,
    investment: "~$15B (site total, Oracle lease)",
    status: "Under Construction",
    expected: "Full 1.2 GW mid-2026",
    details: "Crusoe-developed, Oracle-leased 1.2 GW campus anchoring OpenAI's Stargate program. Parker Hannifin-supplied package with 29 GE Vernova LM2500XPRESS dual-fuel turbines for primary on-site generation (no SMR at this site despite early speculation). Part of the $500B Stargate capex envelope committed by OpenAI/Oracle/SoftBank/MGX.",
    category: "gas",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/parker-hannifin-to-supply-more-than-1gw-of-natural-gas-turbines-to-stargates-abilene-campus-in-texas/"
  },
  {
    project: "Chevron-Engine No.1 Permian gas campus",
    company: "Microsoft + Chevron + Engine No.1",
    location: "Pecos, Texas, USA",
    lat: 31.4229,
    lng: -103.4932,
    fuel: "Gas",
    capacity: "2,500 MW",
    capacityMw: 2500,
    investment: "$7B",
    status: "Announced",
    expected: "Online 2027, ramp to 2.5 GW over 3 years",
    details: "March 2026 exclusivity agreement: Microsoft takes up to 2.5 GW of behind-the-meter gas from a $7B Chevron/Engine No.1/GE Vernova plant in the Permian near Pecos, TX. Part of a broader 4 GW JV targeting multiple US AI campuses. Commercial terms still being finalized; capacity could expand to 5 GW.",
    category: "gas",
    region: "north-america",
    source: "https://www.datacenterdynamics.com/en/news/microsoft-inks-gas-deal-with-chevron-and-engine-no-1-to-supply-power-for-ai-data-centers/"
  },
  {
    project: "Brookfield 10.5 GW renewables framework",
    company: "Microsoft + Brookfield",
    location: "US + Europe (multi-site)",
    lat: 40.7128,
    lng: -74.0060,
    fuel: "Solar, Wind",
    capacity: "10.5 GW",
    capacityMw: 10500,
    investment: "$11.5B",
    status: "Under Construction",
    expected: "Deliveries 2026-2030",
    details: "May 2024 deal: at 10.5 GW this is ~8x the prior largest corporate PPA. Brookfield develops solar and wind projects across US and Europe with option to extend to Asia/Latin America/India. Anchor sites include Ohio, Texas, Spain. Coordinate is placeholder (NYC HQ) because deliveries are multi-site; individual project coordinates will resolve as projects break ground. Capacity represents total MW Microsoft has committed to offtake.",
    category: "renewable",
    region: "north-america",
    source: "https://bep.brookfield.com/press-releases/bep/brookfield-and-microsoft-collaborating-deliver-over-105-gw-new-renewable-power"
  },
  {
    project: "Stargate UAE (Barakah + solar + gas)",
    company: "OpenAI + Oracle + G42",
    location: "Abu Dhabi, UAE",
    lat: 24.4539,
    lng: 54.3773,
    fuel: "Nuclear (PWR), Solar, Gas",
    capacity: "5,000 MW (1 GW first cluster)",
    capacityMw: 5000,
    investment: "$30B+",
    status: "Under Construction",
    expected: "First 200 MW online 2026",
    details: "10 square mile UAE-US AI campus, 5 GW nameplate, anchored by G42 with OpenAI/Oracle/NVIDIA/SoftBank/Cisco as tenants. Power mix draws from the 5.6 GW Barakah PWR fleet plus Al Dhafra solar (~2 GW) and new gas capacity. Largest AI build outside the US. First 1 GW compute cluster is the Stargate UAE flagship.",
    category: "nuclear-restart",
    region: "middle-east",
    source: "https://www.datacenterdynamics.com/en/news/us-and-uae-plan-to-build-5gw-ai-data-center-campus-run-by-g42-and-american-hyperscalers/"
  },
  {
    project: "Moray West offshore wind",
    company: "Google + Engie",
    location: "Moray Firth, Scotland, UK",
    lat: 58.1640,
    lng: -3.0050,
    fuel: "Wind",
    capacity: "100 MW",
    capacityMw: 100,
    investment: "Undisclosed",
    status: "Operational",
    expected: "PPA running through ~2040",
    details: "Google's largest UK offshore wind PPA to date. 100 MW slice of Engie's 882 MW Moray West project, supporting Google Cloud's UK AI/data center load toward 90% 24x7 carbon-free energy by 2025. Paired with a 140 MW Germany solar/wind PPA and a 100 MW He Dreiht (EnBW) PPA as Google's broader European AI power package.",
    category: "renewable",
    region: "europe",
    source: "https://www.datacenterdynamics.com/en/news/google-signs-100mw-ppa-with-enbw-for-power-from-largest-offshore-wind-project-in-germany/"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  "nuclear-restart": "#ef4444",
  "nuclear-smr":     "#f59e0b",
  "gas":             "#8b5cf6",
  "renewable":       "#10b981",
  "behind-meter":    "#3b82f6"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [30, -30],
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

function getMarkerRadius(mw) {
  if (mw >= 2000) return 20;
  if (mw >= 1000) return 16;
  if (mw >= 500) return 12;
  if (mw >= 200) return 9;
  return 6;
}

function formatMw(mw) {
  if (mw >= 1000) return (mw / 1000).toFixed(1) + " GW";
  return Math.round(mw) + " MW";
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.capacityMw);

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
          <span class="popup-detail-label">Fuel</span>
          <span class="popup-detail-value">${dc.fuel}</span>
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

  let totalMw = 0;
  data.forEach(dc => { totalMw += dc.capacityMw; });
  document.getElementById("stat-capacity").textContent = formatMw(totalMw);

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
      : dc.status.toLowerCase().includes("operational") || dc.status.toLowerCase().includes("restart") ? "groundbreaking"
      : dc.status.toLowerCase().includes("planned") || dc.status.toLowerCase().includes("announced") ? "announced"
      : "partial";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.project}</td>
      <td>${dc.company}</td>
      <td>${dc.location}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.fuel}</td>
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
      (dc.fuel && dc.fuel.toLowerCase().includes(searchTerm)) ||
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
