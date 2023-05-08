import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [acccount, setAcccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        acccount,
        setAcccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
