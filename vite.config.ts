import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const postcssPlugins = [
  (tailwindcss as any)({
    config: './tailwind.config.ts'
  }),
  (autoprefixer as any)()
]

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
})