import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
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
          <Footer />
        </div>
      </HashRouter>
    </div>
  </Router>
);

export default App;
