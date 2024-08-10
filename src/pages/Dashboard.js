// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the path according to your project structure

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <img src={user.photoURL} alt={user.displayName} />
          <h2>Welcome, {user.displayName}</h2>
          {/* Other dashboard contents */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
