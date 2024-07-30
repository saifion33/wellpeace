/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
