/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        nav: "#8fbfda",
        "nav-active": "#5897de",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
        nunito: ["Nunito", "sans-serif"],
        cinzel: ["Cinzel Decorative", "cursive"],
      },
      borderColor: {
        "title-underline": "#2f4156",
      },
    },
  },
  plugins: [],
};
