import moment from 'moment';

const filteredHelpItems = (helpItems, filters) => {
    return helpItems.filter((helpItem) => {
            const toDateMoment = moment(helpItem.toDate)
            const filterByMatch =  !filters.filterBy ? true:  
                                   helpItem.description.toLowerCase()
                                   .includes(filters.filterBy.toLowerCase());

            const startDateMatch = filters.startDate ? 
                moment(filters.startDate).isSameOrBefore(toDateMoment, 'day') : 
                true
            
            const endDateMatch = filters.endDate ? 
                moment(filters.endDate).isSameOrAfter(toDateMoment, 'day') : 
                true

            return startDateMatch && endDateMatch && filterByMatch && helpItem.id;
        }).sort((a, b) => {
            if(filters.sortBy === 'fromDate'){
                return a.fromDate < b.fromDate ? 1 : -1
            }else if(filters.sortBy === 'toDate'){
                return a.toDate < b.toDate ? 1 : -1;
            }
        });
};

export default filteredHelpItems;