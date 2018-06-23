import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Test Header compoenent', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Test Header component to call startLogout on button click', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
});
