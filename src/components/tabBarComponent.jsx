import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TabOverviewContent from "./tabOverviewContent";
import TabBlogContent from "./tabBlogContent";
import TabPersonalContent from "./tabPersonalContent";

class TabBarComponent extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route path="/personal" element={<TabPersonalContent />} />
            <Route path="/" element={<TabOverviewContent />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default TabBarComponent;
