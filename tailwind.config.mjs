import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.green[400],
        secondary: colors.green[200],
      },
    },
  },
  plugins: [],
};
