import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F4F7FC",
          soft: "#E9F0FB",
          dark: "#08132B",
          "dark-soft": "#0E1D3D"
        },
        card: {
          dark: "#132952"
        },
        text: {
          primary: "#0F1E3D",
          secondary: "#5B6B8C",
          "dark-primary": "#F1F5FD",
          "dark-secondary": "#93A6CC"
        },
        navy: {
          DEFAULT: "#0E2A5E",
          dark: "#1E3A8A"
        },
        accent: {
          DEFAULT: "#2F6FED",
          light: "#E4EDFD",
          dark: "#5B9DFF"
        },
        border: {
          DEFAULT: "#DAE3F5",
          dark: "#26396B"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: {
        content: "1360px"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,42,94,0.06), 0 10px 30px -14px rgba(14,42,94,0.18)",
        "soft-lg": "0 2px 4px rgba(14,42,94,0.07), 0 24px 48px -20px rgba(14,42,94,0.24)",
        gold: "0 10px 30px -12px rgba(47,111,237,0.4)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(2%, 3%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "drift": "drift 14s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;