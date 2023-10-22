'use client'

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Flex,
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
          <DrawerContent bg={"#21234B"}  borderLeftRadius={'40px'} >
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
                        <div className="absolute right-0 bot-0 -z-10">
                          <Image
                            marginTop={['65%','50%']}
                            src='img/Possum.png'
                            pointerEvents={'none'}
                          />
                        </div>

                    </VStack>
                </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }