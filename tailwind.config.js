module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scale: "scale 1s ease-in-out",
        fade: "fade 0.5s ease-in-out",
      },
      keyframes: {
        scale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.5)",
          },
          "75%": {
            transform: "scale(1)",
          },
        },
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
