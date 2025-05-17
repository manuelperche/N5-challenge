/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        microappOne: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-i18next", "styled-components"],
    }),
  ],
  server: {
    port: 3000,
    hmr: true,
  },
  preview: {
    port: 3000,
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