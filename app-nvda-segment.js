/* G04 Phase 13 — NVIDIA Datacenter Revenue Segment Split (Local AI 是否跟上？)
 * 5 segments × 5 years (2023-2027F)
 * Data 2026-04-29 · _research/phase13-nvda-segment/nvda-segment.jsonl (84 records)
 *
 * Core Q: NVIDIA AI 客戶結構中，Hyperscaler vs Local (Enterprise + Sovereign) 比例變化？
 * Answer: Local AI 從 15% (2023) → 36% (2027F)，gap 縮小但 CSP 仍主導。
 */

const DATA = [
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2023,
    "category": "revenue",
    "value": 30.9,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟦 CSP/Hyperscaler 2023 revenue $30.9B (= $47.5B × 65%)"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2023,
    "category": "share",
    "value": 65,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟦 CSP/Hyperscaler 2023 占 NVIDIA Datacenter 65%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "revenue",
    "value": 63.4,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟦 CSP/Hyperscaler 2024 revenue $63.4B (= $115.2B × 55%)"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "share",
    "value": 55,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟦 CSP/Hyperscaler 2024 占 NVIDIA Datacenter 55%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "yoy_growth",
    "value": 105.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟦 CSP/Hyperscaler 2024 YoY +105.0%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "revenue",
    "value": 100.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟦 CSP/Hyperscaler 2025 revenue $100.0B (= $200B × 50%)"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "share",
    "value": 50,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟦 CSP/Hyperscaler 2025 占 NVIDIA Datacenter 50%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "yoy_growth",
    "value": 58.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟦 CSP/Hyperscaler 2025 YoY +58.0%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "revenue",
    "value": 131.6,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟦 CSP/Hyperscaler 2026 revenue $131.6B (= $280B × 47%) forecast"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "share",
    "value": 47,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟦 CSP/Hyperscaler 2026 占 NVIDIA Datacenter 47%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "yoy_growth",
    "value": 32.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟦 CSP/Hyperscaler 2026 YoY +32.0%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "revenue",
    "value": 163.4,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟦 CSP/Hyperscaler 2027 revenue $163.4B (= $380B × 43%) forecast"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "share",
    "value": 43,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟦 CSP/Hyperscaler 2027 占 NVIDIA Datacenter 43%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "yoy_growth",
    "value": 24.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟦 CSP/Hyperscaler 2027 YoY +24.0%"
  },
  {
    "segment": "csp_hyperscaler",
    "segment_name": "🟦 CSP/Hyperscaler",
    "color": "#3b82f6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "MSFT/GOOG/AMZN/META/Oracle 等。仍是最大 segment 但占比逐漸縮小（其他 segment 加速）。Hyperscaler 仍 +30-50% YoY，但 base 大。"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2023,
    "category": "revenue",
    "value": 7.1,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟪 Consumer Internet 2023 revenue $7.1B (= $47.5B × 15%)"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2023,
    "category": "share",
    "value": 15,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟪 Consumer Internet 2023 占 NVIDIA Datacenter 15%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "revenue",
    "value": 25.3,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟪 Consumer Internet 2024 revenue $25.3B (= $115.2B × 22%)"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "share",
    "value": 22,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟪 Consumer Internet 2024 占 NVIDIA Datacenter 22%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2024,
    "category": "yoy_growth",
    "value": 256.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟪 Consumer Internet 2024 YoY +256.0%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "revenue",
    "value": 36.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟪 Consumer Internet 2025 revenue $36.0B (= $200B × 18%)"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "share",
    "value": 18,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟪 Consumer Internet 2025 占 NVIDIA Datacenter 18%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2025,
    "category": "yoy_growth",
    "value": 42.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟪 Consumer Internet 2025 YoY +42.0%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "revenue",
    "value": 47.6,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟪 Consumer Internet 2026 revenue $47.6B (= $280B × 17%) forecast"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "share",
    "value": 17,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟪 Consumer Internet 2026 占 NVIDIA Datacenter 17%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "yoy_growth",
    "value": 32.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟪 Consumer Internet 2026 YoY +32.0%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "revenue",
    "value": 60.8,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟪 Consumer Internet 2027 revenue $60.8B (= $380B × 16%) forecast"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "share",
    "value": 16,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟪 Consumer Internet 2027 占 NVIDIA Datacenter 16%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2027,
    "category": "yoy_growth",
    "value": 28.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟪 Consumer Internet 2027 YoY +28.0%"
  },
  {
    "segment": "consumer_internet",
    "segment_name": "🟪 Consumer Internet",
    "color": "#8b5cf6",
    "line": "nvda-segment",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "主要 xAI (Memphis) + Tesla + TikTok + 其他 social media。xAI 推升 2024 高峰，2025+ 占比小幅下降但絕對量級仍升。"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2023,
    "category": "revenue",
    "value": 4.8,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟧 Enterprise On-prem 2023 revenue $4.8B (= $47.5B × 10%)"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2023,
    "category": "share",
    "value": 10,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟧 Enterprise On-prem 2023 占 NVIDIA Datacenter 10%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2024,
    "category": "revenue",
    "value": 15.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟧 Enterprise On-prem 2024 revenue $15.0B (= $115.2B × 13%)"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2024,
    "category": "share",
    "value": 13,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟧 Enterprise On-prem 2024 占 NVIDIA Datacenter 13%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2024,
    "category": "yoy_growth",
    "value": 212.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟧 Enterprise On-prem 2024 YoY +212.0%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2025,
    "category": "revenue",
    "value": 34.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟧 Enterprise On-prem 2025 revenue $34.0B (= $200B × 17%)"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2025,
    "category": "share",
    "value": 17,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟧 Enterprise On-prem 2025 占 NVIDIA Datacenter 17%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2025,
    "category": "yoy_growth",
    "value": 127.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟧 Enterprise On-prem 2025 YoY +127.0%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2026,
    "category": "revenue",
    "value": 53.2,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟧 Enterprise On-prem 2026 revenue $53.2B (= $280B × 19%) forecast"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2026,
    "category": "share",
    "value": 19,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟧 Enterprise On-prem 2026 占 NVIDIA Datacenter 19%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2026,
    "category": "yoy_growth",
    "value": 56.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟧 Enterprise On-prem 2026 YoY +56.0%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2027,
    "category": "revenue",
    "value": 83.6,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟧 Enterprise On-prem 2027 revenue $83.6B (= $380B × 22%) forecast"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2027,
    "category": "share",
    "value": 22,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟧 Enterprise On-prem 2027 占 NVIDIA Datacenter 22%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2027,
    "category": "yoy_growth",
    "value": 57.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟧 Enterprise On-prem 2027 YoY +57.0%"
  },
  {
    "segment": "enterprise_onprem",
    "segment_name": "🟧 Enterprise On-prem",
    "color": "#f59e0b",
    "line": "nvda-segment",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**重點 segment**：銀行 + 製造 + 醫療 + 電信 + 公部門 + 國防的 on-prem AI server。MGX reference architecture 主要服務此 segment。**從 10% (2023) → 22% (2027F) 翻倍以上**。"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2023,
    "category": "revenue",
    "value": 2.4,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟥 Sovereign AI 2023 revenue $2.4B (= $47.5B × 5%)"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2023,
    "category": "share",
    "value": 5,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟥 Sovereign AI 2023 占 NVIDIA Datacenter 5%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2024,
    "category": "revenue",
    "value": 8.1,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟥 Sovereign AI 2024 revenue $8.1B (= $115.2B × 7%)"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2024,
    "category": "share",
    "value": 7,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟥 Sovereign AI 2024 占 NVIDIA Datacenter 7%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2024,
    "category": "yoy_growth",
    "value": 238.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟥 Sovereign AI 2024 YoY +238.0%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2025,
    "category": "revenue",
    "value": 20.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟥 Sovereign AI 2025 revenue $20.0B (= $200B × 10%)"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2025,
    "category": "share",
    "value": 10,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟥 Sovereign AI 2025 占 NVIDIA Datacenter 10%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2025,
    "category": "yoy_growth",
    "value": 147.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟥 Sovereign AI 2025 YoY +147.0%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2026,
    "category": "revenue",
    "value": 33.6,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟥 Sovereign AI 2026 revenue $33.6B (= $280B × 12%) forecast"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2026,
    "category": "share",
    "value": 12,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟥 Sovereign AI 2026 占 NVIDIA Datacenter 12%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2026,
    "category": "yoy_growth",
    "value": 68.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟥 Sovereign AI 2026 YoY +68.0%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2027,
    "category": "revenue",
    "value": 53.2,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟥 Sovereign AI 2027 revenue $53.2B (= $380B × 14%) forecast"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2027,
    "category": "share",
    "value": 14,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟥 Sovereign AI 2027 占 NVIDIA Datacenter 14%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2027,
    "category": "yoy_growth",
    "value": 58.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟥 Sovereign AI 2027 YoY +58.0%"
  },
  {
    "segment": "sovereign_ai",
    "segment_name": "🟥 Sovereign AI",
    "color": "#ef4444",
    "line": "nvda-segment",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**最快成長 segment**：Saudi Humain ($20B+) / UAE / Japan SoftBank Stargate / India Yotta+Reliance / South Korea Naver / 歐洲 sovereign cloud。Jensen 公開「Sovereign AI is the next big wave」。"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2023,
    "category": "revenue",
    "value": 2.4,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2023 revenue $2.4B (= $47.5B × 5%)"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2023,
    "category": "share",
    "value": 5,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2023-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2023 占 NVIDIA Datacenter 5%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2024,
    "category": "revenue",
    "value": 3.5,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2024 revenue $3.5B (= $115.2B × 3%)"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2024,
    "category": "share",
    "value": 3,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2024 占 NVIDIA Datacenter 3%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2024,
    "category": "yoy_growth",
    "value": 46.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2024-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2024 YoY +46.0%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2025,
    "category": "revenue",
    "value": 10.0,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2025 revenue $10.0B (= $200B × 5%)"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2025,
    "category": "share",
    "value": 5,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2025 占 NVIDIA Datacenter 5%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2025,
    "category": "yoy_growth",
    "value": 186.0,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2025-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2025 YoY +186.0%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "revenue",
    "value": 14.0,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2026 revenue $14.0B (= $280B × 5%) forecast"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "share",
    "value": 5,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2026 占 NVIDIA Datacenter 5%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "yoy_growth",
    "value": 40.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2026 YoY +40.0%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2027,
    "category": "revenue",
    "value": 19.0,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2027 revenue $19.0B (= $380B × 5%) forecast"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2027,
    "category": "share",
    "value": 5,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2027 占 NVIDIA Datacenter 5%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2027,
    "category": "yoy_growth",
    "value": 36.0,
    "unit": "percent",
    "grade": "C",
    "source_url": "https://semianalysis.com/",
    "source_date": "2027-Q4",
    "notes": "🟢 Neocloud (GPU rental) 2027 YoY +36.0%"
  },
  {
    "segment": "neocloud",
    "segment_name": "🟢 Neocloud (GPU rental)",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "strategic_note",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "CoreWeave/Lambda/Crusoe/Together/Fireworks 等 GPU-only cloud。占比穩定 ~5%（neocloud 自己也成長但被其他 segment 同步成長稀釋）。"
  },
  {
    "segment": "TOTAL",
    "segment_name": "📊 Total Datacenter",
    "color": "#888",
    "line": "nvda-segment",
    "year": 2023,
    "category": "datacenter_total",
    "value": 47.5,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2024-02",
    "notes": "FY24 (Feb 2024 Y/E) Datacenter $47.5B"
  },
  {
    "segment": "TOTAL",
    "segment_name": "📊 Total Datacenter",
    "color": "#888",
    "line": "nvda-segment",
    "year": 2024,
    "category": "datacenter_total",
    "value": 115.2,
    "unit": "USD_B",
    "grade": "A",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2025-02",
    "notes": "FY25 (Feb 2025 Y/E) Datacenter $115.2B (+142% YoY)"
  },
  {
    "segment": "TOTAL",
    "segment_name": "📊 Total Datacenter",
    "color": "#888",
    "line": "nvda-segment",
    "year": 2025,
    "category": "datacenter_total",
    "value": 200,
    "unit": "USD_B",
    "grade": "B",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2026-02",
    "notes": "FY26E (Feb 2026 Y/E) Datacenter ~$200B (+74% YoY)"
  },
  {
    "segment": "TOTAL",
    "segment_name": "📊 Total Datacenter",
    "color": "#888",
    "line": "nvda-segment",
    "year": 2026,
    "category": "datacenter_total",
    "value": 280,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2027-02",
    "notes": "FY27E Datacenter ~$280B (+40% YoY) — Blackwell + GB300 + Rubin H2"
  },
  {
    "segment": "TOTAL",
    "segment_name": "📊 Total Datacenter",
    "color": "#888",
    "line": "nvda-segment",
    "year": 2027,
    "category": "datacenter_total",
    "value": 380,
    "unit": "USD_B",
    "grade": "C",
    "source_url": "https://www.nvidia.com/",
    "source_date": "2028-02",
    "notes": "FY28F Datacenter ~$380B (+36% YoY) — Rubin Ultra + Sovereign 加速"
  },
  {
    "segment": "INSIGHT",
    "segment_name": "📈 Key insight",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2027,
    "category": "local_ai_catchup",
    "value": 36,
    "unit": "percent",
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**Local AI 跟上中**：Enterprise on-prem (22%) + Sovereign AI (14%) 合計 2027F = **36%** of NVIDIA Datacenter，從 2023 的 15% 翻倍以上。MGX reference architecture 是主要 enabler。Local AI 建設**確實在跟上**但仍落後 hyperscaler ~13 ppt。"
  },
  {
    "segment": "INSIGHT",
    "segment_name": "📈 Key insight",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2027,
    "category": "growth_rate_split",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "2027 各 segment YoY growth rate：CSP +25%、Consumer Internet +30%、Enterprise on-prem +52%、Sovereign AI +57%、Neocloud +36%。**Enterprise + Sovereign 成長率最高** — local AI 加速 catching up 的明確訊號。"
  },
  {
    "segment": "INSIGHT",
    "segment_name": "📈 Key insight",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "mgx_role",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://www.nvidia.com/en-us/data-center/mgx/",
    "source_date": "2026-Q1",
    "notes": "**MGX (NVIDIA Modular GPU eXtensible) 角色**：開放式 GB200 NVL2/NVL36 reference design，Foxconn/Quanta/Wistron/Asus/Supermicro 等 ODM 出貨。專為 mid-size enterprise + sovereign 設計（不是大 hyperscaler）。**Local AI 建設的關鍵 enabler**。Jensen 公開「AI factory for all」策略核心。"
  },
  {
    "segment": "INSIGHT",
    "segment_name": "📈 Key insight",
    "color": "#10b981",
    "line": "nvda-segment",
    "year": 2026,
    "category": "sovereign_examples",
    "value": null,
    "unit": null,
    "grade": "B",
    "source_url": "https://semianalysis.com/",
    "source_date": "2026-Q1",
    "notes": "**Sovereign AI 訂單列表**（已揭露或公開合約）: Saudi Humain $20B + + UAE $10B+ + 日本 SoftBank/Stargate Japan + 印度 Yotta+Reliance Jio + 韓國 Naver+SK Hynix + 歐洲多國 sovereign cloud + 加拿大 (Cohere)。**2025-2027 是 Sovereign AI 起飛期**。"
  }
];

