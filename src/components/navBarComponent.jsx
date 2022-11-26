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
  TabBar,
} from "@freenow/wave";
import TabBarComponent from "./tabBarComponent";

class NavBarComponent extends Component {
  state = {
    title: "Sourav Purakayastha",
    subTitle: "Senior Backend Developer",
    tabTitles: [
      { id: 1, title: "Overview", selected: true, navTo: "/" },
      { id: 2, title: "Backend", selected: false, navTo: "/backend" },
      { id: 3, title: "Infrastructure", selected: false, navTo: "/infra" },
      { id: 4, title: "Frontend", selected: false, navTo: "/frontend" },
      { id: 5, title: "Personal", selected: false, navTo: "/personal" },
    ],
  };

  render() {
    const sticky = {
      position: "sticky",
    };

    const fontSizeSmallMediumLarge = ["small", "medium", "large"];

    return (
      <div>
        <Card id="site-header" style={sticky}>
          <Row>
            <Column span={6} textAlign="left">
              <Headline as="h1" fontSize={["large", "x-large", "xx-large"]}>
                <div className="site-header-title">{this.state.title}</div>
              </Headline>
            </Column>
            <Column span={6} textAlign="right">
              <Link to="/files/myfile.pdf" target="_blank" download>
                <div className="site-header-download site-flex-font">
                  Download
                </div>
              </Link>
            </Column>
          </Row>

          <Row>
            <Column span={6}>
              <Text fontSize={["small", "medium", "large"]}>
                <div className="site-header-subtitle-color site-header-subtitle-padding">
                  {this.state.subTitle}
                </div>
              </Text>
            </Column>
            <Column span={6}>
              <TabBar marginTop="0%">
                {this.state.tabTitles.map((tabTitle) => (
                  <TabBar.Link
                    href={tabTitle.navTo}
                    to={tabTitle.navTo}
                    key={tabTitle.id}
                    selected={tabTitle.selected}
                    className="site-flex-margin"
                  >
                    <div className="site-tab-header site-flex-font">
                      {tabTitle.title}
                    </div>
                  </TabBar.Link>
                ))}
              </TabBar>
            </Column>
          </Row>
        </Card>

        <Card>
          <TabBarComponent />
        </Card>
      </div>
    );
  }
}

export default NavBarComponent;
