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
			animation: {
				marquee: "marquee 30s linear infinite",
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-220%)" },
				}
			},
			content: {
				quote: 'url("src/images/icons/icon-quote.svg")'
			}
		},
	},
	plugins: [],
};
