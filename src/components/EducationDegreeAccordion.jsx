import React, { Component } from "react";
import { Accordion } from "@freenow/wave";

class EducationDegreeAccordion extends Component {
  state = {
    heading: this.props.heading,
    degree: this.props.degree,
    fromTo: this.props.fromTo,
    instLink: this.props.instLink,
    instLinkTitle: this.props.instLinkTitle,
  };
  render() {
    return (
      <Accordion heading={this.state.heading}>
        <div>
          <div className="site-tab-sub-headline">{this.state.degree}</div>
          <div className="site-tab-sub-headline">{this.state.fromTo}</div>
          <a
            href={this.state.instLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{this.state.instLinkTitle}</div>
          </a>
        </div>
      </Accordion>
    );
  }
}

export default EducationDegreeAccordion;
