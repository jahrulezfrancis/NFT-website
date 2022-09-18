import { Box, Flex, UnorderedList, ListItem, Image, Input, InputGroup, InputRightElement, Button, Avatar, HStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi"
import { MdAdd } from "react-icons/md"
import HeaderLogo from "../Assests/Images/header-logo.png"
import UserAvatar from "../Assests/Images/user-avatar.png"



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