/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'rgba( 7, 9, 34, 1)',
        'action-color': 'rgba( 168, 252, 113, 1)',
        'secondary-color': 'rgba(49, 58, 91, 1)'
      }
    }
  },
  plugins: [],
}

