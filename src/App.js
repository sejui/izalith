import React, { Component } from "react";

import { Route, Router, withRouter } from "react-router";

import "./App.css";

import WorkDetail from "./components/WorkDetail/WorkDetailComponent";
import Izalith from "./Izalith";

// // image assets
import richmondImg from "./assets/richmond.png";
import invoicingImg from "./assets/richmond.png";

// // website content reference

// //redux stuff
// import { connect } from "react-redux";
// import { fetchData } from "./redux/fetchAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      richmondProjectDetail: {
        title: "MYRICHMOND",
        description:
          "A personalized web portal for City of Richmond customers to access online city services in one place.",
        content: [
          {
            title: "THE CHALLENGE",
            content: [
              "The City of Richmond has an ambitious vision to improve online services for its customers through a multi-year digital strategy. Over the past several years, the City has upgraded and replaced several business systems on a unit-by-unit basis, each time choosing the best available solution. However, this resulted in City customers having to create and remember logins for multiple websites in order to access the full range of online City services. After undertaking significant “under the hood” work to establish an identity management system with single sign-on (SSO) capabilities, the next stage of the Strategy was to launch one consolidated place for customers to access all of their information and online services."
            ]
          },
          {
            title: "THE PROCESS",
            content: [
              "The City of Richmond selected Radical I/O to partner with them on this exciting Smart City project, which included numerous data integrations and designing and implementing the centrepiece of the Strategy: a customer-facing web portal.",
              "We first needed to understand the City’s vision for the solution and their goals for this first year of the project. During the Discovery Phase, we examined their existing systems, explored best practices in online city services, and undertook a series of meetings with City stakeholders to understand their (and their customer’s) needs. ",
              "By the end of Discovery, we had outlined a technical solution and architecture in keeping with the City’s current infrastructure for the customer-facing web portal, using modern client-side web technology combined with two layers of APIs. We recommended the best technologies for the project with future-proofing and return on investment in mind. ",
              "In parallel, we worked closely with the City to undertake a detailed research and ideation process that explored key user groups, developed user personas, and mapped user journeys to inform recommendations on the user experience of the portal. The design team produced a set of initial designs, primarily as wireframes but also with some branded UI inspirations, that: incorporated a wide range of City services; identified opportunities to personalize the information being displayed to users; and suggested what the future of municipal online services could look like. The team then went through a number of rounds of prioritization to reach an achievable scope for the current project timeframe."
            ]
          }
        ],
        backTo: "/#RichmondProject"
      },

      invoicing: {
        title: "invoicing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content: [
          {
            title: "Lorem ipsum dolor",
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]
          },
          {
            title: "Sed ut perspiciatis",
            content: [
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            ]
          }
        ],
        backTo: "/#Invoicing"
      }
    };
  }

  // componentWillMount() {
  //   this.props.fetchData();
  // }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Izalith} exact />
        <Route
          exact
          path="/richmondProjectDetail"
          render={props => (
            <WorkDetail
              {...props}
              title={this.state.richmondProjectDetail.title}
              description={this.state.richmondProjectDetail.description}
              bgImg={richmondImg}
              content={this.state.richmondProjectDetail.content}
              backTo={this.state.richmondProjectDetail.backTo}
            />
          )}
        />
        {/* <Route path="/invoicing" component={WorkDetail} /> */}

        <Route
          exact
          path="/invoicing"
          render={props => (
            <WorkDetail
              {...props}
              title={this.state.invoicing.title}
              description={this.state.invoicing.description}
              bgImg={invoicingImg}
              content={this.state.invoicing.content}
              backTo={this.state.invoicing.backTo}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
