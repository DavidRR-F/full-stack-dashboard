const { tokensDark, tokensLight } = require("./src/theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: tokensDark.grey,
        primary: tokensDark.primary,
        secondary: tokensDark.secondary,
      },
    },
    nightwind: {
      colors: {
        grey: tokensLight.grey,
        primary: tokensLight.primary,
        secondary: tokensLight.secondary,
      },
    },
  },
  plugins: [require("nightwind")],
}
