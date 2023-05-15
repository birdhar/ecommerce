import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from "@mui/icons-material";

const OfferText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const TableCellText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const BadgeIcon = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 16px;
`;

function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <span>
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </span>
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
      </Typography>
      <Typography>Available Offers</Typography>
      <OfferText>
        <Typography>
          <BadgeIcon /> Get extra 10% off up to ₹300, on orders of ₹500 and
          above T&C
        </Typography>
        <Typography>
          <BadgeIcon /> Get extra 5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <BadgeIcon /> Sign up for Flipkart Pay Later and get Flipkart Gift
          Card worth up to ₹500*
        </Typography>
        <Typography>
          <BadgeIcon /> Purchase now & get 1 surprise cashback coupon in Future
        </Typography>
      </OfferText>
      <Table>
        <TableBody>
          <TableCellText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableCellText>
          <TableCellText>
            <TableCell style={{ color: "#878787" }}>Warrenty</TableCell>
            <TableCell>No Warrenty</TableCell>
          </TableCellText>
          <TableCellText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SURICYBCOMBazaar
              </Box>
            </TableCell>
          </TableCellText>
          <TableCellText>
            <TableCell colSpan={2}>
              <img style={{ width: 350 }} src={adURL} alt="flipkart points" />
            </TableCell>
          </TableCellText>
          <TableCellText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product?.description}</TableCell>
          </TableCellText>
        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;
