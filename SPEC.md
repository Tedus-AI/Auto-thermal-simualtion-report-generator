# 底圖模板準備 Checklist
## 熱流報告生成器 — 一次性人工作業

**目的**：將現有的完整報告 PPTX 改造成程式可讀取的標準模板  
**預計作業時間**：30 ~ 60 分鐘  
**完成後**：此模板不再手動修改，由程式接管所有內容填入

---

## STEP 0：建立模板檔案

- [ ] 取一份**完整的現有報告 PPTX**（建議用 StarkCore 12L 這份）
- [ ] 另存新檔，命名為 `template_RRU_thermal_sim.pptx`
- [ ] 後續所有操作在這份新檔進行，**不要動到原始報告**

---

## STEP 1：清除所有舊內容（換成 Placeholder 文字）

開啟模板，逐頁把**數字、名稱、日期**等會隨案子變動的文字，改成識別用的 placeholder 字串。

> 操作方式：直接在 PPT 中點選文字框 → 改文字

### 封面頁（第 1 頁）
- [ ] 報告標題 → `{{project_name}}`
- [ ] 作者 → `{{author}}`
- [ ] 日期 → `{{date}}`
- [ ] Note 欄 → `{{note}}`
- [ ] Customer 欄 → `{{customer}}`

### Boundary Conditions 頁（第 2 頁）
- [ ] 流型文字 → `{{flow_type}}`
- [ ] 環境溫度數字 → `{{ambient_temp_c}}`
- [ ] 安裝方式 → `{{installation}}`
- [ ] 尺寸 L → `{{size_l_mm}}`
- [ ] 尺寸 W → `{{size_w_mm}}`
- [ ] 尺寸 H → `{{size_h_mm}}`
- [ ] 體積 → `{{product_volume_l}}`

### Power Dissipation Overview 頁（第 3 頁）
- [ ] Digital Board 功耗大數字 → `{{digital_pd_w}}`
- [ ] Power Module 功耗大數字 → `{{pwr_pd_w}}`
- [ ] RF Board 功耗大數字 → `{{rf_pd_w}}`
- [ ] Total Pd 數字 → `{{total_pd_w}}`
- [ ] 條件標注（@45°C Backoff 1dB TDD 75%）→ `{{pd_condition}}`

### Simulation Result — RF/B 頁（第 7 頁）
表格中每個元件的數據欄位：
- [ ] GTRB Final-1 ~ 4 的 Pd → `{{rf_final1_pd}}` ... `{{rf_final4_pd}}`
- [ ] GTRB Final-1 ~ 4 的 Spec Tj → `{{rf_final1_spec}}` ...
- [ ] GTRB Final-1 ~ 4 的 Sim Tj → `{{rf_final1_sim}}` ...
- [ ] GTRB Final-1 ~ 4 的 Margin → `{{rf_final1_margin}}` ...
- [ ] Driver、PreDriver、Circulator 同上規則

### Simulation Result — Digital/B 頁（第 10 頁）
- [ ] FPGA Pd / Spec / Sim / Margin → `{{dig_fpga_pd}}` 等
- [ ] Si5518 / DDR4 同上

### Simulation Result — PWR/B 頁（第 12 頁）
- [ ] H48SA Pd / Spec Tc / Sim Tc / Margin → `{{pwr_h48sa_pd}}` 等

> **技巧**：placeholder 命名只要「望文知義」就好，後續程式對應時用完全比對，不模糊匹配

---

## STEP 2：命名所有圖片物件（最重要的步驟）

> **操作路徑**：常用工具列 → 選取窗格（或 常用 → 排列 → 選取窗格）  
> 找到圖片物件 → 雙擊名稱 → 改成下表規定的名稱

每頁需要命名的圖片：

