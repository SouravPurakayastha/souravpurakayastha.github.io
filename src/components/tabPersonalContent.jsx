import React, { Component } from "react";
import {
  Card,
  Headline,
  Text,
  Divider,
  HamburgIcon,
  EnvelopeIcon,
  PhoneIcon,
  Row,
  Column,
} from "@freenow/wave";

class TabPersonalContent extends Component {
  render() {
    const title = "Personal details";
    const subTitle = "Would be nice to hear from you";

    const address_1 = "Tangstedter Landstraße 6, ";
    const address_2 = "22415 Hamburg, Germany";
    const email_1 = "souravpurakayastha505@gmail.com";
    const phone = "+49-1736159630";

    return (
      <div>
        <Card level={300}>
          <Headline>{title}</Headline>
          <Text>{subTitle}</Text>
        </Card>

        <Divider />

        <div>
          <Row style={{ padding: "2%" }}>
            <Column span={12} textAlign="center">
              <img
                src={require("./linkedIn.png")}
                alt=""
                className="site-tab-overview-img-common site-tab-personal-img-common"
              />
              <a
                href="https://www.linkedin.com/in/sourav-purakayastha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>My LinkedIn</div>
              </a>
            </Column>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Column span={12} textAlign="center">
              <img
                src={require("./so.png")}
                alt=""
                className="site-tab-overview-img-common site-tab-personal-img-common"
              />
              <a
                href="https://stackoverflow.com/users/4867374/sourav-purakayastha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="site-header-download site-flex-font">
                  My Stackoverflow Profile
                </div>
              </a>
            </Column>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Column span={12} textAlign="center">
              <HamburgIcon />
              <Text style={{ padding: "1rem" }}>
                {address_1}
                {address_2}
              </Text>
            </Column>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Column span={12} textAlign="center">
              <EnvelopeIcon />
              <Text style={{ padding: "1rem" }}>{email_1}</Text>
            </Column>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Column span={12} textAlign="center">
              <PhoneIcon />
              <Text style={{ padding: "1rem" }}>{phone}</Text>
            </Column>
          </Row>
        </div>
      </div>
    );
  }
}

export default TabPersonalContent;
