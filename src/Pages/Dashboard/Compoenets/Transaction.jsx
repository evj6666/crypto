import React, { Fragment } from 'react'
import { CustamCard } from '../../../chakra/CustamCard'
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { RiBtcLine } from "react-icons/ri";
const Transaction = () => {
    let data = [{
        id: 1,
        icon: HiOutlineCurrencyRupee,
        text: "INR Deposit",
        time: "2022-06-09 7:06 PM",
        price: "+ ₹81,123.10"
    }, {
        id: 2,
        icon: RiBtcLine,
        text: "BTC Sell",
        time: "2022-05-27 12:32 PM",
        price: "- 12.48513391 BTC"
    }, {
        id: 3,
        icon: HiOutlineCurrencyRupee,
        text: "INR Deposit",
        time: "2022-06-09 7:06 PM",
        price: "+ ₹81,123.10"
    }]
    return (
        <CustamCard h="full">
            <Text color={"black.80"} mb="6" fontSize={"sm"}>Recent Transactions</Text>
            <Stack spacing={"4"}>
                {
                    data.map((item, i) => (
                        <Fragment key={i}>
                            {i !== 0 && <Divider />}
                            <Flex gap="4">
                                <Grid
                                    bg={"black.5"}
                                    borderRadius={"full"}
                                    boxSize={"10"}
                                    placeItems={"center"}
                                >
                                    <Icon as={item.icon} />
                                </Grid>
                                <Flex justify={"space-between"} w="full">
                                    <Stack>
                                        <Text textStyle={"h6"}>{item.text}</Text>
                                        <Text fontSize={"sm"} color={"black.40"}>{item.time}</Text>
                                    </Stack>
                                    <Text textStyle={"h6"}>{item.price}</Text>
                                </Flex>
                            </Flex>

                        </Fragment>
                    ))
                }

            </Stack>
            <Button mt={6}  w="full" align="center">View All</Button>

        </CustamCard>
    )
}

export default Transaction
