import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabOverviewContent from "./tabOverviewContent";
import TabBlogContent from "./tabBlogContent";
import TabPersonalContent from "./tabPersonalContent";

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
        <Router>
          <Routes>
            <Route path="/personal" element={<TabPersonalContent />} />
            <Route path="/blog" element={<TabBlogContent />} />
            <Route path="/" element={<TabOverviewContent />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default TabBarComponent;
