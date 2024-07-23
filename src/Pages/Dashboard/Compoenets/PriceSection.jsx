import React from 'react'
import { CustamCard } from '../../../chakra/CustamCard'
import { Button, Flex, HStack, Icon, Image,  Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { BsArrowDownLeft } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import graph from "../../../../src/assets/Vector 27.png"
const PriceSection = () => {
    const time = ["7:55 AM", "8:55 AM", "9:55 AM", "10:55 AM", "11:55 AM"]
    return (
        <CustamCard>
            <HStack justifyContent="space-between">
                <HStack flexDir={"column"} alignItems={"start"}>
                    <HStack color="black.80">
                        <Text fontSize="sm">Current Price</Text>
                    </HStack>
                    <HStack>
                        <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
                        <HStack fontWeight={"medium"} color={"green.500"}>
                            <Icon as={BsArrowDownLeft} />
                            <Text fontSize={"sm"}>0.04%</Text>
                        </HStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack>
                        <Button leftIcon={<Icon as={CiCirclePlus} />}>Buy</Button>
                        <Button leftIcon={<Icon as={CiCircleMinus} />}>Sell</Button>
                    </HStack>
                </HStack>

            </HStack>
            <Tabs variant="soft-rounded">
                <Flex justify="end">
                    <TabList bg="black.5" p="3px">
                        {["1H", "1D", "1W", "1M"].map((tab) => (
                            <Tab
                                _selected={{ bg: "white" }}
                                key={tab}
                                fontSize="sm"
                                p="6px"
                                borderRadius="4"
                            >
                                {tab}
                            </Tab>
                        ))}
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src={graph} mt={"48px"} />
                        <HStack justifyContent={'space-between'} mt="2">
                            {
                                time.map((i) => (<Text key={i} fontSize={"sm"} color={"black.80"}>{i}</Text>))
                            }

                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </CustamCard>
    )
}

export default PriceSection
