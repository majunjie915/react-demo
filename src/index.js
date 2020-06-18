import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/page1';
import Home from './components/page2';
import Activity from './components/page3';
import Mine from './components/page4';
import './index.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/mine" component={Mine} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
