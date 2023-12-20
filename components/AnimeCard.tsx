/** @format */

// Importing the Image component from the "next/image" package
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

// Defining the interface for the anime object
export interface AnimeProp {
	id: string;
	name: string;
	image: {
		original: string;
	};
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
}

// Defining the interface for the component props
interface Prop {
	anime: AnimeProp;
	index: number;
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

// Defining the AnimeCard component
function AnimeCard({ anime, index }: Prop) {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * 0.25,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full">
			<div className="relative w-full h-[37vh]">
				{/* Rendering the Image component with the anime image */}
				<Image
					src={`https://shikimori.one${anime.image.original}`}
					alt={anime.name}
					fill
					className="rounded-xl"
				/>
			</div>
			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					{/* Rendering the anime name */}
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{anime.name}
					</h2>
					<div className="py-1 px-2 bg-[#161921] rounded-sm">
						{/* Rendering the anime kind */}
						<p className="text-white text-sm font-bold capitalize">
							{anime.kind}
						</p>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex flex-row gap-2 items-center">
						{/* Rendering the episodes icon and the number of episodes */}
						<Image
							src="./episodes.svg"
							alt="episodes"
							width={20}
							height={20}
							className="object-contain"
						/>
						<p className="text-base text-white font-bold">
							{anime.episodes || anime.episodes_aired}
						</p>
					</div>
					<div className="flex flex-row gap-2 items-center">
						{/* Rendering the star icon and the anime score */}
						<Image
							src="./star.svg"
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	);
}

// Exporting the AnimeCard component as the default export
export default AnimeCard;
