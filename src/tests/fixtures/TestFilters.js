import moment from 'moment';

const testFilters = {
    filterBy: 'test',
    sortBy: 'fromDate',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export { testFilters };