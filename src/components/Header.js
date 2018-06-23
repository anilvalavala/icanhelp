import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/Auth';

export const Header = ({ startLogout }) => {
    return(
    <div className="header">
        <Link className="header__link" to="/">Motive</Link>
        <Link className="header__link" to="/home">Find Help</Link>
        <Link className="header__link" to="/feedback">Feedback</Link>
        <Link className="header__link" to="/login">Login</Link>
        <button onClick={startLogout}>Log Out</button>
    </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);