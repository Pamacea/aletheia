import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|border|shadow)-paper-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(bg|text|border|shadow)-ink(-light|-lighter)?/,
    },
    {
      pattern: /(bg|text|border|shadow)-sepia-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#faf9f7", 100: "#f5f3f0", 200: "#e8e6e1", 300: "#d9d6d0",
          400: "#c4c0b8", 500: "#a8a49a", 600: "#8b877f", 700: "#6b6762",
          800: "#4a4744", 900: "#2d2b29",
        },
        ink: {
          DEFAULT: "#2d2b29", light: "#4a4744", lighter: "#6b6762",
        },
        sepia: {
          50: "#f8f4ef", 100: "#f0e6d6", 200: "#e5d4b8", 300: "#d4bc8f",
          400: "#c09f66", 500: "#a8864d", 600: "#8b6f3c", 700: "#6b552e",
          800: "#4a3a21", 900: "#2d2214",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
