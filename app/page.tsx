import dynamic from 'next/dynamic'
import { notFound, redirect } from 'next/navigation'
import { createClientComponentClient,createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import OldPage from '@/components/pages/OldPage'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export default async function Page() {
  return (
    <>
      <OldPage />
    </>
  )
}

