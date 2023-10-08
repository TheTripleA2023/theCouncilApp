'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['About', 'Usage Disclaimer']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      fontWeight={600}
      _hover={{
        textDecoration: 'none',
        borderWidth: '2px',
        bg: 'gray.700',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Box
                as="a"
                px={5}
                py={2}
                rounded={'md'}
                href={'#'}
                className='navbar-button'
                >
                    Get Started
                </Box>
            </HStack>

          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'white'}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </>
  )
}