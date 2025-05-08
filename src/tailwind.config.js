/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class', // Enables class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
          spaceMono: ['"Space Mono"', 'monospace'],
        },
      },
    },
    plugins: [],
  };
  