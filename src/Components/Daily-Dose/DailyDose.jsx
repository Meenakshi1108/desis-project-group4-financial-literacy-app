import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DailyDose.css';

const DailyDose = () => {
  const [dailyDose, setDailyDose] = useState(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [streak, setStreak] = useState(0);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const d = new Date();

  const year = d.getFullYear();
  const date = d.getDate();
  const month = d.getMonth();

  const urlapi = `https://newsapi.org/v2/everything?q=finance&from=2024-03-19&to=${year}-${month}-${date}&sortBy=popularity&apiKey=ae0f4f17ed804a8c9d9710f7f40ba987`;

  useEffect(() => {
    const fetchDailyDose = async () => {
      try {
        const response = await axios.get(urlapi);
        setDailyDose(response.data.articles[3]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDailyDose();
  }, []);

  const handleCheckIn = async () => {
    try {
      //await axios.post({urlapi});
      setCheckedIn(true);
      setStreak(streak + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleReadMore = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <div className="daily-dose">
      <div className="daily-dose__header">
        <h2>Daily Dose of Knowledge</h2>
        <button className="check-in-button" onClick={handleCheckIn}>
          {checkedIn ? `Streak: ${streak}` : 'Check In'}
        </button>
      </div>
      <div className="daily-dose__content">
        {dailyDose && (
          <>
            <img src={dailyDose.urlToImage} alt={dailyDose.title} className="daily-dose__image" />
            <h3 className="daily-dose__title">{dailyDose.title}</h3>
            <div className="daily-dose__description">
                <a href={dailyDose.url}>
                  <button className="read-more-button"  /*onClick={toggleReadMore}*/>
                    Read More
                  </button>
                </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DailyDose;
