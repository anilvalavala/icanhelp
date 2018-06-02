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


applicationStore.dispatch(addHelpItem(
    {
        id: uuid(),
        title: 'books',
        description: 'K.G books', 
        fromDate: 1, 
        toDate: 321, 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }));

const newItem = applicationStore.dispatch(addHelpItem(
    {
        id: uuid(),
        title: 'food',
        description: 'vegetarian food', 
        fromDate: 11, 
        toDate: 50, 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }));

const state = applicationStore.getState();
console.log(filteredHelpItems(state.helpItems, state.filters));

const JSX = () => {
    return (
        <Provider store={applicationStore}>
            <AppRouter />
        </Provider>
    );
};

ReactDOM.render(<JSX />, document.getElementById('app'));
