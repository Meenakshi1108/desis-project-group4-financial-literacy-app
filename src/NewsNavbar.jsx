import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './NewsNavbar.css'; 

// Define the NewsNavbar component
const NewsNavbar = ({ onSelect }) => {
  // Define state variable for selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (category) => {
    onSelect(category); // Call onSelect function from parent component
    setSelectedCategory(category); // Set selected category
  };

  // useEffect hook to log selected category when it changes
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]); // Run useEffect when selectedCategory changes

  // Render the NewsNavbar component
  return (
    <div className="navbar">
      <button className={selectedCategory === 'global finance' ?
      'selected' : ''} onClick={() => handleCategoryClick('global finance')}>Global News</button>
      <button className={selectedCategory === 'india finance' ? 'selected' : ''} onClick={() => handleCategoryClick('india finance')}>India News</button>
      <button className={selectedCategory === 'market' ? 'selected' : ''} onClick={() => handleCategoryClick('market')}>Market</button>
      <button className={selectedCategory === 'stocks' ? 'selected' : ''} onClick={() => handleCategoryClick('stocks')}>Stocks</button>
      <button className={selectedCategory === 'fintech' ? 'selected' : ''} onClick={() => handleCategoryClick('fintech')}>Fintech</button>
    </div>
  );
};

// Export NewsNavbar component with React.memo for performance optimization
export default React.memo(NewsNavbar);
