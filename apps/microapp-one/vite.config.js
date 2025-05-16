import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microappOne",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.jsx", // Assuming you'll create Button.jsx in src
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
  },
});
