import React from "react";
import classes from "./NavItem.module.css";
import { Link,useLocation } from "react-router-dom";

function NavItem(props) {
  const location = useLocation();

  return (
    <li className={classes.NavItem}>
      <Link
        className={
          location.pathname === props.link
            ? [classes.NavItemLink, classes.Active].join(" ")
            : classes.NavItemLink
        }
        to={props.link}
      >
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;
