import React from "react";
import { NavLink } from "react-router-dom";
import "./workDetail.css";

const WorkDetail = props => {
  var imageURL = props.bgImg;
  var banner = {
    backgroundImage: "url(" + imageURL + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center",
    backgroundSize: "cover",
    height: "35vh",
    width: "100%"
  };

  // navToHome = props => {
  //   history.replaceState(null,null,"www.")
  // };

  return (
    <div className="row workDetail">
      <a href={props.backTo} className="col-md-1 backBtn sticky-top">
        <div>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.49 22.14"
              width="30"
              height="24"
              className="color"
            >
              <path
                className="cls-1"
                d="M10.28,21.81a1.12,1.12,0,0,0,1.59-1.57l-8-8H30.38a1.11,1.11,0,0,0,1.11-1.11A1.12,1.12,0,0,0,30.38,10H3.82l8-8a1.14,1.14,0,0,0,0-1.59,1.11,1.11,0,0,0-1.59,0l-10,10a1.09,1.09,0,0,0,0,1.57Z"
              />
            </svg>
          </i>
        </div>
      </a>

      <div className="col-12 col-sm-12 col-md-11 content">
        <div className="col-12 col-sm-12 col-md-12 banner" style={banner}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 workContent">
          {props.content.map((content, index) => (
            <div key={index} className="contentSection">
              <h2>{content.title}</h2>
              {content.content.map((content, i) => (
                <p key={i}>{content}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
