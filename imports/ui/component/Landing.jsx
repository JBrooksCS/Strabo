import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Landing({ currentUser }) {
    const [user, setUser] = useState(currentUser)

    useEffect(() => setUser(currentUser), [currentUser])

    if (user) {
      return <Redirect to="/dashboard" />
    }
    return (
        <div>
            <h1>Landing Page (not logged in)</h1>
        </div>
    );
}

export default Landing;
