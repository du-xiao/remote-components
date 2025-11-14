import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"), // 防止 process 报错
    }),
  ],
  build: {
    lib: {
      entry: "index.jsx",
      name: "UserCardComponent",
      formats: ["iife"],               // 单文件 IIFE
      fileName: () => "user-card.js",  // 输出文件名
    },
    outDir: "dist",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,    // 所有 import 打包进一个文件
      },
    },
  },
});
