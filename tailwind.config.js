/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1050px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }
      },
      trans_on: {
        right: "0",
        transition: "left .5s ease-out",
      },
      trans_off: {
        right: "-30rem",
        transition: "left 1s ease-out",
      },
    },
  },
  plugins: [],
}
