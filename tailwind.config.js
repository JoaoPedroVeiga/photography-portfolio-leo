/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arvo: ['Arvo', 'sans-serif'],
         boska: ['Boska', 'sans-serif'],
        tanker: ['Tanker', 'sans-serif'],
        telma: ['Telma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}