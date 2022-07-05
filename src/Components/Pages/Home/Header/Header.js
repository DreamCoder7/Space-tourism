import React, { Component } from "react";
import Nav from "../../../Nav/Nav";
import classes from "./Header.module.css";
import HeaderContent from "./HeaderContent/HeaderContent";

class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <Nav />
        <HeaderContent />
      </header>
    );
  }
}

export default Header;
