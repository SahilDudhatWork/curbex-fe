/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    // screens: {
    //   sm: "768px",
    //   md: "768px",
    //   lg: "1280px",
    //   xl: "1536px",
    // },

    extend: {
      colors: {
        white: "#fff",
        black: "#000000",
        dark: "#C0C6F4",
        darkText: "#5B638B",
        blue: "#7700D2",
        green: "#23DC9B",
        darkBlue: "#8E00BE",
        textColor: "#B391CC",
        lightPink: "#F4E7FF",
      },
    },
  },
  plugins: [],
  // purge: [
  //   "./components/**/*.vue",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.js",
  //   "./nuxt.config.js",
  // ],
};
