import React, { Component } from "react";
import "./styles.css";
import { Card, Headline, Text, Row, Column, TabBar } from "@freenow/wave";
import TabBarComponent from "./tabBarComponent";
import TabPersonalContent from "./tabPersonalContent";

class NavBarComponent extends Component {
  state = {
    title: "Sourav Purakayastha",
    subTitle: "Software Engineer",
    tabTitles: [
      { id: 1, title: "Overview", selected: true, navTo: "/#" },
      { id: 2, title: "Blog", selected: false, navTo: "#/blog" },
      { id: 5, title: "Personal", selected: false, navTo: "#/personal" },
    ],
  };

  render() {
    const sticky = {
      position: "sticky",
    };

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
              <a
                href="https://drive.google.com/file/d/1oRg2CRyzXM5szV_ASyRSpP7v1jTEMUbJ/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="site-header-download site-flex-font">
                  Download
                </div>
              </a>
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

        <Card id="site-tab-overview-wrapper">
          <TabBarComponent />
        </Card>
      </div>
    );
  }
}

export default NavBarComponent;
