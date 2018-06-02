import moment from 'moment';
import uuid from 'uuid';
import helpItemsReducer from '../../reducers/HelpItems';


const helpItems = [
    {
        id: uuid(),
        title: 'Food',
        description: 'Food available', 
        fromDate: moment().subtract(1, 'days').valueOf(), 
        toDate: moment().add(1, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    },
    {
        id: uuid(),
        title: 'books',
        description: 'K.G books', 
        fromDate: moment().add(1, 'days').valueOf(), 
        toDate: moment().add(3, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    },
    {
        id: uuid(),
        title: 'Clothes',
        description: 'Clothes', 
        fromDate: moment().add(4, 'days').valueOf(), 
        toDate: moment().add(6, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }
];


test('Test HelpItems Reducer: Get Help Item action', () => {
    const action = { 
        type: 'GET_HELP_ITEM',
        id: helpItems[2].id
    };
    const result = helpItemsReducer(helpItems, action);
    expect(result).toEqual([helpItems[2]]);
});

test('Test HelpItems Reducer: Add Help Item action', () => {
    const action = {
        type: 'ADD_HELP_ITEM',
        helpItem: {
            id: uuid(),
            title: 'test',
            description: 'test',
            fromDate: moment(0),
            toDate: moment(0),
            email: 'test@test.com',
            phone: '999999999'
        }
    };
    const result = helpItemsReducer(helpItems, action);
    expect(result).toEqual(
        [
            ...helpItems,
            action.helpItem
        ]
    );
});

test('Test HelpItems Reducer: Edit Help Item action', () => {
    const action = {
        type: 'EDIT_HELP_ITEM',
        helpItem: {
            id: helpItems[2].id,
            title: 'test',
            description: 'test',
            fromDate: moment(0),
            toDate: moment(0),
            email: 'test@test.com',
            phone: '999999999'
        }
    };
    const result = helpItemsReducer(helpItems, action);
    expect(result[2].description).toBe('test');
});

test('Test HelpItems Reducer: Delete Help Item action', () => {
    const action = {
        type: 'DELETE_HELP_ITEM',
        id: helpItems[2].id
    };

    const result = helpItemsReducer(helpItems, action);
    expect(result).toEqual([helpItems[0], helpItems[1]]);
});