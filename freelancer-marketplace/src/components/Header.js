// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Freelance Marketplace</h1>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/profile" style={styles.link}>Profile</Link>
                <Link to="/job-listings" style={styles.link}>Job Listings</Link>
                <Link to="/login" style={styles.link}>Login</Link>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        textAlign: 'center',
    },
    title: {
        margin: '0',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
    },
    link: {
        color: '#fff',
        margin: '0 10px',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Header;
