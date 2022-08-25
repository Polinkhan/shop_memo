import React from "react";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  HStack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import { useFirebase } from "../contexts/FirebaseContext";
function Saledata() {
  const { data } = useFirebase();
  return (
    <Accordion allowToggle>
      {data.map((Data, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton
              my="2"
              bg="blue.100"
              borderRadius="full"
              _expanded={{ bg: "teal.200" }}
            >
              <HStack
                w="100%"
                divider={<StackDivider />}
                justifyContent="space-between"
              >
                <Text w="30%">{Data.User.name}</Text>
                <Text w="40%">{Data.createdAt}</Text>
                <Text w="30%">{Data.Products.TotalValue}/=</Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={0} bg="gray.100" borderRadius="lg" mb="2">
            <HStack divider={<StackDivider />}>
              <Text py={2} w="8%" fontSize="sm" textAlign="center">
                No
              </Text>
              <Text w="45%" fontSize="sm" textAlign="center">
                Description
              </Text>
              <Text w="15%" fontSize="sm" textAlign="center">
                Qty
              </Text>
              <Text w="15%" fontSize="sm" textAlign="center">
                Rate
              </Text>
              <Text w="17%" fontSize="sm" textAlign="center">
                Total
              </Text>
            </HStack>
            <Divider />
            {Data.Products.productList.map((product, index) => (
              <HStack key={product.id} divider={<StackDivider />}>
                <Text py={2} w="8%" fontSize="sm" textAlign="center">
                  {index + 1}
                </Text>
                <Text w="45%" fontSize="sm" textAlign="center">
                  {product.desc}
                </Text>
                <Text w="15%" fontSize="sm" textAlign="center">
                  {product.qty}
                </Text>
                <Text w="15%" fontSize="sm" textAlign="center">
                  {product.rate}
                </Text>
                <Text w="17%" fontSize="sm" textAlign="center">
                  {product.qty * product.rate}
                </Text>
              </HStack>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Saledata;
