import React, { Component } from "react";
import "./teamComponent.css";

const team = props => {
  return (
    <div className="col-12 col-sm-12" id="company">
      <div className="wrapper col-11 col-sm-10 center">
        <div className="row teamDescribe">
          <div className="col-12 col-sm-5 col-md-6 col-lg-4 teamDescribeSub">
            <img src={props.portrait} alt="founder portrait" id="portrait" />
            <h3>{props.name}</h3>
            <h4>{props.founderTitle}</h4>
          </div>

          <div className="col-12 col-sm-10 col-md-7 col-lg-5 teamDescribeDoc">
            {props.teamBrief.map((teamBrief, index) => (
              <p key={index}>{teamBrief}</p>
            ))}
          </div>
        </div>

        <div className="row beliefSection">
          <div
            className="col-12 col-sm-10 center"
            style={{ paddingLeft: "15px" }}
          >
            <span>our beliefs</span>
            <div className="row beliefs">
              <div className="col-12 col-sm-6 col-lg-4">
                <h2>{props.statement1Title}</h2>
                <p>{props.statement1Content}</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <h2>{props.statement2Title}</h2>
                <p>{props.statement2Content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
