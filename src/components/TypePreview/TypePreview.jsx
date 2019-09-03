import React from "react";
import { withRouter } from "react-router-dom";

import "./TypePreview.scss";

const TypePreview = ({ type, history, match, section }) => {
  const { imageUrl, name, linkUrl, items } = type;
  return (
    <div
      className="TypePreview"
      onClick={() => {
        history.push(`${match.url}/${linkUrl}`);
      }}
    >
      <img src={imageUrl} alt={type} />
      <span>{name}</span>
    </div>
  );
};
export default withRouter(TypePreview);
