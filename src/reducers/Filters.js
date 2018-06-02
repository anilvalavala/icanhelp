import moment from 'moment';

const defaultFiltersState = {
    filterBy: '',
    sortBy: 'fromDate',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = defaultFiltersState, action) => {
    switch(action.type){
        case 'FILTER_BY_TEXT':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortByDate
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default filtersReducer;
