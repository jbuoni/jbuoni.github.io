import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const ASSET_URL = process.env.ASSET_URL || ''

// https://vite.dev/config/
export default defineConfig({
  // base: `${ASSET_URL}/dist/`,
  plugins: [react()],
})
