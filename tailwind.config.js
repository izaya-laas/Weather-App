export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mynerve: "Mynerve",
        "mynerve-bold": "Mynerve-bold",
      },
      colors: {
        main: "#1e213a",
        secondary: "#100e1d",
        "blue-light": "#3c47e9",
        "white-faint": "#e7e7eb",
        "gray-faint": "#88869d",
        "gray-dark": "#6e707a",
      },
    },
  },
  plugins: [],
};
