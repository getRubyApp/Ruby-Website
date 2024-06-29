import { CustomMDX } from "@/components/CustomMDX";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._meta.path === params.slug);
	if (!post) return notFound();

	return {
		title: post.title,
		description: post.summary,
	};
}

export default function Post({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._meta.path === params.slug);
	if (!post) return notFound();

	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc">
			<time dateTime={post.date.toISOString()}>
				{post.date.toLocaleDateString("en-US", {
					dateStyle: "long",
				})}
			</time>

			<h1>{post.title}</h1>

			<CustomMDX code={post.mdx} />
		</main>
	);
}
