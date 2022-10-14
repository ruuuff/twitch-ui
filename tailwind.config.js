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
        "alt-txt-color": "var(--alt-txt-color)",
        "base-border": "var(--base-border)",
        "input-border": "var(--input-border)",
        "toggle-bg": "var(--toggle-bg)",
        "toggle-border": "var(--toggle-border)",
        "toggle-ball": "var(--toggle-ball)",
        "input-txt": "var(--input-txt)",
        "input-btn-bg": "var(--input-btn-bg)",
        "input-btn-bg-hover": "var(--input-btn-bg-hover)",
        "input-btn-bg-active": "var(--input-btn-bg-active)",
        "input-border-hover": "var(--input-border-hover)",
        "input-border-focus": "var(--input-border-focus)",
        "nav-input-bg": "var(--nav-input-bg)",
        "nav-input-bg-focus": "var(--nav-input-bg-focus)",
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-view-count": "var(--sidebar-view-count)",
        "sidebar-channel-hover": "var(--sidebar-channel-hover)",
        "carousel-bg": "var(--carousel-bg)",
        "carousel-btn-bg": "var(--carousel-btn-bg)",
        "carousel-btn-bg-hover": "var(--carousel-btn-bg-hover)",
        "carousel-btn-arrow": "var(--carousel-btn-arrow)",
        "carousel-item-bg": "var(--carousel-item-bg)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        "body-bg": "var(--body-bg)",
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
