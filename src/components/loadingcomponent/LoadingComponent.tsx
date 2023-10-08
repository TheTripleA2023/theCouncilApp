import { Image, Text, VStack } from "@chakra-ui/react";

function LoadingComponent(props) {
	return (
		<div className="council-content">
			<VStack>
				<Text className="council-title">The Council is thinking...</Text>
				<Text className="council-query-label">You said:</Text>
				<Text className="council-query">{props.prompt}</Text>
				<Image className="dots-gif" src="/img/dots-same-time.gif" />
			</VStack>
		</div>
	);
}

export default LoadingComponent;
