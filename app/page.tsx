"use client";

import { useRef, useState } from "react";
import { Council } from "@/controller/council";
import HomeComponent from "@/components/pages/home/HomeComponent";
import CouncilComponent from "@/components/pages/council/CouncilComponent";
import LoadingComponent from "@/components/pages/misc/LoadingComponent";
import MoreDetailsComponent from "@/components/pages/council/MoreDetailsComponent";
import SelectionComponent from "@/components/pages/selection/SelectionComponent";
import { useRouter } from "next/navigation";

enum PageStage {
	"home",
	"selection",
	"council",
}
export default function Page() {
	const [pageStage, setPageStage] = useState(PageStage.home);
	const [inputValue, setInputValue] = useState("");
	const [detailsPageBool, setdetailsPageBool] = useState(false);
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [memberName, setMemberName] = useState("");
	const [memberPic, setMemberPic] = useState("");
	const [memberConvo, setMemberConvo] = useState([]);
	let CouncilController = useRef(new Council());

	const router = useRouter()
	const ref = useRef();

	const handleSubmit = async (value) => {
		console.log("Submit clicked");

		setInputValue(value);
		if (value === "") {
			return;
		}

		setLoading(true);
		const response =
			await CouncilController.current.consultCouncil(value);
		
		if(response== null) {
			setLoading(false);
			router.push("/quotalimit")
		}

		setData(response);
		setPageStage(PageStage.council);
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

	const handleSelectionOpened = () => {
		setPageStage(PageStage.selection);
	}

	function handleSelectionClosed(members:string[]) {
		CouncilController.current.setMembers(members);	
		setPageStage(PageStage.home);
	}

	return (
		<>
			<div>
				{!isLoading && pageStage === PageStage.home && (
					<HomeComponent onButtonClick={handleSubmit} onSelectionClick={handleSelectionOpened} />
				)}
				{!isLoading && pageStage === PageStage.selection && (
					<SelectionComponent
						onSelectionClosed={handleSelectionClosed}
						members={CouncilController.current.getMembers().map((member) => member.name)}
						allMembers={Array.from(CouncilController.current.getAllMembers().values())}
					/>
				)}
				{!isLoading && pageStage === PageStage.council && (
					<CouncilComponent
						handleReply={handleSubmit}
						handleMoreDetails={handleMoreDetails}
						inputValue={inputValue}
						data={data}
					/>
				)}
				{isLoading && (
					<LoadingComponent prompt={inputValue} />
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
