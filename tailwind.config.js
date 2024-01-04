// /** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primaryColor: "#d5bb6a",
//         primaryDark: "#a88b4e",
//         yellowColor: "#FEB60D",
//         purpleColor: "#9771FF",
//         irisBlueColor: "#01B5C5",
//         headingColor: "#181A1E",
//         textColor: "#4E545F",
//         // to be removed
//         'warm-gray': colors.stone,
//         teal: colors.teal,
//         cyan: colors.cyan,
//         // end
//       },

//       boxShadow: {
//         panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
//         'card': '1px 4px 12px -2px rgba(0,0,0,.14)',

//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// };
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#d5bb6a",
        primaryDark: "#a88b4e",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        // to be removed
        'warm-gray': colors.stone,
        teal: colors.teal,
        cyan: colors.cyan,
        // end
        // new colors
        'dark-purple': '#800080',
        'dark-gold': '#b8860b',
        'golden-green': '#adff2f',
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
        'card': '1px 4px 12px -2px rgba(0,0,0,.14)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
