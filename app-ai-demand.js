/* ========== AI DEMAND DATA (Q3 + Q4) ==========

Schema:
  - estMonthlyTokens: string (scientific notation), monthly token consumption
  - personalAdoption: integer %, % of adults using AI tools (Stanford 2025)
  - enterpriseAdoption: integer %, % of companies deployed AI (Stanford/McKinsey)
  - topCustomers: array of exactly 3 HQ-in-country companies { name, category }
  - categoryMix: "consumer-heavy" | "enterprise-heavy" | "mixed"
  - region: "North America" | "Europe" | "APAC" | "Other"

Marker radius = volume (estMonthlyTokens).
Marker color  = intensity (personalAdoption tier).

========== */

const dataCenters = [
  {country:"United States",code:"US",lat:39.8283,lng:-98.5795,region:"North America",estMonthlyTokens:"3.2e14",personalAdoption:52,enterpriseAdoption:72,topCustomers:[{name:"Microsoft",category:"enterprise-saas"},{name:"Meta",category:"consumer"},{name:"Alphabet (Google)",category:"enterprise-saas"}],categoryMix:"enterprise-heavy",details:"全球最大 AI token 消費國，佔 ChatGPT 流量約 18-20%。Copilot、Gemini、Claude 等在大型企業滲透率最高，Fortune 500 幾乎全面 PoC。推估基於 Similarweb 流量 × API 企業用量。",source:"https://hai.stanford.edu/ai-index/2025-ai-index-report"},
  {country:"China",code:"CN",lat:35.8617,lng:104.1954,region:"APAC",estMonthlyTokens:"2.1e14",personalAdoption:41,enterpriseAdoption:58,topCustomers:[{name:"ByteDance (Doubao)",category:"consumer"},{name:"Tencent",category:"consumer"},{name:"Alibaba",category:"ecommerce"}],categoryMix:"consumer-heavy",details:"因 GPT 系列被牆，生態由 Doubao、Kimi、DeepSeek、文心一言主導，消費者 app 使用量極高（Doubao MAU 破億）。企業採用以電商、短影音、客服為主。推估以本土 LLM 用量 × DAU 推得；無公開 API metering，誤差 ±40%。",source:"https://hai.stanford.edu/ai-index/2025-ai-index-report"},
  {country:"India",code:"IN",lat:20.5937,lng:78.9629,region:"APAC",estMonthlyTokens:"7.5e13",personalAdoption:47,enterpriseAdoption:59,topCustomers:[{name:"Tata Consultancy Services",category:"enterprise-saas"},{name:"Infosys",category:"enterprise-saas"},{name:"Reliance Jio",category:"telecom"}],categoryMix:"mixed",details:"全球 ChatGPT 第二大流量國（Similarweb 約 8-10%），IT 服務業深度導入 AI coding assistant。政府推 IndiaAI Mission 並投入 Bhashini 多語模型。消費端成長最快。",source:"https://indiaai.gov.in/"},
  {country:"Japan",code:"JP",lat:36.2048,lng:138.2529,region:"APAC",estMonthlyTokens:"6.8e13",personalAdoption:28,enterpriseAdoption:48,topCustomers:[{name:"SoftBank",category:"telecom"},{name:"Rakuten",category:"ecommerce"},{name:"NTT Data",category:"enterprise-saas"}],categoryMix:"enterprise-heavy",details:"政府親 AI（經產省 Sakana AI 補貼），企業採用率成長快但個人採用偏低（語言與文化保守）。Copilot 在大型商社導入積極，金融與製造業 use case 最多。",source:"https://www.meti.go.jp/english/policy/mono_info_service/information_economy/ai.html"},
  {country:"United Kingdom",code:"GB",lat:55.3781,lng:-3.4360,region:"Europe",estMonthlyTokens:"5.2e13",personalAdoption:49,enterpriseAdoption:63,topCustomers:[{name:"HSBC",category:"finance"},{name:"BBC",category:"media"},{name:"Sage Group",category:"enterprise-saas"}],categoryMix:"mixed",details:"歐洲 AI 消費最活躍市場，金融城深度導入 Copilot 與 Claude。政府發表 AI Opportunities Action Plan 並設立 AI Safety Institute。倫敦是歐洲最大 LLM API 消費城市。",source:"https://www.gov.uk/government/publications/ai-opportunities-action-plan"},
  {country:"Germany",code:"DE",lat:51.1657,lng:10.4515,region:"Europe",estMonthlyTokens:"4.8e13",personalAdoption:35,enterpriseAdoption:61,topCustomers:[{name:"SAP",category:"enterprise-saas"},{name:"Siemens",category:"manufacturing"},{name:"Deutsche Telekom",category:"telecom"}],categoryMix:"enterprise-heavy",details:"製造業 + SaaS 雙主軸，SAP Joule 與 Siemens Industrial Copilot 為代表 use case。受 EU AI Act 影響，enterprise 導入偏向 on-prem 或歐洲雲。個人採用略低於歐洲平均。",source:"https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"},
  {country:"France",code:"FR",lat:46.2276,lng:2.2137,region:"Europe",estMonthlyTokens:"3.6e13",personalAdoption:37,enterpriseAdoption:55,topCustomers:[{name:"BNP Paribas",category:"finance"},{name:"L'Oreal",category:"consumer"},{name:"Capgemini",category:"enterprise-saas"}],categoryMix:"mixed",details:"歐洲主權 AI 核心，Mistral 本土模型帶動 API 消費。政府 France 2030 計畫投入 AI 基礎設施，LVMH、L'Oreal 等奢侈品牌積極導入生成式 AI marketing。",source:"https://mistral.ai/"},
  {country:"Brazil",code:"BR",lat:-14.2350,lng:-51.9253,region:"Other",estMonthlyTokens:"2.9e13",personalAdoption:54,enterpriseAdoption:41,topCustomers:[{name:"Itau Unibanco",category:"finance"},{name:"Nubank",category:"finance"},{name:"Magazine Luiza",category:"ecommerce"}],categoryMix:"consumer-heavy",details:"拉美最大 AI 消費市場，個人 ChatGPT 使用率歐美水準（葡語用戶全球第二）。銀行業 AI 導入領先（Itau、Nubank），企業整體採用率受中小企 IT 預算限制偏低。",source:"https://www.similarweb.com/website/chatgpt.com/"},
  {country:"Indonesia",code:"ID",lat:-0.7893,lng:113.9213,region:"APAC",estMonthlyTokens:"1.8e13",personalAdoption:45,enterpriseAdoption:38,topCustomers:[{name:"GoTo (Gojek + Tokopedia)",category:"ecommerce"},{name:"Bank Central Asia",category:"finance"},{name:"Telkomsel",category:"telecom"}],categoryMix:"consumer-heavy",details:"東南亞最大 AI 消費市場（人口紅利 + 手機 AI app 高滲透），GoTo 與銀行業加速導入客服 AI。推估以行動網路 MAU × AI app penetration 推得；Bahasa 在地化是關鍵 use case。",source:"https://www.oecd.ai/"},
  {country:"South Korea",code:"KR",lat:35.9078,lng:127.7669,region:"APAC",estMonthlyTokens:"3.4e13",personalAdoption:43,enterpriseAdoption:60,topCustomers:[{name:"Samsung Electronics",category:"manufacturing"},{name:"Naver",category:"consumer"},{name:"SK Telecom",category:"telecom"}],categoryMix:"mixed",details:"本土 LLM 強勢（Naver HyperCLOVA X、LG EXAONE），Samsung 半導體與家電深度整合 Galaxy AI。政府 K-AI 戰略投入 9 兆韓元基礎設施補貼。",source:"https://english.msit.go.kr/"},
  {country:"Canada",code:"CA",lat:56.1304,lng:-106.3468,region:"North America",estMonthlyTokens:"2.6e13",personalAdoption:46,enterpriseAdoption:58,topCustomers:[{name:"Shopify",category:"ecommerce"},{name:"Royal Bank of Canada",category:"finance"},{name:"Cohere",category:"enterprise-saas"}],categoryMix:"mixed",details:"AI 研究重鎮（Vector、Mila），Shopify 全面 AI-first 重組、Cohere 為本土 frontier lab。Pan-Canadian AI Strategy 累計投入超過 CAD 2B；RBC 金融 AI 導入領先北美。",source:"https://ised-isde.canada.ca/site/ai-strategy/en"},
  {country:"Australia",code:"AU",lat:-25.2744,lng:133.7751,region:"APAC",estMonthlyTokens:"1.9e13",personalAdoption:42,enterpriseAdoption:54,topCustomers:[{name:"Commonwealth Bank of Australia",category:"finance"},{name:"Atlassian",category:"enterprise-saas"},{name:"Canva",category:"enterprise-saas"}],categoryMix:"enterprise-heavy",details:"Canva 與 Atlassian 為全球 AI SaaS 代表；CBA 在亞太銀行 AI 導入名列前茅。政府發表 Voluntary AI Safety Standard，礦業與金融業 use case 最成熟。",source:"https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence"},
  {country:"Mexico",code:"MX",lat:23.6345,lng:-102.5528,region:"North America",estMonthlyTokens:"1.4e13",personalAdoption:48,enterpriseAdoption:40,topCustomers:[{name:"BBVA Mexico",category:"finance"},{name:"Grupo Bimbo",category:"manufacturing"},{name:"Televisa",category:"media"}],categoryMix:"consumer-heavy",details:"西語市場 AI 消費重鎮（ChatGPT 西語流量僅次西班牙），Nearshoring 帶動製造業 AI 投資。推估以西語 ChatGPT 流量 × 人口比重推得；政府尚無全國性 AI 戰略。",source:"https://www.similarweb.com/website/chatgpt.com/"},
  {country:"Singapore",code:"SG",lat:1.3521,lng:103.8198,region:"APAC",estMonthlyTokens:"1.2e13",personalAdoption:56,enterpriseAdoption:74,topCustomers:[{name:"DBS Bank",category:"finance"},{name:"Sea Group",category:"ecommerce"},{name:"Grab",category:"consumer"}],categoryMix:"enterprise-heavy",details:"人均 AI 使用率全球頂級，IMDA 推動 National AI Strategy 2.0 與 SEA-LION 本土模型。DBS 為亞太銀行 AI 標竿（每年 AI-led revenue 逾 SGD 750M）。token/adult 比顯著高於區域平均。",source:"https://www.smartnation.gov.sg/nais/"},
  {country:"Israel",code:"IL",lat:31.0461,lng:34.8516,region:"Other",estMonthlyTokens:"1.1e13",personalAdoption:51,enterpriseAdoption:65,topCustomers:[{name:"Check Point Software",category:"enterprise-saas"},{name:"Wix",category:"enterprise-saas"},{name:"AI21 Labs",category:"enterprise-saas"}],categoryMix:"enterprise-heavy",details:"人均 AI startup 密度全球最高，AI21 與 D-ID 為本土 frontier 代表。Cybersecurity 與 SaaS 深度整合 LLM；政府 National AI Program 投入約 USD 500M 基礎建設。",source:"https://www.startupnationcentral.org/"}
];

