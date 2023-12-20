/**
 * This file contains the implementation of the LoadMore component.
 * The LoadMore component is responsible for fetching and displaying additional anime data when the user scrolls to the bottom of the page.
 *
 * @format
 */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";
import AnimeCard from "./AnimeCard";

let page = 2;

export type AnimeCard = JSX.Element;

/**
 * The LoadMore component fetches and displays additional anime data when the user scrolls to the bottom of the page.
 */
function LoadMore() {
	const { ref, inView } = useInView();
	const [data, setData] = useState<AnimeCard[]>([]);

	useEffect(() => {
		if (inView) {
			// Fetch anime data from the server
			fetchAnime(page).then((res) => {
				// Append the fetched data to the existing data
				setData([...data, ...res]);
				page++;
			});
		}
	}, [inView, data]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{/* Render each anime card */}
				{data}
			</section>

			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					{/* Display a loading spinner */}
					<Image
						src="./spinner.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
}

export default LoadMore;
