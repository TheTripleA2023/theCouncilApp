import {
    Box,
  } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
}

export default function GenericButton({text, onClick=null}) {
    
    return (
      <>
        <Box
          as="a"
          px={5}
          py={2}
          rounded={'md'}
          className='navbar-button'
          borderWidth={'2px'}
          borderColor={'RGBA(0,0,0,0.4)'}
          textColor={'black'}
          _hover={{
              borderColor: 'white',
          }}
          onClick={onClick}
        >
          {text}
        </Box>
      </>
    )
}
  