import React, { Component } from "react";
import { Card, Headline, Text, Divider } from "@freenow/wave";
import { Row } from "@freenow/wave";
import { Box } from "@freenow/wave";
import { Column } from "@freenow/wave";

class TabOverviewContent extends Component {
  render() {
    const title =
      "9+ years of experience in Backend and Cloud technologies with basic Frontend skills";
    const subtitle = "Based in Hamburg, Germany";

    const currentStatus =
      "Actively looking for mid to senior level ONSITE developer jobs in and around Hamburg";
    const softwareSkillsTitle = "Software skills";

    const languages = "Languages";
    const frameworks = "Frameworks";
    const infraAndMiddlewares = "Infra & Middlewares";
    const dbAndStorages = "DBs & storages";

    const imageBoxStyle = {
      width: "100%",
      height: "100%",
      aspectRatio: 1,
      textAlign: "left",
    };
    const imageStyle = {
      width: "50%",
      height: "50%",
      margin: "10%",
      marginTop: "0%",
    };

    const currentStatusStyle = {
      width: "50%",
      marginLeft: "10%",
      marginRight: "10%",
    };

    const softwareSkillsSpacerStyle = {
      paddingBottom: "1%",
    };

    return (
      <div>
        <Row>
          <Column span={12}>
            <Card id="site-tab-overview-header">
              <Text
                as="p"
                fontSize={["small", "medium", "large", "x-large", "xx-large"]}
              >
                {title}
              </Text>
              <Text fontSize={["small", "medium", "large"]}>{subtitle}</Text>
            </Card>
          </Column>
        </Row>

        <Row>
          <Column span={4}>
            <Box style={imageBoxStyle}>
              <img src={require("./dummy.jpg")} alt="" style={imageStyle} />
              <Text
                as="p"
                fontSize={["small", "medium", "large"]}
                style={currentStatusStyle}
              >
                {currentStatus}
              </Text>
            </Box>
          </Column>
          <Column span={8}>
            <Row>
              <Column span={3}>
                <Box style={softwareSkillsSpacerStyle}>
                  <Text
                    as="p"
                    fontSize={["small", "medium", "large", "x-large"]}
                  >
                    {languages}
                  </Text>
                </Box>
              </Column>
              <Column span={3}>
                <Box style={softwareSkillsSpacerStyle}>
                  <Text
                    as="p"
                    fontSize={["small", "medium", "large", "x-large"]}
                  >
                    {frameworks}
                  </Text>
                </Box>
              </Column>
              <Column span={3}>
                <Box style={softwareSkillsSpacerStyle}>
                  <Text
                    as="p"
                    fontSize={["small", "medium", "large", "x-large"]}
                  >
                    {infraAndMiddlewares}
                  </Text>
                </Box>
              </Column>
              <Column span={3}>
                <Box style={softwareSkillsSpacerStyle}>
                  <Text
                    as="p"
                    fontSize={["small", "medium", "large", "x-large"]}
                  >
                    {dbAndStorages}
                  </Text>
                </Box>
              </Column>
            </Row>
            <Row paddingTop="2%">
              <Column span={3}>
                <Row>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Kotlin 1.7
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Java 13+
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Python 3.6
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        ReactJS 18
                      </Text>
                    </Box>
                  </Column>
                </Row>
              </Column>
              <Column span={3}>
                <Row>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Spring Boot 2.5+
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Spring 5+
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Micronaut 3.5+
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        AWS Lambda
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Java Server Faces
                      </Text>
                    </Box>
                  </Column>
                </Row>
              </Column>
              <Column span={3}>
                <Row>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        REST Api
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        AWS SQS-SNS
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Apache Kafka
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        AWS EC2 & ECS
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Docker & Kubernetes
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Maven & Gradle
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Grafana & Prometheus
                      </Text>
                    </Box>
                  </Column>
                </Row>
              </Column>
              <Column span={3}>
                <Row>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        PostGreSQL & PostGIS
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        MySQL
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Mongo & Cassandra
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Redis Cache
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        AWS RDS & S3
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Maven & Gradle
                      </Text>
                    </Box>
                  </Column>
                  <Column span={12}>
                    <Box style={softwareSkillsSpacerStyle}>
                      <Text as="p" fontSize={["small", "medium", "large"]}>
                        Grafana & Prometheus
                      </Text>
                    </Box>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </div>
    );
  }
}

export default TabOverviewContent;
