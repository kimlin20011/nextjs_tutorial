This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## todo

- Assets, Metadata, and CSS @5
  - https://www.nextjs.cn/learn/basics/assets-metadata-css/css-styling

## note

- install example app

  - `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
  - `cd nextjs-blog`
  - http://localhost:3000

- run the app

- `npm run dev`

## react compoment 部分

- 必須放在 pages 資料夾中
- 檔名就是路由的名字
- 要路由頁面可用 `Link`，導入`next/link` library

## CSS 部分

- nextjs 把 CSS module 視為 component-level styles
- 放在 components 資料夾裡面
- 結尾必須命名為`.module.css`

### 建立 global CSS file

- 在 pages 資料夾下面建立 `_app.js`
  - 輸入內容
  - 這個 component 會套用到各個前端的頁面
  - 加玩之後必須重新啟動 `npm run dev`
  - 在 `top level` 加入 `/styles/global.css`

### 加入 image

- 在 public 建立 images file

```
- meta tags (like og:image)
- Boolean home prop which will adjust the size of the title and the image
- “Back to home” link at the bottom if home is false
```
