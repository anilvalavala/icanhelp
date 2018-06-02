import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import AppRouter from './routers/AppRouter';
import applicationStore from './store/ApplicationStore';
import filteredHelpItems from './selectors/HelpItems';
import { getHelpItem, addHelpItem } from './actions/HelpItems';
import { filterByText } from './actions/Filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const JSX = () => {
    return (
        <Provider store={applicationStore}>
            <AppRouter />
        </Provider>
    );
};

ReactDOM.render(<JSX />, document.getElementById('app'));
