/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
       colors: {
        primary: '#1458A1',
        secondary:'#00A3A0'
     
      },
    },
    fontSize: {
      sm: '13px',
      base: '15px',
      xl: '18px',
      lg: '17px',
      '2xl': '23px',
      '3xl': '29px',
      '4xl': '35px',
      '5xl': '47px',
    }
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
