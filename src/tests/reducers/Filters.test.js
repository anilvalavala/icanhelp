import moment from 'moment';
import filtersReducer from '../../reducers/Filters';

const defaultFiltersState = {
    filterBy: '',
    sortBy: 'fromDate',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('Test Filters Reducer: Filter By Text should be set properly', () => {
    const action = {
        type: 'FILTER_BY_TEXT',
        filterBy: 'ABC'
    };
    const result = filtersReducer(defaultFiltersState, action);
    expect(result).toEqual({
        ...defaultFiltersState,
        filterBy: action.filterBy
    });
});

test('Test Filters Reducer: Sort By should be set properly', () => {
    const action = {
        type: 'SORT_BY_DATE',
        sortByDate: 'toDate'
    };
    const result = filtersReducer(defaultFiltersState, action);
    expect(result).toEqual({
        ...defaultFiltersState,
        sortBy: action.sortByDate
    });
});

test('Test Filters Reducer: Set start date properly', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };
    const result = filtersReducer(defaultFiltersState, action);
    expect(result).toEqual({
        ...defaultFiltersState,
        startDate: action.startDate
    });
});

test('Test filters Reducer: Set end date properly', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };
    const result = filtersReducer(defaultFiltersState, action);
    expect(result).toEqual({
        ...defaultFiltersState,
        endDate: action.endDate
    });
});