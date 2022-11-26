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
        <Row id="site-tab-overview-intro">
          <Column span={4}>
            <Box style={imageBoxStyle}>
              <img
                src={require("./dummy.jpg")}
                alt=""
                id="site-tab-overview-img"
              />
            </Box>
          </Column>
          <Column span={8}>
            <Box>
              <Text
                as="p"
                fontSize={["small", "medium", "large", "x-large", "xx-large"]}
              >
                {title}
              </Text>
              <Text
                as="p"
                fontSize={["small", "medium", "large"]}
                style={currentStatusStyle}
              >
                {currentStatus}
              </Text>
            </Box>
          </Column>
        </Row>
      </div>
    );
  }
}

export default TabOverviewContent;
