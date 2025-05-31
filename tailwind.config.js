/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fad6a8',
          300: '#f6b871',
          400: '#f19338',
          500: '#ed7214',
          600: '#de5a0a',
          700: '#b8430b',
          800: '#93360f',
          900: '#772d0f',
        },
        sacred: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        'sanskrit': ['Noto Serif Devanagari', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(237, 114, 20, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(237, 114, 20, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}