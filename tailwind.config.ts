import type { Config } from "tailwindcss";
import { screens } from "./utils/constants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens,
    extend: {
      colors: {
        dark: {
          900: "hsl(0, 0%, 0%)",
          800: "hsl(0, 0%, 6%)",
          700: "#191919",
          600: "#4C4C4C",
          500: "hsla(0, 0%, 0%, 50%)",
          overlay: "hsla(0, 0%, 0%, 40%)",
        },
        light: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 98%)",
          300: "hsl(0, 0%, 95%)",
          400: "hsl(0, 0%, 94%)",
          450: "hsla(0, 0%, 100%, 75%)",
          500: "hsla(0, 0%, 100%, 50%)",
          600: "hsla(0, 0%, 59%, 20%)",
        },
        accent: {
          900: "hsl(22, 65%, 57%)",
          600: "hsl(21, 94%, 75%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
