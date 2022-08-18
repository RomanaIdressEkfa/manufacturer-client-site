module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0F1729",
          "secondary": "#828DF8",
          "accent": "#868e96",
          "neutral": "#0F1729",
          "base-100": "#FFFFFF",
          "info": "#0CA6E9",
          "success": "#2BD4BD",
          "warning": "#F4C152",
          "error": "#DE7D8C",
        },

      },
      {
        dark: {

          "primary": "#2BD4BD",

          "secondary": "#F4C152",

          "accent": "#868e96",

          "neutral": "#1D283A",

          "base-100": "#0F1729",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#F4C152",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
