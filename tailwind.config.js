/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'bgMain': '#FFE6D6',
      'btnMain': '#F5873D',
      'hMain': '#94360B',
      'hoverMain': 'rgb(249 115 22)',
    }
  },
  plugins: [],
}