import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Login from "../../login/Login";
import { DataContext } from "../../../context/DataProvider";
import Profile from "../Profile";

function HeaderButton() {
  const [open, setOpen] = useState(false);
  const { acccount, setAcccount } = useContext(DataContext);

  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    margin: "0 3% 0 auto",
    " & > * ": {
      marginRight: "40px",
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
  // const Wrapper = styled(Box)`
  //   display: flex;
  //   align-items: center;

  //   margin: 0 3% 0 auto;
  //   & > button,
  //   & > p,
  //   & > div {
  //     margin-right: 40px;
  //     font-size: 14px;
  //   }
  // `;

  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #ffffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
  `;

  return (
    <Wrapper>
      {acccount ? (
        <Profile acccount={acccount} setAcccount={setAcccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 5, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 5 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <Login open={open} onClose={() => setOpen(false)} />
    </Wrapper>
  );
}

export default HeaderButton;
