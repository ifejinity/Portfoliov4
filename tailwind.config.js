/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  scripts: {
    'dev': 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
  },
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily:{
        'outfit' : ['Outfit, sans-serif'],
      },
      screens: {
        'xxs': '320px',
        'xs': '425px',
      },
      gridTemplateColumns: {
        'navDesktop': '1fr auto',
        'navDesktopBtn': 'repeat(6, auto)',
        'timeLineDesktop' : '1fr auto 1fr',
        'timeLineMobile' : 'auto 1fr',
        'contact' : 'auto 1fr',
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
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
        'bounce-slower': 'bounce 6s linear infinite',
        'bounce-slowest': 'bounce 7s linear infinite',
      },
    },
  },
  plugins: [],
}

