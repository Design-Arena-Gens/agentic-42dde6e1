import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f0f6ff",
          100: "#dcebff",
          200: "#b6d6ff",
          300: "#86b7ff",
          400: "#528ffd",
          500: "#2563eb",
          600: "#1d4fd8",
          700: "#1a3eb3",
          800: "#1b348f",
          900: "#192d74",
          DEFAULT: "#2563eb"
        },
        dark: "#0b1120"
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
