import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  return {
    base:
      command === 'build'
        ? '/<你的 Repository 名稱>/' // 生產環境建置時的基礎路徑
        : './', // 開發環境時使用相對路徑
    build: {
      outDir: 'dist', // 確保輸出目錄是 'dist' (預設值)
    },
  };
});
