 /** @type {import('tailwindcss').Config} */
 export default {
  content: [ './public/index.html',
  './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'stone': {
          100: '#f3e6d8',
          150: '#e4ded8',
          600: '#5f574e',
          900: ' #302d2c',          
        },
        'brown': {
          800: '#854632',
        },
        'rose': {
          800: '#7b284f',
          50: '#fff5fa'
        },
      }
    },
  },
  plugins: [],
}