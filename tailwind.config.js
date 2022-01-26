module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Source Serif Pro", "serif"],
        links: ["Roboto Condensed", "sans-serif"],
        normal: ["Roboto", "sans-serif"],
        header: ["Inter", "sans-serif"],
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    lineHeight: {
      none: "1",
      "extra-loose": "2.5",
      10: "1.3",
      12: "3rem",
      14: "3.5rem",
      15: "5rem",
    },
  },
  plugins: [],
};
