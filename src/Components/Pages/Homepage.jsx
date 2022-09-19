import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderWelcome from '../Header/HeaderIntro';
import Navigation, { SideBar } from '../Header/Navigation';
import NFTcards from '../Interface/Card';



export default function Homepage() {
    return (
        <Box>
            <Navigation />
            <Flex>
                <SideBar />
                <HeaderWelcome />
            </Flex>
                <NFTcards />
        </Box>
    )
}