| 頁面 | Shape 名稱 | 圖片內容說明 |
|------|-----------|-------------|
| 封面 | `img_cover_3d` | 產品 3D 外觀圖 |
| Boundary Conditions | `img_dim_3d` | 3D 爆炸圖 |
| Boundary Conditions | `img_dim_front` | 正面尺寸視圖 |
| Boundary Conditions | `img_dim_side` | 側面尺寸視圖 |
| IC Placement Digital | `img_dig_placement` | Digital/B PCB 佈局 |
| IC Placement Digital | `img_pwr_placement` | PWR/B PCB 佈局 |
| IC Placement RF | `img_rf_placement_top` | RF/B PCB Top 面佈局 |
| IC Placement RF | `img_rf_placement_bot` | RF/B PCB Bottom 面佈局 |
| IC Placement GTRB Coin | `img_rf_coin_detail` | Coin 尺寸與 stack 示意 |
| Sim Result RF/B | `img_rf_sim_result` | RF 元件溫度標注圖 |
| Sim Result RF/B | `img_circulator_dist` | Circulator 溫度分佈 |
| RF PCB Temp | `img_rf_pcb_temp` | RF PCB 溫度雲圖 |
| Air Temp RF/B | `img_rf_section_pos` | 截面位置示意圖 |
| Air Temp RF/B | `img_rf_air_temp` | 空氣溫度分佈截面圖 |
| Sim Result Digital/B | `img_dig_sim_result` | Digital/B 溫度標注圖 |
| Sim Result Digital/B | `img_dig_pcb_temp` | Digital PCB 溫度雲圖 |
| Air Temp Digital/B | `img_dig_section_pos` | 截面位置示意圖 |
| Air Temp Digital/B | `img_dig_air_temp` | 空氣溫度分佈截面圖 |
| Sim Result PWR/B | `img_pwr_sim_result` | PWR/B 溫度標注圖 |
| Sim Result PWR/B | `img_pwr_thermal_curve` | H48SA thermal curve 圖 |
| Temp Dist front/rear | `img_temp_dist_front` | 整體溫度分佈：正面 |
| Temp Dist front/rear | `img_temp_dist_rear` | 整體溫度分佈：背面 |
| Temp Dist side | `img_temp_dist_side1` | 整體溫度分佈：左側面 |
| Temp Dist side | `img_temp_dist_side2` | 整體溫度分佈：右側面 |
| Rear HSK | `img_rear_hsk_inside` | Rear HSK 內部視圖 |
| Rear HSK | `img_rear_hsk_3d` | Rear HSK 3D 視圖 |

> **注意**：選取窗格中，PowerPoint 預設名稱是 "Picture 3" 這類，要改成上表的 `img_xxx` 格式

---

## STEP 3：命名所有文字框物件（選做，可用 placeholder 文字替代）

文字框的識別方式有兩種，選一種即可：

**方式 A（建議）**：用 placeholder 字串識別，程式搜尋含 `{{xxx}}` 的文字框並取代  
**方式 B**：在選取窗格也幫文字框命名，例如 `txt_project_name`

> 建議用方式 A，因為 STEP 1 已經改好 placeholder，程式直接掃描取代即可，不需要額外命名文字框

---

## STEP 4：確認頁面順序與數量

- [ ] 確認共 16 頁，順序與規格表 Section 5.1 一致
- [ ] 各頁的**頁碼文字**（右下角的 2, 3, 4...）由程式自動填入，不需手動處理
- [ ] 結尾頁維持 "Smarter. Greener. Together." 固定文字，不加 placeholder

---

## STEP 5：驗收確認

完成後用以下方式快速驗收：

- [ ] 在 PowerPoint 的「選取窗格」中，確認所有圖片物件名稱都以 `img_` 開頭
- [ ] 使用 Ctrl+H（取代），搜尋 `{{`，確認所有 placeholder 都有對應的結束 `}}`
- [ ] 存檔，放到專案根目錄：`template_RRU_thermal_sim.pptx`

---

## 完成後的目錄結構

```
thermal_report_generator/
├── template_RRU_thermal_sim.pptx   ← 你完成的模板（程式讀取用）
├── spec_db.json                    ← 本機元件規格 fallback
├── run.py                          ← 主程式
│
└── project_StarkCore_12L/          ← 每個案子一個資料夾
    ├── config.yaml
    ├── flotherm_result.csv
    └── images/
        ├── cover_3d.png
        ├── rf_sim_result.png
        └── ...
```

