import { HStack, VStack, Text, StackDivider, Divider, Button, useToast } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList({ user, setUser, saleInfo, setSaleInfo }) {
  const [productList, setProductList] = useState([]);
  const [TotalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let x = 0;
    productList.map((e) => (x += e.value));
    setTotalValue(x);
  }, [productList]);

  function handleClick() {
    setProductList([...productList, { id: nanoid() }]);
  }

  function removeList(id) {
    const newProductList = productList.filter((e) => {
      return e.id !== id;
    });
    setProductList(newProductList);
  }

  function setTotalValueByFunc(val) {
    const newList = productList.map((e) => (e.id === val.id ? val : e));
    setProductList(newList);
  }
  const toast = useToast();

  function handleSaleBtn() {
    if (!productList.length) {
      return toast({
        title: "Empty Product !!",
        description: "Entry the product details before sale",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      setSaleInfo([...saleInfo, { User: user, Products: { productList, TotalValue } }]);
      setProductList([]);
      setUser({});
      return toast({
        title: "Product Sale Successfull",
        description: "The sale list will be saved in our database",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  }
  return (
    <div>
      <VStack mt="5" p="2" border="1px" borderColor="gray.300" borderRadius="lg" minH="40vh" alignItems="stretch">
        <HStack divider={<StackDivider />} textAlign="center">
          <Text w="8%" fontSize="sm">
            No
          </Text>
          <Text w="45%" fontSize="sm">
            Description
          </Text>
          <Text w="10%" fontSize="sm">
            Qty
          </Text>
          <Text w="10%" fontSize="sm">
            Rate
          </Text>
          <Text w="15%" fontSize="sm">
            Total
          </Text>
          <Text w="12%" fontSize="sm">
            Dlt
          </Text>
        </HStack>

        <Divider />
        {productList.map((e, index) => (
          <Product key={e.id} id={e.id} index={index + 1} setTotalValueByFunc={setTotalValueByFunc} removeList={removeList} />
        ))}
        <HStack cursor="pointer" justifyContent="center" bg="blue.100" borderRadius="full" height="5vh" onClick={handleClick}>
          <Text>Add Product</Text>
          <FaPlusCircle />
        </HStack>
      </VStack>
      <HStack my="4" justifyContent="end">
        <Text>Total :</Text>
        <Text textAlign="center" w="20%">
          {TotalValue}৳
        </Text>
      </HStack>
      <HStack justifyContent="center">
        <Button colorScheme="teal" variant="outline" onClick={handleSaleBtn}>
          Sale Now
        </Button>
      </HStack>
    </div>
  );
}

export default ProductList;
