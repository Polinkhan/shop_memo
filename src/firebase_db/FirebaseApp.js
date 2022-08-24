// import React, { useState } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import { Button, Input } from "@chakra-ui/react";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { nanoid } from "nanoid";

// firebase.initializeApp({
//   apiKey: "AIzaSyCHFdscpV19TnR_zD6p_RVuLa62J7ckWE4",
//   authDomain: "shop-data-ca3a0.firebaseapp.com",
//   projectId: "shop-data-ca3a0",
//   storageBucket: "shop-data-ca3a0.appspot.com",
//   messagingSenderId: "302380245622",
//   appId: "1:302380245622:web:333c806a0b61689e7cb557",
//   measurementId: "G-PVLGKF98PG",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function SignIn() {
//   function signInWithGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }
//   return (
//     <Button colorScheme="blue" onClick={signInWithGoogle}>
//       Sign In
//     </Button>
//   );
// }
// function SignOut() {
//   const [input, setInput] = useState("");

//   function userSignOut() {
//     auth.currentUser && auth.signOut();
//   }

//   const dataRef = firestore.collection("User");
//   const query = dataRef.orderBy("createdAt").limit(25);

//   const [data] = useCollectionData(query, { idField: "id" });
//   console.log(data);

//   const upload = async () => {
//     await dataRef.add({
//       name: input,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       user: {},
//     });
//   };
//   return (
//     <div>
//       <Button colorScheme="blue" onClick={userSignOut}>
//         Sign Out
//       </Button>
//       <Input
//         value={input}
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//       />
//       <Button colorScheme="blue" onClick={upload}>
//         upload
//       </Button>
//       <div>{data && data.map((user) => <div key={nanoid()}>{user.name}</div>)}</div>
//     </div>
//   );
// }
// function FirebaseApp() {
//   const [user] = useAuthState(auth);
//   return <div>{user ? <SignOut /> : <SignIn />}</div>;
// }

// export default FirebaseApp;
