/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Montserrat', ],
      'serif': ['Merriweather', ],
      "poppins": ["Poppins", ]
    },
    extend: {
      
    },
  },
  plugins: [],
}