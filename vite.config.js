import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/2026third-igem-team/",

  plugins: [react()],

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "src/pages/Home-page/index.html"),
        hp: path.resolve(__dirname, "src/pages/HP-page/index.html"),
        model: path.resolve(__dirname, "src/pages/Model-page/index.html"),
        projects: path.resolve(__dirname, "src/pages/Projects-page/index.html"),
        team: path.resolve(__dirname, "src/pages/Team-page/index.html"),
        wetlab: path.resolve(__dirname, "src/pages/Wetlab-page/index.html"),
      },

      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});