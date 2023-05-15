import React, { useEffect, useState } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/productAction";
import { Link } from "react-router-dom";

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

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getSearchItems = (text) => {
    setSearch(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        value={search}
        onChange={(e) => getSearchItems(e.target.value)}
      />

      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {search && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setSearch("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}

          {/* {search && (
        <List>
          {products
            ?.filter((product) =>
              product?.title?.longTitle
                ?.toLowerCase()
                ?.includes(search?.toLocaleLowerCase())
            )
            ?.map((p) => (
              <List>{p?.title?.longTitle}</List>
            ))}
        </List>
      )} */}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;
