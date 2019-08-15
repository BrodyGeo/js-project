import React from "react";
import '../styles.css';
//import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="/beer">Beers</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Beers
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/beer">Beers</a>
              <a className="dropdown-item" href="/beer/new">New Beer</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Vendors
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/vendor">Vendors</a>
              <a className="dropdown-item" href="/vendor/new">New Vendor</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;