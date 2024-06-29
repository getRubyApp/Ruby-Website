import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
	name: "posts",
	directory: "posts",
	include: "**/*.{md,mdx}",
	schema: (z) => ({
		title: z.string(),
		summary: z.string().optional(),
		date: z.coerce.date(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		return {
			...document,
			mdx,
		};
	},
});

export default defineConfig({
	collections: [posts],
});