---

*模板完成後只需做一次，之後每個新案子只要準備 config.yaml + flotherm_result.csv + images/ 即可。*

---

# 熱流模擬報告自動化生成器
## 開發前期規格表 v1.2

**文件撰寫：** Tedus.chen | AMSBD  
**建立日期：** 2026/03/11  
**版本狀態：** 開發前期討論稿

---

## 1. 系統目標與效益

### 1.1 背景與動機
目前熱流模擬報告的製作流程為：複製前一個案子的 PPTX → 逐頁替換截圖 → 手動修改數據表格與結論文字。此流程耗時且容易因人為疏失造成殘留舊數據或圖片配置錯位等問題。

### 1.2 目標
開發一套基於 Python 的自動化腳本（CLI 或輕量 GUI），能將工程師準備好的模擬截圖與數據，按照 Delta 企業視覺規範（底圖模板），一鍵組裝成標準化的熱流模擬分析報告（PPTX）。

### 1.3 效益
| 面向 | 現況 | 目標 |
|------|------|------|
| 報告製作時間 | 0.5 ~ 2 小時/份 | < 5 分鐘/份 |
| 人工 Key-in 錯誤 | 偶發（數字殘留、漏改） | 接近零 |
| 格式一致性 | 依個人習慣浮動 | 100% 符合企業規範 |
| 可追溯性 | 版本散落 | 輸入檔案版控即等於報告版控 |

---

## 2. 範圍界定

### 2.1 In-Scope（本版本涵蓋）
- 讀取工程師填寫的**專案設定檔**（Excel 或 YAML）
- 讀取**標準化命名的截圖資料夾**，依規則套入對應 PPT 圖框
- 讀取 FloTHERM 匯出的**溫度結果 Excel**，自動計算 Margin
- 對照內建的**元件 Spec 規格資料庫**，進行 Pass/Fail 判定
- 依照固定報告頁面結構，產出符合 Delta 底圖的 **PPTX**

### 2.2 Out-of-Scope（本版本不涵蓋）
- FloTHERM 模型的自動執行或結果匯出（工程師仍需手動跑完模擬）
- 報告的 AI 自動撰寫結論文字（預留人工微調空間）
- 多案子批次處理
- 網頁化 UI（本版本為 CLI 或本機輕量 GUI）

---

## 3. 輸入規格（Data Inputs）

### 3.1 專案設定檔（Project Config）
格式：Excel（`.xlsx`）或 YAML（`.yaml`），工程師每案填寫一次。

| 欄位名稱 | 說明 | 範例 |
|----------|------|------|
| `project_name` | 報告標題 | StarkCore Sub6 outdoor thermal simulation (12L) |
| `author` | 作者 | Tedus.chen \| AMSBD |
| `date` | 日期 | 02/12/2026 |
| `customer` | 客戶名稱（可空白） | - |
| `ambient_temp_c` | 環境溫度 | 45 |
| `external_velocity` | 外部風速 | 0 m/s |
| `flow_type` | 對流方式 | Natural Convection (Fanless) |
| `installation` | 安裝方式 | Pole mount |
| `product_size_mm` | 產品尺寸 LxWxH | 339 x 272 x 130 |
| `product_volume_l` | 體積（含防水結構） | 11.98 |
| `tdd_ratio` | TDD 比例 | 75% |
| `backoff_db` | Backoff 設定 | 1dB |

### 3.2 FloTHERM 數據匯出檔（Raw Data CSV/Excel）
- **來源**：FloTHERM Query Export，工程師手動匯出
- **支援格式**：`.csv` 或 `.xlsx`，固定命名為 `flotherm_result.csv / .xlsx`
- **實際欄位名稱**（以確認的匯出格式為準）：

| 欄位名稱 | 說明 |
|----------|------|
| `Object Name` | 元件名稱，例如 `GTRB384608-Final-1` |
| `Hottest Junction Temperature (°C)` | 最高接面溫度 Tj |
| `Case Temperature (°C)` | 外殼溫度 Tc |

