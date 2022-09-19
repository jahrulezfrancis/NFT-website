import React from 'react';
import { Box, Heading, HStack, VStack, Image, Stack, Flex, Button, useMediaQuery } from '@chakra-ui/react';
import Asset1 from "../Assests/Images/col1.png"
import Asset2 from "../Assests/Images/col2.png"
import Asset3 from "../Assests/Images/col3.png"
import Asset4 from "../Assests/Images/col4.png"
import Asset5 from "../Assests/Images/col5.png"


import HeaderArt from "../Assests/Images/Art.png"



export default function HeaderWelcome() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Stack>
            <Box bgColor='#6F75F7' h='20em' borderRadius='3em' display='flex' justifyContent='center' ml={ onMobile ? '0em' : '8em'} p='.5em' mt='8em'>
                <HStack justify='start'>
                    <VStack p='3em' textAlign='start' spacing='2em'>
                        <Heading textAlign='start' fontSize='2em' fontWeight='700' lineHeight='1.5em' color='white' fontFamily='Manrope'>
                            Popular and affordable <br />
                            collections
                        </Heading>
                        <HStack w='100%' justify='cente' align='start' pb={onMobile ? '1em' : '0em'}>
                            <Image src={Asset1} alt='' />
                            <Image src={Asset2} alt='' />
                            <Image src={Asset3} alt='' />
                            <Image src={Asset4} alt='' />
                            <Image src={Asset5} alt='' />

                        </HStack>
                    </VStack>
                    <Flex justify='flex-end' align='flex-end'>
                        <Image src={HeaderArt} alt='' />
                    </Flex>
                </HStack>
            </Box>
            <Stack justify='center' align='center' mt='-10em' w='auto'>
                <Button alignSelf='center' _hover={{bgColor: "#6F75F7"}} mt='-2.5em' borderRadius='2em' color='white' bgColor='black' w='8em' h='3em'>See Offers</Button>
            </Stack>
        </Stack>
    )
}