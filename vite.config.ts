import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // BU SƏTİR: Saytın GitHub-da bütün CSS/JS fayllarını tapmasını təmin edir
    base: './', 
    
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // AI Studio-nun öz daxili HMR ayarları (toxunmuruq)
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // Build ayarlarını da dəqiqləşdirək ki, hər şey yerli-yerində olsun
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});