- **實際數據範例**：
```
Object Name                        | Tj (°C)     | Tc (°C)
GTRB384608-Final-1                 | 183.74       | 174.98
GTRB384608-Final-2                 | 187.55       | 178.37
B11G3338N81D-Driver-1              | 127.90       | 126.10
BTS6201U-PreDriver-1               | 119.13       | 117.60
```

- **比對邏輯**：程式使用 `match_key`（部分字串包含）對應元件，例如 `GTRB384608` 可同時匹配 `-Final-1` 到 `-Final-4`
- **Tj vs Tc 選擇**：由 Component Spec DB 中的 `spec_type` 欄位決定每個元件要用哪欄比對

### 3.3 截圖資料夾（Image Assets）
所有截圖統一放在 `images/` 子資料夾，**嚴格遵守命名規則**，程式依檔名自動對應至 PPT 的圖框位置。

| 截圖代號 | 檔名範例 | 對應頁面/位置 |
|----------|----------|---------------|
| `cover_3d` | `cover_3d.png` | 封面 3D 視圖 |
| `dim_front` | `dim_front.png` | 邊界條件頁：前視圖尺寸 |
| `dim_side` | `dim_side.png` | 邊界條件頁：側視圖尺寸 |
| `dim_3d` | `dim_3d.png` | 邊界條件頁：3D 爆炸圖 |
| `dig_placement` | `dig_placement.png` | Digital/B PCB 佈局 |
| `pwr_placement` | `pwr_placement.png` | PWR/B PCB 佈局 |
| `rf_placement_top` | `rf_placement_top.png` | RF/B PCB Top 佈局 |
| `rf_placement_bot` | `rf_placement_bot.png` | RF/B PCB Bottom 佈局 |
| `rf_sim_result` | `rf_sim_result.png` | RF/B 模擬溫度分佈 |
| `rf_pcb_temp` | `rf_pcb_temp.png` | RF PCB 溫度分佈 |
| `rf_air_temp` | `rf_air_temp.png` | RF/B 附近空氣溫度截面 |
| `dig_sim_result` | `dig_sim_result.png` | Digital/B 模擬溫度分佈 |
| `dig_pcb_temp` | `dig_pcb_temp.png` | Digital/B PCB 溫度 |
| `dig_air_temp` | `dig_air_temp.png` | Digital/B 附近空氣溫度截面 |
| `pwr_sim_result` | `pwr_sim_result.png` | PWR/B 模擬溫度分佈 |
| `temp_dist_front` | `temp_dist_front.png` | 整體溫度分佈：正面 |
| `temp_dist_rear` | `temp_dist_rear.png` | 整體溫度分佈：背面 |
| `temp_dist_side1` | `temp_dist_side1.png` | 整體溫度分佈：側面 1 |
| `temp_dist_side2` | `temp_dist_side2.png` | 整體溫度分佈：側面 2 |
| `rear_hsk_inside` | `rear_hsk_inside.png` | Rear HSK 內部視圖 |
| `rear_hsk_3d` | `rear_hsk_3d.png` | Rear HSK 3D 視圖 |

> **備注**：若某張圖片不存在，該圖框以灰色 placeholder 填入，並標示 `[IMAGE MISSING: <filename>]`，不影響其餘頁面生成。

---

## 4. 元件 Spec 規格資料庫（Component Spec Database）

### 4.1 資料來源優先順序（Firebase-First 架構）

本工具**不自行維護獨立的規格表**，而是直接對接 **Component Spec Generator** 工具寫入 Firebase 的資料。由 EE/RF 工程師透過 Component Spec Generator 上傳 datasheet → AI 解析 → 人工確認後寫入 Firebase，報告生成器直接讀取，確保兩端資料來源一致。

```
EE/RF 提供 datasheet
    ↓
[Component Spec Generator]（另一工具）
    ↓ AI 解析 + 人工確認
    ↓ 寫入 Firebase
  projects/{project_id}/rf_data      → Power(W), Limit_Tj(°C), R_jc
  projects/{project_id}/digital_data
  projects/{project_id}/pwr_data
    ↓ 報告生成器讀取
[熱流報告生成器（本工具）]
  → 以 Firebase 中的 Limit_Tj 作為 Spec 值計算 Margin
```

