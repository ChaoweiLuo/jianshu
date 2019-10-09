import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import {Home, About, Test} from './Components';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
        </div>
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/test" exact component={Test} />
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
