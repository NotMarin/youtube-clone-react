/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#2e2e2e",
        red: "#ff0001",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
