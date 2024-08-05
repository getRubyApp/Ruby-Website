import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
};

export default function About() {
	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc">
			<h1>About Ruby</h1>

			<p>
				Ruby is a simple and familiar app that delivers the news.
				It&apos;s meant to be easy to understand, and provide a clean
				user interface to keep up with the world. Ruby allows users to
				sort by individual topics, keep up with trends, search for
				stories, and bookmark articles to come back to later.
			</p>

			<p>
				Ruby development began in July 2020, and launched in September
				that year. Since then, the app has gained thousands of downloads
				and has been featured on the App Store in many regions across
				the globe.
			</p>

			<p>
				Since the initial launch in 2020, Ruby expanded to macOS in
				2021, launched a fully revamped Apple Watch experience in 2023,
				and was one of the first 1000 native apps available on Apple
				Vision Pro in 2024.
			</p>

			<p>
				Ruby is available for free on the App Store, and with a purchase
				of Ruby Premium, you can unlock an ad free experience and the
				complete feature set.
			</p>

			<p>Development of Ruby is made possible by the following:</p>

			<ul>
				<li>
					<a href="https://x.com/mbrkhrdt">Michael Burkhardt</a>
				</li>
				<li>
					<a href="https://x.com/AetherAurelia">Aether</a>
				</li>
				<li>
					<a href="https://nickoates.com">Nick Oates</a>
				</li>
			</ul>
		</main>
	);
}
