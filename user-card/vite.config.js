
import { defineConfig } from "vite";
 
export default defineConfig({
build: {
lib: {
entry: "index.js",
formats: ["es"],
fileName: () => "user-card.js"
},
outDir: "dist"
}
});
