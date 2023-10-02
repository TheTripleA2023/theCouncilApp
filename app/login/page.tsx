'use client'

import dynamic from 'next/dynamic'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClientComponentClient();

export default function Page() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>We are team Triple A</h1>
          <p className='mb-8 text-2xl leading-normal'>Hi!</p>
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
