import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import db from firebase
import { useAuth } from '../AuthContext';

function FreelancerDashboard() {
    const { currentUser } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobListings = await db.collection('jobListings').get();
                setJobs(jobListings.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching job listings: ", error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Welcome, {currentUser.displayName}</h2>
            <h3>Available Jobs</h3>
            {jobs.map(job => (
                <div key={job.id}>
                    <h4>{job.title}</h4>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FreelancerDashboard;
