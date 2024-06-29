import { allPosts } from "content-collections";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Updates",
	description:
		"Stay up to date with the latest Ruby news, updates, and features.",
};

export default function Newsroom() {
	return (
		<main>
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
