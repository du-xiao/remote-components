import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
export default defineConfig({
   plugins: [
    vue(),
     cssInjectedByJsPlugin()
],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },

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
