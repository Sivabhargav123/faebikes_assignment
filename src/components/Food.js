

import React, { useState } from 'react';
import './Food.css'; // Import your CSS file for styling
import food2 from './images/swiggy2.png';
import food3 from './images/swiggy3.png';
import Navbar from './Navbar';


const Food = () => {
  // Define food items with their details
  const initialFoodItems = [
    { id: 1, name: 'Veg Items', type: 'veg', cost: '$10', rating: 4.5, image: food2},
    { id: 2, name: 'Non-Veg Items', type: 'non-veg', cost: '$12', rating: 4.2, image: food3},
    // Add more food items as needed
  ];

  // Initialize state for selected food type and additional veg items visibility
  const [selectedType, setSelectedType] = useState('all');
  const [showMoreVegItems, setShowMoreVegItems] = useState(false);
  const [additionalVegItems, setAdditionalVegItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

  // Define function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Function to handle button click to toggle visibility of additional veg items
  const handleToggleVegItems = () => {
    setShowMoreVegItems(!showMoreVegItems);
    // If additional veg items are not visible, add them to the state
    if (!showMoreVegItems) {
      // You can fetch additional veg items from an API or define them manually here
      const additionalItems = [
        { id: 3, name: 'Veg Item 2', type: 'veg', cost: '$8', rating: 4.0, image: './images/swiggy1.png' },
        { id: 4, name: 'Veg Item 3', type: 'veg', cost: '$9', rating: 4.2, image: './images/swiggy2.png' },
        // Add more additional veg items as needed
      ];
      setAdditionalVegItems(additionalItems);
    } else {
      // If additional veg items are already visible, clear the state
      setAdditionalVegItems([]);
    }
  };

  // Combine initial veg items and additional veg items
  const vegItems = initialFoodItems.filter(item => item.type === 'veg').concat(additionalVegItems);

  // Filter food items based on selected type
  const filteredFoodItems = selectedType === 'all' ? initialFoodItems : initialFoodItems.filter(item => item.type === selectedType);

  // Function to handle click on food card
  const handleFoodItemClick = (item) => {
    setSelectedItem(item); // Set selected item
  };

  return (
    <div className='background'>
        <Navbar/>
        <div className='background-in'>
      <h1>Food Items</h1>
      {/* Dropdown menu */}
      <select className="dropdown" value={selectedType} onChange={handleDropdownChange}>
        <option value="all">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
      </select>
      </div>
      {/* Display food items in cards */}
      <div className="food-container">
        {filteredFoodItems.map((item, index) => (
          <div key={index} className="food-item" >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>Type: {item.type}</p>
            <p>Cost: {item.cost}</p>
            <p>Rating: {item.rating}</p>
          </div>
        ))}
      </div>

      {/* Button to toggle visibility of additional veg items */}
      {selectedType === 'veg' && (
        <button onClick={handleToggleVegItems}>See more veg items</button>
      )}

      {/* Display additional veg items if the button is clicked */}
      {showMoreVegItems && selectedType === 'veg' && (
        <div className="additional-veg-items">
          {vegItems.map((item, index) => (
            <div key={index} className="food-item" onClick={() => handleFoodItemClick(item)}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <p>Type: {item.type}</p>
              <p>Cost: {item.cost}</p>
              <p>Rating: {item.rating}</p>
            </div>
          ))}
        </div>
      )}

{selectedType === 'non-veg' && (
        <button onClick={handleToggleVegItems}>See more Non-veg items</button>
      )}

      {/* Display additional veg items if the button is clicked */}
      {showMoreVegItems && selectedType === 'non-veg' && (
        <div className="additional-veg-items">
          {vegItems.map((item, index) => (
            <div key={index} className="food-item" onClick={() => handleFoodItemClick(item)}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <p>Type: {item.type}</p>
              <p>Cost: {item.cost}</p>
              <p>Rating: {item.rating}</p>
            </div>
          ))}
        </div>
      )}

      {/* Render Instamart component with selected item */}
    </div>
  );
};

export default Food;
