import React, { Component } from "react";
import "./workComponent.css";
import { Route, Link } from "react-router-dom";
import workDetail from "../WorkDetail/WorkDetailComponent";

const work = props => {
  var imageURL = props.bgImg;
  var workWrapper = {
    backgroundImage: "url(" + imageURL + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw"
  };

  return (
    <div className="col-12 col-sm-12 work" style={workWrapper}>
      <div className="col-11 col-sm-10 center">
        <div className="project">
          <h1>{props.name}</h1>

          <button className="viewBtn">
            <Link to={props.url}>view project</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default work;
