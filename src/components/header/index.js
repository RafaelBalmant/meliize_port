import React from "react";
import PropTypes from "prop-types";
import { Body, ButtonPrimary, HamburgeMenu } from "./style";
import { Menu, MenuItem } from "@material-ui/core";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Body>
      <img
        style={{ marginLeft: "10px" }}
        src={process.env.PUBLIC_URL + "logo.png"}
        width="140px"
        height="50px"
      />
      {window.innerWidth < 590 && (
        <div style={{ marginRight: "15px" }}>
          <HamburgeMenu onClick={handleClick} fontSize="large" />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      )}

      {window.innerWidth > 590 && (
        <div style={{ height: "100%" }}>
          <>
            <ButtonPrimary>Parceiros</ButtonPrimary>
            <ButtonPrimary>Parceiros</ButtonPrimary>
            <ButtonPrimary>Parceiros</ButtonPrimary>
          </>
        </div>
      )}
    </Body>
  );
};

Header.propTypes = {
  props: PropTypes.object,
  children: PropTypes.component,
};

export default Header;
