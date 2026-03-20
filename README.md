# 1.克隆到本地

在git bush中输入：
cd 你想克隆到的地方

git clone https://github.com/y7hl/2026third-igem-team

# 2.修改代码

进入文件夹
git pull origin main
拉取代码，避免覆盖其他人的修改

### 查看改了哪些文件
git status

### 添加所有改动
git add .
也可以把 .改成修改的文件

### 提交（写清楚你做了什么）
git commit -m "feat(team): add Wang Wu to team page"

### 推送
git push origin main

## 更安全的方式：
### 创建自己的分支
git checkout -b feature/add-my-bio

### 修改、add、commit
git add .
git commit -m "feat: add my bio"

### 推送分支
git push origin feature/add-my-bio

# 3.资源管理
```bash
2026third-igem-team
public
    favicon.ico
    Team.html
src
    static
        images
        icons
        media
    pages
        Home
            main.jsx
            Home.jsx
        Project
…………………………………………
    components
        layout
            Header.jsx
            Footer.jsx
            Navigation.jsx
        ui
            Button.jsx
            Card.jsx
    styles
vite.config.js
package.json
README.md
```

## 结构说明
public/.html/
多页面入口

src/static/
存放无需构建处理的静态资源，如网站图标（favicon.ico）和全局媒体文件（图片、视频等）。

src/pages/
每个子目录代表一个独立页面（MPA架构），每个页面拥有自己的入口文件 main.jsx 和主组件。
Vite 支持通过配置多入口（multi-entry）实现 MPA，每个 main.jsx 负责挂载对应页面的 React 应用到 HTML 模板中。
页面之间彼此独立，有利于按需加载、SEO 优化和 iGEM 审查时的清晰结构。

src/components/layout/
存放跨页面复用的布局类组件，如顶部导航栏（Header）、底部信息（Footer）和主导航菜单（Navigation）。
这些组件通常被多个页面导入，确保视觉与交互一致性。

src/components/ui/
原子化 UI 组件库，如按钮、卡片、图表容器、模态框、函数等。

src/styles/
便于维护统一的设计语言，并支持未来扩展深色模式或多主题。

vite.config.js
配置 Vite 的多页入口（build.rollupOptions.input），将 src/pages/*/main.jsx 映射为独立 HTML 输出（如 project.html, team.html）。
可同时配置别名（如 @/components）、环境变量、静态资源处理等。

其他根目录文件
package.json：定义依赖、脚本命令（如 dev, build, preview）；
README.md：项目简介、本地开发指南、部署说明，对 iGEM 评审和开源协作非常重要。