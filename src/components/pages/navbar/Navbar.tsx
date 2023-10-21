'use client'

import {
  Button,
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Spacer,

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import LogOutButton from './LogOutButton'
import LoginButton from '../misc/LoginButton'
import Link from 'next/link'
import NavLink from './Navlink'

const Links = ['About', 'Usage Disclaimer']

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()
  // const router = useRouter();
  // const handleRefresh = () => {
  //   router.reload();
  // };
  useEffect(() => {
    const getSession = async () => {
      const { data: { session }} = await supabase.auth.getSession()
      setSession(session !== null)
      setLoading(true)
      
    }

    getSession()
  }, [supabase, setSession])
  
  return (
    <>
        <Flex   
        className='navbar'
        h={16} 
        alignItems={'center'} 
        justifyContent={'space-between'}
        minWidth='max-content'
        > 
            <Box 
                marginLeft={[4, 12, 24, 48]}
                fontSize={['24px', '32px']}
                className='navbar-title'>
                  <Link href={"/"} replace={true}>
                    the Council.
                  </Link>
            </Box>
            <Spacer />
            <HStack as={'nav'} spacing={5}  marginRight={[4, 12, 24, 48]} display={{ base: 'none', md: 'flex' }}>
              
            </HStack>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'white'}
            marginRight={4}
          />
        </Flex>
        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bg={"#21234B"}  borderBottomRadius={'20px'} padding={'20px'}>
          <Flex direction={'row'}>
            <Box 
              fontSize={['24px', '32px']}
              className='navbar-title'>
                <Link href={"/"} replace={true}>
                  the Council.
                </Link>
            </Box>
            <Spacer/>
            <IconButton
              size={'lg'}
              icon={<CloseIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={onClose}
              color={'white'}
            />
          </Flex>
          {Links.map((link) => (
            <Box marginTop={'20px'}>
                  <NavLink key={link}>{link}</NavLink>
            </Box>
          ))}
          <Box marginTop={'20px'}/>
          {!loading ? (
            null
          ) : (session ? 
            (
              <LogOutButton>Log Out</LogOutButton>
            ) : (
              <LoginButton text={"Get Started!"}/>
            )
          )}
        </DrawerContent>
        </Drawer>
    </>
  )
}