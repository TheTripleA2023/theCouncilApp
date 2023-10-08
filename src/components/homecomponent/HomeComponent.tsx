"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Input, Button, Center } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import { Suspense } from "react";
import LogoutButton from "../pages/LogoutButton";

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
	const [inputField, setInputField] = useState("");

	const handleInputChange = (e) => {
		setInputField(e.target.value);
	};

	const handleSubmit = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.onButtonClick) {
			props.onButtonClick(inputField);
		}
	};

	return (
		<div className="flex flex-col relative h-screen justify-between overflow-hidden overscroll-none">
			{/* Header Components */}
			<Center>
				<div className="homepage-content">
					<div className="homepage-title">
						<h1 className="homepage-h1">In a dilemma?</h1>
						<h1 className="homepage-h1">
							Consult
							<span className="homepage-gradient-text">
								the Council.
							</span>
						</h1>
					</div>
					<div className="homepage-prompt">
						<Input
							className="prompt-input"
							placeholder="Tell us what's going on"
							style={{
								width: "488px",
							}}
							colorScheme="gray"
							variant="filled"
							textColor={'black'}
							_focus={{
								borderColor: "gray",
								textColor: "gray",
								bg: "white",
								boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
								overflowY: "auto",
								resize: "vertical",
							}}
							value={inputField}
							onChange={handleInputChange}
						/>
						<Button
							className="submit-button"
							style={{
								background:
									"linear-gradient(to right, #12e9f1, #bf7fea)",
							}}
							rightIcon={<AiOutlineCheck />}
							variant="solid"
							ml={2}
							onClick={handleSubmit}
						>
							OK
						</Button>
					</div>
				</div>
			</Center>


			{/* Table Components */}

			<div className="relative mt-auto h-full w-full pt-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
				<View className="relative animate-pulse h-full sm:w-full overflow-hidden overscroll-none">
					<Suspense fallback={null}>
						<CouncilTable
							route="/about"
							scale={2}
							position={[0, -0.5, 0]}
						/>
						<Common />
					</Suspense>
				</View>
			</div>
		</div>
	);
}

export default HomeComponent;
