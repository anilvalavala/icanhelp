import moment from 'moment';
import { 
    filterByText, 
    sortByDate, 
    startDateFilter, 
    endDateFilter 
} from '../../actions/Filters';

test('Test filterByText action', () => {
    const result = filterByText('books');
    expect(result).toEqual({
        type: 'FILTER_BY_TEXT',
        filterBy: 'books'
    });
});

test('Test sortByDate action', () => {
    const result = sortByDate('fromDate');
    expect(result).toEqual({
        type: 'SORT_BY_DATE',
        sortByDate: 'fromDate'
    });
});

test('Test startDateFilter action', () => {
    const result = startDateFilter(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Test endDateFilter action', () => {
    const result = endDateFilter(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});