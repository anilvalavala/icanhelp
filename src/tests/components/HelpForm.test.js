import React from 'react';
import { shallow } from 'enzyme';
import HelpForm from '../../components/HelpForm';
import TestHelpItems from '../fixtures/TestHelpItems';

test('Test HelpForm without data', () => {
    const wrapper = shallow(<HelpForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpForm with data', () => {
    const wrapper = shallow(<HelpForm helpItem={TestHelpItems[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpForm for error message, when submitted without valid data', () => {
    const wrapper = shallow(<HelpForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: ''
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('titleError').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpForm if given input for title field is set correctly', () => {
    const value = 'Test Title';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('title')).toBe(value);
});

test('Test HelForm if given input for description field is set correctly', () => {
    const value = 'Test Description';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Test HelpForm if given input for Email field is set correctly', () => {
    const value = 'anilkumar.v@hotmail.com';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
});

test('Test HelpForm for invalid Email', () => {
    const errorMessage = 'Email id is not valid'; 
    const value = 'ABC';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    //expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('emailError')).toBe(errorMessage);
});

test('Test HelpForm if given input for phone field is set correctly', () => {
    const value  = '9545947627';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('phone')).toBe(value);
});

test('Test HelpForm for invalid phone number', () => {
    const errorMessage = 'Phone number must start with 6/7/9 and should contain 10 digits';
    const value = 'ABC';
    const wrapper = shallow(<HelpForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('phoneError')).toBe(errorMessage);
});

//Using test spies to check whether form is submitted with proper values
test('Test HelpForm for valid data submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <HelpForm helpItem={TestHelpItems[0]} 
        onSubmit={onSubmitSpy} />
    );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('titleError')).toBe('');
    expect(wrapper.state('descriptionError')).toBe('');
    expect(wrapper.state('emailError')).toBe('');
    expect(wrapper.state('phoneError')).toBe('');
    expect(wrapper.state('dateRangeError')).toBe('');
    expect(wrapper.state('title')).toBe(TestHelpItems[0].title);
    expect(wrapper.state('description')).toBe(TestHelpItems[0].description);
    expect(wrapper.state('email')).toBe(TestHelpItems[0].email);
    expect(wrapper.state('phone')).toBe(TestHelpItems[0].phone);
    expect(wrapper.state('isPageInvalid')).toBe(false);
    expect(onSubmitSpy).toHaveBeenCalledWith(TestHelpItems[0]);
});

//Testing date controls using prop property
// test('Test HelpForm if given input for fromDate is set correctly', () => {
//     const now = 123;
//     const wrapper = shallow(<HelpForm />);
//     wrapper.find('SingleDatePicker').get(0).prop('onDateChange')(now);
//     //expect(wrapper.state('fromDate')).toEqual(now);
// });

// test('Test HelpForm for fromDate onFocusChange', () => {
//     const focused = true;
//     const wrapper = shallow(<HelpForm />);
//     wrapper.find('SingleDatePicker').at(0).prop('onFocusChange')({ focused });
//     expect(wrapper.state('fromDateFocused')).toBe(focused);
// });