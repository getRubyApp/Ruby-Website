import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s — Ruby",
		default: "Ruby — News that Shines",
	},
	description:
		"Ruby is a beautifully designed news app for Apple platforms, built to be simple and easy to use.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} dark:text-white dark:bg-zinc-900 bg-zinc-100 antialiased pt-20 px-3 max-w-6xl mx-auto min-h-dvh flex flex-col justify-between`}
			>
				<Navbar />

				{children}

				<Footer />
			</body>
		</html>
	);
}
