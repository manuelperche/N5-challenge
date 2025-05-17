/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        microappOne: process.env.VITE_MICROAPP_ONE_URL || "http://localhost:3001/assets/remoteEntry.js",
        microappTwo: process.env.VITE_MICROAPP_TWO_URL || "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  server: {
    port: Number(process.env.VITE_PORT) || 3000,
    hmr: true,
  },
  preview: {
    port: Number(process.env.VITE_PORT) || 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}); 