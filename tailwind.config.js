/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "semi-transparent-black": "#333333",
      },
    },
  },
  plugins: [],
};
