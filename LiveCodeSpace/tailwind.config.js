/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logoLImg': "url('./assets/img/logo-dark.png')",
        'logoDImg': "url('./assets/img/logo-light.png')",
        'conversationImg': "url('./assets/img/conversation.png')",
        'contactImg': "url('./assets/img/contact.png')",
        'heroImg': "url('./assets/img/hero.png')",
        'heroImg2': "url('./assets/img/hero2.svg')",
        'errorImg': "url('./assets/img/errorimg.svg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': {
          '50': '#efeeff',
          '100': '#e2e0ff',
          '200': '#cac7fe',
          '300': '#aaa5fc',
          '400': '#8881f8',
          '500': '#6b63f1',
          '600': '#4f46e5',
          '700': '#4038ca',
          '800': '#3730a3',
          '900': '#332e81',
          '950': '#1e1b4b',
        },
        'darkConfig': '#1a1b2e'
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    // otros plugins
  ],
}

