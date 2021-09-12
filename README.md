# next js 學習 demo

- [教學文檔](https://github.com/vercel/next-learn/tree/master/basics)

## todo

## note

- install example app

  - `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
  - `cd nextjs-blog`
  - http://localhost:3000

- run the app

- `npm run dev`
  or
- `yarn dev`

## react compoment 部分

- 必須放在 pages 資料夾中
- 檔名就是路由的名字
- 要路由頁面可用 `Link`，導入`next/link` library

## CSS 部分

> [some tips](https://www.nextjs.cn/learn/basics/assets-metadata-css/styling-tips)

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

## Pre-rendering and Data Fetching

### Two Forms of Pre-rendering 比較

- Static Generation
  - 在使用者 request 前先 render 所有 data
  - 適用於不常刷新的頁面
  - 較快，但資料同步不即時
- Server-side Rendering
  - 在使用者 request 時 render data
  - 適用於需要長刷新的頁面
  - 較慢，但資料較為即時
- Static Generation with data 支援

### 建立 data 資料

- 在 top level 建立 posts 資料夾
- 建立兩個 file `pre-rendering.md` and `ssg-ssr.md`
- top containing title and date.
  - 這叫做 YAML Front Matter, 我們可以使用 library called gray-matter 來解析
- 在 top level 建立`lib`資料夾
  - 建立`posts.js`
- 在 index.js import `import { getSortedPostsData } from '../lib/posts'`

- 從外部 API 或資料庫取得資料方式
  - https://www.nextjs.cn/learn/basics/data-fetching/getstaticprops-details
- `getStaticProps`只允許用於 pages 中的 file

## 動態路由

- 在 pages/posts 建立 [id].js
- 在 lib/post.js 中 新增 `getAllPostIds` function
- getStaticProps({ params })
  params key 是從 檔案名稱來的

### render markdown content

- 透過`remark` library 來渲染 markdown
  - npm install remark remark-html
