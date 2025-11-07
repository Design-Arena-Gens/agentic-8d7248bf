import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0f14",
          800: "#0f141b"
        },
        neon: {
          cyan: "#00f0ff",
          blue: "#3b82f6"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 240, 255, 0.12)",
        soft: "0 10px 40px rgba(0,0,0,0.35)"
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
