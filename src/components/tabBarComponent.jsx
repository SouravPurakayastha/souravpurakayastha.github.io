import React, { Component } from "react";
import { Divider, Headline, TabBar, Text } from "@freenow/wave";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabOverviewContent from "./tabOverviewContent";
import TabBackendContent from "./tabBackendContent";
import TabInfraContent from "./tabInfraContent";
import TabPersonalContent from "./tabPersonalContent";
import TabFrontendContent from "./tabFrontendContent";

class TabBarComponent extends Component {
  state = {
    tabTitles: [
      { id: 1, title: "Overview", selected: true, navTo: "/" },
      { id: 2, title: "Backend", selected: false, navTo: "/backend" },
      { id: 3, title: "Infrastructure", selected: false, navTo: "/infra" },
      { id: 4, title: "Frontend", selected: false, navTo: "/frontend" },
      { id: 5, title: "Personal", selected: false, navTo: "/personal" },
    ],
  };
  render() {
    return (
      <div>
        <TabBar marginTop="0%">
          {this.state.tabTitles.map((tabTitle) => (
            <TabBar.Link
              href={tabTitle.navTo}
              to={tabTitle.navTo}
              key={tabTitle.id}
              selected={tabTitle.selected}
              className="site-tab-header"
            >
              <div className="site-tab-header-title">{tabTitle.title}</div>
            </TabBar.Link>
          ))}
        </TabBar>
        <Router>
          <Routes>
            <Route path="/personal" element={<TabPersonalContent />} />
            <Route path="/frontend" element={<TabFrontendContent />} />
            <Route path="/infra" element={<TabInfraContent />} />
            <Route path="/backend" element={<TabBackendContent />} />
            <Route path="/" element={<TabOverviewContent />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default TabBarComponent;
