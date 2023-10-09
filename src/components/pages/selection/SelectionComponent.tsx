'use client'

import { Button } from '@chakra-ui/button';
import dynamic from 'next/dynamic'
import { useState } from 'react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function SelectionComponent(props) {
	const [members, setMembers] = useState([]);

	const handleBackButton = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
		if (props.onSelectionClosed) {
			props.onSelectionClosed(members);
		}
	};

  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>We are team Triple A</h1>
          <p className='mb-8 text-2xl leading-normal'>Hi!</p>
        </div>
        <Button onClick={handleBackButton}>
          ur mom
          </Button>

      </div>
      
    </>
  )
}
