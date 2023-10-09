import {
    Box,
  } from '@chakra-ui/react'
  
interface Props {
    children: React.ReactNode
}

export default function GetStartedButton (props: Props) {
    const { children } = props
  
    return (
      <Box
      as="a"
      px={5}
      py={2}
      rounded={'md'}
      className='navbar-button'
      borderWidth={'2px'}
      borderColor={'RGBA(0,0,0,0.5)'}
      _hover={{
          borderColor: 'white',
      }}
      >
        {children}
      </Box>
    )
  }
  
