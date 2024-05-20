/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0% ,100%':{transform:'translateY(5%'},
          '50%': {transform:'translate(5%)'}
        }
      },
      animation:{
        wiggle:'wiggle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

