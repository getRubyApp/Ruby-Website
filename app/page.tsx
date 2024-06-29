import { AppStoreIcon } from "@/components/Icons";
import Hero from "@/assets/Hero.webp";
import Image from "next/image";
import { Aurora } from "@/components/Aurora";

export default function Home() {
	return (
		<main className="lg:py-20 py-8 sm:py-12">
			<Aurora />

			<p className="font-black text-4xl lg:text-5xl text-center drop-shadow tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-pink-800 dark:from-pink-200 dark:to-pink-400">
				News that Shines
			</p>

			<p className="text-center text-lg lg:text-xl max-w-xl text-balance mx-auto pt-2">
				Ruby is a beautifully designed news app for Apple platforms,
				built to be simple and easy to use.
			</p>

			<a
				className="flex items-center gap-2 rounded-full px-3 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition ease-in-out group w-fit mx-auto text-center mt-4 mb-8"
				href="https://apps.apple.com/us/app/ruby-your-news-assistant/id1522815729"
			>
				<AppStoreIcon className="group-hover:text-pink-300 dark:group-hover:text-pink-700 transition ease-in-out" />
				Download on the App Store
			</a>

			<Image src={Hero} alt="Ruby on various Apple devices" />
		</main>
	);
}
