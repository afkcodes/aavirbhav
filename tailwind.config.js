const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {},
      animation: {},
      height: {
        98: "30rem",
        102: "34rem",
      },
      fontFamily: {
        sans: ["Kalam", ...defaultTheme.fontFamily.sans],
        serif: ["Kalam", ...defaultTheme.fontFamily.serif],
        mono: ["Kalam", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {
      translate: ["motion-safe"],
    },
  },
  plugins: [],
};
