import React, { Component } from "react";
import { Card, Headline, Text, Divider, Label } from "@freenow/wave";

class tabBlogContent extends Component {
  render() {
    const title = "Blog";
    const subTitle = "Introspections and playing around with codes.";
    return (
      <div>
        <Card level={300}>
          <Headline>{title}</Headline>
          <Text>{subTitle}</Text>
        </Card>

        <Divider />

        <Card level={100}>
          <Headline as="h2">Currency and Exchange Rates</Headline>
          <Text>
            A nifty API to get European Central Bank currency rates and
            conversion data
          </Text>
          <a
            href="https://github.com/SouravPurakayastha/exchangerateservice/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>View project</div>
          </a>

          <Label mr={1}>RESTApi</Label>
          <Label mr={1}>Spring Boot</Label>
          <Label mr={1}>Spring Cache</Label>
          <Label mr={1}>Kotlin</Label>
        </Card>
      </div>
    );
  }
}

export default tabBlogContent;
