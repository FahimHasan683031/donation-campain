/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "text-blue-700",
    "bg-blue-200",
    "bg-blue-300",
    "text-rose-700",
    "bg-rose-200",
    "bg-rose-300",
    "text-lime-700",
    "bg-lime-200",
    "bg-lime-300",
    "text-pink-700",
    "bg-pink-200",
    "bg-pink-300"
  ],
}

