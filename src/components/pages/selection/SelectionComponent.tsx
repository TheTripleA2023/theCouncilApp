'use client'

import { Box, Button, Grid, GridItem, HStack, ScaleFade, SimpleGrid, Spacer, Text, VStack} from '@chakra-ui/react';
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react';
import GenericButton from '../misc/GenericButton';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Model, { SelectionTable } from '@/components/canvas/Models';

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
	const [members, setMembers] = useState([...props.members]);

	const handleBackButton = () => {
		// Handle button click logic here
		// Call the callback function passed from the main page
    console.log(props)
		if (props.onSelectionClosed) {
			props.onSelectionClosed(members);
		}
	};

  const handleCouncilClick = (name) => {
		console.log(name);

		if(members.includes(name)){
			setMembers(members.filter((key) => key !== name));
			return;
		} else if(members.length === 4) {
			return;
		} else {
			setMembers([...members, name]);
		}
  }
  

  return (
    <>
      <Grid templateColumns={['2','repeat(2, 1fr)']} gap={12} margin={12}  overflowY={'scroll'} overflowX={'visible'} >
        <GridItem w='100%' h='100%'>
          <Center paddingTop={['1','15']}>
            <VStack alignItems="start" maxW={['100%','75%']}>
              <Text
                fontWeight={700}
                fontSize={['36px', '72px']}
                >
                Create your Council
              </Text>
              <Text 
                fontWeight={700}
                fontSize={['16px', '24px']}
                >
                Choose 4 council members you’d like to hear from.
              </Text>
              <GenericButton 
                text={members.length === 4?"Let's Go!": members.length + "/4 Members Selected"}  
                onClick={handleBackButton} 
                display={{base:'none',md:'flex'}}
                opacity={members.length === 4?1: 0.5}
                disabled={members.length === 4?false: true}
                />
              <Box display={{base:'none',md:'flex'}}>
                <div className='tableView'>
                  <View orbit className='relative h-full w-full'>
                    <Suspense fallback={null}>
                      <SelectionTable scale={1.5} position={[0,-1,0]} members={members}/>
                      <Common />
                    </Suspense>
                  </View>
                </div>
              </Box>
            </VStack>
          </Center>
          <Box
            background="var(--Dark-Gradient-Fill, linear-gradient(0deg, #222C51 0%, rgba(0, 8, 34, 0.00) 100%, rgba(34, 44, 81, 0.00) 100%));"
            bottom={0}
            left={0}
            position={'fixed'} 
            width={'100%'}
            height={'25%'}
            color={'white'}
            display={{md:'none'}}
            zIndex={10}
            pointerEvents={'none'}
          >

          </Box>
          <GenericButton 
              text={members.length === 4?"Let's Go!": members.length + "/4 Members Selected"} 
              onClick={handleBackButton} 
              width={'90vw'}
              position={'fixed'} 
              bottom={0}
              left={0}
              margin={'5vw'}
              opacity={members.length === 4?1: 0.5}
              disabled={members.length === 4?false: true}
              zIndex={11}
              display={{base:'flex',md:'none'}}
            />
        </GridItem>
        <GridItem w='100%' h='100%' overflowY={'scroll'} overflowX={'visible'} >
          <VStack paddingTop={['5','15']}>
            <Wrap spacing='8px' justify='center' zIndex={1}>
              {props.allMembers.map((councilMember, index) => (
                <ScaleFade in={true} initialScale={0.5}>
                  <WrapItem key={index} 
                  w='280px'
                  h='140px'
                  minW='300px'
                  className='transition ease-in-out md:hover:-translate-y-1 md:hover:scale-110 duration-300'
                  padding={members.includes(councilMember.name)?'0px':'8px'} 
                  >
                    <Center
                      flexDirection={'column'}
                      alignItems={'start'}
                      w='100%'
                      h='100%'
                      background={'linear-gradient(180deg, #46537A 0%, #203864 100%)'}
                      border={members.includes(councilMember.name)?'8px':'0px'} 
                      borderRadius={'16px'}
                      borderColor={"#9EFD69"}
                      onClick={() => handleCouncilClick(councilMember.name)}
                    >
                      <Center
                        flexDirection={'row'}
                        >
                        <Image boxSize={'120px'} src={"https://raw.githubusercontent.com/TheTripleA2023/storage/main/img/avatars/"+councilMember.imagePath} padding={'1em'}/>
                        <VStack alignItems={'start'} paddingRight={'16px'}>
                          <Text><b>{"The " + councilMember.name}</b></Text>
                          <Text>{councilMember.description}</Text>
                        </VStack>
                      </Center>
                    </Center>
                  </WrapItem>
                </ScaleFade>
              ))}
              <WrapItem
                w='280px'
                h='280px'
                display={{md:'none'}}
                />
            </Wrap>
          </VStack>
        </GridItem>
      </Grid>
    </>
  )
}

/*


<WrapItem key={index}>
									<Center w='220px' h='280px' bg='blackAlpha.500' className="council-member-portfolio" border={councilList.includes(index)?'8px':'0px'} borderColor={"#9EFD69"} animation={'ease-in'}>
										<div onClick={() => handleCouncilClick(index)}>
											<Image borderRadius="full" src={councilMember.imagePath} padding={'1em'}/>
											<Text><b>{"The " + councilMember.name}</b></Text>
											<Text>{councilMember.type}</Text>
										</div>
									</Center>
								</WrapItem>

        */