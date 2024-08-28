/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        lightBlue: "#b1baff",
        pinkishPurple: "#eea9e8",
        lightPurple: "#ab97d5",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        ubuntu: ["ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "custom-background-gradient":
          "linear-gradient(to bottom, #b1baff , #eea9e8)",
        "home-page-header-gradient":"linear-gradient(135deg, #f77dc6, #e18ce5, #c699fd, #aeb3e9)"
      },
    },
  },
  plugins: [],
};
