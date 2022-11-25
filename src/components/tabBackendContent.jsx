import React, { Component } from "react";
import { Card, Headline, Text } from "@freenow/wave";

class TabBackendContent extends Component {
  render() {
    const title = "Backend skills";
    return (
      <Card>
        <Headline>{title}</Headline>
        <Text>{title}</Text>
      </Card>
    );
  }
}

export default TabBackendContent;
