import plugin from "tailwindcss/plugin";
/** 
 * 
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      360 : "360px",
      480 : "480px",
      sm : "576px",
      md : "768px",
      xl : "1024px",
      xs : "1536px"
    },
    container: {
      center: true,
      screens: {
        360: "100%",
        480: "100%",
        sm: "100%",
        md: "100%",
        xl: "1024px",
        xs : "1024px",
      },
      padding: "20px",
    },
    extend: {},
  },
  plugins: [
    plugin(function({addComponents, addUtilities}){
      addComponents({
        "p" : {
          fontSize : "20px",
          fontFamile : "var(--inter)",
          fontFamily : "500"
        },
        "h1" : {
          fontSize : "clamp(1.875rem, 1.197rem + 3.01vw, 3.125rem)",
          fontFamile : "var(--inter)",
          fontWeight : "700"
        },
        "h2" : {
          fontSize : "30px",
          fontFamile : "var(--inter)",
          fontWeight : "600"
        },
        "h3" : {
          fontSize : "clamp(1.25rem, 1.081rem + 0.75vw, 1.563rem)",
          fontFamile : "var(--inter)",
          fontWeight : "500",
          
        },
        "h4" : {
          fontSize : "20px",
          fontFamile : "var(--inter)",
          fontWeight : "500"
        }
      })
      addUtilities({
        ".white-shadow": {
          boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
        }
      })
    } )
  ],
}

