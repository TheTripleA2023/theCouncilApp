"use client";

import React from "react";
import {Text, Box, Stack, Grid } from "@chakra-ui/react"; // Import necessary Chakra UI components
import CouncilCard from "@/components/pages/council/CouncilCard";
import SubmitButton from "../misc/SubmitButton";
import Link from "next/link";

function CouncilComponent(props) {
	const handleReply = (value) => {
		if (props.handleReply) {
			props.handleReply(value);
		}
	};

	const handleMoreDetails = (name, index) => {
		if (props.handleMoreDetails) {
			props.handleMoreDetails(name, index);
		}
	};

	return (
		<Stack alignItems={'center'} marginTop={'2%'} margin={'4px'}>
			<Text fontSize={['24px','48px','64px']} fontWeight={900} align={'center'}>The Council has spoken.</Text>
			<Text fontSize={'16px'}>You said:</Text>
			<Text fontSize={'20px'} fontWeight={600} align={'center'}>"{props.inputValue}"</Text>
			<Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={6} margin={'20px'} maxW={['90%',"66%"]}>
				{props.data ? (
					props.data.map((councilMember, index) => {
						// Construct the image source URL based on the council member's data
						const imagePath = `https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/avatars/${councilMember.imagePath}`;

						return (
							<CouncilCard
								key={index}
								name={councilMember.name}
								description={councilMember.description}
								imagePath={imagePath} // Use the dynamically constructed image path
								onCardClick={() =>
									handleMoreDetails(
										councilMember.name,
										index
									)
								}
								message={
									councilMember.conversation &&
									councilMember.conversation.length
										? councilMember.conversation[
												councilMember.conversation
													.length - 1
											]?.content || ""
										: ""
								}
							/>
						);
					})
				) : (
					<div>Loading...</div>
				)}
				<Box height={'200px'} display={{base:"flex", md:"none"}}></Box>
			</Grid>
			{/* Desktop View */}
			<Box
				display={{base:'none',md:'flex'}}
			>
				<Stack align={'center'}>
					<SubmitButton onButtonClick={handleReply}/>
					<Link
						href="/finale"
						rel="noopener noreferrer"
					>
						<Text className="done-text"><b>I have come to a conclusion, I’m all done!</b></Text>
					</Link>
				</Stack>
			</Box>


			{/* Mobile View */}
			<Box
				background="var(--Dark-Gradient-Fill, linear-gradient(0deg, #222C51 0%, rgba(0, 8, 34, 0.00) 100%, rgba(34, 44, 81, 0.00) 100%));"
				bottom={0}
				left={0}
				position={'fixed'} 
				width={'100%'}
				height={'25%'}
				color={'white'}
				display={{md:'none'}}
				zIndex={10}
				pointerEvents={'none'}
			>
			</Box>
			<Box
				bottom={0}
				left={0}
				position={'fixed'} 
				width={'100%'}
				display={{md:'none'}}
				zIndex={11}
				padding={'20px'}
			>	
				<Stack align={'center'}>
					<SubmitButton onButtonClick={handleReply}/>
					<Link
						href="/finale"
					>
						<Text className="done-text"><b>I have come to a conclusion, I’m all done!</b></Text>
					</Link>
				</Stack>
			</Box>

		</Stack>
	);
}

export default CouncilComponent;
