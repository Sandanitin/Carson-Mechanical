/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from provided logo
        primary: '#0094D6',
        secondary: '#006EA3',
        accent: '#FFD400',
        earth: '#7A4A21',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
