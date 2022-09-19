import { Box, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import Card1 from "../Assests/Images/Card1.png"
import Card2 from "../Assests/Images/Card2.png"
import Card3 from "../Assests/Images/Card3.png"
import Card4 from "../Assests/Images/Card4.png"
import Card5 from "../Assests/Images/Card5.png"
import Card6 from "../Assests/Images/Card6.png"

export default function NFTcards() {
    return (
        <Box>
            <VStack>
                <Heading as='h2'>You will be interested</Heading>
                <HStack>
                    <Image src={ Card1 } alt='' />
                    <Image src={ Card2 } alt='' />
                    <Image src={ Card3 } alt='' />
                    <Image src={ Card4 } alt='' />
                    <Image src={ Card5 } alt='' />
                    <Image src={ Card6 } alt='' />
                </HStack>
            </VStack>
        </Box>
    )
}