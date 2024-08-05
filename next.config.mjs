import { createContentCollectionPlugin } from "@content-collections/next";
import withExportImages from "next-export-optimize-images";

export default async function config() {
	const config = await withExportImages({
		output: "export",
		images: {
			loader: "custom",
			loaderFile: "./app/lib/image-loader.ts",
		},
	});

	const withContent = createContentCollectionPlugin({
		configPath: "./app/lib/content-collections.ts",
	});

	return withContent(config);
}
