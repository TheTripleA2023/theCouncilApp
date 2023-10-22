import { Image, Text, VStack } from "@chakra-ui/react";

function LoadingComponent(props) {
	return (
		<VStack>
			<Text fontSize={['32px','64px']} padding={['8px',0]} align={'center'} fontWeight={900} marginTop={'100px'}>The Council is thinking...</Text>
			<Text fontSize={'16px'}>You said:</Text>
			<Text fontSize={'20px'} fontWeight={600}>"{props.prompt}"</Text>
			<Image minWidth={'150px'} width={'10%'} padding={'16px'} justifyContent={'center'} zIndex={10} src="/img/dots-same-time.gif" />
		</VStack>
	);
}

export default LoadingComponent;
