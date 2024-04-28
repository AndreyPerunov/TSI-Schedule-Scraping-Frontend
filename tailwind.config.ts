import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "426px",
      md: "769px",
      semimd: "901px",
      lg: "1281px"
    },
    extend: {
      colors: {
        passive: "#9F9F9F",
        "passive-light": "#D9D9D9",
        primary: "#2563EB",
        secondary: "#2B9DCE",
        dark: "#1A202F"
      },
      keyframes: {
        darkIn: {
          "0%": { backgroundColor: "rgba(0, 0, 0, 0)" },
          "100%": { backgroundColor: "rgba(0, 0, 0, 0.5)" }
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        fadeOut: {
          "0%": { opacity: "0.9" },
          "100%": { opacity: "0", filter: "blur(24px)" }
        },
        fromBottomToTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        darkIn: "darkIn 0.2s ease-in-out",
        slideIn: "slideIn 0.2s ease-in-out",
        fadeOut: "fadeOut 0.8s ease-in-out forwards",
        fromBottomToTop: "fromBottomToTop 1.5s ease-in-out forwards"
      }
    }
  },
  plugins: []
}
export default config
