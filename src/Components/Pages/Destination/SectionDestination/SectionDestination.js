import React, { Component } from "react";
import Nav from "../../../Nav/Nav";
import Moon from "../Moon/Moon";
import Mars from "../Mars/Mars";
import Europa from "../Europa/Europa";
import Titan from "../Titan/Titan";
import classes from "./SectionDestination.module.css";
import MoonWebp from "../../../../assets/destination/image-moon.webp";
import MarsWebp from "../../../../assets/destination/image-mars.webp";
import EuropaWebp from "../../../../assets/destination/image-europa.webp";
import TitanWebp from "../../../../assets/destination/image-titan.webp";

class Section extends Component {
  state = {
    PlanetsList: ["Moon", "Mars", "Europa", "Titan"],
    planet: "Moon",
  };

  showPlanetsHundler = (event) => {
    this.setState({ planet: event.target.textContent });
  };

  render() {
    let listItem = this.state.PlanetsList.map((item, index) => {
      return (
        <li
          key={index}
          className={
            this.state.planet === item
              ? [classes.SectionListItem, classes.Active].join(" ")
              : classes.SectionListItem
          }
          onClick={(event) => this.showPlanetsHundler(event)}
        >
          {item}
        </li>
      );
    });

    let planets = null;
    let planetsImg = null;

    switch (this.state.planet) {
      case "Moon":
        planets = <Moon />;
        planetsImg = MoonWebp;
        break;
      case "Mars":
        planets = <Mars />;
        planetsImg = MarsWebp;
        break;
      case "Europa":
        planets = <Europa />;
        planetsImg = EuropaWebp;
        break;
      case "Titan":
        planets = <Titan />;
        planetsImg = TitanWebp;
        break;
      default:
        planets = null;
        planetsImg = null;
        break;
    }

    return (
      <section className={classes.SectionDestination}>
        <Nav />
        <div className={classes.SectionDestinationContent}>
          <h3 className={classes.SectionTitle}>
            <span>01</span> Pick your destination
          </h3>
          <img
            className={classes.SectionDestinationImg}
            src={planetsImg}
            alt={this.state.planet}
          />
          <ul className={classes.SectionList}>{listItem}</ul>
          {planets}
        </div>
      </section>
    );
  }
}

export default Section;
