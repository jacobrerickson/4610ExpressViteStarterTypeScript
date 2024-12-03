import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './src/main.tsx',
      output: {
        entryFileNames: '[name].js', // Ensure output files are .js
        chunkFileNames: '[name].js',  // Ensure chunk files are .js
        assetFileNames: '[name].[ext]' // Maintain original asset file names
      },
    },
    outDir: '../dist/static'
  },
})
