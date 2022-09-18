import React from 'react';
import { Box, Heading, HStack, VStack, Image } from '@chakra-ui/react';
import Asset1 from "../Assests/Images/col1.png"
import Asset2 from "../Assests/Images/col2.png"
import Asset3 from "../Assests/Images/col3.png"
import Asset4 from "../Assests/Images/col4.png"
import HeaderArt from "../Assests/Images/Art.png"



export default function HeaderWelcome() {
    return (
        <Box bgColor='#6F75F7'>
            <HStack>
                <VStack>
                    <Heading>Popular and affordable collections</Heading>
                    <HStack>
                        <Image src={Asset1} alt='' />
                        <Image src={Asset2} alt='' />
                        <Image src={Asset3} alt='' />
                        <Image src={Asset4} alt='' />
                    </HStack>
                </VStack>
                <Image src={HeaderArt} alt='' />
            </HStack>
        </Box>
    )
}