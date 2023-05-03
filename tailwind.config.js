/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    // fontSize: {
    //   'sm': '0.8rem',
    //   'base': '1rem',
    //   'xl': '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    colors:{
      'theme-black': '#1D242B',
      'theme-white': '#FAFAFA',
      'theme-lblue': '#C7EEFF',
      'theme-dblue': '#0077C0',
    },
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

