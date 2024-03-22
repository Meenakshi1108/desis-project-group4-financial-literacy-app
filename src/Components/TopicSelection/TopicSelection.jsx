import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopicSelection.css';

const TopicSelection = ({ onSelectTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch topics from the server when the component mounts
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/topics");
      setTopics(response.data);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  return (
    <div className="topic-selection">
      <h1><b>Select a Topic</b></h1> 
      <div className="topic-selection grid grid-cols-3 gap-4">
        {topics.map(topic => (
          <div className="topic-card" key={topic.id}>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <button onClick={() => onSelectTopic(topic.id)}>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
