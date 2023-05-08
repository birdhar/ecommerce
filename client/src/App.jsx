import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Box } from "@mui/material";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider>
      <Header />

      <Box style={{ marginTop: "54px" }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
