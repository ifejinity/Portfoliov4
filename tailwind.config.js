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
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        updown1: 'updown 7s ease-in-out infinite',
        updown2: 'updown 9s ease-in-out infinite',
      },
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
    },
  },
  plugins: [],
}

