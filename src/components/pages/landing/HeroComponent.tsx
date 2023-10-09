"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoginButton from "../misc/LoginButton";

const IsoCouncilTable = dynamic(
	() => import("@/components/canvas/Models").then((mod) => mod.IsoCouncilTable),
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

function HeroComponent() {
	return (
		<div className=" h-screen ">
			{/* Header Components */}
			<div className="hero-content">
				<div className="hero-text">
					<div className="hero-title">
						<div className="hero-swappable-line">
							<h1 className="hero-h2">Need a</h1>
							<ul className="hero-swappable">
								<li className="hero-swappable-1">
									reality check?
								</li>
								<li className="hero-swappable-2">
									supportive bestie?
								</li>
								<li className="hero-swappable-3">
									wholesome mom?
								</li>
							</ul>
						</div>

						<h1 className="hero-h1">
							Consult
							<span className="hero-gradient-text">
								the Council.
							</span>
						</h1>
					</div>
					<div className="hero-subtitle">
						<h1 className="hero-h3">
							The Council has all the (imaginary) friends you
							need.
						</h1>
					</div>
					<LoginButton text={"Lets Go!"} />
					{/* <Button
						className="hero-button"
						style={{
							background:
								"linear-gradient(to right, #12e9f1, #bf7fea)",
						}}
						variant="solid"
						ml={2}
						// onClick={}
					>
						Let's go!
					</Button> */}
				</div>
			</div>

			{/* Model Components */}

			<div className="council-model-container relative mb-auto h-full">
				<View className="council-model relative h-full sm:w-full">
					<Suspense fallback={null}>
						<IsoCouncilTable
							route="/about"
							scale={1.5}
							position={[1.5, -0.5, 0]}
						/>
						<Common />
					</Suspense>
				</View>
			</div>
		</div>
	);
}

export default HeroComponent;
