/**
 * spec_db.js — 元件規格備用資料庫 (Local Fallback)
 *
 * Phase 1：使用此本機 JSON 作為元件規格來源
 * Phase 2：將改為從 Firebase Firestore 讀取（由 Component Spec Generator 維護）
 *
 * 欄位說明：
 *   match_key         — 用於比對 FloTHERM Object Name 的關鍵字（部分字串包含比對）
 *   component_display — 報告中顯示的元件名稱
 *   spec_type         — 'Tj'（接面溫度）或 'Tc'（外殼溫度），決定讀取哪欄數值
 *   spec_value_c      — 溫度上限規格 (°C)
 *   power_w           — 每顆功耗 (W)
 *   board_type        — 所屬板別：'RF' | 'Digital' | 'PWR'
 *   note              — 備注
 */
const SPEC_DB_FALLBACK = [
  // ── RF Board ──────────────────────────────────────────────────────────────
  {
    match_key: "GTRB384608",
    component_display: "GTRB384608FC-Final",
    spec_type: "Tj",
    spec_value_c: 225,
    power_w: 5.2,
    board_type: "RF",
    note: "Tj max 225°C, product qualification at 225°C"
  },
  {
    match_key: "B11G3338N81D",
    component_display: "B11G3338N81D-Driver",
    spec_type: "Tj",
    spec_value_c: 200,
    power_w: 2.5,
    board_type: "RF",
    note: ""
  },
  {
    match_key: "BTS6201U",
    component_display: "BTS6201U-PreDriver",
    spec_type: "Tc",
    spec_value_c: 115,
    power_w: 0.5,
    board_type: "RF",
    note: "Tc max 115°C per datasheet"
  },
  {
    match_key: "Circulator",
    component_display: "Circulator",
    spec_type: "Tc",
    spec_value_c: 85,
    power_w: 0.8,
    board_type: "RF",
    note: ""
  },

  // ── Digital Board ──────────────────────────────────────────────────────────
  {
    match_key: "FPGA",
    component_display: "FPGA (xczu67dr)",
    spec_type: "Tj",
    spec_value_c: 100,
    power_w: 15.0,
    board_type: "Digital",
    note: ""
  },
  {
    match_key: "Si5518",
    component_display: "Si5518",
    spec_type: "Tj",
    spec_value_c: 125,
    power_w: 0.5,
    board_type: "Digital",
    note: ""
  },
  {
    match_key: "DDR4",
    component_display: "DDR4",
    spec_type: "Tj",
    spec_value_c: 95,
    power_w: 2.0,
    board_type: "Digital",
    note: ""
  },

  // ── Power Board ───────────────────────────────────────────────────────────
  {
    match_key: "H48SA50030NRDH",
    component_display: "H48SA50030NRDH",
    spec_type: "Tc",
    spec_value_c: 96,
    power_w: 10.0,
    board_type: "PWR",
    note: ""
  }
];
