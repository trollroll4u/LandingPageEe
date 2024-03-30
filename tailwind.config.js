/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color-1": "#1e1f4b",
        white: "#fff",
        aliceblue: {
          "100": "#eaeef3",
          "200": "rgba(234, 238, 243, 0.15)",
        },
        darkslategray: {
          "100": "rgba(46, 62, 92, 0.8)",
          "200": "rgba(46, 62, 92, 0.7)",
        },
        gray: "rgba(27, 29, 33, 0.75)",
        "second-color": "#2e3e5c",
        radsomqornfas: "#7679ff",
        darkgreen: "rgba(53, 106, 0, 0.5)",
        midnightblue: "#03014c",
        slateblue: "rgba(112, 111, 229, 0.02)",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        abeezee: "ABeeZee",
        inter: "Inter",
      },
      borderRadius: {
        "1981xl": "2000px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      mini: "15px",
      "31xl": "50px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
