import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <header>


            <Link to="/">Home</Link>

            <Link to="/signup">Sign Up</Link>

            <Link to="/login">Login</Link>

        </header>
    );
};

export default Header;