import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const defaultHelpItemsState = [];

const helpItemsReducer = (state = defaultHelpItemsState, action) => {
    switch(action.type)
    {
        case 'ADD_ITEM':
            return [
                ...state,
                action.helpItem
            ];
        case 'DELETE_ITEM':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

const defaultFiltersState = {
    title: '',
    sortBy: 'startDate',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = defaultFiltersState, action) => {
    switch(action.type)
    {
        default: 
            return state;
    }
}

const store = createStore(
    combineReducers({
      helpItems: helpItemsReducer,
      filters: filtersReducer  
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

//Add help item action generator
const addHelpItem = (
    { 
        description = '',
        fromDate = undefined,
        toDate = undefined,
        title = ''
    }
) => ({
    type: 'ADD_ITEM',
    helpItem: {
        id: uuid(),
        description,
        fromDate,
        toDate,
        title
    }
});

const newItem = store.dispatch(addHelpItem({
    description: 'New Item',
    fromDate: undefined,
    toDate: undefined,
    title: 'New Test Item'
}));

const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    id
});

store.dispatch(deleteItem(newItem.helpItem.id))

const demoStore = {
    helpItems: [
        {
            id: 'abc',
            description: 'First test item',
            fromDate: undefined,
            toDate: undefined,
            title: 'Test Item'
        }
    ],
    filters: {
        title: 'test',  //filter items containing given test
        sortBy: undefined, //arrange in ascending or descending order using fromDate or toDate
        startDate: undefined,  //Display only those items between given start and end dates
        endDate: undefined
    }
}