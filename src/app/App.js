import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import '../styles/index.scss';

const App = () => (
  <Router>
    <div>
      <HashRouter>
        <div>
          <Header />
          <Content className="content" />
          <JoinUs />
          <Footer />
        </div>
      </HashRouter>
    </div>
  </Router>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
