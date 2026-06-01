/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F40',
        'deep-navy': '#05142B',
        ivory: '#F3EDDF',
        gold: '#E8B93A',
        charcoal: '#111827',
        'muted-gray': '#6B7280',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 8px 32px rgba(232, 185, 58, 0.18)',
        'gold-lg': '0 16px 48px rgba(232, 185, 58, 0.28)',
        glass: '0 8px 32px rgba(10, 31, 64, 0.18)',
      },
    },
  },
  plugins: [],
}
