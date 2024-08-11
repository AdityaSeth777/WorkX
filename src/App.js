import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Homepage';
import FreelancerDashboard from './pages/FreelancerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './AuthContext'; // Import the AuthProvider and useAuth
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <MainRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

function MainRoutes() {
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.userType === 'freelancer') {
        history.push('/freelancer-dashboard');
      } else if (currentUser.userType === 'business') {
        history.push('/business-dashboard');
      }
    } else {
      // Only redirect if the current route is not the homepage
      if (history.location.pathname !== '/') {
        history.push('/login');
      }
    }
  }, [currentUser, history]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/freelancer-dashboard" component={FreelancerDashboard} />
      <Route path="/business-dashboard" component={BusinessDashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}


export default App;
