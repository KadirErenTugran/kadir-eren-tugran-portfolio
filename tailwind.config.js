/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(10%)' },
        },

        leftarrow: {
          '0%': { transform: 'translateX(1200%)' },
          '100%': { transform: 'translateX(-13%)' },

        },
        rightarrow: {
          '0%': { transform: 'translateX(-1200%)' },
          '100%': { transform: 'translateX(13%)' },
        },
        fadein: {
          '0%': { opacity: 0 },
          '40%': { opacity: 0.10 },
          '70%': { opacity: 0.70 },
          '100%': { transform: 1 },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out 5',
        leftarrow: 'leftarrow 3s ease-out 1',
        rightarrow: 'rightarrow  3s ease-out 1',
        fadein: 'fadein  5s ease-out 1',
      },
    },
  },
  plugins: [],
}

