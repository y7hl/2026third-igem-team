// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // 部署到 GitHub Pages 子路径
  base: "/2026third-igem-team/",

  plugins: [react()],

  build: {
    outDir: "dist", // 默认就是 dist，可省略
    rollupOptions: {
      // 🔑 关键：定义多个页面入口（MPA）
      input: {
        home: path.resolve(__dirname, "src/pages/Home-page/main.jsx"),
        hp: path.resolve(__dirname, "src/pages/HP-page/main.jsx"),
        model: path.resolve(__dirname, "src/pages/Model-page/main.jsx"),
        projects: path.resolve(__dirname, "src/pages/Projects-page/main.jsx"),
        team: path.resolve(__dirname, "src/pages/Team-page/main.jsx"),
        wetlab: path.resolve(__dirname, "src/pages/Wetlab-page/main.jsx"),
      },
      output: {
        // 控制输出文件名（可选，保持整洁）
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});