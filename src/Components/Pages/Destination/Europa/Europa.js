import React from "react";
import classes from "../Destination.module.css";

const europa = () => (
  <div className={classes.Container}>
    <h2 className={classes.Title}>Europa</h2>
    <p className={classes.Content}>
      The smallest of the four Galilean moons orbiting Jupiter, Europa is a
      winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
      skating, curling, hockey, or simple relaxation in your snug wintery cabin.
    </p>

    <div className={classes.Travel}>
      <p className={classes.Distance}>
        Avg. distance
        <span>628 mil. km</span>
      </p>

      <p className={classes.Time}>
        Est. travel time
        <span>3 years</span>
      </p>
    </div>
  </div>
);

export default europa;
