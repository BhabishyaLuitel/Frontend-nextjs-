/**
 * The layout component for the Anime Vault application.
 *
 * This component provides the basic structure and styling for the application layout,
 * including the hero section, main content, and footer.
 *
 * @format
 * @param children - The child components to be rendered within the layout.
 * @returns The rendered layout component.
 */

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

// Import the DM_Sans font and specify the subset as "latin"
const dmSans = DM_Sans({ subsets: ["latin"] });

// Define the metadata for the page
export const metadata: Metadata = {
	title: "Anime Vault",
	description: "Your favorite anime, all in one place.",
};

// Define the RootLayout component
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={dmSans.className}>
				<main className="max-w-7xl mx-auto bg-[#0F1117]">
					<Hero /> {/* Render the Hero component */}
					{children} {/* Render the child components */}
					<Footer /> {/* Render the Footer component */}
				</main>
			</body>
		</html>
	);
}
