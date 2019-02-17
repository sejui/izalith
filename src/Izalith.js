import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Route, Router, withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/LandingComponent";
import About from "./components/About/AboutComponent";
import Work from "./components/Work/WorkComponent";
import Team from "./components/Team/TeamComponent";
import Navigation from "./containers/Navigation/NavComponent";
import Email from "./containers/Email/EmailComponent";

// image assets
import bgImg from "./assets/mockup.png";
import invoicingBG from "./assets/invoicing.png";
import indexBG from "./assets/logo1.png";
import portrait from "./assets/teammember.png";

// website content reference

//redux stuff
import { connect } from "react-redux";
import { fetchData } from "./redux/fetchAction";

//fullpage.js commercial license
// intergrates full page scroll animation
const licenseKey = "263D6472-B83940A1-AE6796B3-F3984575";
const indexImg = indexBG;
const richmondBG = bgImg;
const invoicingImg = invoicingBG;
const founderImg = portrait;

const anchors = [
  "index",
  "aboutUs",
  "RichmondProject",
  "Invoicing",
  "team"
  // "email"
];

class Izalith extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <ReactFullpage
          licenseKey={licenseKey}
          anchors={anchors}
          navigation
          navigationTooltips={anchors}
          responsiveHeight="900"
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Landing
                    name={this.props.companyInfo.name}
                    description={this.props.companyInfo.description}
                    indexImg={indexImg}
                  />
                </div>
                <div className="section">
                  <About
                    briefTitle={this.props.service.briefTitle}
                    briefContent={this.props.service.briefContent}
                    serviceTtitle={this.props.service.serviceTitle}
                    tag1={this.props.serviceList1}
                    tag2={this.props.serviceList2}
                    statement={this.props.service.statement}
                  />
                </div>
                <div className="section">
                  <Work
                    name={this.props.richmond.name}
                    bgImg={richmondBG}
                    url="/richmondProjectDetail"
                  />
                </div>
                <div className="section">
                  <Work
                    name={this.props.invoicing.name}
                    bgImg={invoicingImg}
                    url="/invoicing"
                  />
                </div>
                <div className="section">
                  <Team
                    name={this.props.team.founderName}
                    founderTitle={this.props.team.founderTitle}
                    portrait={founderImg}
                    teamBrief={this.props.teamBrief}
                    statement1Title={this.props.teamStatements1.title}
                    statement2Title={this.props.teamStatements2.title}
                    statement1Content={this.props.teamStatements1.content}
                    statement2Content={this.props.teamStatements2.content}
                  />
                </div>
                {/* <div className="section">
                        <Email />
                      </div> */}

                <div />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  companyInfo: state.fetch.companyInfo,
  service: state.fetch.service,
  serviceList1: state.fetch.serviceList1,
  serviceList2: state.fetch.serviceList2,
  richmond: state.fetch.richmond,
  invoicing: state.fetch.invoicing,
  team: state.fetch.team,
  teamBrief: state.fetch.teamBrief,
  teamStatements1: state.fetch.teamStatements1,
  teamStatements2: state.fetch.teamStatements2
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Izalith);
