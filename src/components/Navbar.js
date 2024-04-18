import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using routing
import "./Navbar.css"
import swiggy from"./images/swiggy.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand"> <img className='image' src={swiggy}/> </Link> {/* Link to the home page */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link">Menu</Link> {/* Link to the menu page */}
          </li>
          <li className="nav-item">
            <Link  className="nav-link">About</Link> {/* Link to the about page */}
          </li>
          <li className="nav-item">
            <Link  className="nav-link">Contact</Link> {/* Link to the contact page */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
