/* ========== SUBSEA CABLE LANDING DATA ==========

Schema:
  - capacityTbps: integer, total design Tbps of cables landing at the site
  - cables: comma-separated cable names
  - category: "hyperscaler" | "consortium" | "national" | "other-private"
  - investment: string like "$500M" (owner share estimate)

Each entry is a landing station (single point), not a cable. Investment
figures are estimates of each owner's share and are flagged in `details`.

========== */

const dataCenters = [
  {
    project: "Anjana Landing (Santander)",
    company: "Meta",
    location: "Santander, Spain",
    lat: 43.4623,
    lng: -3.8099,
    cables: "Anjana",
    capacity: "~480 Tbps",
    capacityTbps: 480,
    investment: "$300M+ (Meta wholly-owned, estimate)",
    status: "Operational",
    expected: "Landed Oct 2024, RFS 2025",
    details: "Meta's wholly-owned transatlantic cable via Edge Cable Holdings. 24 fiber pairs at ~20 Tbps/FP. Landed at Virgen del Mar beach, Santander on Oct 14, 2024. Telxius is Spanish landing partner. Investment figure is estimate.",
    category: "hyperscaler",
    region: "europe",
    source: "https://www.submarinenetworks.com/en/systems/trans-atlantic/anjana"
  },
  {
    project: "Myrtle Beach Hyperscaler Hub",
    company: "Meta + Google",
    location: "Myrtle Beach, South Carolina, USA",
    lat: 33.6891,
    lng: -78.8867,
    cables: "Anjana, Nuvem, Firmina",
    capacity: "~1000+ Tbps aggregate",
    capacityTbps: 1056,
    investment: "$500M+ (aggregate hyperscaler share, estimate)",
    status: "Operational",
    expected: "Anjana 2024, Firmina 2023, Nuvem 2026",
    details: "DC BLOX-owned landing station. Hosts Meta's Anjana (480 Tbps to Spain), Google's Nuvem (384 Tbps to Portugal, RFS 2026), and Google's Firmina (to Argentina/Brazil). Rapidly becoming a major US East Coast hyperscaler hub challenging Virginia Beach.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.dcblox.com/connecting-anjana-subsea-cable-to-dc-blox-cls/"
  },
  {
    project: "Nuvem Landing (Sines)",
    company: "Google",
    location: "Sines, Portugal",
    lat: 37.9563,
    lng: -8.8706,
    cables: "Nuvem",
    capacity: "~384 Tbps",
    capacityTbps: 384,
    investment: "$300M (Google share, estimate)",
    status: "Under Construction",
    expected: "RFS 2026",
    details: "Google's Nuvem trans-Atlantic cable has 16 FP x 24 Tbps = 384 Tbps total. Lands at Areao beach near Sines; terminates at new Angler Fish-owned CLS. Completes Google's Atlantic rim ring. Investment figure is estimate.",
    category: "hyperscaler",
    region: "europe",
    source: "https://cloud.google.com/blog/products/infrastructure/introducing-the-nuvem-subsea-cable"
  },
  {
    project: "Dunant Landing (Saint-Hilaire-de-Riez)",
    company: "Google",
    location: "Saint-Hilaire-de-Riez, France",
    lat: 46.7167,
    lng: -1.9500,
    cables: "Dunant",
    capacity: "250 Tbps",
    capacityTbps: 250,
    investment: "$250M (Google wholly-owned, estimate)",
    status: "Operational",
    expected: "RFS Feb 2021",
    details: "Google's wholly-owned transatlantic SDM cable to Virginia Beach, USA. 12 FP SDM design, 250 Tbps. Landed at Orange's La Paree Preneau CLS in Mar 2020. First long-haul cable using space-division multiplexing.",
    category: "hyperscaler",
    region: "europe",
    source: "https://www.submarinenetworks.com/en/systems/trans-atlantic/dunant"
  },
  {
    project: "Virginia Beach Transatlantic Hub",
    company: "Google + Meta + Microsoft",
    location: "Virginia Beach, Virginia, USA",
    lat: 36.8529,
    lng: -75.9780,
    cables: "Dunant, MAREA, BRUSA",
    capacity: "~500+ Tbps aggregate",
    capacityTbps: 500,
    investment: "$400M+ (aggregate hyperscaler share, estimate)",
    status: "Operational",
    expected: "Dunant 2021, MAREA 2018",
    details: "Telxius-operated Virginia Beach CLS. Lands Google's Dunant (250 Tbps) plus Meta/Microsoft's MAREA. Backhauls to Ashburn (Data Center Alley). Major East Coast transatlantic hub for hyperscaler traffic.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.submarinenetworks.com/en/systems/trans-atlantic/dunant"
  },
  {
    project: "Firmina Landing (Las Toninas)",
    company: "Google",
    location: "Las Toninas, Argentina",
    lat: -36.7167,
    lng: -56.6833,
    cables: "Firmina, Malbec, Tannat, SAm-1",
    capacity: "~192 Tbps (Firmina)",
    capacityTbps: 192,
    investment: "$200M (Google wholly-owned Firmina share, estimate)",
    status: "Operational",
    expected: "Landed 2023, RFS 2024",
    details: "Las Toninas is Argentina's primary international cable hub. Google's 14,517 km Firmina landed here in 2023 — first direct US-Argentina cable. Additional landings in Praia Grande Brazil and Punta del Este Uruguay.",
    category: "hyperscaler",
    region: "latam",
    source: "https://www.submarinenetworks.com/en/systems/brazil-us/firmina"
  },
  {
    project: "Equiano Landing (Melkbosstrand)",
    company: "Google",
    location: "Melkbosstrand, South Africa",
    lat: -33.7333,
    lng: 18.4500,
    cables: "Equiano",
    capacity: "144 Tbps",
    capacityTbps: 144,
    investment: "$200M (Google wholly-owned, estimate)",
    status: "Operational",
    expected: "Landed Aug 2022, RFS 2023",
    details: "Google's Equiano trans-Atlantic cable from Sesimbra Portugal to Melkbosstrand SA (35 km N of Cape Town). 12 FP SDM design, 144 Tbps total. Landed Aug 8, 2022. Branches to Togo, Nigeria, St. Helena, Namibia.",
    category: "hyperscaler",
    region: "africa",
    source: "https://www.submarinenetworks.com/en/systems/euro-africa/equiano"
  },
  {
    project: "Equiano Landing (Lagos)",
    company: "Google",
    location: "Lagos, Nigeria",
    lat: 6.4281,
    lng: 3.4219,
    cables: "Equiano",
    capacity: "~36 Tbps (branch)",
    capacityTbps: 36,
    investment: "$50M (branch unit, estimate)",
    status: "Operational",
    expected: "Landed Apr 2022",
    details: "Google/WIOCC announced Equiano landing at Lagos on Apr 21, 2022. WIOCC is Nigerian landing partner. Expected to contribute $10B+ to Nigerian GDP via cheaper bandwidth. Investment figure is estimate.",
    category: "hyperscaler",
    region: "africa",
    source: "https://www.submarinenetworks.com/en/systems/euro-africa/equiano/equiano-subsea-cable-lands-in-lagos-nigeria"
  },
  {
    project: "2Africa Landing (Yzerfontein)",
    company: "Consortium (Meta-led)",
    location: "Yzerfontein, South Africa",
    lat: -33.3500,
    lng: 18.1500,
    cables: "2Africa, WACS",
    capacity: "180 Tbps",
    capacityTbps: 180,
    investment: "$1B+ (total 2Africa, Meta share, estimate)",
    status: "Operational",
    expected: "Core RFS Nov 2025",
    details: "2Africa West lands at Yzerfontein CLS (MTN GlobalConnect/Bayobab). Core 2Africa system (45,000 km, 46 landings, 33 countries) completed Nov 2025 per Meta. Sharing BMH with WACS. Pearls extension live 2026.",
    category: "consortium",
    region: "africa",
    source: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/2africa/mtn-lands-2africa-cable-in-yzerfontein-and-duynefontein-south-africa"
  },
  {
    project: "Marseille Mediterranean Hub",
    company: "Consortium (Meta + others)",
    location: "Marseille, France",
    lat: 43.2965,
    lng: 5.3698,
    cables: "2Africa, PEACE, AAE-1, SEA-ME-WE",
    capacity: "~400+ Tbps aggregate",
    capacityTbps: 400,
    investment: "$200M+ (hyperscaler share across systems, estimate)",
    status: "Operational",
    expected: "2Africa Nov 2025, PEACE Dec 2022",
    details: "Marseille is the #1 Mediterranean cable hub — 2Africa, PEACE, AAE-1, SEA-ME-WE all terminate here. Interxion MRS2/3/4 hosts landing terminations. European gateway to Africa/Asia. Single-point-of-failure concern driving Waterworth bypass.",
    category: "consortium",
    region: "europe",
    source: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/2africa"
  },
  {
    project: "Apricot Landing (Minamiboso)",
    company: "Consortium (Google + Meta)",
    location: "Minamiboso, Chiba, Japan",
    lat: 34.9667,
    lng: 139.8333,
    cables: "Apricot",
    capacity: "290 Tbps",
    capacityTbps: 290,
    investment: "$150M (Google+Meta share, estimate)",
    status: "Operational",
    expected: "RFS Q4 2024",
    details: "Apricot (12,000 km) connects Japan-Taiwan-Guam-Philippines-Indonesia-Singapore. NTT operates Minamiboso CLS in Chiba Prefecture. Consortium: NTT, Chunghwa Telecom, PLDT, Google, Meta. 24 Tbps/FP, 290 Tbps total.",
    category: "hyperscaler",
    region: "asia-pacific",
    source: "https://www.submarinenetworks.com/en/systems/intra-asia/apricot"
  },
  {
    project: "Singapore Tuas Landing",
    company: "Consortium (Google + Meta)",
    location: "Tuas, Singapore",
    lat: 1.3000,
    lng: 103.6500,
    cables: "Apricot, Echo, Bifrost",
    capacity: "~800 Tbps aggregate",
    capacityTbps: 800,
    investment: "$500M+ (aggregate hyperscaler share, estimate)",
    status: "Operational",
    expected: "Apricot 2024, Bifrost 2024, Echo 2026",
    details: "Tuas is Singapore's primary cable landing zone. Keppel SGP 5 DC hosts CLS. Lands Apricot, Echo (first direct US-SG fiber), Bifrost. Major Asia hyperscaler gateway. Google acts as its own landing party first time here.",
    category: "hyperscaler",
    region: "asia-pacific",
    source: "https://www.submarinenetworks.com/en/systems/trans-pacific/echo"
  },
  {
    project: "JUNO Landing (Grover Beach)",
    company: "Consortium (NTT-led)",
    location: "Grover Beach, California, USA",
    lat: 35.1217,
    lng: -120.6213,
    cables: "JUNO, Bifrost",
    capacity: "~600 Tbps aggregate",
    capacityTbps: 600,
    investment: "$400M (aggregate, estimate)",
    status: "Operational",
    expected: "JUNO RFS May 2025",
    details: "Grover Beach CLS owned by PC Landing Corp. JUNO (350 Tbps US-Japan, largest ever) is Seren Juno JV: NTT, Mitsui, PC Landing, JA Mitsui Leasing. Bifrost (Meta-controlled via Pacific Landing) also lands nearby.",
    category: "consortium",
    region: "north-america",
    source: "https://www.submarinenetworks.com/en/systems/trans-pacific/juno"
  },
  {
    project: "Guam Hyperscaler Hub (Alupang)",
    company: "Meta + Google",
    location: "Alupang, Guam, USA",
    lat: 13.4700,
    lng: 144.7500,
    cables: "Bifrost, Echo, Apricot, TPU",
    capacity: "~800 Tbps aggregate",
    capacityTbps: 800,
    investment: "$150M+ (CLS + hyperscaler share, estimate)",
    status: "Operational",
    expected: "2024-2026",
    details: "Guam is a critical Pacific hub — Alupang CLS owned by GTA (Teleguam Holdings), controlled by Meta for Bifrost. Also hosts Echo, Apricot, TPU. Redundant Pacific route avoiding South China Sea. Strategic US territory.",
    category: "hyperscaler",
    region: "asia-pacific",
    source: "https://www.submarinenetworks.com/en/systems/trans-pacific/bifrost"
  },
  {
    project: "Amitie Landing (Lynn)",
    company: "Meta + Microsoft",
    location: "Lynn, Massachusetts, USA",
    lat: 42.4668,
    lng: -70.9495,
    cables: "Amitie",
    capacity: "~320 Tbps",
    capacityTbps: 320,
    investment: "$250M (consortium, estimate)",
    status: "Operational",
    expected: "RFS Oct 2023",
    details: "Amitie (AEC-3) is 6,783 km trans-Atlantic cable. Lynn CLS owned by GTT (now EXA Infrastructure). Meta subsidiary Edge USA is landing party. Consortium: Meta, Microsoft, Aqua Comms, Vodafone. Landings at Le Porge France and Bude UK.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.submarinenetworks.com/en/systems/trans-atlantic/amitie"
  },
  {
    project: "Topaz Landing (Port Alberni)",
    company: "Google",
    location: "Port Alberni, British Columbia, Canada",
    lat: 49.2339,
    lng: -124.8055,
    cables: "Topaz",
    capacity: "240 Tbps",
    capacityTbps: 240,
    investment: "$300M (Google wholly-owned, estimate)",
    status: "Operational",
    expected: "RFS Jun 2024",
    details: "First-ever fiber cable connecting Canada and Asia. 16 FP, 240 Tbps. Vancouver Island landing connects to Shima (Mie) and Takahagi (Ibaraki) Japan. ARTERIA provides backhaul to Tokyo metro DCs.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://cloud.google.com/blog/products/infrastructure/topaz-subsea-cable-connects-canada-and-asia"
  },
  {
    project: "Humboldt Landing (Valparaiso)",
    company: "Google",
    location: "Valparaiso, Chile",
    lat: -33.0472,
    lng: -71.6127,
    cables: "Humboldt",
    capacity: "144 Tbps",
    capacityTbps: 144,
    investment: "$300-550M (Google) + $25M (Chile gov)",
    status: "Under Construction",
    expected: "RFS Q4 2026 / 2027",
    details: "First-ever subsea cable directly connecting South America and Asia-Pacific. 14,800 km via French Polynesia to Sydney. Chile-Google MoU signed Jun 2025. Strategic SA-APAC route bypassing US.",
    category: "hyperscaler",
    region: "latam",
    source: "https://cloud.google.com/blog/products/infrastructure/announcing-humboldt-the-first-cable-route-between-south-america-and-asia-pacific"
  },
  {
    project: "Waterworth Landing (Sydney)",
    company: "Meta",
    location: "Sydney, Australia",
    lat: -33.8688,
    lng: 151.2093,
    cables: "Waterworth",
    capacity: "~500+ Tbps (design target)",
    capacityTbps: 500,
    investment: "$10B+ (total 5-continent system)",
    status: "Announced",
    expected: "Construction started 2025, RFS 2027+",
    details: "Meta's 50,000 km cable — world's longest — connecting US, India, Brazil, South Africa, Australia. Avoids Red Sea, South China Sea, Malacca, Egypt, Marseille for geopolitical resilience. Sydney is the confirmed Australian end; exact CLS TBA. Capacity is estimate.",
    category: "hyperscaler",
    region: "oceania",
    source: "https://www.submarinenetworks.com/en/systems/trans-atlantic/waterworth"
  },
  {
    project: "PEACE Landing (Marseille - Interxion MRS2)",
    company: "HMN Tech / PCCW",
    location: "Marseille, France",
    lat: 43.3439,
    lng: 5.3460,
    cables: "PEACE",
    capacity: "192 Tbps",
    capacityTbps: 192,
    investment: "$425M (total PEACE, estimate)",
    status: "Operational",
    expected: "RFS Dec 2022",
    details: "Pakistan East Africa Connecting Europe (PEACE) cable. 15,000 km. Lands at Interxion MRS2 Marseille. HMN Tech (Huawei-descended) supplied. Non-hyperscaler, Chinese-backed route. Branches in Djibouti, Kenya (Mombasa), Egypt, Malta, Cyprus, Pakistan (Karachi).",
    category: "other-private",
    region: "europe",
    source: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/peace"
  },
  {
    project: "SEA-H2X Landing (Hong Kong TKO)",
    company: "China Mobile / Unicom Consortium",
    location: "Tseung Kwan O, Hong Kong",
    lat: 22.3167,
    lng: 114.2667,
    cables: "SEA-H2X",
    capacity: "200+ Tbps",
    capacityTbps: 200,
    investment: "$300M (total, estimate)",
    status: "Operational",
    expected: "RFS 2025",
    details: "6,000 km intra-Asia cable: Hainan China - HK - Philippines (Bauang) - Thailand - Singapore. China Unicom Global built new BMH at Tseung Kwan O, shared with China Mobile International. 8 FP. HMN Tech supplied. Chinese-led non-hyperscaler route.",
    category: "other-private",
    region: "asia-pacific",
    source: "https://www.submarinenetworks.com/en/systems/intra-asia/sea-h2x"
  },
  {
    project: "Tabua Landing (Natadola, Fiji)",
    company: "Google",
    location: "Natadola, Fiji",
    lat: -18.0500,
    lng: 177.3667,
    cables: "Tabua, Bulikula, Honomoana",
    capacity: "272 Tbps",
    capacityTbps: 272,
    investment: "$1B (Pacific Connect initiative total)",
    status: "Under Construction",
    expected: "Install Q3 2025, RFS Q1 2026",
    details: "Part of Google's Pacific Connect initiative. Tabua connects US-Fiji-Australia via Natadola CLS on Viti Levu. 16 FP, 17 Tbps/FP. Sacred Fijian whale tooth namesake. Co-located with Bulikula landing.",
    category: "hyperscaler",
    region: "oceania",
    source: "https://www.submarinenetworks.com/en/systems/trans-pacific/tabua"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  hyperscaler:      "#3b82f6",
  consortium:       "#8b5cf6",
  national:         "#f59e0b",
  "other-private":  "#10b981"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [20, 0],
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

function getMarkerRadius(tbps) {
  if (tbps >= 800) return 18;
  if (tbps >= 400) return 14;
  if (tbps >= 200) return 11;
  if (tbps >= 100) return 8;
  return 6;
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.capacityTbps);

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
          <span class="popup-detail-label">Cables</span>
          <span class="popup-detail-value">${dc.cables}</span>
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

  let totalTbps = 0;
  data.forEach(dc => { totalTbps += dc.capacityTbps; });
  if (totalTbps >= 1000) {
    document.getElementById("stat-capacity").textContent = (totalTbps / 1000).toFixed(1) + " Pbps";
  } else {
    document.getElementById("stat-capacity").textContent = Math.round(totalTbps) + " Tbps";
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
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.cables}</td>
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
      (dc.cables && dc.cables.toLowerCase().includes(searchTerm)) ||
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
