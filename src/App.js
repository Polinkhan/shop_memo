import { Container } from "@chakra-ui/react";
import HeaderInfo from "./components/HeaderInfo";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState({});
  const [saleInfo, setSaleInfo] = useState([]);

  useEffect(() => {
    console.log("saleInfo", saleInfo);
  }, [saleInfo]);

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  return (
    <Container>
      <HeaderInfo />
      <Navbar user={user} setUser={setUser} saleInfo={saleInfo} setSaleInfo={setSaleInfo} />
    </Container>
  );
}

export default App;
