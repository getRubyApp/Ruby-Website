import { allPosts } from "content-collections";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Updates",
	description:
		"Stay up to date with the latest Ruby news, updates, and features.",
};

export default function Updates() {
	return (
		<main>
			<h1 className="font-bold text-3xl lg:text-4xl tracking-tight">
				Updates
			</h1>
			<p className="py-2 text-zinc-800 dark:text-zinc-200">
				Stay up to date with the latest Ruby news and features.{" "}
				<a
					href="https://x.com/intent/user?screen_name=getRubyApp"
					className="underline dark:hover:text-pink-300 hover:text-pink-700 transition ease-in-out"
				>
					Follow Ruby on X
				</a>{" "}
				for more frequent updates.
			</p>
			<ul>
				{allPosts.map((post) => (
					<li key={post._meta.path}>
						<Link href={`/updates/${post._meta.path}`}>
							<h3>{post.title}</h3>
							<p>{post.summary}</p>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
