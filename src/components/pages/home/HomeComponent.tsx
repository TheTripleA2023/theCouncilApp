"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import {  Button, Center, VStack, Spacer, Box } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { Suspense } from "react";
import TitleComponent from "./Title";
import SubmitButton from "../misc/SubmitButton";

const CouncilTable = dynamic(
	() => import("@/components/canvas/Models").then((mod) => mod.CouncilTable),
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

function HomeComponent(props) {
	const [hover, setHover] = useState(false);

	const handleSubmit = (inputVal) => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.onButtonClick) {
			props.onButtonClick(inputVal);
		}
	};
	
	const handleSelection = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.onSelectionClick) {
			props.onSelectionClick();
		}
	};
	
	return (
		<div className="flex flex-col relative h-screen justify-between overflow-hidden overscroll-none">
			{/* Header Components */}
			<Center paddingTop={['3em','4em']}>
				<VStack maxW={['100%','75%']} lineHeight={['48px','56px','80px']}>
					<TitleComponent/>
					<Spacer maxH={'24px'}/>
					<SubmitButton onButtonClick={handleSubmit}/>
				</VStack>
         	</Center>
			{/* Table Components */}
			<Box minH={['12px','48px']}/>
			<>
				<div className="relative mt-auto h-full w-full pt-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 -z-1000">
					<View className="relative animate-pulse h-full sm:w-full overflow-hidden overscroll-none">
						<Suspense fallback={null}>
							<CouncilTable
								scale={2}
								position={[0, -0.5, 0]}
								callback={setHover}
								setSelctionCallback={handleSelection}
							/>
							<Common />
						</Suspense>
					</View>
				</div>
				<div className="selection-input">
					<div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<Button colorScheme={hover?'white':'whiteAlpha'} variant={hover?'outline':'outline'} opacity={hover?1:0.5} onClick={handleSelection} display={{base:'none',md:'flex'}}>
								Choose your Council
							</Button>
							<Button colorScheme={'white'} variant={hover?'outline':'outline'} opacity={0.8} onClick={handleSelection} display={{base:'flex',md:'none'}}>
								Choose your Council
							</Button>
					</div>
				</div>
				
			</>

		</div>

	);
}

export default HomeComponent;
