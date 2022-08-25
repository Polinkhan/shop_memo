import React from "react";
import { Tabs, Tab, Text, TabList, TabPanels, TabPanel, HStack, Divider, Box } from "@chakra-ui/react";
import CusterInfo from "./CusterInfo";
import ProductList from "./ProductList";
import Saledata from "./Saledata";

function Navbar() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" border="1px" minH="96vh" borderColor="gray.300" borderRadius="lg">
      <HStack>
        <Text w="40%" textAlign="center" my="4" fontWeight="bold" fontSize="xl">
          KHAN <br /> ENTERPRISE
        </Text>
        <TabList w="60%" justifyContent="space-around">
          <Tab bg="gray.100">Memo</Tab>
          <Tab bg="gray.100">Sale Info</Tab>
        </TabList>
      </HStack>
      <Box mx="4">
        <Divider />
      </Box>
      <TabPanels>
        <TabPanel>
          <CusterInfo />
          <ProductList />
        </TabPanel>
        <TabPanel>
          <Saledata/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Navbar;
