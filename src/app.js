import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import applicationStore from './store/ApplicationStore';
import { startGetAllHelpItems } from './actions/HelpItems';
import { login, logout } from './actions/Auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../firebase/firebase.js';
import { firebase } from '../firebase/firebase.js';

const JSX = () => {
    return (
        <Provider store={applicationStore}>
            <AppRouter />
        </Provider>
    );
};

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(<JSX />, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        applicationStore.dispatch(login(user.uid));
        applicationStore.dispatch(startGetAllHelpItems()).then(() => {
            renderApp();
            if(history.location.pathname === '/login') {
                history.push('/home');
            }
        });
    }   
    else{
        applicationStore.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

