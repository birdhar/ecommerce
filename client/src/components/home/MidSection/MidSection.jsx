import React from "react";
import { imageURL } from "../../../constants/data";
import { Grid, styled } from "@mui/material";

const Container = styled(Grid)`
  margin-top: 10px;
`;

function MidSection() {
  return (
    <Container container lg={12} md={12} sm={12} xs={12}>
      {imageURL.map((image) => (
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img src={image} alt="" style={{ width: "100%" }} />
        </Grid>
      ))}
    </Container>
  );
}

export default MidSection;
