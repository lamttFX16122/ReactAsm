import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/MainComponent";
class App extends Component {
  render() {
    return (
      <Router>
        <Main></Main>
      </Router>
    );
  }
}

export default App;
