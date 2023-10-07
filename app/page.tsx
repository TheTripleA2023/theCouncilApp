"use client";

import { useRef, useState } from "react";
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
	let CouncilController = useRef(new Council());

	const ref = useRef();

	const handleSubmit = async (value) => {
		console.log("submit button clicked");
		setInputValue(value);
		if (inputValue === "") {
			return;
		}
		setLoading(true);
		const response =
			await CouncilController.current.consultCouncil(inputValue);
		console.log(response);

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

		const response =
			await CouncilController.current.consultCouncil(replyValue);
		console.log(response);
		setData(response);
		setLoading(false);
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
