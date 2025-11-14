import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.jsx",
      name: "UserCard",
      formats: ["es"],
      fileName: () => "user-card.js",
    },
    outDir: "dist",
    rollupOptions: {
      external: [],
    },
  },
});
