import { Card, CardBody, CardFooter, Fade, Flex, Image, ScaleFade, Stack, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components

function CouncilCard(props) {

	const handleClick = () => {
		// Call the handleMoreDetails function to show the pop-up
		props.onCardClick();
	};
	return (
		<>
			<ScaleFade initialScale={0.9} in={true}>
				<Card
					className="transition ease-in-out md:hover:-translate-y-1 md:hover:scale-101 duration-300 -z-1000"
					direction={{ base: 'column', sm: 'row' }}
					background="linear-gradient(to bottom, #46537a, #203864)"
					textColor={'white'}
					borderRadius={'16px'}
					onClick={handleClick}
					minH={'100%'}
					>
					<Stack>
						<CardBody>
							<Text fontSize={'16px'}>{props.message}</Text>
						</CardBody>
						<CardFooter>
							<Flex alignItems={'center'}>
								<Image className="council-card-member-image" borderRadius="full" src={props.imagePath} />
								<Stack direction={'column'} spacing={-2}>
									<Text>
										<b>
											The {props.name}
										</b>
									</Text>
									<Text>
										{props.description}
									</Text>
								</Stack>
							</Flex>
						</CardFooter>
					</Stack>
				</Card>
			</ScaleFade>
	  	</>
	);
}

export default CouncilCard;
