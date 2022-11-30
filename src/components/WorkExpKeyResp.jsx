import React, { Component } from "react";

class WorkExpKeyResp extends Component {
  state = {
    responsibility: this.props.responsibility,
  };
  render() {
    return (
      <div className="site-tab-sub-headline">{this.state.responsibility}</div>
    );
  }
}

export default WorkExpKeyResp;
