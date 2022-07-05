import React from "react";
import classes from "../Crew.module.css";

const crewSpecialist = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      <span>Mission Specialist</span>
      Mark Shuttleworth
    </h4>

    <p className={classes.Content}>
      Mark Richard Shuttleworth is the founder and CEO of Canonical, the company
      behind the Linux-based Ubuntu operating system. Shuttleworth became the
      first South African to travel to space as a space tourist.
    </p>
  </aside>
);

export default crewSpecialist;
