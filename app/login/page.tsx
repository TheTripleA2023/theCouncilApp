"use client";
import HeroComponent from "@/components/landingpage/HeroComponent";
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'
import UpperScroll from '@/components/UpperScroll'
import LowerScroll from '@/components/LowerScroll'
import UsageDisclaimer from '@/components/UsageDisclaimer'
import Footer from '@/components/Footer'


const supabase = createClientComponentClient();

export default function Page() {
	const [callback, setCallback] = useState("");

	useEffect(function mount() {
		setCallback(window.location.origin + "/auth/v1/callback");
	});


  return (
    <>
      <div className='root'>
        {/* <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5"> */}
				<div>
					<HeroComponent />
					<Auth
						supabaseClient={supabase}
						providers={["google", "github"]}
						onlyThirdPartyProviders
						appearance={{ theme: ThemeSupa }}
						theme="dark"
						redirectTo={callback}
					/>
				</div>
        <UpperScroll/>
        <LowerScroll/>
        <UsageDisclaimer/>
        <Footer/>
      </div>
    </>
  )
}
