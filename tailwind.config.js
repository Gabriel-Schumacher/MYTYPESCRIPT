/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["bumblebee"]
  },
  content: ["./src/**/*.{html,ts}",
'./index.html'],
  theme: {
    fontFamily: {
      'babylonica': ['babylonica', 'cursive']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
