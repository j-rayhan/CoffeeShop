/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#D17842',
      secondary: '#DC3535',
      gray: '#52555A',
      white: '#FFFFFF',
      'white-light': '#AEAEAE',
      dark: '#0C0F14',
      'dark-light': '#252A32',
    },
    extend: {
      fontFamily: {
        poppins: [
          'Poppins', // Adds a new `font-poppins` class
          'sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
          },
        ],
      },
      // fontSize: {
      // '2xs': '0.625rem', // Custom extra small font size
      // 'text-1': ['1.75rem', '2rem'],
      // 'text-6': ['"0.625rem"', '"0.875rem"'],
      // },
    },
  },
  plugins: [],
};
