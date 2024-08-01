import React from 'react';
import { useParams } from 'react-router-dom';

function ApplyPage() {
    const { jobId } = useParams();

    return (
        <main style={{ padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ color: '#61dafb' }}>Apply for Job ID: {jobId}</h2>
            <p>Job application form goes here...</p>
        </main>
    );
}

export default ApplyPage;
