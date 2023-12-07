/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(20rem)" },
          "50%": { transform: "rotate(3deg)" }
        },
        wiggle2: {
          "0%, 100%": { transform: "translateX(-20rem)",  },
          "50%": { transform: "rotate(3deg)", },
          "0%": {opacity: "0"},
          "100%": {opacity: "1" }
          

        },
      },
      animation: {
        wiggle: "wiggle 500ms ease-in-out",
        wiggle2: "wiggle2 500ms ease"
      },


    },
  },
  plugins: [],
}