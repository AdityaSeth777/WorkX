import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { useAuth } from '../AuthContext';

function BusinessDashboard() {
    const { currentUser } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobListings = await firestore
                .collection('jobListings')
                .where('postedBy', '==', currentUser.uid)
                .get();
            setJobs(jobListings.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchJobs();
    }, [currentUser]);

    const createJobListing = async (newJob) => {
        await firestore.collection('jobListings').add({
            ...newJob,
            postedBy: currentUser.uid,
        });
        setJobs([...jobs, newJob]);
    };

    return (
        <div>
            <h2>Welcome, {currentUser.displayName}</h2>
            <h3>Your Job Postings</h3>
            {jobs.map(job => (
                <div key={job.id}>
                    <h4>{job.title}</h4>
                    <p>{job.description}</p>
                </div>
            ))}
            {/* Form to create a new job */}
        </div>
    );
}

export default BusinessDashboard;
