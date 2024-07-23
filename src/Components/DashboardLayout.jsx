import React from 'react'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import DrawerEffect from './DrawerEffect'
const DashboardLayout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Flex>
                <Box display={{
                    base: "none",
                    lg: "block"
                }}>
                    <Sidenav />
                </Box>
                <DrawerEffect onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
                <Box flexGrow={1}>
                    <Topnav title={title} onOpen={onOpen} />
                    <Container overflowX="hidden" overflowY="auto" h="calc(120vh - 80px)" maxW="70rem">
                        {children}
                    </Container>
                </Box>
            </Flex>
        </div>
    )
}

export default DashboardLayout;
