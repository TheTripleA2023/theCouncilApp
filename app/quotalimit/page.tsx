'use client'

import GenericButton from '@/components/pages/misc/GenericButton'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'


export default function Page() {

  return (
    <>
      <div className='mx-auto flex h-3/4 w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5 z-10'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Oops! Seems like you have hit the daily quota for questions.</h1>
          <p className='mb-8 text-2xl leading-normal'>We are only a group of University students so its hard running everything for free, Sorry about that!</p>
          <Link href='/'>
            <GenericButton text='Take me back!'/>
          </Link>
        </div>
            <div className="absolute bottom-0 right-0 -z-5 w-3/4">
              <Image
                w={'100%'}
                src='img/Possum_large.png'
              />
            </div>
      </div>
    </>
  )
}
