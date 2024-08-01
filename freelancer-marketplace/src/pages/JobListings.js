import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function JobListings() {
    const [jobs, setJobs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // Fetching job data from joblist.json
        fetch('/joblist.json')
            .then(response => response.json())
            .then(data => setJobs(data.jobs));
    }, []);

    const handleApply = (jobId) => {
        history.push(`/apply/${jobId}`);
    };

    return (
        <main style={{ padding: '20px', backgroundColor: '#282c34', color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ color: '#61dafb' }}>Job Listings</h2>
            {jobs.map(job => (
                <div key={job.id} style={{ backgroundColor: '#333', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <button onClick={() => handleApply(job.id)} style={{ backgroundColor: '#61dafb', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Apply Now</button>
                </div>
            ))}
        </main>
    );
}

export default JobListings;
