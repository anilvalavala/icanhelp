import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import helpItemsReducer from '../reducers/HelpItems';
import filtersReducer from '../reducers/Filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const applicationStore = createStore(
    combineReducers({
        helpItems: helpItemsReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default applicationStore;