import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#11161f",
        panel: "#161b22",
        accent: "#4fc1ff",
        accentSoft: "#1f6feb",
        border: "#283042",
        muted: "#8b949e",
        success: "#3fb950",
        warning: "#d29922",
        pink: "#ff7b72",
        gold: "#e3b341",
      },
      boxShadow: {
        editor: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(79,193,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,193,255,0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "Monaco",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
