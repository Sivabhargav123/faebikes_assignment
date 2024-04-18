import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling
import food1 from './images/swiggy1.png';
import food2 from './images/swiggy2.png';
import food3 from './images/swiggy4.png';
import food4 from './images/swiggy3.png';
import food5 from './images/fish.jpeg'

import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
      <div className="home-container">
        <div className='marquee-container'>
        <div className="marquee">
        {<h1 className='main-heading'>swiggy items</h1>}
      </div>
        </div>
        <div className="food-container">
          {/* Food items */}
          <div className="food-item">
            <img src={food1} alt="Food 1" />
            <h2 className='food-name'>Fast Food</h2>
            <span className="item-price">$10</span>
          </div>
          <div className="food-item">
            <img src={food2} alt="Food 2" />
            <h2 className='food-name'>Vegetales</h2>
            <span className="item-price">$12</span>
          </div>
          <div className="food-item">
            <img src={food3} alt="Food 3" />
            <h2 className='food-name'>Meals</h2>
            <span className="item-price">$8</span>
          </div>
          <div className="food-item">
            <img src={food4} alt="Food 4" />
            <h2 className='food-name'>Chiken</h2>
            <span className="item-price">$15</span>
          </div>
          <div className="food-item">
            <img src={food5} alt="Food 1" />
            <h2 className='food-name'>Fish</h2>
            <span className="item-price">$10</span>
          </div>
                   
        </div>
      </div>

      {/* Navigation bar */}
      <div className="nav-bar">
        <Link to="/food" className="nav-link">Food</Link>
      </div>
    </div>
  );
};

export default Home;
