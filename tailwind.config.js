import flowbite from "flowbite/plugin"; // Ensure plugin is imported correctly

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Ensure Flowbite is scanned for classes
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [flowbite], // Ensure plugin is used correctly
};
