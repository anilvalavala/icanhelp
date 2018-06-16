import React from 'react';
import { shallow } from 'enzyme';
import { AddHelp } from '../../components/AddHelp';
import TestHelpItems from '../fixtures/TestHelpItems';

let startAddHelpItemSpy, historySpy, wrapper;

beforeEach(() => {
    startAddHelpItemSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddHelp startAddHelpItem={startAddHelpItemSpy} history={historySpy} />);
});

test('Test AddHelp component, if it is rendering correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Test AddHelp component, to check onSubmit', () => {
    wrapper.find('HelpForm').prop('onSubmit')(TestHelpItems[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddHelpItemSpy).toHaveBeenLastCalledWith(TestHelpItems[0]);
});