import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: "src/web-component.js",
      name: "UserCardVue",
      fileName: "user-card-vue",
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        entryFileNames: "user-card-vue.js"
      }
    }
  }
});
