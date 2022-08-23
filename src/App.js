import { Container } from "@chakra-ui/react";
import CusterInfo from "./components/CusterInfo";
import HeaderInfo from "./components/HeaderInfo";
import ProductList from "./components/ProductList";
import React, { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [TotalValue, setTotalValue] = useState(0);
  return (
    <Container>
      <HeaderInfo />
      <CusterInfo />
      <ProductList productList={productList} setProductList={setProductList} TotalValue={TotalValue} setTotalValue={setTotalValue}/>
    </Container>
  );
}

export default App;
