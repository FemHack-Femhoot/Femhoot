module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        femhoot: {
          blue: "#227FA8",
          dark: "#061A40",
          red: "#EB7159",
          orange: "#FFB433",
          green: "#2CADBB",
          light: "#F1E8DA",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
