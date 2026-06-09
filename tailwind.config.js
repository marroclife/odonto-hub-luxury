module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F7E7CE',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        slate: '#2C3E50',
        deepBlack: '#0B0E14',
      },
    },
  },
  plugins: [],
}
