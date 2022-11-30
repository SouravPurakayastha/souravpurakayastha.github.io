import React, { Component } from "react";
import { Column } from "@freenow/wave";

class SkillColumn extends Component {
  state = {
    skillIcon: this.props.skillIcon,
    skillName: this.props.skillName,
  };
  render() {
    return (
      <Column>
        <div>
          <img
            src={this.state.skillIcon}
            alt=""
            className="site-tab-overview-img-common site-tab-overview-skill-img-common"
          />
          <div className="site-tab-overview-skill-item">
            {this.state.skillName}
          </div>
        </div>
      </Column>
    );
  }
}

export default SkillColumn;
