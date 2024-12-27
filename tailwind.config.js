/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/hero.png')"
      },
      colors: {
        'deepBlue': '#032541',
        'whitte': '#fffff7',
      }
    },
  },
  plugins: [],
}