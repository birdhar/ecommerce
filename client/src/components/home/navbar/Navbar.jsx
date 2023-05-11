import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { navData } from "../../../constants/data";

function Navbar() {
  const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "55px 130px 0 130px !important",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      margin: "0px !important",
    },
  }));

  const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
  `;

  const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
  `;
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav-item" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
}

export default Navbar;
