import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { postJob } from '..'; // Assuming you have an API handler for posting jobs
import './BusinessDashboard.css';

const BusinessDashboard = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobDetails = {
      title: e.target.title.value,
      description: e.target.description.value,
      salary: e.target.salary.value,
      currency: e.target.currency.value,
      location: e.target.location.value,
      type: e.target.type.value,
    };
    postJob(jobDetails);
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.displayName}</h1>
      <form onSubmit={handleSubmit} className="job-form">
        <input type="text" name="title" placeholder="Job Title" required />
        <textarea name="description" placeholder="Job Description" required></textarea>
        <input type="number" name="salary" placeholder="Salary" required />
        <select name="currency" required>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
        <input type="text" name="location" placeholder="Location" required />
        <select name="type" required>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default BusinessDashboard;
