/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryYellow: "#FDEB37",
      darkGray: "#323232",
      lightGray: "#C2C2C2",
    },
    fontFamily:{
      ubuntu:["Ubuntu", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
};
