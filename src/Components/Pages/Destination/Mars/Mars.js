import React from "react";
import classes from "../Destination.module.css";

const mars = () => (
  <aside className={classes.Container}>
    <h2 className={classes.Title}>Mars</h2>
    <p className={classes.Content}>
      Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus
      Mons, the tallest planetary mountain in our solar system. It’s two and a
      half times the size of Everest!
    </p>

    <div className={classes.Travel}>
      <p className={classes.Distance}>
        Avg. distance
        <span>384,400 km</span>
      </p>
      <p className={classes.Time}>
        Est. travel time
        <span>3 days</span>
      </p>
    </div>
  </aside>
);

export default mars;
