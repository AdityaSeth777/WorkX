import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Use db instead of firestore
import { useAuth } from '../AuthContext';

function BusinessDashboard() {
    const { currentUser } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobListings = await db
                    .collection('jobListings')
                    .where('postedBy', '==', currentUser.uid)
                    .get();
                setJobs(jobListings.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching job listings: ", error);
            }
        };
        fetchJobs();
    }, [currentUser]);

    const createJobListing = async (newJob) => {
        try {
            const jobRef = await db.collection('jobListings').add({
                ...newJob,
                postedBy: currentUser.uid,
            });
            setJobs([...jobs, { id: jobRef.id, ...newJob }]);
        } catch (error) {
            console.error("Error creating job listing: ", error);
        }
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
            {/* Form to create a new job can be added here */}
        </div>
    );
}

export default BusinessDashboard;
