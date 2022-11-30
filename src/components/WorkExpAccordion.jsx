import React, { Component } from "react";
import { Accordion } from "@freenow/wave";
import WorkExpKeyResp from "./WorkExpKeyResp";

class WorkExpAccordion extends Component {
  state = {
    heading: this.props.heading,
    position: this.props.position,
    fromTo: this.props.fromTo,
    keyResponsibilities: this.props.keyResponsibilities,
    companyUrl: this.props.companyUrl,
    companyUrlTitle: this.props.companyUrlTitle,
  };
  render() {
    return (
      <Accordion heading={this.state.heading}>
        <div>
          <div className="site-tab-sub-headline">{this.state.position}</div>
          <div className="site-tab-sub-headline">{this.state.fromTo}</div>
          <br />
          <div className="site-tab-sub-headline">Key Responsibilities:</div>
          {this.state.keyResponsibilities.map((responsibility) => {
            return (
              <WorkExpKeyResp
                responsibility={responsibility}
                key={responsibility}
              />
            );
          })}
          <br />
          <a
            href={this.state.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{this.state.companyUrlTitle}</div>
          </a>
        </div>
      </Accordion>
    );
  }
}

export default WorkExpAccordion;