**資料來源優先順序：**
1. **Firebase**（優先）：從 `projects/{project_id}` 讀取，由 Component Spec Generator 維護
2. **本機 spec_db.json**（Fallback）：無 Firebase 連線或專案尚未建立時使用，工程師可手動維護

### 4.2 Firebase 欄位對應

Component Spec Generator 寫入的欄位中，報告生成器使用：

| Firebase 欄位 | 用途 | 對應報告欄位 |
|---------------|------|-------------|
| `component` | 元件識別名稱（match_key） | Object Name 比對 |
| `power_w` | 每顆功耗（W） | Pd/pcs 欄 |
| `limit_tj_c` | 溫度上限規格（°C） | Spec Tj/(Tc) 欄 |
| `spec_type` | `Tj` 或 `Tc`，決定讀哪欄溫度 | 決定用 Tj 或 Tc 比對 |
| `r_jc` | 熱阻（備用，不顯示於報告） | - |

### 4.3 本機 Fallback 格式（spec_db.json）

```json
[
  {
    "match_key": "GTRB384608",
    "component_display": "GTRB384608FC-Final",
    "spec_type": "Tj",
    "spec_value_c": 225,
    "note": "Tj max 225°C, product qual at 225°C"
  },
  {
    "match_key": "FPGA",
    "component_display": "FPGA (xczu67dr)",
    "spec_type": "Tj",
    "spec_value_c": 100,
    "note": ""
  },
  {
    "match_key": "B11G3338N81D",
    "component_display": "B11G3338N81D-Driver",
    "spec_type": "Tj",
    "spec_value_c": 200,
    "note": ""
  },
  {
    "match_key": "BTS6201U",
    "component_display": "BTS6201U-PreDriver",
    "spec_type": "Tc",
    "spec_value_c": 115,
    "note": "Tc max 115°C per datasheet"
  },
  {
    "match_key": "H48SA50030NRDH",
    "component_display": "H48SA50030NRDH",
    "spec_type": "Tc",
    "spec_value_c": 96,
    "note": ""
  }
]
```

### 4.4 Margin 計算與顏色規則

```
Margin (%) = (Spec - Sim) / Spec × 100%
```

| 狀態 | 條件 | 報告顯示顏色 |
|------|------|-------------|
| Pass | Margin ≥ 10% | 黑色 |
| Warning | 0% ≤ Margin < 10% | 橘色（⚠️） |
| Fail | Margin < 0% | 紅色（❌） |

---

## 5. 報告輸出結構（固定頁面配置 + 可選開關）

每份報告的頁面順序固定，對應底圖模板的三種版型：封面、內容頁、頁尾。  
工程師可在 `config.yaml` 的 `pages` 區段關閉不需要的頁面，程式自動跳過並重排頁碼。

### 5.1 頁面配置表

