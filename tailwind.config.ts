import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Swap these for your real brand colors later.
        bg: "#fffaf7", // off-white background
        ink: "#0a0a0a", // near-black text
        accent: "#ff6b35", // single brand accent
        line: "#e5e5e5", // thin borders
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        layout: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
