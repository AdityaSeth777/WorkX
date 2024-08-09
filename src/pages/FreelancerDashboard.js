// src/pages/FreelancerDashboard.js

import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import './FreelancerDashboard.css';

const FreelancerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch('/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  const applyForJob = (jobId) => {
    fetch(`/jobs/apply/${jobId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentUser?.token}`
      }
    }).then(res => res.json())
      .then(data => alert(data.message));
  };

  return (
    <div className="freelancer-dashboard">
      <h2>Available Jobs</h2>
      <div className="job-listings">
        {jobs.map(job => (
          <div key={job._id} className="job">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => applyForJob(job._id)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
