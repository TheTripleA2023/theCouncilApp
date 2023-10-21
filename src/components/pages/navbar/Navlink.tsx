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
  Text
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

export default function NavLink(props: Props) {
  const { children } = props

  const { isOpen: aboutIsOpen, onOpen: aboutOnOpen, onClose: aboutOnClose } = useDisclosure()
  const { isOpen: disclaimerIsOpen, onOpen: disclaimerOnOpen, onClose: disclaimerOnClose } = useDisclosure()


  return (
    <>
      <Box
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
        onClick={children === "Usage Disclaimer" ? disclaimerOnOpen : aboutOnOpen}>
        {children}
      </Box>

      {/* first modal */}
      <Modal isOpen={aboutIsOpen} onClose={aboutOnClose} >
        <ModalOverlay />
        <ModalContent 
          bg="#21234B"
          borderRadius={'40px'}
          padding={'20px'}
          minWidth={['90%','50%','30%']}
          >
          <ModalHeader
            fontSize="48px"
            fontWeight="700">
            About
          </ModalHeader>
          <ModalBody
            fontWeight="400"
            lineHeight="28px"
            >
              <Text paddingBottom="20px">
                  The Council was born out of a hackathon project! It was a top 12 winning project at <a className='modalName' href='https://www.youtube.com/live/7sVzflHqHAo?si=dgz5CnZy8PRJd-Xl&t=955' target="_blank" rel="noopener noreferrer">Hack the North 2023.</a>
              </Text>
              <Text paddingBottom="15px">
                We’re a team of students from the University of British Columbia (please hire us we’re looking for jobs)
              </Text>
              <Text paddingBottom="15px">
                Thanks for using the Council!
              </Text>
              {/* <Text>
                Alex, Adi, Alan, and Taryn
              </Text> */}
              <Text>
                <a className='modalName' href="https://www.linkedin.com/in/alexdshernandez/" target="_blank">Alex</a>,{' '}
                <a className='modalName' href="https://www.linkedin.com/in/adityapoluri/" target="_blank">Adi</a>,{' '}
                <a className='modalName' href="https://www.linkedin.com/in/alan-wang-a577b81b5/" target="_blank">Alan</a>, and{' '}
                <a className='modalName' href="https://www.linkedin.com/in/tarynwou/" target="_blank">Taryn</a>
              </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={aboutOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* second modal */}
      <Modal isOpen={disclaimerIsOpen} onClose={disclaimerOnClose}>
        <ModalOverlay />
        <ModalContent 
          bg="#21234B"
          borderRadius={'40px'}
          padding={'20px'}
          minWidth={['90%','50%','30%']}
          >
          <ModalHeader
            fontSize="48px"
            fontWeight="700">
            Usage Disclaimer
          </ModalHeader>
          <ModalBody
            fontWeight="400"
            lineHeight="28px">
              <Text>
              The Council’s content has been automatically generated by an AI and should be used for informational or leisure purposes only. We cannot guarantee the accuracy, completeness, or timeliness of the information provided. Any actions taken based on this content are at your own risk. We recommend seeking qualified expertise or conducting further research to validate and supplement the information provided.
              </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={disclaimerOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
