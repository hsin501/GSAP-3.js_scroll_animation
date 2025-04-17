import { defineConfig } from 'vite';

export default defineConfig({
  base: '/GSAP-3.js_scroll_animation/',

  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
