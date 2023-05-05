/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  scripts: {
    'dev': 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        'navDesktop': '1fr auto',
        'navDesktopBtn': 'repeat(5, auto)',
      },
      colors:{
        'theme-black': '#1D242B',
        'theme-white': '#FAFAFA',
        'theme-lblue': '#C7EEFF',
        'theme-dblue': '#0077C0',
      },
      width: {
        'logo': '50px',
      }, 
    },
  },
  plugins: [],
}

