import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="powerToolList">
        <span className="listHeader">POWER TOOLS</span>
        <ul>
          <li>Drills</li>
          <li>Saws</li>
          <li>Grinders</li>
          <li>Sanders</li>
          <li>Oscillating and Rotart</li>
        </ul>
      </div>
      <div className="toolBrandList">
        <span className="listHeader">POWER TOOL BRAND</span>
        <ul>
          <li>Black and Decker</li>
          <li>Bosch</li>
          <li>Dewalt</li>
          <li>Hitachi</li>
          <li>Craftsman</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
