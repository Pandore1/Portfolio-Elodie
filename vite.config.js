import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules:{
      localsConvention:"camelCase",
    }
  },
  base:"/etudiants/2022/picarde/Portfolio-Elodie/"

})
