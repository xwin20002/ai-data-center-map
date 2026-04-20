/* ========== SUB-5NM FAB DATA (PLACEHOLDER — replace with researched values) ==========

Schema notes (diff from app.js):
  - capacityWafers replaces capacityMW (integer, wafers per month)
  - nodes: multi-node string, e.g. "3nm, 5nm"
  - category: "foundry" or "idm"
  - investment: still a string like "$17B"
  - "size" field omitted (not meaningful for fabs)

All numbers below are rough industry estimates; VERIFY BEFORE SHARING.
========== */

const dataCenters = [
  {
    project: "Fab 18 (Phase 1-8)",
    company: "TSMC",
    location: "Tainan Science Park, Taiwan",
    lat: 23.0042,
    lng: 120.2279,
    nodes: "3nm, 5nm",
    capacity: "~150K wpm",
    capacityWafers: 150000,
    investment: "$25B",
    status: "Operational",
    expected: "Ramping since 2020",
    details: "TSMC's flagship leading-edge site. Phase 1-4 for 5nm (N5/N5P/N4), Phase 5-8 for 3nm (N3/N3E/N3P). Largest sub-5nm capacity in the world.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://www.tsmc.com/english/news-events/newsroom"
  },
  {
    project: "Fab 21 (Phase 1-2)",
    company: "TSMC",
    location: "Phoenix, Arizona, USA",
    lat: 33.7361,
    lng: -112.1259,
    nodes: "4nm, 3nm",
    capacity: "~20K wpm (Phase 1)",
    capacityWafers: 20000,
    investment: "$40B+",
    status: "Under Construction",
    expected: "Phase 1 production 2025",
    details: "US CHIPS Act flagship. Phase 1 N4 in volume production 2025, Phase 2 N3 in 2028. Phase 3 approved for 2nm.",
    category: "foundry",
    region: "north-america",
    source: "https://www.tsmc.com/english/news-events/newsroom"
  },
  {
    project: "S5 Line (V1/V2)",
    company: "Samsung Foundry",
    location: "Hwaseong, South Korea",
    lat: 37.2046,
    lng: 126.8102,
    nodes: "5nm, 4nm, 3nm GAA",
    capacity: "~40K wpm",
    capacityWafers: 40000,
    investment: "$18B",
    status: "Operational",
    expected: "3nm GAA ramp from 2022",
    details: "World's first Gate-All-Around (GAA) 3nm production. Serves Samsung LSI internal + external customers.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://news.samsung.com/global/"
  },
  {
    project: "Taylor Fab",
    company: "Samsung Foundry",
    location: "Taylor, Texas, USA",
    lat: 30.5711,
    lng: -97.4096,
    nodes: "4nm, 2nm (planned)",
    capacity: "~50K wpm (planned)",
    capacityWafers: 50000,
    investment: "$25B",
    status: "Under Construction",
    expected: "2026-2027 ramp",
    details: "Delayed from 2024 target. US CHIPS Act funded. 2nm capacity planned for 2027+.",
    category: "foundry",
    region: "north-america",
    source: "https://news.samsung.com/global/"
  },
  {
    project: "Fab 52 / Fab 62",
    company: "Intel",
    location: "Chandler, Arizona, USA",
    lat: 33.3176,
    lng: -111.8416,
    nodes: "Intel 20A, 18A",
    capacity: "~30K wpm (planned)",
    capacityWafers: 30000,
    investment: "$32B",
    status: "Under Construction",
    expected: "18A ramp 2025",
    details: "First high-volume Intel 18A (1.8nm class) node with RibbonFET and PowerVia. Serves Intel Products + foundry customers.",
    category: "idm",
    region: "north-america",
    source: "https://www.intc.com/"
  },
  {
    project: "Pyeongtaek P3/P4",
    company: "Samsung Foundry",
    location: "Pyeongtaek, South Korea",
    lat: 37.0046,
    lng: 127.0558,
    nodes: "3nm GAA, 2nm (planned)",
    capacity: "~30K wpm (planned)",
    capacityWafers: 30000,
    investment: "$30B+",
    status: "Under Construction",
    expected: "3nm ramp 2025, 2nm 2027",
    details: "Samsung's largest fab site globally. P3 operational, P4 under construction. Also houses DRAM/NAND lines on adjacent phases.",
    category: "foundry",
    region: "asia-pacific",
    source: "https://news.samsung.com/global/"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  foundry: "#3b82f6",
  idm:     "#f59e0b"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [30, 90],
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
  if (capacityWafers >= 100000) return 18;
  if (capacityWafers >= 60000)  return 14;
  if (capacityWafers >= 30000)  return 11;
  if (capacityWafers >= 10000)  return 8;
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
          <span class="popup-detail-label">Nodes</span>
          <span class="popup-detail-value">${dc.nodes}</span>
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
    const matchT = dc.investment.match(/\$(\d+(?:\.\d+)?)\s*T/i);
    if (matchT) totalB += parseFloat(matchT[1]) * 1000;
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
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.nodes}</td>
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
      (dc.nodes && dc.nodes.toLowerCase().includes(searchTerm)) ||
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
  let d = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  d = "dark";
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
