import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <div className="header">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="/about">About</Link>
        <Link className="header__link" to="/feedback">Feedback</Link>
    </div>
    );
};

export default Header;