import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://xiaoliangpan.github.io/react-playground/",
  plugins: [react()],
});
