
const filterByText = (filterBy) => ({
    type: 'FILTER_BY_TEXT',
    filterBy
});

const sortByDate = (sortByDate) => ({
    type: 'SORT_BY_DATE',
    sortByDate
});

const startDateFilter = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const endDateFilter = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

export { filterByText, sortByDate, startDateFilter, endDateFilter }