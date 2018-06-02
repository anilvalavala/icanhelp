import { createStore, combineReducers } from 'redux';
import helpItemsReducer from '../reducers/HelpItems';
import filtersReducer from '../reducers/Filters';

const applicationStore = createStore(
    combineReducers({
        helpItems: helpItemsReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default applicationStore;