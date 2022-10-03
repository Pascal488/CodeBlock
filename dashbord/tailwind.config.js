/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xs': {'max': '539px'},
  
        'hb':{'max':'1024px'},
  
        'lw':{'max':'280px'},
  
        'do':{'max':'540'},
      },
    extend: {
        animation: {
            "rotate-diagonal-2": "rotate-diagonal-2 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both"
        },
        keyframes: {
            "rotate-diagonal-2": {
                "0%": {
                    transform: "rotate3d(-1, 1, 0, 0deg)"
                },
                "50%": {
                    transform: "rotate3d(-1, 1, 0, 180deg)"
                },
                to: {
                    transform: "rotate3d(-1, 1, 0, 360deg)"
                }
            }
        },
  
    animation: {
      "vibrate-1": "vibrate-1 0.3s linear  infinite both"
  },
  keyframes: {
      "vibrate-1": {
          "0%,to": {
              transform: "translate(0)"
          },
          "20%": {
              transform: "translate(-2px, 2px)"
          },
          "40%": {
              transform: "translate(-2px, -2px)"
          },
          "60%": {
              transform: "translate(2px, 2px)"
          },
          "80%": {
              transform: "translate(2px, -2px)"
          }
      } 
  
  },
  animation: {
    "slide-out-blurred-tr": "slide-out-blurred-tr 5s cubic-bezier(0.895, 0.030, 0.685, 0.220)   both"
},
keyframes: {
    "slide-out-blurred-tr": {
        "0%": {
            transform: "translate(0, 0) skew(0deg, 0deg)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1"
        },
        to: {
            transform: "translate(1000px, -1000px) skew(-80deg, -10deg)",
            "transform-origin": "0% 0%",
            filter: "blur(40px)",
            opacity: "0"
        },
    }}}  },
   
  plugins: [],
}
