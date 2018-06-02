import React from 'react';
import { shallow } from 'enzyme';
import Feedback from '../../components/Feedback';

test('Test Feedback component', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper).toMatchSnapshot();
});
