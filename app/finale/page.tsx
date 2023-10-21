"use client";

import { Text, Button, Image } from "@chakra-ui/react";
import { url } from "@/helpers/global";

// import DiscoGif from "./../../public/img/Disco1.gif"
import dynamic from "next/dynamic";


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
				<a href={url}>
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