| 頁碼 | config key | 頁面名稱 | 底圖版型 | 主要自動填入內容 |
|------|-----------|----------|----------|-----------------|
| 1 | `cover` | 封面 | 封面版型 | 報告標題、作者、日期、Note/Customer |
| 2 | `boundary_conditions` | Boundary Conditions | 內容版型 | 流型、環境溫度、安裝方式、尺寸、3D 爆炸圖 |
| 3 | `power_overview` | Power Dissipation Overview | 內容版型 | Digital/PWR/RF 功耗數字、Total Pd |
| 4 | `digital_placement` | IC Placement – Digital/B & PWR/B | 內容版型 | PCB 佈局截圖、元件功耗表格 |
| 5 | `rf_placement` | IC Placement – RF/B（含 Coin 設定） | 內容版型 | RF PCB 佈局截圖、元件功耗表格 |
| 6 | `rf_coin_detail` | IC Placement – GTRB Coin 詳細 | 內容版型 | Coin 尺寸、GTRB 熱阻規格 |
| 7 | `rf_sim_result` | Simulation Result – RF/B | 內容版型 | 結果數據表格（Pd/Spec Tj/Sim Tj/Margin）|
| 8 | `rf_pcb_temp` | RF PCB Temperature | 內容版型 | RF PCB 溫度雲圖、結論文字 |
| 9 | `rf_air_temp` | Air Temp near RF/B | 內容版型 | 截面位置圖、空氣溫度分佈圖 |
| 10 | `digital_sim_result` | Simulation Result – Digital/B | 內容版型 | 結果數據表格、PCB 溫度圖 |
| 11 | `digital_air_temp` | Air Temp near Digital/B | 內容版型 | 截面位置圖、空氣溫度分佈圖 |
| 12 | `pwr_sim_result` | Simulation Result – PWR/B | 內容版型 | 結果數據表格、thermal curve 圖 |
| 13 | `temp_dist_frontback` | Temperature Distribution (front/rear) | 內容版型 | 正面/背面溫度雲圖 |
| 14 | `temp_dist_side` | Temperature Distribution (side views) | 內容版型 | 兩側面溫度雲圖 |
| 15 | `rear_hsk` | Temperature Distribution (Rear HSK) | 內容版型 | HSK 內部圖、3D 視圖 |
| 16 | `closing` | 結尾頁 | 頁尾版型 | 固定 "Smarter. Greener. Together." |

### 5.2 config.yaml 頁面開關範例

```yaml
pages:
  cover: true
  boundary_conditions: true
  power_overview: true
  digital_placement: true
  rf_placement: true
  rf_coin_detail: true       # 若本案無 Coin 設計可關閉
  rf_sim_result: true
  rf_pcb_temp: true
  rf_air_temp: true
  digital_sim_result: true
  digital_air_temp: true
  pwr_sim_result: true
  temp_dist_frontback: true
  temp_dist_side: true
  rear_hsk: true
  closing: true
```

---

## 6. 核心處理引擎（Automation Engine）

### 6.1 數據解析與計算
1. 讀取 `flotherm_result.xlsx`，以模糊匹配（`pandas` + 字串包含）找到對應元件
2. 從 Component Spec DB 查詢對應 `spec_value_c`
3. 計算 Margin，標記 Pass（黑字）/ Warning（橘字，Margin < 10%）/ Fail（紅字，Margin < 0）
4. 計算各子系統功耗加總，驗證是否吻合設定檔數值（差異 > 1% 時輸出警告）

### 6.2 圖片替換方式（Shape Name 定位法）

**確認機制**：你目前的報告修改方式是「右鍵 → 變更圖片 → 從剪貼簿」，代表底圖 PPTX 中**已有真實 Picture 物件**佔位在正確位置。python-pptx 可以直接找到這個圖片 Shape、替換其圖像資料，大小與座標完全保留。

**底圖準備工作（一次性）**：
在 PowerPoint 中，對每個圖片物件執行：
> 選取圖片 → 右鍵 → 大小及位置 → 替代文字（或選取窗格） → 改名稱

命名規則與截圖檔名一致，例如：

| Shape 名稱 | 對應圖片檔 |
|-----------|-----------|
| `img_rf_sim_result` | `rf_sim_result.png` |
| `img_dig_pcb_temp` | `dig_pcb_temp.png` |
| `img_rear_hsk_3d` | `rear_hsk_3d.png` |

**程式替換邏輯：**
```python
from pptx.util import Inches
from io import BytesIO

def replace_image_by_name(slide, shape_name, image_path):
    for shape in slide.shapes:
        if shape.name == shape_name and shape.shape_type == 13:  # 13 = Picture
            with open(image_path, 'rb') as f:
                img_blob = f.read()
            # 替換圖像，保留原始尺寸與位置
            pic = shape._element
            blip = pic.find('.//{http://schemas.openxmlformats.org/drawingml/2006/main}blip')
            rId = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            slide.part.related_parts[rId]._blob = img_blob
            return True
    return False  # Shape 不存在，記錄到 QC report
```

