import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0b3c3c',
				secondary: '#0c6464',
				third: '#148b8b',
				dark: '#041919',
				greenP: '#669999', 
			},
		},
	},
	plugins: [animations],
}
