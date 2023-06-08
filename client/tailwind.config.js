const { tokensDark, tokensLight } = require("./src/theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "800px",
      },
      flex: {
        between: "flex justify-between align-center",
      },
      colors: {
        // palette values for dark mode
        primary: {
          100: "#d3d4de",
          200: "#a6a9be",
          300: "#7a7f9d",
          400: "#4d547d",
          500: "#21295c",
          600: "#191F45",
          700: "#141937",
          800: "#0d1025",
          900: "#070812",
          main: "#4d547d",
          light: "#4d547d",
        },
        secondary: {
          50: "#f0f0f0",
          100: "#fff6e0",
          200: "#ffedc2",
          300: "#ffe3a3",
          400: "#ffda85",
          500: "#ffd166",
          600: "#cca752",
          700: "#997d3d",
          800: "#665429",
          900: "#332a14",
          main: "#ffe3a3",
        },
        neutral: {
          0: "#ffffff",
          10: "#f6f6f6",
          50: "#f0f0f0",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          1000: "#000000",
          main: "#666666",
        },
        background: {
          default: "#191F45",
          alt: "#21295c",
        },
      },
    },
  },
  plugins: [require("nightwind")],
}
