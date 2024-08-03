import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>WorkX</h1>
              </header>
      <main>
        <section className="intro">
          <h2> Stay Home. Find Your Perfect Job.</h2>
          <p>
            Browse through thousands of job listings, apply to the ones that match your skills and interests,
            and take the next step in your career journey.
          </p>
        </section>
        <section className="widgets">
          <div className="widget weather">
            <h3>Weather Widget</h3>
            <p>Current weather: Sunny, 25°C</p>
          </div>
          <div className="widget news">
            <h3>News Feed</h3>
            <ul>
              <li>Job market trends in 2024</li>
              <li>Top skills employers are looking for</li>
              <li>How to ace your next job interview</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
