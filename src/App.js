import { Container } from "@chakra-ui/react";
import CusterInfo from "./components/CusterInfo";
import HeaderInfo from "./components/HeaderInfo";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Container>
      <HeaderInfo/>
      <CusterInfo />
      <ProductList/>
    </Container>
  );
}

export default App;
