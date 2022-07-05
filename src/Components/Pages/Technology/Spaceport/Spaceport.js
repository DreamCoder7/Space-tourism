import React from "react";
import classes from "../Technology.module.css";

const spaceport = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      The terminology...
      <span>Spaceport</span>
    </h4>

    <p className={classes.Content}>
      A spaceport or cosmodrome is a site for launching (or receiving)
      spacecraft, by analogy to the seaport for ships or airport for aircraft.
      Based in the famous Cape Canaveral, our spaceport is ideally situated to
      take advantage of the Earth’s rotation for launch.
    </p>
  </aside>
);

export default spaceport;
