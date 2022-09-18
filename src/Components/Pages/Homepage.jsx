import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderWelcome from '../Header/HeaderIntro';
import Navigation, { SideBar } from '../Header/Navigation';



export default function Homepage() {
    return (
        <Box>
           <Navigation />
           <Flex>

           <SideBar />
           <HeaderWelcome />
           </Flex>
        </Box>
    )
}