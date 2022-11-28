import React, { Component } from "react";
import { Card, Headline, Text } from "@freenow/wave";

class TabFrontendContent extends Component {
  render() {
    const title = "Frontend skills";
    return (
      <Card>
        <Headline>{title}</Headline>
        <Text>{title}</Text>
      </Card>
    );
  }
}

export default TabFrontendContent;
