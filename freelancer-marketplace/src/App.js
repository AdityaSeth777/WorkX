import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import JobListings from './pages/JobListings';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', position: 'relative'}}>
        <Header />
        <div style={{ paddingBottom: '50px'}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/job-listings" component={JobListings} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
