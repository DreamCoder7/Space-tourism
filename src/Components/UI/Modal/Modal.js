import React from "react";
import classes from "./Modal.module.css";
import NavItems from "../../Nav/NavItems/NavItems";

const modal = (props) => (
    props.show ? <div className={classes.Modal}>{<NavItems />}</div> : null
);

export default modal;
