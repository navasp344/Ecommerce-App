import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/Footer.css'

function Footer() {
  return (
    <div className="" style={{backgroundColor:'#232f3e'}}>
        <div className="container pt-5">
        <div className="row ">
        <div className="col-3">
          <h5 className="text-light fw-bold fs-6">Get to Know Us</h5>
          <ul className="list-unstyled">
            <li>
              <Link to={"/about"} className="footer-link">About Us</Link>
            </li>
            <li>
              <Link className="footer-link">Careers</Link>
            </li>
            <li>
              <Link className="footer-link">Press Releases</Link>
            </li>
            <li>
              <Link className="footer-link">E-Mart Science</Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5 className="text-light fw-bold fs-6">Connect with Us</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="footer-link">Facebook</Link>
            </li>
            <li>
              <Link className="footer-link">Twitter</Link>
            </li>
            <li>
              <Link className="footer-link">Instagram</Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5 className="text-light fw-bold fs-6">Make Money with Us</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="footer-link">Sell on E-Mart</Link>
            </li>
            <li>
              <Link className="footer-link">Sell under E-Mart Accelerator</Link>
            </li>
            <li>
              <Link className="footer-link">Protect and Build Your Brand</Link>
            </li>
            <li>
              <Link className="footer-link">E-mart Global Selling</Link>
            </li>
            
          </ul>
        </div>
        <div className="col-3">
          <h5 className="text-light fw-bold fs-6">Let Us Help You</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="footer-link">COVID-19 and E-Mart</Link>
            </li>
            <li>
              <Link className="footer-link">Your Account</Link>
            </li>
            <li>
              <Link className="footer-link">Returns Centre</Link>
            </li>
            <li>
              <Link className="footer-link">100% Purchase Protection</Link>
            </li>
            <li>
              <Link className="footer-link">E-Mart App Download</Link>
            </li>
            <li>
              <Link className="footer-link">Help</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
      
    </div>
  );
}

export default Footer;