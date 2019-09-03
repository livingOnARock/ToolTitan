import React, { Component } from "react";

import SectionPreview from "../../components/SectionPreview/SectionPreview";

import "./Shop.scss";
import SECTIONS from "./shop.data";

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS
    };
  }

  render() {
    const sectionKeys = Object.keys(this.state.sections);
    console.log(sectionKeys.map(section => this.state.sections[section]));

    return (
      <div className="Shop">
        {sectionKeys.map(section => (
          <SectionPreview section={this.state.sections[section]} />
        ))}
      </div>
    );
  }
}
