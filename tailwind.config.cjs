/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCD00',
        secondaryRed: '#e63000',
        secondaryBrown: '#5A1404',
      },
    },
  },
  plugins: [],
}
