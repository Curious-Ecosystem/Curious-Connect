/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        gradient: "linear-gradient(243.43deg, #1F2329 0.37%, #1D2026 100%)",
        gradient2: "linear-gradient(190.43deg, #0799C8 30%, #113F51 60%)",
        gradient3: "linear-gradient(210.43deg, #0799C8 5%, #113F51 31%)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1F2329", // Use this for primary background color
        // Add more custom background colors here if needed
      }),

      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '145': '145deg',
      },
      colors: {
        borderclr: "#408ACD",
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ]
};
