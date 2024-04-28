/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      colors: {
        'primary': '#262626',
        'secondary': '#979797'
      },
    },
  },
  plugins: [],
}