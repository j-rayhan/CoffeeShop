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
    fontFamily: {
      poppins: [
        'Poppins',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ], // Adds a new `font-poppins` class
    },
    extend: {
      fontSize: {
        't-1': ['1.75rem', '2rem'],
        't-6': ['.625rem', '.875rem'],
      },
    },
  },
  plugins: [],
};
