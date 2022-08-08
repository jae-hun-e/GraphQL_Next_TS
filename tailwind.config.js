/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tx,tsx}",
    "./components/**/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    extend: {},
  },
  //TODO darkMode에 media(기본속성)는 OS속성을 따라가고 class는 사용자가 지정한 속성을 따라감(부모에 dark 넣어주면 됨)
  darkMode: "class",
  plugins: [],
};
