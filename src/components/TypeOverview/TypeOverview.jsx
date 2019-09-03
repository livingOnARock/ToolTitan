import React from "react";
import { withRouter } from "react-router-dom";

import ToolPreview from "../ToolPreview/ToolPreview";

import SECTIONS from "../../pages/shop/shop.data";
import "./TypeOverview.scss";

const TypeOverview = ({ match }) => {
  const { section, type } = match.params;
  const Brand = SECTIONS[section].items[type].items;
  const brandKeys = Object.keys(Brand);
  const tools = [];
  brandKeys.forEach(brandKey => {
    const toolKeys = Object.keys(Brand[brandKey]);
    toolKeys.forEach(toolKey => {
      tools.push(Brand[brandKey][toolKey]);
    });
  });
  //() => {};
  //SECTIONS[section].items[type].items;

  return (
    <div className="TypeOverview">
      <div className="tools">
        {tools.map(tool => (
          <ToolPreview tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(TypeOverview);
