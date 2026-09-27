import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10233F",
        paper: "#F7F8FC",
        brand: "#F04D3A",
        sea: "#0B8F8C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 16px 40px rgba(16, 35, 63, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
