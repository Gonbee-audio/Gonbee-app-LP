import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#182230",
        muted: "#52606D",
        line: "#D8DEE6",
        surface: "#F7F9FC",
        brand: "#155EEF",
        trust: "#0F766E",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 34, 48, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
