/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      colors: {
        bg_start: "#8BCDB7",
        bg_end: "#C785B2",
      },
      borderRadius: {
        normal: "10px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
