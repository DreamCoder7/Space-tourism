import React, { Component } from "react";
import Nav from "../../../Nav/Nav";
import classes from "./SectionTechnology.module.css";
import LaunchVehicle from "../LaunchVehicle/LaunchVehicle";
import Spaceport from "../Spaceport/Spaceport";
import SpaceCapsule from "../SpaceCapsule/SpaceCapsule";
import SpaceportImg from "../../../../assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsuleImg from "../../../../assets/technology/image-space-capsule-landscape.jpg";
import LaunchVehicleImg from "../.././../../assets/technology/image-launch-vehicle-landscape.jpg";

class SectionTechnology extends Component {
  state = {
    technology: ["Vehicle", "Capsule", "Spaceport"],
    showTech: "Vehicle",
  };

  techChangeHundler = (item) => {
    this.setState({ showTech: item });
  };

  render() {
    const list = this.state.technology.map((item, index) => {
      return (
        <li
          key={index}
          className={this.state.showTech === item ? [classes.SectionListItem, classes.Active].join(' ') : classes.SectionListItem}
          onClick={() => this.techChangeHundler(item)}
        >
          {index + 1}
        </li>
      );
    });

    let technologys = null;
    let technologyImg = null;

    switch (this.state.showTech) {
      case "Vehicle":
        technologys = <LaunchVehicle />;
        technologyImg = LaunchVehicleImg;
        break;
      case "Capsule":
        technologys = <SpaceCapsule />;
        technologyImg = SpaceCapsuleImg;
        break;
      case "Spaceport":
        technologys = <Spaceport />;
        technologyImg = SpaceportImg;
        break;
      default:
        technologys = null;
        technologyImg = null;
    }

    return (
      <section className={classes.SectionTechnology}>
        <Nav />
        <div className={classes.SectionContent}>
          <h3 className={classes.SectionTitle}>
            <span>03</span>Space launch 101
          </h3>
          <img
            className={classes.SectionTechnologyImg}
            src={technologyImg}
            alt={this.state.showTech}
          />
          <ul className={classes.SectionList}>{list}</ul>
          {technologys}
        </div>
      </section>
    );
  }
}

export default SectionTechnology;
