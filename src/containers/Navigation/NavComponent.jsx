import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.css";

class NavComponent extends Component {
  state = {
    showHamburger: false,
    expandMenuPage: false
  };

  componentWillMount() {
    window.innerWidth > 576
      ? (this.state.showHamburger = false)
      : (this.state.showHamburger = true);
  }
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  constructor() {
    super();
  }

  expandMenu = () => {
    this.state.expandMenuPage = true;
  };

  render() {
    return (
      <div className="col-12 col-sm-10 col-md-12 navCenter" id="navigation">
        {this.state.showHamburger ? (
          <div className="menu" onClick={this.expandMenu()}>
            <div />
            <div />
            <div />
          </div>
        ) : (
          <nav className="navStyle-expand col-sm-6">
            <div className="col-sm-2 anchorBox">
              <a href="#index">HOME</a>
              <div className="underline" />
            </div>

            <div className="col-sm-3 anchorBox">
              <a href="#aboutUs">SERVICE</a>
              <div className="underline" />
            </div>

            <div className="col-sm-2 anchorBox">
              <a href="#RichmondProject">WORK</a>
              <div className="underline" />
            </div>

            <div className="col-sm-2 anchorBox">
              <a href="#team">TEAM</a>
              <div className="underline" />
            </div>

            {/* <a href="#email" className="col-sm-2">
              CONTACT
            </a> */}
          </nav>
        )}
      </div>
    );
  }
}

export default NavComponent;
