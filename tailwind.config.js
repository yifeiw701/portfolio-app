/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440pd",
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        rotate: "rotate 1s",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        rotate: {
          "50%": {
            transform: "rotateY(180deg)",
            color: "#c69c6d",
          },
        },
      },
      backgroundImage: {
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,rgb(249 250 251) 5px,rgb(249 250 251) 100px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, rgb(249, 250, 251) 3px, rgb(249, 250, 251) 50px)",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, rgb(249, 250, 251) 3px, rgb(249, 250, 251) 35px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, rgb(17 24 39)5px, rgb(17 24 39)100px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, rgb(17, 24, 39) 3px, rgb(17, 24, 39) 50px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, rgb(17, 24, 39) 3px, rgb(17, 24, 39) 35px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
