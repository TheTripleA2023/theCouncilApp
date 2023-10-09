import {
    Box, useDisclosure,
  } from '@chakra-ui/react'
import LoginDrawer from '../landing/LoginDrawer'
  
interface Props {
    children: React.ReactNode
}

export default function LoginButton({text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
          onClick={onOpen}
        >
          {text}
        </Box>
        <LoginDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      </>
    )
}
  