import { createContext, useContext, useState } from "react";

const CustomerContext = createContext();
export const useCustomer = () => useContext(CustomerContext);

function CustomerContextProvider(props) {
  const [customer, setCustomer] = useState({});

  function setCustomerDetail(val) {
    setCustomer(val);
  }

  const value = { customer, setCustomerDetail };

  return (
    <CustomerContext.Provider value={value}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerContextProvider;
