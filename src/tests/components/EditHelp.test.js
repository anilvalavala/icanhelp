import React from 'react';
import { shallow } from 'enzyme';
import { EditHelp } from '../../components/EditHelp';
import TestHelpItems from '../fixtures/TestHelpItems';

let editHelpItemSpy, historySpy, wrapper;
beforeEach(() => {
    editHelpItemSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditHelp helpItem={TestHelpItems[0]} editHelpItem={editHelpItemSpy} history={historySpy} />);
});

test('Test EditHelp component to see if it is rendering correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Test EditHelp component to see if it is being called with required parameters', () => {
    wrapper.find('HelpForm').prop('onSubmit')(TestHelpItems[0]);
    expect(editHelpItemSpy).toHaveBeenLastCalledWith(TestHelpItems[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});