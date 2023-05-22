import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "KMSRenderComponentsLibrary",
      fileName: (format) => `lib.js`,
    },
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `assets/[name].js`, // main js chunks, hash in name is disabled
    //     chunkFileNames: `assets/[name].js`, // js chunks
    //     assetFileNames: `assets/[name].[ext]`, // other
    //   },
    // },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
