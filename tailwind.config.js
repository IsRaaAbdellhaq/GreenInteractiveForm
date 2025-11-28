/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" , "./assets/**/*.js" , "./assets/**/"],
  theme: {
    screens: {
      'sm': '576px',   // I want small to start at 576px
      'md': '960px',   // I want medium (tablet) to start at 960px
      'lg': '1440px',  // I want large to start at 1440px
    },
    extend: {
      color: {
        "green-900": "green-900",
        "black": "black",
        "white": "white",
        "gray-200": "gray-200",
      },

      backgroundImage: {
        "page-bg" : "url('./assets/img/page-bg.jpg')",
        "plant-bg" : "url('./assets/img/plant.jpg')",
      },
    },
  },
  plugins: [],
}

