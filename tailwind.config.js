import colorConvert from 'color-convert';
const { hsv: { hex: rawHsbToHex } } = colorConvert;
const hsbToHex = (h, s, b) => `#${rawHsbToHex(h, s, b)}`;

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bqgpurple:{
          300: hsbToHex(268, 60, 90),
          400: hsbToHex(268, 80, 85),
          500: hsbToHex(268, 100, 85),
          600: hsbToHex(268, 100, 60),
          700: hsbToHex(268, 100, 40),
          900: hsbToHex(268, 100, 20)
        }
      },
      boxShadow: {
        smstill: '0 0 2px 0 rgb(0 0 0 / 0.05)',
        mdstill: '0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)',
        lgstill: '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)',
        xlstill: '0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)',
        '2xlstill': '0 0 50px -12px rgb(0 0 0 / 0.25)',
        innerstill: 'inset 0 0 4px 0 rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}
