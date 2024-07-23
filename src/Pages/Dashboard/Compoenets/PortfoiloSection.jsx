import React from 'react';
import { Button, HStack, Icon, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react';
import { CiCircleInfo } from 'react-icons/ci';
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs';

const PortfoiloSection = () => {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Stack
      direction={flexDirection} // Stack direction based on flexDirection
      bg="white"
      p="4"
      borderRadius="lg"
      my="4"
      spacing="4" // Add spacing between child elements
    >
      <Stack flex="1">
        <HStack color="black.80" spacing="2">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon as={CiCircleInfo} />
        </HStack>
        <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
      </Stack>

      <Stack flex="1">
        <HStack color="black.80" spacing="2">
          <Text fontSize="sm">Wallet Balances</Text>
        </HStack>
        <Stack spacing="2">
          <HStack>
            <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
            <Tag colorScheme='red'>BTC</Tag>
          </HStack>

        </Stack>
      </Stack>

      <HStack spacing="4">
        <Button leftIcon={<Icon as={BsArrowBarDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={BsArrowBarUp} />}>Withdraw</Button>
      </HStack>
    </Stack>

  );
}

export default PortfoiloSection;
