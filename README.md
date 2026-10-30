# Y. — 个人品牌设计师作品集

基于 React 19、Vite 7、React Router 7 和原生现代 CSS 的个人作品网站基础项目。采用米白、黑色和深灰、大字号、留白、细线和满幅灰色占位图，无复杂动画。无需后端与环境变量。

> 姓名、个人介绍与项目均为可替换的示例；不代表真实客户案例。联系方式保留明确的待完善提示，发布前请填写。

## 本地运行

需要 Node.js 22.12+（22.x）或 Node.js 24+，以及 npm。

```bash
npm ci
npm run dev
```

打开终端输出的本地地址（默认 `http://localhost:5173`）。首次开发也可用 `npm install`；仓库提交 `package-lock.json` 以保证可复现安装。

```bash
npm test         # 页面、导航、筛选、项目切换和无效路径测试
npm run build    # 生产构建，输出 dist/
npm run preview  # 预览生产构建，默认 http://localhost:4173
```

## 页面与路由

| 路径 | 内容 |
| --- | --- |
| `/` | Home：品牌介绍、精选作品、设计理念 |
| `/work` | Work：全部作品与类型筛选 |
| `/about` | About：个人介绍、设计方向与联系方式占位 |
| `/about#contact` | About 的联系方式区块 |
| `/work/:slug` | 共用作品详情模板：概述、挑战、思路、呈现、图集、下一项目 |
| 其他路径 / 不存在的项目 | 404 视图与返回入口 |

示例详情：`/work/forma`、`/work/still`、`/work/field-notes`、`/work/common-ground`。

## 项目结构

```text
src/
  components/
    Layout.jsx          # 导航、页脚、跳过导航、切换页面后的焦点与滚动
    Artwork.jsx         # 图片占位与说明
    ProjectCard.jsx     # 可复用作品卡片
  data/projects.js      # 项目数据（slug、标题、类型、年份、描述等）
  pages/
    Home.jsx
    Work.jsx
    About.jsx
    ProjectDetail.jsx   # 数据驱动的详情页模板
    NotFound.jsx
  App.jsx               # 路由与页面标题
  main.jsx
  styles.css            # 全局变量、布局与响应式断点
public/
  images/placeholder.svg
  favicon.svg
tests/
  routes.test.jsx       # 实际渲染与交互测试
```

## 替换内容

1. 在 `src/data/projects.js` 编辑或添加作品。每个 `slug` 必须唯一，卡片、列表类型筛选、详情页和下一项目链接会同步更新。首页展示前三个项目。
2. 在 `src/components/Artwork.jsx` 将占位图片改为真实图片，按需扩展项目数据的封面与图集字段，并填写描述性 `alt`。本地素材放在 `public/images/`，路径如 `/images/forma-cover.webp`。
3. 在 `Home.jsx`、`About.jsx`、`Layout.jsx` 中更新姓名、品牌文案与联系信息；在 `index.html` 和 `App.jsx` 更新网站描述、标题，在 `public/favicon.svg` 更新标记。
4. 在 `styles.css` 调整 `--paper`、`--ink`、`--gutter` 等变量。

## 响应式与无障碍

- 大屏双列作品网格、首页满幅精选作品；600px 及以下改为单列，900px 处调整辅助布局。
- 流式标题、弹性间距与满宽图片；不依赖外部图片服务或字体服务。
- 语义化导航、当前页面标记、键盘焦点样式、跳转到主要内容、路由切换后聚焦主体。
- 筛选按钮公开选中状态与结果数量，支持系统减少动态效果偏好。

建议人工核对 375px、768px、1440px 下的所有页面，以及浏览器后退/前进、键盘 Tab/Enter、联系方式锚点和长标题。

## 部署注意

构建后的静态文件位于 `dist/`。本项目使用 `BrowserRouter`，生产托管需要将非静态资源请求回退到 `/index.html`，以支持直接打开与刷新 `/work/forma` 等路由。Vite 开发与预览服务器自带此回退行为。

部署到子目录时，请同时设置 `vite.config.js` 的 `base`、`BrowserRouter` 的 `basename`，并调整 `index.html` 和 `Artwork.jsx` 中以 `/` 开头的资源路径。默认 GitHub Pages 不提供 SPA 路由回退，不能只上传 `dist/` 后假设深层路径可刷新；可选用支持 rewrite 的托管平台，或另行采用 HashRouter。

## Pull Request 检查

提交源代码与锁文件，不提交 `node_modules/`、`dist/` 或本地临时文件。PR 模板位于 `.github/pull_request_template.md`。本次基础项目的安装、构建、路由测试与响应式检查结果见 `VALIDATION.md`。
