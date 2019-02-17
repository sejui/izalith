import React, { Component } from "react";
import "./landingComponent.css";

const landing = props => {
  return (
    <div className="col-12 col-sm-12" id="home">
      <div className="center wrapper col-11 col-sm-10">
        <div className="col-12 col-sm-12 replacebale">
          <h1 className="jueyStyle">{props.name}</h1>
        </div>
        <div className="col-12 col-sm-10 col-md-10 col-lg-md-6 center">
          <img
            src={props.indexImg}
            className="companyLogo center"
            alt="izalith logo"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-xl-7 infoBox">
          <p className="companyInfo">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default landing;
