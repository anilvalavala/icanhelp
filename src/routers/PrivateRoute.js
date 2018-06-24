import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1>Please login to view the content</h1>
                        <p className="box-layout__info">This page displays donations added by you as well as others</p>
                    </div>
                </div>
            )
        )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);