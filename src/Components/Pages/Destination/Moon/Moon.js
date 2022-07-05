import React from "react";
import classes from "../Destination.module.css";

const moon = () => (
  <aside className={classes.Container}>
    <h2 className={classes.Title}>Moon</h2>
    <p className={classes.Content}>
      See our planet as you’ve never seen it before. A perfect relaxing trip
      away to help regain perspective and come back refreshed. While you’re
      there, take in some history by visiting the Luna 2 and Apollo 11 landing
      sites.
    </p>

    <div className={classes.Travel}>
      <p className={classes.Distance}>
        Avg. distance
        <span>225 mil. km</span>
      </p>

      <p className={classes.Time}>
        Est. travel time
        <span>9 months</span>
      </p>
    </div>
  </aside>
);

export default moon;
