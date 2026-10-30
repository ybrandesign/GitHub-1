# feat: scaffold responsive designer portfolio with React and Vite

## 变更

原仓库只有 README。本变更建立可本地运行和构建的个人品牌设计师作品网站：Home、可分类筛选的 Work、About、四个数据驱动的作品详情页，以及无效路径回退。

视觉采用米白、黑与深灰，使用流式大标题、留白、细分隔线和灰色占位图。新增可复用作品卡片、图片占位组件与详情模板，支持手机单列和桌面双列布局，并补充键盘焦点、跳过导航与路由页面标题。

项目数据与页面分离，便于替换真实作品。README 包含启动、内容替换、路由和部署说明；GitHub Actions 在推送或 PR 时执行安装、测试与构建。

## 验证

- `npm install`：通过，已生成锁文件。
- `npm test`：9/9 通过。
- `npm run build`：通过。
- Chromium 在 320、375、768、1440px 下检查 9 条路径，开发与生产预览均通过。
- 筛选、详情刷新、前进后退、联系锚点和键盘跳转均通过，无控制台错误。
- `git diff --check`：通过。

## 后续使用

发布前替换示例姓名、作品、图片与联系方式。BrowserRouter 生产托管需要 SPA 回退。完整检查记录见 VALIDATION.md。
