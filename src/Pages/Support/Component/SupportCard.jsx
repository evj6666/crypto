import React from "react";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      alignItems="center" // Center align items vertically
      textAlign={{ base: "center", xl: "left" }} // Center text content on small screens
    >
      <Stack maxW="24rem" textAlign="center" mb={{ base: 6, xl: 0 }}>
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full" mb="3">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
