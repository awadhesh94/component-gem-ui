/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/images/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      brandThin: ['font-100', 'sans-serif', 'serif'],
      brandExtraLight: ['font-200', 'sans-serif', 'serif'],
      brandLight: ['font-300', 'sans-serif', 'serif'],
      brandRegular: ['font-400', 'sans-serif', 'serif'],
      brandMedium: ['font-500', 'sans-serif', 'serif'],
      brandSemiBold: ['font-600', 'sans-serif', 'serif'],
      brandBold: ['font-700', 'sans-serif', 'serif'],
      brandExtraBold: ['font-800', 'sans-serif', 'serif'],
      brandBlack: ['font-900', 'sans-serif', 'serif'],
    },
    colors: {
      coal: '#0f0d0e',
      charcoal: '#231f20',
      gray: '#262522',
      yellow: '#fcba28',
      pink: '#f38ba3',
      green: '#0ba95b',
      'light-green': '#cfe957',
      purple: '#7b5ea7',
      biege: '#f9f4da',
      blue: '#12b5e5',
      orange: '#fc7428',
      red: '#ed203d',
      white: '#ffffff',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
