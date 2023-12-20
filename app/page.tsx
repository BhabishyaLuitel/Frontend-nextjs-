/**
 * This file contains the Home component which is responsible for rendering the main page of the application.
 * The Home component fetches anime data using the fetchAnime function and displays it using the AnimeCard component.
 * It also includes a LoadMore component for loading more anime data.
 *
 * @format
 */

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

/**
 * The Home component is responsible for rendering the main page of the application.
 * It fetches anime data using the fetchAnime function and displays it using the AnimeCard component.
 * It also includes a LoadMore component for loading more anime data.
 *
 * @returns The JSX element representing the main page of the application.
 */
async function Home() {
	const data = await fetchAnime(1);

	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<h2 className="text-3xl text-white font-bold">Explore Anime</h2>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<LoadMore />
		</main>
	);
}

export default Home;
