import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		colors: {
			pink: '#F4A9B8',
			blue: '#5CCEFA',
			purple: '#9C59D1',
			yellow: '#FCF433',
			white: '#FFFFFF',
			black: '#000000'
		},
		fontFamily: {
			sans: ['var(--font-sans)', 'sans-serif'],
			serif: ['var(--font-serif)', 'serif']
		}
	}
} satisfies Config;

export default config;
