const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: [
    './views/**/*.ejs'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
  ]
}