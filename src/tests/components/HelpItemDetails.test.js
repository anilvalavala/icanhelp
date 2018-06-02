import React from 'react';
import { shallow } from 'enzyme';
import HelpItemDetails from '../../components/HelpItemDetails';
import TestHelpItems from '../fixtures/TestHelpItems';

test('Test HelpItemDetails component by passing a test help item', () => {
    const wrapper = shallow(<HelpItemDetails helpItem={TestHelpItems[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Test HelpItemDetails component without passing a test help item', () => {
    const wrapper = shallow(<HelpItemDetails helpItem={{}} />);
    expect(wrapper).toMatchSnapshot();
});
