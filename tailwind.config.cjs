/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        desktop: '1440px',
      },

      colors: {
        primary: '#FFCD00',
        'primary-hover': '#ECB200',
        secondaryRed: '#e63000',
        'secondary-hover': '#b33000',
        secondaryBrown: '#5A1404',
      },

      dropShadow: {
        'btn': '0px 0px 5px #E7E7E7',
        'btn-hover': '0px 0px 35px #FFFFFF',
      },

      fontFamily: {
        condpro: ['PFDinTextCondPro'],
      }
    },
  },
  plugins: [],
}
