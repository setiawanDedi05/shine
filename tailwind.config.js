/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9001",
          100: "#ff9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100:"#1E1E2D",
          200: "#232533"
        },
        gray: {
          100: "#CDCDE0"
        }
      },
      fontFamily: {
        thin: ["Poppins-Thin", "sans-serif"],
        extralight: ["Poppins-ExtraLight", "sans-serif"],
        light: ["Poppins-Light", "sans-serif"],
        regular: ["Poppins-Regular", "sans-serif"],
        medium: ["Poppins-Medium", "sans-serif"],
        semibold: ["Poppins-SemiBold", "sans-serif"],
        bold: ["Poppins-Bold", "sans-serif"],
        extrabold: ["Poppins-ExtraBold", "sans-serif"],
        black: ["Poppins-Black", "sans-serif"]
      }
    },
  },
  plugins: [],
};
