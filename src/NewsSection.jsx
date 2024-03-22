import React, { useState, useEffect } from 'react';
import './NewsSection.css';
import StockSection from './StockSection';
import NewsNavbar from './NewsNavbar';
import extra from './assets/extra.jpg';


const apiURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a4282f3d79d437c8082fc7a39287341';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('finance');


  useEffect(() => {
    const fetchData = async () => {
      try {

      const today = new Date();
      const lastMonth = new Date(today);
      lastMonth.setMonth(lastMonth.getMonth() - 1); // Set the date to last month

      const formattedDate = lastMonth.toISOString().split('T')[0]; // Format date to YYYY-MM-DD

        const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&from=${formattedDate}&sortBy=publishedAt&apiKey=1a4282f3d79d437c8082fc7a39287341`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        console.log(data); // Log the response data to see what you're getting
        setArticles(data.articles.slice(0, 9)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [category]);
  
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
    <NewsNavbar onSelect={handleCategorySelect}/>
    <div className="news-section">
      {[0, 1, 2].map(rowIdx => (
        <div className="row" key={rowIdx}>
          {articles.slice(rowIdx * 3, rowIdx * 3 + 3).map(article => (
            <div className="card" key={article.title}>
              {article.urlToImage ? (<img src={article.urlToImage} alt="Article" />) : (<img src={extra} alt="Default" />)}
              <div className="content">
                <h2>{article.title}</h2>
                {article.description.length > 0 && (<p>{article.description.length > 150? `${article.description.slice(0, 150)}...`: article.description}</p>)} 
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                 <button2 className='btn'>Read More</button2>
                </a>
              </div>
              
            </div>
          ))}
        </div>
      ))}
      
      <div className="stock-section">
        <StockSection />
      </div>
    </div>
    </>
    
  );
};

export default NewsSection;