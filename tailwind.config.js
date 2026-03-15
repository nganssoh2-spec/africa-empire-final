/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#f0c040',
        'violet': '#7c3aed',
        'rose': '#ec4899',
      },
    },
  },
  plugins: [],
};