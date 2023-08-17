/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        borel: ["Borel", "cursive"],
      },
      colors: {
        "dark-black": "#0B0D17",
        "tealish-blue": "#D0D6F9",
        'dark-grey':'#333333',
        'light-grey':'#ACACAC'
      },
    },
  },
  plugins: [],
};
