"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import HeroComponent from "@/components/pages/landing/HeroComponent";
import AboutCouncilComponent from "@/components/pages/landing/AboutCouncilComponent";
import UpperScroll from "@/components/pages/landing/UpperScroll";
import LowerScroll from "@/components/pages/landing/LowerScroll";
import UsageDisclaimer from "@/components/pages/misc/UsageDisclaimer";
import Footer from "@/components/pages/landing/Footer";
import Team from "@/components/pages/landing/Team";

const supabase = createClientComponentClient();

export default function Page() {
	const [callback, setCallback] = useState("");

	useEffect(function mount() {
		setCallback(window.location.origin + "/auth/v1/callback");
	});

	return (
		<>
			<div className="root">
				{/* <Auth
					supabaseClient={supabase}
					providers={["google", "github"]}
					onlyThirdPartyProviders
					appearance={{ theme: ThemeSupa }}
					theme="dark"
					redirectTo={callback}
				/> */}
				<HeroComponent />
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
