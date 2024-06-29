import { allPosts } from "content-collections";
import Link from "next/link";

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
