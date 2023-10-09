import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box className='footer-landingpage'>
        <Box className='footer-container'>
            <Text className='footer-title'>the Council.</Text>
            <Box display='flex' flexDirection='row'>
            <Text className='footer-text'>
                made with🩸,💦, 😭
                <br/>
                3d model animals by Omabuarts Studio
            </Text>
            <Text className='footer-text' paddingLeft="72px">
                Got any suggestions for us?
                <br/>
                Fill out our feedback form!
            </Text>
            </Box>
            <Text className='footer-text'  paddingTop="60px">
                © 2023 Alexandra Hernandez, Aditya Poluri, Alan Wang, Taryn Wou
            </Text>
        </Box>
    </Box>
  )
}

export default Footer
