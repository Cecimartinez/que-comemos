/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      borderRadius: {
        '4xl': '2rem', 
        '5xl': '3rem',
      },
    }

  },
  plugins: [require("daisyui")],
}