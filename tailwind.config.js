/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#1c9dea",
        secondly: "#223645",
        "light-100": "#647589",
        "light-200": "#eff1f2",
      },
    },
  },
  plugins: [],
};
