import { XIcon, GitHubIcon, ThreadsIcon } from "@/components/Icons";

export default function Footer() {
	return (
		<footer className="rounded-lg bg-zinc-50 dark:bg-zinc-950 my-6 text-zinc-800 dark:text-zinc-200 p-3 prose dark:prose-invert prose-sm prose-zinc dark:hover:prose-a:text-pink-300 hover:prose-a:text-pink-700 prose-a:transition prose-a:ease-in-out">
			<div className="flex space-x-4">
				<a href="https://x.com/getRubyApp" target="_blank">
					<XIcon />
				</a>

				<a href="https://github.com/getRubyApp" target="_blank">
					<GitHubIcon />
				</a>

				<a href="https://www.threads.net/@getrubyapp" target="_blank">
					<ThreadsIcon />
				</a>
			</div>

			<p>
				Made by <a href="https://x.com/mbrkhrdt">Michael Burkhardt</a>{" "}
				in NYC.
				<br />
				Website built by <a href="https://nickoates.com">Nick Oates</a>.
				<br />
				Ruby icon designed by{" "}
				<a href="https://x.com/AetherAurelia">Aether</a>.
			</p>
			<p>
				<a href="/privacy">Privacy Policy</a> &bull;{" "}
				<a href="https://dl.rubyapp.org/Ruby2PressKit.zip">Press Kit</a>
			</p>
			<p>App Store and the Apple logo are trademarks of Apple Inc.</p>
			<p>&copy; 2020-2024 Michael Burkhardt</p>
		</footer>
	);
}
