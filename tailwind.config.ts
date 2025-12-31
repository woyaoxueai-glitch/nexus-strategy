import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: "#050505",
          cyan: "#00f0ff",
          violet: "#7000df",
          card: "#0c0c0f",
          grid: "#0f1c2c",
          text: "#d9faff",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 240, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

