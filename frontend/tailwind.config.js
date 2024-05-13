/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{      
          orange:'#ff742e',
          skyBlue:'#0d70e9',
          purple:'#7c0dec',
          yellow :'#e59c0d',  
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        gradient: "linear-gradient(243.43deg, #1F2329 0.37%, #1D2026 100%)",
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
     
        
    },
  },
  plugins: [],
};
