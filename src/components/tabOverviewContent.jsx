import React, { Component } from "react";
import {
  Card,
  Headline,
  Text,
  Divider,
  HamburgIcon,
  EnvelopeIcon,
} from "@freenow/wave";
import { Row } from "@freenow/wave";
import { Box } from "@freenow/wave";
import { Column } from "@freenow/wave";

class TabOverviewContent extends Component {
  render() {
    const title_1 =
      "Experienced Software Engineer for cloud based software apps ";
    const title_2 = "Specialised in Backend architecture and engineering";
    const title_3 = "9+ years of experience";
    const title_4 = "Based in Hamburg, Germany";

    const address_1 = "Tangstedter Landstraße 6";
    const address_2 = "22415 Hamburg, Germany";
    const email = "souravpurakayastha505@gmail.com";
    const phone = "+49-1736159630";

    const softwareSkillsTitle = "Software skills";

    const languages = "Languages";
    const frameworks = "Frameworks";
    const infraAndMiddlewares = "Infra & Middlewares";
    const dbAndStorages = "DBs & storages";

    const softwareSkillsSpacerStyle = {
      paddingBottom: "1%",
    };

    return (
      <div>
        <div>
          <Row id="site-tab-overview-intro">
            <Column span={12} textAlign="center">
              <Box>
                <Headline
                  as="h2"
                  fontSize={["small", "medium", "large", "x-large"]}
                >
                  <div className="site-tab-overview-title">{title_1}</div>
                </Headline>
                <Divider />
              </Box>
            </Column>
          </Row>
        </div>
        <div>
          <Row>
            <Column span={12} textAlign="center">
              <Box>
                <img
                  src={require("./dummy.png")}
                  alt=""
                  id="site-tab-overview-img"
                  className="site-tab-overview-img-common"
                />
              </Box>
            </Column>
          </Row>
          <Row>
            <Column span={12} textAlign="center">
              <Card alignContent="center" alignItems="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">
                    <HamburgIcon />
                    {address_1}
                    {address_2}
                    <EnvelopeIcon />
                    {email}
                    {phone}
                  </div>
                </Text>
              </Card>
            </Column>
          </Row>
        </div>

        <div>
          <Row>
            <Column span={12} textAlign="center">
              <Card alignContent="center" alignItems="center" level={200}>
                <Text>
                  <div className="site-flex-font site-tab-bullet">
                    {title_2}
                    {title_3}
                    {title_4}
                  </div>
                </Text>
              </Card>
            </Column>
          </Row>
        </div>

        <div id="site-tab-overview-skills">
          <Card level={300}>
            <Row>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">NA</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">Expert</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">Advanced</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">Basic</div>
                </Text>
              </Column>
            </Row>
            <Row>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">Backend</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">Kotlin</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">NA</div>
                </Text>
              </Column>
              <Column span={3} textAlign="center">
                <Text>
                  <div className="site-flex-font site-tab-bullet">NA</div>
                </Text>
              </Column>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default TabOverviewContent;
