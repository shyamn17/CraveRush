/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        animation: {
          'cart-beat': 'cartBeat 1s infinite ease-in-out',
        },
        keyframes: {
          cartBeat: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
          },
        },
      },
    },
    plugins: [],
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ]
  };
  