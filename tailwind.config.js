/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // important: true,
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      md: "1.25rem",
      xl: "1.5rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "6rem",
      "6xl": "8rem",
    },
    extend: {
      colors: {
        brand: {
          50: "#FFC88B",
          100: "#FFA07A",
          200: "#FF7B5C",
          300: "#D7381F",
          400: "#BA0000",
          500: "#9A0000",
          600: "#7B0000",
        },
      },
    },
    fontFamily: {
      futura: ["Futura", "sans-serif"],
    },
  },
  plugins: [],
};
