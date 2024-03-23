import React, { useState, useEffect } from 'react';
import './NewsSection.css';
import StockSection from './StockSection';
import NewsNavbar from './NewsNavbar';
import extra from './assets/extra.jpg';

// Define the API URL for fetching news
const apiURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a4282f3d79d437c8082fc7a39287341';

// Define the NewsSection component
const NewsSection = () => {
  // Define state variables for storing articles and selected category
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('finance');

  // useEffect hook to fetch data when category changes
  useEffect(() => {
    // Define a function to fetch news data
    const fetchData = async () => {
      try {
        // Get today's date and date of last month
        const today = new Date();
        const lastMonth = new Date(today);
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        // Format the date to YYYY-MM-DD
        const formattedDate = lastMonth.toISOString().split('T')[0];

        // Fetch news data based on selected category and date
        const response = await fetch(https://newsapi.org/v2/everything?q=${category}&from=${formattedDate}&sortBy=publishedAt&apiKey=1a4282f3d79d437c8082fc7a39287341);
        
        // Throw error if fetching fails
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        // Parse response data and set articles state
        const data = await response.json();
        console.log(data); // Log the response data to see what you're getting
        setArticles(data.articles.slice(0, 9)); // Limit to 9 articles
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Call fetchData function
    fetchData();
  }, [category]); // Run useEffect when category changes
  
  // Function to handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Render the NewsSection component
  return (
    <>
    <NewsNavbar onSelect={handleCategorySelect}/> {/* Render NewsNavbar component */}
    <div className="news-section">
      {[0, 1, 2].map(rowIdx => ( {/* Map through rows */}
        <div className="row" key={rowIdx}>
          {articles.slice(rowIdx * 3, rowIdx * 3 + 3).map(article => ( {/* Map through articles */}
            <div className="card" key={article.title}>
              {article.urlToImage ? (<img src={article.urlToImage} alt="Article" />) : (<img src={extra} alt="Default" />)}
              <div className="content">
                <h2>{article.title}</h2>
                {article.description.length > 0 && (<p>{article.description.length > 150? ${article.description.slice(0, 150)}...: article.description}</p>)} {/* Show description with limit */}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                 <button2 className='btn'>Read More</button2> {/* Button to read more */}
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
      
      <div className="stock-section">
        <StockSection /> {/* Render StockSection component */}
      </div>
    </div>
    </>
    
  );
};

// Export NewsSection component
export default NewsSection;
