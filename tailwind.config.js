/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your component files so Tailwind can find them
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], // This is the missing line
  theme: {
    extend: {},
  },
  plugins: [],
};
