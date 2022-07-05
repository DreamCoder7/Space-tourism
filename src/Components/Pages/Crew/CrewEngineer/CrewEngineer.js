import React from "react";
import classes from "../Crew.module.css";

const crewEngineer = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      <span>Flight Engineer</span>
      Anousheh Ansari
    </h4>

    <p className={classes.Content}>
      Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
      Systems. Ansari was the fourth self-funded space tourist, the first
      self-funded woman to fly to the ISS, and the first Iranian in space.
    </p>
  </aside>
);

export default crewEngineer;
