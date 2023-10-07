"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { Council } from "@/controller/council";
import HomeComponent from "@/components/homecomponent/HomeComponent";
import CouncilComponent from "@/components/councilcomponent/CouncilComponent";

// import { notFound, redirect } from 'next/navigation'
// import { createClientComponentClient,createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
// import OldPage from '@/components/pages/OldPage'
// import Link from 'next/link'
// import { Button } from '@chakra-ui/react'
// import { Council } from '@/controller/council'

export default function Page() {
	const [pageStage, setPageStage] = useState("home");
	const [inputValue, setInputValue] = useState("");
	const [replyValue, setReplyValue] = useState("");
	const [detailsPageBool, setdetailsPageBool] = useState(false);
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [memberName, setMemberName] = useState("");
	const [memberPic, setMemberPic] = useState("");
	const [memberConvo, setMemberConvo] = useState([]);
	const [councilList, setCouncilList] = useState([]);

	const ref = useRef();

	// const getStuff = async () => {
	// 	const CouncilController = new Council();
	// 	const res = await CouncilController.consultCouncil(
	// 		"I WANT TO EAT MY FRIENDS"
	// 	);
	// 	const res2 = await CouncilController.consultCouncil(
	// 		"I WANT TO EAT MY FRIENDS WHAT DO I DO"
	// 	);
	// 	console.log(res2);
	// };
	// getStuff();

	const handleSubmit = async (value) => {
		console.log("submit button clicked");
		setInputValue(value);
		if (inputValue === "") {
			return;
		}

		setPageStage("council");
		const CouncilController = new Council();
		const response = await CouncilController.consultCouncil(inputValue);
		setData(response);
		console.log(response);
		console.log(data);

		// setLoading(true);
		// setPageStage(3);
		// const response = await AIHandler.askTheCouncil(inputValue);
		// console.log(response);
		// setData(AIHandler.godJson);

		// setLoading(false);
	};

	const handleReply = async () => {
		// setReplyValue(
		// 	document.querySelector(".council-reply-prompt-input").value
		// );
		// if (replyValue === "") {
		// 	return;
		// }
		// setLoading(true);
		// setPageStage(3);
		// // const response = await AIHandler.askTheCouncil(replyValue);
		// console.log(response);
		// // setData(AIHandler.godJson);
		// setPageStage(1);
		// setLoading(false);
		console.log("handleReply pressed");
	};

	const handleMoreDetails = (memberName, index) => {
		// setMemberName(memberName);
		// setdetailsPageBool(true);
		// setMemberConvo(data.members[index].conversation);
		// setMemberPic(data.members[index].imagePath);
		// console.log(memberName);
		// console.log(data.members[index].conversation);
		console.log("handleMoreDetails pressed");
	};

	return (
		<>
			<div>
				{pageStage === "home" && (
					<HomeComponent onButtonClick={handleSubmit} />
				)}
				{pageStage === "council" && (
					<CouncilComponent
						handleReply={handleReply}
						handleMoreDetails={handleMoreDetails}
						inputValue={inputValue}
						data={data}
					/>
				)}
			</div>
		</>
	);
}
