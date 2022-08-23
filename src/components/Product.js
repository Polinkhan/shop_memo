import { HStack, Text, StackDivider, Input, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Product({ id, index, setTotalValueByFunc, removeList }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState("");
  const [rate, setRate] = useState("");
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
      desc: description,
      qty: qty,
      rate: rate,
      value: total,
    });
  }, [id, description, qty, rate, total]);

  return (
    <HStack divider={<StackDivider />} textAlign="center">
      <Input w="8%" fontSize="sm" variant="flushed" textAlign="center" fontWeight="bold" readOnly={true} value={index} />
      <Input w="45%" fontSize="sm" type="text" variant="flushed" textAlign="center" value={description} placeholder="Product Description" onChange={(e) => handleValue(setDescription, e)} />
      <Input w="10%" fontSize="sm" type="number" variant="flushed" textAlign="center" value={qty} placeholder="0" onChange={(e) => handleValue(setQty, e)} />
      <Input w="10%" fontSize="sm" type="number" variant="flushed" textAlign="center" value={rate} placeholder="0" onChange={(e) => handleValue(setRate, e)} />
      <Input w="15%" fontSize="sm" variant="flushed" textAlign="center" fontWeight="bold" readOnly={true} value={total} />
      <Text w="12%" fontSize="sm">
        <IconButton className="rmBtn" borderRadius="50%" size="sm" icon={<FaTrash />} onClick={() => removeList(id)}></IconButton>
      </Text>
    </HStack>
  );
}

export default Product;
