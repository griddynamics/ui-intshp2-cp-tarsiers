import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import '../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerAndFooterVisible: true
    };
  }

  toggleHeaderAndFooterVisibility = () => {
    const { headerAndFooterVisible } = this.state;
    this.setState({
      headerAndFooterVisible: !headerAndFooterVisible
    });
  };

  render() {
    const { headerAndFooterVisible } = this.state;
    return (
      <Router>
        <div>
          <HashRouter>
            <div>
              <Header visible={headerAndFooterVisible} />
              <Content className="content" toggleHeaderAndFooterVisibility={this.toggleHeaderAndFooterVisibility} />
              <Footer visible={headerAndFooterVisible} />
            </div>
          </HashRouter>
        </div>
      </Router>
    );
  }
}

export default App;
