"use client";

import React from "react";
import { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import CouncilCard from "@/components/pages/council/CouncilCard";

function CouncilComponent(props) {
	const [inputField, setInputField] = useState("");

	const handleInputChange = (e) => {
		setInputField(e.target.value);
	};

	const handleReply = () => {
		if (props.handleReply) {
			props.handleReply(inputField);
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

				<Text className="council-query">{props.inputValue}</Text>

				<div className="council-cards">
					{props.data ? (
						props.data.map((councilMember, index) => {
							// Construct the image source URL based on the council member's data
							const imagePath = `/img/${councilMember.imagePath}`;

							return (
								<CouncilCard
									key={index}
									name={councilMember.name}
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

				<div className="council-reply-prompt">
					<Input
						className="council-reply-prompt-input"
						placeholder="I'm thinking about..."
						style={{ width: "488px" }}
						variant="filled"
						_focus={{
							borderColor: "gray", // Set the border color when the input is focused
							textColor: "gray",
							bg: "white",
							boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)", // Add a focus shadow
						}}
						onChange={handleInputChange}
					/>
					<Button
						className="reply-button"
						colorScheme="teal"
						style={{
							background:
								"linear-gradient(to right, #12e9f1, #bf7fea)",
						}}
						rightIcon={<AiOutlineCheck />}
						variant="solid"
						ml={2} // Add margin-left to create space between the input and button
						onClick={handleReply} // Call the handleSubmit function on button click
					>
						OK
					</Button>
				</div>
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
