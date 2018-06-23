import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import helpItemsReducer from '../reducers/HelpItems';
import filtersReducer from '../reducers/Filters';
import authReducer from '../reducers/Auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const applicationStore = createStore(
    combineReducers({
        helpItems: helpItemsReducer,
        filters: filtersReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default applicationStore;