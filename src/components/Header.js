import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/Auth';

export const Header = ({ isAuthenticated, startLogout }) => {
    return(
    <div className="header">
    <div className="content-container">
        <Link className="header__link" to="/">Motive</Link>
        <Link className="header__link" to="/home">Find Help</Link>
        <Link className="header__link" to="/feedback">Feedback</Link>
        { !isAuthenticated && <Link className="header__link" to="/login">Login</Link> }
        <button className="header__link" onClick={startLogout}>Log Out</button>
    </div>
    </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);