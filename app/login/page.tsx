"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import HeroComponent from "@/components/landingpage/HeroComponent";
import AboutCouncilComponent from "@/components/landingpage/AboutCouncilComponent";
import UpperScroll from "@/components/landingpage/UpperScroll";
import LowerScroll from "@/components/landingpage/LowerScroll";
import UsageDisclaimer from "@/components/UsageDisclaimer";
import Footer from "@/components/landingpage/Footer";
import Team from "@/components/landingpage/Team";

const supabase = createClientComponentClient();

export default function Page() {
	const [callback, setCallback] = useState("");

	useEffect(function mount() {
		setCallback(window.location.origin + "/auth/v1/callback");
	});

	return (
		<>
			<div className="root">
				{/* <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5"> */}
				<HeroComponent />
				<Auth
					supabaseClient={supabase}
					providers={["google", "github"]}
					onlyThirdPartyProviders
					appearance={{ theme: ThemeSupa }}
					theme="dark"
					redirectTo={callback}
				/>
				<UpperScroll />
				<AboutCouncilComponent />
				<Team />
				<LowerScroll />
				<UsageDisclaimer />
				<Footer />
			</div>
		</>
	);
}
