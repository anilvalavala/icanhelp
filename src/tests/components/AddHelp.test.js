import React from 'react';
import { shallow } from 'enzyme';
import { AddHelp } from '../../components/AddHelp';
import TestHelpItems from '../fixtures/TestHelpItems';

let addHelpItemSpy, historySpy, wrapper;

beforeEach(() => {
    addHelpItemSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddHelp addHelpItem={addHelpItemSpy} history={historySpy} />);
});

test('Test AddHelp component, if it is rendering correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Test AddHelp component, to check onSubmit', () => {
    wrapper.find('HelpForm').prop('onSubmit')(TestHelpItems[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addHelpItemSpy).toHaveBeenLastCalledWith(TestHelpItems[0]);
});