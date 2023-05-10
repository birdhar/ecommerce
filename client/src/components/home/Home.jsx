import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Banner from "./Banner/Banner";
import { styled, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Slide from "./Slide/Slide";

function Home() {
  const Container = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
  `;

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <Slide products={products} />
      </Container>
    </>
  );
}

export default Home;
