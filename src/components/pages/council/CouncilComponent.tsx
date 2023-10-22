"use client";

import React from "react";
import { useState } from "react";
import { Input, Button, Text, HStack } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import CouncilCard from "@/components/pages/council/CouncilCard";
import SubmitButton from "../misc/SubmitButton";
import { url } from "@/helpers/global";

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
			<div className="council-content">
				<Text fontSize={['24px','64px']}fontWeight={900} align={'center'}>The Council has spoken.</Text>
				<Text fontSize={'16px'}>You said:</Text>
				<Text fontSize={'20px'} fontWeight={600}>"{props.replayValue!=="" ? props.replayValue : props.inputValue}"</Text>

				<div className="council-cards">
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
				</div>

				<SubmitButton onButtonClick={handleReply}/>
				<a
					href="/finale"
					rel="noopener noreferrer"
				>
					<Text className="done-text"><b>I have come to a conclusion, I’m all done!</b></Text>
				</a>
			</div>
	);
}

export default CouncilComponent;
