"use client";

import React from "react";
import { useState } from "react";
import { Input, Button, Text, HStack } from "@chakra-ui/react"; // Import necessary Chakra UI components
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
	console.log(props)
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

				<HStack>
					<Input
						placeholder="Tell us what's going on"
						size={['lg']}
						minW={['75%','320px','480px']}
						colorScheme="gray"
						variant="filled"
						textColor={"black"}
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
						style={{
							background:
								"linear-gradient(to right, #12e9f1, #bf7fea)",
						}}
						rightIcon={<AiOutlineCheck />}
						variant="solid"
						ml={2}
						size={'lg'}
						onClick={handleReply}
						_hover={{
							borderColor: 'white',
						}}
						borderWidth={'2px'}
						borderColor={'RGBA(0,0,0,0.4)'}
					>
						OK
					</Button>
				</HStack>
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