/* ========== MAP INITIALIZATION ========== */

/* Color gradient based on personalAdoption tier (5 steps) */
function getAdoptionColor(pct) {
  if (pct >= 50) return "#991b1b";
  if (pct >= 45) return "#dc2626";
  if (pct >= 40) return "#ef4444";
  if (pct >= 35) return "#f87171";
  return "#fecaca";
}

const mixLabels = {
  "consumer-heavy":   "Consumer-heavy",
  "enterprise-heavy": "Enterprise-heavy",
  "mixed":            "Mixed"
};

const categoryColors = {
  "enterprise-saas": "#3b82f6",
  "consumer":        "#f59e0b",
  "finance":         "#10b981",
  "healthcare":      "#ef4444",
  "media":           "#8b5cf6",
  "manufacturing":   "#64748b",
  "government":      "#ec4899",
  "ecommerce":       "#06b6d4",
  "gaming":          "#a855f7",
  "telecom":         "#f97316"
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

/* Radius based on estMonthlyTokens (log-scale) */
function getMarkerRadius(tokensStr) {
  const n = parseFloat(tokensStr);
  if (n >= 2e14) return 20;
  if (n >= 5e13) return 16;
  if (n >= 2e13) return 12;
  if (n >= 1e13) return 9;
  return 6;
}

function formatTokens(str) {
  const n = parseFloat(str);
  if (n >= 1e12) return (n / 1e12).toFixed(1) + "T";
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  return String(n);
}

function renderCustomers(customers) {
  return customers.map(c => {
    const color = categoryColors[c.category] || "#8a8f9f";
    return `<span style="display:inline-block;background:${color}22;color:${color};padding:2px 8px;border-radius:10px;font-size:11px;margin:2px 4px 2px 0;">${c.name}</span>`;
  }).join("");
}

function addMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = getAdoptionColor(dc.personalAdoption);
    const radius = getMarkerRadius(dc.estMonthlyTokens);

    const marker = L.circleMarker([dc.lat, dc.lng], {
      radius: radius,
      fillColor: color,
      color: color,
      weight: 2,
      opacity: 0.9,
      fillOpacity: 0.55,
      className: "pulse-marker"
    });

    const popupContent = `
      <div class="popup-inner">
        <div class="popup-header">
          <span class="popup-cat-dot" style="background:${color}"></span>
          <span class="popup-project-name">${dc.country}</span>
        </div>
        <div class="popup-company">${mixLabels[dc.categoryMix]} · ${dc.region}</div>
        <div class="popup-details">
          <span class="popup-detail-label">Monthly Tokens</span>
          <span class="popup-detail-value">${formatTokens(dc.estMonthlyTokens)}</span>
          <span class="popup-detail-label">Personal Adoption</span>
          <span class="popup-detail-value">${dc.personalAdoption}% of adults</span>
          <span class="popup-detail-label">Enterprise Adoption</span>
          <span class="popup-detail-value">${dc.enterpriseAdoption}% of companies</span>
          <span class="popup-detail-label">Top Customers</span>
          <span class="popup-detail-value">${renderCustomers(dc.topCustomers)}</span>
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--color-text-muted);line-height:1.5;">${dc.details}</div>
        <div class="popup-source"><a href="${dc.source}" target="_blank" rel="noopener noreferrer">View source →</a></div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 380, minWidth: 280 });
    marker.bindTooltip(`${dc.country} · ${dc.personalAdoption}% / ${dc.enterpriseAdoption}%`, {
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

  let totalTokens = 0;
  let sumPersonal = 0;
  let sumEnterprise = 0;
  data.forEach(dc => {
    totalTokens += parseFloat(dc.estMonthlyTokens);
    sumPersonal += dc.personalAdoption;
    sumEnterprise += dc.enterpriseAdoption;
  });
  const n = data.length || 1;
  document.getElementById("stat-tokens").textContent = formatTokens(String(totalTokens));
  document.getElementById("stat-personal").textContent = Math.round(sumPersonal / n) + "%";
  document.getElementById("stat-enterprise").textContent = Math.round(sumEnterprise / n) + "%";
}

/* ========== TABLE ========== */

function renderTable(data) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  data.forEach(dc => {
    const color = getAdoptionColor(dc.personalAdoption);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.country}</td>
      <td>${dc.region}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${formatTokens(dc.estMonthlyTokens)}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);color:${color};">${dc.personalAdoption}%</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.enterpriseAdoption}%</td>
      <td><span class="status-badge status-groundbreaking" style="background:${color}22;color:${color};">${mixLabels[dc.categoryMix]}</span></td>
      <td style="font-size:var(--text-xs);">${dc.topCustomers.map(c=>c.name).join(", ")}</td>
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
    filtered = filtered.filter(dc => dc.categoryMix === activeFilter);
  }
  if (activeRegion !== "all") {
    filtered = filtered.filter(dc => dc.region === activeRegion);
  }

  const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(dc =>
      dc.country.toLowerCase().includes(searchTerm) ||
      dc.region.toLowerCase().includes(searchTerm) ||
      dc.categoryMix.toLowerCase().includes(searchTerm) ||
      dc.details.toLowerCase().includes(searchTerm) ||
      dc.topCustomers.some(c => c.name.toLowerCase().includes(searchTerm))
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
      if (["tokens","personal","enterprise"].includes(col)) {
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
  const map = { country: 0, region: 1, tokens: 2, personal: 3, enterprise: 4, mix: 5, customers: 6 };
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
