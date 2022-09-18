import { Box } from '@chakra-ui/react';
import React from 'react';
import Navigation, { SideBar } from '../Header/Navigation';



export default function Homepage() {
    return (
        <Box>
           <Navigation />
           <SideBar />
        </Box>
    )
}