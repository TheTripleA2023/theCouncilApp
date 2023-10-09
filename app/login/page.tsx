"use client";
import HeroComponent from "@/components/pages/landing/HeroComponent";
import AboutCouncilComponent from "@/components/pages/landing/AboutCouncilComponent";
import UpperScroll from "@/components/pages/landing/UpperScroll";
import LowerScroll from "@/components/pages/landing/LowerScroll";
import UsageDisclaimer from "@/components/pages/misc/UsageDisclaimer";
import Footer from "@/components/pages/landing/Footer";
import Team from "@/components/pages/landing/Team";

export default function Page() {

	return (
		<>
			<div className="root">
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
