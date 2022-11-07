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
        "body-bg": "var(--body-bg)",
        "base-text-color": "var(--base-text-color)",
        "alt-text-color": "var(--alt-text-color)",
        "base-border-color": "var(--base-border-color)",
        "navbar-bg-color": "var(--navbar-bg-color)",

        "input-text-color": "var(--input-text-color)",
        "input-bg-color": "var(--input-bg-color)",
        "input-bg-color-focus": "var(--input-bg-color-focus)",
        "input-border-color": "var(--input-border-color)",
        "input-border-color-hover": "var(--input-border-color-hover)",
        "input-border-color-focus": "var(--input-border-color-focus)",

        "search-button-bg-color": "var(--search-button-bg-color)",
        "search-button-bg-color-hover": "var(--search-button-bg-color-hover)",
        "search-button-bg-color-active": "var(--search-button-bg-color-active)",

        "dropdown-bg-color": "var(--dropdown-bg-color)",
        "toggle-border": "var(--toggle-border)",
        "toggle-ball": "var(--toggle-ball)",

        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-view-count": "var(--sidebar-view-count)",
        "sidebar-channel-hover": "var(--sidebar-channel-hover)",

        "carousel-button-bg": "var(--carousel-button-bg)",
        "carousel-button-bg-hover": "var(--carousel-button-bg-hover)",
        "carousel-button-arrow": "var(--carousel-button-arrow)",
        "carousel-item-bg": "var(--carousel-item-bg)",
        "carousel-text-color": "var(--carousel-text-color)",

        "tag-text-color": "var(--tag-text-color)",
        "tag-bg-color": "var(--tag-bg-color)",

        title: "var(--title)",
        subtitle: "var(--subtitle)",
        "live-bg-color": "var(--live-bg-color)",
        purple: "var(--purple)",
        opac: {
          "005": "var(--opac-005)",
          "01": "var(--opac-01)",
          "015": "var(--opac-015)",
        },
      },
      animation: {
        fadeOut: "fadeOut 0.4s linear 0.6s forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
