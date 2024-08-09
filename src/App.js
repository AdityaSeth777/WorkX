// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jobs" component={JobListings} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
