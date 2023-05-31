import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { payUsingPaytm } from "../../services/flipkartApi";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: "2px",
  height: "50px",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48.5%",
  },
}));

function ActionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(product.id, quantity));
    navigate("/cart");
  };

  const paymentHandler = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "birat.dhar.89@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <Image src={product?.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00", marginTop: 10 }}
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add To Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ background: "#fb641b", marginTop: 10 }}
        onClick={() => paymentHandler()}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItem;
