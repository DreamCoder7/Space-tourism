import React from "react";
import Logo from "../../assets/shared/logo.svg";
import classes from "./Logo.module.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={Logo} alt="Space Tourism Logo" />
  </div>
);

export default logo;