- 文字填入：以 `shape.name` 找到文字框，直接替換 `text_frame.paragraphs[0].runs[0].text`
- 結論文字：config 中可設定 `conclusion_override`，否則使用預設模板

### 6.3 品質檢查（Quality Check）
程式執行後輸出一份 `QC_report.txt`，列出：
- ✅ 成功帶入的圖片清單
- ⚠️ 缺圖清單（使用 placeholder 的頁面）
- ⚠️ 元件 Margin < 10% 警示
- ❌ 無法比對的元件名稱（需人工確認）

---

## 7. 專案目錄結構

```
thermal-report-generator/          ← GitHub repo
├── index.html                     ← 主程式（單一檔案，Phase 1 全在這）
├── spec_db.js                     ← 元件規格 fallback（JSON 格式）
└── assets/
    ├── slide_cover.png            ← 封面底圖（從 PPT 匯出）
    ├── slide_content.png          ← 內容頁底圖（從 PPT 匯出）
    └── slide_closing.png          ← 結尾頁底圖（從 PPT 匯出）
```

### 底圖 PNG 匯出方式（一次性作業）

> PowerPoint → 選取封面頁 → 另存新檔 → 選 PNG → 「僅此張投影片」  
> 重複三次，分別匯出封面、內容頁、結尾頁

**匯出解析度建議**：150 DPI 以上（PPT 預設匯出解析度即可）

---

## 8. 開發技術棧

**部署目標：GitHub Pages（純前端，無後端）**  
與 tool-spec-form、Component Spec Generator 同一套架構。

| 項目 | 選擇 | 說明 |
|------|------|------|
| 部署 | GitHub Pages | 純靜態，無伺服器 |
| 語言 | HTML + Vanilla JavaScript | 無框架，保持輕量 |
| PPTX 生成 | PptxGenJS | 瀏覽器端直接生成 PPTX |
| CSV 解析 | PapaParser（CDN） | 瀏覽器端解析 FloTHERM CSV |
| 元件 Spec DB | 內嵌 `spec_db.js`（JSON）| Phase 1 本機，Phase 2 接 Firebase |
| Firebase | Firestore SDK（CDN） | Phase 2 串接 Component Spec Generator |
| 視覺底圖 | 底圖頁面匯出為 PNG 作為背景圖 | 保留 Delta 企業視覺，疊加動態內容 |

### 底圖處理策略（關鍵）

因為無法在瀏覽器端修改現有 PPTX 模板內部結構，採用以下方式保留 Delta 視覺規範：

```
你操作（一次性）：
  用 PowerPoint 將每頁底圖另存成 PNG
  → slide_01_cover.png
  → slide_02_boundary.png
  → slide_03_power.png
  → ...（每種版型各一張）

程式運作：
  PptxGenJS 建立新 PPTX
  → 每頁以對應底圖 PNG 作為背景
  → 動態內容（文字、表格、截圖）疊加在上層
```

> 底圖只有三種版型（封面、內容頁、結尾頁），所以只需要匯出 3 張 PNG

---

## 9. 開發分階段計畫

### Phase 1（MVP）：核心功能，GitHub Pages 可用

**目標**：可以在瀏覽器上傳 CSV + 截圖，輸入基本資訊，下載出一份有 Delta 底圖的 PPTX。

**交付物：`index.html`（單一檔案）**

- [ ] **UI 骨架**：頁面分三區塊（專案設定、上傳截圖、生成按鈕）
- [ ] **FloTHERM CSV 上傳與解析**：PapaParser 讀取，欄位對應 `Object Name` / `Hottest Junction Temperature (°C)` / `Case Temperature (°C)`
- [ ] **元件比對與 Margin 計算**：`match_key` 模糊比對，Pass/Warning/Fail 顏色判定
- [ ] **比對結果預覽表格**：生成前先顯示，讓工程師確認數據正確再輸出
- [ ] **截圖上傳**：每個 `img_xxx` 對應一個上傳區塊，未上傳顯示灰色 placeholder
- [ ] **PPTX 生成**：PptxGenJS + 底圖 PNG 背景，疊加文字與截圖
- [ ] **頁面開關**：對應 Section 5.2 的 pages 開關（checkbox 控制）

