"use client";

import { Text, Button, Image } from "@chakra-ui/react";
import { url } from "@/helpers/global";

// import DiscoGif from "./../../public/img/Disco1.gif"
import dynamic from "next/dynamic";

const Blob = dynamic(
	() => import("@/components/canvas/Models").then((mod) => mod.Blob),
	{ ssr: false }
);
const View = dynamic(
	() => import("@/components/canvas/View").then((mod) => mod.View),
	{
		ssr: false,
		loading: () => (
			<div className="flex h-96 w-full flex-col items-center justify-center">
				<svg
					className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
		),
	}
);
const Common = dynamic(
	() => import("@/components/canvas/View").then((mod) => mod.Common),
	{ ssr: false }
);

export default function Page() {
	return (
		<div className="end-content">
			<div className="end-title">
				<div className="disco-container">
					<Image className="disco-gif" src="./img/Disco1.gif" />
				</div>
				<Text className="end-h1">The Council thanks you!</Text>
				<Text className="end-h2">
					Thank you for choosing
					<span className="endpage-gradient-text">The Council</span>.
				</Text>

				<Text className="end-h2">We hope our advice helped.</Text>
				<a href="url">
					<Button
						className="refresh-button"
						id="refresh"
						// onClick={refreshPage}
					>
						Ask another question
					</Button>
				</a>

				<Image className="pink-floor" src="./img/Pinkfloor.svg" />
			</div>
		</div>
	);
}
