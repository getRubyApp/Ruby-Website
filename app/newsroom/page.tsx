import { allPosts } from "content-collections";

export default function Newsroom() {
	return (
		<main>
			<ul>
				{allPosts.map((post) => (
					<li key={post._meta.path}>
						<a href={`/newsroom/${post._meta.path}`}>
							<h3>{post.title}</h3>
							<p>{post.summary}</p>
						</a>
					</li>
				))}
			</ul>
		</main>
	);
}
