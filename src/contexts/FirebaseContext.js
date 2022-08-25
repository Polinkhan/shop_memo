import { useContext, createContext } from "react";

//Firebase Import
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

console.log(dataRef)

const query = dataRef.orderBy("createdAt").limit(25);

const FirebaseContext = createContext();
export const useFirebase = () => useContext(FirebaseContext);

function FirebaseContextProvider(props) {
  const [data] = useCollectionData(query, { idField: "id" });

  const upload = async (ss) => {
    await dataRef.add(ss);
  };

  const value = { data, upload };

  return (
    <FirebaseContext.Provider value={value}>
      {props.children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseContextProvider;
