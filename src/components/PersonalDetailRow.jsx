import React, { Component } from "react";
import { Row, Column } from "@freenow/wave";

class PersonalDetailRow extends Component {
  state = {
    personalDetailIcon: this.props.personalDetailIcon,
    personalDetailLink: this.props.personalDetailLink,
    personalDetailLinkTitle: this.props.personalDetailLinkTitle,
  };
  render() {
    return (
      <Row style={{ padding: "2%" }}>
        <Column span={12} textAlign="center">
          <img
            src={this.state.personalDetailIcon}
            alt=""
            className="site-tab-overview-img-common site-tab-personal-img-common"
          />
          <a
            href={this.state.personalDetailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{this.state.personalDetailLinkTitle}</div>
          </a>
        </Column>
      </Row>
    );
  }
}

export default PersonalDetailRow;
