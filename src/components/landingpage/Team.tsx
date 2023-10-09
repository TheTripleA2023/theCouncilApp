import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

// import CatAvatar from './../../../../CatAvatar.png'

const Team = () => {

    const teamInformation = [
        {
            name: "Alex Hernandez",
            role: "Designer",
            animalPicture: "./img/CatAvatar.png"
        },
        {
            name: "Adi Poluri",
            role: "Engineer",
            animalPicture: "./img/OrcaAvatar.png"
        },
        {
            name: "Alan Wang",
            role: "Bear Creator",
            animalPicture: "./img/FrogAvatar.png"
        },
        {
            name: "Taryn Wou",
            role: "PM + Engineer",
            animalPicture: "./img/FlamingoAvatar.png"
        }
    ]

  return (
    <Box className='team-landingpage'>
        <Box className='team-container'>
            <Text className='team-header' paddingBottom="24px">
                Meet the council behind the Council
            </Text>
            <Text className='team-text' paddingBottom="30px">
                We’re a team of students from the University of British Columbia.
                <br/>
                Fun fact: we’re all looking for jobs, please hire us! 
            </Text>

            <Box className='member-card-container' display='flex' flexDirection='row'>
                {teamInformation.map((card, index) => {
                    return <Box className='council-member-card' marginLeft="10px" marginRight="10px">
                        <Image w="100px" className="team-picture" src={card.animalPicture} />
                        <Text className='team-name' paddingTop="5px">
                            {card.name}
                        </Text>
                        <Text className='team-role' paddingTop="5px">
                            {card.role}
                        </Text>
                    </Box>
                })}
            </Box>


        </Box>
    </Box>
  )
}

export default Team
