/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        Bg:'#1B1B1B',
        btnBg:'#3F8E00',
        textCol:'#9C9C9C',
        back:'#080808'
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        'plex-mono': ['"IBM Plex Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

