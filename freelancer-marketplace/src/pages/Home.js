// src/pages/Home.js
import React from 'react';

function Home() {
    return (
        <div style={styles.container}>
            <h2>Welcome to the Freelance Marketplace</h2>
            <p>Find the best freelance jobs and hire top talent for your projects.</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    }
};

export default Home;
