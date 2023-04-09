/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      "gray-light": "#1b1d23",
      "gray-dark": "#131519",
      "gray-darkest": "#0d0f11",
      "brand-coal": "#0f0d0e",
      "brand-charcoal": "#231f20",
      "brand-gray": "#262522",
      "brand-yellow": "#fcba28",
      "brand-pink": "#f38ba3",
      "brand-green": "#0ba95b",
      "brand-purple": "#7b5ea7",
      "brand-biege": "#f9f4da",
      "brand-blue": "#12b5e5",
      "brand-orange": "#fc7428",
      "brand-red": "#ed203d",
      "brand-white": "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      brandHeading: ["PaytoneOne", "sans-serif", "serif"],
      brandThin: ["OutfitThin", "sans-serif", "serif"],
      brandRegular: ["OutfitRegular", "sans-serif", "serif"],
      brandLight: ["OutfitLight", "sans-serif", "serif"],
      brandMedium: ["OutfitMedium", "sans-serif", "serif"],
      brandBold: ["OutfitBold", "sans-serif", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
