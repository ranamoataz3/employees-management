/** @type {import('tailwindcss').Config} */

const baseTypographyPlugins =
  require("./src/core/assets/styles/configs/typography").baseTypographyPlugins;
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [baseTypographyPlugins],
};
