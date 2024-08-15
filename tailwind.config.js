/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dotMove: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        dotMove: "dotMove infinite 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
