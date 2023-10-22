"use client";

import React from "react";
import { HStack } from "@chakra-ui/react"; // Import necessary Chakra UI components;
import { Text } from "@chakra-ui/react";


export default function TitleComponent() {
	return (
		<>
            <Text
                fontWeight={900}
                fontSize={['48px','64px', '78px']}
                fontStyle={'bold'}
            >
                In a dilemma?
            </Text>
            <HStack display={{base:'none',lg:'flex'}}>
                <Text 
                    fontWeight={900}
                    fontSize={['48px','64px', '78px']}
                    >
                    Consult
                </Text>
                <Text 
                    fontWeight={900}
                    fontSize={['48px','64px', '78px']}
                    background="linear-gradient(93deg, #12E9F1 24.27%, #BF7FEA 112.43%)"
                    backgroundClip={'text'}
                    >
                    the Council.
                </Text>
            </HStack>
            <HStack display={{base:'flex',lg:'none'}}>
                <Text 
                    fontWeight={900}
                    fontSize={['48px','64px', '78px']}
                    >
                    Consult
                </Text>
                <Text 
                    fontWeight={900}
                    fontSize={['48px','64px', '78px']}
                    background="linear-gradient(93deg, #12E9F1 24.27%, #BF7FEA 112.43%)"
                    backgroundClip={'text'}
                    >
                    the
                </Text>
            </HStack>
            <Text 
                fontWeight={900}
                fontSize={['48px','64px', '78px']}
                background="linear-gradient(93deg, #12E9F1 24.27%, #BF7FEA 112.43%)"
                backgroundClip={'text'}
                display={{lg:'none'}}
                >
                Council.
            </Text>
        </>
	);
}

