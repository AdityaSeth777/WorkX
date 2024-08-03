import React from 'react';

function Profile() {
    // Mocked user data for John Doe
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        skills: 'Web Development, Graphic Design'
    };

    return (
        <main style={{ padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ color: '#61dafb' }}>Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Skills:</strong> {user.skills}</p>
        </main>
    );
}

export default Profile;
