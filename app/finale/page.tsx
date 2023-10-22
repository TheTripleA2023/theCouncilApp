"use client";

import GenericButton from "@/components/pages/misc/GenericButton";
import { Text, Image, Stack } from "@chakra-ui/react";

// import DiscoGif from "./../../public/img/Disco1.gif"
import Link from "next/link";


export default function Page() {
	return (
		<div className="end-content">
			<div className="end-title">
				<div className="disco-container">
					<Image className="disco-gif" src="./img/Disco1.gif" />
				</div>
				<Stack alignItems={'center'} alignContent={'center'} marginTop={['100px','200px']}>
					<Text fontSize={['32px','64px']} fontWeight={900}>The Council has been adjourned.</Text>
					<Text className="end-h2">
						Thank you for choosing
						<span className="endpage-gradient-text">The Council</span>.
					</Text>

					<Text className="end-h2">We hope our advice helped.</Text>
					<Link href={"/"}>
						<GenericButton text="Ask another question"/>
					</Link>
				</Stack>
				

				<Image className="pink-floor" src="./img/Pinkfloor.svg" />
				<Image className="animals" src="./img/Animals.png" />
			</div>
		</div>
	);
}
