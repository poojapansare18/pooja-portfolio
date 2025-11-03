/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-blue': '#007BFF'
      },
      boxShadow: {
        'glow-blue': '0 6px 18px rgba(0,123,255,0.14)'
      }
    },
  },
  plugins: [],
}
