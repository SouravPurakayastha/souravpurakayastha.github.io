import React, { Component } from "react";
import "./styles.css";
import { Card, Headline, Text, Row, Column, TabBar } from "@freenow/wave";
import TabBarComponent from "./tabBarComponent";

class NavBarComponent extends Component {
  state = {
    title: "Sourav Purakayastha",
    subTitle: "Software Engineer",

    overviewTab: { id: 1, title: "Overview", navTo: "/#" },
    blogTab: { id: 2, title: "Blog", navTo: "#/blog" },
    personalTab: { id: 5, title: "Personal", navTo: "#/personal" },
  };

  render() {
    const sticky = {
      position: "sticky",
    };

    return (
      <div>
        <Card id="site-header" style={sticky}>
          <h1>{this.state.test}</h1>
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
                <TabBar.Link
                  href={this.state.overviewTab.navTo}
                  key={this.state.overviewTab.id}
                  className="site-flex-margin"
                >
                  <div className="site-tab-header site-flex-font">
                    {this.state.overviewTab.title}
                  </div>
                </TabBar.Link>

                <TabBar.Link
                  href={this.state.personalTab.navTo}
                  key={this.state.personalTab.id}
                  className="site-flex-margin"
                >
                  <div className="site-tab-header site-flex-font">
                    {this.state.personalTab.title}
                  </div>
                </TabBar.Link>
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
