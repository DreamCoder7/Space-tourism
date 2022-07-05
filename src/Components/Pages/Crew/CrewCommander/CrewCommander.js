import React from "react";
import classes from "../Crew.module.css";

const crewCommander = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      <span>Commander</span>
      Douglas Hurley
    </h4>

    <p className={classes.Content}>
      Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
      and former NASA astronaut. He launched into space for the third time as
      commander of Crew Dragon Demo-2.
    </p>
  </aside>
);

export default crewCommander;
