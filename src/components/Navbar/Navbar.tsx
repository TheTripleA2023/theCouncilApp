'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import LogOutButton from './LogOutButton'
import GetStartedButton from './GetStartedButton'
import LoginButton from '../landingpage/LoginButton'

interface Props {
  children: React.ReactNode
}

const Links = ['About', 'Usage Disclaimer']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={5}
      py={2}
      rounded={'md'}
      fontWeight={600}
      borderWidth={'2px'}
      borderColor={'RGBA(0,0,0,0)'}
      _hover={{
        textDecoration: 'none',
        borderColor: 'white',
        bg: 'gray.700',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()

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
                the Council.
            </Box>
            <Spacer />
            <HStack as={'nav'} spacing={5}  marginRight={[4, 12, 24, 48]} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
              ))}
              {!loading ? (
                null
              ) : (session ? 
                (
                  <LogOutButton>Log Out</LogOutButton>
                ) : (
                  <LoginButton text={"Get Started!"}/>
                )
              )}
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
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} alignItems={'right'}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              {!loading ? (
                null
              ) : (session ? (
                  <LogOutButton>Log Out</LogOutButton>
                ) : (
                  <LoginButton text={"Get Started!"}/>
                )
              )}
            </Stack>
          </Box>
        ) : null}
    </>
  )
}