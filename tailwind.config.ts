import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        nexus: {
          blue: "#1C35C8",
          navy: "#0D1B2A",
          electric: "#4F6FE8",
          ice: "#EEF2FF",
          white: "#FFFFFF",
          gray: "#6B7280",
          offwhite: "#F8FAFC",
          green: "#10B981",
          red: "#EF4444",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      fontSize: {
        'hero': ['clamp(40px, 4.5vw, 68px)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section': ['clamp(36px, 4vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'card-title': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'cta': ['15px', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '600' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blobFloat1": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(30px, -20px) scale(1.05)" },
        },
        "blobFloat2": {
          "0%": { transform: "translate(0px, 0px) scale(1.02)" },
          "100%": { transform: "translate(-20px, 30px) scale(0.98)" },
        },
        "blobFloat3": {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(15px, 15px) scale(1.03)" },
        },
        "blobMain": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(40px, -30px) scale(1.08)" },
        },
        "blobSecondary": {
          "0%": { transform: "translate(0px, 0px) scale(1.02)" },
          "100%": { transform: "translate(-30px, 40px) scale(0.95)" },
        },
        "blobRight": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(-25px, -20px) scale(1.05)" },
        },
        "blobLeft": {
          "0%": { transform: "translate(0px, 0px) scale(0.98)" },
          "100%": { transform: "translate(35px, 25px) scale(1.06)" },
        },
        "blobTeal": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "100%": { transform: "translate(-20px, -30px) scale(1.04)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 12s ease infinite",
        "float": "float 4s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      backgroundImage: {
        'gradient-nexus': 'linear-gradient(135deg, #1C35C8 0%, #4F6FE8 50%, #0D1B2A 100%)',
        'gradient-hero': 'linear-gradient(-45deg, #0D1B2A, #111128, #0f0f20, #0D1B2A)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
