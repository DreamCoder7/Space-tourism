import React, { Component } from "react";
// import Modal from "../UI/Modal/Modal";
import NavToggle from "../UI/NavToggle/NavToggle";
import NavItems from "./NavItems/NavItems";
import Modal from "../UI/Modal/Modal";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.css";

class Nav extends Component {
  state = {
    showModal: false,
  };

  showModalHundler = () => {
    this.setState({ showModal: true });
  };

  hiddeModalHundler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <nav className={classes.Nav}>
        <Logo />
        <Modal show={this.state.showModal} />
        <NavItems />
        <NavToggle
          openModal={this.showModalHundler}
          closeModal={this.hiddeModalHundler}
          show={this.state.showModal}
        />
        {/* <NavItems /> */}
      </nav>
    );
  }
}

export default Nav;
