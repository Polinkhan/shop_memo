import React from "react";
import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import CusterInfo from "./CusterInfo";
import ProductList from "./ProductList";
import Saledata from "./Saledata";

function Navbar({ user, setUser, saleInfo, setSaleInfo }) {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Memo</Tab>
        <Tab>Sale Info</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CusterInfo user={user} setUser={setUser} />
          <ProductList user={user} setUser={setUser} saleInfo={saleInfo} setSaleInfo={setSaleInfo} />
        </TabPanel>
        <TabPanel>
          <Saledata saleInfo={saleInfo}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Navbar;
