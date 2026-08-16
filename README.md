# Grid-Vue-Shop

一個以 **Vue 2 + CSS Grid** 打造的線上購物網站練習專案，示範首頁形象頁、商品列表（含 API 串接、輪播圖）、關於我們、聯絡我們（含地圖）等常見電商頁面的排版與元件拆分。

🔗 Demo：https://SlienceAn.github.io/Grid-vue-shop

## 功能特色

- **首頁 News**：多宮格版面（CSS Grid）呈現形象/廣告內容區塊
- **商品列表 Production**
  - 左側分類目錄（Vuex 管理分類資料）
  - 上方輪播圖（Element UI `el-carousel`）
  - 商品卡片以 `axios` 向後端 API 拉取資料，並有讀取中 loading 狀態（`v-loading`）
- **關於我們 About**：公司歷史/沿革圖文頁
- **聯絡我們 Contact**：留言表單 + 內嵌 Leaflet 互動地圖（`vue2-leaflet`）
- **共用 Header / Footer**：導覽列、路由連結、搜尋框
- 使用 `vue-router` 做多頁面切換（`/`、`/production`、`/about`、`/contact`）

> 註：購物車（`Cart.vue`）目前僅為頁面骨架，尚未實作功能。

## 技術棧

| 分類 | 使用套件 |
|---|---|
| 核心框架 | [Vue 2](https://v2.vuejs.org/) (`^2.6.11`) |
| 路由 | [vue-router 3](https://v3.router.vuejs.org/) |
| 狀態管理 | [Vuex 3](https://v3.vuex.vuejs.org/) |
| UI 元件庫 | [Element UI](https://element.eleme.io/) |
| 地圖 | [Leaflet](https://leafletjs.com/) + [vue2-leaflet](https://github.com/vue-leaflet/vue2-leaflet) |
| HTTP | [Axios](https://axios-http.com/) |
| 樣式 | Sass（`node-sass`）、CSS Grid |
| 建置工具 | [Vue CLI 4](https://cli.vuejs.org/) |
| 部署 | [gh-pages](https://github.com/tschaub/gh-pages)（GitHub Pages） |

## 專案結構

```
src/
├── assets/              靜態圖片與全域樣式
├── components/
│   ├── index.vue        商品列表頁（分類 + 輪播圖 + 商品卡）
│   ├── New.vue           首頁形象頁
│   ├── About.vue         關於我們
│   ├── Contact.vue       聯絡我們（表單 + 地圖）
│   ├── Cart.vue           購物車（尚未實作）
│   └── static/
│       ├── Header.vue    共用頁首/導覽列
│       ├── Footer.vue    共用頁尾
│       └── ShopList.vue  商品卡片列表（串接 API）
├── vuex/
│   └── store.js          Vuex store（分類、輪播圖、購物車資料）
├── route.js               路由設定
├── App.vue                根元件
└── main.js                應用程式進入點
```

## 快速開始

安裝依賴：

```bash
npm install
```

啟動開發伺服器（含熱重載）：

```bash
npm run serve
```

打包正式版本：

```bash
npm run build
```

程式碼檢查：

```bash
npm run lint
```

部署到 GitHub Pages：

```bash
npm run deploy
```

### 更多設定

參考 [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)。
