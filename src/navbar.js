import React from "react";
import "./index.css";
import Description from './description';
import App from './App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavBar() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Check Weather</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <App/>
  );
}

function About() {
  return (
    <div><Description/></div>
  );
}



export default NavBar;