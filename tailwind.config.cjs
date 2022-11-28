/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				custom: {
					dark: "#0f172a",
					accent: "#6b21a8",
				},
			},
		},
	},
	plugins: [],
};