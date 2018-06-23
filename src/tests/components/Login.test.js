import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('Test Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});

test('Test Login component to click on login button', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<Login startLogin={startLoginSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});