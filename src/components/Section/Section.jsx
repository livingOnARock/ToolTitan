import React from "react";
import { withRouter } from "react-router-dom";

import SECTIONS from "../../pages/shop/shop.data";
import TypePreview from "../TypePreview/TypePreview";

import "./Section.scss";

const Section = ({ match }) => {
  const section = match.params.section;
  const types = SECTIONS[section].items;
  const typeKeys = Object.keys(types);
  return (
    <div className="Section">
      <div className="Section-header">{section.toUpperCase()}</div>
      <div className="Section-types">
        {typeKeys.map(typeKey => (
          <TypePreview type={types[typeKey]} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Section);
