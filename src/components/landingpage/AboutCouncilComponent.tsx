import { Image, Text, Button } from "@chakra-ui/react"; // Import necessary Chakra UI components

function AboutCouncilComponent(props) {
	return (
		<div className="about-council-component">
			<div className="about-council-content">
				<div className="about-council-div">
					<Text className="about-council-h2">
						What's the Council?
					</Text>
					<Text className="about-council-p1">
						We have to make a lot of decisions, all the time-
						whether it's choosing your next hackathon project idea,
						texting your ex or not, or settling a debate. Sometimes,
						you need the cold hard truth. Sometimes, you need
						someone to feed into your delusions. But sometimes, you
						need both!
					</Text>
				</div>

				<div className="how-it-works-div">
					<Image
						className="how-it-works-image"
						src="/img/how-it-works.png"
					/>
					<Text className="about-council-p2">
						Give the Council your problem, and it'll answer with
						four AI-generated perspectives! With 10 different
						personalities to choose from, you can get a bunch of
						(imaginary) friends to weigh in on your dilemmas, even
						if you're all alone!
					</Text>
				</div>
			</div>
			<div className="how-we-started-div">
				<div className="how-we-started-content">
					<Text className="about-council-h2">How we started</Text>
					<Text className="about-council-p3">
						The Council was born out of a hackathon project! It was
						a top 12 winning project at Hack the North 2023. With
						fruit snacks, power naps, and caffeinated chocolates, we
						were able to build an MVP in just 36 hours. Thanks to
						the amazing reception and feedback from the judges, we
						decided to bring the Council to life!
					</Text>
					<Button
						className="watch-demo-button"
						// colorScheme="teal"
						style={{
							background:
								"linear-gradient(to right, #12e9f1, #bf7fea)",
						}}
						variant="solid"
						ml={2}
					>
						Watch our demo at HTN 2023
					</Button>
				</div>
				<div className="image-container">
					<Image
						className="how-we-started-image"
						src="/img/how-we-started.png"
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutCouncilComponent;
