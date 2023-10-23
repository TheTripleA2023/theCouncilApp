import { useEffect, useState } from "react";
import { Box, Card, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function UserMessage(props) {
	return (
		<Card borderRadius={'16px 16px 0px 16px;'}
			background="linear-gradient(to bottom, #d4d7e0, #9fb4dc);"
			padding={'16px'}
			marginLeft={'auto'}
			minW={'75%'}
			>
			<Text className="user-message">{props.message}</Text>
		</Card>
	);
}

function MemberMessage(props) {
	return (
		<Card borderRadius={'16px 16px 16px 0px;'}
			background="linear-gradient(to bottom, #46537a, #203864);"
			padding={'16px'}
			marginRight={'3em'}
			minW={'75%'}
			>
			<Text textColor={'white'}>{props.message}</Text>
		</Card>
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

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  
	return (
		<Stack textColor={'white'}  overflowY={'scroll'} overflowX={'visible'} >
			<div className="overlay"></div>
			<Stack position={"absolute"}
			top={0}
			left={0}
			justifyContent={['start']}
			alignItems={['center','start']}
			zIndex={9999}
			minH={'100%'}
			width={'100%'}
			padding={['1em','6em']}
			overflowY={'scroll'} overflowX={'visible'} 
			>
				<Text fontSize={['32px','64px']} fontWeight={900}>The {memberName} says...</Text>
				<IconButton
					size={'lg'}
					icon={<CloseIcon />}
					aria-label={'Close DM'}
					onClick={handleClose}
					color={'white'}
					position={'absolute'} top={[0,16]} right={[0,16]}
				/>
				<Text fontSize={'20px'} fontWeight={600} color={'white'} marginBottom={'40px'} textAlign={'center'}>
					Here’s what Council Member {memberName} had to say so far.
				</Text>
				<Stack direction={["column","column","row"]} spacing={["16px","64px"]} alignItems={['center','center','start']}>
					<Image
						src={"https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/avatars/" + memberPic}
						alt="Council Member Image"
						boxSize={["200px","250px","400px"]}
						objectFit="cover"
					/>
						<Stack spacing='20px' alignItems={['center','start']} maxW={['100%','100%','100%','50%']}>
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
							<Box height={'100vh'} display={{md:"none"}}>

							</Box>
						</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default MoreDetailsComponent;
