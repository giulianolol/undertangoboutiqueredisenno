/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        utc: {
          900: "#0b0b0b", // fondo casi negro
          800: "#0f0f0f",
          red: "#c71b1b", // rojo principal
          redDark: "#8f1313",
          accent: "#e33a3a"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};
