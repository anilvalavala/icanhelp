import uuid from 'uuid';
import moment from 'moment';

const TestHelpItems = [
    {
        id: '1',
        title: 'Food',
        description: 'Food available', 
        fromDate: moment(0).subtract(1, 'days').valueOf(), 
        toDate: moment(0).add(1, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    },
    {
        id: '2',
        title: 'books',
        description: 'K.G books', 
        fromDate: moment(0).add(1, 'days').valueOf(), 
        toDate: moment(0).add(3, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    },
    {
        id: '3',
        title: 'Clothes',
        description: 'Clothes', 
        fromDate: moment(0).add(4, 'days').valueOf(), 
        toDate: moment(0).add(6, 'days').valueOf(), 
        email: 'anilkumar.v@hotmail.com',
        phone: '9545947627'
    }
];

export default TestHelpItems;
