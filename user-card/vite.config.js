import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './index.js',
      name: 'UserCard',
      fileName: 'remote-user-card',
      formats: ['es'],  // ⬅️ 最关键：输出 ESM
    },
    rollupOptions: {
      // **不要将 React 打包进去，让主应用来共享**
      external: ['react', 'react-dom'],
    },
  },
});
