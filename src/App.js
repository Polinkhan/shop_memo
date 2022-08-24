//Firebase Import
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Container, Progress, Text, Stack, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

firebase.initializeApp({
  apiKey: "AIzaSyCHFdscpV19TnR_zD6p_RVuLa62J7ckWE4",
  authDomain: "shop-data-ca3a0.firebaseapp.com",
  projectId: "shop-data-ca3a0",
  storageBucket: "shop-data-ca3a0.appspot.com",
  messagingSenderId: "302380245622",
  appId: "1:302380245622:web:333c806a0b61689e7cb557",
  measurementId: "G-PVLGKF98PG",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const dataRef = firestore.collection("User");
const query = dataRef.orderBy("createdAt").limit(25);

function App() {
  const [user, setUser] = useState({});
  const [data] = useCollectionData(query, { idField: "id" });
  // let data = null;
  const upload = async (ss) => {
    console.log(ss);
    await dataRef.add(ss);
  };

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  if (data) {
    return (
      <Container mt="4">
        <Navbar user={user} setUser={setUser} data={data} upload={upload} />
      </Container>
    );
  } else {
    return (
      <Container>
        <Progress my="8" size="xs" isIndeterminate />
        <Stack color="gray" direction="row" spacing={4} justifyContent="center" alignItems="center">
          <Text fontSize="sm">
            Fetching Data From Server
          </Text>
          <Spinner size="xs"/>
        </Stack>
      </Container>
    );
  }
}

export default App;
