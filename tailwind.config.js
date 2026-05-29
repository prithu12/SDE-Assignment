module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000D12',
        snow: '#E9F4F9',
        sky: '#00B4FD',
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
        glow: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
      },
      animation: {
        marquee: 'marquee-scroll 18s linear infinite',
      },
      fontFamily: {
        archivo: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        'chivo-mono': ['"Chivo Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
