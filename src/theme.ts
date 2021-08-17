const colors = require('tailwindcss/colors')

export default {
  theme: {
    default: {
      tailwind: {
        textColor: 'white',
        bgColor: 'black',
        primary: 'gray-300',
        secondary: 'gray-800',      
        gradient: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      },
      global: {
        textColor: colors.white,
        bgColor: colors.black,
        primary: colors.gray[300],
        secondary: colors.gray[800]
      }
    },
    ocean: {
      textColor: 'white',
      bgColor: 'blue-800',
      primary: 'blue-600',
      secondary: 'blue-900'
    }
  }
}

