import { HStack, InputGroup, InputLeftAddon, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";

function CusterInfo() {
  return (
    <VStack alignItems="stretch">
      <HStack my="4">
        <p>Memo No : </p>
        <Spacer />
        <p>Date : {new Date().toDateString()}</p>
      </HStack>
      <InputGroup>
        <InputLeftAddon children="Name :" w="20%" justifyContent="center" bg="white" border="0" />
        <Input variant="flushed" type="text" placeholder="Customer Name" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="Phone :" w="20%" justifyContent="center" bg="white" border="0" />
        <Input variant="flushed" type="text" placeholder="Customer Phone Number" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="Address :" w="20%" justifyContent="center" bg="white" border="0" />
        <Input variant="flushed" type="text" placeholder="Customer Address" />
      </InputGroup>
    </VStack>
  );
}

export default CusterInfo;
