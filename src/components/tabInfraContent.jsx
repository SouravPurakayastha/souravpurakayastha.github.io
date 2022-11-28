import React, { Component } from "react";
import { Card, Headline, Text } from "@freenow/wave";

class TabInfraContent extends Component {
  render() {
    const title = "Infra skills";
    return (
      <Card>
        <Headline>{title}</Headline>
        <Text>{title}</Text>
      </Card>
    );
  }
}

export default TabInfraContent;
