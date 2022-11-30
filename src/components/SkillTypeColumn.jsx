import React, { Component } from "react";
import { Column } from "@freenow/wave";

class SkillTypeColumn extends Component {
  state = {
    skillType: this.props.skillType,
  };
  render() {
    return (
      <Column>
        <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
          {this.state.skillType}
        </div>
      </Column>
    );
  }
}

export default SkillTypeColumn;
