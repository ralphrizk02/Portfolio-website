import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our futuristic theme
				futuristic: {
					dark: "#090b13",
					darker: "#0f0f12", 
					blue: {
						DEFAULT: "#00a8ff",
						light: "#33d2ff",
						dark: "#0063ff",
					},
					purple: {
						DEFAULT: "#6e59a5",
						light: "#9b87f5",
						dark: "#4a3b82",
					},
					neon: "#00ffaa",
					text: {
						primary: "#ffffff",
						secondary: "#a0a0b0",
						accent: "#33d2ff",
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)' 
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2)' 
					},
				},
				'reveal-text': {
					'0%': { 
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					},
				},
				'reveal-right': {
					'0%': { 
						transform: 'translateX(-20px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					},
				},
				'reveal-left': {
					'0%': { 
						transform: 'translateX(20px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'scale-in': {
					'0%': { 
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
				},
				'page-transition-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.98)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
				},
				'page-transition-out': {
					'0%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'100%': { 
						opacity: '0',
						transform: 'scale(1.02)'
					},
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'rotate-medium': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'card-hover': {
					'0%': { 
						transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
						boxShadow: '0 0 0 rgba(0, 168, 255, 0)'
					},
					'100%': { 
						transform: 'perspective(1000px) rotateY(10deg) rotateX(5deg) scale(1.05)',
						boxShadow: '0 0 30px rgba(0, 168, 255, 0.3)'
					},
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'reveal-text': 'reveal-text 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'reveal-right': 'reveal-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'reveal-left': 'reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in': 'fade-in 0.3s ease-out forwards',
				'scale-in': 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'page-transition-in': 'page-transition-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'page-transition-out': 'page-transition-out 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'rotate-medium': 'rotate-medium 8s linear infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(rgba(0, 168, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 255, 0.1) 1px, transparent 1px)',
				'hero-gradient': 'linear-gradient(to right, rgba(9, 11, 19, 0.8) 0%, rgba(9, 11, 19, 0.4) 50%, rgba(9, 11, 19, 0.8) 100%)',
			},
			backgroundSize: {
				'grid-50': '50px 50px',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
