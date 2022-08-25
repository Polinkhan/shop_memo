import {
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useCustomer } from "../contexts/CustomerContext";

function CusterInfo() {
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const { customer, setCustomerDetail } = useCustomer();

  useEffect(() => {
    setCustomerDetail({ name: userName, phone: userMobile, address: userAddress });
  }, [userName, userMobile, userAddress]);

  useEffect(() => {
    if (!Object.keys(customer).length) {
      setUserName("");
      setUserMobile("");
      setUserAddress("");
    }
  }, [customer]);

  return (
    <VStack alignItems="stretch">
      <HStack my="4">
        <p>Memo No : </p>
        <Spacer />
        <p>Date : {new Date().toDateString()}</p>
      </HStack>
      <InputGroup>
        <InputLeftAddon
          children="Name :"
          w="20%"
          justifyContent="center"
          bg="white"
          border="0"
        />
        <Input
          variant="flushed"
          type="text"
          placeholder="Customer Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon
          children="Phone :"
          w="20%"
          justifyContent="center"
          bg="white"
          border="0"
        />
        <Input
          variant="flushed"
          type="text"
          placeholder="Customer Phone Number"
          value={userMobile}
          onChange={(e) => {
            setUserMobile(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon
          children="Address :"
          w="20%"
          justifyContent="center"
          bg="white"
          border="0"
        />
        <Input
          variant="flushed"
          type="text"
          placeholder="Customer Address"
          value={userAddress}
          onChange={(e) => {
            setUserAddress(e.target.value);
          }}
        />
      </InputGroup>
    </VStack>
  );
}

export default CusterInfo;
