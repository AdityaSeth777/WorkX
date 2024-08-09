import React, { useEffect, useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=YOUR_API_KEY&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=jobs&apiKey=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then(response => response.json())
      .then(data => setRates(data.rates));
  }, []);

  return (
    <div className="homepage">
      <section className="weather">
        <h2>Weather</h2>
        {weather && (
          <p>{weather.main.temp}°C in {weather.name}</p>
        )}
      </section>

      <section className="news">
        <h2>Job-Related News</h2>
        {news.map((article, index) => (
          <div key={index} className="news-article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </section>

      <section className="currency">
        <h2>Currency Conversion</h2>
        <p>1 USD = {rates.INR} INR</p>
        {/* Add more conversions as needed */}
      </section>
    </div>
  );
};

export default Homepage;
