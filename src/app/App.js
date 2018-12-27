import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerAndFooterVisible: true
    };
  }

  toggleHeaderAndFooterVisibility = () => {
    this.setState({
      headerAndFooterVisible: !this.state.headerAndFooterVisible
    });
    console.log(this.state.headerAndFooterVisible);
  };

  render() {
    return (
      <Router>
        <div>
          <Header visible={this.state.headerAndFooterVisible} />
            <Content toggleHeaderAndFooterVisibility={this.toggleHeaderAndFooterVisibility} />
          <Footer visible={this.state.headerAndFooterVisible} />
        </div>
      </Router>
    );
  }
}

export default App;
