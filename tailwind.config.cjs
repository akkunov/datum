/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'extra': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'desktop': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'tablet': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'ipad': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'phone': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    shadows: {
    },

    extend: {},
  },
  plugins: [],
}

