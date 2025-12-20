import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Website-Kreatif/",
  plugins: [react()],
  optimizeDeps: {
    include: ["react-bits"],
    exclude: ["react-native-web"],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
});
