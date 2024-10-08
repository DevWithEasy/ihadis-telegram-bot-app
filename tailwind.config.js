/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        display : ["Hind Siliguri", "sans-serif"]
      }
    },
  },
  plugins: [],
}

