import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — mapped to the i14 brand palette.
        bg: "#ffffff", // white background (v1 stays white)
        ink: "#0F1A26", // Navy Black — primary text
        accent: "#FF9C43", // Bright Orange — single warm accent
        line: "#DCE7ED", // soft Cloud-tint borders
        // i14 brand palette (Brand Guidelines 2025, v1.0) — see i14-Colour-Quick-Guide.txt
        navy: "#0F1A26", // Navy Black
        silicon: "#858585", // Silicon Grey
        platinum: "#F5F7F7", // Platinum
        cloud: "#C9DEE8", // Cloud
        steel: "#78A6BA", // Steel Blue
        teal: "#264A54", // Deep Teal
        orange: "#FF9C43", // Bright Orange
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
