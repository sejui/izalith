import React, { Component } from "react";
class email extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 col-sm-12 emailForm">
        <div className="col-12 col-sm-10 col-lg-4">
          <h2>They say the best way to predict the future is to create it.</h2>
          <p>Let us help you create yours.</p>
        </div>
        <div className="center col-12 col-sm-10 ">
          <form action="">
            <input type="text" name="name" />
            <input type="text" name="company" />
            <input type="text" name="jobTitle" />
            <input type="text" name="location" />
            <input type="text" name="msg" />
          </form>
        </div>
      </div>
    );
  }
}

export default email;
