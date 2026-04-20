/* ========== AI DATA CENTER DATA ========== */

const dataCenters = [
  // ===== STARGATE PROJECTS =====
  {
    project: "Stargate I (Flagship)",
    company: "OpenAI / Oracle / SoftBank",
    location: "Abilene, Texas, USA",
    lat: 32.4487,
    lng: -99.7331,
    investment: "$500B (overall program)",
    capacity: "1.2 GW",
    capacityMW: 1200,
    size: "4,000,000 sq ft",
    status: "Partially Online",
    expected: "Fully operational mid-2026",
    details: "Flagship Stargate campus. Already running on Oracle Cloud Infrastructure with NVIDIA GB200 racks delivered since June 2025. Part of the $500B Stargate Project targeting 10 GW total.",
    category: "stargate",
    region: "north-america",
    source: "https://openai.com/index/five-new-stargate-sites/"
  },
  {
    project: "Stargate — Shackelford County",
    company: "OpenAI / Oracle / Vantage",
    location: "Shackelford County, Texas, USA",
    lat: 32.72,
    lng: -99.35,
    investment: "$25B",
    capacity: "1.4 GW",
    capacityMW: 1400,
    size: "3,700,000 sq ft",
    status: "Under Construction",
    expected: "First building H2 2026",
    details: "Developed by Vantage under the name 'Frontier'. Contractor: Kiewit Corporation. One of five new Stargate sites announced Sept 2025.",
    category: "stargate",
    region: "north-america",
    source: "https://www.equipmentworld.com/market-pulse/article/15816534/data-center-construction-boom-to-grow-in-2026"
  },
  {
    project: "Stargate — Doña Ana County",
    company: "OpenAI / Oracle",
    location: "Doña Ana County, New Mexico, USA",
    lat: 32.35,
    lng: -106.75,
    investment: "Not disclosed",
    capacity: "Multi-GW planned",
    capacityMW: 1000,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2027",
    details: "Selected from 300+ proposals across 30+ states. Part of the Stargate expansion announced September 2025.",
    category: "stargate",
    region: "north-america",
    source: "https://openai.com/index/five-new-stargate-sites/"
  },
  {
    project: "Stargate — Lordstown",
    company: "SoftBank / OpenAI",
    location: "Lordstown, Ohio, USA",
    lat: 41.17,
    lng: -80.87,
    investment: "Not disclosed",
    capacity: "Up to 1.5 GW (with Milam)",
    capacityMW: 750,
    size: "Not disclosed",
    status: "Broke Ground",
    expected: "Operational 2026",
    details: "SoftBank-led site with advanced data center design. Broke ground in 2025, on track for operations in 2026.",
    category: "stargate",
    region: "north-america",
    source: "https://openai.com/index/five-new-stargate-sites/"
  },
  {
    project: "Stargate — Milam County",
    company: "SoftBank / SB Energy / OpenAI",
    location: "Milam County, Texas, USA",
    lat: 30.75,
    lng: -96.95,
    investment: "Not disclosed",
    capacity: "Up to 1.5 GW (with Lordstown)",
    capacityMW: 750,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2026–2027",
    details: "Fast-build site powered by SB Energy infrastructure. Part of SoftBank and OpenAI partnership for rapid deployment.",
    category: "stargate",
    region: "north-america",
    source: "https://openai.com/index/five-new-stargate-sites/"
  },
  {
    project: "Stargate — Port Washington (Lighthouse)",
    company: "OpenAI / Oracle / Vantage",
    location: "Port Washington, Wisconsin, USA",
    lat: 43.39,
    lng: -87.88,
    investment: "$15B+",
    capacity: "902 MW",
    capacityMW: 902,
    size: "2,500,000 sq ft across 672 acres",
    status: "Under Construction",
    expected: "Completion 2028",
    details: "Vantage's Lighthouse campus. Four single-story data centers. 100% zero-emission energy matched. 4,000+ construction jobs, 1,000+ permanent. LEED certification pursued.",
    category: "stargate",
    region: "north-america",
    source: "https://vantage-dc.com/data-center-locations/north-america/port-washington-wisconsin"
  },
  {
    project: "Stargate UAE",
    company: "OpenAI / G42 / NVIDIA",
    location: "Abu Dhabi, UAE",
    lat: 24.45,
    lng: 54.65,
    investment: "Part of 10-sq-mile campus",
    capacity: "5 GW (full campus)",
    capacityMW: 5000,
    size: "10 square miles planned",
    status: "Construction Planning",
    expected: "Phased through 2030",
    details: "G42 building Stargate infrastructure in Abu Dhabi. Part of US-UAE AI Acceleration Partnership. OpenAI providing ChatGPT Plus nationwide to UAE residents.",
    category: "stargate",
    region: "middle-east",
    source: "https://mei.edu/report/from-crude-to-compute-building-the-gcc-ai-stack/"
  },

  // ===== HYPERSCALERS =====
  // --- Microsoft ---
  {
    project: "Fairwater AI Superfactory",
    company: "Microsoft",
    location: "Mount Pleasant, Wisconsin, USA",
    lat: 42.72,
    lng: -87.88,
    investment: "$7B+ (total WI commitment)",
    capacity: "Not disclosed (hundreds of thousands of GPUs)",
    capacityMW: 500,
    size: "315 acres, 1.2M sq ft, 3 buildings",
    status: "Near Completion",
    expected: "Online early 2026",
    details: "World's most powerful AI datacenter. NVIDIA GB200 NVL72 systems scaling to hundreds of thousands of Blackwell GPUs. Two-story design with advanced liquid cooling. Connected to other Fairwater sites via dedicated high-speed network.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://blogs.microsoft.com/on-the-issues/2025/09/18/made-in-wisconsin-the-worlds-most-powerful-ai-datacenter/"
  },
  {
    project: "Fairwater Atlanta",
    company: "Microsoft",
    location: "Atlanta, Georgia, USA",
    lat: 33.749,
    lng: -84.388,
    investment: "Part of multi-billion $ program",
    capacity: "Hundreds of thousands of GPUs",
    capacityMW: 500,
    size: "Not disclosed",
    status: "Operational (Oct 2025)",
    expected: "Operational",
    details: "Second Fairwater AI datacenter. Identical architecture to Wisconsin. Directly networked to Wisconsin site to function as a unified AI superfactory for training models across states.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://news.microsoft.com/source/features/ai/from-wisconsin-to-atlanta-microsoft-connects-datacenters-to-build-its-first-ai-superfactory/"
  },
  {
    project: "Microsoft Zaragoza Campus",
    company: "Microsoft",
    location: "Zaragoza, Spain",
    lat: 41.65,
    lng: -0.88,
    investment: "€2.9B ($3.2B)",
    capacity: "Not disclosed",
    capacityMW: 300,
    size: "Not disclosed",
    status: "Announced",
    expected: "2027–2028",
    details: "Major AI and cloud data center campus in Spain, part of Microsoft's European expansion for AI infrastructure.",
    category: "hyperscaler",
    region: "europe",
    source: "https://www.sentisight.ai/european-countries-with-most-data-centers/"
  },
  {
    project: "Microsoft Northern Italy",
    company: "Microsoft",
    location: "Milan, Italy",
    lat: 45.46,
    lng: 9.19,
    investment: "$4.8B",
    capacity: "Not disclosed",
    capacityMW: 250,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2026–2027",
    details: "AI and cloud infrastructure expansion in northern Italy. Part of Microsoft's multi-billion European AI commitment.",
    category: "hyperscaler",
    region: "europe",
    source: "https://www.sentisight.ai/european-countries-with-most-data-centers/"
  },

  // --- Google ---
  {
    project: "Google Wilbarger County",
    company: "Google / Alphabet",
    location: "Wilbarger County, Texas, USA",
    lat: 34.08,
    lng: -99.22,
    investment: "Part of $40B Texas plan",
    capacity: "7,800+ MW contracted to TX grid",
    capacityMW: 600,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2027",
    details: "Air-cooled data center eliminating operational water use. Powered by AES Corp. Part of Google's $40B Texas investment through 2027.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.crn.com/news/cloud/2026/google-unveils-two-new-us-data-centers-as-185-billion-commitment-gets-underway"
  },
  {
    project: "Google Armstrong County",
    company: "Google / Alphabet",
    location: "Armstrong County, Texas, USA",
    lat: 34.96,
    lng: -101.35,
    investment: "Part of $40B Texas plan",
    capacity: "Not disclosed",
    capacityMW: 400,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2026–2027",
    details: "One of three new Google data centers in Texas announced November 2025. Part of $40B investment through 2027.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.reuters.com/business/google-invest-40-billion-new-data-centers-texas-bloomberg-news-reports-2025-11-14/"
  },
  {
    project: "Google Haskell County",
    company: "Google / Alphabet",
    location: "Haskell County, Texas, USA",
    lat: 33.16,
    lng: -99.73,
    investment: "Part of $40B Texas plan",
    capacity: "Not disclosed",
    capacityMW: 400,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2026–2027",
    details: "Located in West Texas near Abilene. Part of Google's three new Texas data center announcements.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.reuters.com/business/google-invest-40-billion-new-data-centers-texas-bloomberg-news-reports-2025-11-14/"
  },
  {
    project: "Google Pine Island",
    company: "Google / Alphabet",
    location: "Pine Island, Minnesota, USA",
    lat: 44.2,
    lng: -92.65,
    investment: "$1B+",
    capacity: "Not disclosed",
    capacityMW: 300,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2027",
    details: "Powered by new wind, solar, and battery energy via Xcel Energy contract. Supports AI and cloud capability expansion.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.crn.com/news/cloud/2026/google-unveils-two-new-us-data-centers-as-185-billion-commitment-gets-underway"
  },
  {
    project: "Google Visakhapatnam (with Adani)",
    company: "Google / Adani",
    location: "Visakhapatnam, India",
    lat: 17.69,
    lng: 83.22,
    investment: "Part of $15B India plan",
    capacity: "Gigawatt-scale campus",
    capacityMW: 1000,
    size: "600 acres",
    status: "Government Approved",
    expected: "2027–2028",
    details: "India's largest gigawatt-scale data center campus. Built by Google subsidiary Raiden Infotech India. Part of Adani's $100B AI infrastructure plan targeting 5 GW by 2035.",
    category: "hyperscaler",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Google Germany (€5.5B)",
    company: "Google / Alphabet",
    location: "Frankfurt area, Germany",
    lat: 50.11,
    lng: 8.68,
    investment: "€5.5B ($6.4B)",
    capacity: "Not disclosed",
    capacityMW: 400,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2027",
    details: "Infrastructure and data center expansion in Europe's largest economy. Enhances Google's AI capabilities across Europe.",
    category: "hyperscaler",
    region: "europe",
    source: "https://www.reuters.com/business/google-invest-40-billion-new-data-centers-texas-bloomberg-news-reports-2025-11-14/"
  },

  // --- Meta ---
  {
    project: "Hyperion AI Data Center",
    company: "Meta",
    location: "Richland Parish, Louisiana, USA",
    lat: 32.41,
    lng: -91.72,
    investment: "$10B–$50B (phased)",
    capacity: "Multi-GW (3 gas plants planned)",
    capacityMW: 2000,
    size: "4M+ sq ft on 3,650+ acres (expanding)",
    status: "Under Construction",
    expected: "Phased 2026–2030+",
    details: "One of the nation's largest AI data centers. 3,700+ construction workers on site. Meta purchased additional 1,400 acres for Phase 2. Entergy building 3 gas plants to power it. Joint venture with Blue Owl Capital up to $27B.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://fortune.com/2026/02/04/meta-hyperion-ai-data-center-louisiana-expansion/"
  },
  {
    project: "Meta Beaver Dam",
    company: "Meta",
    location: "Beaver Dam, Wisconsin, USA",
    lat: 43.46,
    lng: -88.84,
    investment: "$1B+",
    capacity: "Not disclosed",
    capacityMW: 200,
    size: "700,000 sq ft",
    status: "Broke Ground",
    expected: "2027",
    details: "Meta's 30th data center, designed to support growing AI and digital infrastructure demands.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "Meta El Paso",
    company: "Meta",
    location: "El Paso, Texas, USA",
    lat: 31.76,
    lng: -106.45,
    investment: "$1.5B+",
    capacity: "Not disclosed",
    capacityMW: 200,
    size: "Not disclosed",
    status: "Broke Ground (2025)",
    expected: "2027",
    details: "1,800+ skilled trade workers at peak construction. ~100 operational jobs once completed.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://datacenters.atmeta.com/us-locations/"
  },
  {
    project: "Meta Bowling Green",
    company: "Meta",
    location: "Bowling Green, Ohio, USA",
    lat: 41.375,
    lng: -83.65,
    investment: "$800M+",
    capacity: "Not disclosed",
    capacityMW: 150,
    size: "Not disclosed",
    status: "Broke Ground (2025)",
    expected: "2027",
    details: "1,000+ skilled trade workers at peak construction. ~100 operational jobs once completed.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://datacenters.atmeta.com/us-locations/"
  },

  // --- Amazon / AWS ---
  {
    project: "Project Rainier",
    company: "Amazon / AWS",
    location: "Carlisle, Indiana, USA",
    lat: 40.78,
    lng: -86.17,
    investment: "$11B",
    capacity: "2+ GW (30 buildings planned)",
    capacityMW: 2000,
    size: "1,200 acres, 30 buildings planned",
    status: "Partially Operational",
    expected: "Ongoing expansion",
    details: "World's largest AI supercomputer cluster. Built to train and run Anthropic's Claude models. 7 buildings operational with 2 more campuses in development. Powers world-leading AI workloads.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.cnbc.com/2025/10/29/amazon-opens-11-billion-ai-data-center-project-rainier-in-indiana.html"
  },
  {
    project: "AWS Northern Indiana Expansion",
    company: "Amazon / AWS",
    location: "Northern Indiana, USA",
    lat: 41.6,
    lng: -86.25,
    investment: "$15B",
    capacity: "2.4 GW",
    capacityMW: 2400,
    size: "Multiple campuses",
    status: "Announced",
    expected: "Multi-year buildout",
    details: "Additional $15B beyond the $11B Project Rainier. Adds 2.4 GW capacity. Energy agreement with NIPSCO expected to provide ~$1B in savings to Indiana residents. 1,100 new jobs.",
    category: "hyperscaler",
    region: "north-america",
    source: "https://www.aboutamazon.com/news/company-news/amazon-15-billion-indiana-data-centers"
  },

  // ===== NEOCLOUDS =====
  // --- xAI ---
  {
    project: "Colossus (2 GW Expansion)",
    company: "xAI (Elon Musk)",
    location: "Memphis, Tennessee, USA",
    lat: 35.15,
    lng: -90.05,
    investment: "$18B (GPU purchase alone)",
    capacity: "2 GW",
    capacityMW: 2000,
    size: "3 buildings + gas power plant",
    status: "Expanding",
    expected: "Ongoing, 1M+ GPUs target",
    details: "World's largest single-site AI training installation. 555,000 NVIDIA GPUs. Building on-site gas-fired power plant. Third building purchased Dec 2025. Original 100,000-GPU cluster built in 122 days.",
    category: "neocloud",
    region: "north-america",
    source: "https://introl.com/blog/xai-colossus-2-gigawatt-expansion-555k-gpus-january-2026"
  },
  {
    project: "xAI Saudi Arabia DC",
    company: "xAI / HUMAIN",
    location: "Riyadh, Saudi Arabia",
    lat: 24.71,
    lng: 46.67,
    investment: "Not disclosed",
    capacity: "500 MW",
    capacityMW: 500,
    size: "Not disclosed",
    status: "Announced",
    expected: "TBD",
    details: "Collaboration with HUMAIN (Saudi sovereign AI). Will utilize NVIDIA hardware and systems. Located outside Riyadh.",
    category: "neocloud",
    region: "middle-east",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },

  // --- CoreWeave ---
  {
    project: "CoreWeave Lancaster",
    company: "CoreWeave",
    location: "Lancaster, Pennsylvania, USA",
    lat: 40.04,
    lng: -76.31,
    investment: "Up to $6B",
    capacity: "100 MW (expandable to 300 MW)",
    capacityMW: 300,
    size: "Not disclosed",
    status: "Under Construction",
    expected: "2026–2027",
    details: "Purpose-built for cutting-edge AI workloads. ~600 construction jobs, ~175 permanent. Co-developed by Chirisa Technology Parks and Machine Investment Group.",
    category: "neocloud",
    region: "north-america",
    source: "https://investors.coreweave.com/news/news-details/2025/CoreWeave-Announces-Multi-Billion-Dollar-Commitment-to-AI-Infrastructure-in-Pennsylvania/default.aspx"
  },
  {
    project: "CoreWeave Kenilworth (NJ)",
    company: "CoreWeave",
    location: "Kenilworth, New Jersey, USA",
    lat: 40.68,
    lng: -74.29,
    investment: "$1.8B",
    capacity: "250 MW",
    capacityMW: 250,
    size: "392,600 sq ft",
    status: "Under Construction",
    expected: "Early 2027",
    details: "Built at former Merck & Co. campus. First award under NJ's Next New Jersey Program – AI. Includes 108,100 sq ft new construction + 284,500 sq ft retrofit.",
    category: "neocloud",
    region: "north-america",
    source: "https://re-nj.com/coreweave-begins-1-8-billion-data-center-project-in-kenilworth-landing-first-award-under-new-eda-tax-credit-program/"
  },
  {
    project: "Project Horizon",
    company: "CoreWeave / Poolside",
    location: "West Texas, USA",
    lat: 31.9,
    lng: -102.1,
    investment: "Multi-billion $",
    capacity: "2 GW (8 phases of 250 MW)",
    capacityMW: 2000,
    size: "Not disclosed",
    status: "Planning / Early Construction",
    expected: "Phased through late 2020s",
    details: "Massive 2 GW campus built in 8 phases. Will generate its own power. Partnership with Poolside for NVIDIA GB300 NV72 systems with 40,000+ GPUs.",
    category: "neocloud",
    region: "north-america",
    source: "https://finance.yahoo.com/news/coreweave-building-massive-data-center-140002009.html"
  },

  // --- Anthropic ---
  {
    project: "Anthropic / FluidStack — Texas",
    company: "Anthropic / FluidStack",
    location: "Texas, USA",
    lat: 32.78,
    lng: -96.8,
    investment: "Part of $50B plan",
    capacity: "Not disclosed",
    capacityMW: 500,
    size: "Not disclosed",
    status: "Announced",
    expected: "2026–2028",
    details: "Part of Anthropic's $50B plan to build US data centers with UK-based FluidStack. Will create 800 permanent jobs and 2,000 construction roles across all sites.",
    category: "neocloud",
    region: "north-america",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "Anthropic / FluidStack — New York",
    company: "Anthropic / FluidStack",
    location: "New York, USA",
    lat: 42.65,
    lng: -73.75,
    investment: "Part of $50B plan",
    capacity: "Not disclosed",
    capacityMW: 500,
    size: "Not disclosed",
    status: "Announced",
    expected: "2026–2028",
    details: "Second initial site under Anthropic's $50B data center investment with FluidStack. Additional US sites expected to follow.",
    category: "neocloud",
    region: "north-america",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },

  // ===== INDEPENDENT =====
  {
    project: "AVAIO Digital Leo",
    company: "AVAIO Digital",
    location: "Little Rock, Arkansas, USA",
    lat: 34.75,
    lng: -92.29,
    investment: "$6B (initial), $21B (full)",
    capacity: "150 MW → 1 GW",
    capacityMW: 1000,
    size: "760 acres",
    status: "Broke Ground (early 2026)",
    expected: "150 MW energized June 2027",
    details: "Named after constellation Leo. Multi-phase campus. Largest investment in Arkansas state history. 500+ permanent jobs. Contracted with Entergy Arkansas.",
    category: "independent",
    region: "north-america",
    source: "https://www.avaiodigital.com/updates/avaio-digital-announces-new-large-scale-ai-ready-data-center-and-power-campus-in-little-rock-arkansas"
  },
  {
    project: "Compass Meridian",
    company: "Compass Datacenters",
    location: "Meridian, Mississippi, USA",
    lat: 32.36,
    lng: -88.7,
    investment: "$10B",
    capacity: "320 MW",
    capacityMW: 320,
    size: "8 buildings, 250,000 sq ft each",
    status: "Under Construction",
    expected: "Full completion 2033",
    details: "Eight-building campus. Contractor: Eutaw Construction. Long-term phased build-out in Mississippi.",
    category: "independent",
    region: "north-america",
    source: "https://www.equipmentworld.com/market-pulse/article/15816534/data-center-construction-boom-to-grow-in-2026"
  },
  {
    project: "Energy Storage Solutions NC Campus",
    company: "Energy Storage Solutions",
    location: "Rocky Mount, North Carolina, USA",
    lat: 35.94,
    lng: -77.79,
    investment: "$19.2B",
    capacity: "900 MW",
    capacityMW: 900,
    size: "300 acres",
    status: "Zoning Approved",
    expected: "Construction begins Q1 2026",
    details: "Massive data center and energy storage campus. County commissioners approved data center zoning. Twin project also planned for Fayetteville.",
    category: "independent",
    region: "north-america",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "Powhatan County DC",
    company: "JLL / Dominion Energy",
    location: "Powhatan County, Virginia, USA",
    lat: 37.55,
    lng: -77.92,
    investment: "Not disclosed",
    capacity: "365 MW (initial)",
    capacityMW: 365,
    size: "180 acres",
    status: "Approved",
    expected: "TBD",
    details: "Unanimously approved by County Board. Powered by Dominion Energy with initial 365 MW deployment.",
    category: "independent",
    region: "north-america",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },

  // ===== SOVEREIGN / INTERNATIONAL =====
  // --- Saudi Arabia ---
  {
    project: "HUMAIN Sovereign AI Platform",
    company: "HUMAIN (Saudi PIF)",
    location: "Riyadh, Saudi Arabia",
    lat: 24.75,
    lng: 46.75,
    investment: "Multi-billion $ (part of $40B fund)",
    capacity: "1.9 GW → 6.6 GW by 2034",
    capacityMW: 1900,
    size: "Multiple sites",
    status: "Under Development",
    expected: "Phased through 2034",
    details: "Saudi sovereign AI platform. Partnerships with NVIDIA, Qualcomm, Google Cloud. First credible multi-GW, AI-native data center platform in Middle East. Part of $10B Google partnership.",
    category: "sovereign",
    region: "middle-east",
    source: "https://mei.edu/report/from-crude-to-compute-building-the-gcc-ai-stack/"
  },

  // --- Europe ---
  {
    project: "Deutsche Telekom / NVIDIA Munich",
    company: "Deutsche Telekom / NVIDIA",
    location: "Munich, Germany",
    lat: 48.14,
    lng: 11.58,
    investment: "€1B ($1.2B)",
    capacity: "Not disclosed",
    capacityMW: 200,
    size: "Not disclosed",
    status: "Operational (Mar 2026)",
    expected: "Operational",
    details: "One of Europe's largest AI facilities. Boosts Germany's AI computing power by ~50%.",
    category: "sovereign",
    region: "europe",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Mistral AI / EcoDataCenter Sweden",
    company: "Mistral AI / EcoDataCenter",
    location: "Sweden",
    lat: 59.33,
    lng: 18.07,
    investment: "$1.4B",
    capacity: "Not disclosed",
    capacityMW: 200,
    size: "Not disclosed",
    status: "Announced",
    expected: "Launch 2027",
    details: "AI-focused data center employing NVIDIA Vera Rubin GPUs. French AI firm partnering with Swedish green data center operator.",
    category: "sovereign",
    region: "europe",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Brookfield AI DC Stockholm",
    company: "Brookfield Infrastructure",
    location: "Stockholm, Sweden",
    lat: 59.35,
    lng: 18.1,
    investment: "Up to $10B",
    capacity: "750 MW IT load",
    capacityMW: 750,
    size: "Not disclosed",
    status: "Under Development",
    expected: "Phased",
    details: "One of Europe's largest infrastructure investments. Leverages Nordic cool climate for free cooling and abundant renewable hydropower.",
    category: "independent",
    region: "europe",
    source: "https://www.sentisight.ai/european-countries-with-most-data-centers/"
  },
  {
    project: "Brookfield / Data4 France",
    company: "Brookfield / Data4",
    location: "Paris, France",
    lat: 48.86,
    lng: 2.35,
    investment: "$20.7B",
    capacity: "Not disclosed",
    capacityMW: 500,
    size: "Not disclosed",
    status: "Announced (Feb 2025)",
    expected: "5-year buildout",
    details: "AI infrastructure development across France. Paris overtook Amsterdam as Europe's 3rd largest data center market in 2024.",
    category: "independent",
    region: "europe",
    source: "https://www.sentisight.ai/european-countries-with-most-data-centers/"
  },

  // --- Asia-Pacific ---
  {
    project: "CDC Marsden Park Campus",
    company: "CDC Data Centers",
    location: "Marsden Park, NSW, Australia",
    lat: -33.69,
    lng: 150.84,
    investment: "$3.1B",
    capacity: "Not disclosed",
    capacityMW: 300,
    size: "Southern hemisphere's largest",
    status: "Approved",
    expected: "TBD",
    details: "NSW-approved campus. Will be the southern hemisphere's largest data center project.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "CDC Brooklyn Victoria",
    company: "CDC Data Centers",
    location: "Brooklyn, Victoria, Australia",
    lat: -37.81,
    lng: 144.84,
    investment: "$4B+",
    capacity: "Not disclosed",
    capacityMW: 200,
    size: "2 facilities + 3rd planned, 2nd campus at Laverton North",
    status: "Partially Operational",
    expected: "Expanding",
    details: "Two operational facilities with a third planned. Second campus at Laverton North in development.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Princeton Digital Jakarta",
    company: "Princeton Digital Group",
    location: "Jakarta, Indonesia",
    lat: -6.2,
    lng: 106.85,
    investment: "Not disclosed",
    capacity: "120 MW",
    capacityMW: 120,
    size: "Hyperscale campus",
    status: "Under Construction",
    expected: "TBD",
    details: "Among the largest planned data centers in Indonesia. 120 MW hyperscale campus.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "Kinh Bac / AIC Ho Chi Minh City",
    company: "Kinh Bac / Accelerated Infrastructure Capital",
    location: "Ho Chi Minh City, Vietnam",
    lat: 10.82,
    lng: 106.63,
    investment: "Not disclosed",
    capacity: "200 MW",
    capacityMW: 200,
    size: "Not disclosed",
    status: "MoA Signed",
    expected: "TBD",
    details: "Joint venture with VietinBank. AI data center in Vietnam's largest city.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "DayOne / Amata Thailand 1 GW",
    company: "DayOne / Amata Corporation",
    location: "Eastern Thailand",
    lat: 13.36,
    lng: 101.0,
    investment: "Not disclosed",
    capacity: "1 GW platform (300 MW site)",
    capacityMW: 1000,
    size: "Not disclosed",
    status: "MoA Signed",
    expected: "Phased",
    details: "Thailand's first 1 GW power platform for data centers. 16 additional acres allotted to expand CTP1 site to 300 MW.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-december-2025"
  },
  {
    project: "Yotta Greater Noida AI Supercluster",
    company: "Yotta",
    location: "Greater Noida, India",
    lat: 28.47,
    lng: 77.5,
    investment: "$2B+",
    capacity: "20,000 NVIDIA Blackwell Ultra chips",
    capacityMW: 300,
    size: "Not disclosed",
    status: "Under Development",
    expected: "2026–2027",
    details: "One of Asia's largest AI superclusters. Includes capacity from Navi Mumbai campus. Seeking $1.2B from investors ahead of IPO.",
    category: "independent",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Hyundai AI Hub Gunsan",
    company: "Hyundai Motor Group",
    location: "Gunsan City, South Korea",
    lat: 35.98,
    lng: 126.72,
    investment: "$6.3B",
    capacity: "Not disclosed",
    capacityMW: 300,
    size: "Saemangeum innovation hub",
    status: "Announced",
    expected: "TBD",
    details: "Innovation hub spanning AI data center, robotics manufacturing, and hydrogen/solar energy generation.",
    category: "sovereign",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "Kazakhstan Ekibastuz Campus",
    company: "Government of Kazakhstan",
    location: "Ekibastuz, Kazakhstan",
    lat: 51.72,
    lng: 75.32,
    investment: "Not disclosed",
    capacity: "Up to 1 GW",
    capacityMW: 1000,
    size: "Central Asia's largest",
    status: "Planned",
    expected: "TBD",
    details: "Central Asia's largest planned data center campus. Leverages abundant energy resources in Ekibastuz.",
    category: "sovereign",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },
  {
    project: "OpenAI / Samsung / SK Telecom Seoul",
    company: "OpenAI / Samsung SDS / SK Telecom",
    location: "South Korea",
    lat: 37.55,
    lng: 127.0,
    investment: "Not disclosed",
    capacity: "20 MW (initial)",
    capacityMW: 20,
    size: "Not disclosed",
    status: "Construction began Mar 2026",
    expected: "2026–2027",
    details: "Joint construction by OpenAI, Samsung SDS, and SK Telecom. Announced by Science Minister Bae Kyung-hoon.",
    category: "sovereign",
    region: "asia-pacific",
    source: "https://www.datacenterknowledge.com/data-center-construction/new-data-center-developments-march-2026"
  },

  // --- Latin America ---
  {
    project: "Rio AI City",
    company: "Goldman Sachs-backed",
    location: "Rio de Janeiro, Brazil",
    lat: -22.91,
    lng: -43.17,
    investment: "Multi-billion $",
    capacity: "443 MW → 1.6 GW by 2031",
    capacityMW: 443,
    size: "Not disclosed",
    status: "Under Development",
    expected: "Phased through 2031",
    details: "Goldman Sachs-backed project. Will increase Latin America AI data center capacity from 443 MW (2026) to 1.6 GW by 2031.",
    category: "independent",
    region: "latam",
    source: "https://www.abiresearch.com/blog/data-centers-by-region-size-company"
  }
];

