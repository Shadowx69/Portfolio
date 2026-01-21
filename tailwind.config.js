/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          100: '#0a0a0a',
          200: '#121212',
          300: '#1E1E1E',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          glow: 'rgba(59, 130, 246, 0.5)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
