import { Box, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { LuUserCircle } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
const Topnav = ({title, onOpen }) => {
    return (
        <Box px="4" bg={"white"}>
            <HStack maxW="70rem" h="16" justifyContent="space-between" mx="auto">
                <Icon as={FaBars} onClick={onOpen} display={
                    {
                        base: "block",
                        lg: "none"
                    }
                } />
                <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
                <Menu>
                    <MenuButton >
                        <Icon as={LuUserCircle} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log out</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default Topnav
