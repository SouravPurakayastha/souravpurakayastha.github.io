import React, { Component } from "react";
import "./styles.css";
import {
  Card,
  Headline,
  Text,
  Divider,
  Link,
  Box,
  Row,
  Column,
} from "@freenow/wave";
import TabBarComponent from "./tabBarComponent";

class NavBarComponent extends Component {
  state = {
    title: "Sourav Purakayastha",
    subTitle: "Senior Backend Developer",
  };

  render() {
    const sticky = {
      position: "sticky",
    };

    const fontSizeAllSizes = [
      "small",
      "medium",
      "large",
      "x-large",
      "xx-large",
    ];

    const fontSizeSmallMediumLarge = ["small", "medium", "large"];

    const fontSizeSmall = ["small"];

    return (
      <div>
        <Card id="site-header-title" style={sticky}>
          <Headline as="h1" fontSize={fontSizeAllSizes}>
            {this.state.title}
          </Headline>
          <Row>
            <Column span={6}>
              <Text as="p" fontSize={fontSizeSmallMediumLarge}>
                {this.state.subTitle}
              </Text>
            </Column>
            <Column span={6}>
              <Box id="site-header-link-download">
                <Link
                  to="/files/myfile.pdf"
                  target="_blank"
                  download
                  fontSize={fontSizeSmall}
                >
                  Download
                </Link>
              </Box>
            </Column>
          </Row>
          <Divider />
        </Card>

        <Card>
          <TabBarComponent />
        </Card>
      </div>
    );
  }
}

export default NavBarComponent;
