import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
// @ts-ignore This is a hack to get the tailwind colors
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			animation: {
				aurora: "aurora 60s linear infinite",
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
			},
		},
	},
	plugins: [typography, addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
