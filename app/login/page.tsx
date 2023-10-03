'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'

const supabase = createClientComponentClient();

export default function Page() {
  const [callback, setCallback] = useState("");

  useEffect(function mount() {
    setCallback(window.location.origin+"/auth/v1/callback")
  });

  return (
    <>
      <div className='root'>
        <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
          <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>We are team Triple A</h1>
            <p className='mb-8 text-2xl leading-normal'>Hi!</p>
            <Auth
              supabaseClient={supabase}
              providers={['google','github']}
              onlyThirdPartyProviders
              appearance={{ theme: ThemeSupa }}
              theme='dark'
              redirectTo={callback}
              />
          </div>
        </div>
      </div>
    </>
  )
}
