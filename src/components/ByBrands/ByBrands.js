import React from "react";
import { withRouter } from "react-router-dom";

import ToolPreview from "../ToolPreview/ToolPreview";

import "./ByBrands.scss";
import SECTIONS from "../../pages/shop/shop.data";
const getBrands = brand => {
  const brandTools = [];
  const sectionKeys = Object.keys(SECTIONS);
  sectionKeys.forEach(key => {
    const sectionTypeKeys = Object.keys(SECTIONS[key].items);
    //console.log(sectionType);
    sectionTypeKeys.forEach(typeKey => {
      const brandKeys = Object.keys(SECTIONS[key].items[typeKey].items);
      brandKeys.forEach(brandKey => {
        if (brandKey === brand) {
          const toolKeys = Object.keys(
            SECTIONS[key].items[typeKey].items[brandKey]
          );
          console.log(toolKeys);
          toolKeys.forEach(toolkey => {
            brandTools.push(
              SECTIONS[key].items[typeKey].items[brandKey][toolkey]
            );
          });
        }
      });
    });
  });
  return brandTools;
};

const ByBrands = ({ match }) => {
  const brand = match.params.brandId;
  const brandTools = getBrands(brand);
  return (
    <div className="byBrands">
      {brandTools.map(tool => (
        <ToolPreview tool={tool} />
      ))}
    </div>
  );
};

export default withRouter(ByBrands);
