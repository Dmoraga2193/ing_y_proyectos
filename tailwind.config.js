/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0px 4px 6px rgba(37, 99, 235, 0.5)", // sombra azul
        "custom-red": "0px 4px 6px rgba(255, 0, 0, 0.5)", // sombra roja
        "custom-green": "0px 4px 6px rgba(0, 255, 0, 0.5)", // sombra verde
      },
      conteiner: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("@tailwindcss/forms"),
  ],
};
