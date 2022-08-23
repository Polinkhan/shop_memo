import { HStack, Text, StackDivider, Input, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Product({ id, index, setTotalValueByFunc, removeList }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);

  function handleValue(func, e) {
    func(e.target.value);
  }

  useEffect(() => {
    setTotal(qty * rate);
  }, [qty, rate]);

  useEffect(() => {
    setTotalValueByFunc({
      id: id,
      value: total,
    });
  }, [total]);

  return (
    <HStack divider={<StackDivider />} textAlign="center">
      <Text w="10%">{index}</Text>
      <Input w="45%" type="text" variant="flushed" value={description} onChange={(e) => handleValue(setDescription, e)} />
      <Input w="10%" type="number" variant="flushed" textAlign="center" value={qty} onChange={(e) => handleValue(setQty, e)} />
      <Input w="10%" type="number" variant="flushed" textAlign="center" value={rate} onChange={(e) => handleValue(setRate, e)} />
      <Text w="15%" fontWeight="bold">
        {total}
      </Text>
      <Text w="10%">
        <IconButton className="rmBtn" borderRadius="50%" fontSize="sm" size="sm" icon={<FaTrash />} onClick={() => removeList(id)}></IconButton>
      </Text>
    </HStack>
  );
}

export default Product;
