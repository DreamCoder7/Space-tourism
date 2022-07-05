import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/">
      <span>00</span>Home
    </NavItem>
    <NavItem link="/destination">
      <span>01</span>Destination
    </NavItem>
    <NavItem link="/crew">
      <span>02</span>Crew
    </NavItem>
    <NavItem link="/technology">
      <span>03</span>Technology
    </NavItem>
  </ul>
);

export default navItems;
