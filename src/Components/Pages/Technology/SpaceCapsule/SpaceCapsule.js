import React from "react";
import classes from '../Technology.module.css';

const spaceCapsule = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      The terminology...
      <span>Space capsule</span>
    </h4>

    <p className={classes.Content}>
      A space capsule is an often-crewed spacecraft that uses a blunt-body
      reentry capsule to reenter the Earth's atmosphere without wings. Our
      capsule is where you'll spend your time during the flight. It includes a
      space gym, cinema, and plenty of other activities to keep you entertained.
    </p>
  </aside>
);

export default spaceCapsule;
