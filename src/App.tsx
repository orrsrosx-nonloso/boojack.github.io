import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import "./less/app.less";

export default function App() {
  useEffect(() => {
    const param = location.hash.slice(2);

    if (["site", "products", "gallery"].includes(param)) {
      document.title = "Lishuang's " + param;
    } else {
      document.title = "Lishuang's site";
    }
  }, []);

  const handleNavLinkClick = (param: string) => {
    document.title = "Lishuang's " + param;
  };

  return (
    <Router>
      <div className="nav-wrapper">
        <Link
          className="nav-btn slogan-text"
          to="/site"
          onClick={() => {
            handleNavLinkClick("site");
          }}
        >
          Lishuang's
        </Link>
        <NavLink
          className="nav-btn"
          activeClassName="active"
          to="/site"
          onClick={() => {
            handleNavLinkClick("site");
          }}
        >
          Site
        </NavLink>
        <span className="split-text">/</span>
        <NavLink
          className="nav-btn"
          activeClassName="active"
          to="/products"
          onClick={() => {
            handleNavLinkClick("products");
          }}
        >
          Products
        </NavLink>
        <span className="split-text">/</span>
        <NavLink
          className="nav-btn"
          activeClassName="active"
          to="/gallery"
          onClick={() => {
            handleNavLinkClick("gallery");
          }}
        >
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
          <Route path="/site">
            <AboutMe />
          </Route>
          <Redirect to="/site" />
        </Switch>
      </div>
    </Router>
  );
}
