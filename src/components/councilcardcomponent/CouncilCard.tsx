import { Image, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components

function CouncilCard(props) {
	const handleClick = () => {
		// Call the handleMoreDetails function to show the pop-up
		props.onCardClick();
	};
	return (
		<div className="council-card" onClick={handleClick}>
			<Text className="council-card-message">
				{/* {props.message} */}
				Testing testing
			</Text>
			<div className="council-card-member">
				<div className="council-card-member-image">
					<Image borderRadius="full" src={props.imagePath} />
				</div>

				<Text className="council-card-member-name">
					The {props.name}
				</Text>
			</div>
		</div>
	);
}

export default CouncilCard;
