import React, { Component } from "react";
import {
  Card,
  Headline,
  Text,
  Divider
} from "@freenow/wave";
import PersonalDetailRow from "./PersonalDetailRow";
import PersonalContactRow from "./PersonalContactRow";

class TabPersonalContent extends Component {
  state = {
    personalDetails: [
      {
        personalDetailIcon: require("../images/linkedIn.png"),
        personalDetailLink: "https://www.linkedin.com/in/sourav-purakayastha/",
        personalDetailLinkTitle: "My LinkedIn",
      },
      {
        personalDetailIcon: require("../images/so.png"),
        personalDetailLink:
          "https://stackoverflow.com/users/4867374/sourav-purakayastha",
        personalDetailLinkTitle: "My StackOverflow Profile",
      },
    ],

    personalContactDetails: [
      {
        contact: "Address: Tangstedter Landstraße 6, 22415 Hamburg, Germany",
      },
      {
        contact: "Email: souravpurakayastha505@gmail.com",
      },
      {
        contact: "Phone: +49-1736159630",
      },
    ],
  };

  render() {
    const title = "About me";
    const subTitle_1 =
      "My name is Sourav and I am a Software Engineer by profession. I am married with a 2 year old son.";

    const subTitle_2 =
      "In my free time, I enjoy biking, travelling and finding the best flight deals for the next vacation. Would be nice to hear from you :)";
    return (
      <div>
        <Card level={300}>
          <Headline>{title}</Headline>
          <Text>{subTitle_1}</Text>
          <br />
          <br />
          <Text>{subTitle_2}</Text>
        </Card>

        <Divider />

        <div>
          {this.state.personalDetails.map((detail) => (
            <PersonalDetailRow
              personalDetailIcon={detail.personalDetailIcon}
              personalDetailLink={detail.personalDetailLink}
              personalDetailLinkTitle={detail.personalDetailLinkTitle}
              key={detail.personalDetailLinkTitle}
            />
          ))}

          {this.state.personalContactDetails.map((contact) => (
            <PersonalContactRow contact={contact.contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default TabPersonalContent;
