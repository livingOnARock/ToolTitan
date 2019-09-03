import React from "react";
import { withRouter } from "react-router-dom";

import "./SectionPreview.scss";
const SectionPreview = ({ section, match, history }) => {
  const { title, imageUrl, id, linkUrl, items } = section;
  const typeKeys = Object.keys(items);
  return (
    <div className="SectionPreview">
      <img
        src={imageUrl}
        alt=""
        onClick={() => {
          history.push(`${match.url}/${linkUrl}`);
        }}
      />
      <h5>{title}</h5>
      <div className="sectionTypes">
        {typeKeys.map(type => (
          <h6
            onClick={() => {
              history.push(`${match.url}/${linkUrl}/${type}`);
            }}
          >
            {type.toUpperCase()}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default withRouter(SectionPreview);