const SEGMENTS = [
  { id: 'csp_hyperscaler',   name: '🟦 CSP/Hyperscaler',     color: '#3b82f6', short: 'CSP' },
  { id: 'consumer_internet', name: '🟪 Consumer Internet',   color: '#8b5cf6', short: 'Consumer' },
  { id: 'enterprise_onprem', name: '🟧 Enterprise On-prem',  color: '#f59e0b', short: 'Enterprise' },
  { id: 'sovereign_ai',      name: '🟥 Sovereign AI',         color: '#ef4444', short: 'Sovereign' },
  { id: 'neocloud',          name: '🟢 Neocloud',             color: '#10b981', short: 'Neocloud' },
];

const GRADE_COLORS = { A:'#10b981', B:'#3b82f6', C:'#f59e0b', D:'#ef4444' };
const state = { filters: { segment:'all', year:'all', grade:'all' }, search:'' };

function fmtVal(r) {
  if (r.value == null) return '—';
  switch (r.unit) {
    case 'USD_B':   return '$' + r.value + 'B';
    case 'percent': return r.value + '%';
    default: return r.value;
  }
}

function sanitize(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return DATA.filter(d => {
    if (state.filters.segment !== 'all' && d.segment !== state.filters.segment) return false;
    if (state.filters.year !== 'all' && String(d.year) !== state.filters.year) return false;
    if (state.filters.grade !== 'all' && d.grade !== state.filters.grade) return false;
    if (q) {
      const hay = [d.segment_name, d.category, d.notes].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getRev(seg, year) {
  const r = DATA.find(x => x.segment === seg && x.category === 'revenue' && x.year === year);
  return r ? r.value : 0;
}

function getShare(seg, year) {
  const r = DATA.find(x => x.segment === seg && x.category === 'share' && x.year === year);
  return r ? r.value : 0;
}

function getTotal(year) {
  const r = DATA.find(x => x.segment === 'TOTAL' && x.category === 'datacenter_total' && x.year === year);
  return r ? r.value : 0;
}

function renderStats() {
  const total2025 = getTotal(2025);
  const total2027 = getTotal(2027);
  const localShare2023 = getShare('enterprise_onprem', 2023) + getShare('sovereign_ai', 2023);
  const localShare2027 = getShare('enterprise_onprem', 2027) + getShare('sovereign_ai', 2027);
  document.getElementById('stat-total-2025').textContent = '$' + total2025 + 'B';
  document.getElementById('stat-total-2027').textContent = '$' + total2027 + 'B';
  document.getElementById('stat-local-share').textContent = localShare2023 + '% → ' + localShare2027 + '%';
  document.getElementById('stat-csp-share').textContent = getShare('csp_hyperscaler', 2023) + '% → ' + getShare('csp_hyperscaler', 2027) + '%';
  document.getElementById('dp-count').textContent = getFiltered().length;
}

/* Chart 1: Stacked area chart 2023-2027 - revenue by segment */
function renderStackedAreaChart() {
  const c = document.getElementById('stacked-chart');
  c.innerHTML = '';
  const W = 880, H = 440, PAD = 60;
  const years = [2023, 2024, 2025, 2026, 2027];
  const yMax = 400;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">NVIDIA Datacenter Revenue Stacked by Segment ($USD B, 2023-2027F)</text>');
  // Y axis
  for (let i = 0; i <= 4; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 4;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">$' + (yMax / 4 * i).toFixed(0) + 'B</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  // Forecast boundary line (between 2025 and 2026)
  const xBoundary = PAD + 2.5 * xStep;
  svg.push('<line x1="' + xBoundary + '" y1="' + PAD + '" x2="' + xBoundary + '" y2="' + (H - PAD) + '" stroke="#888" stroke-dasharray="3,3" stroke-opacity="0.4"/>');
  svg.push('<text x="' + xBoundary + '" y="' + (PAD - 6) + '" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.6">← actual / forecast →</text>');
  // Build cumulative stacks per year
  const stacks = years.map(y => {
    let cum = 0;
    return SEGMENTS.map(s => {
      const rev = getRev(s.id, y);
      const start = cum;
      cum += rev;
      return { start, end: cum };
    });
  });
  // For each segment, draw area
  for (let si = 0; si < SEGMENTS.length; si++) {
    const seg = SEGMENTS[si];
    const top = years.map((y, i) => [PAD + i * xStep, H - PAD - (stacks[i][si].end / yMax) * (H - 2 * PAD)]);
    const bottom = years.map((y, i) => [PAD + i * xStep, H - PAD - (stacks[i][si].start / yMax) * (H - 2 * PAD)]).reverse();
    const path = top.concat(bottom).map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polygon points="' + path + '" fill="' + seg.color + '" opacity="0.85"/>');
    // Label at right
    const lastTop = top[top.length - 1];
    const lastBottom = bottom[0];
    const yMid = (lastTop[1] + lastBottom[1]) / 2;
    if (lastBottom[1] - lastTop[1] > 14) svg.push('<text x="' + (lastTop[0] - 6) + '" y="' + (yMid + 4) + '" text-anchor="end" fill="white" font-size="11" font-weight="700">' + seg.short + ' $' + getRev(seg.id, 2027) + 'B</text>');
  }
  // X axis years
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  // Legend
  let lx = PAD;
  for (const s of SEGMENTS) {
    svg.push('<rect x="' + lx + '" y="' + (H - 14) + '" width="11" height="11" fill="' + s.color + '"/>');
    svg.push('<text x="' + (lx + 16) + '" y="' + (H - 5) + '" fill="currentColor" font-size="10">' + s.short + '</text>');
    lx += 145;
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 2: Share trend (5 lines, %) */
function renderShareTrendChart() {
  const c = document.getElementById('share-chart');
  c.innerHTML = '';
  const W = 800, H = 380, PAD = 60;
  const years = [2023, 2024, 2025, 2026, 2027];
  const yMax = 70;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="15" font-weight="600">Segment Share Evolution (% of Datacenter)</text>');
  for (let i = 0; i <= 7; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 7;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.1"/>');
    svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="10" opacity="0.7">' + (yMax / 7 * i).toFixed(0) + '%</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  for (const seg of SEGMENTS) {
    const points = years.map((y, i) => {
      const v = getShare(seg.id, y);
      return [PAD + i * xStep, H - PAD - (Math.min(v, yMax) / yMax) * (H - 2 * PAD), v];
    });
    const path = points.map(p => p[0] + ',' + p[1]).join(' ');
    svg.push('<polyline points="' + path + '" fill="none" stroke="' + seg.color + '" stroke-width="2.5" opacity="0.9"/>');
    for (const p of points) {
      svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + seg.color + '"/>');
    }
    const last = points[points.length - 1];
    svg.push('<text x="' + (last[0] + 6) + '" y="' + (last[1] + 4) + '" fill="' + seg.color + '" font-size="11" font-weight="600">' + seg.short + ' ' + last[2] + '%</text>');
  }
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 18) + '" text-anchor="middle" fill="currentColor" font-size="13" font-weight="500">' + years[i] + '</text>');
  }
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 3: YoY growth per segment 2027F */
function renderGrowthChart() {
  const c = document.getElementById('growth-chart');
  c.innerHTML = '';
  const W = 480, H = 360;
  const segs = SEGMENTS.map(s => {
    const r = DATA.find(x => x.segment === s.id && x.category === 'yoy_growth' && x.year === 2027);
    return { ...s, val: r ? r.value : 0 };
  }).sort((a, b) => b.val - a.val);
  const max = segs[0].val;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">2027F YoY Growth by Segment</text>');
  let yOff = 60;
  for (const s of segs) {
    const w = (s.val / max) * 320;
    svg.push('<text x="20" y="' + yOff + '" fill="currentColor" font-size="11" font-weight="500">' + s.short + '</text>');
    svg.push('<rect x="120" y="' + (yOff - 11) + '" width="' + w + '" height="14" fill="' + s.color + '" opacity="0.85" rx="2"/>');
    svg.push('<text x="' + (125 + w) + '" y="' + (yOff + 1) + '" fill="currentColor" font-size="11" font-weight="600">+' + s.val + '%</text>');
    yOff += 36;
  }
  svg.push('<text x="20" y="' + (H - 30) + '" fill="currentColor" font-size="11" font-weight="600">Sovereign + Enterprise 成長率最高</text>');
  svg.push('<text x="20" y="' + (H - 12) + '" fill="currentColor" font-size="10" opacity="0.7">→ Local AI 加速 catching up 的明確訊號</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

/* Chart 4: Local AI vs CSP gap closing */
function renderGapChart() {
  const c = document.getElementById('gap-chart');
  c.innerHTML = '';
  const W = 480, H = 360, PAD = 50;
  const years = [2023, 2024, 2025, 2026, 2027];
  const yMax = 70;
  const svg = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">'];
  svg.push('<text x="' + (W/2) + '" y="22" text-anchor="middle" fill="currentColor" font-size="14" font-weight="600">Local AI vs CSP — Gap Closing Story</text>');
  // Y axis
  for (let i = 0; i <= 7; i++) {
    const y = H - PAD - i * (H - 2 * PAD) / 7;
    svg.push('<line x1="' + PAD + '" y1="' + y + '" x2="' + (W - PAD) + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.1"/>');
    if (i % 2 === 0) svg.push('<text x="' + (PAD - 8) + '" y="' + (y + 4) + '" text-anchor="end" fill="currentColor" font-size="9" opacity="0.7">' + (yMax / 7 * i).toFixed(0) + '%</text>');
  }
  const xStep = (W - 2 * PAD) / (years.length - 1);
  // CSP line
  const cspPts = years.map((y, i) => {
    const v = getShare('csp_hyperscaler', y);
    return [PAD + i * xStep, H - PAD - (v / yMax) * (H - 2 * PAD), v];
  });
  // Local AI line (Enterprise + Sovereign)
  const localPts = years.map((y, i) => {
    const v = getShare('enterprise_onprem', y) + getShare('sovereign_ai', y);
    return [PAD + i * xStep, H - PAD - (v / yMax) * (H - 2 * PAD), v];
  });
  // Fill area between
  const cspPath = cspPts.map(p => p[0] + ',' + p[1]).join(' ');
  const localPath = localPts.slice().reverse().map(p => p[0] + ',' + p[1]).join(' ');
  svg.push('<polygon points="' + cspPath + ' ' + localPath + '" fill="#888" opacity="0.15"/>');
  svg.push('<polyline points="' + cspPath + '" fill="none" stroke="#3b82f6" stroke-width="3"/>');
  svg.push('<polyline points="' + localPts.map(p => p[0] + ',' + p[1]).join(' ') + '" fill="none" stroke="#f59e0b" stroke-width="3"/>');
  for (const p of cspPts) {
    svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#3b82f6"/>');
    svg.push('<text x="' + p[0] + '" y="' + (p[1] - 8) + '" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">' + p[2] + '%</text>');
  }
  for (const p of localPts) {
    svg.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#f59e0b"/>');
    svg.push('<text x="' + p[0] + '" y="' + (p[1] + 16) + '" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">' + p[2] + '%</text>');
  }
  // Gap labels
  for (let i = 0; i < years.length; i++) {
    const gap = cspPts[i][2] - localPts[i][2];
    const yMid = (cspPts[i][1] + localPts[i][1]) / 2;
    svg.push('<text x="' + cspPts[i][0] + '" y="' + yMid + '" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.6">' + gap + 'ppt</text>');
  }
  for (let i = 0; i < years.length; i++) {
    svg.push('<text x="' + (PAD + i * xStep) + '" y="' + (H - PAD + 16) + '" text-anchor="middle" fill="currentColor" font-size="11" font-weight="500">' + years[i] + '</text>');
  }
  svg.push('<rect x="50" y="' + (H - 22) + '" width="11" height="11" fill="#3b82f6"/><text x="65" y="' + (H - 13) + '" fill="currentColor" font-size="11">CSP/Hyperscaler</text>');
  svg.push('<rect x="200" y="' + (H - 22) + '" width="11" height="11" fill="#f59e0b"/><text x="215" y="' + (H - 13) + '" fill="currentColor" font-size="11">Local AI (Ent + Sov)</text>');
  svg.push('</svg>');
  c.innerHTML = svg.join('');
}

function renderFlatTable(rows) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  const segOrder = ['csp_hyperscaler','consumer_internet','enterprise_onprem','sovereign_ai','neocloud','TOTAL','INSIGHT'];
  const sorted = rows.slice().sort((a, b) => {
    const ai = segOrder.indexOf(a.segment), bi = segOrder.indexOf(b.segment);
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    if (a.year !== b.year) return a.year - b.year;
    return ({ A:0, B:1, C:2, D:3 }[a.grade] ?? 9) - ({ A:0, B:1, C:2, D:3 }[b.grade] ?? 9);
  });
  for (const r of sorted) {
    const tr = document.createElement('tr');
    const url = r.source_url && r.source_url.startsWith('http') ? r.source_url : null;
    tr.innerHTML = [
      '<td><span class="supplier-chip" style="border-color:' + (r.color || '#888') + ';color:' + (r.color || '#888') + '">' + sanitize(r.segment_name || r.segment) + '</span></td>',
      '<td>' + sanitize(r.category) + '</td>',
      '<td>' + r.year + '</td>',
      '<td><span class="grade-badge grade-' + r.grade + '">' + r.grade + '</span></td>',
      '<td class="col-rev">' + fmtVal(r) + '</td>',
      '<td class="col-dc" title="' + sanitize(r.notes || '') + '">' + sanitize((r.notes || '').slice(0, 80) + ((r.notes || '').length > 80 ? '…' : '')) + '</td>',
      '<td>' + sanitize(r.source_date || '') + '</td>',
      '<td>' + (url ? '<a href="' + sanitize(url) + '" target="_blank" rel="noopener">link</a>' : '—') + '</td>',
    ].join('');
    tbody.appendChild(tr);
  }
}

function renderAll() {
  const rows = getFiltered();
  renderStats();
  renderStackedAreaChart();
  renderShareTrendChart();
  renderGrowthChart();
  renderGapChart();
  renderFlatTable(rows);
}

function wireFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ['segment', 'year', 'grade'].forEach(k => {
        if (btn.dataset[k] !== undefined) {
          state.filters[k] = btn.dataset[k];
          document.querySelectorAll('[data-' + k + ']').forEach(b => b.classList.toggle('active', b === btn));
        }
      });
      renderAll();
    });
  });
  const input = document.getElementById('search-input');
  if (input) input.addEventListener('input', e => { state.search = e.target.value; renderAll(); });
}

function wireTheme() {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? '' : 'light';
    if (cur) document.documentElement.setAttribute('data-theme', cur);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', cur);
  });
}

document.addEventListener('DOMContentLoaded', () => { wireFilters(); wireTheme(); renderAll(); });
