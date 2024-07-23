import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import { FaDownload } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './Components/TransactionTable';
import { BsSearch } from 'react-icons/bs';
const TransectionPage = () => {
  let a = [{
    name: "all",
    count: 328
  },
  {
    name: "Deposit",
    count: 114
  },
  {
    name: "WithDraw",
    count: 213
  },
  {
    name: "Trade",
    count: 38
  }]
  return (
    <DashboardLayout title={"Transaction"}>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList pt="4" display="flex" w="full" justifyContent={"space-around"}>
            <HStack>
              {a.map((item, i) => (
                <Tab key={i} display={"flex"} gap="2">
                  {item.name}{" "}
                  <Tag colorScheme='gray' borderRadius={"full"}>{item.count}</Tag>
                </Tab>

              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Card>
    </DashboardLayout>
  )
}

export default TransectionPage
