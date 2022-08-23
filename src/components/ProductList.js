import { HStack, VStack, Text, StackDivider, IconButton } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function ProductList() {
  const initial_count = { id: "1" };
  const initial_totalList = { id: "1", value: 0 };

  const [count, setCount] = useState([initial_count]);
  const [totalList, setTotalList] = useState([initial_totalList]);
  const [TotalValue, setTotalValue] = useState(0);

  function handleClick() {
    let randId = nanoid();
    setCount([...count, { id: randId }]);
    setTotalList([...totalList, { id: randId, value: 0 }]);
  }

  function removeList(id) {
    const newCount = count.filter((e) => {
      return e.id !== id;
    });
    const newtotalList = totalList.filter((e) => {
      return e.id !== id;
    });
    setCount(newCount);
    console.log(newtotalList);
    setTotalList(newtotalList);
  }

  useEffect(() => {
    let x = 0;
    console.log(totalList);
    totalList.map((e) => (x += e.value));
    setTotalValue(x);
  }, [totalList]);

  function setTotalValueByFunc(val) {
    const newList = totalList.map((e) => {
      if (e.id === val.id) return { id: e.id, value: val.value };
      else return e;
    });

    setTotalList(newList);
  }

  return (
    <div>
      <VStack mt="5" p="2" border="1px" borderColor="gray.300" borderRadius="lg" minH="40vh" alignItems="stretch">
        <HStack divider={<StackDivider />} textAlign="center">
          <Text w="10%">No</Text>
          <Text w="45%">Description</Text>
          <Text w="10%">Qty</Text>
          <Text w="10%">Rate</Text>
          <Text w="15%">Total</Text>
          <Text w="10%">Dlt</Text>
        </HStack>

        {count.map((e, index) => (
          <Product key={e.id} id={e.id} index={index + 1} setTotalValueByFunc={setTotalValueByFunc} removeList={removeList} />
        ))}

        <HStack>
          <IconButton my="4" mx="auto" width="20%" colorScheme="blue" fontSize="3xl" onClick={handleClick} icon={<FaPlusCircle />} />
        </HStack>
      </VStack>
      <HStack my="4" justifyContent="end">
        <Text>Total :</Text>
        <Text textAlign="center" w="20%">
          {TotalValue}৳
        </Text>
      </HStack>
    </div>
  );
}

export default ProductList;
