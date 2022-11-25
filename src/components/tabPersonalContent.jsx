import React, { Component } from "react";
import { Card, Headline, Text } from "@freenow/wave";

class TabPersonalContent extends Component {
  render() {
    const title = "Personal skills";
    return (
      <Card>
        <Headline>{title}</Headline>
        <Text>{title}</Text>
      </Card>
    );
  }
}

export default TabPersonalContent;
