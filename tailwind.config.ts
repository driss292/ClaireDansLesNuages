import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        copperplateRegular: [
          "Copperplate-regular",
          ...defaultTheme.fontFamily.sans,
        ], // Ajout de la police
        copperplateLight: [
          "Copperplate-light",
          ...defaultTheme.fontFamily.sans,
        ], // Ajout de la police
        copperplateBold: ["Copperplate-bold", ...defaultTheme.fontFamily.sans], // Ajout de la police
      },
    },
  },
  plugins: [],
} satisfies Config;
