# **GSAP x Three.js 滾動動畫探索幾何世界**

透過 **GSAP** 與 **Three.js** 打造的滾動動畫，探索幾何的起源、流動與創意構築。此專案展示了如何結合 3D 模型、粒子效果與滾動動畫，創造出流暢且互動性強的網頁體驗。

---

## **專案特色**

- **滾動動畫**：使用 GSAP 實現滾動觸發的 3D 模型旋轉與動畫效果。
- **3D 模型與粒子效果**：基於 Three.js，展示幾何模型與粒子系統的結合。
- **響應式設計**：支援桌面與手機裝置，確保在不同螢幕大小下的最佳顯示效果。
- **顏色控制面板**：提供用戶即時調整模型與粒子顏色的功能。
- **平滑滾動與互動**：結合 CSS 與 JavaScript，實現平滑滾動與互動效果。

---

## **專案結構**

```
threejs/
├── src/
│   ├── script.js          # 主程式邏輯 (Three.js 與 GSAP 整合)
│   ├── glass_active.js    # 導覽按鈕的滾動邏輯
│   ├── style.css          # 項目樣式
│   └── static/            # 靜態資源 (圖片、貼圖等)
├── index.html             # 主頁面
└── README.md              # 專案說明文件
```

---

## **安裝與使用**

### **1. 克隆專案**

```bash
git clone https://github.com/hsin501/GSAP-3.js_scroll_animation.git
cd threejs-scroll-animation
```

### **2. 安裝依賴**

確保已安裝 [Node.js](https://nodejs.org/)，然後執行以下命令：

```bash
npm install
```

### **3. 啟動開發伺服器**

```bash
npm run dev
```

開啟瀏覽器並訪問 `http://localhost:3000`。

---

## **功能說明**

### **1. 滾動觸發動畫**

- 使用 `GSAP` 實現滾動觸發的 3D 模型旋轉動畫。
- 每個滾動區段對應不同的幾何模型，並伴隨粒子效果。

### **2. 顏色控制面板**

- 提供用戶即時調整模型與粒子顏色的功能。
- 點擊右下角的調色盤按鈕可開啟顏色控制面板。

### **3. 響應式設計**

- 桌面版：3D 模型與粒子效果以最佳比例顯示。
- 手機版：模型與粒子自動縮放，確保不超出螢幕範圍。

---

## **技術細節**

### **1. Three.js**

- **3D 模型**：使用 `TorusGeometry`、`ConeGeometry` 與 `TorusKnotGeometry`。
- **粒子系統**：基於 `BufferGeometry` 與 `PointsMaterial` 實現。
- **相機與渲染器**：使用 `PerspectiveCamera` 與 `WebGLRenderer`。

### **2. GSAP**

- **滾動動畫**：使用 `gsap.to` 實現滾動觸發的模型旋轉效果。
- **平滑過渡**：結合 `ease` 參數實現平滑的動畫過渡。

### **3. 響應式設計**

- 使用 JavaScript 動態調整模型位置與縮放比例：
  ```javascript
  const isMobile = window.innerWidth < 768;
  mesh1.position.x = isMobile ? 0 : 2;
  ```

---

## **開發者指南**

### **1. 修改模型與粒子**

- **模型**：在 script.js 中修改 `TorusGeometry`、`ConeGeometry` 或 `TorusKnotGeometry` 的參數。
- **粒子數量**：調整 `particlesCount` 的值：
  ```javascript
  const particlesCount = 100; // 增加粒子數量
  ```

### **2. 自訂顏色**

- 修改 `initialMeshColor` 與 `initParticleColor` 的值：
  ```javascript
  const initialMeshColor = '#FF5733';
  const initParticleColor = '#33FF57';
  ```

### **3. 添加新滾動區段**

- 在 index.html 中新增一個 `<section>`：
  ```html
  <section class="section" id="section4">
    <div class="section-content">
      <h1>新區段</h1>
      <p>這是新區段的內容。</p>
    </div>
  </section>
  ```
- 在 script.js 中新增對應的模型與動畫邏輯。

---
