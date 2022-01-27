module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#d8d8d8",
        primary: "#2091F9",
        "b-gray": "#e8e8e8",
      },
      borderRadius: {
        large: "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
