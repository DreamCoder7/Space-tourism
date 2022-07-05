import React from "react";
import HamburgerIcon from "../../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../../assets/shared/icon-close.svg";
import classes from "./NavToggle.module.css";

const navToggle = (props) => (
  <div className={classes.NavToggle}>
    <button
      onClick={props.openModal}
      className={
        props.show
          ? [classes.NavToggleBtn, classes.BtnHidden].join(" ")
          : classes.NavToggleBtn
      }
    >
      <img src={HamburgerIcon} alt="Hamburger Icon" />
    </button>
    <button
      onClick={props.closeModal}
      className={
        props.show
          ? classes.NavToggleBtn
          : [classes.NavToggleBtn, classes.BtnHidden].join(" ")
      }
    >
      <img src={closeIcon} alt="Close Icon" />
    </button>
  </div>
);

export default navToggle;
