module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#9669f5',
          600: '#773bf7',
          700: '#6b29f8',
          800: '#5520c7',
          900: '#430eb3',
        }
      }
    },
  },
  plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#6b29f8",
            secondary: "#f6d860",
            white: '#fff',
            accent: "#37cdbe",
            neutral: "#3d4451",
            active: "#21de34",
            "base-100": "#ffffff",
            "primary-dark": '#5b29a9'
          },
        },
      ],
    },
  }