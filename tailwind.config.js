/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roobert: ['"Roobert"', "sans-serif"],
        inter: ['"Inter"', '"Roobert"', "sans-serif"],
      },
      screens: {
        laptop: { max: "1440px" },
      },
      colors: {
        "navbar-bg": "var(--navbar-bg)",
        "base-bg": "var(--base-bg)",
        "base-txt": "var(--base-txt)",
        "base-border": "var(--base-border)",
        purple: "var(--purple)",
        opac: {
          "005": "var(--opac-005)",
          "01": "var(--opac-01)",
          "015": "var(--opac-015)",
        },
      },
    },
  },
  plugins: [],
};
