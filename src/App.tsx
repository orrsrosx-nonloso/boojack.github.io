import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import "./less/app.less";

export default function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <Link className="nav-btn slogon-text" to="/">
          Lishuang's
        </Link>
        <NavLink className="nav-btn" activeClassName="active" to="/products">
          Products
        </NavLink>
        <span className="split-text">/</span>
        <NavLink className="nav-btn" activeClassName="active" to="/gallery">
          Gallery
        </NavLink>
      </div>

      <div className="page-container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
