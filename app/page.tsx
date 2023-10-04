"use client";

import dynamic from "next/dynamic";

import { useRef, useState, Suspense, useEffect } from "react";
import HomeComponent from "@/components/homecomponent/HomeComponent";
// import "./global.css";

export default function Page() {
	const [pageStage, setPageStage] = useState(0);
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

	const handleSubmit = async () => {
		// setInputValue(document.querySelector(".prompt-input").value);
		if (inputValue === "") {
			return;
		}
		setLoading(true);
		// setPageStage(3);
		// const response = await AIHandler.askTheCouncil(inputValue);
		// console.log(response);
		// setData(AIHandler.godJson);
		setPageStage(1);
		setLoading(false);
		console.log("submit button clicked");
	};

	return (
		<>
			<div>
				<HomeComponent onButtonClick={handleSubmit} />
			</div>
		</>
	);
}

/*
      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2>
          <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
        </div>
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View className='relative h-full  sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
*/
