import { withContentCollections } from "@content-collections/next";
import withExportImages from "next-export-optimize-images";

export default async function config() {
	const config = await withExportImages({
		output: "export",
	});
	return withContentCollections(config);
}
