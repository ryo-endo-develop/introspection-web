/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // アプリケーション固有の色を追加
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0077cc',
          dark: '#005299'
        },
        secondary: {
          light: '#f8bbd0',
          DEFAULT: '#e91e63',
          dark: '#c2185b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
