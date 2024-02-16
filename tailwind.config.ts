import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
        primary: "#2563EB",
        secondary: "#2B9DCE"
      }
    }
  },
  plugins: []
}
export default config
