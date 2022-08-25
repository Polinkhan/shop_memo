import { Container, Progress, Text, Stack, Spinner } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CustomerContextProvider from "./contexts/CustomerContext";
import { useFirebase } from "./contexts/FirebaseContext";

function App() {
  const { data } = useFirebase();
  return (
    <CustomerContextProvider>
      {data ? (
        <Container mt="4">
          <Navbar />
        </Container>
      ) : (
        <Container>
          <Progress my="8" size="xs" isIndeterminate />
          <Stack
            color="gray"
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="sm">Fetching Data From Server</Text>
            <Spinner size="xs" />
          </Stack>
        </Container>
      )}
    </CustomerContextProvider>
  );
}

export default App;
