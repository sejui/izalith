import React, { Component } from "react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: [],
      ref2: [],
      work: [],
      tags: []
    };
  }

  state = {};

  componentWillMount() {
    fetch("http://www.sfu.ca/~seijuy/reference.json") //change it when deploy
      .then(response => response.json())
      .then(data => {
        this.setState({
          ref: data.companyInfo,
          ref2: data.service,
          work: data.work[0],
          tags: data.service.tags1
        });
      });
    setTimeout(() => {
      console.log(this.state);
    }, 3000);
  }

  render() {
    const ref2Item = () => {
      for (var i = 0; i < this.state.ref2.tags1.length; i++) {
        return this.state.ref2.tags1[i];
      }
    };

    return (
      <div>
        <h1>test</h1>
        <p>{this.state.ref.name}</p>
        <p>{this.state.ref2.briefTitle}</p>
        <div>
          {this.state.tags.map(tag1 => (
            <div>{tag1}</div>
          ))}
        </div>
        <p>{this.state.work.name}</p>
      </div>
    );
  }
}

export default Test;
