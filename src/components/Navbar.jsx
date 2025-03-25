import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light custom-navbar">
      <Link className="navbar-brand" to={"/"}>
        <h5 className="brand-name">PURE BITES</h5>
      </Link>

      {/* Offcanvas Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Offcanvas Sidebar (Right-Side Menu) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto">
            <Link className="nav-item" to={"/"}><a className="nav-link">BREAKFAST & BEVERAGES</a></Link>
            <Link className="nav-item" to={"/starters_snacks"}><a className="nav-link">STARTERS & SNACKS</a></Link>
            <Link className="nav-item" to={"/main_course"}><a className="nav-link">MAIN COURSE</a></Link>
            <Link className="nav-item" to={"/rice_noddels"}><a className="nav-link">RICE & NOODLES</a></Link>
            <Link className="nav-item" to={"/deserts_refreshment"}><a className="nav-link">DESSERTS & REFRESHMENTS</a></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;