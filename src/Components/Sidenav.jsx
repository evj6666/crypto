import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md"; import { Link } from 'react-router-dom';

const Sidenav = () => {

    let navLinks = [{
        id:1,
        icon: TbLayoutDashboard,
        text: "Dashboard",
        link: "/"
    }, {
        id:2,
        icon: MdOutlineCompareArrows,
        text: "Transactions",
        link: "/transection"
    }]
    return (

        <Stack bg={"white"} justifyContent="space-between" boxShadow={{
            base: "none",
            lg: "black"
        }}
            w={{
                base: "full",
                lg: "16rem"
            }} h="120vh">
            <Box>
                <Heading textAlign="center" fontSize="lg" as="h1" pt="3.5rem" color="#977ad4" fontWeight="500">@DOSOMECODING</Heading>
                <Box mt="6" mx="3">
                    {
                        navLinks.map((nav) => (
                            <Link to={nav.link} key={nav.id}>
                                <HStack
                                    borderRadius="10px"
                                    key={nav.text}
                                    py="3"
                                    px="4"
                                    _hover={{
                                        bg: "#F3F3F7",
                                        color: "#171717"
                                    }}
                                    color="#797E82">
                                    <Icon as={nav.icon} />
                                    <Text>{nav.text}</Text>
                                </HStack>
                            </Link>
                        ))
                    }
                </Box>
            </Box>
            <Box mt="6" mx="3">
                <Link to={"/support"}>
                    <HStack
                        borderRadius="10px"
                        py="3"
                        px="4"
                        my="2"
                        _hover={{
                            bg: "#F3F3F7",
                            color: "#171717"
                        }}>
                        <Icon as={MdOutlineSupportAgent} />
                        <Text>Support</Text>
                    </HStack></Link>
            </Box>

        </Stack>
    )
}

export default Sidenav
