import { Card, Button, Box, Typography, styled } from "@mui/material";
import React from "react";
import GroupButton from "./GroupButton";
import { addEllipsis } from "../../utils/util";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;

function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} style={{ height: 110, width: 110 }} />
        <GroupButton />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        {/* <Typography>{item.title.longTitle}</Typography> */}
        <SmallText>
          Seller:RetailNet
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span">
            <strike>₹{item.price.mrp}</strike>
          </MRP>
          &nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
}

export default CartItem;
