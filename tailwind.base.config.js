const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	// important: true,
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx,js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'left-translate': {
					'0%': { transform: 'translate(-100%)' },
					'100%': { transform: 'translate(0%)' }
				},
				'right-translate': {
					'0%': { transform: 'translate(100%)' },
					'100%': { transform: 'translate(0%)' }
				},
				'top-translate': {
					'0%': { transform: 'translate(0,-100%)' },
					'100%': { transform: 'translate(0,0%)' }
				},
				'bottom-translate': {
					'0%': { transform: 'translate(0,100%)' },
					'100%': { transform: 'translate(0,0%)' }
				}
			},
			animation: {
				'left-translate': 'left-translate 200ms ease-out',
				'right-translate': 'right-translate 200ms ease-out',
				'bottom-translate': 'bottom-translate 200ms ease-out',
				'top-translate': 'top-translate 200ms ease-out'
			},
			'-right-8': { right: '-30px' },

			fontFamily: {
				primary: ['var(--typography-font-family-primary)', 'sans-serif'],
				secondary: ['var(--typography-font-family-secondary)', 'sans-serif']
				// sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				// NotoSans: ['var(--typography-copy-body-1-font-family)'],
				// Merriweather: ['var(--typography-headers-pagetitle-1-font-family)']
			},
			colors: {
				black: 'var(--black)',
				white: 'var(--white)',
				border: 'var(--border)',
				scroll: 'var(--scroll)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				destructive: 'var(--destructive)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				basic: {
					DEFAULT: 'var(--basic-text)'
				},
				primary: {
					DEFAULT: 'var(--primary-1)',
					foreground: 'var(--primary-foreground)',
					1: 'var(--primary-1)',
					2: 'var(--primary-2)',
					3: 'var(--primary-3)',
					4: 'var(--primary-4)',
					5: 'var(--primary-5)'
				},
				secondary: {
					DEFAULT: 'var(--secondary-1)',
					foreground: 'var(--secondary-foreground)',
					1: 'var(--secondary-1)',
					2: 'var(--secondary-2)',
					3: 'var(--secondary-3)',
					4: 'var(--secondary-4)',
					5: 'var(--secondary-5)'
				},
				tertiary: {
					DEFAULT: 'var(--tertiary-1)',
					foreground: 'var(--tertiary-foreground)',
					1: 'var(--tertiary-1)',
					2: 'var(--tertiary-2)',
					3: 'var(--tertiary-3)',
					4: 'var(--tertiary-4)',
					5: 'var(--tertiary-5)'
				},
				error: {
					DEFAULT: 'var(--error-1)',
					1: 'var(--error-1)',
					2: 'var(--error-2)',
					3: 'var(--error-3)',
					4: 'var(--error-4)',
					5: 'var(--error-5)',
					6: 'var(--error-6)'
				},
				grey: {
					DEFAULT: 'var(--grey-1)',
					1: 'var(--grey-1)',
					2: 'var(--grey-2)',
					3: 'var(--grey-3)',
					4: 'var(--grey-4)',
					5: 'var(--grey-5)',
					6: 'var(--grey-6)'
				},

				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				status: {
					draft: 'var(--status-draft)',
					submitted: 'var(--status-submitted)',
					'pending-review': 'var(--status-pending-review)',
					reviewed: 'var(--status-reviewed)',
					'pending-recommendation': 'var(--status-pending-recommendation)',
					'pending-approval': 'var(--status-pending-approval)',
					'pending-resubmission': 'var(--status-pending-resubmission)',
					rejected: 'var(--status-rejected)',
					reopen: 'var(--status-reopen)',
					approved: 'var(--status-approved)'
				}
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius-md)',
				sm: 'var(--radius-sm)'
			},
			fontSize: {
				xs: 'var(--font-size-xs)',
				sm: 'var(--font-size-sm)',
				base: 'var(--font-size-base)',
				lg: 'var(--font-size-lg)',
				xl: 'var(--font-size-xl)',
				'2xl': 'var(--font-size-2xl)',
				'3xl': 'var(--font-size-3xl)',
				'4xl': 'var(--font-size-4xl)',
				'5xl': 'var(--font-size-5xl)'
			},
			fontWeight: {
				thin: 'var(--font-weight-thin)',
				extralight: 'var(--font-weight-extralight)',
				light: 'var(--font-weight-light)',
				normal: 'var(--font-weight-normal)',
				medium: 'var(--font-weight-medium)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)',
				extrabold: 'var(--font-weight-extrabold)',
				black: 'var(--font-weight-black)'
			},
			letterSpacing: {
				xs: 'var(--letter-spacing-xs)',
				sm: 'var(--letter-spacing-sm)',
				lg: 'var(--letter-spacing-lg)',
				xl: 'var(--letter-spacing-xl)'
			},
			lineHeight: {
				xs: 'var(--line-height-xs)',
				sm: 'var(--line-height-sm)',
				md: 'var(--line-height-md)'
			}
		}
	},
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide'), require('flowbite/plugin'), require('@tailwindcss/container-queries')],

	future: {
		removeDeprecatedGapUtilities: true
	}
}
