import React from 'react';
import { shallow } from 'enzyme';
import { HelpItems } from '../../components/HelpItems';
import TestHelpItems from '../fixtures/TestHelpItems';

test('Test HelpItems component by passing HelpItems', () => {
    const wrapper = shallow(<HelpItems helpItems={TestHelpItems} />);
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpItems component without passing helpItems', () => {
    const wrapper = shallow(<HelpItems helpItems={[]} />);
    expect(wrapper).toMatchSnapshot();
});