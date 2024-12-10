/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        accent: "#fd7e14",
      },
      boxShadow: {
        buttonShadow: "4px 4px 0 0 #000000"
      }
    },
  },
  plugins: [],
}