/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",   // for CRA-style setups
    "./index.html",          // for Vite setups
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
