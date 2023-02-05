/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/***/**/*.{js,ts,jsx,tsx}',
    './src/components/****/***/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Poppins',
        { fontFeatureSettings: "'cv02', 'cv03', 'cv04', 'cv11'" },
      ],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
