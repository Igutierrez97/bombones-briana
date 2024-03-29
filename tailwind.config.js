const {nextui} = require("@nextui-org/react");
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Grape Nuts'],
      }
    },
  },
  plugins: [nextui()],
}

