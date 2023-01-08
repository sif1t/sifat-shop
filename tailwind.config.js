/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./**/**/*.{html,js}"],
  theme: {
        extend: {},
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
     
  },
  plugins: [],
}


