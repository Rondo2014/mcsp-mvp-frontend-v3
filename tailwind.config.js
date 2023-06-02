/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Navbar.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Hero.jsx",
    "./src/components/Featured.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#231942",
        secondary: "#5e548e",
        text: "#e0b1cb",
        accent: "#be95c4",
        "accent-dark": "#9f86c0",
      },
    },
    plugins: [],
  },
};
