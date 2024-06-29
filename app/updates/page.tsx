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

			<p className="text-zinc-800 dark:text-zinc-200 py-2">
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
					<li key={post._meta.path} className="group">
						<Link href={`/updates/${post._meta.path}`}>
							<article className="p-4 transition ease-in-out rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 max-w-xl">
								<time
									dateTime={post.date.toISOString()}
									className="text-zinc-700 dark:text-zinc-300"
								>
									{post.date.toLocaleDateString("en-US", {
										dateStyle: "long",
									})}
								</time>
								<h2 className="font-bold text-2xl">
									{post.title}
								</h2>
								{post.summary && <p>{post.summary}</p>}
							</article>
						</Link>

						<div className="px-4 my-1 max-w-xl">
							<hr className="border-t border-zinc-300 dark:border-zinc-700 group-last:hidden" />
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
