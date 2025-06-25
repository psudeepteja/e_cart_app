import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '',
    plugins: [react()],
    server: {    
        open: true,
        port: 8888, 
    },
    build: {
    outDir: 'dist'
  }

})