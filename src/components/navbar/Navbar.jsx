import React from "react";

import classes from "./Navbar.module.css";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Tooltip from '@mui/material/Tooltip';

// Main Navbar

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.pageTitle}>
          <h1>{props.navbarTitle}</h1>
        </div>
        <div className={classes.items}>
          <Tooltip title="Help">
            <div className={classes.item}>
              <HelpOutlineOutlinedIcon className={classes.icon} />
            </div>
          </Tooltip>
          <Tooltip title="Srivathsan Angiya">
            <div className={classes.item}>
              <img
                src="https://angiya.in/resources/images/Homepage/BlacknWhite-min.jpeg"
                alt="profile"
                className={classes.avatar}
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
