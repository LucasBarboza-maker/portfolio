/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DC98D",
        sectionBackground: "#01030B"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'computer': "url('../public/images/computer_darker.jpg')",
        'programming': "url('../public/images/programming_computer.jpg')",
        'me': "url('../public/images/my_site_photo.jpg')"

      },
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '50vh': '50vh',
        '20vh': '20vh',
        '10vh': '10vh'

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
