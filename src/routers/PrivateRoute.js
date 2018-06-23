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
                <div>
                    <h1>Please login to view the content</h1>
                    <p>This page displays help added by you as well as others</p>
                </div>
            )
        )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);