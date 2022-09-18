import { Box, Icon, Flex, UnorderedList, ListItem, Image, Input, InputGroup, InputRightElement, Button, Avatar, HStack, VStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"
import { BiNews } from "react-icons/bi"
import { MdAdd, MdExplore } from "react-icons/md"
import HeaderLogo from "../Assests/Images/header-logo.png"
import UserAvatar from "../Assests/Images/user-avatar.png"
import { GrServicePlay } from "react-icons/gr"
import { GiNetworkBars } from "react-icons/gi"



export function SideBar() {
    return (
        <Box>
            <Flex direction='column' gap='5' justify='center' align='center' w='7em' p='3em'>
                <Icon color='#1F50FF' w='2.5em' h='2.5em' as={MdExplore} />
                <Spacer />
                <Icon  w='2.5em' h='2.5em' as={GiNetworkBars} />
                <Spacer />
                <Icon  w='2.5em' h='2.5em' as={GrServicePlay} />
                <Spacer />
                <Icon  w='2.5em' h='2.5em' as={BiNews} />
            </Flex>
        </Box>
    )
}


export default function Navigation() {
    return (
        <Box>
            <UnorderedList listStyleType='none'>
                <Flex align='center' justify='space-between' p='1em'>
                    <ListItem>
                        <NavLink><Image src={HeaderLogo} alt='Header logo' /> </NavLink>
                    </ListItem>
                    <ListItem>
                        <InputGroup w='auto'>
                            <InputRightElement children={<FiSearch />} />
                            <Input type='search' placeholder='most searched for: Hip Hop' />
                        </InputGroup>
                    </ListItem>
                    <HStack>
                        <ListItem>
                            <Button fontSize='.9em' bgColor='#1F50FF' color='white' fontFamily='Hyundai Sans Head Office'
                                _hover={{ bgColor: '#6F75F7' }} leftIcon={<MdAdd />}>
                                Create
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Avatar name='Francis Longsaar' src={UserAvatar} />
                        </ListItem>
                    </HStack>
                </Flex>
            </UnorderedList>
        </Box>
    )
}


