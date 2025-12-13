import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  				backgroundImage: {
			'gradient-primary': 'var(--gradient-primary)',
			'gradient-hero': 'var(--gradient-hero)',
			'gradient-card': 'var(--gradient-card)',
			'gradient-luxury': 'var(--gradient-luxury)',
			'gradient-purple': 'var(--gradient-purple)',
		},
		boxShadow: {
			'glow': 'var(--shadow-glow)',
			'purple': 'var(--shadow-purple)',
			'card': 'var(--shadow-card)',
			'luxury': 'var(--shadow-luxury)',
		},
		transitionTimingFunction: {
			'smooth': 'var(--transition-smooth)',
			'bounce': 'var(--transition-bounce)',
		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'fade-in': {
				'0%': { opacity: '0', transform: 'translateY(20px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'fade-in-up': {
				'0%': { opacity: '0', transform: 'translateY(40px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'scale-in': {
				'0%': { transform: 'scale(0.8)', opacity: '0' },
				'100%': { transform: 'scale(1)', opacity: '1' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-20px)' }
			},
			'float-slow': {
				'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
				'50%': { transform: 'translateY(-30px) rotate(5deg)' }
			},
			'glow-pulse': {
				'0%, 100%': { boxShadow: '0 0 20px hsl(45 100% 65% / 0.3)' },
				'50%': { boxShadow: '0 0 60px hsl(45 100% 65% / 0.6), 0 0 100px hsl(280 100% 70% / 0.3)' }
			},
			'glow-pulse-slow': {
				'0%, 100%': { 
					boxShadow: '0 0 20px rgba(251, 191, 36, 0.3), 0 0 40px rgba(251, 191, 36, 0.2)' 
				},
				'50%': { 
					boxShadow: '0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.4), 0 0 120px rgba(168, 85, 247, 0.3)' 
				}
			},
			'shimmer': {
				'0%': { backgroundPosition: '-200% 0' },
				'100%': { backgroundPosition: '200% 0' }
			},
			'bounce-in': {
				'0%': { transform: 'scale(0.3)', opacity: '0' },
				'50%': { transform: 'scale(1.1)', opacity: '0.8' },
				'100%': { transform: 'scale(1)', opacity: '1' }
			},
			'slide-in-right': {
				'0%': { transform: 'translateX(100%)', opacity: '0' },
				'100%': { transform: 'translateX(0)', opacity: '1' }
			},
			'slide-in-left': {
				'0%': { transform: 'translateX(-100%)', opacity: '0' },
				'100%': { transform: 'translateX(0)', opacity: '1' }
			},
			'rotate-slow': {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' }
			},
			'gradient-shift': {
				'0%': { backgroundPosition: '0% center' },
				'100%': { backgroundPosition: '200% center' }
			},
			'particle-float': {
				'0%': { transform: 'translateY(0) translateX(0) scale(0)', opacity: '0' },
				'10%': { opacity: '1' },
				'90%': { opacity: '1' },
				'100%': { transform: 'translateY(-100vh) translateX(100px) scale(1)', opacity: '0' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'fade-in': 'fade-in 0.6s ease-out',
			'fade-in-up': 'fade-in-up 0.8s ease-out',
			'scale-in': 'scale-in 0.5s ease-out',
			'float': 'float 6s ease-in-out infinite',
			'float-slow': 'float-slow 8s ease-in-out infinite',
			'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			'glow-pulse-slow': 'glow-pulse-slow 3s ease-in-out infinite',
			'shimmer': 'shimmer 2s linear infinite',
			'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			'slide-in-right': 'slide-in-right 0.6s ease-out',
			'slide-in-left': 'slide-in-left 0.6s ease-out',
			'rotate-slow': 'rotate-slow 20s linear infinite',
			'gradient-shift': 'gradient-shift 3s linear infinite',
			'particle-float': 'particle-float 15s infinite'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
