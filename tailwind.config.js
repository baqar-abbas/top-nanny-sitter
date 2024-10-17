/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        creato: ['"Creato Display"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        "semi-transparent-black": "#333333",
        "custom-orange": "#FF6F61",
        "custom-black": "#232323",
      },
      fontSize: {
        "55px": "55px",
        "18px": "18px",
      },
      lineHeight: {
        "65px": "65px",
        "28px": "28px",
      },
      fontWeight: {
        400: "400",
        900: "900",
        700: "700",
      },
    },
  },
  plugins: [],
};
