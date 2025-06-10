import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';
import VueI18nPlugin from 'unplugin-vue-i18n/vite';

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    tailwindcss(),
    VueI18nPlugin({
      // Point to your locales folder
      include: './src/locales/**',
    })
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
