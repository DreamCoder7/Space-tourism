import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";

const navItem = (props) => (
  <li className={classes.NavItem}>
    <Link className={classes.NavItemLink} to={props.link}>
      {props.children}
    </Link>
  </li>
);

export default navItem;
