'use client'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Center,
    Spacer,
    Flex,
    StackDivider,
    Box,
    Text,
    Image,
  } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react'
import { useEffect, useState } from 'react';
  

const supabase = createClientComponentClient();

export default function LoginDrawer({ onOpen, onClose, isOpen}) {
    const [callback, setCallback] = useState("");

    useEffect(function mount() {
      setCallback(window.location.origin+"/auth/v1/callback")
    });
  
    return (
      <>
        <Drawer onClose={onClose} isOpen={isOpen} size={['xs', 'md']}>
          <DrawerOverlay />
          <DrawerContent bg={"#21234B"}  borderLeftRadius={'24px'} >
            <DrawerCloseButton size={'lg'} />
            <DrawerBody>
                <Flex   
                alignItems={'center'} 
                justifyContent={'space-between'}
                minHeight={'100%'}
                width={'100%'}
                padding={['1em','4em']}
                >
                    <VStack
                        spacing={4}
                        align='stretch'
                        >
                        <Text
                            color={"#F2F6FF"}
                            fontSize={['36px', '48px']}
                            fontWeight={800}
                            >
                            Log In
                        </Text>
                        <Auth
                        supabaseClient={supabase}
                        providers={['google','github']}
                        onlyThirdPartyProviders
                        redirectTo={callback}
                        appearance={{
                            style: {
                              button: { margin: '8px', border: "2px solid #FFFFFF", borderRadius: "8px", padding: "12px"},
                              message: { margin: '24px'},
                              //..
                            },
                          }}
                        />
                        <Image
                            marginTop={['65%','40%']}
                            marginRight={'10%'}
                            position={'absolute'}
                            w="100%"
                            src='img/Possum.png'
                        />
                    </VStack>
                </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }