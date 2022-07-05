import React from "react";
import classes from "../Technology.module.css";

const launchVehicle = () => (
  <aside className={classes.Container}>
    <h4 className={classes.Title}>
      The terminology...
      <span>Launch vehicle</span>
    </h4>

    <p className={classes.Content}>
      A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
      carry a payload from Earth's surface to space, usually to Earth orbit or
      beyond. Our WEB-X carrier rocket is the most powerful in operation.
      Standing 150 metres tall, it's quite an awe-inspiring sight on the launch
      pad!
    </p>
  </aside>
);

export default launchVehicle;
