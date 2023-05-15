import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Search from "./search/Search";
import HeaderButton from "./buttons/HeaderButton";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Boxcomponent = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
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

const MenuIconButton = styled(Menu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustombuttonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function ListComponent({ handleClose }) {
  return (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <HeaderButton />
        </ListItem>
      </List>
    </Box>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuIconButton color="inherit" onClick={handleDrawer}>
          <Menu />
        </MenuIconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <ListComponent handleClose={() => setOpen(false)} />
        </Drawer>
        <Boxcomponent to="/">
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

export default Header;
