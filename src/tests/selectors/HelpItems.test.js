import moment from 'moment';
import uuid from 'uuid';
import filteredHelpItems from '../../selectors/HelpItems';


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

test('Test filteredHelpItems selector. Test filter by text value', () => {
    const filters = {
        filterBy: 'K.G',
        sortBy: '',
        startDate: '',
        endDate: ''
    };
    const result = filteredHelpItems(helpItems, filters);
    expect(result).toEqual([helpItems[1]]);
});

test('Test filteredHelpItems selector. Test sortBy fromDate', () => {
    const filters = {
        filterBy: '',
        sortBy: 'fromDate',
        startDate: '',
        endDate: ''
    };
    const result = filteredHelpItems(helpItems, filters);
    expect(result).toEqual([helpItems[2], helpItems[1], helpItems[0]]);
});

test('Test filteredHelpItems selector. Test sortBy toDate', () => {
    const filters = {
        filterBy: '',
        sortBy: 'toDate',
        startDate: '',
        endDate: ''
    };
    const result = filteredHelpItems(helpItems, filters);
    expect(result).toEqual([helpItems[2], helpItems[1], helpItems[0]]);
});

test('Test filteredHelpItems selector. Test range filter', () => {
    const filters = {
        filterBy: '',
        sortBy: '',
        startDate: moment().add(1, 'days').valueOf(),
        endDate: moment().add(4, 'days').valueOf()
    };
    const result = filteredHelpItems(helpItems, filters);
    expect(result).toEqual([helpItems[0], helpItems[1]]);
});