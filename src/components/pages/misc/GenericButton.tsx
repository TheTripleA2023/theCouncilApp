import {
    Box,
  } from '@chakra-ui/react'

export default function GenericButton({text='default button', onClick=null,...props}) {
    
    return (
      <>
        <Box   
            as='button'
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
            {...props}
        >
          {text}
        </Box>
      </>
    )
}
  