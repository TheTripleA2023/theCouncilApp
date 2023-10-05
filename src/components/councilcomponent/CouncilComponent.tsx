"use client";

import React from "react";
import { Input, Button, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import CouncilCard from "@/components/councilcardcomponent/CouncilCard";

function CouncilComponent(props) {
	const handleReply = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.handleReply) {
			props.handleReply();
		}
	};

	const handleMoreDetails = (name, index) => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.handleMoreDetails) {
			props.handleMoreDetails(name, index);
		}
	};

	return (
		<div className="flex flex-col h-screen justify-between">
			<div className="council-content">
				<Text className="council-title">The Council says...</Text>
				<Text className="council-query-label">You said:</Text>

				{/* commented out for now while we don't have data connected */}
				{/* {props.data ? (
					<Text className="council-query">
						{props.data.questions[props.data.questions.length - 1]}
					</Text>
				) : (
					<div>Loading...</div> // Display a loading message while data is loading
				)} */}
				<Text className="council-query">{props.inputValue}</Text>

				<div className="council-cards">
					{/* commented out for now while we don't have data connected */}
					{/* {props.data ? (
						props.data.members.map((councilMember, index) => (
							<CouncilCard
								key={index}
								name={councilMember.name}
								imagePath={councilMember.imagePath}
								onCardClick={() =>
									handleMoreDetails(councilMember.name, index)
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
						))
					) : (
						<div>Loading...</div> // Display a loading message while data is loading
					)} */}
					{/* for testing purposes */}
					<CouncilCard
						key={1}
						name="wolf"
						imagePath=""
						onCardClick={() => handleMoreDetails("wolf", 1)}
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Neque viverra justo nec ultrices dui sapien eget mi."
					/>
					<CouncilCard
						key={1}
						name="wolf"
						imagePath=""
						onCardClick={() => handleMoreDetails("wolf", 1)}
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Neque viverra justo nec ultrices dui sapien eget mi."
					/>
					<CouncilCard
						key={1}
						name="wolf"
						imagePath=""
						onCardClick={() => handleMoreDetails("wolf", 1)}
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Neque viverra justo nec ultrices dui sapien eget mi."
					/>
					<CouncilCard
						key={1}
						name="wolf"
						imagePath=""
						onCardClick={() => handleMoreDetails("wolf", 1)}
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Neque viverra justo nec ultrices dui sapien eget mi."
					/>
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
					href="http://localhost:3001/finale"
					rel="noopener noreferrer"
				>
					<Text className="done-text">No thanks, I’m all done!</Text>
				</a>
			</div>
		</div>
	);
}

export default CouncilComponent;
