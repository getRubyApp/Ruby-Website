import { GitHubIcon, PressKitIcon, XIcon } from "@/components/Icons";

export default function Footer() {
	return (
		<footer className="rounded-lg bg-zinc-50 dark:bg-zinc-950 my-3 text-zinc-800 dark:text-zinc-200 p-3 prose dark:prose-invert prose-sm prose-zinc dark:hover:prose-a:text-pink-300 hover:prose-a:text-pink-700 prose-a:transition prose-a:ease-in-out">
			<div className="flex space-x-4">
				<a
					href="https://x.com/getRubyApp"
					title="Ruby on X"
					target="_blank"
				>
					<XIcon />
				</a>

				<a
					href="https://github.com/getRubyApp"
					title="Ruby on GitHub"
					target="_blank"
				>
					<GitHubIcon />
				</a>

				<a
					href="https://dl.rubyapp.org/Ruby2PressKit.zip"
					title="Download Press Kit"
				>
					<PressKitIcon />
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
			<p>App Store and the Apple logo are trademarks of Apple Inc.</p>
			<p>&copy; 2020-2024 Michael Burkhardt</p>
		</footer>
	);
}
