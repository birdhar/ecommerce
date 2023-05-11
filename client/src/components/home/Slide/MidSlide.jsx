import React from "react";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
`;
const LeftBox = styled(Box)(({ theme }) => ({
  width: " 83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: " 17%",
  backgroundColor: "#fff",
  marginTop: "10px",
  marginLeft: "10px",
  padding: "5px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
// const RightBox = styled(Box)`
//   background-color: #fff;
//   margin-top: 10px;
//   margin-left: 10px;
//   padding: 5px;
//   width: 17%;
//   text-align: center;
// `;
function MidSlide({ products, title, timer }) {
  return (
    <>
      <Container>
        <LeftBox>
          <Slide products={products} title={title} timer={timer} />
        </LeftBox>
        <RightBox>
          <img
            src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
            alt="ad"
            style={{ width: "100%" }}
          />
        </RightBox>
      </Container>
    </>
  );
}

export default MidSlide;
