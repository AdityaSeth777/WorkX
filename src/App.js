// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import FreelancerDashboard from './pages/FreelancerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/freelancer-dashboard" component={FreelancerDashboard} />
          <Route path="/business-dashboard" component={BusinessDashboard} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
