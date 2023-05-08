import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./search/Search";
import HeaderButton from "./buttons/HeaderButton";

function header() {
  const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
  `;
  const Boxcomponent = styled(Box)`
    margin-left: 12%;
    line-height: 0;
  `;
  const Logotext = styled(Typography)`
    font-size: 10px;
    font-style: Italic;
  `;

  const PlusImage = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4,
  });

  const CustombuttonWrapper = styled(Typography)`
    margin: 0 5% 0 auto;
  `;

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <Boxcomponent>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="flipkart"
            style={{ width: 75 }}
          />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Logotext>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                plus
              </Box>{" "}
            </Logotext>
            <PlusImage
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="sub-logo"
              //   style={{ width: 75 }}
            />
          </Box>
        </Boxcomponent>

        <Search />

        <CustombuttonWrapper>
          <HeaderButton />
        </CustombuttonWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default header;
