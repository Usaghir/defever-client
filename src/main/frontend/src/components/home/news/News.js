import React, { useState, useEffect } from 'react';

const NEWS_URL =
  'http://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=1cbdee4328ff4e118798fe8218263488';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(NEWS_URL);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="card border-0 shadow-lg">
        <div className="card-body ml-5 mt-5">
          {news.map((item, key) => {
            const { title, description, author, url } = item;
            return (
              <div key={key} className="mb-4">
                <h3 className="bebas-font font-weight-bold" style={{ color: '#0C2C54' }}>
                  {title}
                </h3>
                <h4>{author}</h4>
                <p>{description}</p>
                <button
                  className="btn border-0 rounded-pill bebas-font app-buttons news-button"
                
                  onClick={() => window.open(url, '_blank')}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
