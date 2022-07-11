import React, { Component } from "react";
import CrewCommander from "../CrewCommander/CrewCommander";
import CrewEngineer from "../CrewEngineer/CrewEngineer";
import CrewPilot from "../CrewPilot/CrewPilot";
import CrewSpecialist from "../CrewSpecialist/CrewSpecialist";
import Nav from "../../../Nav/Nav";
import classes from "./SectionCrew.module.css";
import MarkImg from "../../../../assets/crew/image-mark.webp";
import AnoushehImg from "../../../../assets/crew/image-anousheh.webp";
import DouglasImg from "../../../../assets/crew/image-douglas.webp";
import VictorImg from "../../../../assets/crew/image-victor.webp";

class SectionCrew extends Component {
  state = {
    crew: ["Commander", "Pilot", "Specialist", "Engineer"],
    showCrew: "Commander",
  };

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.state.crew.forEach((c) => {
  //         setTimeout(() => {
  //           this.setState({ showCrew: c });
  //         }, 4000);
  //       });
  //     }, 2000);
  //   }

  showCrewHundler = (event) => {
    this.setState({ showCrew: event.target.value });
  };

  render() {
    let listBtn = this.state.crew.map((btn, index) => {
      return (
        <button
          key={index}
          className={
            this.state.showCrew === btn
              ? [classes.SectionCrewListBtn, classes.Active].join(" ")
              : classes.SectionCrewListBtn
          }
          value={btn}
          onClick={(event) => this.showCrewHundler(event)}
        >
          &nbsp;
        </button>
      );
    });

    let displayCrew = null;
    let displayImgCrew = null;

    switch (this.state.showCrew) {
      case "Commander":
        displayCrew = <CrewCommander />;
        displayImgCrew = DouglasImg;
        break;
      case "Pilot":
        displayCrew = <CrewPilot />;
        displayImgCrew = VictorImg;
        break;
      case "Specialist":
        displayCrew = <CrewSpecialist />;
        displayImgCrew = MarkImg;
        break;
      case "Engineer":
        displayCrew = <CrewEngineer />;
        displayImgCrew = AnoushehImg;
        break;
      default:
        displayCrew = null;
        displayImgCrew = null;
        break;
    }

    return (
      <section className={classes.SectionCrew}>
        <Nav />

        <div className={classes.SectionCrewContent}>
          <h3 className={classes.SectionCrewTitle}>
            <span>02</span>Meet your crew
          </h3>
          <img
            className={classes.SectionCrewImg}
            src={displayImgCrew}
            alt={this.state.showCrew}
          />
          <div className={classes.SectionCrewList}>{listBtn}</div>
          {displayCrew}
        </div>
      </section>
    );
  }
}

export default SectionCrew;
