import {
    Box, useDisclosure,
  } from '@chakra-ui/react'
import LoginDrawer from '../landing/LoginDrawer'
import GenericButton from './GenericButton'
  
interface Props {
    children: React.ReactNode
}

export default function LoginButton({text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <GenericButton text={text} onClick={onOpen}/>
        <LoginDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      </>
    )
}
  