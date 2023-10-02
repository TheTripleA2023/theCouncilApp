'use client'

import dynamic from 'next/dynamic'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClientComponentClient();

export default function Page() {
  return (
    <>
      <div className='login mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='login-page flex w-full flex-col items-start justify-center p-12 text-center md:text-left'>
          <div className='reflection'>
            <h1 className='login-header my-4 text-5xl font-bold leading-tight'>The Council.</h1>
            <h1 className='login-header my-4 text-5xl font-bold leading-tight'>The Council.</h1>
          </div>
          {/* <p className='mb-8 text-2xl leading-normal'>Hi!</p> */}
          <Auth
            supabaseClient={supabase}
            providers={['google']}
            onlyThirdPartyProviders
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      </div>
    </>
  )
}
