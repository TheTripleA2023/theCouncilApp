import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Team = () => {
	const teamInformation = [
		{
			name: "Alex Hernandez",
			role: "Designer",
			animalPicture: "./img/avatars/CatAvatar.png",
			humanPicture: "https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/headshots/alex-headshot.png",
			linkedin: "https://www.linkedin.com/in/alexdshernandez/",
		},
		{
			name: "Adi Poluri",
			role: "Engineer",
			animalPicture: "./img/avatars/OrcaAvatar.png",
			humanPicture: "https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/headshots/adi-headshot.png",
			linkedin: "https://www.linkedin.com/in/adityapoluri/",
		},
		{
			name: "Alan Wang",
			role: "Engineer",
			animalPicture: "./img/avatars/FrogAvatar.png",
			humanPicture: "https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/headshots/alan-headshot.png",
			linkedin: "https://www.linkedin.com/in/alan-wang-a577b81b5/",
		},
		{
			name: "Taryn Wou",
			role: "PM + Engineer",
			animalPicture: "./img/avatars/FlamingoAvatar.png",
			humanPicture: "https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/headshots/taryn-headshot.png",
			linkedin: "https://www.linkedin.com/in/tarynwou/",
		},
	];

	return (
		<Box className="team-landingpage">
			<Box className="team-container">
				<Text className="team-header" paddingBottom="24px">
					Meet the council behind{" "}
					<span className="team-gradient-text">the Council</span>
				</Text>
				<Text className="team-text" paddingBottom="30px">
					We’re a team of students from the University of British
					Columbia.
					<br />
					Fun fact: we’re all looking for jobs, please hire us!
				</Text>

				<Box
					className="member-card-container"
					display="flex"
					flexDirection="row"
				>
					{teamInformation.map((card, index) => {
						return (
							<a
								href={card.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="team-member-card"
								key={index}
							>
								<Box className="team-member-card" key={index}>
									<div className="team-picture-container">
										<Image
											w="150px"
											className="team-picture"
											src={card.animalPicture}
										/>
										<Image
											w="150px"
											className="team-picture-human"
											src={card.humanPicture}
										/>
									</div>
									<Text
										className="team-name"
										paddingTop="5px"
									>
										{card.name}
									</Text>
									<Text
										className="team-role"
										paddingTop="5px"
									>
										{card.role}
									</Text>
								</Box>
							</a>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default Team;
