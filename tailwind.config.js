module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: "2rem", // mobile
        lg: "6rem",       // tablet
        xl: "8rem",       // desktop standar
        "2xl": "10rem",   // large screen (DESAIN KALISLOKA)
      },
    },
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["LT Glockenspiel", "serif"],
      },
      maxWidth: {
        heroText: "680px",
      },
    },
  },
  plugins: [],
};
