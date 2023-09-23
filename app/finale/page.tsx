'use client'

import { Text, Button, Image } from '@chakra-ui/react'
// import DiscoGif from "./../../public/img/Disco1.gif"
import dynamic from 'next/dynamic'

const Blob = dynamic(() => import('@/components/canvas/Models').then((mod) => mod.Blob), { ssr: false })
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

export default function Page() {
  return (
    <div className="end-content">
      <div className="end-title">
        {/* <Image className="disco-gif" src={DiscoGif}/> */}
        <Text className="end-h1">
          The Council thanks you!
        </Text>
        <Text className="end-h2">
          Thank you for choosing 
          <span className="endpage-gradient-text">
            The Council
          </span>
        .
        </Text>

        <Text className="end-h2">
          We hope our advice helped.
        </Text>
        <Button
          className="refresh-button"
          id="refresh"
          // onClick={refreshPage}
        >
          Ask another question
        </Button>

      {/* <Image className="disco-gif" src={DiscoGif}/>
      <Image className="green-floor" src={GreenFloor}/>
      <Image className="animals" src={Animals}/> */}
      </div>
    </div>
    // <>
    //   <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
    //     <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
    //       <h1 className='my-4 text-5xl font-bold leading-tight'>The Council thanks you!</h1>
    //       <p className='mb-8 text-2xl leading-normal'>Thank you for choosing The Council.</p>
    //       <p className='mb-8 text-2xl leading-normal'>We hope our advice helped.</p>

    //       <div className="end-content">
    //         <div className="end-title">
    //           <Text className="end-h1">
		// 						The Council thanks you!
		// 					</Text>
		// 					<Text className="end-h2">
		// 						Thank you for choosing 
		// 						<span className="endpage-gradient-text">
		// 							The Council
		// 						</span>
		// 						.
		// 					</Text>

    //           <Text className="end-h2">
		// 						We hope our advice helped.
		// 					</Text>
		// 					<Button
		// 						className="refresh-button"
		// 						id="refresh"
		// 						onClick={refreshPage}
		// 					>
		// 						Ask another question
		// 					</Button>

		// 					<Image className="disco-gif" src={DiscoGif}/>
		// 					<Image className="green-floor" src={GreenFloor}/>
		// 					<Image className="animals" src={Animals}/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center'>
    //     <Blob />
    //     <Common />
    //   </View> */}
    // </>
  )
}
