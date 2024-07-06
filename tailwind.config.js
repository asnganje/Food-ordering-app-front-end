/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnBg: '#2cb1bc',
        authBg: '#f8fafc',
        lytBlueBgColor: 'rgba(235, 244, 255, 1.0)',
        logoBgColor: 'rgba(15, 23, 42, 1.0)'
      }
    },
  },
  plugins: [],
}

