import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

test('Test About component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
});