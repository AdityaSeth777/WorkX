// src/pages/Profile.js
import React from 'react';

function Profile() {
    // Sample profile data; replace with data from API or state
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        skills: 'Web Development, Graphic Design'
    };

    return (
        <div style={styles.container}>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Skills:</strong> {user.skills}</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        maxWidth: '600px',
        margin: 'auto',
    }
};

export default Profile;
