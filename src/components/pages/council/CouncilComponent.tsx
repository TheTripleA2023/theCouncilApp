"use client";

import React from "react";
import { useState } from "react";
import { Input, Button, Text, HStack } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import CouncilCard from "@/components/pages/council/CouncilCard";
import SubmitButton from "../misc/SubmitButton";

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
		<div className="flex flex-col h-screen justify-between">
			<div className="council-content">
				<Text className="council-title">The Council says...</Text>
				<Text className="council-query-label">You said:</Text>

				<Text className="council-query">{props.replayValue!=="" ? props.replayValue : props.inputValue}</Text>

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
					href="http://localhost:3000/finale"
					rel="noopener noreferrer"
				>
					<Text className="done-text">No thanks, I’m all done!</Text>
				</a>
			</div>
		</div>
	);
}

export default CouncilComponent;
