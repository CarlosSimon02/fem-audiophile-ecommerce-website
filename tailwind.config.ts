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
          900: "#000000",
          800: "#191919",
        },
        light: {
          100: "#FFFFFF",
          200: "#FAFAFA",
          400: "#F1F1F1",
        },
        accent: {
          900: "#D87D4A",
          600: "#FBAF85",
        },
      },
    },
  },
  plugins: [],
};
export default config;
