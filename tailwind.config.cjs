/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1) Fonts
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      // 2) Font sizes + line-heights
      fontSize: {
        // "72/72" means 72px font, 72px line-height:
        "h1": ["72px", { lineHeight: "72px" }],
        // "38/47" means 38px font, 47px line-height:
        "h2": ["38px", { lineHeight: "47px" }],
        // "30/35" means 30px font, 35px line-height:
        "h3": ["30px", { lineHeight: "35px" }],
        // Body text "20/30":
        "body": ["20px", { lineHeight: "30px" }],
        // Button/footer "22.8/24":
        "buttonFooter": ["22.8px", { lineHeight: "24px" }],
        // Nav bar text "18/20":
        "navBar": ["18px", { lineHeight: "20px" }],
      },

      // 3) Custom colors
      colors: {
        // The screenshot shows:
        // Background color: #0D0F20
        background: "#0D0F20",
        // Main highlight color: #C9FC01
        main: "#C9FC01",
        // H2 text = #FFFFFF
        h2text: "#FFFFFF",
        // Body text = #AFB1B6
        bodyText: "#AFB1B6",
        // If you want gradient references:
        // "gradientStart": "#54FB48",
        // "gradientEnd": "#1BDBC5",
      },
    },
  },
  plugins: [],
};