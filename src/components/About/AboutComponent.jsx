import React, { Component } from "react";
import "./aboutComponent.css";
import logo from "../../assets/logo1.png";

const aboutComponent = props => {
  return (
    <div className="col-12 col-sm-12" id="service">
      <div className="center wrapper col-11 col-sm-10">
        <div className="col-12 col-sm-12 col-lg-6 companyBreif">
          <h2 className="whoNwhat">{props.briefTitle}</h2>
          <p>{props.briefContent}</p>
        </div>
        <div
          className="col-12 col-sm-12 col-lg-6"
          style={{
            display: "inline-block",
            float: "right",
            margin: "0 0 50px 0"
          }}
        >
          <h2>{props.serviceTitle}</h2>
          <ul className="col-12 col-sm-6 col-md-4 col-lg-6 specializeContent">
            {props.tag1.map((tag1, index) => (
              <li key={index}>{tag1}</li>
            ))}
          </ul>
          <ul className="col-12 col-sm-6 col-md-4 col-lg-6 specializeContent2">
            {props.tag2.map((tag2, index) => (
              <li key={index}>{tag2}</li>
            ))}
          </ul>
        </div>
        <div id="slogan" className="col-10 col-sm-10 center">
          <p>{props.statement}</p>
        </div>
      </div>
    </div>
  );
};

export default aboutComponent;
