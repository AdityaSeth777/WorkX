import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ApplyPage from './pages/ApplyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';  // Corrected import

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/job-listings" component={JobListings} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/apply/:id" component={ApplyPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
