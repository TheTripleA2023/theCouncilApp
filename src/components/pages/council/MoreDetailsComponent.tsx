import { useState } from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

function UserMessage(props) {
	return (
		<div className="user-message-blob">
			<Text className="user-message">{props.message}</Text>
		</div>
	);
}

function MemberMessage(props) {
	return (
		<div className="member-message-blob">
			<Text className="member-message">{props.message}</Text>
		</div>
	);
}

function MoreDetailsComponent(props) {
	const [memberName, setMemberName] = useState(props.memberName);
	const [memberPic, setMemberPic] = useState(props.memberPic);
	const [memberConvo, setMemberConvo] = useState(props.memberConvo);

	const handleClose = () => {
		if (props.handleClose) {
			props.handleClose();
		}
	};

	return (
		<div>
			<div className="overlay"></div>
			<div className="pop-up-content">
				<Text className="pop-up-title">The {memberName} says...</Text>
				<button className="close-button" onClick={handleClose}>
					<span className="close-icon">&times;</span>
				</button>
				<Text className="pop-up-subtitle">
					Here’s what Council Member {memberName} had to say so far.
				</Text>
				<div className="pop-up-image-convo">
					<Image
						className="pop-up-image"
						src={"/img/" + memberPic}
						alt="Council Member Image"
						boxSize="200px"
						objectFit="cover"
					/>
					<div className="pop-up-convo">
						<Stack spacing='8px'>
						{memberConvo ? (
							// Check if memberConvo is not null
							memberConvo.map((message, index) => {
								if (index % 2 === 0) {
									return (
										<UserMessage
											key={index}
											message={message.content}
										/>
									);
								} else {
									return (
										<MemberMessage
											key={index}
											message={message.content}
										/>
									);
								}
							})
						) : (
							<div>No conversation available</div> // Render a message if memberConvo is null
						)}
						</Stack>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MoreDetailsComponent;
