import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import EmptyCart from "./EmptyCart";

const Wrapper = styled(Grid)(({ theme }) => ({
  padding: "30px 130px",
  [theme.breakpoints.down("md")]: {
    padding: "10px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const LeftGrid = styled(Grid)(({ theme }) => ({
  paddingRight: "10px",
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems?.length > 0 ? (
        <Wrapper container>
          <LeftGrid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems?.length})</Typography>
            </Header>
            {cartItems?.map((item) => (
              <CartItem item={item} key={item?.id} />
            ))}
            <BottomWrapper>
              <StyledButton>Place Order</StyledButton>
            </BottomWrapper>
          </LeftGrid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <PriceDetails cartItems={cartItems} />
          </Grid>
        </Wrapper>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
