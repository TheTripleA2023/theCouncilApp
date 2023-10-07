"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Council } from "@/controller/council";
import HomeComponent from "@/components/homecomponent/HomeComponent";
import CouncilComponent from "@/components/councilcomponent/CouncilComponent";
import LoadingComponent from "@/components/loadingcomponent/LoadingComponent";
import MoreDetailsComponent from "@/components/moredetailscomponent/MoreDetailsComponent";

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
	let CouncilController = useRef(new Council())

	const ref = useRef();


	const handleSubmit = async (value) => {
		console.log("submit button clicked");
		setInputValue(value);
		if (inputValue === "") {
			return;
		}
		setLoading(true);
		const response = await CouncilController.current.consultCouncil(inputValue);
		const test = await CouncilController.current.consultCouncil(inputValue);
		console.log(response);
		console.log(test);
		setData(response);
		setPageStage("council");
		setLoading(false);
	};

	const handleReply = async (value) => {
		console.log("handleReply pressed");
		setReplyValue(value);
		if (replyValue === "") {
			return;
		}
		setLoading(true);
		console.log(CouncilController.current.getMembers());
		console.log(data);
		// CouncilController.setMembers(data);
		const boop = await CouncilController.current.consultCouncil(replyValue);
		console.log(boop);
		setData(boop);
		setLoading(false);

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
	};

	const handleMoreDetails = (memberName, index) => {
		setMemberName(memberName);
		setMemberConvo(data[index].conversation);
		setMemberPic(data[index].imagePath);
		setdetailsPageBool(true);
	};

	const handleClose = () => {
		setdetailsPageBool(false);
	};

	return (
		<>
			<div>
				{!isLoading && pageStage === "home" && (
					<HomeComponent onButtonClick={handleSubmit} />
				)}
				{!isLoading && pageStage === "council" && (
					<CouncilComponent
						handleReply={handleReply}
						handleMoreDetails={handleMoreDetails}
						inputValue={inputValue}
						data={data}
					/>
				)}
				{isLoading && replyValue === "" && (
					<LoadingComponent prompt={inputValue} />
				)}
				{isLoading && replyValue !== "" && (
					<LoadingComponent prompt={replyValue} />
				)}
				{detailsPageBool && (
					<MoreDetailsComponent
						memberName={memberName}
						memberPic={memberPic}
						memberConvo={memberConvo}
						handleClose={handleClose}
					/>
				)}
			</div>
		</>
	);
}
