import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Client from './components/Client'
import Sale from './components/Sale'
import Lead from './components/Lead'

import './App.css';
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <Router>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{marginBottom: "20px"}}>
          <a className="navbar-brand" href="https://medium.com/@its.martin.beck">
          <img src={logo} width="30" height="30" alt="https://medium.com/@its.martin.beck" />
          </a>
          <Link to="/" className="navbar-brand">Dashboard</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Clients</Link>
              </li>
              <li className="navbar-item">
              <Link to="/sales" className="nav-link">Sales Team</Link>
              </li>
              <li className="navbar-item">
                <Link to="/leads" className="nav-link">Leads</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Client} />
        </div>
        <Route path="/sales" exact component={Sale} />
        <Route path="/leads" exact component={Lead} />
    </Router>
    </div>
  );
}

export default App;
