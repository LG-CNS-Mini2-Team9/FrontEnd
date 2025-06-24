import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 백엔드 주소
        changeOrigin: true,
      },
    },
  },
});
