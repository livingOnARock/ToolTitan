import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import PowerToolImg from "../../assets/power-tool-image.JPG";
import DrillsIcon from "../../assets/drills-icon.png";
import SawIcon from "../../assets/saws-icon.png";
import SanderIcon from "../../assets/sander-icon.png";
import OscillationIcon from "../../assets/oscillating-tool-icon.png";
import BlackAndDeckerLogo from "../../assets/blackAndDecker-icon.jpg";
import BoschLogo from "../../assets/bosch-logo.jpg";
import CraftsmanLogo from "../../assets/craftsman-logo.jpg";
import DewaltLogo from "../../assets/dewalt-logo.jpg";
import HitachiLogo from "../../assets/hitachi-logo.jpg";

import "./Homepage.scss";

const Homepage = ({ history }) => {
  return (
    <div className="Homepage">
      <h1>Tool Titan</h1>
      <div className="Homepage-intro">
        <span className="orange">PowerTools</span>
        <br />
        <span className="red">Savings</span>
        <br />
        <button className="shopAll">Shop All Tools</button>
        <br />
        <img src={PowerToolImg} alt="power tool" />
      </div>
      <span className="Homepage-subhedding">Shop Tools</span>
      <div className="Homepage-toolPreview">
        <div className="Homepage-icon-container">
          <img
            src={DrillsIcon}
            alt="drillsIcon"
            onClick={() => {
              history.push("/shop/drills");
            }}
          />
          <h4>DRILLS</h4>
        </div>
        <div className="Homepage-icon-container">
          <img
            src={SawIcon}
            alt="SawIcon"
            onClick={() => {
              history.push("/shop/saws");
            }}
          />
          <h4>SAWS</h4>
        </div>
        <div className="Homepage-icon-container">
          <img
            src={SanderIcon}
            alt="SanderIcon"
            onClick={() => {
              history.push("/shop/sanders");
            }}
          />
          <h4>SANDERS</h4>
        </div>
        <div className="Homepage-icon-container">
          <img
            src={OscillationIcon}
            alt="OscillationIcon"
            onClick={() => {
              history.push("/shop/grinders");
            }}
          />
          <h4>OSCILLATION</h4>
        </div>
      </div>
      <span className="Homepage-subhedding">Popular Brands</span>
      <div className="Homepage-shopBrands">
        <div className="Homepage-brandContainer">
          <img
            src={BlackAndDeckerLogo}
            alt="BlackAndDeckerLogo"
            onClick={() => {
              history.push("/brand/blackAndDecker");
            }}
          />
        </div>
        <div className="Homepage-brandContainer">
          <img
            src={BoschLogo}
            alt="BoschLogo"
            onClick={() => {
              history.push("/brand/bosch");
            }}
          />
        </div>
        <div className="Homepage-brandContainer">
          <img
            src={CraftsmanLogo}
            alt="CraftsmanLogo"
            onClick={() => {
              history.push("/brand/craftsman");
            }}
          />
        </div>
        <div className="Homepage-brandContainer">
          <img
            src={DewaltLogo}
            alt="DewaltLogo"
            onClick={() => {
              history.push("/brand/dewalt");
            }}
          />
        </div>
        <div className="Homepage-brandContainer">
          <img
            src={HitachiLogo}
            alt="HitachiLogo"
            onClick={() => {
              history.push("/brand/hitachi");
            }}
          />
        </div>
        <div className="Homepage-brandContainer">
          <img
            src={BlackAndDeckerLogo}
            alt="BlackAndDeckerLogo"
            onClick={() => {
              history.push("/brand/blackAndDecker");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Homepage);
