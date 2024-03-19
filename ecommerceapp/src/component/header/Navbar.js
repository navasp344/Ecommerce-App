import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../Styles/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navabar() {
  return (
    <nav
      className="navbar navbar-expand-lg  sticky-top"
      style={{ backgroundColor: "#000000" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/Home">
          <h5 className="fs-3">E-Mart</h5>
        </NavLink>
        <button
          className="navbar-toggler  bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className="nav-link  mx-4 "
                aria-current="page"
                to="/Home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/Productlist">
                Product list
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Cart
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navabar;
