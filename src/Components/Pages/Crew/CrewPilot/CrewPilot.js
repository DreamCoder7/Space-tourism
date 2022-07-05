import React from "react";
import classes from "../Crew.module.css";

const crewPilot = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      <span>Pilot</span>
      Victor Glover
    </h4>

    <p className={classes.Content}>
      Pilot on the first operational flight of the SpaceX Crew Dragon to the
      International Space Station. Glover is a commander in the U.S. Navy where
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
      station systems flight engineer.
    </p>
  </aside>
);

export default crewPilot;
