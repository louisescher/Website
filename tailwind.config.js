/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "lightest": "#5e6670",
        "lighter": "#202429",
        "dark": "#141414",
        "scrollbar-bg": "#141414",
        "scrollbar-thumb-bg": "#323232",
        "scrollbar-thumb-hover": "#484848",
        "accent-1": "#5436ff",
        "accent-2": "#cc00ff"
      },
      screens: {
        "xs": "551px",
      }
    },
  },
  plugins: [],
}
