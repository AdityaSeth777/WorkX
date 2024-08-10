import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { useAuth } from '../AuthContext';

function FreelancerDashboard() {
    const { currentUser } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobListings = await firestore.collection('jobListings').get();
            setJobs(jobListings.docs.map(doc => ({ id: doc.id, ...doc.data() })));
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
