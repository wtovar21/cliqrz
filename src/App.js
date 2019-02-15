import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import './App.css';
import Body from './Components/Body/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        <Route exact path="/" component={Landing} />
        <Route exact  path="/Game" component={Body} />

        </div>
        </Router>

      </div>
    );
  }
}

export default App;
