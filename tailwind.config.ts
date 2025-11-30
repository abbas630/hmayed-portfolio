import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // zinc-950
        surface: "#18181b",    // zinc-900
        primary: "#f5f5f4",    // stone-100
        secondary: "#a8a29e",  // stone-400
        accent: "#D94E1F",     // Deep Saffron
      },
    },
  },
  plugins: [],
};
export default config;