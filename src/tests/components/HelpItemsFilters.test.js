import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { HelpItemsFilters } from '../../components/HelpItemsFilters';
import { testFilters } from '../fixtures/TestFilters';

let onStartDateChangeSpy, 
    onEndDateChangeSpy, 
    onFocusChangeSpy, 
    onFilterByTextChangeSpy, 
    onSortByChangeSpy, 
    wrapper;

beforeEach(() => {
    onStartDateChangeSpy = jest.fn();
    onEndDateChangeSpy = jest.fn();
    onFocusChangeSpy = jest.fn();
    onFilterByTextChangeSpy = jest.fn();
    onSortByChangeSpy = jest.fn();
    wrapper = shallow(
        <HelpItemsFilters 
            filters={testFilters} 
            sortByDate={onSortByChangeSpy}
            filterByText={onFilterByTextChangeSpy}
            onFocusChange={onFocusChangeSpy}
            startDateFilter={onStartDateChangeSpy}
            endDateFilter={onEndDateChangeSpy}
        />
    );
});

test('Test HelpItemsFilters if it rendering properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpItemsFilters should handle text change correctly', () => {
    const value = 'test';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(onFilterByTextChangeSpy).toHaveBeenCalledWith(value);
});

test('Test HelpItemsFilters should handle sortBy change correctly', () => {
    const value = 'startDate';
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(onSortByChangeSpy).toHaveBeenCalledWith(value);
});

// test('Test HelpItemsFilters should handle start date change correctly', () => {
//     const startDate = moment(0).add(4, 'years');
//     const endDate = moment(0).add(8, 'years');
//     wrapper.find('DateRangePicker')
//            .at(0)
//            .prop('onDatesChange')({ startDate, endDate});
//     expect(onStartDateChangeSpy).toHaveBeenLastCalledWith(startDate);
//     expect(onEndDateChangeSpy).toHaveBeenLastCalledWith(endDate);
// });

