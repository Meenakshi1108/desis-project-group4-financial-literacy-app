import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './NewsNavbar.css'; 

const NewsNavbar = ({ onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    onSelect(category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
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

export default React.memo(NewsNavbar);