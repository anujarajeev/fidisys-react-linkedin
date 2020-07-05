import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-wrapper">
          <div className="icon">
            <img src="https://image.flaticon.com/icons/svg/174/174857.svg" />
            {/* <label>LinkedIn</label> */}
          </div>
          <div className="linkList">
            <div className={"linkList-header"}>
              <h6>Navigation</h6>
            </div>
            <div className="links">
              <label>About</label>
              <label>Careers</label>
              <label>Advertising</label>
              <label>Small Business</label>
            </div>
          </div>
          <div className="linkList">
            <div className={"linkList-header"}></div>
            <div className="links">
              <label>About</label>
              <label>Careers</label>
              <label>Advertising</label>
              <label>Small Business</label>
            </div>
          </div>
          <div className="linkList">
            <div className={"linkList-header"}></div>
            <div className="links">
              <label>About</label>
              <label>Careers</label>
              <label>Advertising</label>
              <label>Small Business</label>
            </div>
          </div>
          <div className="linkList">
            <div className={"linkList-header"}>
              <h6>Fast Access</h6>
            </div>

            <div className="links">

            <button className="linkList-button">QUESTIONS?</button>
            <button className="linkList-button background-transparent color-primary">SETTINGS</button>
            </div>
          </div>
          <div className="linkList">
            <div className={"linkList-header"}>
              <h6>Languages</h6>
            </div>
            <div className="links">

            <select className="linkList-select " value={"English"}>
                
                
                <option>English</option>

                </select>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
