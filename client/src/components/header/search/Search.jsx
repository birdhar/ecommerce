import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const SearchContainer = styled(Box)`
    background: #fff;
    width: 30%;
    border-radius: 3px;
    margin-left: 10px;
    display: flex;
  `;
  const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    width: 100%;
  `;
  const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
  `;

  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />

      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
