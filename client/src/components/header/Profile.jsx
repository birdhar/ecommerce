import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

function Profile({ acccount, setAcccount }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logutUser = () => {
    setAcccount("");
  };
  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {acccount}
        </Typography>
        <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              logutUser();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Typography style={{ marginLeft: "4px", fontSize: "14px" }}>
              Logout
            </Typography>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
}

export default Profile;
