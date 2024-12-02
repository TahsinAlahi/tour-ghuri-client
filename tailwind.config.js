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
      backgroundImage: {
        "home-card":
          "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 7%,rgba(255, 255, 255, 0) 40%,rgba(0, 0, 0, 0.5) 90%)",
      },
    },
  },
  plugins: [],
};
