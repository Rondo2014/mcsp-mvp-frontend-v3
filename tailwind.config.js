/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}',
  './src/main.jsx',
  '.src/components/utils/Reveal.jsx',
  ],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Roboto',
    },
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
