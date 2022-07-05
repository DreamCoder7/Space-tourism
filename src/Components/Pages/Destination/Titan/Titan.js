import React from "react";
import classes from "../Destination.module.css";

const titan = () => (
  <div className={classes.Container}>
    <h2 className={classes.Title}>Titan</h2>
    <p className={classes.Content}>
      The only moon known to have a dense atmosphere other than Earth, Titan is
      a home away from home (just a few hundred degrees colder!). As a bonus,
      you get striking views of the Rings of Saturn.
    </p>

    <div className={classes.Travel}>
      <p className={classes.Distance}>
        Avg. distance
        <span>1.6 bil. km</span>
      </p>

      <p className={classes.Time}>
        Est. travel time
        <span>7 years</span>
      </p>
    </div>
  </div>
);

export default titan;
