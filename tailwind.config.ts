import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
	plugins: [typography],
};

export default config;