/* ========== MAP INITIALIZATION ========== */

const categoryColors = {
  stargate: "#ef4444",
  hyperscaler: "#3b82f6",
  neocloud: "#8b5cf6",
  sovereign: "#f59e0b",
  independent: "#10b981"
};

let map;
let markers = [];
let activeFilter = "all";
let activeRegion = "all";

function initMap() {
  map = L.map("map", {
    center: [25, 0],
    zoom: 2.5,
    minZoom: 2,
    maxZoom: 12,
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  });

  // Dark-themed tile layer
  updateTileLayer();

  // Add markers
  addMarkers(dataCenters);

  // Fit bounds
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

  if (isDark) {
    currentTileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }
    );
  } else {
    currentTileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }
    );
  }

  currentTileLayer.addTo(map);
}

function getMarkerRadius(capacityMW) {
  if (capacityMW >= 2000) return 18;
  if (capacityMW >= 1000) return 14;
  if (capacityMW >= 500) return 11;
  if (capacityMW >= 200) return 8;
  return 6;
}

function addMarkers(data) {
  // Clear existing
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(dc => {
    const color = categoryColors[dc.category] || "#10b981";
    const radius = getMarkerRadius(dc.capacityMW);

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
          <span class="popup-detail-label">Investment</span>
          <span class="popup-detail-value">${dc.investment}</span>
          <span class="popup-detail-label">Capacity</span>
          <span class="popup-detail-value">${dc.capacity}</span>
          ${dc.size !== "Not disclosed" ? `<span class="popup-detail-label">Size</span><span class="popup-detail-value">${dc.size}</span>` : ""}
          <span class="popup-detail-label">Status</span>
          <span class="popup-detail-value">${dc.status}</span>
          <span class="popup-detail-label">Expected</span>
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

  // Estimate total investment
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

  // Total capacity
  let totalMW = 0;
  data.forEach(dc => { totalMW += dc.capacityMW; });
  if (totalMW >= 1000) {
    document.getElementById("stat-capacity").textContent = (totalMW / 1000).toFixed(1) + " GW";
  } else {
    document.getElementById("stat-capacity").textContent = totalMW + " MW";
  }

  // Countries
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
      : dc.status.toLowerCase().includes("announced") || dc.status.toLowerCase().includes("planned") || dc.status.toLowerCase().includes("approved") ? "announced"
      : dc.status.toLowerCase().includes("ground") || dc.status.toLowerCase().includes("moa") ? "groundbreaking"
      : "partial";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="font-weight:600;">${dc.project}</td>
      <td>${dc.company}</td>
      <td>${dc.location}</td>
      <td style="font-family:var(--font-mono);font-size:var(--text-xs);">${dc.investment}</td>
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
      dc.details.toLowerCase().includes(searchTerm)
    );
  }

  addMarkers(filtered);
  updateStats(filtered);
  renderTable(filtered);

  // Fit bounds to filtered data
  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.15));
  }
}

// Category filters
document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    filterData();
  });
});

// Region filters
document.querySelectorAll("[data-region]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-region]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeRegion = btn.dataset.region;
    filterData();
  });
});

// Mark initial active region
document.querySelector('[data-region="all"]').classList.add("active");

// Search
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

    // Update header indicators
    document.querySelectorAll("th[data-sort]").forEach(h => {
      h.textContent = h.textContent.replace(/ [▲▼]/, "");
    });
    th.textContent += sortAsc ? " ▲" : " ▼";

    // Sort filtered data and re-render table
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
  // Default to dark for this site
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
