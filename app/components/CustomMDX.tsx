import { MDXContent } from "@content-collections/mdx/react";

export function CustomMDX({ code }: { code: string }) {
	return <MDXContent code={code} />;
}
