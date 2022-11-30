import React, { Component } from "react";
import { Row, Column, Text } from "@freenow/wave";

class PersonalContactRow extends Component {
  state = {
    icon: this.props.icon,
    contact: this.props.contact,
  };
  render() {
    return (
      <Row style={{ padding: "2%" }}>
        <Column span={12} textAlign="center">
          {this.state.icon}
          <Text style={{ padding: "1rem" }}>{this.state.contact}</Text>
        </Column>
      </Row>
    );
  }
}

export default PersonalContactRow;
