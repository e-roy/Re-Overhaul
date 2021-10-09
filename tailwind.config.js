module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          light: "#185783",
          DEFAULT: "#3476aa",
          dark: "#0a2437",
        },
        sub: {
          light: "#e6d8ea",
          DEFAULT: "#ffd846",
          dark: "#a79daa",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    // require("@tailwindcss/forms"),
  ],
};
