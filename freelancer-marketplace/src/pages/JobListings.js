// src/pages/JobListings.js
import React from 'react';

function JobListings() {
    // Sample job data; replace with data from API or state
    const jobs = [
        { id: 1, title: 'Frontend Developer Needed', description: 'Looking for an experienced frontend developer to build a responsive website.' },
        { id: 2, title: 'Graphic Designer Required', description: 'Need a graphic designer for logo and brand identity design.' }
    ];

    return (
        <div style={styles.container}>
            <h2>Job Listings</h2>
            {jobs.map(job => (
                <div key={job.id} style={styles.jobListing}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <button style={styles.button}>Apply Now</button>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    jobListing: {
        backgroundColor: '#fff',
        padding: '15px',
        marginBottom: '10px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    }
};

export default JobListings;
