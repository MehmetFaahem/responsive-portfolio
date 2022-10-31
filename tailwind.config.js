/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fav': ['Poppins', 'sans-serif'],
        'fav2': ['Secular One', 'sans-serif']
      },
      screens: {
        'mobile': '280px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
}

