import React, { Component } from 'react';
import "./App.css"
import Page1 from "./container/Page1"
import Layout from "./component/layout"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  
  render() {
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}

export default App