### Phase 2：Firebase 串接
- [ ] 從 Firebase 讀取 `projects/{id}` 的元件規格，取代本機 spec_db
- [ ] 專案選擇下拉選單（讀 Firebase projects 清單）

### Phase 3：使用者體驗優化
- [ ] 記憶上次填寫的設定（sessionStorage）
- [ ] QC 報告顯示（缺圖警示、Margin 警示）
- [ ] 批次截圖上傳（資料夾拖拉）

---

## 10. 已知限制與風險

| 風險 | 說明 | 對策 |
|------|------|------|
| FloTHERM 匯出格式不固定 | 不同版本或設定可能改變 Excel 欄位名稱 | 在 config 中允許指定欄位名稱 |
| 截圖尺寸比例不一 | 工程師截圖解析度不同 | 等比縮放並在 QC report 中標示原始解析度 |
| 元件比對失敗 | Component Name 中英文混用或縮寫不同 | 支援別名 alias 設定，QC report 列出未比對項 |
| 底圖版型更新 | Delta 企業 VI 改版 | 底圖 PPTX 模板獨立維護，程式不 hardcode 座標 |

---

## 11. 與現有工具的串接架構

### 11.1 整體工具生態系

```
EE/RF 提供 datasheet
    ↓
┌─────────────────────────────────┐
│  Component Spec Generator       │  ← GitHub Pages 工具（已規劃）
│  AI 解析 datasheet → 人工確認   │
│  寫入 Firebase                  │
└────────────┬────────────────────┘
             ↓
    Firebase Firestore
    projects/{project_id}/
      ├── rf_data[]        Power(W), Limit_Tj, R_jc, match_key
      ├── digital_data[]
      └── pwr_data[]
             ↓
┌─────────────────────────────────┐
│  熱流報告生成器（本工具）        │  ← Python CLI 工具（本規格）
│  1. 選擇 project_id             │
│  2. 從 Firebase 讀取 Spec 值    │
│  3. 比對 FloTHERM 結果          │
│  4. 計算 Margin + 套入底圖      │
│  5. 輸出 PPTX                   │
└─────────────────────────────────┘
```

### 11.2 Firebase 讀取實作（Python）

```python
import firebase_admin
from firebase_admin import credentials, firestore

def load_spec_from_firebase(project_id):
    db = firestore.client()
    doc = db.collection('projects').document(project_id).get()
    if doc.exists:
        data = doc.to_dict()
        spec_db = []
        for board_type in ['rf_data', 'digital_data', 'pwr_data']:
            for item in data.get(board_type, []):
                spec_db.append({
                    'match_key':    item['component'],   # 用於 FloTHERM 比對
                    'spec_type':    item['spec_type'],   # 'Tj' or 'Tc'
                    'spec_value_c': item['limit_tj_c'],
                    'power_w':      item['power_w'],
                })
        return spec_db
    else:
        print(f"[WARNING] Firebase 無 {project_id} 資料，使用本機 spec_db.json")
        return load_local_spec_db()
```

### 11.3 config.yaml 新增 firebase 區段

```yaml
# Firebase 設定（與 Component Spec Generator 同一個 project）
firebase:
  enabled: true
  project_id: "your-firebase-project-id"   # Firebase project ID
  spec_project_id: "StarkCore-12L-2026"     # 對應 Firestore projects/{id}
  credential_path: "./firebase_key.json"    # Service Account 金鑰

# 若 firebase.enabled: false，使用本機 fallback
spec_db_fallback: "./spec_db.json"
```

### 11.4 未來可延伸的串接點

- **Volume-Evaluation-Tool**：從 Firebase 同一 `project_id` 讀取體積估算結果，交叉驗證功耗密度
- **AI 結論生成**：模擬結果 + 元件清單 → 呼叫 Gemini/Claude API 自動撰寫各頁結論段落
- **FloTHERM 直接解析**：省去手動匯出，直接讀取 `.flo` 結果檔（長期目標）

---

*本規格表為開發前期討論文件，內容將隨需求確認持續更新。*