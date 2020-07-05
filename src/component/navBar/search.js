import React, { Component } from "react";
import "./styles.css";

class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <img src="https://image.flaticon.com/icons/svg/527/527484.svg" alt="" />
        <input text="type" placeholder="Search"></input>
      </div>
    );
  }
}

export default Search;
