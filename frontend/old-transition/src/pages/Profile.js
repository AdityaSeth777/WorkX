import React from 'react';
import { useAuth } from '../AuthContext';

function Profile() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {currentUser ? (
        <div>
          <p>Name: {currentUser.displayName}</p>
          <p>Email: {currentUser.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;
