
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#211C1A",
        "warm-cream": "#FBF6EE",
        "char-orange": "#E8622C",
        "basil-green": "#4C6444",
        mozzarella: "#F3E5B3",
        "deep-tomato": "#B23A2E",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        workSans: ["Work Sans", "sans-serif"],
        ibmMono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
