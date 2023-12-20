/** @format */

// Importing the 'server' module

"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Function to fetch anime data
export const fetchAnime = async (page: Number) => {
	// Sending a GET request to the API endpoint
	const response = await fetch(
		`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
	);

	// Parsing the response data
	const data = await response.json();

	return data.map((item: AnimeProp, index: number) => (
		<AnimeCard key={item.id} anime={item} index={index} />
	));
};
