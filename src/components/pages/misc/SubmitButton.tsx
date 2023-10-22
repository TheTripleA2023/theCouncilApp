"use client";

import React, { useRef } from "react";
import { useState } from "react";
import { Input, Button, Center, VStack, HStack, Heading, Spacer, Box } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { AiOutlineCheck } from "react-icons/ai"; // Import the Check icon
import {KeyboardEvent} from "react"

function SubmitButton(props) {
	const [inputField, setInputField] = useState("");

	const handleInputChange = (e) => {
		setInputField(e.target.value);
	};

	const handleSubmit = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.onButtonClick) {
			props.onButtonClick(inputField);
		}
	};

	function handleEnterKeyPress<T = Element>(f: () => void){
		return handleKeyPress<T>(f, "Enter")
	}
	
	function handleKeyPress<T = Element>(f: () => void, key: string){
		return (e: KeyboardEvent<T>) => {
			if(e.key === key){
				f()
			}
		}

	}	
	return (
        <>
            <HStack>
                <Input
                    placeholder="Tell us what's going on..."
                    size={['lg']}
                    minW={['75%','320px','480px']}
                    colorScheme="gray"
                    variant="filled"
                    textColor={"black"}
                    _focus={{
                        borderColor: "gray",
                        textColor: "gray",
                        bg: "white",
                        boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
                        overflowY: "auto",
                        resize: "vertical",
                    }}
                    value={inputField}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKeyPress(handleSubmit)}
                    tabIndex={0}
                />
                <Button
                    style={{
                        background:
                            "linear-gradient(to right, #12e9f1, #bf7fea)",
                    }}
                    rightIcon={<AiOutlineCheck />}
                    variant="solid"
                    ml={2}
                    size={'lg'}
                    onClick={handleSubmit}
                    _hover={{
                        borderColor: 'white',
                    }}
                    borderWidth={'2px'}
                    borderColor={'RGBA(0,0,0,0.4)'}
                >
                    OK
                </Button>
            </HStack>
        </>
	);
}

export default SubmitButton;
