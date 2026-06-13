import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// On GitHub Pages project sites the app is served from /<repo-name>/.
// The deploy workflow passes the repo name in PAGES_BASE_PATH so the
// asset base matches automatically. Locally it's unset -> served at "/".
const repo = process.env.PAGES_BASE_PATH || "";

export default defineConfig({
  base: repo ? `/${repo}/` : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
