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
			yellow: '#FCF433'
		}
	}
} satisfies Config;

export default config;
