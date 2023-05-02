/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'navDesktop': '1fr auto',
        'navDesktopBtn': 'repeat(4, auto)',
      },
      width: {
        'logo': '50px',
      }, 
    },
  },
  plugins: [],
}

