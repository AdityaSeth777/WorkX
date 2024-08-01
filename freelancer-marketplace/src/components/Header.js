import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Freelance Marketplace</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/job-listings">Job Listings</Link>
            </nav>
        </header>
    );
}

export default Header;
