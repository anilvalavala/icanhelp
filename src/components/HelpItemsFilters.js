import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { filterByText, sortByDate, startDateFilter, endDateFilter } from '../actions/Filters';

export class HelpItemsFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: props.filters.startDate,
            endDate: props.filters.endDate,
            calendarFocused: null
        }
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.setState(() => ({
            startDate,
            endDate
        }));
        this.props.startDateFilter(startDate);
        this.props.endDateFilter(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onFilterByTextChange = (e) => {
        this.props.filterByText(e.target.value);
    };

    onSortByChange = (e) => {
        this.props.sortByDate(e.target.value);
    };

    render(){
        return(
            <div>
                Filter By: 
                    <input type="text" value={this.props.filters.filterBy} 
                       onChange={this.onFilterByTextChange} />
                Sort By: 
                    <select onChange={this.onSortByChange}>
                       <option value='fromDate'>From Date</option>
                       <option value='toDate'>To Date</option>
                    </select>
                    <br />
                Show items between:
                    <DateRangePicker
                        startDate={moment(this.state.startDate)}
                        startDateId="helpItemsStartDate"
                        endDate={moment(this.state.endDate)}
                        endDateId="helpItemsEndDate"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={false}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        keepOpenOnDateSelect={false}
                    />
            </div>
        );
    }
}

const MapStateToProps = (state) => ({
    filters: state.filters
});

const MapDispatchToProps = (dispatch) => ({
    startDateFilter: (startDate) => { dispatch(startDateFilter(startDate)) },
    endDateFilter: (endDate) => { dispatch(endDateFilter(endDate)) },
    filterByText: (filterBy) => { dispatch(filterByText(filterBy)) },
    sortByDate: (sortBy) => { dispatch(sortByDate(sortBy)) }
});

export default connect(MapStateToProps, MapDispatchToProps)(HelpItemsFilters);