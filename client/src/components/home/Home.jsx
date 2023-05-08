import React from "react";
import Navbar from "./navbar/Navbar";
import Banner from "./Banner/Banner";
import { styled, Box } from "@mui/material";

function Home() {
  const Container = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
  `;

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </>
  );
}

export default Home;
