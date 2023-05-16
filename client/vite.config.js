import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactRefresh from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './buildConfig/environments',
  plugins: [react(), reactRefresh()],
  base: process.env.PUBLIC_URL,
  build: { outDir: process.env.BUILD_PATH },
});
