/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      backgroundImage: {
        'headerBackground': "url('./assets/header_background.jpg')",
      },
    },
  },
  plugins: [],
}