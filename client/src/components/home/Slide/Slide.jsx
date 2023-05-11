import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  margin-left: 15px;
  display: flex;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  margin-right: 15px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color:
  border-radius:2px;
  font-size: 13px;
`;

const ProductImage = styled("img")({
  width: "auto",
  height: "120px",
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 4px;
`;

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours} : {minutes} : {seconds} Left
    </Box>
  );
};

function Slide({ products, title, timer }) {
  return (
    <Container>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="timer"
              style={{ width: "20px", marginRight: "7px" }}
            />
            <Countdown date={Date.now() + 8.64e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        infinite={true}
        autoPlay={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products?.map((product) => (
          <Box textAlign={"center"} style={{ padding: "25px 15px" }}>
            <ProductImage src={product.url} alt="product" />
            <Text style={{ fontWeight: "600", color: "#212121" }}>
              {product?.title?.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product?.discount}</Text>
            <Text style={{ opacity: "0.6", color: "#212121" }}>
              {product?.tagline}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slide;
