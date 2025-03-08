import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Expose to the network
    port: 5173,       // Ensure it uses this port
    strictPort: true  // Prevents automatic port changes
  }
})
