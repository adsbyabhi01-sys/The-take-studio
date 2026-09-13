/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FFFFFF",
          card: "#F7F7F5",
          dark: "#111111",
          secondary: "#666666",
          muted: "#999999",
          border: "#E5E5E0",
          purple: "#7C5CFC",
          "purple-light": "#F2EFFE",
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        editorial: '0.05em',
        wide: '0.15em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
