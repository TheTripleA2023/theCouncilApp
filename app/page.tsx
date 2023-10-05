"use client";

import dynamic from "next/dynamic";

import { useRef, useState } from "react";
import HomeComponent from "@/components/homecomponent/HomeComponent";
import CouncilComponent from "@/components/councilcomponent/CouncilComponent";

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

	const handleSubmit = async (value) => {
		console.log("submit button clicked");
		setInputValue(value);
		if (inputValue === "") {
			return;
		}

		setPageStage("council");
		console.log(pageStage);

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
					/>
				)}
			</div>
		</>
	);
}
